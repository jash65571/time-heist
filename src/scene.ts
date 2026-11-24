import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

export interface SceneController {
  /** Pointer position in normalized viewport coordinates, from -1 to 1. */
  setPointer(x: number, y: number): void
  setReducedMotion(reduced: boolean): void
  dispose(): void
}

/** The sculpture is decorative; the real interface remains accessible HTML. */
export function createScene(container: HTMLElement): SceneController {
  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
      failIfMajorPerformanceCaveat: true,
    })
  } catch {
    container.dataset.renderState = 'fallback'
    return { setPointer() {}, setReducedMotion() {}, dispose() {} }
  }

  const canvas = renderer.domElement
  canvas.setAttribute('aria-hidden', 'true')
  canvas.style.cssText = 'display:block;width:100%;height:100%;pointer-events:none;'
  container.appendChild(canvas)
  container.dataset.renderState = 'webgl'
  renderer.setClearColor(0x12141c, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.12

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60)
  camera.position.set(0, 0, 16)

  // Softbox reflections give the surfaces their shape without external HDR files.
  const pmrem = new THREE.PMREMGenerator(renderer)
  const room = new RoomEnvironment()
  let environment: THREE.WebGLRenderTarget | undefined
  try {
    environment = pmrem.fromScene(room, 0.04, 0.1, 100)
    scene.environment = environment.texture
  } catch {
    // Some low-power GPUs can render the scene but cannot precompute an HDR map.
    // Direct lighting still provides a complete, usable presentation.
  } finally {
    room.dispose()
    pmrem.dispose()
  }

  scene.add(new THREE.HemisphereLight(0xe0e9ff, 0x12131c, 2.2))
  const softbox = new THREE.DirectionalLight(0xffffff, 3.1)
  softbox.position.set(-5, 7, 8)
  scene.add(softbox)
  const blueBounce = new THREE.DirectionalLight(0x667bff, 1.8)
  blueBounce.position.set(7, 0, 5)
  scene.add(blueBounce)

  const cobalt = new THREE.MeshPhysicalMaterial({
    color: 0x2136ff,
    metalness: 0.24,
    roughness: 0.18,
    clearcoat: 0.95,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.2,
  })
  const porcelain = new THREE.MeshPhysicalMaterial({
    color: 0xf2f3fa,
    metalness: 0.06,
    roughness: 0.21,
    clearcoat: 0.6,
    envMapIntensity: 0.9,
  })
  const graphite = new THREE.MeshPhysicalMaterial({
    color: 0x242630,
    metalness: 0.35,
    roughness: 0.3,
    clearcoat: 0.5,
    envMapIntensity: 0.65,
  })

  const largeGeometry = new THREE.TorusGeometry(3.8, 0.64, 24, 112)
  const smallGeometry = new THREE.TorusGeometry(2.12, 0.49, 24, 80)
  const tallGeometry = new THREE.TorusGeometry(3.9, 0.62, 24, 96)

  const lowerSculpture = new THREE.Group()
  const blueLoop = new THREE.Mesh(largeGeometry, cobalt)
  blueLoop.rotation.set(0.28, -0.35, -0.42)
  lowerSculpture.add(blueLoop)

  const whiteLoop = new THREE.Mesh(smallGeometry, porcelain)
  whiteLoop.position.set(0.35, -0.6, 1.5)
  whiteLoop.rotation.set(0.35, -0.55, -0.75)
  lowerSculpture.add(whiteLoop)
  scene.add(lowerSculpture)

  const upperSculpture = new THREE.Group()
  const darkLoop = new THREE.Mesh(tallGeometry, graphite)
  darkLoop.scale.set(0.68, 1.2, 1)
  darkLoop.rotation.set(-0.15, 0.45, -0.22)
  upperSculpture.add(darkLoop)
  scene.add(upperSculpture)

  let frame = 0
  let disposed = false
  let contextLost = false
  let inView = true
  let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let pointerX = 0
  let pointerY = 0
  let smoothX = 0
  let smoothY = 0
  const start = performance.now()
  const canAnimate = () => !disposed && !contextLost && inView && !document.hidden

  function draw(now = performance.now()) {
    frame = 0
    if (!canAnimate()) return
    const elapsed = reducedMotion ? 0 : (now - start) / 1000
    smoothX += ((reducedMotion ? 0 : pointerX) - smoothX) * 0.045
    smoothY += ((reducedMotion ? 0 : pointerY) - smoothY) * 0.045
    lowerSculpture.rotation.y = Math.sin(elapsed * 0.12) * 0.045 + smoothX * 0.055
    lowerSculpture.rotation.z = Math.sin(elapsed * 0.1) * 0.025 - smoothY * 0.025
    upperSculpture.rotation.y = Math.sin(elapsed * 0.08 + 1) * 0.035 - smoothX * 0.035
    upperSculpture.rotation.z = Math.sin(elapsed * 0.1) * 0.018
    camera.position.x = smoothX * 0.16
    camera.position.y = -smoothY * 0.11
    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
    if (!reducedMotion) frame = requestAnimationFrame(draw)
  }

  function schedule() {
    if (canAnimate() && !frame) frame = requestAnimationFrame(draw)
  }

  function pause() {
    cancelAnimationFrame(frame)
    frame = 0
  }

  function resize() {
    const { width, height } = container.getBoundingClientRect()
    if (!width || !height || disposed) return
    const narrow = width < 700
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, narrow ? 1.2 : 1.5))
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    const halfHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z
    const halfWidth = halfHeight * camera.aspect
    lowerSculpture.position.set(-halfWidth * (narrow ? 0.95 : 0.78), -halfHeight * 1.05, -0.4)
    lowerSculpture.scale.setScalar(narrow ? 0.72 : 1.12)
    upperSculpture.position.set(halfWidth * 0.68, halfHeight * 0.61, -3.3)
    upperSculpture.scale.setScalar(narrow ? 0.78 : 1.1)
    schedule()
  }

  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    inView = entry?.isIntersecting ?? true
    if (inView) schedule()
    else pause()
  }, { rootMargin: '100px' })
  intersectionObserver.observe(container)

  function visibilityChanged() {
    if (document.hidden) pause()
    else schedule()
  }
  function lost(event: Event) {
    event.preventDefault()
    contextLost = true
    container.dataset.renderState = 'fallback'
    pause()
  }
  function restored() {
    contextLost = false
    container.dataset.renderState = 'webgl'
    schedule()
  }
  document.addEventListener('visibilitychange', visibilityChanged)
  canvas.addEventListener('webglcontextlost', lost)
  canvas.addEventListener('webglcontextrestored', restored)
  resize()

  return {
    setPointer(x, y) {
      pointerX = THREE.MathUtils.clamp(x, -1, 1)
      pointerY = THREE.MathUtils.clamp(y, -1, 1)
      if (!reducedMotion) schedule()
    },
    setReducedMotion(reduced) {
      reducedMotion = reduced
      smoothX = 0
      smoothY = 0
      pause()
      schedule()
    },
    dispose() {
      disposed = true
      pause()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', visibilityChanged)
      canvas.removeEventListener('webglcontextlost', lost)
      canvas.removeEventListener('webglcontextrestored', restored)
      for (const geometry of [largeGeometry, smallGeometry, tallGeometry]) geometry.dispose()
      for (const material of [cobalt, porcelain, graphite]) material.dispose()
      environment?.dispose()
      renderer.dispose()
      canvas.remove()
    },
  }
}
