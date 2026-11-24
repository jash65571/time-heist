(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function LM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ad={exports:{}},sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function OM(){if(rv)return sl;rv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return sl.Fragment=e,sl.jsx=a,sl.jsxs=a,sl}var sv;function PM(){return sv||(sv=1,ad.exports=OM()),ad.exports}var J=PM(),rd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function zM(){if(ov)return fe;ov=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),y=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function B(I,ot,W){this.props=I,this.context=ot,this.refs=x,this.updater=W||C}B.prototype.isReactComponent={},B.prototype.setState=function(I,ot){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ot,"setState")},B.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function z(){}z.prototype=B.prototype;function U(I,ot,W){this.props=I,this.context=ot,this.refs=x,this.updater=W||C}var X=U.prototype=new z;X.constructor=U,M(X,B.prototype),X.isPureReactComponent=!0;var H=Array.isArray;function O(){}var Y={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(I,ot,W){var et=W.ref;return{$$typeof:o,type:I,key:ot,ref:et!==void 0?et:null,props:W}}function V(I,ot){return w(I.type,ot,I.props)}function st(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ht(I){var ot={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(W){return ot[W]})}var xt=/\/+/g;function dt(I,ot){return typeof I=="object"&&I!==null&&I.key!=null?ht(""+I.key):ot.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(ot){I.status==="pending"&&(I.status="fulfilled",I.value=ot)},function(ot){I.status==="pending"&&(I.status="rejected",I.reason=ot)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function rt(I,ot,W,et,At){var Nt=typeof I;(Nt==="undefined"||Nt==="boolean")&&(I=null);var Tt=!1;if(I===null)Tt=!0;else switch(Nt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(I.$$typeof){case o:case e:Tt=!0;break;case v:return Tt=I._init,rt(Tt(I._payload),ot,W,et,At)}}if(Tt)return At=At(I),Tt=et===""?"."+dt(I,0):et,H(At)?(W="",Tt!=null&&(W=Tt.replace(xt,"$&/")+"/"),rt(At,ot,W,"",function(P){return P})):At!=null&&(st(At)&&(At=V(At,W+(At.key==null||I&&I.key===At.key?"":(""+At.key).replace(xt,"$&/")+"/")+Tt)),ot.push(At)),1;Tt=0;var Rt=et===""?".":et+":";if(H(I))for(var Bt=0;Bt<I.length;Bt++)et=I[Bt],Nt=Rt+dt(et,Bt),Tt+=rt(et,ot,W,Nt,At);else if(Bt=b(I),typeof Bt=="function")for(I=Bt.call(I),Bt=0;!(et=I.next()).done;)et=et.value,Nt=Rt+dt(et,Bt++),Tt+=rt(et,ot,W,Nt,At);else if(Nt==="object"){if(typeof I.then=="function")return rt(q(I),ot,W,et,At);throw ot=String(I),Error("Objects are not valid as a React child (found: "+(ot==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ot)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function j(I,ot,W){if(I==null)return I;var et=[],At=0;return rt(I,et,"","",function(Nt){return ot.call(W,Nt,At++)}),et}function yt(I){if(I._status===-1){var ot=I._result,W=ot();W.then(function(et){(I._status===0||I._status===-1)&&(I._status=1,I._result=et,W.status===void 0&&(W.status="fulfilled",W.value=et))},function(et){(I._status===0||I._status===-1)&&(I._status=2,I._result=et,W.status===void 0&&(W.status="rejected",W.reason=et))}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var Et=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ot=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ot))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Vt(I){var ot=Y.T,W={};W.types=ot!==null?ot.types:null,Y.T=W;try{var et=I(),At=Y.S;At!==null&&At(W,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(O,Et)}catch(Nt){Et(Nt)}finally{ot!==null&&W.types!==null&&(ot.types=W.types),Y.T=ot}}function ie(I){var ot=Y.T;if(ot!==null){var W=ot.types;W===null?ot.types=[I]:W.indexOf(I)===-1&&W.push(I)}else Vt(ie.bind(null,I))}var pe={map:j,forEach:function(I,ot,W){j(I,function(){ot.apply(this,arguments)},W)},count:function(I){var ot=0;return j(I,function(){ot++}),ot},toArray:function(I){return j(I,function(ot){return ot})||[]},only:function(I){if(!st(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return fe.Activity=p,fe.Children=pe,fe.Component=B,fe.Fragment=a,fe.Profiler=u,fe.PureComponent=U,fe.StrictMode=s,fe.Suspense=_,fe.ViewTransition=S,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,fe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return Y.H.useMemoCache(I)}},fe.addTransitionType=ie,fe.cache=function(I){return function(){return I.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(I,ot,W){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var et=M({},I.props),At=I.key;if(ot!=null)for(Nt in ot.key!==void 0&&(At=""+ot.key),ot)!D.call(ot,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&ot.ref===void 0||(et[Nt]=ot[Nt]);var Nt=arguments.length-2;if(Nt===1)et.children=W;else if(1<Nt){for(var Tt=Array(Nt),Rt=0;Rt<Nt;Rt++)Tt[Rt]=arguments[Rt+2];et.children=Tt}return w(I.type,At,et)},fe.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},fe.createElement=function(I,ot,W){var et,At={},Nt=null;if(ot!=null)for(et in ot.key!==void 0&&(Nt=""+ot.key),ot)D.call(ot,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(At[et]=ot[et]);var Tt=arguments.length-2;if(Tt===1)At.children=W;else if(1<Tt){for(var Rt=Array(Tt),Bt=0;Bt<Tt;Bt++)Rt[Bt]=arguments[Bt+2];At.children=Rt}if(I&&I.defaultProps)for(et in Tt=I.defaultProps,Tt)At[et]===void 0&&(At[et]=Tt[et]);return w(I,Nt,At)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(I){return{$$typeof:h,render:I}},fe.isValidElement=st,fe.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:yt}},fe.memo=function(I,ot){return{$$typeof:m,type:I,compare:ot===void 0?null:ot}},fe.startTransition=Vt,fe.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},fe.use=function(I){return Y.H.use(I)},fe.useActionState=function(I,ot,W){return Y.H.useActionState(I,ot,W)},fe.useCallback=function(I,ot){return Y.H.useCallback(I,ot)},fe.useContext=function(I){return Y.H.useContext(I)},fe.useDebugValue=function(){},fe.useDeferredValue=function(I,ot){return Y.H.useDeferredValue(I,ot)},fe.useEffect=function(I,ot){return Y.H.useEffect(I,ot)},fe.useEffectEvent=function(I){return Y.H.useEffectEvent(I)},fe.useId=function(){return Y.H.useId()},fe.useImperativeHandle=function(I,ot,W){return Y.H.useImperativeHandle(I,ot,W)},fe.useInsertionEffect=function(I,ot){return Y.H.useInsertionEffect(I,ot)},fe.useLayoutEffect=function(I,ot){return Y.H.useLayoutEffect(I,ot)},fe.useMemo=function(I,ot){return Y.H.useMemo(I,ot)},fe.useOptimistic=function(I,ot){return Y.H.useOptimistic(I,ot)},fe.useReducer=function(I,ot,W){return Y.H.useReducer(I,ot,W)},fe.useRef=function(I){return Y.H.useRef(I)},fe.useState=function(I){return Y.H.useState(I)},fe.useSyncExternalStore=function(I,ot,W){return Y.H.useSyncExternalStore(I,ot,W)},fe.useTransition=function(){return Y.H.useTransition()},fe.version="19.3.1",fe}var lv;function Ip(){return lv||(lv=1,rd.exports=zM()),rd.exports}var ue=Ip();const IM=LM(ue);var sd={exports:{}},ol={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function BM(){return uv||(uv=1,(function(o){function e(q,rt){var j=q.length;q.push(rt);t:for(;0<j;){var yt=j-1>>>1,Et=q[yt];if(0<u(Et,rt))q[yt]=rt,q[j]=Et,j=yt;else break t}}function a(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var rt=q[0],j=q.pop();if(j!==rt){q[0]=j;t:for(var yt=0,Et=q.length,Vt=Et>>>1;yt<Vt;){var ie=2*(yt+1)-1,pe=q[ie],I=ie+1,ot=q[I];if(0>u(pe,j))I<Et&&0>u(ot,pe)?(q[yt]=ot,q[I]=j,yt=I):(q[yt]=pe,q[ie]=j,yt=ie);else if(I<Et&&0>u(ot,j))q[yt]=ot,q[I]=j,yt=I;else break t}}return rt}function u(q,rt){var j=q.sortIndex-rt.sortIndex;return j!==0?j:q.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var _=[],m=[],v=1,p=null,S=3,y=!1,b=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function U(q){for(var rt=a(m);rt!==null;){if(rt.callback===null)s(m);else if(rt.startTime<=q)s(m),rt.sortIndex=rt.expirationTime,e(_,rt);else break;rt=a(m)}}function X(q){if(C=!1,U(q),!b)if(a(_)!==null)b=!0,H||(H=!0,st());else{var rt=a(m);rt!==null&&dt(X,rt.startTime-q)}}var H=!1,O=-1,Y=5,D=-1;function w(){return M?!0:!(o.unstable_now()-D<Y)}function V(){if(M=!1,H){var q=o.unstable_now();D=q;var rt=!0;try{t:{b=!1,C&&(C=!1,B(O),O=-1),y=!0;var j=S;try{e:{for(U(q),p=a(_);p!==null&&!(p.expirationTime>q&&w());){var yt=p.callback;if(typeof yt=="function"){p.callback=null,S=p.priorityLevel;var Et=yt(p.expirationTime<=q);if(q=o.unstable_now(),typeof Et=="function"){p.callback=Et,U(q),rt=!0;break e}p===a(_)&&s(_),U(q)}else s(_);p=a(_)}if(p!==null)rt=!0;else{var Vt=a(m);Vt!==null&&dt(X,Vt.startTime-q),rt=!1}}break t}finally{p=null,S=j,y=!1}rt=void 0}}finally{rt?st():H=!1}}}var st;if(typeof z=="function")st=function(){z(V)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,xt=ht.port2;ht.port1.onmessage=V,st=function(){xt.postMessage(null)}}else st=function(){x(V,0)};function dt(q,rt){O=x(function(){q(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(q){switch(S){case 1:case 2:case 3:var rt=3;break;default:rt=S}var j=S;S=rt;try{return q()}finally{S=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,rt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var j=S;S=q;try{return rt()}finally{S=j}},o.unstable_scheduleCallback=function(q,rt,j){var yt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,q){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,q={id:v++,callback:rt,priorityLevel:q,startTime:j,expirationTime:Et,sortIndex:-1},j>yt?(q.sortIndex=j,e(m,q),a(_)===null&&q===a(m)&&(C?(B(O),O=-1):C=!0,dt(X,j-yt))):(q.sortIndex=Et,e(_,q),b||y||(b=!0,H||(H=!0,st()))),q},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(q){var rt=S;return function(){var j=S;S=rt;try{return q.apply(this,arguments)}finally{S=j}}}})(ld)),ld}var cv;function FM(){return cv||(cv=1,od.exports=BM()),od.exports}var ud={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function HM(){if(fv)return Un;fv=1;var o=Ip();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,p,S){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:y===d?d:""+y,children:v,containerInfo:p,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(v){return{$$typeof:f,_reason:v}},Un.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return h(v,p,null,S)},Un.flushSync=function(v){var p=_.T,S=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=p,s.p=S,s.d.f()}},Un.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Un.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Un.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,y=m(S,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:C}):S==="script"&&s.d.X(v,{crossOrigin:y,integrity:b,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=m(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},Un.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,y=m(S,p.crossOrigin);s.d.L(v,S,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=m(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},Un.requestFormReset=function(v){s.d.r(v)},Un.unstable_batchedUpdates=function(v,p){return v(p)},Un.useFormState=function(v,p,S){return _.H.useFormState(v,p,S)},Un.useFormStatus=function(){return _.H.useHostTransitionStatus()},Un.version="19.3.1",Un}var hv;function GM(){if(hv)return ud.exports;hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=HM(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function VM(){if(dv)return ol;dv=1;var o=FM(),e=Ip(),a=GM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return _(l),t;if(c===r)return _(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var g=!1,E=l.child;E;){if(E===i){g=!0,i=l,r=c;break}if(E===r){g=!0,r=l,i=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===i){g=!0,i=c,r=l;break}if(E===r){g=!0,r=c,i=l;break}E=E.sibling}if(!g)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function p(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=S(t);return i===null||C(n,t,i.child,{foundSelf:!1}),n}function C(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&C(t,n,i.child,r))return!0;i=i.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,B=null;function z(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function U(t,n,i){return t===i?(B=t,!1):t===n?(B!==null&&(x=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function H(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var O=Object.assign,Y=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),ht=Symbol.for("react.profiler"),xt=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Vt=Symbol.for("react.activity"),ie=Symbol.for("react.legacy_hidden"),pe=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ot=Symbol.for("react.recoverable"),W=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var At=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===At?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ht:return"Profiler";case st:return"StrictMode";case rt:return"Suspense";case j:return"SuspenseList";case Vt:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case dt:return t.displayName||"Context";case xt:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yt:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case Et:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var Tt=Array.isArray,Rt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},De=[],se=-1;function Jt(t){return{current:t}}function Lt(t){0>se||(t.current=De[se],De[se]=null,se--)}function ae(t,n){se++,De[se]=t.current,t.current=n}var Gt=Jt(null),oe=Jt(null),Re=Jt(null),He=Jt(null);function N(t,n){switch(ae(Re,n),ae(oe,t),ae(Gt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?p_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=p_(n),t=m_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Gt),ae(Gt,t)}function T(){Lt(Gt),Lt(oe),Lt(Re)}function it(t){var n=t.memoizedState;n!==null&&(Os._currentValue=n.memoizedState,ae(He,t)),n=Gt.current;var i=m_(n,t.type);n!==i&&(ae(oe,t),ae(Gt,i))}function mt(t){oe.current===t&&(Lt(Gt),Lt(oe)),He.current===t&&(Lt(He),Os._currentValue=P)}var bt,pt;function qt(t){if(bt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);bt=n&&n[1]||"",pt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+t+pt}var Ut=!1;function jt(t,n){if(!t||Ut)return"";Ut=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Pt){var k=Pt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Pt){k=Pt}_t=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){k=Pt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Pt){if(Pt&&k&&typeof Pt.stack=="string")return[Pt.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var L=g.split(`
`),K=E.split(`
`);for(l=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;l<K.length&&!K[l].includes("DetermineComponentFrameRoot");)l++;if(r===L.length||l===K.length)for(r=L.length-1,l=K.length-1;1<=r&&0<=l&&L[r]!==K[l];)l--;for(;1<=r&&0<=l;r--,l--)if(L[r]!==K[l]){if(r!==1||l!==1)do if(r--,l--,0>l||L[r]!==K[l]){var ut=`
`+L[r].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=r&&0<=l);break}}}finally{Ut=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?qt(i):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return t.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Ct(t){try{var n="",i=null;do n+=Qt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var zt=Object.prototype.hasOwnProperty,$t=o.unstable_scheduleCallback,Kt=o.unstable_cancelCallback,It=o.unstable_shouldYield,F=o.unstable_requestPaint,A=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,vt=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,St=o.unstable_LowPriority,Xt=o.unstable_IdlePriority,ce=o.log,ke=o.unstable_setDisableYieldValue,Te=null,en=null;function gn(t){if(typeof ce=="function"&&ke(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Te,t)}catch{}}var Nn=Math.clz32?Math.clz32:Cl,na=Math.log,go=Math.LN2;function Cl(t){return t>>>=0,t===0?32:31-(na(t)/go|0)|0}var hr=256,ia=262144,dr=4194304;function di(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pr(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=di(r):(g&=E,g!==0?l=di(g):i||(i=E&~t,i!==0&&(l=di(i))))):(E=r&~c,E!==0?l=di(E):g!==0?l=di(g):i||(i=r&~t,i!==0&&(l=di(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function wl(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-Nn(i),l=1<<r;n|=t[r],i&=~l}return n}function Uc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dl(){var t=dr;return dr<<=1,(dr&62914560)===0&&(dr=4194304),t}function _o(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function mr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nc(t,n,i,r,l,c){var g=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,K=t.hiddenUpdates;for(i=g&~i;0<i;){var ut=31-Nn(i),_t=1<<ut;E[ut]=0,L[ut]=-1;var k=K[ut];if(k!==null)for(K[ut]=null,ut=0;ut<k.length;ut++){var at=k[ut];at!==null&&(at.lane&=-536870913)}i&=~_t}r!==0&&R(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function R(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function Q(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Nn(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function ct(t,n){var i=n&-n;return i=(i&42)!==0?1:ft(i),(i&(t.suspendedLanes|n))!==0?0:i}function ft(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=Bt.p;return t!==0?t:(t=window.event,t===void 0?32:J_(t.type))}function Ft(t,n){var i=Bt.p;try{return Bt.p=t,n()}finally{Bt.p=i}}var kt=Math.random().toString(36).slice(2),Ot="__reactFiber$"+kt,Wt="__reactProps$"+kt,re="__reactContainer$"+kt,ee="__reactEvents$"+kt,xe="__reactListeners$"+kt,Be="__reactHandles$"+kt,Je="__reactResources$"+kt,Pe="__reactMarker$"+kt,Ue="__reactLoad$"+kt;function ne(t){delete t[Ot],delete t[Wt],delete t[xe],delete t[Be]}function ze(t){var n;if(n=t[Ot])return n;for(var i=t.parentNode;i;){if(n=i[re]||i[Ot]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=N_(t);t!==null;){if(i=t[Ot])return i;t=N_(t)}return n}t=i,i=t.parentNode}return null}function _e(t){if(t=t[Ot]||t[re]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function _n(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Qn(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ne(t){t[Pe]=!0}function Ra(t){t[Ue]=void 0}var Ze=new Set,In={};function cn(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(In[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var Ln=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Bi={};function Jx(t){return zt.call(Bi,t)?!0:zt.call(Qr,t)?!1:Ln.test(t)?Bi[t]=!0:(Qr[t]=!0,!1)}var Le=!1;function tm(){var t=Le;return Le=!1,t}function Ul(t,n,i){if(Jx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function Nl(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function aa(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function em(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $x(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Lc(t){if(!t._valueTracker){var n=em(t)?"checked":"value";t._valueTracker=$x(t,n,""+t[n])}}function nm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=em(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var tS=/[\n"\\]/g;function pi(t){return t.replace(tS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oc(t,n,i,r,l,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jn(n)):t.value!==""+Jn(n)&&(t.value=""+Jn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Pc(t,Jn(t.value)):Pc(t,Jn(n)):i!=null?Pc(t,Jn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Jn(E):t.removeAttribute("name")}function im(t,n,i,r,l,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Lc(t);return}i=i!=null?""+Jn(i):"",n=n!=null?""+Jn(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Lc(t)}function Pc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Jr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Jn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function am(t,n,i){if(n!=null&&(n=""+Jn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Jn(i):""}function rm(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(Tt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=Jn(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Lc(t)}function $r(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var eS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sm(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||eS.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function om(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Le=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(sm(t,l,r),Le=!0)}else for(var c in n)n.hasOwnProperty(c)&&sm(t,c,n[c])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(t){return iS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Ic=null;function Bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ts=null,es=null;function lm(t){var n=_e(t);if(n&&(t=n.stateNode)){var i=t[Wt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[Wt]||null;if(!l)throw Error(s(90));Oc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&nm(r)}break t;case"textarea":am(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Jr(t,!!i.multiple,n,!1)}}}var Fc=!1;function um(t,n,i){if(Fc)return t(n,i);Fc=!0;try{var r=t(n);return r}finally{if(Fc=!1,(ts!==null||es!==null)&&(Lu(),ts&&(n=ts,t=es,es=ts=null,lm(n),t)))for(n=0;n<t.length;n++)lm(t[n])}}function vo(t,n){var i=t.stateNode;if(i===null)return null;var r=i[Wt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(ra)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Hc=!1}var Ca=null,Gc=null,Ol=null;function cm(){if(Ol)return Ol;var t,n=Gc,i=n.length,r,l="value"in Ca?Ca.value:Ca.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var g=i-t;for(r=1;r<=g&&n[i-r]===l[c-r];r++);return Ol=l.slice(t,1<r?1-r:void 0)}function Pl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function fm(){return!1}function Bn(t){function n(i,r,l,c,g){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?zl:fm,this.isPropagationStopped=fm,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Bn(wa),So=O({},wa,{view:0,detail:0}),aS=Bn(So),Vc,Xc,yo,Bl=O({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Vc=t.screenX-yo.screenX,Xc=t.screenY-yo.screenY):Xc=Vc=0,yo=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),hm=Bn(Bl),rS=O({},Bl,{dataTransfer:0}),sS=Bn(rS),oS=O({},So,{relatedTarget:0}),kc=Bn(oS),lS=O({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Bn(lS),cS=O({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=Bn(cS),hS=O({},wa,{data:0}),dm=Bn(hS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mS[t])?!!n[t]:!1}function Yc(){return gS}var _S=O({},So,{key:function(t){if(t.key){var n=dS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=Bn(_S),xS=O({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Bn(xS),SS=O({},wa,{submitter:0}),yS=Bn(SS),MS=O({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),ES=Bn(MS),TS=O({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Bn(TS),AS=O({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=Bn(AS),CS=O({},wa,{newState:0,oldState:0,source:0}),wS=Bn(CS),DS=[9,13,27,32],qc=ra&&"CompositionEvent"in window,Mo=null;ra&&"documentMode"in document&&(Mo=document.documentMode);var US=ra&&"TextEvent"in window&&!Mo,mm=ra&&(!qc||Mo&&8<Mo&&11>=Mo),gm=" ",_m=!1;function vm(t,n){switch(t){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function NS(t,n){switch(t){case"compositionend":return xm(n);case"keypress":return n.which!==32?null:(_m=!0,gm);case"textInput":return t=n.data,t===gm&&_m?null:t;default:return null}}function LS(t,n){if(ns)return t==="compositionend"||!qc&&vm(t,n)?(t=cm(),Ol=Gc=Ca=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mm&&n.locale!=="ko"?null:n.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!OS[t.type]:n==="textarea"}function ym(t,n,i,r){ts?es?es.push(r):es=[r]:ts=r,n=Fu(n,"onChange"),0<n.length&&(i=new Il("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var Eo=null,To=null;function PS(t){l_(t,0)}function Fl(t){var n=_n(t);if(nm(n))return t}function Mm(t,n){if(t==="change")return n}var Em=!1;if(ra){var jc;if(ra){var Wc="oninput"in document;if(!Wc){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Wc=typeof Tm.oninput=="function"}jc=Wc}else jc=!1;Em=jc&&(!document.documentMode||9<document.documentMode)}function bm(){Eo&&(Eo.detachEvent("onpropertychange",Am),To=Eo=null)}function Am(t){if(t.propertyName==="value"&&Fl(To)){var n=[];ym(n,To,t,Bc(t)),um(PS,n)}}function zS(t,n,i){t==="focusin"?(bm(),Eo=n,To=i,Eo.attachEvent("onpropertychange",Am)):t==="focusout"&&bm()}function IS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(To)}function BS(t,n){if(t==="click")return Fl(n)}function FS(t,n){if(t==="input"||t==="change")return Fl(n)}function HS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:HS;function bo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!zt.call(n,l)||!$n(t[l],n[l]))return!1}return!0}function Zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,n){var i=Rm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Rm(i)}}function wm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Dm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Zc(t.document)}return n}function Kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var GS=ra&&"documentMode"in document&&11>=document.documentMode,is=null,Qc=null,Ao=null,Jc=!1;function Um(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Jc||is==null||is!==Zc(r)||(r=is,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&bo(Ao,r)||(Ao=r,r=Fu(Qc,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=is)))}function gr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var as={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},$c={},Nm={};ra&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function _r(t){if($c[t])return $c[t];if(!as[t])return t;var n=as[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Nm)return $c[t]=n[i];return t}var Lm=_r("animationend"),Om=_r("animationiteration"),Pm=_r("animationstart"),VS=_r("transitionrun"),XS=_r("transitionstart"),kS=_r("transitioncancel"),zm=_r("transitionend"),Im=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function Ti(t,n){Im.set(t,n),cn(n,[t])}var YS=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ci.identifierPrefix;var i=YS++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Bm(t){if(t==null||typeof t=="string")return t;var n=null,i=Ts;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function oa(t,n){return t=Bm(t),n=Bm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],rs=0,ef=0;function Gl(){for(var t=rs,n=ef=rs=0;n<t;){var i=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var l=mi[n];mi[n++]=null;var c=mi[n];if(mi[n++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&Fm(i,l,c)}}function Vl(t,n,i,r){mi[rs++]=t,mi[rs++]=n,mi[rs++]=i,mi[rs++]=r,ef|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function nf(t,n,i,r){return Vl(t,n,i,r),Xl(t)}function vr(t,n){return Vl(t,null,null,n),Xl(t)}function Fm(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Nn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Xl(t){if(50<Wo)throw Wo=0,Nu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function qS(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,i,r){return new qS(t,n,i,r)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var i=t.alternate;return i===null?(i=qn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Hm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function kl(t,n,i,r,l,c){var g=0;if(r=t,typeof r=="function")af(r)&&(g=1);else if(typeof r=="string")g=SM(t,i,Gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Vt:return t=qn(31,i,n,l),t.elementType=Vt,t.lanes=c,t;case V:return xr(i.children,l,c,n);case st:g=8,l|=24;break;case ht:return t=qn(12,i,n,l|2),t.elementType=ht,t.lanes=c,t;case rt:return t=qn(13,i,n,l),t.elementType=rt,t.lanes=c,t;case j:return t=qn(19,i,n,l),t.elementType=j,t.lanes=c,t;case ie:case I:return t=l|32,t=qn(30,i,n,t),t.elementType=I,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case dt:g=10;break t;case xt:g=9;break t;case q:g=11;break t;case yt:g=14;break t;case Et:g=16,r=null;break t}g=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=qn(g,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function xr(t,n,i,r){return t=qn(7,t,r,n),t.lanes=i,t}function rf(t,n,i){return t=qn(6,t,null,n),t.lanes=i,t}function Gm(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function sf(t,n,i){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var i=Vm.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Ct(n)},Vm.set(t,n),n)}return{value:t,source:n,stack:Ct(n)}}var os=[],ls=0,Yl=null,Ro=0,_i=[],vi=0,Da=null,Hi=1,Gi="";function ua(t,n){os[ls++]=Ro,os[ls++]=Yl,Yl=t,Ro=n}function Xm(t,n,i){_i[vi++]=Hi,_i[vi++]=Gi,_i[vi++]=Da,Da=t;var r=Hi;t=Gi;var l=32-Nn(r)-1;r&=~(1<<l),i+=1;var c=32-Nn(n)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,Hi=1<<32-Nn(n)+l|i<<l|r,Gi=c+t}else Hi=1<<c|i<<l|r,Gi=t}function ql(t){t.return!==null&&(ua(t,1),Xm(t,1,0))}function of(t){for(;t===Yl;)Yl=os[--ls],os[ls]=null,Ro=os[--ls],os[ls]=null;for(;t===Da;)Da=_i[--vi],_i[vi]=null,Gi=_i[--vi],_i[vi]=null,Hi=_i[--vi],_i[vi]=null}function km(t,n){_i[vi++]=Hi,_i[vi++]=Gi,_i[vi++]=Da,Hi=n.id,Gi=n.overflow,Da=t}var yn=null,Ke=null,ve=!1,Ua=null,xi=!1,lf=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(gi(n,t)),lf}function Ym(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[Ot]=t,n[Wt]=r,i){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<Ko.length;i++)ye(Ko[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),im(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),rm(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||h_(n.textContent,i)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||Na(t,!0)}function jl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:yn=yn.return}}function us(t){if(t!==yn)return!1;if(!ve)return jl(t),ve=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Bh(t.type,t.memoizedProps)),i=!i),i&&Ke&&Na(t),jl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=U_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=U_(t)}else n===27?(n=Ke,Wa(t.type)?(t=jh,jh=null,Ke=t):Ke=n):Ke=yn?yi(t.stateNode.nextSibling):null;return!0}function Sr(){Ke=yn=null,ve=!1}function uf(){var t=Ua;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Ua=null),t}function Co(t){Ua===null?Ua=[t]:Ua.push(t)}var cf=Jt(null),yr=null,ca=null;function La(t,n,i){ae(cf,n._currentValue),n._currentValue=i}function fa(t){t._currentValue=cf.current,Lt(cf)}function Wl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function ff(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var L=0;L<n.length;L++)if(E.context===n[L]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Wl(c.return,i,t),r||(g=null);break t}c=E.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=i,c=g.alternate,c!==null&&(c.lanes|=i),Wl(g,i,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,g=l.alternate,g!==null&&(g.lanes|=i),Wl(l.return,i,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Mr(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=l.type;$n(l.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(l===He.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Os):t=[Os])}l=l.return}return t!==null&&ff(n,t,i,r),n.flags|=262144,t!==null}function Zl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){yr=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return qm(yr,t)}function Kl(t,n){return yr===null&&Er(t),qm(t,n)}function qm(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},ca===null){if(t===null)throw Error(s(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return i}var jS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},WS=o.unstable_scheduleCallback,ZS=o.unstable_NormalPriority,fn={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new jS,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&WS(ZS,function(){t.controller.abort()})}function jm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var Do=null;function KS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,df=0,Tr=0,cs=null;function QS(t,n){if(Uo===null){var i=Uo=[];df=0,Tr=wh(),cs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return df++,n.then(Wm,Wm),n}function Wm(){if(--df===0&&(Do=null,Uo!==null)){cs!==null&&(cs.status="fulfilled");var t=Uo;Uo=null,Tr=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function JS(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Zm=Rt.S;Rt.S=function(t,n){if(G0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&QS(t,n),Do!==null)for(var i=Cs;i!==null;)jm(i,Do),i=i.next;if(i=t.types,i!==null){for(var r=Cs;r!==null;)jm(r,i),r=r.next;if(Tr!==0){r=Do,r===null&&(r=Do=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Zm!==null&&Zm(t,n)};var br=Jt(null);function pf(){var t=br.current;return t!==null?t:We.pooledCache}function Ql(t,n){n===null?ae(br,br.current):ae(br,n.pool)}function Km(){var t=pf();return t===null?null:{parent:fn._currentValue,pool:t}}var fs=Error(s(460)),mf=Error(s(474)),Jl=Error(s(542)),$l={then:function(){}};function Qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Fi,Fi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tg(t),t}throw Rr=n,fs}}function Ar(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Rr=i,fs):i}}var Rr=null;function $m(){if(Rr===null)throw Error(s(459));var t=Rr;return Rr=null,t}function tg(t){if(t===fs||t===Jl)throw Error(s(483))}var hs=null,No=0;function tu(t){var n=No;return No+=1,hs===null&&(hs=[]),Jm(hs,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function eu(t,n){throw n.$$typeof===Y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function eg(t){function n(Z,G){if(t){var nt=Z.deletions;nt===null?(Z.deletions=[G],Z.flags|=16):nt.push(G)}}function i(Z,G){if(!t)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function r(Z){for(var G=new Map;Z!==null;)Z.key===null?G.set(Z.index,Z):G.set(Z.key,Z),Z=Z.sibling;return G}function l(Z,G){return Z=la(Z,G),Z.index=0,Z.sibling=null,Z}function c(Z,G,nt){return Z.index=nt,t?(nt=Z.alternate,nt!==null?(nt=nt.index,nt<G?(Z.flags|=2,G):nt):(Z.flags|=134217730,G)):(Z.flags|=1048576,G)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function E(Z,G,nt,gt){return G===null||G.tag!==6?(G=rf(nt,Z.mode,gt),G.return=Z,G):(G=l(G,nt),G.return=Z,G)}function L(Z,G,nt,gt){var Yt=nt.type;return Yt===V?(Z=ut(Z,G,nt.props.children,gt,nt.key),Oa(Z,nt),Z):G!==null&&(G.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===Et&&Ar(Yt)===G.type)?(G=l(G,nt.props),Oa(G,nt),G.return=Z,G):(G=kl(nt.type,nt.key,nt.props,null,Z.mode,gt),Oa(G,nt),G.return=Z,G)}function K(Z,G,nt,gt){return G===null||G.tag!==4||G.stateNode.containerInfo!==nt.containerInfo||G.stateNode.implementation!==nt.implementation?(G=sf(nt,Z.mode,gt),G.return=Z,G):(G=l(G,nt.children||[]),G.return=Z,G)}function ut(Z,G,nt,gt,Yt){return G===null||G.tag!==7?(G=xr(nt,Z.mode,gt,Yt),G.return=Z,G):(G=l(G,nt),G.return=Z,G)}function _t(Z,G,nt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=rf(""+G,Z.mode,nt),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return nt=kl(G.type,G.key,G.props,null,Z.mode,nt),Oa(nt,G),nt.return=Z,nt;case w:return G=sf(G,Z.mode,nt),G.return=Z,G;case Et:return G=Ar(G),_t(Z,G,nt)}if(Tt(G)||et(G))return G=xr(G,Z.mode,nt,null),G.return=Z,G;if(typeof G.then=="function")return _t(Z,tu(G),nt);if(G.$$typeof===dt)return _t(Z,Kl(Z,G),nt);eu(Z,G)}return null}function k(Z,G,nt,gt){var Yt=G!==null?G.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Yt!==null?null:E(Z,G,""+nt,gt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case D:return nt.key===Yt?L(Z,G,nt,gt):null;case w:return nt.key===Yt?K(Z,G,nt,gt):null;case Et:return nt=Ar(nt),k(Z,G,nt,gt)}if(Tt(nt)||et(nt))return Yt!==null?null:ut(Z,G,nt,gt,null);if(typeof nt.then=="function")return k(Z,G,tu(nt),gt);if(nt.$$typeof===dt)return k(Z,G,Kl(Z,nt),gt);eu(Z,nt)}return null}function at(Z,G,nt,gt,Yt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(nt)||null,E(G,Z,""+gt,Yt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case D:return Z=Z.get(gt.key===null?nt:gt.key)||null,L(G,Z,gt,Yt);case w:return Z=Z.get(gt.key===null?nt:gt.key)||null,K(G,Z,gt,Yt);case Et:return gt=Ar(gt),at(Z,G,nt,gt,Yt)}if(Tt(gt)||et(gt))return Z=Z.get(nt)||null,ut(G,Z,gt,Yt,null);if(typeof gt.then=="function")return at(Z,G,nt,tu(gt),Yt);if(gt.$$typeof===dt)return at(Z,G,nt,Kl(G,gt),Yt);eu(G,gt)}return null}function Pt(Z,G,nt,gt){for(var Yt=null,Ae=null,te=G,le=G=0,pn=null;te!==null&&le<nt.length;le++){te.index>le?(pn=te,te=null):pn=te.sibling;var Ce=k(Z,te,nt[le],gt);if(Ce===null){te===null&&(te=pn);break}t&&te&&Ce.alternate===null&&n(Z,te),G=c(Ce,G,le),Ae===null?Yt=Ce:Ae.sibling=Ce,Ae=Ce,te=pn}if(le===nt.length)return i(Z,te),ve&&ua(Z,le),Yt;if(te===null){for(;le<nt.length;le++)te=_t(Z,nt[le],gt),te!==null&&(G=c(te,G,le),Ae===null?Yt=te:Ae.sibling=te,Ae=te);return ve&&ua(Z,le),Yt}for(te=r(te);le<nt.length;le++)pn=at(te,Z,le,nt[le],gt),pn!==null&&(t&&(Ce=pn.alternate,Ce!==null&&te.delete(Ce.key===null?le:Ce.key)),G=c(pn,G,le),Ae===null?Yt=pn:Ae.sibling=pn,Ae=pn);return t&&te.forEach(function($a){return n(Z,$a)}),ve&&ua(Z,le),Yt}function Zt(Z,G,nt,gt){if(nt==null)throw Error(s(151));for(var Yt=null,Ae=null,te=G,le=G=0,pn=null,Ce=nt.next();te!==null&&!Ce.done;le++,Ce=nt.next()){te.index>le?(pn=te,te=null):pn=te.sibling;var $a=k(Z,te,Ce.value,gt);if($a===null){te===null&&(te=pn);break}t&&te&&$a.alternate===null&&n(Z,te),G=c($a,G,le),Ae===null?Yt=$a:Ae.sibling=$a,Ae=$a,te=pn}if(Ce.done)return i(Z,te),ve&&ua(Z,le),Yt;if(te===null){for(;!Ce.done;le++,Ce=nt.next())Ce=_t(Z,Ce.value,gt),Ce!==null&&(G=c(Ce,G,le),Ae===null?Yt=Ce:Ae.sibling=Ce,Ae=Ce);return ve&&ua(Z,le),Yt}for(te=r(te);!Ce.done;le++,Ce=nt.next())Ce=at(te,Z,le,Ce.value,gt),Ce!==null&&(t&&(pn=Ce.alternate,pn!==null&&te.delete(pn.key===null?le:pn.key)),G=c(Ce,G,le),Ae===null?Yt=Ce:Ae.sibling=Ce,Ae=Ce);return t&&te.forEach(function(NM){return n(Z,NM)}),ve&&ua(Z,le),Yt}function de(Z,G,nt,gt){if(typeof nt=="object"&&nt!==null&&nt.type===V&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case D:t:{for(var Yt=nt.key;G!==null;){if(G.key===Yt){if(Yt=nt.type,Yt===V){if(G.tag===7){i(Z,G.sibling),gt=l(G,nt.props.children),Oa(gt,nt),gt.return=Z,Z=gt;break t}}else if(G.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===Et&&Ar(Yt)===G.type){i(Z,G.sibling),gt=l(G,nt.props),Oa(gt,nt),gt.return=Z,Z=gt;break t}i(Z,G);break}else n(Z,G);G=G.sibling}nt.type===V?(gt=xr(nt.props.children,Z.mode,gt,nt.key),Oa(gt,nt),gt.return=Z,Z=gt):(gt=kl(nt.type,nt.key,nt.props,null,Z.mode,gt),Oa(gt,nt),gt.return=Z,Z=gt)}return g(Z);case w:t:{for(Yt=nt.key;G!==null;){if(G.key===Yt)if(G.tag===4&&G.stateNode.containerInfo===nt.containerInfo&&G.stateNode.implementation===nt.implementation){i(Z,G.sibling),gt=l(G,nt.children||[]),gt.return=Z,Z=gt;break t}else{i(Z,G);break}else n(Z,G);G=G.sibling}gt=sf(nt,Z.mode,gt),gt.return=Z,Z=gt}return g(Z);case Et:return nt=Ar(nt),de(Z,G,nt,gt)}if(Tt(nt))return Pt(Z,G,nt,gt);if(et(nt)){if(Yt=et(nt),typeof Yt!="function")throw Error(s(150));return nt=Yt.call(nt),Zt(Z,G,nt,gt)}if(typeof nt.then=="function")return de(Z,G,tu(nt),gt);if(nt.$$typeof===dt)return de(Z,G,Kl(Z,nt),gt);eu(Z,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,G!==null&&G.tag===6?(i(Z,G.sibling),gt=l(G,nt),gt.return=Z,Z=gt):(i(Z,G),gt=rf(nt,Z.mode,gt),gt.return=Z,Z=gt),g(Z)):i(Z,G)}return function(Z,G,nt,gt){try{No=0;var Yt=de(Z,G,nt,gt);return hs=null,Yt}catch(te){if(te===fs||te===Jl)throw te;var Ae=qn(29,te,null,Z.mode);return Ae.lanes=gt,Ae.return=Z,Ae}finally{}}}var Cr=eg(!0),ng=eg(!1),Pa=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _f(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ie&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Xl(t),Fm(t,null,i),n}return Vl(t,r,n,i),Xl(t)}function Lo(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,Q(t,i)}}function vf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var g={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var xf=!1;function Oo(){if(xf){var t=cs;if(t!==null)throw t}}function Po(t,n,i,r){xf=!1;var l=t.updateQueue;Pa=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var L=E,K=L.next;L.next=null,g===null?c=K:g.next=K,g=L;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=K:E.next=K,ut.lastBaseUpdate=L))}if(c!==null){var _t=l.baseState;g=0,ut=K=L=null,E=c;do{var k=E.lane&-536870913,at=k!==E.lane;if(at?(be&k)===k:(r&k)===k){k!==0&&k===Tr&&(xf=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Pt=t,Zt=E;k=n;var de=i;switch(Zt.tag){case 1:if(Pt=Zt.payload,typeof Pt=="function"){_t=Pt.call(de,_t,k);break t}_t=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Zt.payload,k=typeof Pt=="function"?Pt.call(de,_t,k):Pt,k==null)break t;_t=O({},_t,k);break t;case 2:Pa=!0}}k=E.callback,k!==null&&(t.flags|=64,at&&(t.flags|=8192),at=l.callbacks,at===null?l.callbacks=[k]:at.push(k))}else at={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(K=ut=at,L=_t):ut=ut.next=at,g|=k;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;at=E,E=at.next,at.next=null,l.lastBaseUpdate=at,l.shared.pending=null}}while(!0);ut===null&&(L=_t),l.baseState=L,l.firstBaseUpdate=K,l.lastBaseUpdate=ut,c===null&&(l.shared.lanes=0),ka|=g,t.lanes=g,t.memoizedState=_t}}function ig(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ag(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)ig(i[t],n)}var Ba=Jt(null),nu=Jt(0);function rg(t,n){t=ga,ae(nu,t),ae(Ba,n),ga=t|n.baseLanes}function Sf(){ae(nu,ga),ae(Ba,Ba.current)}function yf(){ga=nu.current,Lt(Ba),Lt(nu)}var Rn=Jt(null),On=null;function Fa(t){var n=t.alternate;ae(Cn,Cn.current&1),ae(Rn,t),On===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(On=t)}function Mf(t){ae(Cn,Cn.current),ae(Rn,t),On===null&&(On=t)}function sg(t){t.tag===22?(ae(Cn,Cn.current),ae(Rn,t),On===null&&(On=t)):Ha()}function Ha(){ae(Cn,Cn.current),ae(Rn,Rn.current)}function ti(t){Lt(Rn),On===t&&(On=null),Lt(Cn)}var Cn=Jt(0);function zo(t,n){ae(Rn,Rn.current),ae(Cn,n)}function Ef(t){Lt(Cn),Lt(Rn),On===t&&(On=null)}function iu(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Yh(i)||qh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,he=null,Ye=null,hn=null,au=!1,ds=!1,wr=!1,ru=0,Io=0,ps=null,$S=0;function rn(){throw Error(s(321))}function Tf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!$n(t[i],n[i]))return!1;return!0}function bf(t,n,i,r,l,c){return ha=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rt.H=t===null||t.memoizedState===null?Xg:kg,wr=!1,c=i(r,l),wr=!1,ds&&(c=lg(n,i,r,l)),og(t),c}function og(t){Rt.H=hu;var n=Ye!==null&&Ye.next!==null;if(ha=0,hn=Ye=he=null,au=!1,Io=0,ps=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&Zl(t)&&(dn=!0))}function lg(t,n,i,r){he=t;var l=0;do{if(ds&&(ps=null),Io=0,ds=!1,25<=l)throw Error(s(301));if(l+=1,hn=Ye=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Rt.H=oy,c=n(i,r)}while(ds);return c}function ty(){var t=Rt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(Ye!==null?Ye.memoizedState:null)!==t&&(he.flags|=1024),n}function Af(){var t=ru!==0;return ru=0,t}function Rf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Cf(t){if(au){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}au=!1}ha=0,hn=Ye=he=null,ds=!1,Io=ru=0,ps=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(Ye===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var n=hn===null?he.memoizedState:hn.next;if(n!==null)hn=n,Ye=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},hn===null?he.memoizedState=hn=t:hn=hn.next=t}return hn}function su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=Io;return Io+=1,ps===null&&(ps=[]),t=Jm(ps,t,n),n=he,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,Rt.H=n===null||n.memoizedState===null?Xg:kg),t}function ou(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===ot)return;if(t.$$typeof===dt)return An(t)}throw Error(s(438,String(t)))}function wf(t){var n=null,i=he.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=su(),he.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=pe;return n.index++,i}function da(t,n){return typeof n=="function"?n(t):n}function lu(t){var n=ln();return Df(n,Ye,t)}function Df(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=g=null,L=null,K=n,ut=!1;do{var _t=K.lane&-536870913;if(_t!==K.lane?(be&_t)===_t:(ha&_t)===_t){var k=K.revertLane;if(k===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),_t===Tr&&(ut=!0);else if((ha&k)===k){K=K.next,k===Tr&&(ut=!0);continue}else _t={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(E=L=_t,g=c):L=L.next=_t,he.lanes|=k,ka|=k;_t=K.action,wr&&i(c,_t),c=K.hasEagerState?K.eagerState:i(c,_t)}else k={lane:_t,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(E=L=k,g=c):L=L.next=k,he.lanes|=_t,ka|=_t;K=K.next}while(K!==null&&K!==n);if(L===null?g=c:L.next=E,!$n(c,t.memoizedState)&&(dn=!0,ut&&(i=cs,i!==null)))throw i;t.memoizedState=c,t.baseState=g,t.baseQueue=L,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Uf(t){var n=ln(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);$n(c,n.memoizedState)||(dn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function ug(t,n,i){var r=he,l=ln(),c=ve;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var g=!$n((Ye||l).memoizedState,i);if(g&&(l.memoizedState=i,dn=!0),l=l.queue,Of(hg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||g||hn!==null&&(hn.memoizedState.tag&1)!==0,ms(t?9:8,{destroy:void 0},fg.bind(null,r,l,i,n),null),t){if(r.flags|=2048,We===null)throw Error(s(349));c||(ha&127)!==0||cg(r,n,i)}return i}function cg(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=he.updateQueue,n===null?(n=su(),he.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function fg(t,n,i,r){n.value=i,n.getSnapshot=r,dg(n)&&pg(t)}function hg(t,n,i){return i(function(){dg(n)&&pg(t)})}function dg(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!$n(t,i)}catch{return!0}}function pg(t){var n=vr(t,2);n!==null&&Kn(n,t,2)}function Nf(t){var n=Fn();if(typeof t=="function"){var i=t;if(t=i(),wr){gn(!0);try{i()}finally{gn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function mg(t,n,i,r){return t.baseState=i,Df(t,Ye,typeof r=="function"?r:da)}function ey(t,n,i,r,l){if(fu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};Rt.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,gg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function gg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Rt.T,g={};g.types=c!==null?c.types:null,Rt.T=g;try{var E=i(l,r),L=Rt.S;L!==null&&L(g,E),_g(t,n,E)}catch(K){Lf(t,n,K)}finally{c!==null&&g.types!==null&&(c.types=g.types),Rt.T=c}}else try{c=i(l,r),_g(t,n,c)}catch(K){Lf(t,n,K)}}function _g(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){vg(t,n,r)},function(r){return Lf(t,n,r)}):vg(t,n,i)}function vg(t,n,i){n.status="fulfilled",n.value=i,xg(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,gg(t,i)))}function Lf(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,xg(n),n=n.next;while(n!==r)}t.action=null}function xg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sg(t,n){return n}function yg(t,n){if(ve){var i=We.formState;if(i!==null){t:{var r=he;if(ve){if(Ke){e:{for(var l=Ke,c=xi;l.nodeType!==8;){if(!c){l=null;break e}if(l=yi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ke=yi(l.nextSibling),r=l.data==="F!";break t}}Na(r)}r=!1}r&&(n=i[0])}}return i=Fn(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sg,lastRenderedState:n},i.queue=r,i=Hg.bind(null,he,r),r.dispatch=i,r=Nf(!1),c=Ff.bind(null,he,!1,r.queue),r=Fn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=ey.bind(null,he,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function Mg(t){var n=ln();return Eg(n,Ye,t)}function Eg(t,n,i){if(n=Df(t,n,Sg)[0],t=lu(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Bo(n)}catch(g){throw g===fs?Jl:g}else r=n;n=ln();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(he.flags|=2048,ms(9,{destroy:void 0},ny.bind(null,l,i),null)),[r,c,t]}function ny(t,n){t.action=n}function Tg(t){var n=ln(),i=Ye;if(i!==null)return Eg(n,i,t);ln(),n=n.memoizedState,i=ln();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function ms(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=su(),he.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function bg(){return ln().memoizedState}function uu(t,n,i,r){var l=Fn();he.flags|=t,l.memoizedState=ms(1|n,{destroy:void 0},i,r===void 0?null:r)}function cu(t,n,i,r){var l=ln();r=r===void 0?null:r;var c=l.memoizedState.inst;Ye!==null&&r!==null&&Tf(r,Ye.memoizedState.deps)?l.memoizedState=ms(n,c,i,r):(he.flags|=t,l.memoizedState=ms(1|n,c,i,r))}function Ag(t,n){uu(8390656,8,t,n)}function Of(t,n){cu(2048,8,t,n)}function iy(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=su(),he.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function Rg(t){var n=ln().memoizedState;return iy({ref:n,nextImpl:t}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Cg(t,n){return cu(4,2,t,n)}function wg(t,n){return cu(4,4,t,n)}function Dg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ug(t,n,i){i=i!=null?i.concat([t]):null,cu(4,4,Dg.bind(null,n,t),i)}function Pf(){}function Ng(t,n){var i=ln();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&Tf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function Lg(t,n){var i=ln();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&Tf(n,r[1]))return r[0];if(r=t(),wr){gn(!0);try{t()}finally{gn(!1)}}return i.memoizedState=[r,n],r}function zf(t,n,i){return i===void 0||(ha&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=X0(),he.lanes|=t,ka|=t,i)}function Og(t,n,i,r){return $n(i,n)?i:Ba.current!==null?(t=zf(t,i,r),$n(t,n)||(dn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(be&261930)===0?(dn=!0,t.memoizedState=i):(t=X0(),he.lanes|=t,ka|=t,n)}function Pg(t,n,i,r,l){var c=Bt.p;Bt.p=c!==0&&8>c?c:8;var g=Rt.T,E={};E.types=g!==null?g.types:null,Rt.T=E,Ff(t,!1,n,i);try{var L=l(),K=Rt.S;if(K!==null&&K(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ut=JS(L,r);Fo(t,n,ut,ai(t))}else Fo(t,n,r,ai(t))}catch(_t){Fo(t,n,{then:function(){},status:"rejected",reason:_t},ai())}finally{Bt.p=c,g!==null&&E.types!==null&&(g.types=E.types),Rt.T=g}}function ay(){}function If(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=zg(t).queue;Pg(t,l,n,P,i===null?ay:function(){return Ig(t),i(r)})}function zg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:P},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ig(t){var n=zg(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},ai())}function Bf(){return An(Os)}function Bg(){return ln().memoizedState}function Fg(){return ln().memoizedState}function ry(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ai();t=za(i);var r=Ia(n,t,i);r!==null&&(Kn(r,n,i),Lo(r,n,i)),n={cache:hf()},t.payload=n;return}n=n.return}}function sy(t,n,i){var r=ai();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},fu(t)?Gg(n,i):(i=nf(t,n,i,r),i!==null&&(Kn(i,t,r),Vg(i,n,r)))}function Hg(t,n,i){var r=ai();Fo(t,n,i,r)}function Fo(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(fu(t))Gg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,i);if(l.hasEagerState=!0,l.eagerState=E,$n(E,g))return Vl(t,n,l,0),We===null&&Gl(),!1}catch{}finally{}if(i=nf(t,n,l,r),i!==null)return Kn(i,t,r),Vg(i,n,r),!0}return!1}function Ff(t,n,i,r){if(r={lane:2,revertLane:wh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(n)throw Error(s(479))}else n=nf(t,i,r,2),n!==null&&Kn(n,t,2)}function fu(t){var n=t.alternate;return t===he||n!==null&&n===he}function Gg(t,n){ds=au=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Vg(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,Q(t,i)}}var hu={readContext:An,use:ou,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},Xg={readContext:An,use:ou,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Ag,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,uu(4194308,4,Dg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return uu(4194308,4,t,n)},useInsertionEffect:function(t,n){uu(4,2,t,n)},useMemo:function(t,n){var i=Fn();n=n===void 0?null:n;var r=t();if(wr){gn(!0);try{t()}finally{gn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=Fn();if(i!==void 0){var l=i(n);if(wr){gn(!0);try{i(n)}finally{gn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=sy.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Nf(t);var n=t.queue,i=Hg.bind(null,he,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Pf,useDeferredValue:function(t,n){var i=Fn();return zf(i,t,n)},useTransition:function(){var t=Nf(!1);return t=Pg.bind(null,he,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=he,l=Fn();if(ve){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),We===null)throw Error(s(349));(be&127)!==0||cg(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,Ag(hg.bind(null,r,c,t),[t]),r.flags|=2048,ms(9,{destroy:void 0},fg.bind(null,r,c,i,n),null),i},useId:function(){var t=Fn(),n=We.identifierPrefix;if(ve){var i=Gi,r=Hi;i=(r&~(1<<32-Nn(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=ru++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=$S++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bf,useFormState:yg,useActionState:yg,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Ff.bind(null,he,!0,i),i.dispatch=n,[t,n]},useMemoCache:wf,useCacheRefresh:function(){return Fn().memoizedState=ry.bind(null,he)},useEffectEvent:function(t){var n=Fn(),i={impl:t};return n.memoizedState=i,function(){if((Ie&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},kg={readContext:An,use:ou,useCallback:Ng,useContext:An,useEffect:Of,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Lg,useReducer:lu,useRef:bg,useState:function(){return lu(da)},useDebugValue:Pf,useDeferredValue:function(t,n){var i=ln();return Og(i,Ye.memoizedState,t,n)},useTransition:function(){var t=lu(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:ug,useId:Bg,useHostTransitionStatus:Bf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t,n){var i=ln();return mg(i,Ye,t,n)},useMemoCache:wf,useCacheRefresh:Fg,useEffectEvent:Rg},oy={readContext:An,use:ou,useCallback:Ng,useContext:An,useEffect:Of,useImperativeHandle:Ug,useInsertionEffect:Cg,useLayoutEffect:wg,useMemo:Lg,useReducer:Uf,useRef:bg,useState:function(){return Uf(da)},useDebugValue:Pf,useDeferredValue:function(t,n){var i=ln();return Ye===null?zf(i,t,n):Og(i,Ye.memoizedState,t,n)},useTransition:function(){var t=Uf(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:ug,useId:Bg,useHostTransitionStatus:Bf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,n){var i=ln();return Ye!==null?mg(i,Ye,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:wf,useCacheRefresh:Fg,useEffectEvent:Rg};function Hf(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:O({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Gf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ai(),l=za(r);l.payload=n,i!=null&&(l.callback=i),n=Ia(t,l,r),n!==null&&(Kn(n,t,r),Lo(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ai(),l=za(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ia(t,l,r),n!==null&&(Kn(n,t,r),Lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ai(),r=za(i);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,i),n!==null&&(Kn(n,t,i),Lo(n,t,i))}};function Yg(t,n,i,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!bo(i,r)||!bo(l,c):!0}function qg(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&Gf.enqueueReplaceState(n,n.state,null)}function Dr(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=O({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function jg(t){Hl(t)}function Wg(t){console.error(t)}function Zg(t){Hl(t)}function du(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Kg(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Vf(t,n,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){du(t,n)},i}function Qg(t){return t=za(t),t.tag=3,t}function Jg(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Kg(n,i,r)}}var g=i.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Kg(n,i,r),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ly(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&Mr(n,i,l,!0),i=Rn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return On===null?Ou():i.alternate===null&&sn===0&&(sn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===$l?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),Ah(t,r,l)),!1;case 22:return i.flags|=65536,r===$l?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),Ah(t,r,l)),!1}throw Error(s(435,i.tag))}return Ah(t,r,l),Ou(),!1}if(ve)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==lf&&(t=Error(s(422),{cause:r}),Co(gi(t,i)))):(r!==lf&&(n=Error(s(423),{cause:r}),Co(gi(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=gi(r,i),l=Vf(t.stateNode,r,l),vf(t,l),sn!==4&&(sn=2)),!1;var c=Error(s(520),{cause:r});if(c=gi(c,i),jo===null?jo=[c]:jo.push(c),sn!==4&&(sn=2),n===null)return!0;r=gi(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Vf(i.stateNode,r,t),vf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Qg(l),Jg(l,t,i,r),vf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Xf=Error(s(461)),dn=!1;function vn(t,n,i,r){n.child=t===null?ng(n,null,i,r):Cr(n,t.child,i,r)}function $g(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return Er(n),r=bf(t,n,i,g,c,l),E=Af(),t!==null&&!dn?(Rf(t,n,l),pa(t,n,l)):(ve&&E&&ql(n),n.flags|=1,vn(t,n,r,l),n.child)}function t0(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!af(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,e0(t,n,c,r,l)):(t=kl(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Qf(t,l)){var g=c.memoizedProps;if(i=i.compare,i=i!==null?i:bo,i(g,r)&&t.ref===n.ref)return pa(t,n,l)}return n.flags|=1,t=la(c,r),t.ref=n.ref,t.return=n,n.child=t}function e0(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(bo(c,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=c,Qf(t,l))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,pa(t,n,l)}return kf(t,n,i,r,l)}function n0(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return i0(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ql(n,c!==null?c.cachePool:null),c!==null?rg(n,c):Sf(),sg(n);else return r=n.lanes=536870912,i0(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Ql(n,c.cachePool),rg(n,c),Ha(),n.memoizedState=null):(t!==null&&Ql(n,null),Sf(),Ha());return vn(t,n,l,i),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i0(t,n,i,r,l){var c=pf();return c=c===null?null:{parent:fn._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Ql(n,null),Sf(),sg(n),t!==null&&Mr(t,n,r,!0),n.childLanes=l,null}function pu(t,n){return n=mu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function a0(t,n,i){return Cr(n,t.child,null,i),t=pu(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function uy(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=pu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(Mf(n),(t=Ke)?(t=D_(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},i=Gm(t),i.return=n,n.child=i,yn=n,Ke=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return pu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Mf(n),l)if(n.flags&256)n.flags&=-257,n=a0(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Mr(t,n,i,!1),l=(i&t.childLanes)!==0,dn||l){if(Ba.current===null){if(r=We,r!==null&&(g=ct(r,i),g!==0&&g!==c.retryLane))throw c.retryLane=g,vr(t,g),Kn(r,t,g),Xf;Ou()}n=a0(t,n,i)}else t=c.treeContext,Ke=yi(g.nextSibling),yn=n,ve=!0,Ua=null,xi=!1,t!==null&&km(n,t),n=pu(n,r),n.flags|=134221824;return n}return t=la(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gs(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function kf(t,n,i,r,l){return Er(n),i=bf(t,n,i,r,void 0,l),r=Af(),t!==null&&!dn?(Rf(t,n,l),pa(t,n,l)):(ve&&r&&ql(n),n.flags|=1,vn(t,n,i,l),n.child)}function r0(t,n,i,r,l,c){return Er(n),n.updateQueue=null,i=lg(n,r,i,l),og(t),r=Af(),t!==null&&!dn?(Rf(t,n,c),pa(t,n,c)):(ve&&r&&ql(n),n.flags|=1,vn(t,n,i,c),n.child)}function s0(t,n,i,r,l){if(Er(n),n.stateNode===null){var c=ss,g=i.contextType;typeof g=="object"&&g!==null&&(c=An(g)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Gf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},gf(n),g=i.contextType,c.context=typeof g=="object"&&g!==null?An(g):ss,c.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Hf(n,i,g,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Gf.enqueueReplaceState(c,c.state,null),Po(n,r,c,l),Oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,L=Dr(i,E);c.props=L;var K=c.context,ut=i.contextType;g=ss,typeof ut=="object"&&ut!==null&&(g=An(ut));var _t=i.getDerivedStateFromProps;ut=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||K!==g)&&qg(n,c,r,g),Pa=!1;var k=n.memoizedState;c.state=k,Po(n,r,c,l),Oo(),K=n.memoizedState,E||k!==K||Pa?(typeof _t=="function"&&(Hf(n,i,_t,r),K=n.memoizedState),(L=Pa||Yg(n,i,L,r,k,K,g))?(ut||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),c.props=r,c.state=K,c.context=g,r=L):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,_f(t,n),g=n.memoizedProps,ut=Dr(i,g),c.props=ut,_t=n.pendingProps,k=c.context,K=i.contextType,L=ss,typeof K=="object"&&K!==null&&(L=An(K)),E=i.getDerivedStateFromProps,(K=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==_t||k!==L)&&qg(n,c,r,L),Pa=!1,k=n.memoizedState,c.state=k,Po(n,r,c,l),Oo();var at=n.memoizedState;g!==_t||k!==at||Pa||t!==null&&t.dependencies!==null&&Zl(t.dependencies)?(typeof E=="function"&&(Hf(n,i,E,r),at=n.memoizedState),(ut=Pa||Yg(n,i,ut,r,k,at,L)||t!==null&&t.dependencies!==null&&Zl(t.dependencies))?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,at,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,at,L)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),c.props=r,c.state=at,c.context=L,r=ut):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,gs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Cr(n,t.child,null,l),n.child=Cr(n,null,i,l)):vn(t,n,i,l),n.memoizedState=c.state,t=n.child):t=pa(t,n,l),t}function o0(t,n,i,r){return Sr(),n.flags|=256,vn(t,n,i,r),n.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:Km()}}function jf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ii),t}function l0(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(l?Fa(n):Ha(),(t=Ke)?(t=D_(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},i=Gm(t),i.return=n,n.child=i,yn=n,Ke=null)):t=null,t===null)throw Na(n);return qh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ha(),l=n.mode,c=mu({mode:"hidden",children:c},l),r=xr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=qf(i),r.childLanes=jf(t,g,i),n.memoizedState=Yf,Ho(null,r)):(Fa(n),Wf(n,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return cy(t,n,c,g,r,L,E,i)}return l?(Ha(),l=r.fallback,c=n.mode,E=t.child,L=E.sibling,r=la(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?l=la(L,l):(l=xr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Ho(null,r),r=n.child,l=t.child.memoizedState,l===null?l=qf(i):(c=l.cachePool,c!==null?(E=fn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Km(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=jf(t,g,i),n.memoizedState=Yf,Ho(t.child,r)):(Fa(n),i=t.child,t=i.sibling,i=la(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=i,n.memoizedState=null,i)}function Wf(t,n){return n=mu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function mu(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function gu(t,n,i){return Cr(n,t.child,null,i),t=Wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cy(t,n,i,r,l,c,g,E){if(i)return n.flags&256?(Fa(n),n.flags&=-257,gu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=l.fallback,g=n.mode,l=mu({mode:"visible",children:l.children},g),c=xr(c,g,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Cr(n,t.child,null,E),l=n.child,l.memoizedState=qf(E),l.childLanes=jf(t,r,E),n.memoizedState=Yf,Ho(null,l));if(Fa(n),qh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Co({value:l,source:null,stack:null})),gu(t,n,E)}if(dn||Mr(t,n,E,!1),r=(E&t.childLanes)!==0,dn||r){if(Ba.current!==null)return gu(t,n,E);if(r=We,r!==null&&(l=ct(r,E),l!==0&&l!==g.retryLane))throw g.retryLane=l,vr(t,l),Kn(r,t,l),Xf;return Yh(c)||Ou(),gu(t,n,E)}return Yh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Ke=yi(c.nextSibling),yn=n,ve=!0,Ua=null,xi=!1,t!==null&&km(n,t),n=Wf(n,l.children),n.flags|=134221824,n)}function u0(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Wl(t.return,n,i)}function c0(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&iu(i)===null&&(n=t),t=t.sibling}return n}function _u(t,n,i,r,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=i,g.tailMode=l,g.treeForkCount=c)}function Zf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function Kf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var g=Cn.current;if(n.flags&128)return zo(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,zo(n,g),l==="backwards"&&t!==null?(Zf(t),vn(t,n,r,i),Zf(t)):vn(t,n,r,i),r=ve?Ro:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,i,n);else if(t.tag===19)u0(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=c0(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Zf(n)),_u(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&iu(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}_u(n,!0,i,null,c,r);break;case"together":_u(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=c0(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),_u(n,!1,l,i,c,r)}return n.child}function f0(t,n,i){var r=n.pendingProps;return La(n,n.type,r.value),vn(t,n,r.children,i),n.child}function pa(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Mr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=la(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=la(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zl(t)))}function fy(t,n,i){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),La(n,fn,t.memoizedState.cache),Sr();break;case 27:case 5:it(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fa(n),n.flags|=128,null;r=Mr(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?l0(t,n,i):(Fa(n),t=pa(t,n,i),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return Kf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(Mr(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return Kf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),zo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,n0(t,n,i,n.pendingProps);case 24:La(n,fn,t.memoizedState.cache)}return pa(t,n,i)}function h0(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Qf(t,i)&&(n.flags&128)===0)return dn=!1,fy(t,n,i);dn=(t.flags&131072)!==0}else dn=!1,ve&&(n.flags&1048576)!==0&&Xm(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ar(n.elementType),n.type=t,typeof t=="function")af(t)?(r=Dr(t,r),n.tag=1,n=s0(null,n,t,r,i)):(n.tag=0,n=kf(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=$g(null,n,t,r,i);break t}else if(l===yt){n.tag=14,n=t0(null,n,t,r,i);break t}else if(l===dt){n.tag=10,n.type=t,n=f0(null,n,i);break t}}throw n=Nt(t)||t,Error(s(306,n,""))}}return n;case 0:return kf(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Dr(r,n.pendingProps),s0(t,n,r,l,i);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,_f(t,n),Po(n,r,null,i);var g=n.memoizedState;if(r=g.cache,La(n,fn,r),r!==c.cache&&ff(n,[fn],i,!0),Oo(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=o0(t,n,r,i);break t}else if(r!==l){l=gi(Error(s(424)),n),Co(l),n=o0(t,n,r,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=yi(t.firstChild),yn=n,ve=!0,Ua=null,xi=!0,i=ng(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(Sr(),r===l){n=pa(t,n,i);break t}vn(t,n,r,i)}n=n.child}return n;case 26:return gs(t,n),t===null?(i=I_(n.type,null,n.pendingProps,null))?n.memoizedState=i:ve||(n.stateNode=g_(n.type,n.pendingProps,Re.current,n)):n.memoizedState=I_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&ve&&(r=n.stateNode=L_(n.type,n.pendingProps,Re.current),yn=n,xi=!0,l=Ke,Wa(n.type)?(jh=l,Ke=yi(r.firstChild)):Ke=l),vn(t,n,n.pendingProps.children,i),gs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((l=r=Ke)&&(r=rM(r,n.type,n.pendingProps,xi),r!==null?(n.stateNode=r,yn=n,Ke=yi(r.firstChild),xi=!1,l=!0):l=!1),l||Na(n)),it(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Bh(l,c)?r=null:g!==null&&Bh(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=bf(t,n,ty,null,null,i),Os._currentValue=l),gs(t,n),vn(t,n,r,i),n.child;case 6:return t===null&&ve&&((t=i=Ke)&&(i=sM(i,n.pendingProps,xi),i!==null?(n.stateNode=i,yn=n,Ke=null,t=!0):t=!1),t||Na(n)),null;case 13:return l0(t,n,i);case 4:return N(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Cr(n,null,r,i):vn(t,n,r,i),n.child;case 11:return $g(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,gs(t,n),vn(t,n,r,i),n.child;case 8:return vn(t,n,n.pendingProps.children,i),n.child;case 12:return vn(t,n,n.pendingProps.children,i),n.child;case 10:return f0(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,Er(n),l=An(l),r=r(l),n.flags|=1,vn(t,n,r,i),n.child;case 14:return t0(t,n,n.type,n.pendingProps,i);case 15:return e0(t,n,n.type,n.pendingProps,i);case 19:return Kf(t,n,i);case 31:return uy(t,n,i);case 22:return n0(t,n,i,n.pendingProps);case 24:return Er(n),r=An(fn),t===null?(l=pf(),l===null&&(l=We,c=hf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},gf(n),La(n,fn,l)):((t.lanes&i)!==0&&(_f(t,n),Po(n,null,null,i),Oo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),La(n,fn,r)):(r=c.cache,La(n,fn,r),r!==l.cache&&ff(n,[fn],i,!0))),vn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&ql(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:gs(t,n),vn(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function Jf(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?G_(n,r):G_(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(j0())t.flags|=8192;else throw Rr=$l,mf}else t.flags&=-16777217}function d0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!V_(n))if(j0())t.flags|=8192;else throw Rr=$l,mf}function vu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Dl():536870912,t.lanes|=n,ys|=n)}function Go(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function hy(t,n,i){var r=n.pendingProps;switch(of(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fa(fn),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(us(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uf())),Qe(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ma(n),c!==null?(Qe(n),d0(n,c)):(Qe(n),Jf(n,l,null,r,i))):c?c!==t.memoizedState?(ma(n),Qe(n),d0(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ma(n),Qe(n),Jf(n,l,t,r,i)),null;case 27:if(mt(n),i=Re.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=Gt.current,us(n)?Ym(n):(t=L_(l,r,i),n.stateNode=t,ma(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=Gt.current,us(n))Ym(n);else{var g=Jo(Re.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(l,{is:r.is}):g.createElement(l)}}c[Ot]=n,c[Wt]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ma(n)}}return Qe(n),n.subtreeFlags&=-33554433,Jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Re.current,us(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=yn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Ot]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||h_(t.nodeValue,i)),t||Na(n,!0)}else t=Jo(t).createTextNode(r),t[Ot]=n,n.stateNode=t}return Qe(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=us(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ot]=n}else Sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else i=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ot]=n}else Sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),l=!1}else l=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),vu(n,n.updateQueue),Qe(n),null);case 4:return T(),t===null&&Lh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return fa(n.type),Qe(n),null;case 19:if(Ef(n),r=n.memoizedState,r===null)return Qe(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Go(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=iu(t),c!==null){for(n.flags|=128,Go(r,!1),t=c.updateQueue,n.updateQueue=t,vu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Hm(i,t),i=i.sibling;return zo(n,Cn.current&1|2),ve&&ua(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&A()>Du&&(n.flags|=128,l=!0,Go(r,!1),n.lanes=4194304)}else{if(!l)if(t=iu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,vu(n,t),Go(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ve)return Qe(n),null}else 2*A()-r.renderingStartTime>Du&&i!==536870912&&(n.flags|=128,l=!0,Go(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=A(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||ve?zo(n,c):(i=c,ae(Rn,n),ae(Cn,i),On===null&&(On=n)),ve&&ua(n,r.treeForkCount),t}return Qe(n),null;case 22:case 23:return ti(n),yf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),i=n.updateQueue,i!==null&&vu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Lt(br),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),fa(fn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(s(156,n.tag))}function dy(t,n){switch(of(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(fn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));Sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ef(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return fa(n.type),null;case 22:case 23:return ti(n),yf(),t!==null&&Lt(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(fn),null;case 25:return null;default:return null}}function p0(t,n){switch(of(n),n.tag){case 3:fa(fn),T();break;case 26:case 27:case 5:mt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Ef(n);break;case 10:fa(n.type);break;case 22:case 23:ti(n),yf(),t!==null&&Lt(br);break;case 24:fa(fn)}}function Vo(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,g=i.inst;r=c(),g.destroy=r}i=i.next}while(i!==l)}}catch(E){Ve(n,n.return,E)}}function Ga(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,l=n;var L=i,K=E;try{K()}catch(ut){Ve(l,L,ut)}}}r=r.next}while(r!==c)}}catch(ut){Ve(n,n.return,ut)}}function m0(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{ag(n,i)}catch(r){Ve(t,t.return,r)}}}function g0(t,n,i){i.props=Dr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Ve(t,n,r)}}function Vi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=sa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=E_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var g=new ri(t);p(t.child,!1,iM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Ve(t,n,E)}}function wn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Ve(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Ve(t,n,l)}else i.current=null}function xu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)w_(t.stateNode,n[i])}function _0(t){for(var n=t.return;n!==null&&(th(n)&&w_(t.stateNode,n.stateNode),!$f(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(th(n)&&aM(t.stateNode,n.stateNode),!$f(n));)n=n.return}function $f(t){return t.tag===5||t.tag===3||t.tag===27}function th(t){return t&&t.tag===7&&t.stateNode!==null}function eh(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Ve(t,t.return,l)}}function nh(t,n,i){try{var r=t.stateNode;Fy(r,t.type,i,n),r[Wt]=n}catch(l){Ve(t,t.return,l)}}function v0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function ih(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||v0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Fi)),xu(t,r),Le=!0;else if(l!==4&&(l===27&&(xu(t,r),r=null,Wa(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(ah(t,n,i,r),t=t.sibling;t!==null;)ah(t,n,i,r),t=t.sibling}function Su(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),xu(t,r),Le=!0;else if(l!==4&&(l===27&&(xu(t,r),r=null,Wa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(Su(t,n,i,r),t=t.sibling;t!==null;)Su(t,n,i,r),t=t.sibling}function x0(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,i),n[Ot]=t,n[Wt]=i}catch(c){Ve(t,t.return,c)}}var yu=!1,ei=null;function S0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yu=!0)}var Xi=null;function y0(){var t=Xi;return Xi=null,t}var jn=0;function _s(t,n,i,r,l){return jn=0,M0(t.child,n,i,r,l)}function M0(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=Gh(g);r.push(E),E.view&&(c=!0)}else c||Gh(g).view&&(c=!0);yu=!0,y_(g,jn===0?n:n+"_"+jn,i),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||M0(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function ki(t,n){for(;t!==null;)t.tag===5?M_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ki(t.child,n)),t=t.sibling}function Mu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Mu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=oa(n.default,n.share),n!=="none"&&(_s(t,i,n,null,!1)||ki(t.child,!1))}t=t.sibling}}function rh(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=sa(r,i),c=oa(r.default,i.paired?r.share:r.enter);c!=="none"?_s(t,l,c,null,!1)?(Mu(t),i.paired||n||bs(t,r.onEnter)):ki(t.child,!1):Mu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)rh(t,n),t=t.sibling;else Mu(t)}function sh(t){if(ei!==null&&ei.size!==0){var n=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=oa(i.default,i.share);if(c!=="none"&&(_s(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,bs(t,i.onShare)):ki(t.child,!1)),n.delete(r),n.size===0)break}}}sh(t)}t=t.sibling}}}function oh(t){if(t.tag===30){var n=t.memoizedProps,i=sa(n,t.stateNode),r=ei!==null?ei.get(i):void 0,l=oa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(_s(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ei.delete(i),bs(t,n.onShare)):bs(t,n.onExit):ki(t.child,!1)),ei!==null&&sh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)oh(t),t=t.sibling;else ei!==null&&sh(t)}function E0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=sa(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&_s(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&E0(t);t=t.sibling}}function lh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ki(t.child,!1))}lh(t)}t=t.sibling}}function Eu(t){if(t.tag===30)t.stateNode.paired=null,ki(t.child,!1),lh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Eu(t),t=t.sibling;else lh(t)}function T0(t){for(t=t.child;t!==null;)t.tag===30?ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&T0(t),t=t.sibling}function uh(t,n,i,r,l,c,g){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(c!==null&&jn<c.length){var K=c[jn],ut=Gh(L);(K.view||ut.view)&&(E=!0);var _t;if(_t=(t.flags&4)===0)if(ut.clip)_t=!0;else{_t=K.rect;var k=ut.rect;_t=_t.y!==k.y||_t.x!==k.x||_t.height!==k.height||_t.width!==k.width}_t&&(t.flags|=4),ut.abs?ut=!K.abs:(K=K.rect,ut=ut.rect,ut=K.height!==ut.height||K.width!==ut.width),ut&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&y_(L,jn===0?i:i+"_"+jn,l),E&&(t.flags&4)!==0||(Xi===null&&(Xi=[]),Xi.push(L,jn===0?r:r+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:uh(t,n.child,i,r,l,c,g)&&(E=!0));n=n.sibling}return E}function b0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=sa(i,r),c=oa(i.default,i.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;jn=0,l=uh(r,E,l,l,c,g,!1),(t.flags&4)!==0&&l&&bs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&b0(t);t=t.sibling}}var Mn=!1,Fe=!1,Yi=!1,ch=!1,A0=typeof WeakSet=="function"?WeakSet:Set,En=null,qi=!1,ko=!1,Tu=!1,fh=!1;function py(t,n,i){if(t=t.containerInfo,zh=Ps,t=Dm(t),Kc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,L=-1,K=-1,ut=0,_t=0,k=t,at=null;e:for(;;){for(var Pt;k!==r||c!==0&&k.nodeType!==3||(L=E+c),k!==g||l!==0&&k.nodeType!==3||(K=E+l),k.nodeType===3&&(E+=k.nodeValue.length),(Pt=k.firstChild)!==null;)at=k,k=Pt;for(;;){if(k===t)break e;if(at===r&&++ut===c&&(L=E),at===g&&++_t===l&&(K=E),(Pt=k.nextSibling)!==null)break;k=at,at=k.parentNode}k=Pt}r=L===-1||K===-1?null:{start:L,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ih={focusedElem:t,selectionRange:r},Ps=!1,i=(i&335544064)===i,En=n,n=i?9270:1024;En!==null;){if(t=En,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&oh(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&S0(t),bu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&oh(r),bu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&S0(t),bu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,En=r):(i&&E0(t),bu(i))}}ei=null}function bu(t){for(;En!==null;){var n=En,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Dr(n.type,l);i=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Ve(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)kh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":kh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=sa(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=oa(l.default,l.update),l!=="none"&&_s(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,En=r;break}En=n.return}}function R0(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:ji(t,i),r&4&&Vo(5,i);break;case 1:if(ji(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(g){Ve(i,i.return,g)}else{var l=Dr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ve(i,i.return,g)}}r&64&&m0(i),r&512&&Vi(i,i.return);break;case 3:if(ji(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{ag(t,n)}catch(g){Ve(i,i.return,g)}}break;case 27:n===null&&r&4&&x0(i);case 26:case 5:ji(t,i),n===null&&r&4&&eh(i),r&512&&Vi(i,i.return);break;case 12:ji(t,i);break;case 31:ji(t,i),r&4&&U0(t,i);break;case 13:ji(t,i),r&4&&N0(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=Ay.bind(null,i),oM(t,i))));break;case 22:if(r=i.memoizedState!==null||Mn,!r){var c=n!==null&&n.memoizedState!==null||Fe;n=Mn,l=Fe,Mn=r,(Fe=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ri(t,i,r)):ji(t,i),Mn=n,Fe=l}break;case 30:ji(t,i),r&512&&Vi(i,i.return);break;case 7:r&512&&Vi(i,i.return);default:ji(t,i)}}function hh(t,n){for(t=t.child;t!==null;)C0(t,n),t=t.sibling}function C0(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(L){Ve(t,t.return,L)}dh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Le=!0}catch(L){Ve(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?S_(E,!0):S_(t.stateNode,!1)}catch(L){Ve(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&hh(t,n);break;default:hh(t,n)}}function dh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:C0(i,r);break t;case 22:i.memoizedState===null&&dh(i,r);break t;default:dh(i,r)}}t=t.sibling}}function w0(t){var n=t.alternate;n!==null&&(t.alternate=null,w0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Wn=!1;function bi(t,n,i){for(i=i.child;i!==null;)D0(t,n,i),i=i.sibling}function D0(t,n,i){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Te,i)}catch{}switch(i.tag){case 26:Fe||wn(i,n),bi(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Fe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Fe||wn(i,n),Xo(i);var r=tn,l=Wn;Wa(i.type)&&(tn=i.stateNode,Wn=!1),bi(t,n,i),O_(i.stateNode,i.type,i.memoizedProps),tn=r,Wn=l;break;case 5:Fe||wn(i,n),Xo(i);case 6:if(i.tag===6&&Xo(i),r=tn,l=Wn,tn=null,bi(t,n,i),tn=r,Wn=l,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(i.stateNode),Le=!0}catch(c){Ve(i,n,c)}else try{tn.removeChild(i.stateNode),Le=!0}catch(c){Ve(i,n,c)}break;case 18:tn!==null&&(Wn?(t=tn,x_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),zs(t)):x_(tn,i.stateNode));break;case 4:r=tn,l=Wn,tn=i.stateNode.containerInfo,Wn=!0,bi(t,n,i),tn=r,Wn=l;break;case 0:case 11:case 14:case 15:Ga(2,i,n),Fe||Ga(4,i,n),bi(t,n,i);break;case 1:Fe||(wn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&g0(i,n,r)),bi(t,n,i);break;case 21:bi(t,n,i);break;case 22:Fe=(r=Fe)||i.memoizedState!==null,bi(t,n,i),Fe=r;break;case 30:wn(i,n),bi(t,n,i);break;case 7:Fe||wn(i,n),bi(t,n,i);break;default:bi(t,n,i)}}function U0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zs(t)}catch(i){Ve(n,n.return,i)}}}function N0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zs(t)}catch(i){Ve(n,n.return,i)}}function my(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new A0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new A0),n;default:throw Error(s(435,t.tag))}}function Au(t,n){var i=my(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=Ry.bind(null,t,r);r.then(l,l)}})}function Hn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],g=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Wa(L.type)){tn=L.stateNode,Wn=!1;break t}break;case 5:tn=L.stateNode,Wn=!1;break t;case 3:case 4:tn=L.stateNode.containerInfo,Wn=!0;break t}L=L.return}if(tn===null)throw Error(s(160));D0(g,E,c),tn=null,Wn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)L0(n,t,i),n=n.sibling}var Ai=null;function L0(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Hn(n,t,i),Gn(t),l&4&&(Ga(3,t,t.return),Vo(3,t),Ga(5,t,t.return));break;case 1:Hn(n,t,i),Gn(t),l&512&&(Fe||r===null||wn(r,r.return)),l&64&&Mn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=Ai,Hn(n,t,i),Gn(t),l&512&&(Fe||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Mn)t.stateNode=g_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Pe]||r[Ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,i),r[Ot]=t,Ne(r),n=r;break t;case"link":if(c=H_("link","href",l).get(n+(i.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(g,1);break e}}r=l.createElement(n),Dn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=H_("meta","content",l).get(n+(i.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(g,1);break e}}r=l.createElement(n),Dn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ot]=t,Ne(r),n=r}t.stateNode=n}else Mn||Qh(c,t.type,t.stateNode);else t.stateNode=F_(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Fe||n.parentNode.removeChild(n)):l.count--,i===null?Mn||Qh(c,t.type,t.stateNode):F_(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&nh(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,i),Gn(t),l&512&&(Fe||r===null||wn(r,r.return)),r!==null&&l&4&&nh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Yi,Yi=!1,Hn(n,t,i),Yi=c,Gn(t),l&512&&(Fe||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{$r(n,""),Le=!0}catch(ut){Ve(t,t.return,ut)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,nh(t,n,r!==null?r.memoizedProps:n)),l&1024&&(ch=!0);break;case 6:if(Hn(n,t,i),Gn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,Le=!0}catch(ut){Ve(t,t.return,ut)}}break;case 3:if(Le=!1,Gu=null,c=Ai,Ai=$o(n.containerInfo),Hn(n,t,i),Ai=c,Gn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(n.containerInfo)}catch(ut){Ve(t,t.return,ut)}ch&&(ch=!1,O0(t)),Le=!1;break;case 4:l=Yi,Yi=Mn,r=tm(),c=Ai,Ai=$o(t.stateNode.containerInfo),Hn(n,t,i),Gn(t),Ai=c,Le&&ko&&(Tu=!0),Le=r,Yi=l;break;case 12:Hn(n,t,i),Gn(t);break;case 31:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Au(t,n)));break;case 13:Hn(n,t,i),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(wu=A()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Au(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=Mn,L=Fe,K=Yi;Mn=E||c,Yi=K||c,Fe=L||g,Hn(n,t,i),Fe=L,Yi=K,Mn=E,Gn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||Mn||Fe||(n=g||Fe,i=Mn,r=Fe,Mn=c||Mn,Fe=n,Va(t,2),Mn=i,Fe=r),!c&&Yi||hh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Au(t,i))));break;case 19:Hn(n,t,i),Gn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Au(t,n)));break;case 30:l&512&&(Fe||r===null||wn(r,r.return)),l=tm(),c=ko,g=(i&335544064)===i,E=t.memoizedProps,ko=g&&oa(E.default,E.update)!=="none",Hn(n,t,i),Gn(t),g&&r!==null&&Le&&(t.flags|=4),ko=c,Le=l;break;case 21:break;case 7:l&512&&(Fe||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,i),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(v0(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(th(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if($f(l))break;l=l.return}var g=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,L=ih(t);Su(t,L,E,g);break;case 5:var K=i.stateNode;i.flags&32&&($r(K,""),i.flags&=-33);var ut=ih(t);Su(t,ut,K,g);break;case 3:case 4:var _t=i.stateNode.containerInfo,k=ih(t);ah(t,k,_t,g);break;default:throw Error(s(161))}}catch(at){Ve(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function O0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;O0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ps=!0,n.reset(),Ps=!1),t=t.sibling}}function vs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)P0(n,t),n=n.sibling;else b0(n)}function P0(t,n){var i=t.alternate;if(i===null)rh(t,!1);else switch(t.tag){case 3:if(fh=qi=!1,y0(),vs(n,t),!qi&&!Tu){if(t=Xi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];M_(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),fh=!0}Xi=null;break;case 5:vs(n,t);break;case 4:r=qi,qi=!1,vs(n,t),qi&&(Tu=!0),qi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?rh(t,!1):vs(n,t));break;case 30:r=qi,l=y0(),qi=!1,vs(n,t),qi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=sa(c,g),g=sa(i.memoizedProps,g);var E=oa(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,jn=0,n=uh(t,i,n,g,E,c,!0),jn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(bs(t,t.memoizedProps.onUpdate),Xi=l):l!==null&&(l.push.apply(l,Xi),Xi=l),qi=(t.flags&32)!==0?!0:r;break;default:vs(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)R0(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Ga(4,i,i.return),Va(i,r);break;case 1:wn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&g0(i,i.return,l),Va(i,r);break;case 27:(r&2)!==0&&O_(i.stateNode,i.type,i.memoizedProps);case 5:wn(i,i.return),i.tag!==5&&i.tag!==27||Xo(i),Va(i,r);break;case 6:Xo(i);break;case 26:wn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Fe||l.parentNode.removeChild(l),Va(i,r);break;case 22:i.memoizedState===null&&Va(i,r);break;case 30:wn(i,i.return),Va(i,r);break;case 7:wn(i,i.return);default:Va(i,r)}t=t.sibling}}function Ri(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,g=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ri(l,c,i),Vo(4,c);break;case 1:if(Ri(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ut){Ve(r,r.return,ut)}if(r=c,l=r.updateQueue,l!==null){var L=r.stateNode;try{var K=l.shared.hiddenCallbacks;if(K!==null)for(l.shared.hiddenCallbacks=null,l=0;l<K.length;l++)ig(K[l],L)}catch(ut){Ve(r,r.return,ut)}}E&&g&64&&m0(c),Vi(c,c.return);break;case 27:(i&2)!==0&&x0(c);case 5:c.tag!==5&&c.tag!==27||_0(c),Ri(l,c,i),E&&r===null&&g&4&&eh(c),Vi(c,c.return);break;case 6:_0(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||Mn||Qh($o(L.ownerDocument),c.type,L),Ri(l,c,i),E&&r===null&&g&4&&eh(c),Vi(c,c.return);break;case 12:Ri(l,c,i);break;case 31:Ri(l,c,i),E&&g&4&&U0(l,c);break;case 13:Ri(l,c,i),E&&g&4&&N0(l,c);break;case 22:c.memoizedState===null&&Ri(l,c,i),Vi(c,c.return);break;case 30:Ri(l,c,i),Vi(c,c.return);break;case 7:Vi(c,c.return);default:Ri(l,c,i)}n=n.sibling}}function ph(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&wo(i))}function mh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function Si(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)z0(t,n,i,r),n=n.sibling;else l&&T0(n)}function z0(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Eu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,i,r),c&2048&&Vo(9,n);break;case 1:Si(t,n,i,r);break;case 3:Si(t,n,i,r),l&&fh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&wo(c)));break;case 12:if(c&2048){Si(t,n,i,r),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,L=g.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(K){Ve(n,n.return,K)}}else Si(t,n,i,r);break;case 31:Si(t,n,i,r);break;case 13:Si(t,n,i,r);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&Eu(E),g._visibility&2?Si(t,n,i,r):Yo(t,n)):(l&&E!==null&&E.memoizedState!==null&&Eu(n),g._visibility&2?Si(t,n,i,r):(g._visibility|=2,xs(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&ph(E,n);break;case 24:Si(t,n,i,r),c&2048&&mh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ki(c.child,!0),ki(n.child,!0))),Si(t,n,i,r);break;default:Si(t,n,i,r)}}function xs(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=i,L=r,K=g.flags;switch(g.tag){case 0:case 11:case 15:xs(c,g,E,L,l),Vo(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?xs(c,g,E,L,l):Yo(c,g):(ut._visibility|=2,xs(c,g,E,L,l)),l&&K&2048&&ph(g.alternate,g);break;case 24:xs(c,g,E,L,l),l&&K&2048&&mh(g.alternate,g);break;default:xs(c,g,E,L,l)}n=n.sibling}}function Yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Yo(i,r),l&2048&&ph(r.alternate,r);break;case 24:Yo(i,r),l&2048&&mh(r.alternate,r);break;default:Yo(i,r)}n=n.sibling}}var Ur=8192;function Nr(t,n,i){if(t.subtreeFlags&Ur)for(t=t.child;t!==null;)I0(t,n,i),t=t.sibling}function I0(t,n,i){switch(t.tag){case 26:Nr(t,n,i),t.flags&Ur&&(t.memoizedState!==null?yM(i,Ai,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&k_(i,t)));break;case 5:Nr(t,n,i),t.flags&Ur&&(t=t.stateNode,(n&335544128)===n&&k_(i,t));break;case 3:case 4:var r=Ai;Ai=$o(t.stateNode.containerInfo),Nr(t,n,i),Ai=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ur,Ur=16777216,Nr(t,n,i),Ur=r):Nr(t,n,i));break;case 30:if((t.flags&Ur)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}Nr(t,n,i);break;default:Nr(t,n,i)}}function B0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];En=r,H0(r,t)}B0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)F0(t),t=t.sibling}function F0(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ru(t)):qo(t);break;default:qo(t)}}function Ru(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];En=r,H0(r,t)}B0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Ru(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Ru(n));break;default:Ru(n)}t=t.sibling}}function H0(t,n){for(;En!==null;){var i=En;switch(i.tag){case 0:case 11:case 15:Ga(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,En=r;else t:for(i=t;En!==null;){r=En;var l=r.sibling,c=r.return;if(w0(r),r===i){En=null;break t}if(l!==null){l.return=c,En=l;break t}En=c}}}var gy={getCacheForType:function(t){var n=An(fn),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return An(fn).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Ie=0,We=null,Se=null,be=0,Ge=0,ni=null,Xa=!1,Ss=!1,gh=!1,ga=0,sn=0,ka=0,Lr=0,Cu=0,ii=0,ys=0,jo=null,Zn=null,_h=!1,wu=0,G0=0,Du=1/0,Uu=null,Ya=null,nn=0,Ci=null,Or=null,Wi=0,vh=0,xh=null,V0=null,Ms=null,Es=null,Ts=null,Wo=0,Nu=null;function ai(){return(Ie&2)!==0&&be!==0?be&-be:Rt.T!==null?wh():wt()}function X0(){if(ii===0)if((be&536870912)===0||ve){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),ii=t}else ii=536870912;return t=Rn.current,t!==null&&(t.flags|=32),ii}function bs(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=E_(sa(t.memoizedProps,i))),Es===null&&(Es=[]),Es.push(n.bind(null,r))}}function Kn(t,n,i){(t===We&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(As(t,0),qa(t,be,ii,!1)),mr(t,i),((Ie&2)===0||t!==We)&&(t===We&&((Ie&2)===0&&(Lr|=i),sn===4&&qa(t,be,ii,!1)),Zi(t))}function k0(t,n,i){if((Ie&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),l=r?Sy(t,n):yh(t,n,!0),c=r;do{if(l===0){Ss&&!r&&qa(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!vy(i)){l=yh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;l=jo;var L=E.current.memoizedState.isDehydrated;if(L&&(As(E,g).flags|=256),g=yh(E,g,!1),g!==2&&g!==6){if(gh&&!L){E.errorRecoveryDisabledLanes|=c,Lr|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){As(t,0),qa(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qa(r,n,ii,!Xa);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=wu+300-A(),10<l)){if(qa(r,n,ii,!Xa),pr(r,0,!0)!==0)break t;Wi=n,r.timeoutHandle=Hh(Y0.bind(null,r,i,Zn,Uu,_h,n,ii,Lr,ys,Xa,c,"Throttled",-0,0),l);break t}Y0(r,i,Zn,Uu,_h,n,ii,Lr,ys,Xa,c,null,-0,0)}}break}while(!0);Zi(t)}function Y0(t,n,i,r,l,c,g,E,L,K,ut,_t,k,at){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Zt=(c&335544064)===c;if(_t=null,(Zt||Pt&8192||(Pt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ei=null,I0(n,c,_t),Zt&&(Pt=_t,Zt=t.containerInfo,Zt=(Zt.nodeType===9?Zt:Zt.ownerDocument).__reactViewTransition,Zt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=nl.bind(Pt),Zt.finished.then(Pt,Pt))),Pt=(c&62914560)===c?wu-A():(c&4194048)===c?G0-A():0,Pt=MM(_t,Pt),Pt!==null)){Wi=c,t.cancelPendingCommit=Pt($0.bind(null,t,n,c,i,r,l,g,E,L,K,ut,_t,null,k,at)),qa(t,c,g,!K);return}$0(t,n,c,i,r,l,g,E,L,K,ut,_t)}function vy(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!$n(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,i,r){n=wl(t,n),n&=~Cu,n&=~Lr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Nn(l),g=1<<c;r[c]=-1,l&=~g}i!==0&&R(t,i,n)}function Lu(){return(Ie&6)===0?(Zo(0),!1):!0}function Sh(){if(Se!==null){if(Ge===0)var t=Se.return;else t=Se,ca=yr=null,Cf(t),hs=null,No=0,t=Se;for(;t!==null;)p0(t.alternate,t),t=t.return;Se=null}}function As(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,Vy(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Wi=0,Sh(),We=t,Se=i=la(t.current,null),be=n,Ge=0,ni=null,Xa=!1,Ss=Aa(t,n),gh=!1,ys=ii=Cu=Lr=ka=sn=0,Zn=jo=null,_h=!1,ga=wl(t,n),Gl(),i}function q0(t,n){he=null,Rt.H=hu,n===fs||n===Jl?(n=$m(),Ge=3):n===mf?(n=$m(),Ge=4):Ge=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Se===null&&(sn=1,du(t,gi(n,t.current)))}function j0(){var t=Rn.current;return t===null?!0:(be&4194048)===be?On===null:(be&62914560)===be||(be&536870912)!==0?t===On:!1}function W0(){var t=Rt.H;return Rt.H=hu,t===null?hu:t}function Z0(){var t=Rt.A;return Rt.A=gy,t}function Ou(){sn=4,Xa||(be&4194048)!==be&&Rn.current!==null||(Ss=!0),(ka&134217727)===0&&(Lr&134217727)===0||We===null||qa(We,be,ii,!1)}function yh(t,n,i){var r=Ie;Ie|=2;var l=W0(),c=Z0();(We!==t||be!==n)&&(Uu=null,As(t,n)),n=!1;var g=sn;t:do try{if(Ge!==0&&Se!==null){var E=Se,L=ni;switch(Ge){case 8:Sh(),g=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var K=Ge;if(Ge=0,ni=null,Rs(t,E,L,K),i&&Ss){g=0;break t}break;default:K=Ge,Ge=0,ni=null,Rs(t,E,L,K)}}xy(),g=sn;break}catch(ut){q0(t,ut)}while(!0);return n&&t.shellSuspendCounter++,ca=yr=null,Ie=r,Rt.H=l,Rt.A=c,Se===null&&(We=null,be=0,Gl()),g}function xy(){for(;Se!==null;)K0(Se)}function Sy(t,n){var i=Ie;Ie|=2;var r=W0(),l=Z0();We!==t||be!==n?(Uu=null,Du=A()+500,As(t,n)):Ss=Aa(t,n);t:do try{if(Ge!==0&&Se!==null){n=Se;var c=ni;e:switch(Ge){case 1:Ge=0,ni=null,Rs(t,n,c,1);break;case 2:case 9:if(Qm(c)){Ge=0,ni=null,Q0(n);break}n=function(){Ge!==2&&Ge!==9||We!==t||(Ge=7),Zi(t)},c.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Qm(c)?(Ge=0,ni=null,Q0(n)):(Ge=0,ni=null,Rs(t,n,c,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var E=Se;if(g?V_(g):E.stateNode.complete){Ge=0,ni=null;var L=E.sibling;if(L!==null)Se=L;else{var K=E.return;K!==null?(Se=K,Pu(K)):Se=null}break e}}Ge=0,ni=null,Rs(t,n,c,5);break;case 6:Ge=0,ni=null,Rs(t,n,c,6);break;case 8:Sh(),sn=6;break t;default:throw Error(s(462))}}yy();break}catch(ut){q0(t,ut)}while(!0);return ca=yr=null,Rt.H=r,Rt.A=l,Ie=i,Se!==null?0:(We=null,be=0,Gl(),sn)}function yy(){for(;Se!==null&&!It();)K0(Se)}function K0(t){var n=h0(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?Pu(t):Se=n}function Q0(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=r0(i,n,n.pendingProps,n.type,void 0,be);break;case 11:n=r0(i,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Cf(n);var r=n;r===yn&&(ve?(jl(r),r.tag===5&&r.stateNode!=null&&(Ke=r.stateNode)):(jl(r),ve=!0));default:p0(i,n),n=Se=Hm(n,ga),n=h0(i,n,ga)}t.memoizedProps=t.pendingProps,n===null?Pu(t):Se=n}function Rs(t,n,i,r){ca=yr=null,Cf(n),hs=null,No=0;var l=n.return;try{if(ly(t,l,n,i,be)){sn=1,du(t,gi(i,t.current)),Se=null;return}}catch(c){if(l!==null)throw Se=l,c;sn=1,du(t,gi(i,t.current)),Se=null;return}n.flags&32768?(ve||r===1?t=!0:Ss||(be&536870912)!==0?t=!1:(Xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),J0(n,t)):Pu(n)}function Pu(t){var n=t;do{if((n.flags&32768)!==0){J0(n,Xa);return}t=n.return;var i=hy(n.alternate,n,ga);if(i!==null){Se=i;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);sn===0&&(sn=5)}function J0(t,n){do{var i=dy(t.alternate,t);if(i!==null){i.flags&=32767,Se=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=i}while(t!==null);sn=6,Se=null}function $0(t,n,i,r,l,c,g,E,L,K,ut,_t){t.cancelPendingCommit=null;do zu();while(nn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===We&&(Se=We=null,be=0),Or=n,Ci=t,Wi=i,xh=l,V0=r,My(t,n,i,g,E,L,_t)}}function My(t,n,i,r,l,c,g){var E=n.lanes|n.childLanes;if(vh=E,E|=ef,Nc(t,i,E,r,l,c),Es=null,(i&335544064)===i?(Ts=KS(t),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Cy(Mt,function(){return bh(),null})):(t.callbackNode=null,t.callbackPriority=0),yu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Rt.T,Rt.T=null,l=Bt.p,Bt.p=2,c=Ie,Ie|=4;try{py(t,n,i)}finally{Ie=c,Bt.p=l,Rt.T=r}}nn=1,yu?Ms=Wy(g,t.containerInfo,Ts,Mh,Eh,Ty,Th,bh,Ey):(Mh(),Eh(),Th())}function Ey(t){if(nn!==0){var n=Ci.onRecoverableError;n(t,{componentStack:null})}}function Ty(){nn===3&&(nn=0,P0(Or,Ci),nn=4)}function Mh(){if(nn===1){nn=0;var t=Ci,n=Or,i=Wi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Rt.T,Rt.T=null;var l=Bt.p;Bt.p=2;var c=Ie;Ie|=4;try{ko=Tu=!1,L0(n,t,i),i=Ih;var g=Dm(t.containerInfo),E=i.focusedElem,L=i.selectionRange;if(g!==E&&E&&E.ownerDocument&&wm(E.ownerDocument.documentElement,E)){if(L!==null&&Kc(E)){var K=L.start,ut=L.end;if(ut===void 0&&(ut=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ut,E.value.length);else{var _t=E.ownerDocument||document,k=_t&&_t.defaultView||window;if(k.getSelection){var at=k.getSelection(),Pt=E.textContent.length,Zt=Math.min(L.start,Pt),de=L.end===void 0?Zt:Math.min(L.end,Pt);!at.extend&&Zt>de&&(g=de,de=Zt,Zt=g);var Z=Cm(E,Zt),G=Cm(E,de);if(Z&&G&&(at.rangeCount!==1||at.anchorNode!==Z.node||at.anchorOffset!==Z.offset||at.focusNode!==G.node||at.focusOffset!==G.offset)){var nt=_t.createRange();nt.setStart(Z.node,Z.offset),at.removeAllRanges(),Zt>de?(at.addRange(nt),at.extend(G.node,G.offset)):(nt.setEnd(G.node,G.offset),at.addRange(nt))}}}}for(_t=[],at=E;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var gt=_t[E];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Ps=!!zh,Ih=zh=null}finally{Ie=c,Bt.p=l,Rt.T=r}}t.current=n,nn=2}}function Eh(){if(nn===2){nn=0;var t=Ci,n=Or,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Rt.T,Rt.T=null;var r=Bt.p;Bt.p=2;var l=Ie;Ie|=4;try{R0(t,n.alternate,n)}finally{Ie=l,Bt.p=r,Rt.T=i}}nn=3}}function Th(){if(nn===4||nn===3){nn=0;var t=Ms;Ms=null,F();var n=Ci,i=Or,r=Wi,l=V0,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?nn=5:(nn=0,Or=Ci=null,t_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ya=null),tt(r),i=i.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Rt.T,c=Bt.p,Bt.p=2,Rt.T=null;try{for(var g=n.onRecoverableError,E=0;E<l.length;E++){var L=l[E];g(L.value,{componentStack:L.stack})}}finally{Rt.T=i,Bt.p=c}}if(l=Es,g=Ts,Ts=null,l!==null&&(Es=null,g===null&&(g=[]),t!==null))for(L=0;L<l.length;L++)i=(0,l[L])(g),i!==void 0&&t.finished.finally(i);(Wi&3)!==0&&zu(),Zi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Nu?Wo++:(Wo=0,Nu=n):(Wo=0,Nu=null),Zo(0)}}function t_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function zu(){return Ms!==null&&(Ms.skipTransition(),Ms=null),Mh(),Eh(),Th(),bh()}function bh(){if(nn!==5)return!1;var t=Ci,n=vh;vh=0;var i=tt(Wi),r=Rt.T,l=Bt.p;try{Bt.p=32>i?32:i,Rt.T=null,i=xh,xh=null;var c=Ci,g=Wi;if(nn=0,Or=Ci=null,Wi=0,(Ie&6)!==0)throw Error(s(331));var E=Ie;if(Ie|=4,F0(c.current),z0(c,c.current,g,i),Ie=E,Zo(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Te,c)}catch{}return!0}finally{Bt.p=l,Rt.T=r,t_(t,n)}}function e_(t,n,i){n=gi(i,n),n=Vf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(mr(t,2),Zi(t))}function Ve(t,n,i){if(t.tag===3)e_(t,t,i);else for(;n!==null;){if(n.tag===3){e_(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){t=gi(i,t),i=Qg(2),r=Ia(n,i,2),r!==null&&(Jg(i,r,n,t),mr(r,2),Zi(r));break}}n=n.return}}function Ah(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new _y;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(gh=!0,l.add(i),t=by.bind(null,t,n,i),n.then(t,t))}function by(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,We===t&&(be&i)===i&&((sn===4||sn===3&&(be&62914560)===be&&300>A()-wu)&&(Ie&2)===0?As(t,0):Cu|=i,ys===be&&(ys=0)),Zi(t)}function n_(t,n){n===0&&(n=Dl()),t=vr(t,n),t!==null&&(mr(t,n),Zi(t))}function Ay(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),n_(t,i)}function Ry(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),n_(t,i)}function Cy(t,n){return $t(t,n)}var Cs=null,ws=null,Rh=!1,Iu=!1,Ch=!1,ja=0;function Zi(t){t!==ws&&t.next===null&&(ws===null?Cs=ws=t:ws=ws.next=t),Iu=!0,Rh||(Rh=!0,Dy())}function Zo(t,n){if(!Ch&&Iu){Ch=!0;do for(var i=!1,r=Cs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Nn(42|t)+1)-1,c&=l&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,s_(r,c))}else c=be,c=pr(r,r===We?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Aa(r,c)||(i=!0,s_(r,c));r=r.next}while(i);Ch=!1}}function wy(){i_()}function i_(){Iu=Rh=!1;var t=0;ja!==0&&Gy()&&(t=ja);for(var n=A(),i=null,r=Cs;r!==null;){var l=r.next,c=a_(r,n);c===0?(r.next=null,i===null?Cs=l:i.next=l,l===null&&(ws=i)):(i=r,(t!==0||(c&3)!==0)&&(Iu=!0)),r=l}nn!==0&&nn!==5||Zo(t),ja!==0&&(ja=0)}function a_(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Nn(c),E=1<<g,L=l[g];L===-1?((E&i)===0||(E&r)!==0)&&(l[g]=Uc(E,n)):L<=n&&(t.expiredLanes|=E),c&=~E}if(n=We,i=be,i=pr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Kt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Aa(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&Kt(r),tt(i)){case 2:case 8:i=Dt;break;case 32:i=Mt;break;case 268435456:i=Xt;break;default:i=Mt}return r=r_.bind(null,t),i=$t(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&Kt(r),t.callbackPriority=2,t.callbackNode=null,2}function r_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(zu()&&t.callbackNode!==i)return null;var r=be;return r=pr(t,t===We?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(k0(t,r,n),a_(t,A()),t.callbackNode!=null&&t.callbackNode===i?r_.bind(null,t):null)}function s_(t,n){if(zu())return null;k0(t,n,!0)}function Dy(){Xy(function(){(Ie&6)!==0?$t(vt,wy):i_()})}function wh(){if(ja===0){var t=Tr;t===0&&(t=hr,hr<<=1,(hr&261888)===0&&(hr=256)),ja=t}return ja}function o_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ll(t)}function Uy(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=o_((l[Wt]||null).action),g=r.submitter;g&&(n=(n=g[Wt]||null)?o_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Il("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var L=new FormData(l,g);If(i,{pending:!0,data:L,method:l.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(l,g),If(i,{pending:!0,data:L,method:l.method,action:c},c,L))},currentTarget:l}]})}}for(var Dh=0;Dh<tf.length;Dh++){var Uh=tf[Dh],Ny=Uh.toLowerCase(),Ly=Uh[0].toUpperCase()+Uh.slice(1);Ti(Ny,"on"+Ly)}Ti(Lm,"onAnimationEnd"),Ti(Om,"onAnimationIteration"),Ti(Pm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(VS,"onTransitionRun"),Ti(XS,"onTransitionStart"),Ti(kS,"onTransitionCancel"),Ti(zm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function l_(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],L=E.instance,K=E.currentTarget;if(E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=K;try{c(l)}catch(ut){Hl(ut)}l.currentTarget=null,c=L}else for(g=0;g<r.length;g++){if(E=r[g],L=E.instance,K=E.currentTarget,E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=K;try{c(l)}catch(ut){Hl(ut)}l.currentTarget=null,c=L}}}}function ye(t,n){var i=n[ee];i===void 0&&(i=n[ee]=new Set);var r=t+"__bubble";i.has(r)||(u_(n,t,2,!1),i.add(r))}function Nh(t,n,i){var r=0;n&&(r|=4),u_(i,t,r,n)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function Lh(t){if(!t[Bu]){t[Bu]=!0,Ze.forEach(function(i){i!=="selectionchange"&&(Oy.has(i)||Nh(i,!1,t),Nh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bu]||(n[Bu]=!0,Nh("selectionchange",!1,n))}}function u_(t,n,i,r){switch(J_(n)){case 2:var l=AM;break;case 8:l=RM;break;default:l=$h}i=l.bind(null,n,i,t),l=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Oh(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===l)break;if(g===4)for(g=r.return;g!==null;){var L=g.tag;if((L===3||L===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;E!==null;){if(g=ze(E),g===null)return;if(L=g.tag,L===5||L===6||L===26||L===27){r=c=g;continue t}E=E.parentNode}}r=r.return}um(function(){var K=c,ut=Bc(i),_t=[];t:{var k=Im.get(t);if(k!==void 0){var at=Il,Pt=t;switch(t){case"keypress":if(Pl(i)===0)break t;case"keydown":case"keyup":at=vS;break;case"focusin":Pt="focus",at=kc;break;case"focusout":Pt="blur",at=kc;break;case"beforeblur":case"afterblur":at=kc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=ES;break;case Lm:case Om:case Pm:at=uS;break;case zm:at=bS;break;case"scroll":case"scrollend":at=aS;break;case"wheel":at=RS;break;case"copy":case"cut":case"paste":at=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=pm;break;case"submit":at=yS;break;case"toggle":case"beforetoggle":at=wS}var Zt=(n&4)!==0,de=!Zt&&(t==="scroll"||t==="scrollend"),Z=Zt?k!==null?k+"Capture":null:k;Zt=[];for(var G=K,nt;G!==null;){var gt=G;if(nt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||nt===null||Z===null||(gt=vo(G,Z),gt!=null&&Zt.push(Qo(G,gt,nt))),de)break;G=G.return}0<Zt.length&&(k=new at(k,Pt,null,i,ut),_t.push({event:k,listeners:Zt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",at&&i!==Ic&&(Pt=i.relatedTarget||i.fromElement)&&(ze(Pt)||Pt[re]))break t;(k||at)&&(Pt=ut.window===ut?ut:(at=ut.ownerDocument)?at.defaultView||at.parentWindow:window,k?(at=i.relatedTarget||i.toElement,k=K,at=at?ze(at):null,at!==null&&(de=f(at),Zt=at.tag,at!==de||Zt!==5&&Zt!==27&&Zt!==6)&&(at=null)):(k=null,at=K),k!==at&&(Zt=hm,gt="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=pm,gt="onPointerLeave",Z="onPointerEnter",G="pointer"),de=k==null?Pt:_n(k),nt=at==null?Pt:_n(at),Pt=new Zt(gt,G+"leave",k,i,ut),Pt.target=de,Pt.relatedTarget=nt,gt=null,ze(ut)===K&&(Zt=new Zt(Z,G+"enter",at,i,ut),Zt.target=nt,Zt.relatedTarget=de,gt=Zt),de=gt,Zt=k&&at?H(k,at,Py):null,k!==null&&c_(_t,Pt,k,Zt,!1),at!==null&&de!==null&&c_(_t,de,at,Zt,!0)))}t:{if(k=K?_n(K):window,at=k.nodeName&&k.nodeName.toLowerCase(),at==="select"||at==="input"&&k.type==="file")var Yt=Mm;else if(Sm(k))if(Em)Yt=FS;else{Yt=IS;var Ae=zS}else at=k.nodeName,!at||at.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?K&&zc(K.elementType)&&(Yt=Mm):Yt=BS;if(Yt&&(Yt=Yt(t,K))){ym(_t,Yt,i,ut);break t}Ae&&Ae(t,k,K)}switch(Ae=K?_n(K):window,t){case"focusin":(Sm(Ae)||Ae.contentEditable==="true")&&(is=Ae,Qc=K,Ao=null);break;case"focusout":Ao=Qc=is=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Um(_t,i,ut);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Um(_t,i,ut)}var te;if(qc)t:{switch(t){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else ns?vm(t,i)&&(le="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(le="onCompositionStart");le&&(mm&&i.locale!=="ko"&&(ns||le!=="onCompositionStart"?le==="onCompositionEnd"&&ns&&(te=cm()):(Ca=ut,Gc="value"in Ca?Ca.value:Ca.textContent,ns=!0)),Ae=Fu(K,le),0<Ae.length&&(le=new dm(le,t,null,i,ut),_t.push({event:le,listeners:Ae}),te?le.data=te:(te=xm(i),te!==null&&(le.data=te)))),(te=US?NS(t,i):LS(t,i))&&(le=Fu(K,"onBeforeInput"),0<le.length&&(Ae=new dm("onBeforeInput","beforeinput",null,i,ut),_t.push({event:Ae,listeners:le}),Ae.data=te)),Uy(_t,t,K,i,ut)}l_(_t,n)})}function Qo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Fu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=vo(t,i),l!=null&&r.unshift(Qo(t,l,c)),l=vo(t,n),l!=null&&r.push(Qo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function c_(t,n,i,r,l){for(var c=n._reactName,g=[];i!==null&&i!==r;){var E=i,L=E.alternate,K=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||K===null||(L=K,l?(K=vo(i,c),K!=null&&g.unshift(Qo(i,K,L))):l||(K=vo(i,c),K!=null&&g.push(Qo(i,K,L)))),i=i.return}g.length!==0&&t.push({event:n,listeners:g})}var zy=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function f_(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(Iy,"")}function h_(t,n){return n=f_(n),f_(t)===n}function Xe(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||$r(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&$r(t,""+r);else return;break;case"className":Nl(t,"class",r);break;case"tabIndex":Nl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(t,i,r);break;case"style":om(t,r,c);return;case"data":if(n!=="object"){Nl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Ll(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Xe(t,n,"name",l.name,l,null),Xe(t,n,"formEncType",l.formEncType,l,null),Xe(t,n,"formMethod",l.formMethod,l,null),Xe(t,n,"formTarget",l.formTarget,l,null)):(Xe(t,n,"encType",l.encType,l,null),Xe(t,n,"method",l.method,l,null),Xe(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Ll(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Fi);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Ll(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Ul(t,"popover",r);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ul(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=nS.get(i)||i,Ul(t,i,r);else return}Le=!0}function Ph(t,n,i,r,l,c){switch(i){case"style":om(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")$r(t,r);else if(typeof r=="number"||typeof r=="bigint")$r(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!In.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[Wt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Le=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Ul(t,i,r)}return}Le=!0}function Dn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var g=i[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,c,g,i,null)}}l&&Xe(t,n,"srcSet",i.srcSet,i,null),r&&Xe(t,n,"src",i.src,i,null);return;case"input":ye("invalid",t);var E=c=g=l=null,L=null,K=null;for(r in i)if(i.hasOwnProperty(r)){var ut=i[r];if(ut!=null)switch(r){case"name":l=ut;break;case"type":g=ut;break;case"checked":L=ut;break;case"defaultChecked":K=ut;break;case"value":c=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Xe(t,n,r,ut,i,null)}}im(t,c,E,L,K,g,l,!1);return;case"select":ye("invalid",t),r=g=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Xe(t,n,l,E,i,null)}n=c,i=g,t.multiple=!!r,n!=null?Jr(t,!!r,n,!1):i!=null&&Jr(t,!!r,i,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(g in i)if(i.hasOwnProperty(g)&&(E=i[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Xe(t,n,g,E,i,null)}rm(t,r,l,c);return;case"option":for(L in i)if(i.hasOwnProperty(L)&&(r=i[L],r!=null))switch(L){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(t,n,L,r,i,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<Ko.length;r++)ye(Ko[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in i)if(i.hasOwnProperty(K)&&(r=i[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,K,r,i,null)}return;default:if(zc(n)){for(ut in i)i.hasOwnProperty(ut)&&(r=i[ut],r!==void 0&&Ph(t,n,ut,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Xe(t,n,E,r,i,null))}var By={};function Fy(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,E=null,L=null,K=null,ut=null;for(at in i){var _t=i[at];if(i.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":L=_t;default:r.hasOwnProperty(at)||Xe(t,n,at,null,r,_t)}}for(var k in r){var at=r[k];if(_t=i[k],r.hasOwnProperty(k)&&(at!=null||_t!=null))switch(k){case"type":at!==_t&&(Le=!0),c=at;break;case"name":at!==_t&&(Le=!0),l=at;break;case"checked":at!==_t&&(Le=!0),K=at;break;case"defaultChecked":at!==_t&&(Le=!0),ut=at;break;case"value":at!==_t&&(Le=!0),g=at;break;case"defaultValue":at!==_t&&(Le=!0),E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==_t&&Xe(t,n,k,at,r,_t)}}Oc(t,g,E,L,K,ut,c,l);return;case"select":at=g=E=k=null;for(c in i)if(L=i[c],i.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":at=L;default:r.hasOwnProperty(c)||Xe(t,n,c,null,r,L)}for(l in r)if(c=r[l],L=i[l],r.hasOwnProperty(l)&&(c!=null||L!=null))switch(l){case"value":c!==L&&(Le=!0),k=c;break;case"defaultValue":c!==L&&(Le=!0),E=c;break;case"multiple":c!==L&&(Le=!0),g=c;default:c!==L&&Xe(t,n,l,c,r,L)}n=E,i=g,r=at,k!=null?Jr(t,!!i,k,!1):!!r!=!!i&&(n!=null?Jr(t,!!i,n,!0):Jr(t,!!i,i?[]:"",!1));return;case"textarea":at=k=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xe(t,n,E,null,r,l)}for(g in r)if(l=r[g],c=i[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(Le=!0),k=l;break;case"defaultValue":l!==c&&(Le=!0),at=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Xe(t,n,g,l,r,c)}am(t,k,at);return;case"option":for(var Pt in i)if(k=i[Pt],i.hasOwnProperty(Pt)&&k!=null&&!r.hasOwnProperty(Pt))switch(Pt){case"selected":t.selected=!1;break;default:Xe(t,n,Pt,null,r,k)}for(L in r)if(k=r[L],at=i[L],r.hasOwnProperty(L)&&k!==at&&(k!=null||at!=null))switch(L){case"selected":k!==at&&(Le=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Xe(t,n,L,k,r,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in i)k=i[Zt],i.hasOwnProperty(Zt)&&k!=null&&!r.hasOwnProperty(Zt)&&Xe(t,n,Zt,null,r,k);for(K in r)if(k=r[K],at=i[K],r.hasOwnProperty(K)&&k!==at&&(k!=null||at!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,n));break;default:Xe(t,n,K,k,r,at)}return;default:if(zc(n)){for(var de in i)k=i[de],i.hasOwnProperty(de)&&k!==void 0&&!r.hasOwnProperty(de)&&Ph(t,n,de,void 0,r,k);for(ut in r)k=r[ut],at=i[ut],!r.hasOwnProperty(ut)||k===at||k===void 0&&at===void 0||Ph(t,n,ut,k,r,at);return}}for(var Z in i)k=i[Z],i.hasOwnProperty(Z)&&k!=null&&!r.hasOwnProperty(Z)&&Xe(t,n,Z,null,r,k);for(_t in r)k=r[_t],at=i[_t],!r.hasOwnProperty(_t)||k===at||k==null&&at==null||Xe(t,n,_t,k,r,at)}function d_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,g=l.initiatorType,E=l.duration;if(c&&E&&d_(g)){for(g=0,E=l.responseEnd,r+=1;r<i.length;r++){var L=i[r],K=L.startTime;if(K>E)break;var ut=L.transferSize,_t=L.initiatorType;ut&&d_(_t)&&(L=L.responseEnd,g+=ut*(L<E?1:(E-K)/(L-K)))}if(--r,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zh=null,Ih=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function p_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function g_(t,n,i,r){return i=Jo(i).createElement(t),i[Ot]=r,i[Wt]=n,Dn(i,t,n),Ne(i),i}function Bh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fh=null;function Gy(){var t=window.event;return t&&t.type==="popstate"?t===Fh?!1:(Fh=t,!0):(Fh=null,!1)}var Hh=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,__=typeof Promise=="function"?Promise:void 0,v_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hh,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof __<"u"?function(t){return __.resolve(null).then(t).catch(ky)}:Hh;function ky(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function x_(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),zs(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Wh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Wh(i);for(var c=i.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Pe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=g}}else i==="body"&&Wh(t.ownerDocument.body);i=l}while(i);zs(n)}function S_(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function y_(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function M_(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Yy(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Gh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return Yy(n,i,t)}function qy(t){return t.documentElement.clientHeight}function jy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Wy(t,n,i,r,l,c,g,E,L){var K=n.nodeType===9?n:n.ownerDocument;try{var ut=K.startViewTransition({update:function(){var k=K.defaultView,at=k.navigation&&k.navigation.transition,Pt=K.fonts.status;r();var Zt=[];if(Pt==="loaded"&&(qy(K),K.fonts.status==="loading"&&Zt.push(K.fonts.ready)),Pt=Zt.length,t!==null)for(var de=t.suspenseyImages,Z=0,G=0;G<de.length;G++){var nt=de[G];if(!nt.complete){var gt=nt.getBoundingClientRect();if(0<gt.bottom&&0<gt.right&&gt.top<k.innerHeight&&gt.left<k.innerWidth){if(Z+=X_(nt),Z>Vu){Zt.length=Pt;break}nt=new Promise(jy.bind(nt)),Zt.push(nt)}}}if(0<Zt.length)return k=Promise.race([Promise.all(Zt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(l,l),(at?Promise.allSettled([at.finished,k]):k).then(c,c);if(l(),at)return at.finished.then(c,c);c()},types:i});K.__reactViewTransition=ut;var _t=[];return ut.ready.then(function(){for(var k=K.documentElement.getAnimations({subtree:!0}),at=0;at<k.length;at++){var Pt=k[at],Zt=Pt.effect,de=Zt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){_t.push(Pt),Pt=Zt.getKeyframes();for(var Z=de=void 0,G=!0,nt=0;nt<Pt.length;nt++){var gt=Pt[nt],Yt=gt.width;if(de===void 0)de=Yt;else if(de!==Yt){G=!1;break}if(Yt=gt.height,Z===void 0)Z=Yt;else if(Z!==Yt){G=!1;break}delete gt.width,delete gt.height,gt.transform==="none"&&delete gt.transform}G&&de!==void 0&&Z!==void 0&&(Zt.setKeyframes(Pt),G=getComputedStyle(Zt.target,Zt.pseudoElement),G.width!==de||G.height!==Z)&&(G=Pt[0],G.width=de,G.height=Z,G=Pt[Pt.length-1],G.width=de,G.height=Z,Zt.setKeyframes(Pt))}}g()},function(k){K.__reactViewTransition===ut&&(K.__reactViewTransition=null);try{if(typeof k=="object"&&k!==null)switch(k.name){case"InvalidStateError":(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null)}k!==null&&L(k)}finally{r(),l(),g()}}),ut.finished.finally(function(){for(var k=0;k<_t.length;k++)_t[k].cancel();K.__reactViewTransition===ut&&(K.__reactViewTransition=null),E()}),ut}catch{return r(),l(),g(),null}}function Pr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Pr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Pr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Pr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function E_(t){return{name:t,group:new Pr("group",t),imagePair:new Pr("image-pair",t),old:new Pr("old",t),new:new Pr("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(b_(c,t,n,i)===-1){var g=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(L){g.removeEventListener(t,n,i),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),r!==null&&(l=g.removeEventListener.bind(g,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,Zy,t,E,r)}this._eventListeners=c}};function Zy(t,n,i,r){return M(t).addEventListener(n,i,r),!1}ri.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=b_(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Ds(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Ky,t,i,l),r.splice(n,1),c!==null&&c()}};function Ky(t,n,i,r){return M(t).removeEventListener(n,i,r),!1}function Ds(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function T_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function b_(t,n,i,r){if(t.length===0)return-1;r=T_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&T_(c.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ri.prototype.focus=function(t){p(this._fragmentFiber.child,!0,A_,t,void 0,void 0)};function A_(t,n){return t.tag===6?!1:(t=M(t),lM(t,n))}ri.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Vh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!A_(n[i],t);i--);};function Vh(t,n){return n.push(t),!1}ri.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=Jo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Qy,t,void 0,void 0))};function Qy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Jy,t,void 0,void 0)};function Jy(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,$y,t,void 0,void 0);for(var i=n=0;i<wi.length;i++){var r=wi[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):wi[n++]=r}wi.length=n}};function $y(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var wi=[],Xh=!1;function tM(t,n,i){wi.push({fragmentInstance:t,observer:n,instance:i}),Xh||(Xh=!0,uM(function(){Xh=!1;var r=wi;wi=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,eM,t,void 0,void 0),t};function eM(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,Vh,i,void 0,void 0);var r=M(n);if(i.length===0){if(i=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(i[0]),l=M(i[i.length-1]);var c=y(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),L=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||nM(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function nM(t,n,i,r,l){var c=ze(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=H(i,c,X),n===null?n=!1:(p(n,!0,z,c,i),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=H(r,c,X),n===null?n=!1:(p(n,!0,U,c,r),c=x,B=x=null,n=c!==null)),n):!1}function R_(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,Vh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),R_(t,i);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),R_(l,i)):M(l).scrollIntoView(t),r+=i?-1:1}};function iM(t,n){return t=M(t),C_(t,n),!1}function C_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function w_(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var g=0,E=0;E<wi.length;E++){var L=wi[E];(L.fragmentInstance!==n||L.observer!==c||L.instance!==t)&&(wi[g++]=L)}wi.length=g,c.observe(t)}),C_(t,n))}function aM(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?tM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function kh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":kh(i),ne(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function rM(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Pe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function sM(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=yi(t.nextSibling),t===null))return null;return t}function D_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Yh(t){return t.data==="$?"||t.data==="$~"}function qh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function oM(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var jh=null;function U_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return yi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function N_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function lM(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function uM(t){v_(function(){v_(function(n){return t(n)})})}function L_(t,n,i){switch(n=Jo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function O_(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Xe(t,n,r,null,By,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),ne(t)}function Wh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ne(t)}var Mi=new Map,P_=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=Bt.d;Bt.d={f:cM,r:fM,D:hM,C:dM,L:pM,m:mM,X:_M,S:gM,M:vM};function cM(){var t=_a.f(),n=Lu();return t||n}function fM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?Ig(n):_a.r(t)}var Us=typeof document>"u"?null:document;function z_(t,n,i){var r=Us;if(r&&typeof n=="string"&&n){var l=pi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),P_.has(l)||(P_.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",t),Ne(n),r.head.appendChild(n)))}}function hM(t){_a.D(t),z_("dns-prefetch",t,null)}function dM(t,n){_a.C(t,n),z_("preconnect",t,n)}function pM(t,n,i){_a.L(t,n,i);var r=Us;if(r&&t&&n){var l='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+pi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+pi(i.imageSizes)+'"]')):l+='[href="'+pi(t)+'"]';var c=l;switch(n){case"style":c=Ns(t);break;case"script":c=Ls(t)}if(!(Mi.has(c)||(t=O({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Mi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(tl(c))||n==="script"&&r.querySelector(el(c))))){var g=r.createElement("link");Dn(g,"link",t),n==="style"&&(g[Ue]=!0,g.onload=g.onerror=function(){Ra(g)}),Ne(g),r.head.appendChild(g)}}}function mM(t,n){_a.m(t,n);var i=Us;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ls(t)}if(!Mi.has(c)&&(t=O({rel:"modulepreload",href:t},n),Mi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(el(c)))return}r=i.createElement("link"),Dn(r,"link",t),Ne(r),i.head.appendChild(r)}}}function gM(t,n,i){_a.S(t,n,i);var r=Us;if(r&&t){var l=Qn(r).hoistableStyles,c=Ns(t);n=n||"default";var g=l.get(c);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(tl(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Mi.get(c))&&Zh(t,i);var L=g=r.createElement("link");Ne(L),Dn(L,"link",t),L._p=new Promise(function(K,ut){L.onload=K,L.onerror=ut}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},l.set(c,g)}}}function _M(t,n){_a.X(t,n);var i=Us;if(i&&t){var r=Qn(i).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=i.querySelector(el(l)),c||(t=O({src:t,async:!0},n),(n=Mi.get(l))&&Kh(t,n),c=i.createElement("script"),Ne(c),Dn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function vM(t,n){_a.M(t,n);var i=Us;if(i&&t){var r=Qn(i).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=i.querySelector(el(l)),c||(t=O({src:t,async:!0,type:"module"},n),(n=Mi.get(l))&&Kh(t,n),c=i.createElement("script"),Ne(c),Dn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function I_(t,n,i,r){var l=(l=Re.current)?$o(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ns(i.href),n=Qn(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ns(i.href);var c=Qn(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(tl(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Mi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Mi.set(t,c)),xM(l,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Ls(i),n=Qn(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ns(t){return'href="'+pi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function B_(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function xM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ue]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ue]=!0,n.onload=n.onerror=Ra.bind(null,n),Dn(n,"link",i),Ne(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ls(t){return'[src="'+pi(t)+'"]'}function el(t){return"script[async]"+t}function F_(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pi(i.href)+'"]');if(r)return n.instance=r,Ne(r),r;var l=O({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ne(r),Dn(r,"style",l),Hu(r,i.precedence,t),n.instance=r;case"stylesheet":l=Ns(i.href);var c=t.querySelector(tl(l));if(c)return n.state.loading|=4,n.instance=c,Ne(c),c;r=B_(i),(l=Mi.get(l))&&Zh(r,l),c=(t.ownerDocument||t).createElement("link"),Ne(c);var g=c;return g._p=new Promise(function(E,L){g.onload=E,g.onerror=L}),Dn(c,"link",r),n.state.loading|=4,Hu(c,i.precedence,t),n.instance=c;case"script":return c=Ls(i.src),(l=t.querySelector(el(c)))?(n.instance=l,Ne(l),l):(r=i,(l=Mi.get(c))&&(r=O({},i),Kh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ne(l),Dn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Hu(r,i.precedence,t));return n.instance}function Hu(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Zh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gu=null;function H_(t,n,i){if(Gu===null){var r=new Map,l=Gu=new Map;l.set(i,r)}else l=Gu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Pe]||c[Ot]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(c):r.set(g,[c])}}return r}function Qh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function SM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function V_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function X_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function k_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=X_(n),t.suspenseyImages.push(n)),t=EM.bind(t),n.decode().then(t,t))}function yM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ns(r.href),c=n.querySelector(tl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,Ne(c);return}c=n.ownerDocument||n,r=B_(r),(l=Mi.get(l))&&Zh(r,l),c=c.createElement("link"),Ne(c);var g=c;g._p=new Promise(function(E,L){g.onload=E,g.onerror=L}),Dn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=nl.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Vu=0;function MM(t,n){return t.stylesheets&&t.count===0&&ku(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&ku(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Vu===0&&(Vu=62500*Hy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ku(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Vu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Y_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ku(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,Y_(this)}function EM(){this.imgCount--,Y_(this)}var Xu=null;function ku(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xu=new Map,n.forEach(TM,t),Xu=null,nl.call(t))}function TM(t,n){if(!(n.state.loading&4)){var i=Xu.get(t);if(i)var r=i.get(null);else{i=new Map,Xu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(i.set(g.dataset.precedence,g),r=g)}r&&i.set(null,r)}l=n.instance,g=l.getAttribute("data-precedence"),c=i.get(g)||r,c===r&&i.set(null,l),i.set(g,l),this.count++,r=nl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Os={$$typeof:dt,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function bM(t,n,i,r,l,c,g,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function q_(t,n,i,r,l,c,g,E,L,K,ut,_t){return t=new bM(t,n,i,g,L,K,ut,_t,E),n=1,c===!0&&(n|=24),c=qn(3,null,null,n),t.current=c,c.stateNode=t,n=hf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},gf(c),t}function j_(t){return t?(t=ss,t):ss}function W_(t,n,i,r,l,c){l=j_(l),r.context===null?r.context=l:r.pendingContext=l,r=za(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Ia(t,r,n),i!==null&&(Kn(i,t,n),Lo(i,t,n))}function Z_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Jh(t,n){Z_(t,n),(t=t.alternate)&&Z_(t,n)}function K_(t){if(t.tag===13||t.tag===31){var n=vr(t,67108864);n!==null&&Kn(n,t,67108864),Jh(t,67108864)}}function Q_(t){if(t.tag===13||t.tag===31){var n=ai();n=ft(n);var i=vr(t,n);i!==null&&Kn(i,t,n),Jh(t,n)}}var Ps=!0;function AM(t,n,i,r){var l=Rt.T;Rt.T=null;var c=Bt.p;try{Bt.p=2,$h(t,n,i,r)}finally{Bt.p=c,Rt.T=l}}function RM(t,n,i,r){var l=Rt.T;Rt.T=null;var c=Bt.p;try{Bt.p=8,$h(t,n,i,r)}finally{Bt.p=c,Rt.T=l}}function $h(t,n,i,r){if(Ps){var l=td(r);if(l===null)Oh(t,n,r,Yu,i),$_(t,r);else if(wM(l,t,n,i,r))r.stopPropagation();else if($_(t,r),n&4&&-1<CM.indexOf(t)){for(;l!==null;){var c=_e(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=di(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var L=1<<31-Nn(g);E.entanglements[1]|=L,g&=~L}Zi(c),(Ie&6)===0&&(Du=A()+500,Zo(0))}}break;case 31:case 13:E=vr(c,2),E!==null&&Kn(E,c,2),Lu(),Jh(c,2)}if(c=td(r),c===null&&Oh(t,n,r,Yu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Oh(t,n,r,null,i)}}function td(t){return t=Bc(t),ed(t)}var Yu=null;function ed(t){if(Yu=null,t=ze(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===31){if(t=h(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yu=t,null}function J_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case vt:return 2;case Dt:return 8;case Mt:case St:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var nd=!1,Za=null,Ka=null,Qa=null,il=new Map,al=new Map,Ja=[],CM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $_(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function rl(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=_e(n),n!==null&&K_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function wM(t,n,i,r,l){switch(n){case"focusin":return Za=rl(Za,t,n,i,r,l),!0;case"dragenter":return Ka=rl(Ka,t,n,i,r,l),!0;case"mouseover":return Qa=rl(Qa,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return il.set(c,rl(il.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,al.set(c,rl(al.get(c)||null,t,n,i,r,l)),!0}return!1}function tv(t){var n=ze(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,Ft(t.priority,function(){Q_(i)});return}}else if(n===31){if(n=h(i),n!==null){t.blockedOn=n,Ft(t.priority,function(){Q_(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=td(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Ic=r,i.target.dispatchEvent(r),Ic=null}else return n=_e(i),n!==null&&K_(n),t.blockedOn=i,!1;n.shift()}return!0}function ev(t,n,i){qu(t)&&i.delete(n)}function DM(){nd=!1,Za!==null&&qu(Za)&&(Za=null),Ka!==null&&qu(Ka)&&(Ka=null),Qa!==null&&qu(Qa)&&(Qa=null),il.forEach(ev),al.forEach(ev)}function ju(t,n){t.blockedOn===n&&(t.blockedOn=null,nd||(nd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,DM)))}var Wu=null;function nv(t){Wu!==t&&(Wu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wu===t&&(Wu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(ed(r||i)===null)continue;break}var c=_e(i);c!==null&&(t.splice(n,3),n-=3,If(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function zs(t){function n(L){return ju(L,t)}Za!==null&&ju(Za,t),Ka!==null&&ju(Ka,t),Qa!==null&&ju(Qa,t),il.forEach(n),al.forEach(n);for(var i=0;i<Ja.length;i++){var r=Ja[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(i=Ja[0],i.blockedOn===null);)tv(i),i.blockedOn===null&&Ja.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],g=l[Wt]||null;if(typeof c=="function")g||nv(i);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[Wt]||null)E=g.formAction;else if(ed(l)!==null)continue}else E=g.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),nv(i)}}}function iv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function id(t){this._internalRoot=t}Zu.prototype.render=id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ai();W_(i,r,t,n,null,null)},Zu.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W_(t.current,2,null,t,null,null),Lu(),n[re]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var n=wt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Ja.length&&n!==0&&n<Ja[i].priority;i++);Ja.splice(i,0,t),i===0&&tv(t)}};var av=e.version;if(av!=="19.3.1")throw Error(s(527,av,"19.3.1"));Bt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var UM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Te=Ku.inject(UM),en=Ku}catch{}}return ol.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=jg,c=Wg,g=Zg;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=q_(t,1,!1,null,null,i,r,null,l,c,g,iv),t[re]=n.current,Lh(t),new id(n)},ol.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=jg,g=Wg,E=Zg,L=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(L=i.formState)),n=q_(t,1,!0,n,i??null,r,l,L,c,g,E,iv),n.context=j_(null),i=n.current,r=ai(),r=ft(r),l=za(r),l.callback=null,Ia(i,l,r),i=r,n.current.lanes=i,mr(n,i),Zi(n),t[re]=n.current,Lh(t),new Zu(n)},ol.version="19.3.1",ol}var pv;function XM(){if(pv)return sd.exports;pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sd.exports=VM(),sd.exports}var kM=XM();function on(o){return{theme:o.theme,headline:o.headline,objects:o.objects.map(e=>({...e}))}}const Bp={id:"memory-1",asset:0,x:.57,y:.38,width:.34,rotation:-7,visible:!0},YM={theme:"light",headline:"Keep this moment.",objects:[{...Bp}]},xx={theme:"dark",headline:"Everything leaves a trace.",objects:[{...Bp}]},qd={...xx,objects:[{...Bp,visible:!1}]},to=on(qd),cd=[{id:"history-1",time:0,label:"A moment kept",state:on(YM)},{id:"history-2",time:12,label:"A different light",state:on(xx)},{id:"history-3",time:22,label:"The photo disappeared",state:on(qd)},{id:"history-4",time:28,label:"Now",state:on(qd)}];function qM(o,e){var u;if(Number.isNaN(e))throw new RangeError("History time must not be NaN.");if(o.length===0)return on(to);let a,s;for(const f of o)Number.isFinite(f.time)&&((!a||f.time<=a.time)&&(a=f),f.time<=e&&(!s||f.time>=s.time)&&(s=f));return on(((u=s??a)==null?void 0:u.state)??to)}function xc(o,e){if(!Number.isFinite(o))throw new RangeError(`${e} must be finite.`);return o}function mv(o,e,a,s){const u=xc(s,"History time"),f=o.reduce((_,m)=>Number.isFinite(m.time)?Math.max(_,m.time):_,0),d=new Set(o.map(_=>_.id));let h=o.length+1;for(;d.has(`history-${h}`);)h+=1;return[...o,{id:`history-${h}`,time:Math.max(0,f,u),label:a,state:on(e)}]}function gv(o,e,a,s){const u=Math.min(1,Math.max(0,xc(a.x,"Object x"))),f=Math.min(1,Math.max(0,xc(a.y,"Object y"))),d=Math.max(0,xc(s,"Source time")),h=new Set(o.objects.map(p=>p.id));let _=1,m=`${e.id}-recovered-${_}`;for(;h.has(m)||m===e.id;)_+=1,m=`${e.id}-recovered-${_}`;const v=on(o);return v.objects.push({...e,id:m,x:u,y:f,visible:!0,recoveredFrom:d}),v}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="180",jM=0,_v=1,WM=2,Sx=1,ZM=2,Ea=3,ur=0,kn=1,Ta=2,or=0,io=1,vv=2,xv=3,Sv=4,KM=5,kr=100,QM=101,JM=102,$M=103,tE=104,eE=200,nE=201,iE=202,aE=203,jd=204,Wd=205,rE=206,sE=207,oE=208,lE=209,uE=210,cE=211,fE=212,hE=213,dE=214,Zd=0,Kd=1,Qd=2,ro=3,Jd=4,$d=5,tp=6,ep=7,Hp=0,pE=1,mE=2,lr=0,gE=1,_E=2,vE=3,yx=4,xE=5,SE=6,yE=7,Mx=300,so=301,oo=302,np=303,ip=304,Cc=306,ap=1e3,qr=1001,rp=1002,hi=1003,ME=1004,Qu=1005,Qi=1006,fd=1007,jr=1008,ea=1009,Ex=1010,Tx=1011,xl=1012,Gp=1013,Wr=1014,Ji=1015,bl=1016,Vp=1017,Xp=1018,Sl=1020,bx=35902,Ax=35899,Rx=1021,Cx=1022,Pi=1023,yl=1026,Ml=1027,kp=1028,Yp=1029,wx=1030,qp=1031,jp=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,sp=35840,op=35841,lp=35842,up=35843,cp=36196,fp=37492,hp=37496,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,Sp=37815,yp=37816,Mp=37817,Ep=37818,Tp=37819,bp=37820,Ap=37821,Rp=36492,Cp=36494,wp=36495,Dp=36283,Up=36284,Np=36285,Lp=36286,EE=3200,TE=3201,Wp=0,bE=1,sr="",ci="srgb",lo="srgb-linear",bc="linear",qe="srgb",Is=7680,yv=519,AE=512,RE=513,CE=514,Dx=515,wE=516,DE=517,UE=518,NE=519,Mv=35044,Ev="300 es",$i=2e3,Ac=2001;class co{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const s=a[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tv=1234567;const gl=Math.PI/180,El=180/Math.PI;function fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[a&63|128]+Pn[a>>8&255]+"-"+Pn[a>>16&255]+Pn[a>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Me(o,e,a){return Math.max(e,Math.min(a,o))}function Zp(o,e){return(o%e+e)%e}function LE(o,e,a,s,u){return s+(o-e)*(u-s)/(a-e)}function OE(o,e,a){return o!==e?(a-o)/(e-o):0}function _l(o,e,a){return(1-a)*o+a*e}function PE(o,e,a,s){return _l(o,e,1-Math.exp(-a*s))}function zE(o,e=1){return e-Math.abs(Zp(o,e*2)-e)}function IE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function BE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function FE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function HE(o,e){return o+Math.random()*(e-o)}function GE(o){return o*(.5-Math.random())}function VE(o){o!==void 0&&(Tv=o);let e=Tv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XE(o){return o*gl}function kE(o){return o*El}function YE(o){return(o&o-1)===0&&o!==0}function qE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function jE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function WE(o,e,a,s,u){const f=Math.cos,d=Math.sin,h=f(a/2),_=d(a/2),m=f((e+s)/2),v=d((e+s)/2),p=f((e-s)/2),S=d((e-s)/2),y=f((s-e)/2),b=d((s-e)/2);switch(u){case"XYX":o.set(h*v,_*p,_*S,h*m);break;case"YZY":o.set(_*S,h*v,_*p,h*m);break;case"ZXZ":o.set(_*p,_*S,h*v,h*m);break;case"XZX":o.set(h*v,_*b,_*y,h*m);break;case"YXY":o.set(_*y,h*v,_*b,h*m);break;case"ZYZ":o.set(_*b,_*y,h*v,h*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function $s(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const hd={DEG2RAD:gl,RAD2DEG:El,generateUUID:fo,clamp:Me,euclideanModulo:Zp,mapLinear:LE,inverseLerp:OE,lerp:_l,damp:PE,pingpong:zE,smoothstep:IE,smootherstep:BE,randInt:FE,randFloat:HE,randFloatSpread:GE,seededRandom:VE,degToRad:XE,radToDeg:kE,isPowerOfTwo:YE,ceilPowerOfTwo:qE,floorPowerOfTwo:jE,setQuaternionFromProperEuler:WE,normalize:Vn,denormalize:$s};class we{constructor(e=0,a=0){we.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Me(this.x,e.x,a.x),this.y=Me(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=Me(this.x,e,a),this.y=Me(this.y,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Al{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,d,h){let _=s[u+0],m=s[u+1],v=s[u+2],p=s[u+3];const S=f[d+0],y=f[d+1],b=f[d+2],C=f[d+3];if(h===0){e[a+0]=_,e[a+1]=m,e[a+2]=v,e[a+3]=p;return}if(h===1){e[a+0]=S,e[a+1]=y,e[a+2]=b,e[a+3]=C;return}if(p!==C||_!==S||m!==y||v!==b){let M=1-h;const x=_*S+m*y+v*b+p*C,B=x>=0?1:-1,z=1-x*x;if(z>Number.EPSILON){const X=Math.sqrt(z),H=Math.atan2(X,x*B);M=Math.sin(M*H)/X,h=Math.sin(h*H)/X}const U=h*B;if(_=_*M+S*U,m=m*M+y*U,v=v*M+b*U,p=p*M+C*U,M===1-h){const X=1/Math.sqrt(_*_+m*m+v*v+p*p);_*=X,m*=X,v*=X,p*=X}}e[a]=_,e[a+1]=m,e[a+2]=v,e[a+3]=p}static multiplyQuaternionsFlat(e,a,s,u,f,d){const h=s[u],_=s[u+1],m=s[u+2],v=s[u+3],p=f[d],S=f[d+1],y=f[d+2],b=f[d+3];return e[a]=h*b+v*p+_*y-m*S,e[a+1]=_*b+v*S+m*p-h*y,e[a+2]=m*b+v*y+h*S-_*p,e[a+3]=v*b-h*p-_*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,_=Math.sin,m=h(s/2),v=h(u/2),p=h(f/2),S=_(s/2),y=_(u/2),b=_(f/2);switch(d){case"XYZ":this._x=S*v*p+m*y*b,this._y=m*y*p-S*v*b,this._z=m*v*b+S*y*p,this._w=m*v*p-S*y*b;break;case"YXZ":this._x=S*v*p+m*y*b,this._y=m*y*p-S*v*b,this._z=m*v*b-S*y*p,this._w=m*v*p+S*y*b;break;case"ZXY":this._x=S*v*p-m*y*b,this._y=m*y*p+S*v*b,this._z=m*v*b+S*y*p,this._w=m*v*p-S*y*b;break;case"ZYX":this._x=S*v*p-m*y*b,this._y=m*y*p+S*v*b,this._z=m*v*b-S*y*p,this._w=m*v*p+S*y*b;break;case"YZX":this._x=S*v*p+m*y*b,this._y=m*y*p+S*v*b,this._z=m*v*b-S*y*p,this._w=m*v*p-S*y*b;break;case"XZY":this._x=S*v*p-m*y*b,this._y=m*y*p-S*v*b,this._z=m*v*b+S*y*p,this._w=m*v*p+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],d=a[1],h=a[5],_=a[9],m=a[2],v=a[6],p=a[10],S=s+h+p;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-_)*y,this._y=(f-m)*y,this._z=(d-u)*y}else if(s>h&&s>p){const y=2*Math.sqrt(1+s-h-p);this._w=(v-_)/y,this._x=.25*y,this._y=(u+d)/y,this._z=(f+m)/y}else if(h>p){const y=2*Math.sqrt(1+h-s-p);this._w=(f-m)/y,this._x=(u+d)/y,this._y=.25*y,this._z=(_+v)/y}else{const y=2*Math.sqrt(1+p-s-h);this._w=(d-u)/y,this._x=(f+m)/y,this._y=(_+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,d=e._w,h=a._x,_=a._y,m=a._z,v=a._w;return this._x=s*v+d*h+u*m-f*_,this._y=u*v+d*_+f*h-s*m,this._z=f*v+d*m+s*_-u*h,this._w=d*v-s*h-u*_-f*m,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,d=this._w;let h=d*e._w+s*e._x+u*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=u,this._z=f,this;const _=1-h*h;if(_<=Number.EPSILON){const y=1-a;return this._w=y*d+a*this._w,this._x=y*s+a*this._x,this._y=y*u+a*this._y,this._z=y*f+a*this._z,this.normalize(),this}const m=Math.sqrt(_),v=Math.atan2(m,h),p=Math.sin((1-a)*v)/m,S=Math.sin(a*v)/m;return this._w=d*p+this._w*S,this._x=s*p+this._x*S,this._y=u*p+this._y*S,this._z=f*p+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(e=0,a=0,s=0){lt.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(bv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,_=e.w,m=2*(d*u-h*s),v=2*(h*a-f*u),p=2*(f*s-d*a);return this.x=a+_*m+d*p-h*v,this.y=s+_*v+h*m-f*p,this.z=u+_*p+f*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Me(this.x,e.x,a.x),this.y=Me(this.y,e.y,a.y),this.z=Me(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=Me(this.x,e,a),this.y=Me(this.y,e,a),this.z=Me(this.z,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,d=a.x,h=a.y,_=a.z;return this.x=u*_-f*h,this.y=f*d-s*_,this.z=s*h-u*d,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new lt,bv=new Al;class me{constructor(e,a,s,u,f,d,h,_,m){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,d,h,_,m)}set(e,a,s,u,f,d,h,_,m){const v=this.elements;return v[0]=e,v[1]=u,v[2]=h,v[3]=a,v[4]=f,v[5]=_,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,d=s[0],h=s[3],_=s[6],m=s[1],v=s[4],p=s[7],S=s[2],y=s[5],b=s[8],C=u[0],M=u[3],x=u[6],B=u[1],z=u[4],U=u[7],X=u[2],H=u[5],O=u[8];return f[0]=d*C+h*B+_*X,f[3]=d*M+h*z+_*H,f[6]=d*x+h*U+_*O,f[1]=m*C+v*B+p*X,f[4]=m*M+v*z+p*H,f[7]=m*x+v*U+p*O,f[2]=S*C+y*B+b*X,f[5]=S*M+y*z+b*H,f[8]=S*x+y*U+b*O,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],_=e[6],m=e[7],v=e[8];return a*d*v-a*h*m-s*f*v+s*h*_+u*f*m-u*d*_}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],_=e[6],m=e[7],v=e[8],p=v*d-h*m,S=h*_-v*f,y=m*f-d*_,b=a*p+s*S+u*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=p*C,e[1]=(u*m-v*s)*C,e[2]=(h*s-u*d)*C,e[3]=S*C,e[4]=(v*a-u*_)*C,e[5]=(u*f-h*a)*C,e[6]=y*C,e[7]=(s*_-m*a)*C,e[8]=(d*a-s*f)*C,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,d,h){const _=Math.cos(f),m=Math.sin(f);return this.set(s*_,s*m,-s*(_*d+m*h)+d+e,-u*m,u*_,-u*(-m*d+_*h)+h+a,0,0,1),this}scale(e,a){return this.premultiply(pd.makeScale(e,a)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,a){return this.premultiply(pd.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new me;function Ux(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ZE(){const o=Rc("canvas");return o.style.display="block",o}const Av={};function Tl(o){o in Av||(Av[o]=!0,console.warn(o))}function KE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const Rv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const o={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(u.r=ba(u.r),u.g=ba(u.g),u.b=ba(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(u.r=ao(u.r),u.g=ao(u.g),u.b=ao(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===sr?bc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return Tl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return Tl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[lo]:{primaries:e,whitePoint:s,transfer:bc,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Oe=QE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class JE{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=Rc("canvas")),Bs.width=e.width,Bs.height=e.height;const u=Bs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=Rc("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=ba(f[d]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(ba(a[s]/255)*255):a[s]=ba(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $E=0;class Kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(md(u[d].image)):f.push(md(u[d]))}else f=md(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tT=0;const gd=new lt;class Yn extends co{constructor(e=Yn.DEFAULT_IMAGE,a=Yn.DEFAULT_MAPPING,s=qr,u=qr,f=Qi,d=jr,h=Pi,_=ea,m=Yn.DEFAULT_ANISOTROPY,v=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=fo(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=_,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Mx;Yn.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,a=0,s=0,u=1){je.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*a+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const _=e.elements,m=_[0],v=_[4],p=_[8],S=_[1],y=_[5],b=_[9],C=_[2],M=_[6],x=_[10];if(Math.abs(v-S)<.01&&Math.abs(p-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(p+C)<.1&&Math.abs(b+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const z=(m+1)/2,U=(y+1)/2,X=(x+1)/2,H=(v+S)/4,O=(p+C)/4,Y=(b+M)/4;return z>U&&z>X?z<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(z),u=H/s,f=O/s):U>X?U<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(U),s=H/u,f=Y/u):X<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(X),s=O/f,u=Y/f),this.set(s,u,f,a),this}let B=Math.sqrt((M-b)*(M-b)+(p-C)*(p-C)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(p-C)/B,this.z=(S-v)/B,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Me(this.x,e.x,a.x),this.y=Me(this.y,e.y,a.y),this.z=Me(this.z,e.z,a.z),this.w=Me(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=Me(this.x,e,a),this.y=Me(this.y,e,a),this.z=Me(this.z,e,a),this.w=Me(this.w,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eT extends co{constructor(e=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=s.depth,this.scissor=new je(0,0,e,a),this.scissorTest=!1,this.viewport=new je(0,0,e,a);const u={width:e,height:a,depth:s.depth},f=new Yn(u);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const a={minFilter:Qi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},e.textures[a].image);this.textures[a].source=new Kp(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends eT{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class Nx extends Yn{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nT extends Yn{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=new lt(1/0,1/0,1/0),a=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(Di.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(Di.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=Di.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(f,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ju.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ju.copy(s.boundingBox)),Ju.applyMatrix4(e.matrixWorld),this.union(Ju)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),$u.subVectors(this.max,ll),Fs.subVectors(e.a,ll),Hs.subVectors(e.b,ll),Gs.subVectors(e.c,ll),tr.subVectors(Hs,Fs),er.subVectors(Gs,Hs),zr.subVectors(Fs,Gs);let a=[0,-tr.z,tr.y,0,-er.z,er.y,0,-zr.z,zr.y,tr.z,0,-tr.x,er.z,0,-er.x,zr.z,0,-zr.x,-tr.y,tr.x,0,-er.y,er.x,0,-zr.y,zr.x,0];return!_d(a,Fs,Hs,Gs,$u)||(a=[1,0,0,0,1,0,0,0,1],!_d(a,Fs,Hs,Gs,$u))?!1:(tc.crossVectors(tr,er),a=[tc.x,tc.y,tc.z],_d(a,Fs,Hs,Gs,$u))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Di=new lt,Ju=new Kr,Fs=new lt,Hs=new lt,Gs=new lt,tr=new lt,er=new lt,zr=new lt,ll=new lt,$u=new lt,tc=new lt,Ir=new lt;function _d(o,e,a,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Ir.fromArray(o,f);const h=u.x*Math.abs(Ir.x)+u.y*Math.abs(Ir.y)+u.z*Math.abs(Ir.z),_=e.dot(Ir),m=a.dot(Ir),v=s.dot(Ir);if(Math.max(-Math.max(_,m,v),Math.min(_,m,v))>h)return!1}return!0}const iT=new Kr,ul=new lt,vd=new lt;class Rl{constructor(e=new lt,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):iT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const a=ul.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(ul,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(vd)),this.expandByPoint(ul.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xa=new lt,xd=new lt,ec=new lt,nr=new lt,Sd=new lt,nc=new lt,yd=new lt;class aT{constructor(e=new lt,a=new lt(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=xa.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,a),xa.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){xd.copy(e).add(a).multiplyScalar(.5),ec.copy(a).sub(e).normalize(),nr.copy(this.origin).sub(xd);const f=e.distanceTo(a)*.5,d=-this.direction.dot(ec),h=nr.dot(this.direction),_=-nr.dot(ec),m=nr.lengthSq(),v=Math.abs(1-d*d);let p,S,y,b;if(v>0)if(p=d*_-h,S=d*h-_,b=f*v,p>=0)if(S>=-b)if(S<=b){const C=1/v;p*=C,S*=C,y=p*(p+d*S+2*h)+S*(d*p+S+2*_)+m}else S=f,p=Math.max(0,-(d*S+h)),y=-p*p+S*(S+2*_)+m;else S=-f,p=Math.max(0,-(d*S+h)),y=-p*p+S*(S+2*_)+m;else S<=-b?(p=Math.max(0,-(-d*f+h)),S=p>0?-f:Math.min(Math.max(-f,-_),f),y=-p*p+S*(S+2*_)+m):S<=b?(p=0,S=Math.min(Math.max(-f,-_),f),y=S*(S+2*_)+m):(p=Math.max(0,-(d*f+h)),S=p>0?f:Math.min(Math.max(-f,-_),f),y=-p*p+S*(S+2*_)+m);else S=d>0?-f:f,p=Math.max(0,-(d*S+h)),y=-p*p+S*(S+2*_)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(xd).addScaledVector(ec,S),y}intersectSphere(e,a){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),u=xa.dot(xa)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,_=s+d;return _<0?null:h<0?this.at(_,a):this.at(h,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,d,h,_;const m=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,u=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,u=(e.min.x-S.x)*m),v>=0?(f=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),p>=0?(h=(e.min.z-S.z)*p,_=(e.max.z-S.z)*p):(h=(e.max.z-S.z)*p,_=(e.min.z-S.z)*p),s>_||h>u)||((h>s||s!==s)&&(s=h),(_<u||u!==u)&&(u=_),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,a,s,u,f){Sd.subVectors(a,e),nc.subVectors(s,e),yd.crossVectors(Sd,nc);let d=this.direction.dot(yd),h;if(d>0){if(u)return null;h=1}else if(d<0)h=-1,d=-d;else return null;nr.subVectors(this.origin,e);const _=h*this.direction.dot(nc.crossVectors(nr,nc));if(_<0)return null;const m=h*this.direction.dot(Sd.cross(nr));if(m<0||_+m>d)return null;const v=-h*nr.dot(yd);return v<0?null:this.at(v/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,a,s,u,f,d,h,_,m,v,p,S,y,b,C,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,d,h,_,m,v,p,S,y,b,C,M)}set(e,a,s,u,f,d,h,_,m,v,p,S,y,b,C,M){const x=this.elements;return x[0]=e,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=_,x[2]=m,x[6]=v,x[10]=p,x[14]=S,x[3]=y,x[7]=b,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Vs.setFromMatrixColumn(e,0).length(),f=1/Vs.setFromMatrixColumn(e,1).length(),d=1/Vs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),_=Math.cos(u),m=Math.sin(u),v=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const S=d*v,y=d*p,b=h*v,C=h*p;a[0]=_*v,a[4]=-_*p,a[8]=m,a[1]=y+b*m,a[5]=S-C*m,a[9]=-h*_,a[2]=C-S*m,a[6]=b+y*m,a[10]=d*_}else if(e.order==="YXZ"){const S=_*v,y=_*p,b=m*v,C=m*p;a[0]=S+C*h,a[4]=b*h-y,a[8]=d*m,a[1]=d*p,a[5]=d*v,a[9]=-h,a[2]=y*h-b,a[6]=C+S*h,a[10]=d*_}else if(e.order==="ZXY"){const S=_*v,y=_*p,b=m*v,C=m*p;a[0]=S-C*h,a[4]=-d*p,a[8]=b+y*h,a[1]=y+b*h,a[5]=d*v,a[9]=C-S*h,a[2]=-d*m,a[6]=h,a[10]=d*_}else if(e.order==="ZYX"){const S=d*v,y=d*p,b=h*v,C=h*p;a[0]=_*v,a[4]=b*m-y,a[8]=S*m+C,a[1]=_*p,a[5]=C*m+S,a[9]=y*m-b,a[2]=-m,a[6]=h*_,a[10]=d*_}else if(e.order==="YZX"){const S=d*_,y=d*m,b=h*_,C=h*m;a[0]=_*v,a[4]=C-S*p,a[8]=b*p+y,a[1]=p,a[5]=d*v,a[9]=-h*v,a[2]=-m*v,a[6]=y*p+b,a[10]=S-C*p}else if(e.order==="XZY"){const S=d*_,y=d*m,b=h*_,C=h*m;a[0]=_*v,a[4]=-p,a[8]=m*v,a[1]=S*p+C,a[5]=d*v,a[9]=y*p-b,a[2]=b*p-y,a[6]=h*v,a[10]=C*p+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rT,e,sT)}lookAt(e,a,s){const u=this.elements;return si.subVectors(e,a),si.lengthSq()===0&&(si.z=1),si.normalize(),ir.crossVectors(s,si),ir.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ir.crossVectors(s,si)),ir.normalize(),ic.crossVectors(si,ir),u[0]=ir.x,u[4]=ic.x,u[8]=si.x,u[1]=ir.y,u[5]=ic.y,u[9]=si.y,u[2]=ir.z,u[6]=ic.z,u[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,d=s[0],h=s[4],_=s[8],m=s[12],v=s[1],p=s[5],S=s[9],y=s[13],b=s[2],C=s[6],M=s[10],x=s[14],B=s[3],z=s[7],U=s[11],X=s[15],H=u[0],O=u[4],Y=u[8],D=u[12],w=u[1],V=u[5],st=u[9],ht=u[13],xt=u[2],dt=u[6],q=u[10],rt=u[14],j=u[3],yt=u[7],Et=u[11],Vt=u[15];return f[0]=d*H+h*w+_*xt+m*j,f[4]=d*O+h*V+_*dt+m*yt,f[8]=d*Y+h*st+_*q+m*Et,f[12]=d*D+h*ht+_*rt+m*Vt,f[1]=v*H+p*w+S*xt+y*j,f[5]=v*O+p*V+S*dt+y*yt,f[9]=v*Y+p*st+S*q+y*Et,f[13]=v*D+p*ht+S*rt+y*Vt,f[2]=b*H+C*w+M*xt+x*j,f[6]=b*O+C*V+M*dt+x*yt,f[10]=b*Y+C*st+M*q+x*Et,f[14]=b*D+C*ht+M*rt+x*Vt,f[3]=B*H+z*w+U*xt+X*j,f[7]=B*O+z*V+U*dt+X*yt,f[11]=B*Y+z*st+U*q+X*Et,f[15]=B*D+z*ht+U*rt+X*Vt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],_=e[9],m=e[13],v=e[2],p=e[6],S=e[10],y=e[14],b=e[3],C=e[7],M=e[11],x=e[15];return b*(+f*_*p-u*m*p-f*h*S+s*m*S+u*h*y-s*_*y)+C*(+a*_*y-a*m*S+f*d*S-u*d*y+u*m*v-f*_*v)+M*(+a*m*p-a*h*y-f*d*p+s*d*y+f*h*v-s*m*v)+x*(-u*h*v-a*_*p+a*h*S+u*d*p-s*d*S+s*_*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],_=e[6],m=e[7],v=e[8],p=e[9],S=e[10],y=e[11],b=e[12],C=e[13],M=e[14],x=e[15],B=p*M*m-C*S*m+C*_*y-h*M*y-p*_*x+h*S*x,z=b*S*m-v*M*m-b*_*y+d*M*y+v*_*x-d*S*x,U=v*C*m-b*p*m+b*h*y-d*C*y-v*h*x+d*p*x,X=b*p*_-v*C*_-b*h*S+d*C*S+v*h*M-d*p*M,H=a*B+s*z+u*U+f*X;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=B*O,e[1]=(C*S*f-p*M*f-C*u*y+s*M*y+p*u*x-s*S*x)*O,e[2]=(h*M*f-C*_*f+C*u*m-s*M*m-h*u*x+s*_*x)*O,e[3]=(p*_*f-h*S*f-p*u*m+s*S*m+h*u*y-s*_*y)*O,e[4]=z*O,e[5]=(v*M*f-b*S*f+b*u*y-a*M*y-v*u*x+a*S*x)*O,e[6]=(b*_*f-d*M*f-b*u*m+a*M*m+d*u*x-a*_*x)*O,e[7]=(d*S*f-v*_*f+v*u*m-a*S*m-d*u*y+a*_*y)*O,e[8]=U*O,e[9]=(b*p*f-v*C*f-b*s*y+a*C*y+v*s*x-a*p*x)*O,e[10]=(d*C*f-b*h*f+b*s*m-a*C*m-d*s*x+a*h*x)*O,e[11]=(v*h*f-d*p*f-v*s*m+a*p*m+d*s*y-a*h*y)*O,e[12]=X*O,e[13]=(v*C*u-b*p*u+b*s*S-a*C*S-v*s*M+a*p*M)*O,e[14]=(b*h*u-d*C*u-b*s*_+a*C*_+d*s*M-a*h*M)*O,e[15]=(d*p*u-v*h*u+v*s*_-a*p*_-d*s*S+a*h*S)*O,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,d=e.x,h=e.y,_=e.z,m=f*d,v=f*h;return this.set(m*d+s,m*h-u*_,m*_+u*h,0,m*h+u*_,v*h+s,v*_-u*d,0,m*_-u*h,v*_+u*d,f*_*_+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,d=a._y,h=a._z,_=a._w,m=f+f,v=d+d,p=h+h,S=f*m,y=f*v,b=f*p,C=d*v,M=d*p,x=h*p,B=_*m,z=_*v,U=_*p,X=s.x,H=s.y,O=s.z;return u[0]=(1-(C+x))*X,u[1]=(y+U)*X,u[2]=(b-z)*X,u[3]=0,u[4]=(y-U)*H,u[5]=(1-(S+x))*H,u[6]=(M+B)*H,u[7]=0,u[8]=(b+z)*O,u[9]=(M-B)*O,u[10]=(1-(S+C))*O,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Vs.set(u[0],u[1],u[2]).length();const d=Vs.set(u[4],u[5],u[6]).length(),h=Vs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Ui.copy(this);const m=1/f,v=1/d,p=1/h;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=p,Ui.elements[9]*=p,Ui.elements[10]*=p,a.setFromRotationMatrix(Ui),s.x=f,s.y=d,s.z=h,this}makePerspective(e,a,s,u,f,d,h=$i,_=!1){const m=this.elements,v=2*f/(a-e),p=2*f/(s-u),S=(a+e)/(a-e),y=(s+u)/(s-u);let b,C;if(_)b=f/(d-f),C=d*f/(d-f);else if(h===$i)b=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===Ac)b=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=p,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,a,s,u,f,d,h=$i,_=!1){const m=this.elements,v=2/(a-e),p=2/(s-u),S=-(a+e)/(a-e),y=-(s+u)/(s-u);let b,C;if(_)b=1/(d-f),C=d/(d-f);else if(h===$i)b=-2/(d-f),C=-(d+f)/(d-f);else if(h===Ac)b=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=p,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Vs=new lt,Ui=new $e,rT=new lt(0,0,0),sT=new lt(1,1,1),ir=new lt,ic=new lt,si=new lt,wv=new $e,Dv=new Al;class Ii{constructor(e=0,a=0,s=0,u=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],_=u[1],m=u[5],v=u[9],p=u[2],S=u[6],y=u[10];switch(a){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(_,m)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-p,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oT=0;const Uv=new lt,Xs=new Al,Sa=new $e,ac=new lt,cl=new lt,lT=new lt,uT=new Al,Nv=new lt(1,0,0),Lv=new lt(0,1,0),Ov=new lt(0,0,1),Pv={type:"added"},cT={type:"removed"},ks={type:"childadded",child:null},Md={type:"childremoved",child:null};class bn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new lt,a=new Ii,s=new Al,u=new lt(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new $e},normalMatrix:{value:new me}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Xs.setFromAxisAngle(e,a),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,a){return Xs.setFromAxisAngle(e,a),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Nv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,a){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(Nv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?ac.copy(e):ac.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(cl,ac,this.up):Sa.lookAt(ac,cl,this.up),this.quaternion.setFromRotationMatrix(Sa),u&&(Sa.extractRotation(u.matrixWorld),Xs.setFromRotationMatrix(Sa),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(cT),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,a);if(d!==void 0)return d}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,lT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,uT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,_){return h[_.uuid]===void 0&&(h[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const _=h.shapes;if(Array.isArray(_))for(let m=0,v=_.length;m<v;m++){const p=_[m];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let _=0,m=this.material.length;_<m;_++)h.push(f(e.materials,this.material[_]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const _=this.animations[h];u.animations.push(f(e.animations,_))}}if(a){const h=d(e.geometries),_=d(e.materials),m=d(e.textures),v=d(e.images),p=d(e.shapes),S=d(e.skeletons),y=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),_.length>0&&(s.materials=_),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=u,s;function d(h){const _=[];for(const m in h){const v=h[m];delete v.metadata,_.push(v)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}bn.DEFAULT_UP=new lt(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new lt,ya=new lt,Ed=new lt,Ma=new lt,Ys=new lt,qs=new lt,zv=new lt,Td=new lt,bd=new lt,Ad=new lt,Rd=new je,Cd=new je,wd=new je;class Oi{constructor(e=new lt,a=new lt,s=new lt){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Ni.subVectors(e,a),u.cross(Ni);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Ni.subVectors(u,a),ya.subVectors(s,a),Ed.subVectors(e,a);const d=Ni.dot(Ni),h=Ni.dot(ya),_=Ni.dot(Ed),m=ya.dot(ya),v=ya.dot(Ed),p=d*m-h*h;if(p===0)return f.set(0,0,0),null;const S=1/p,y=(m*_-h*v)*S,b=(d*v-h*_)*S;return f.set(1-y-b,b,y)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,a,s,u,f,d,h,_){return this.getBarycoord(e,a,s,u,Ma)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ma.x),_.addScaledVector(d,Ma.y),_.addScaledVector(h,Ma.z),_)}static getInterpolatedAttribute(e,a,s,u,f,d){return Rd.setScalar(0),Cd.setScalar(0),wd.setScalar(0),Rd.fromBufferAttribute(e,a),Cd.fromBufferAttribute(e,s),wd.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Rd,f.x),d.addScaledVector(Cd,f.y),d.addScaledVector(wd,f.z),d}static isFrontFacing(e,a,s,u){return Ni.subVectors(s,a),ya.subVectors(e,a),Ni.cross(ya).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ni.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Oi.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Oi.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let d,h;Ys.subVectors(u,s),qs.subVectors(f,s),Td.subVectors(e,s);const _=Ys.dot(Td),m=qs.dot(Td);if(_<=0&&m<=0)return a.copy(s);bd.subVectors(e,u);const v=Ys.dot(bd),p=qs.dot(bd);if(v>=0&&p<=v)return a.copy(u);const S=_*p-v*m;if(S<=0&&_>=0&&v<=0)return d=_/(_-v),a.copy(s).addScaledVector(Ys,d);Ad.subVectors(e,f);const y=Ys.dot(Ad),b=qs.dot(Ad);if(b>=0&&y<=b)return a.copy(f);const C=y*m-_*b;if(C<=0&&m>=0&&b<=0)return h=m/(m-b),a.copy(s).addScaledVector(qs,h);const M=v*b-y*p;if(M<=0&&p-v>=0&&y-b>=0)return zv.subVectors(f,u),h=(p-v)/(p-v+(y-b)),a.copy(u).addScaledVector(zv,h);const x=1/(M+C+S);return d=C*x,h=S*x,a.copy(s).addScaledVector(Ys,d).addScaledVector(qs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Dd(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Ee{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,a),this}setRGB(e,a,s,u=Oe.workingColorSpace){return this.r=e,this.g=a,this.b=s,Oe.colorSpaceToWorking(this,u),this}setHSL(e,a,s,u=Oe.workingColorSpace){if(e=Zp(e,1),a=Me(a,0,1),s=Me(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Dd(d,f,e+1/3),this.g=Dd(d,f,e),this.b=Dd(d,f,e-1/3)}return Oe.colorSpaceToWorking(this,u),this}setStyle(e,a=ci){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=ci){const s=Ox[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Oe.workingToColorSpace(zn.copy(this),e),Math.round(Me(zn.r*255,0,255))*65536+Math.round(Me(zn.g*255,0,255))*256+Math.round(Me(zn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Oe.workingColorSpace){Oe.workingToColorSpace(zn.copy(this),a);const s=zn.r,u=zn.g,f=zn.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let _,m;const v=(h+d)/2;if(h===d)_=0,m=0;else{const p=d-h;switch(m=v<=.5?p/(d+h):p/(2-d-h),d){case s:_=(u-f)/p+(u<f?6:0);break;case u:_=(f-s)/p+2;break;case f:_=(s-u)/p+4;break}_/=6}return e.h=_,e.s=m,e.l=v,e}getRGB(e,a=Oe.workingColorSpace){return Oe.workingToColorSpace(zn.copy(this),a),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=ci){Oe.workingToColorSpace(zn.copy(this),e);const a=zn.r,s=zn.g,u=zn.b;return e!==ci?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+a,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(ar),e.getHSL(rc);const s=_l(ar.h,rc.h,a),u=_l(ar.s,rc.s,a),f=_l(ar.l,rc.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ee;Ee.NAMES=Ox;let fT=0;class ho extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=io,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Wd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(s.blending=this.blending),this.side!==ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==jd&&(s.blendSrc=this.blendSrc),this.blendDst!==Wd&&(s.blendDst=this.blendDst),this.blendEquation!==kr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const _=f[h];delete _.metadata,d.push(_)}return d}if(a){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Px extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new lt,sc=new we;let hT=0;class zi{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=Mv,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)sc.fromBufferAttribute(this,a),sc.applyMatrix3(e),this.setXY(a,sc.x,sc.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)mn.fromBufferAttribute(this,a),mn.applyMatrix3(e),this.setXYZ(a,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)mn.fromBufferAttribute(this,a),mn.applyMatrix4(e),this.setXYZ(a,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)mn.fromBufferAttribute(this,a),mn.applyNormalMatrix(e),this.setXYZ(a,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)mn.fromBufferAttribute(this,a),mn.transformDirection(e),this.setXYZ(a,mn.x,mn.y,mn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=$s(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=$s(a,this.array)),a}setX(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=$s(a,this.array)),a}setY(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=$s(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=$s(a,this.array)),a}setW(e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array),u=Vn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=Vn(a,this.array),s=Vn(s,this.array),u=Vn(u,this.array),f=Vn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mv&&(e.usage=this.usage),e}}class zx extends zi{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class Ix extends zi{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class ta extends zi{constructor(e,a,s){super(new Float32Array(e),a,s)}}let dT=0;const Ei=new $e,Ud=new bn,js=new lt,oi=new Kr,fl=new Kr,Tn=new lt;class fr extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ux(e)?Ix:zx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new me().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,a,s){return Ei.makeTranslation(e,a,s),this.applyMatrix4(Ei),this}scale(e,a,s){return Ei.makeScale(e,a,s),this.applyMatrix4(Ei),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ta(s,3))}else{const s=Math.min(e.length,a.count);for(let u=0;u<s;u++){const f=e[u];a.setXYZ(u,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];fl.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(oi.min,fl.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,fl.max),oi.expandByPoint(Tn)):(oi.expandByPoint(fl.min),oi.expandByPoint(fl.max))}oi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)Tn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(Tn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],_=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Tn.fromBufferAttribute(h,m),_&&(js.fromBufferAttribute(e,m),Tn.add(js)),u=Math.max(u,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],_=[];for(let Y=0;Y<s.count;Y++)h[Y]=new lt,_[Y]=new lt;const m=new lt,v=new lt,p=new lt,S=new we,y=new we,b=new we,C=new lt,M=new lt;function x(Y,D,w){m.fromBufferAttribute(s,Y),v.fromBufferAttribute(s,D),p.fromBufferAttribute(s,w),S.fromBufferAttribute(f,Y),y.fromBufferAttribute(f,D),b.fromBufferAttribute(f,w),v.sub(m),p.sub(m),y.sub(S),b.sub(S);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(p,-y.y).multiplyScalar(V),M.copy(p).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(V),h[Y].add(C),h[D].add(C),h[w].add(C),_[Y].add(M),_[D].add(M),_[w].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let Y=0,D=B.length;Y<D;++Y){const w=B[Y],V=w.start,st=w.count;for(let ht=V,xt=V+st;ht<xt;ht+=3)x(e.getX(ht+0),e.getX(ht+1),e.getX(ht+2))}const z=new lt,U=new lt,X=new lt,H=new lt;function O(Y){X.fromBufferAttribute(u,Y),H.copy(X);const D=h[Y];z.copy(D),z.sub(X.multiplyScalar(X.dot(D))).normalize(),U.crossVectors(H,D);const V=U.dot(_[Y])<0?-1:1;d.setXYZW(Y,z.x,z.y,z.z,V)}for(let Y=0,D=B.length;Y<D;++Y){const w=B[Y],V=w.start,st=w.count;for(let ht=V,xt=V+st;ht<xt;ht+=3)O(e.getX(ht+0)),O(e.getX(ht+1)),O(e.getX(ht+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new zi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const u=new lt,f=new lt,d=new lt,h=new lt,_=new lt,m=new lt,v=new lt,p=new lt;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,C),d.fromBufferAttribute(a,M),v.subVectors(d,f),p.subVectors(u,f),v.cross(p),h.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),m.fromBufferAttribute(s,M),h.add(v),_.add(v),m.add(v),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(C,_.x,_.y,_.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=a.count;S<y;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),d.fromBufferAttribute(a,S+2),v.subVectors(d,f),p.subVectors(u,f),v.cross(p),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)Tn.fromBufferAttribute(e,a),Tn.normalize(),e.setXYZ(a,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(h,_){const m=h.array,v=h.itemSize,p=h.normalized,S=new m.constructor(_.length*v);let y=0,b=0;for(let C=0,M=_.length;C<M;C++){h.isInterleavedBufferAttribute?y=_[C]*h.data.stride+h.offset:y=_[C]*v;for(let x=0;x<v;x++)S[b++]=m[y++]}return new zi(S,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new fr,s=this.index.array,u=this.attributes;for(const h in u){const _=u[h],m=e(_,s);a.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const _=[],m=f[h];for(let v=0,p=m.length;v<p;v++){const S=m[v],y=e(S,s);_.push(y)}a.morphAttributes[h]=_}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,_=d.length;h<_;h++){const m=d[h];a.addGroup(m.start,m.count,m.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const m in _)_[m]!==void 0&&(e[m]=_[m]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const _ in s){const m=s[_];e.data.attributes[_]=m.toJSON(e.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const m=this.morphAttributes[_],v=[];for(let p=0,S=m.length;p<S;p++){const y=m[p];v.push(y.toJSON(e.data))}v.length>0&&(u[_]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const v=u[m];this.setAttribute(m,v.clone(a))}const f=e.morphAttributes;for(const m in f){const v=[],p=f[m];for(let S=0,y=p.length;S<y;S++)v.push(p[S].clone(a));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const p=d[m];this.addGroup(p.start,p.count,p.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new $e,Br=new aT,oc=new Rl,Bv=new lt,lc=new lt,uc=new lt,cc=new lt,Nd=new lt,fc=new lt,Fv=new lt,hc=new lt;class un extends bn{constructor(e=new fr,a=new Px){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){fc.set(0,0,0);for(let _=0,m=f.length;_<m;_++){const v=h[_],p=f[_];v!==0&&(Nd.fromBufferAttribute(p,e),d?fc.addScaledVector(Nd,v):fc.addScaledVector(Nd.sub(a),v))}a.add(fc)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(f),Br.copy(e.ray).recast(e.near),!(oc.containsPoint(Br.origin)===!1&&(Br.intersectSphere(oc,Bv)===null||Br.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(Iv.copy(f).invert(),Br.copy(e.ray).applyMatrix4(Iv),!(s.boundingBox!==null&&Br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Br)))}_computeIntersections(e,a,s){let u;const f=this.geometry,d=this.material,h=f.index,_=f.attributes.position,m=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,S=f.groups,y=f.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=S.length;b<C;b++){const M=S[b],x=d[M.materialIndex],B=Math.max(M.start,y.start),z=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,X=z;U<X;U+=3){const H=h.getX(U),O=h.getX(U+1),Y=h.getX(U+2);u=dc(this,x,e,s,m,v,p,H,O,Y),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=M.materialIndex,a.push(u))}}else{const b=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let M=b,x=C;M<x;M+=3){const B=h.getX(M),z=h.getX(M+1),U=h.getX(M+2);u=dc(this,d,e,s,m,v,p,B,z,U),u&&(u.faceIndex=Math.floor(M/3),a.push(u))}}else if(_!==void 0)if(Array.isArray(d))for(let b=0,C=S.length;b<C;b++){const M=S[b],x=d[M.materialIndex],B=Math.max(M.start,y.start),z=Math.min(_.count,Math.min(M.start+M.count,y.start+y.count));for(let U=B,X=z;U<X;U+=3){const H=U,O=U+1,Y=U+2;u=dc(this,x,e,s,m,v,p,H,O,Y),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=M.materialIndex,a.push(u))}}else{const b=Math.max(0,y.start),C=Math.min(_.count,y.start+y.count);for(let M=b,x=C;M<x;M+=3){const B=M,z=M+1,U=M+2;u=dc(this,d,e,s,m,v,p,B,z,U),u&&(u.faceIndex=Math.floor(M/3),a.push(u))}}}}function pT(o,e,a,s,u,f,d,h){let _;if(e.side===kn?_=s.intersectTriangle(d,f,u,!0,h):_=s.intersectTriangle(u,f,d,e.side===ur,h),_===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const m=a.ray.origin.distanceTo(hc);return m<a.near||m>a.far?null:{distance:m,point:hc.clone(),object:o}}function dc(o,e,a,s,u,f,d,h,_,m){o.getVertexPosition(h,lc),o.getVertexPosition(_,uc),o.getVertexPosition(m,cc);const v=pT(o,e,a,s,lc,uc,cc,Fv);if(v){const p=new lt;Oi.getBarycoord(Fv,lc,uc,cc,p),u&&(v.uv=Oi.getInterpolatedAttribute(u,h,_,m,p,new we)),f&&(v.uv1=Oi.getInterpolatedAttribute(f,h,_,m,p,new we)),d&&(v.normal=Oi.getInterpolatedAttribute(d,h,_,m,p,new lt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:_,c:m,normal:new lt,materialIndex:0};Oi.getNormal(lc,uc,cc,S.normal),v.face=S,v.barycoord=p}return v}class po extends fr{constructor(e=1,a=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const _=[],m=[],v=[],p=[];let S=0,y=0;b("z","y","x",-1,-1,s,a,e,d,f,0),b("z","y","x",1,-1,s,a,-e,d,f,1),b("x","z","y",1,1,e,s,a,u,d,2),b("x","z","y",1,-1,e,s,-a,u,d,3),b("x","y","z",1,-1,e,a,s,u,f,4),b("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(_),this.setAttribute("position",new ta(m,3)),this.setAttribute("normal",new ta(v,3)),this.setAttribute("uv",new ta(p,2));function b(C,M,x,B,z,U,X,H,O,Y,D){const w=U/O,V=X/Y,st=U/2,ht=X/2,xt=H/2,dt=O+1,q=Y+1;let rt=0,j=0;const yt=new lt;for(let Et=0;Et<q;Et++){const Vt=Et*V-ht;for(let ie=0;ie<dt;ie++){const pe=ie*w-st;yt[C]=pe*B,yt[M]=Vt*z,yt[x]=xt,m.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[x]=H>0?1:-1,v.push(yt.x,yt.y,yt.z),p.push(ie/O),p.push(1-Et/Y),rt+=1}}for(let Et=0;Et<Y;Et++)for(let Vt=0;Vt<O;Vt++){const ie=S+Vt+dt*Et,pe=S+Vt+dt*(Et+1),I=S+(Vt+1)+dt*(Et+1),ot=S+(Vt+1)+dt*Et;_.push(ie,pe,ot),_.push(pe,I,ot),j+=6}h.addGroup(y,j,D),y+=j,S+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Xn(o){const e={};for(let a=0;a<o.length;a++){const s=uo(o[a]);for(const u in s)e[u]=s[u]}return e}function mT(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function Bx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const gT={clone:uo,merge:Xn};var _T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_T,this.fragmentShader=vT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=mT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?a.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?a.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[u]={type:"m4",value:d.toArray()}:a.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Fx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new lt,Hv=new we,Gv=new we;class fi extends Fx{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,a){return this.getViewBounds(e,Hv,Gv),a.subVectors(Gv,Hv)}setViewOffset(e,a,s,u,f,d){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(gl*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const _=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/_,a-=d.offsetY*s/m,u*=d.width/_,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ws=-90,Zs=1;class xT extends bn{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new fi(Ws,Zs,e,a);u.layers=this.layers,this.add(u);const f=new fi(Ws,Zs,e,a);f.layers=this.layers,this.add(f);const d=new fi(Ws,Zs,e,a);d.layers=this.layers,this.add(d);const h=new fi(Ws,Zs,e,a);h.layers=this.layers,this.add(h);const _=new fi(Ws,Zs,e,a);_.layers=this.layers,this.add(_);const m=new fi(Ws,Zs,e,a);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,d,h,_]=a;for(const m of a)this.remove(m);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Ac)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of a)this.add(m),m.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,_,m,v]=this.children,p=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,d),e.setRenderTarget(s,2,u),e.render(a,h),e.setRenderTarget(s,3,u),e.render(a,_),e.setRenderTarget(s,4,u),e.render(a,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,u),e.render(a,v),e.setRenderTarget(p,S,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Hx extends Yn{constructor(e=[],a=so,s,u,f,d,h,_,m,v){super(e,a,s,u,f,d,h,_,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ST extends Zr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Hx(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new po(5,5,5),f=new cr({name:"CubemapFromEquirect",uniforms:uo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:or});f.uniforms.tEquirect.value=a;const d=new un(u,f),h=a.minFilter;return a.minFilter===jr&&(a.minFilter=Qi),new xT(1,10,this).update(e,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,a=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(a,s,u);e.setRenderTarget(f)}}class eo extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,d=null;const h=this._targetRay,_=this._grip,m=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const M=a.getJointPose(C,s),x=this._getHandJoint(m,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],S=v.position.distanceTo(p.position),y=.02,b=.005;m.inputState.pinching&&S>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));h!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return h!==null&&(h.visible=u!==null),_!==null&&(_.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new eo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}class Gx extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class MT extends Yn{constructor(e=null,a=1,s=1,u,f,d,h,_,m=hi,v=hi,p,S){super(null,d,h,_,m,v,u,f,p,S),this.isDataTexture=!0,this.image={data:e,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vv extends zi{constructor(e,a,s,u=1){super(e,a,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=u}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ks=new $e,Xv=new $e,pc=[],kv=new Kr,ET=new $e,hl=new un,dl=new Rl;class TT extends un{constructor(e,a,s){super(e,a),this.isInstancedMesh=!0,this.instanceMatrix=new Vv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let u=0;u<s;u++)this.setMatrixAt(u,ET)}computeBoundingBox(){const e=this.geometry,a=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Ks),kv.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(kv)}computeBoundingSphere(){const e=this.geometry,a=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<a;s++)this.getMatrixAt(s,Ks),dl.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(dl)}copy(e,a){return super.copy(e,a),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,a){a.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,a){a.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,a){const s=a.morphTargetInfluences,u=this.morphTexture.source.data.data,f=s.length+1,d=e*f+1;for(let h=0;h<s.length;h++)s[h]=u[d+h]}raycast(e,a){const s=this.matrixWorld,u=this.count;if(hl.geometry=this.geometry,hl.material=this.material,hl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(s),e.ray.intersectsSphere(dl)!==!1))for(let f=0;f<u;f++){this.getMatrixAt(f,Ks),Xv.multiplyMatrices(s,Ks),hl.matrixWorld=Xv,hl.raycast(e,pc);for(let d=0,h=pc.length;d<h;d++){const _=pc[d];_.instanceId=f,_.object=this,a.push(_)}pc.length=0}}setColorAt(e,a){this.instanceColor===null&&(this.instanceColor=new Vv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),a.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,a){a.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,a){const s=a.morphTargetInfluences,u=s.length+1;this.morphTexture===null&&(this.morphTexture=new MT(new Float32Array(u*this.count),u,this.count,kp,Ji));const f=this.morphTexture.source.data.data;let d=0;for(let m=0;m<s.length;m++)d+=s[m];const h=this.geometry.morphTargetsRelative?1:1-d,_=u*e;f[_]=h,f.set(s,_+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Od=new lt,bT=new lt,AT=new me;class Vr{constructor(e=new lt(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Od.subVectors(s,a).cross(bT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(Od),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||AT.getNormalMatrix(e),u=this.coplanarPoint(Od).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Rl,RT=new we(.5,.5),mc=new lt;class Qp{constructor(e=new Vr,a=new Vr,s=new Vr,u=new Vr,f=new Vr,d=new Vr){this.planes=[e,a,s,u,f,d]}set(e,a,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(a),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=$i,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],_=f[2],m=f[3],v=f[4],p=f[5],S=f[6],y=f[7],b=f[8],C=f[9],M=f[10],x=f[11],B=f[12],z=f[13],U=f[14],X=f[15];if(u[0].setComponents(m-d,y-v,x-b,X-B).normalize(),u[1].setComponents(m+d,y+v,x+b,X+B).normalize(),u[2].setComponents(m+h,y+p,x+C,X+z).normalize(),u[3].setComponents(m-h,y-p,x-C,X-z).normalize(),s)u[4].setComponents(_,S,M,U).normalize(),u[5].setComponents(m-_,y-S,x-M,X-U).normalize();else if(u[4].setComponents(m-_,y-S,x-M,X-U).normalize(),a===$i)u[5].setComponents(m+_,y+S,x+M,X+U).normalize();else if(a===Ac)u[5].setComponents(_,S,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Fr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const a=RT.distanceTo(e.center);return Fr.radius=.7071067811865476+a,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(mc.x=u.normal.x>0?e.max.x:e.min.x,mc.y=u.normal.y>0?e.max.y:e.min.y,mc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vx extends Yn{constructor(e,a,s=Wr,u,f,d,h=hi,_=hi,m,v=yl,p=1){if(v!==yl&&v!==Ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:a,depth:p};super(S,u,f,d,h,_,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class Xx extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wc extends fr{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,d=a/2,h=Math.floor(s),_=Math.floor(u),m=h+1,v=_+1,p=e/h,S=a/_,y=[],b=[],C=[],M=[];for(let x=0;x<v;x++){const B=x*S-d;for(let z=0;z<m;z++){const U=z*p-f;b.push(U,-B,0),C.push(0,0,1),M.push(z/h),M.push(1-x/_)}}for(let x=0;x<_;x++)for(let B=0;B<h;B++){const z=B+m*x,U=B+m*(x+1),X=B+1+m*(x+1),H=B+1+m*x;y.push(z,U,H),y.push(U,X,H)}this.setIndex(y),this.setAttribute("position",new ta(b,3)),this.setAttribute("normal",new ta(C,3)),this.setAttribute("uv",new ta(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class vl extends fr{constructor(e=1,a=.4,s=12,u=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:s,tubularSegments:u,arc:f},s=Math.floor(s),u=Math.floor(u);const d=[],h=[],_=[],m=[],v=new lt,p=new lt,S=new lt;for(let y=0;y<=s;y++)for(let b=0;b<=u;b++){const C=b/u*f,M=y/s*Math.PI*2;p.x=(e+a*Math.cos(M))*Math.cos(C),p.y=(e+a*Math.cos(M))*Math.sin(C),p.z=a*Math.sin(M),h.push(p.x,p.y,p.z),v.x=e*Math.cos(C),v.y=e*Math.sin(C),S.subVectors(p,v).normalize(),_.push(S.x,S.y,S.z),m.push(b/u),m.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=u;b++){const C=(u+1)*y+b-1,M=(u+1)*(y-1)+b-1,x=(u+1)*(y-1)+b,B=(u+1)*y+b;d.push(C,M,B),d.push(M,x,B)}this.setIndex(d),this.setAttribute("position",new ta(h,3)),this.setAttribute("normal",new ta(_,3)),this.setAttribute("uv",new ta(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Op extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wp,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends Op{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(a){this.ior=(1+.4*a)/(1-.4*a)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class CT extends ho{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wp,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wT extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DT extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jp extends bn{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}class UT extends Jp{constructor(e,a,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}}const zd=new $e,Yv=new lt,qv=new lt;class kx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=ea,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qp,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;Yv.setFromMatrixPosition(e.matrixWorld),a.position.copy(Yv),qv.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(qv),a.updateMatrixWorld(),zd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jv=new $e,pl=new lt,Id=new lt;class NT extends kx{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new lt(1,0,0),new lt(-1,0,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,1,0),new lt(0,-1,0)],this._cubeUps=[new lt(0,1,0),new lt(0,1,0),new lt(0,1,0),new lt(0,1,0),new lt(0,0,1),new lt(0,0,-1)]}updateMatrices(e,a=0){const s=this.camera,u=this.matrix,f=e.distance||s.far;f!==s.far&&(s.far=f,s.updateProjectionMatrix()),pl.setFromMatrixPosition(e.matrixWorld),s.position.copy(pl),Id.copy(s.position),Id.add(this._cubeDirections[a]),s.up.copy(this._cubeUps[a]),s.lookAt(Id),s.updateMatrixWorld(),u.makeTranslation(-pl.x,-pl.y,-pl.z),jv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jv,s.coordinateSystem,s.reversedDepth)}}class LT extends Jp{constructor(e,a,s=0,u=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new NT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yx extends Fx{constructor(e=-1,a=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+a,_=u-a;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=v*this.view.offsetY,_=h-v*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class OT extends kx{constructor(){super(new Yx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wv extends Jp{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new OT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PT extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Zv(o,e,a,s){const u=zT(s);switch(a){case Rx:return o*e;case kp:return o*e/u.components*u.byteLength;case Yp:return o*e/u.components*u.byteLength;case wx:return o*e*2/u.components*u.byteLength;case qp:return o*e*2/u.components*u.byteLength;case Cx:return o*e*3/u.components*u.byteLength;case Pi:return o*e*4/u.components*u.byteLength;case jp:return o*e*4/u.components*u.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:case up:return Math.max(o,16)*Math.max(e,8)/4;case sp:case lp:return Math.max(o,8)*Math.max(e,8)/2;case cp:case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function zT(o){switch(o){case ea:case Ex:return{byteLength:1,components:1};case xl:case Tx:case bl:return{byteLength:2,components:1};case Vp:case Xp:return{byteLength:2,components:4};case Wr:case Gp:case Ji:return{byteLength:4,components:1};case bx:case Ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let o=null,e=!1,a=null,s=null;function u(f,d){a(f,d),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function IT(o){const e=new WeakMap;function a(h,_){const m=h.array,v=h.usage,p=m.byteLength,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,m,v),h.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:p}}function s(h,_,m){const v=_.array,p=_.updateRanges;if(o.bindBuffer(m,h),p.length===0)o.bufferSubData(m,0,v);else{p.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<p.length;y++){const b=p[S],C=p[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,p[S]=C)}p.length=S+1;for(let y=0,b=p.length;y<b;y++){const C=p[y];o.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const _=e.get(h);_&&(o.deleteBuffer(_.buffer),e.delete(h))}function d(h,_){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,a(h,_));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,_),m.version=h.version}}return{get:u,remove:f,update:d}}var BT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ib=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:BT,alphahash_pars_fragment:FT,alphamap_fragment:HT,alphamap_pars_fragment:GT,alphatest_fragment:VT,alphatest_pars_fragment:XT,aomap_fragment:kT,aomap_pars_fragment:YT,batching_pars_vertex:qT,batching_vertex:jT,begin_vertex:WT,beginnormal_vertex:ZT,bsdfs:KT,iridescence_fragment:QT,bumpmap_pars_fragment:JT,clipping_planes_fragment:$T,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:eb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:ab,color_pars_vertex:rb,color_vertex:sb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:ub,displacementmap_pars_vertex:cb,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:db,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Db,envmap_vertex:Sb,fog_vertex:yb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:wb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ob,lights_physical_fragment:Pb,lights_physical_pars_fragment:zb,lights_fragment_begin:Ib,lights_fragment_maps:Bb,lights_fragment_end:Fb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Xb,map_fragment:kb,map_pars_fragment:Yb,map_particle_fragment:qb,map_particle_pars_fragment:jb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:Zb,morphinstance_vertex:Kb,morphcolor_vertex:Qb,morphnormal_vertex:Jb,morphtarget_pars_vertex:$b,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:c1,opaque_fragment:f1,packing:h1,premultiplied_alpha_fragment:d1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:S1,shadowmap_vertex:y1,shadowmask_pars_fragment:M1,skinbase_vertex:E1,skinning_pars_vertex:T1,skinning_vertex:b1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:w1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:N1,uv_pars_fragment:L1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:z1,background_vert:I1,background_frag:B1,backgroundCube_vert:F1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:X1,depth_frag:k1,distanceRGBA_vert:Y1,distanceRGBA_frag:q1,equirect_vert:j1,equirect_frag:W1,linedashed_vert:Z1,linedashed_frag:K1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:$1,meshlambert_frag:tA,meshmatcap_vert:eA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:aA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:lA,meshtoon_vert:uA,meshtoon_frag:cA,points_vert:fA,points_frag:hA,shadow_vert:dA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},Ht={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Xn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Xn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Xn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Xn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Xn([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Xn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Xn([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Xn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Xn([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Xn([Ht.common,Ht.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Xn([Ht.lights,Ht.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const gc={r:0,b:0,g:0},Hr=new Ii,_A=new $e;function vA(o,e,a,s,u,f,d){const h=new Ee(0);let _=f===!0?0:1,m,v,p=null,S=0,y=null;function b(z){let U=z.isScene===!0?z.background:null;return U&&U.isTexture&&(U=(z.backgroundBlurriness>0?a:e).get(U)),U}function C(z){let U=!1;const X=b(z);X===null?x(h,_):X&&X.isColor&&(x(X,1),U=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,U){const X=b(U);X&&(X.isCubeTexture||X.mapping===Cc)?(v===void 0&&(v=new un(new po(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:uo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Hr.copy(U.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Hr)),v.material.toneMapped=Oe.getTransfer(X.colorSpace)!==qe,(p!==X||S!==X.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,p=X,S=X.version,y=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new un(new wc(2,2),new cr({name:"BackgroundMaterial",uniforms:uo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(X.colorSpace)!==qe,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(p!==X||S!==X.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,p=X,S=X.version,y=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function x(z,U){z.getRGB(gc,Bx(o)),s.buffers.color.setClear(gc.r,gc.g,gc.b,U,d)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,U=1){h.set(z),_=U,x(h,_)},getClearAlpha:function(){return _},setClearAlpha:function(z){_=z,x(h,_)},render:C,addToRenderList:M,dispose:B}}function xA(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,d=!1;function h(w,V,st,ht,xt){let dt=!1;const q=p(ht,st,V);f!==q&&(f=q,m(f.object)),dt=y(w,ht,st,xt),dt&&b(w,ht,st,xt),xt!==null&&e.update(xt,o.ELEMENT_ARRAY_BUFFER),(dt||d)&&(d=!1,U(w,V,st,ht),xt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(xt).buffer))}function _(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function p(w,V,st){const ht=st.wireframe===!0;let xt=s[w.id];xt===void 0&&(xt={},s[w.id]=xt);let dt=xt[V.id];dt===void 0&&(dt={},xt[V.id]=dt);let q=dt[ht];return q===void 0&&(q=S(_()),dt[ht]=q),q}function S(w){const V=[],st=[],ht=[];for(let xt=0;xt<a;xt++)V[xt]=0,st[xt]=0,ht[xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:ht,object:w,attributes:{},index:null}}function y(w,V,st,ht){const xt=f.attributes,dt=V.attributes;let q=0;const rt=st.getAttributes();for(const j in rt)if(rt[j].location>=0){const Et=xt[j];let Vt=dt[j];if(Vt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Vt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Vt=w.instanceColor)),Et===void 0||Et.attribute!==Vt||Vt&&Et.data!==Vt.data)return!0;q++}return f.attributesNum!==q||f.index!==ht}function b(w,V,st,ht){const xt={},dt=V.attributes;let q=0;const rt=st.getAttributes();for(const j in rt)if(rt[j].location>=0){let Et=dt[j];Et===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor));const Vt={};Vt.attribute=Et,Et&&Et.data&&(Vt.data=Et.data),xt[j]=Vt,q++}f.attributes=xt,f.attributesNum=q,f.index=ht}function C(){const w=f.newAttributes;for(let V=0,st=w.length;V<st;V++)w[V]=0}function M(w){x(w,0)}function x(w,V){const st=f.newAttributes,ht=f.enabledAttributes,xt=f.attributeDivisors;st[w]=1,ht[w]===0&&(o.enableVertexAttribArray(w),ht[w]=1),xt[w]!==V&&(o.vertexAttribDivisor(w,V),xt[w]=V)}function B(){const w=f.newAttributes,V=f.enabledAttributes;for(let st=0,ht=V.length;st<ht;st++)V[st]!==w[st]&&(o.disableVertexAttribArray(st),V[st]=0)}function z(w,V,st,ht,xt,dt,q){q===!0?o.vertexAttribIPointer(w,V,st,xt,dt):o.vertexAttribPointer(w,V,st,ht,xt,dt)}function U(w,V,st,ht){C();const xt=ht.attributes,dt=st.getAttributes(),q=V.defaultAttributeValues;for(const rt in dt){const j=dt[rt];if(j.location>=0){let yt=xt[rt];if(yt===void 0&&(rt==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),rt==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const Et=yt.normalized,Vt=yt.itemSize,ie=e.get(yt);if(ie===void 0)continue;const pe=ie.buffer,I=ie.type,ot=ie.bytesPerElement,W=I===o.INT||I===o.UNSIGNED_INT||yt.gpuType===Gp;if(yt.isInterleavedBufferAttribute){const et=yt.data,At=et.stride,Nt=yt.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<j.locationSize;Tt++)x(j.location+Tt,et.meshPerAttribute);w.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)M(j.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let Tt=0;Tt<j.locationSize;Tt++)z(j.location+Tt,Vt/j.locationSize,I,Et,At*ot,(Nt+Vt/j.locationSize*Tt)*ot,W)}else{if(yt.isInstancedBufferAttribute){for(let et=0;et<j.locationSize;et++)x(j.location+et,yt.meshPerAttribute);w.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let et=0;et<j.locationSize;et++)M(j.location+et);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let et=0;et<j.locationSize;et++)z(j.location+et,Vt/j.locationSize,I,Et,Vt*ot,Vt/j.locationSize*et*ot,W)}}else if(q!==void 0){const Et=q[rt];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}B()}function X(){Y();for(const w in s){const V=s[w];for(const st in V){const ht=V[st];for(const xt in ht)v(ht[xt].object),delete ht[xt];delete V[st]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const st in V){const ht=V[st];for(const xt in ht)v(ht[xt].object),delete ht[xt];delete V[st]}delete s[w.id]}function O(w){for(const V in s){const st=s[V];if(st[w.id]===void 0)continue;const ht=st[w.id];for(const xt in ht)v(ht[xt].object),delete ht[xt];delete st[w.id]}}function Y(){D(),d=!0,f!==u&&(f=u,m(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function SA(o,e,a){let s;function u(m){s=m}function f(m,v){o.drawArrays(s,m,v),a.update(v,s,1)}function d(m,v,p){p!==0&&(o.drawArraysInstanced(s,m,v,p),a.update(v,s,p))}function h(m,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,p);let y=0;for(let b=0;b<p;b++)y+=v[b];a.update(y,s,1)}function _(m,v,p,S){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<m.length;b++)d(m[b],v[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,v,0,S,0,p);let b=0;for(let C=0;C<p;C++)b+=v[C]*S[C];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=_}function yA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(O){return!(O!==Pi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const Y=O===bl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ea&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ji&&!Y)}function _(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=a.precision!==void 0?a.precision:"highp";const v=_(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const p=a.logarithmicDepthBuffer===!0,S=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:p,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:B,maxVaryings:z,maxFragmentUniforms:U,vertexTextures:X,maxSamples:H}}function MA(o){const e=this;let a=null,s=0,u=!1,f=!1;const d=new Vr,h=new me,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,S){const y=p.length!==0||S||s!==0||u;return u=S,s=p.length,y},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,S){a=v(p,S,0)},this.setState=function(p,S,y){const b=p.clippingPlanes,C=p.clipIntersection,M=p.clipShadows,x=o.get(p);if(!u||b===null||b.length===0||f&&!M)f?v(null):m();else{const B=f?0:s,z=B*4;let U=x.clippingState||null;_.value=U,U=v(b,S,z,y);for(let X=0;X!==z;++X)U[X]=a[X];x.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){_.value!==a&&(_.value=a,_.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(p,S,y,b){const C=p!==null?p.length:0;let M=null;if(C!==0){if(M=_.value,b!==!0||M===null){const x=y+C*4,B=S.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<x)&&(M=new Float32Array(x));for(let z=0,U=y;z!==C;++z,U+=4)d.copy(p[z]).applyMatrix4(B,h),d.normal.toArray(M,U),M[U+3]=d.constant}_.value=M,_.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function EA(o){let e=new WeakMap;function a(d,h){return h===np?d.mapping=so:h===ip&&(d.mapping=oo),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===np||h===ip)if(e.has(d)){const _=e.get(d).texture;return a(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const m=new ST(_.height);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",u),a(m.texture,d.mapping)}else return null}}return d}function u(d){const h=d.target;h.removeEventListener("dispose",u);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const no=4,Kv=[.125,.215,.35,.446,.526,.582],Yr=20,Bd=new Yx,Qv=new Ee;let Fd=null,Hd=0,Gd=0,Vd=!1;const Xr=(1+Math.sqrt(5))/2,Qs=1/Xr,Jv=[new lt(-Xr,Qs,0),new lt(Xr,Qs,0),new lt(-Qs,0,Xr),new lt(Qs,0,Xr),new lt(0,Xr,-Qs),new lt(0,Xr,Qs),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],TA=new lt;class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100,f={}){const{size:d=256,position:h=TA}=f;Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,s,u,_,h),a>0&&this._blur(_,0,0,a),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,Hd,Gd),this._renderer.xr.enabled=Vd,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===so||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:bl,format:Pi,colorSpace:lo,depthBuffer:!1},u=$v(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bA(f)),this._blurMaterial=AA(f,e,a)}return u}_compileMaterial(e){const a=new un(this._lodPlanes[0],e);this._renderer.compile(a,Bd)}_sceneToCubeUV(e,a,s,u,f){const _=new fi(90,1,a,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,S=p.autoClear,y=p.toneMapping;p.getClearColor(Qv),p.toneMapping=lr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const C=new Px({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new un(new po,C);let x=!1;const B=e.background;B?B.isColor&&(C.color.copy(B),e.background=null,x=!0):(C.color.copy(Qv),x=!0);for(let z=0;z<6;z++){const U=z%3;U===0?(_.up.set(0,m[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[z],f.y,f.z)):U===1?(_.up.set(0,0,m[z]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[z],f.z)):(_.up.set(0,m[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[z]));const X=this._cubeSize;_c(u,U*X,z>2?X:0,X,X),p.setRenderTarget(u),x&&p.render(M,_),p.render(e,_)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=y,p.autoClear=S,e.background=B}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===so||e.mapping===oo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tx());const f=u?this._cubemapMaterial:this._equirectMaterial,d=new un(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const _=this._cubeSize;_c(a,0,0,3*_,2*_),s.setRenderTarget(a),s.render(d,Bd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=Jv[(u-f-1)%Jv.length];this._blur(e,f-1,f,d,h)}a.autoClear=s}_blur(e,a,s,u,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,a,s,u,"latitudinal",f),this._halfBlur(d,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,d,h){const _=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new un(this._lodPlanes[u],m),S=m.uniforms,y=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*y):2*Math.PI/(2*Yr-1),C=f/b,M=isFinite(f)?1+Math.floor(v*C):Yr;M>Yr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Yr}`);const x=[];let B=0;for(let O=0;O<Yr;++O){const Y=O/C,D=Math.exp(-Y*Y/2);x.push(D),O===0?B+=D:O<M&&(B+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:z}=this;S.dTheta.value=b,S.mipInt.value=z-s;const U=this._sizeLods[u],X=3*U*(u>z-no?u-z+no:0),H=4*(this._cubeSize-U);_c(a,X,H,3*U,2*U),_.setRenderTarget(a),_.render(p,Bd)}}function bA(o){const e=[],a=[],s=[];let u=o;const f=o-no+1+Kv.length;for(let d=0;d<f;d++){const h=Math.pow(2,u);a.push(h);let _=1/h;d>o-no?_=Kv[d-o+no-1]:d===0&&(_=0),s.push(_);const m=1/(h-2),v=-m,p=1+m,S=[v,v,p,v,p,p,v,v,p,p,v,p],y=6,b=6,C=3,M=2,x=1,B=new Float32Array(C*b*y),z=new Float32Array(M*b*y),U=new Float32Array(x*b*y);for(let H=0;H<y;H++){const O=H%3*2/3-1,Y=H>2?0:-1,D=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];B.set(D,C*b*H),z.set(S,M*b*H);const w=[H,H,H,H,H,H];U.set(w,x*b*H)}const X=new fr;X.setAttribute("position",new zi(B,C)),X.setAttribute("uv",new zi(z,M)),X.setAttribute("faceIndex",new zi(U,x)),e.push(X),u>no&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function $v(o,e,a){const s=new Zr(o,e,a);return s.texture.mapping=Cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _c(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function AA(o,e,a){const s=new Float32Array(Yr),u=new lt(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function tx(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function ex(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function $p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RA(o){let e=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const _=h.mapping,m=_===np||_===ip,v=_===so||_===oo;if(m||v){let p=e.get(h);const S=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return a===null&&(a=new Pp(o)),p=m?a.fromEquirectangular(h,p):a.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return m&&y&&y.height>0||v&&y&&u(y)?(a===null&&(a=new Pp(o)),p=m?a.fromEquirectangular(h):a.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function u(h){let _=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&_++;return _===m}function f(h){const _=h.target;_.removeEventListener("dispose",f);const m=e.get(_);m!==void 0&&(e.delete(_),m.dispose())}function d(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function CA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&Tl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function wA(o,e,a,s){const u={},f=new WeakMap;function d(p){const S=p.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",d),delete u[S.id];const y=f.get(S);y&&(e.remove(y),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function h(p,S){return u[S.id]===!0||(S.addEventListener("dispose",d),u[S.id]=!0,a.memory.geometries++),S}function _(p){const S=p.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function m(p){const S=[],y=p.index,b=p.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let z=0,U=B.length;z<U;z+=3){const X=B[z+0],H=B[z+1],O=B[z+2];S.push(X,H,H,O,O,X)}}else if(b!==void 0){const B=b.array;C=b.version;for(let z=0,U=B.length/3-1;z<U;z+=3){const X=z+0,H=z+1,O=z+2;S.push(X,H,H,O,O,X)}}else return;const M=new(Ux(S)?Ix:zx)(S,1);M.version=C;const x=f.get(p);x&&e.remove(x),f.set(p,M)}function v(p){const S=f.get(p);if(S){const y=p.index;y!==null&&S.version<y.version&&m(p)}else m(p);return f.get(p)}return{get:h,update:_,getWireframeAttribute:v}}function DA(o,e,a){let s;function u(S){s=S}let f,d;function h(S){f=S.type,d=S.bytesPerElement}function _(S,y){o.drawElements(s,y,f,S*d),a.update(y,s,1)}function m(S,y,b){b!==0&&(o.drawElementsInstanced(s,y,f,S*d,b),a.update(y,s,b))}function v(S,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,f,S,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];a.update(M,s,1)}function p(S,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<S.length;x++)m(S[x]/d,y[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,f,S,0,C,0,b);let x=0;for(let B=0;B<b;B++)x+=y[B]*C[B];a.update(x,s,1)}}this.setMode=u,this.setIndex=h,this.render=_,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function UA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function NA(o,e,a){const s=new WeakMap,u=new je;function f(d,h,_){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=v!==void 0?v.length:0;let S=s.get(h);if(S===void 0||S.count!==p){let w=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let X=h.attributes.position.count*U,H=1;X>e.maxTextureSize&&(H=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const O=new Float32Array(X*H*4*p),Y=new Nx(O,X,H,p);Y.type=Ji,Y.needsUpdate=!0;const D=U*4;for(let V=0;V<p;V++){const st=x[V],ht=B[V],xt=z[V],dt=X*H*4*V;for(let q=0;q<st.count;q++){const rt=q*D;b===!0&&(u.fromBufferAttribute(st,q),O[dt+rt+0]=u.x,O[dt+rt+1]=u.y,O[dt+rt+2]=u.z,O[dt+rt+3]=0),C===!0&&(u.fromBufferAttribute(ht,q),O[dt+rt+4]=u.x,O[dt+rt+5]=u.y,O[dt+rt+6]=u.z,O[dt+rt+7]=0),M===!0&&(u.fromBufferAttribute(xt,q),O[dt+rt+8]=u.x,O[dt+rt+9]=u.y,O[dt+rt+10]=u.z,O[dt+rt+11]=xt.itemSize===4?u.w:1)}}S={count:p,texture:Y,size:new we(X,H)},s.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let b=0;for(let M=0;M<m.length;M++)b+=m[M];const C=h.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",C),_.getUniforms().setValue(o,"morphTargetInfluences",m)}_.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),_.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function LA(o,e,a,s){let u=new WeakMap;function f(_){const m=s.render.frame,v=_.geometry,p=e.get(_,v);if(u.get(p)!==m&&(e.update(p),u.set(p,m)),_.isInstancedMesh&&(_.hasEventListener("dispose",h)===!1&&_.addEventListener("dispose",h),u.get(_)!==m&&(a.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&a.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,m))),_.isSkinnedMesh){const S=_.skeleton;u.get(S)!==m&&(S.update(),u.set(S,m))}return p}function d(){u=new WeakMap}function h(_){const m=_.target;m.removeEventListener("dispose",h),a.remove(m.instanceMatrix),m.instanceColor!==null&&a.remove(m.instanceColor)}return{update:f,dispose:d}}const jx=new Yn,nx=new Vx(1,1),Wx=new Nx,Zx=new nT,Kx=new Hx,ix=[],ax=[],rx=new Float32Array(16),sx=new Float32Array(9),ox=new Float32Array(4);function mo(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=ix[u];if(f===void 0&&(f=new Float32Array(u),ix[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=a,o[d].toArray(f,h)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function Sn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Dc(o,e){let a=ax[e];a===void 0&&(a=new Int32Array(e),ax[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function OA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function PA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(xn(a,e))return;o.uniform2fv(this.addr,e),Sn(a,e)}}function zA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(xn(a,e))return;o.uniform3fv(this.addr,e),Sn(a,e)}}function IA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(xn(a,e))return;o.uniform4fv(this.addr,e),Sn(a,e)}}function BA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(xn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(a,e)}else{if(xn(a,s))return;ox.set(s),o.uniformMatrix2fv(this.addr,!1,ox),Sn(a,s)}}function FA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(xn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(a,e)}else{if(xn(a,s))return;sx.set(s),o.uniformMatrix3fv(this.addr,!1,sx),Sn(a,s)}}function HA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(xn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(a,e)}else{if(xn(a,s))return;rx.set(s),o.uniformMatrix4fv(this.addr,!1,rx),Sn(a,s)}}function GA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function VA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(xn(a,e))return;o.uniform2iv(this.addr,e),Sn(a,e)}}function XA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(xn(a,e))return;o.uniform3iv(this.addr,e),Sn(a,e)}}function kA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(xn(a,e))return;o.uniform4iv(this.addr,e),Sn(a,e)}}function YA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function qA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(xn(a,e))return;o.uniform2uiv(this.addr,e),Sn(a,e)}}function jA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(xn(a,e))return;o.uniform3uiv(this.addr,e),Sn(a,e)}}function WA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(xn(a,e))return;o.uniform4uiv(this.addr,e),Sn(a,e)}}function ZA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(nx.compareFunction=Dx,f=nx):f=jx,a.setTexture2D(e||f,u)}function KA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||Zx,u)}function QA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||Kx,u)}function JA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||Wx,u)}function $A(o){switch(o){case 5126:return OA;case 35664:return PA;case 35665:return zA;case 35666:return IA;case 35674:return BA;case 35675:return FA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return XA;case 35669:case 35673:return kA;case 5125:return YA;case 36294:return qA;case 36295:return jA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}function tR(o,e){o.uniform1fv(this.addr,e)}function eR(o,e){const a=mo(e,this.size,2);o.uniform2fv(this.addr,a)}function nR(o,e){const a=mo(e,this.size,3);o.uniform3fv(this.addr,a)}function iR(o,e){const a=mo(e,this.size,4);o.uniform4fv(this.addr,a)}function aR(o,e){const a=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function rR(o,e){const a=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function sR(o,e){const a=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function oR(o,e){o.uniform1iv(this.addr,e)}function lR(o,e){o.uniform2iv(this.addr,e)}function uR(o,e){o.uniform3iv(this.addr,e)}function cR(o,e){o.uniform4iv(this.addr,e)}function fR(o,e){o.uniform1uiv(this.addr,e)}function hR(o,e){o.uniform2uiv(this.addr,e)}function dR(o,e){o.uniform3uiv(this.addr,e)}function pR(o,e){o.uniform4uiv(this.addr,e)}function mR(o,e,a){const s=this.cache,u=e.length,f=Dc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTexture2D(e[d]||jx,f[d])}function gR(o,e,a){const s=this.cache,u=e.length,f=Dc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTexture3D(e[d]||Zx,f[d])}function _R(o,e,a){const s=this.cache,u=e.length,f=Dc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTextureCube(e[d]||Kx,f[d])}function vR(o,e,a){const s=this.cache,u=e.length,f=Dc(a,u);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let d=0;d!==u;++d)a.setTexture2DArray(e[d]||Wx,f[d])}function xR(o){switch(o){case 5126:return tR;case 35664:return eR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return rR;case 35676:return sR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return uR;case 35669:case 35673:return cR;case 5125:return fR;case 36294:return hR;case 36295:return dR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return vR}}class SR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=$A(a.type)}}class yR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=xR(a.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,a[h.id],s)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function lx(o,e){o.seq.push(e),o.map[e.id]=e}function ER(o,e,a){const s=o.name,u=s.length;for(Xd.lastIndex=0;;){const f=Xd.exec(s),d=Xd.lastIndex;let h=f[1];const _=f[2]==="]",m=f[3];if(_&&(h=h|0),m===void 0||m==="["&&d+2===u){lx(a,m===void 0?new SR(h,o,e):new yR(h,o,e));break}else{let p=a.map[h];p===void 0&&(p=new MR(h),lx(a,p)),a=p}}}class Tc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),d=e.getUniformLocation(a,f.name);ER(f,d,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,d=a.length;f!==d;++f){const h=a[f],_=s[h.id];_.needsUpdate!==!1&&h.setValue(e,_.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in a&&s.push(d)}return s}}function ux(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const TR=37297;let bR=0;function AR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const cx=new me;function RR(o){Oe._getMatrix(cx,Oe.workingColorSpace,o);const e=`mat3( ${cx.elements.map(a=>a.toFixed(4))} )`;switch(Oe.getTransfer(o)){case bc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fx(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return a.toUpperCase()+`

`+f+`

`+AR(o.getShaderSource(e),h)}else return f}function CR(o,e){const a=RR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function wR(o,e){let a;switch(e){case gE:a="Linear";break;case _E:a="Reinhard";break;case vE:a="Cineon";break;case yx:a="ACESFilmic";break;case SE:a="AgX";break;case yE:a="Neutral";break;case xE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const vc=new lt;function DR(){Oe.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),a=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function NR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function LR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return a}function ml(o){return o!==""}function hx(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OR=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(o){return o.replace(OR,zR)}const PR=new Map;function zR(o,e){let a=ge[e];if(a===void 0){const s=PR.get(e);if(s!==void 0)a=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return zp(a)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(o){return o.replace(IR,BR)}function BR(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function mx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ZM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function HR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case so:case oo:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function VR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case pE:e="ENVMAP_BLENDING_MIX";break;case mE:e="ENVMAP_BLENDING_ADD";break}return e}function XR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function kR(o,e,a,s){const u=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const _=FR(a),m=HR(a),v=GR(a),p=VR(a),S=XR(a),y=UR(a),b=NR(f),C=u.createProgram();let M,x,B=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(ml).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(ml).join(`
`),x.length>0&&(x+=`
`)):(M=[mx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),x=[mx(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+m:"",a.envMap?"#define "+v:"",a.envMap?"#define "+p:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==lr?"#define TONE_MAPPING":"",a.toneMapping!==lr?ge.tonemapping_pars_fragment:"",a.toneMapping!==lr?wR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,CR("linearToOutputTexel",a.outputColorSpace),DR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ml).join(`
`)),d=zp(d),d=hx(d,a),d=dx(d,a),h=zp(h),h=hx(h,a),h=dx(h,a),d=px(d),h=px(h),a.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",a.glslVersion===Ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const z=B+M+d,U=B+x+h,X=ux(u,u.VERTEX_SHADER,z),H=ux(u,u.FRAGMENT_SHADER,U);u.attachShader(C,X),u.attachShader(C,H),a.index0AttributeName!==void 0?u.bindAttribLocation(C,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(C,0,"position"),u.linkProgram(C);function O(V){if(o.debug.checkShaderErrors){const st=u.getProgramInfoLog(C)||"",ht=u.getShaderInfoLog(X)||"",xt=u.getShaderInfoLog(H)||"",dt=st.trim(),q=ht.trim(),rt=xt.trim();let j=!0,yt=!0;if(u.getProgramParameter(C,u.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,C,X,H);else{const Et=fx(u,X,"vertex"),Vt=fx(u,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(C,u.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+dt+`
`+Et+`
`+Vt)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(q===""||rt==="")&&(yt=!1);yt&&(V.diagnostics={runnable:j,programLog:dt,vertexShader:{log:q,prefix:M},fragmentShader:{log:rt,prefix:x}})}u.deleteShader(X),u.deleteShader(H),Y=new Tc(u,C),D=LR(u,C)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=u.getProgramParameter(C,TR)),w},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(C),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=bR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=H,this}let YR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(u)===!1&&(d.add(u),u.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new jR(e),a.set(e,s)),s}}class jR{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function WR(o,e,a,s,u,f,d){const h=new Lx,_=new qR,m=new Set,v=[],p=u.logarithmicDepthBuffer,S=u.vertexTextures;let y=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,w,V,st,ht){const xt=st.fog,dt=ht.geometry,q=D.isMeshStandardMaterial?st.environment:null,rt=(D.isMeshStandardMaterial?a:e).get(D.envMap||q),j=rt&&rt.mapping===Cc?rt.image.height:null,yt=b[D.type];D.precision!==null&&(y=u.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Et=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Vt=Et!==void 0?Et.length:0;let ie=0;dt.morphAttributes.position!==void 0&&(ie=1),dt.morphAttributes.normal!==void 0&&(ie=2),dt.morphAttributes.color!==void 0&&(ie=3);let pe,I,ot,W;if(yt){const Te=Ki[yt];pe=Te.vertexShader,I=Te.fragmentShader}else pe=D.vertexShader,I=D.fragmentShader,_.update(D),ot=_.getVertexShaderID(D),W=_.getFragmentShaderID(D);const et=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Nt=ht.isInstancedMesh===!0,Tt=ht.isBatchedMesh===!0,Rt=!!D.map,Bt=!!D.matcap,P=!!rt,De=!!D.aoMap,se=!!D.lightMap,Jt=!!D.bumpMap,Lt=!!D.normalMap,ae=!!D.displacementMap,Gt=!!D.emissiveMap,oe=!!D.metalnessMap,Re=!!D.roughnessMap,He=D.anisotropy>0,N=D.clearcoat>0,T=D.dispersion>0,it=D.iridescence>0,mt=D.sheen>0,bt=D.transmission>0,pt=He&&!!D.anisotropyMap,qt=N&&!!D.clearcoatMap,Ut=N&&!!D.clearcoatNormalMap,jt=N&&!!D.clearcoatRoughnessMap,Qt=it&&!!D.iridescenceMap,Ct=it&&!!D.iridescenceThicknessMap,zt=mt&&!!D.sheenColorMap,$t=mt&&!!D.sheenRoughnessMap,Kt=!!D.specularMap,It=!!D.specularColorMap,F=!!D.specularIntensityMap,A=bt&&!!D.transmissionMap,$=bt&&!!D.thicknessMap,vt=!!D.gradientMap,Dt=!!D.alphaMap,Mt=D.alphaTest>0,St=!!D.alphaHash,Xt=!!D.extensions;let ce=lr;D.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ce=o.toneMapping);const ke={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:pe,fragmentShader:I,defines:D.defines,customVertexShaderID:ot,customFragmentShaderID:W,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Tt,batchingColor:Tt&&ht._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&ht.instanceColor!==null,instancingMorph:Nt&&ht.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:lo,alphaToCoverage:!!D.alphaToCoverage,map:Rt,matcap:Bt,envMap:P,envMapMode:P&&rt.mapping,envMapCubeUVHeight:j,aoMap:De,lightMap:se,bumpMap:Jt,normalMap:Lt,displacementMap:S&&ae,emissiveMap:Gt,normalMapObjectSpace:Lt&&D.normalMapType===bE,normalMapTangentSpace:Lt&&D.normalMapType===Wp,metalnessMap:oe,roughnessMap:Re,anisotropy:He,anisotropyMap:pt,clearcoat:N,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:jt,dispersion:T,iridescence:it,iridescenceMap:Qt,iridescenceThicknessMap:Ct,sheen:mt,sheenColorMap:zt,sheenRoughnessMap:$t,specularMap:Kt,specularColorMap:It,specularIntensityMap:F,transmission:bt,transmissionMap:A,thicknessMap:$,gradientMap:vt,opaque:D.transparent===!1&&D.blending===io&&D.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Mt,alphaHash:St,combine:D.combine,mapUv:Rt&&C(D.map.channel),aoMapUv:De&&C(D.aoMap.channel),lightMapUv:se&&C(D.lightMap.channel),bumpMapUv:Jt&&C(D.bumpMap.channel),normalMapUv:Lt&&C(D.normalMap.channel),displacementMapUv:ae&&C(D.displacementMap.channel),emissiveMapUv:Gt&&C(D.emissiveMap.channel),metalnessMapUv:oe&&C(D.metalnessMap.channel),roughnessMapUv:Re&&C(D.roughnessMap.channel),anisotropyMapUv:pt&&C(D.anisotropyMap.channel),clearcoatMapUv:qt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:$t&&C(D.sheenRoughnessMap.channel),specularMapUv:Kt&&C(D.specularMap.channel),specularColorMapUv:It&&C(D.specularColorMap.channel),specularIntensityMapUv:F&&C(D.specularIntensityMap.channel),transmissionMapUv:A&&C(D.transmissionMap.channel),thicknessMapUv:$&&C(D.thicknessMap.channel),alphaMapUv:Dt&&C(D.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Lt||He),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!dt.attributes.uv&&(Rt||Dt),fog:!!xt,useFog:D.fog===!0,fogExp2:!!xt&&xt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:At,skinning:ht.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Rt&&D.map.isVideoTexture===!0&&Oe.getTransfer(D.map.colorSpace)===qe,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(D.emissiveMap.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ta,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&D.extensions.multiDraw===!0||Tt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ke.vertexUv1s=m.has(1),ke.vertexUv2s=m.has(2),ke.vertexUv3s=m.has(3),m.clear(),ke}function x(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(B(w,D),z(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function B(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function z(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const w=b[D.type];let V;if(w){const st=Ki[w];V=gT.clone(st.uniforms)}else V=D.uniforms;return V}function X(D,w){let V;for(let st=0,ht=v.length;st<ht;st++){const xt=v[st];if(xt.cacheKey===w){V=xt,++V.usedTimes;break}}return V===void 0&&(V=new kR(o,w,D,f),v.push(V)),V}function H(D){if(--D.usedTimes===0){const w=v.indexOf(D);v[w]=v[v.length-1],v.pop(),D.destroy()}}function O(D){_.remove(D)}function Y(){_.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:X,releaseProgram:H,releaseShaderCache:O,programs:v,dispose:Y}}function ZR(){let o=new WeakMap;function e(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,_){o.get(d)[h]=_}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function KR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function gx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _x(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function d(p,S,y,b,C,M){let x=o[e];return x===void 0?(x={id:p.id,object:p,geometry:S,material:y,groupOrder:b,renderOrder:p.renderOrder,z:C,group:M},o[e]=x):(x.id=p.id,x.object=p,x.geometry=S,x.material=y,x.groupOrder=b,x.renderOrder=p.renderOrder,x.z=C,x.group=M),e++,x}function h(p,S,y,b,C,M){const x=d(p,S,y,b,C,M);y.transmission>0?s.push(x):y.transparent===!0?u.push(x):a.push(x)}function _(p,S,y,b,C,M){const x=d(p,S,y,b,C,M);y.transmission>0?s.unshift(x):y.transparent===!0?u.unshift(x):a.unshift(x)}function m(p,S){a.length>1&&a.sort(p||KR),s.length>1&&s.sort(S||gx),u.length>1&&u.sort(S||gx)}function v(){for(let p=e,S=o.length;p<S;p++){const y=o[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:h,unshift:_,finish:v,sort:m}}function QR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new _x,o.set(s,[d])):u>=f.length?(d=new _x,f.push(d)):d=f[u],d}function a(){o=new WeakMap}return{get:e,dispose:a}}function JR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new lt,color:new Ee};break;case"SpotLight":a={position:new lt,direction:new lt,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new lt,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":a={direction:new lt,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":a={color:new Ee,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=a,a}}}function $R(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let tC=0;function eC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function nC(o){const e=new JR,a=$R(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new lt);const u=new lt,f=new $e,d=new $e;function h(m){let v=0,p=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,b=0,C=0,M=0,x=0,B=0,z=0,U=0,X=0,H=0,O=0;m.sort(eC);for(let D=0,w=m.length;D<w;D++){const V=m[D],st=V.color,ht=V.intensity,xt=V.distance,dt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=st.r*ht,p+=st.g*ht,S+=st.b*ht;else if(V.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(V.sh.coefficients[q],ht);O++}else if(V.isDirectionalLight){const q=e.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const rt=V.shadow,j=a.get(V);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,s.directionalShadow[y]=j,s.directionalShadowMap[y]=dt,s.directionalShadowMatrix[y]=V.shadow.matrix,B++}s.directional[y]=q,y++}else if(V.isSpotLight){const q=e.get(V);q.position.setFromMatrixPosition(V.matrixWorld),q.color.copy(st).multiplyScalar(ht),q.distance=xt,q.coneCos=Math.cos(V.angle),q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),q.decay=V.decay,s.spot[C]=q;const rt=V.shadow;if(V.map&&(s.spotLightMap[X]=V.map,X++,rt.updateMatrices(V),V.castShadow&&H++),s.spotLightMatrix[C]=rt.matrix,V.castShadow){const j=a.get(V);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,s.spotShadow[C]=j,s.spotShadowMap[C]=dt,U++}C++}else if(V.isRectAreaLight){const q=e.get(V);q.color.copy(st).multiplyScalar(ht),q.halfWidth.set(V.width*.5,0,0),q.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=q,M++}else if(V.isPointLight){const q=e.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),q.distance=V.distance,q.decay=V.decay,V.castShadow){const rt=V.shadow,j=a.get(V);j.shadowIntensity=rt.intensity,j.shadowBias=rt.bias,j.shadowNormalBias=rt.normalBias,j.shadowRadius=rt.radius,j.shadowMapSize=rt.mapSize,j.shadowCameraNear=rt.camera.near,j.shadowCameraFar=rt.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=dt,s.pointShadowMatrix[b]=V.shadow.matrix,z++}s.point[b]=q,b++}else if(V.isHemisphereLight){const q=e.get(V);q.skyColor.copy(V.color).multiplyScalar(ht),q.groundColor.copy(V.groundColor).multiplyScalar(ht),s.hemi[x]=q,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=S;const Y=s.hash;(Y.directionalLength!==y||Y.pointLength!==b||Y.spotLength!==C||Y.rectAreaLength!==M||Y.hemiLength!==x||Y.numDirectionalShadows!==B||Y.numPointShadows!==z||Y.numSpotShadows!==U||Y.numSpotMaps!==X||Y.numLightProbes!==O)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=U+X-H,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=O,Y.directionalLength=y,Y.pointLength=b,Y.spotLength=C,Y.rectAreaLength=M,Y.hemiLength=x,Y.numDirectionalShadows=B,Y.numPointShadows=z,Y.numSpotShadows=U,Y.numSpotMaps=X,Y.numLightProbes=O,s.version=tC++)}function _(m,v){let p=0,S=0,y=0,b=0,C=0;const M=v.matrixWorldInverse;for(let x=0,B=m.length;x<B;x++){const z=m[x];if(z.isDirectionalLight){const U=s.directional[p];U.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(M),p++}else if(z.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(z.matrixWorld),u.setFromMatrixPosition(z.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(M),y++}else if(z.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(M),d.identity(),f.copy(z.matrixWorld),f.premultiply(M),d.extractRotation(f),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),b++}else if(z.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(z.matrixWorld),U.position.applyMatrix4(M),S++}else if(z.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(z.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:h,setupView:_,state:s}}function vx(o){const e=new nC(o),a=[],s=[];function u(v){m.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function d(v){s.push(v)}function h(){e.setup(a)}function _(v){e.setupView(a,v)}const m={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:m,setupLights:h,setupLightsView:_,pushLight:f,pushShadow:d}}function iC(o){let e=new WeakMap;function a(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new vx(o),e.set(u,[h])):f>=d.length?(h=new vx(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:a,dispose:s}}const aC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sC(o,e,a){let s=new Qp;const u=new we,f=new we,d=new je,h=new wT({depthPacking:TE}),_=new DT,m={},v=a.maxTextureSize,p={[ur]:kn,[kn]:ur,[Ta]:Ta},S=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:aC,fragmentShader:rC}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new fr;b.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new un(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let x=this.type;this.render=function(H,O,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),st=o.state;st.setBlending(or),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const ht=x!==Ea&&this.type===Ea,xt=x===Ea&&this.type!==Ea;for(let dt=0,q=H.length;dt<q;dt++){const rt=H[dt],j=rt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;u.copy(j.mapSize);const yt=j.getFrameExtents();if(u.multiply(yt),f.copy(j.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/yt.x),u.x=f.x*yt.x,j.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/yt.y),u.y=f.y*yt.y,j.mapSize.y=f.y)),j.map===null||ht===!0||xt===!0){const Vt=this.type!==Ea?{minFilter:hi,magFilter:hi}:{};j.map!==null&&j.map.dispose(),j.map=new Zr(u.x,u.y,Vt),j.map.texture.name=rt.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let Vt=0;Vt<Et;Vt++){const ie=j.getViewport(Vt);d.set(f.x*ie.x,f.y*ie.y,f.x*ie.z,f.y*ie.w),st.viewport(d),j.updateMatrices(rt,Vt),s=j.getFrustum(),U(O,Y,j.camera,rt,this.type)}j.isPointLightShadow!==!0&&this.type===Ea&&B(j,Y),j.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(D,w,V)};function B(H,O){const Y=e.update(C);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Zr(u.x,u.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,Y,S,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,Y,y,C,null)}function z(H,O,Y,D){let w=null;const V=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)w=V;else if(w=Y.isPointLight===!0?_:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const st=w.uuid,ht=O.uuid;let xt=m[st];xt===void 0&&(xt={},m[st]=xt);let dt=xt[ht];dt===void 0&&(dt=w.clone(),xt[ht]=dt,O.addEventListener("dispose",X)),w=dt}if(w.visible=O.visible,w.wireframe=O.wireframe,D===Ea?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:p[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=o.properties.get(w);st.light=Y}return w}function U(H,O,Y,D,w){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Ea)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const ht=e.update(H),xt=H.material;if(Array.isArray(xt)){const dt=ht.groups;for(let q=0,rt=dt.length;q<rt;q++){const j=dt[q],yt=xt[j.materialIndex];if(yt&&yt.visible){const Et=z(H,yt,D,w);H.onBeforeShadow(o,H,O,Y,ht,Et,j),o.renderBufferDirect(Y,null,ht,Et,H,j),H.onAfterShadow(o,H,O,Y,ht,Et,j)}}}else if(xt.visible){const dt=z(H,xt,D,w);H.onBeforeShadow(o,H,O,Y,ht,dt,null),o.renderBufferDirect(Y,null,ht,dt,H,null),H.onAfterShadow(o,H,O,Y,ht,dt,null)}}const st=H.children;for(let ht=0,xt=st.length;ht<xt;ht++)U(st[ht],O,Y,D,w)}function X(H){H.target.removeEventListener("dispose",X);for(const Y in m){const D=m[Y],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const oC={[Zd]:Kd,[Qd]:tp,[Jd]:ep,[ro]:$d,[Kd]:Zd,[tp]:Qd,[ep]:Jd,[$d]:ro};function lC(o,e){function a(){let A=!1;const $=new je;let vt=null;const Dt=new je(0,0,0,0);return{setMask:function(Mt){vt!==Mt&&!A&&(o.colorMask(Mt,Mt,Mt,Mt),vt=Mt)},setLocked:function(Mt){A=Mt},setClear:function(Mt,St,Xt,ce,ke){ke===!0&&(Mt*=ce,St*=ce,Xt*=ce),$.set(Mt,St,Xt,ce),Dt.equals($)===!1&&(o.clearColor(Mt,St,Xt,ce),Dt.copy($))},reset:function(){A=!1,vt=null,Dt.set(-1,0,0,0)}}}function s(){let A=!1,$=!1,vt=null,Dt=null,Mt=null;return{setReversed:function(St){if($!==St){const Xt=e.get("EXT_clip_control");St?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),$=St;const ce=Mt;Mt=null,this.setClear(ce)}},getReversed:function(){return $},setTest:function(St){St?et(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(St){vt!==St&&!A&&(o.depthMask(St),vt=St)},setFunc:function(St){if($&&(St=oC[St]),Dt!==St){switch(St){case Zd:o.depthFunc(o.NEVER);break;case Kd:o.depthFunc(o.ALWAYS);break;case Qd:o.depthFunc(o.LESS);break;case ro:o.depthFunc(o.LEQUAL);break;case Jd:o.depthFunc(o.EQUAL);break;case $d:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Dt=St}},setLocked:function(St){A=St},setClear:function(St){Mt!==St&&($&&(St=1-St),o.clearDepth(St),Mt=St)},reset:function(){A=!1,vt=null,Dt=null,Mt=null,$=!1}}}function u(){let A=!1,$=null,vt=null,Dt=null,Mt=null,St=null,Xt=null,ce=null,ke=null;return{setTest:function(Te){A||(Te?et(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Te){$!==Te&&!A&&(o.stencilMask(Te),$=Te)},setFunc:function(Te,en,gn){(vt!==Te||Dt!==en||Mt!==gn)&&(o.stencilFunc(Te,en,gn),vt=Te,Dt=en,Mt=gn)},setOp:function(Te,en,gn){(St!==Te||Xt!==en||ce!==gn)&&(o.stencilOp(Te,en,gn),St=Te,Xt=en,ce=gn)},setLocked:function(Te){A=Te},setClear:function(Te){ke!==Te&&(o.clearStencil(Te),ke=Te)},reset:function(){A=!1,$=null,vt=null,Dt=null,Mt=null,St=null,Xt=null,ce=null,ke=null}}}const f=new a,d=new s,h=new u,_=new WeakMap,m=new WeakMap;let v={},p={},S=new WeakMap,y=[],b=null,C=!1,M=null,x=null,B=null,z=null,U=null,X=null,H=null,O=new Ee(0,0,0),Y=0,D=!1,w=null,V=null,st=null,ht=null,xt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=rt>=1):j.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=rt>=2);let yt=null,Et={};const Vt=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),pe=new je().fromArray(Vt),I=new je().fromArray(ie);function ot(A,$,vt,Dt){const Mt=new Uint8Array(4),St=o.createTexture();o.bindTexture(A,St),o.texParameteri(A,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(A,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xt=0;Xt<vt;Xt++)A===o.TEXTURE_3D||A===o.TEXTURE_2D_ARRAY?o.texImage3D($,0,o.RGBA,1,1,Dt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D($+Xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return St}const W={};W[o.TEXTURE_2D]=ot(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),et(o.DEPTH_TEST),d.setFunc(ro),Jt(!1),Lt(_v),et(o.CULL_FACE),De(or);function et(A){v[A]!==!0&&(o.enable(A),v[A]=!0)}function At(A){v[A]!==!1&&(o.disable(A),v[A]=!1)}function Nt(A,$){return p[A]!==$?(o.bindFramebuffer(A,$),p[A]=$,A===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=$),A===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=$),!0):!1}function Tt(A,$){let vt=y,Dt=!1;if(A){vt=S.get($),vt===void 0&&(vt=[],S.set($,vt));const Mt=A.textures;if(vt.length!==Mt.length||vt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Xt=Mt.length;St<Xt;St++)vt[St]=o.COLOR_ATTACHMENT0+St;vt.length=Mt.length,Dt=!0}}else vt[0]!==o.BACK&&(vt[0]=o.BACK,Dt=!0);Dt&&o.drawBuffers(vt)}function Rt(A){return b!==A?(o.useProgram(A),b=A,!0):!1}const Bt={[kr]:o.FUNC_ADD,[QM]:o.FUNC_SUBTRACT,[JM]:o.FUNC_REVERSE_SUBTRACT};Bt[$M]=o.MIN,Bt[tE]=o.MAX;const P={[eE]:o.ZERO,[nE]:o.ONE,[iE]:o.SRC_COLOR,[jd]:o.SRC_ALPHA,[uE]:o.SRC_ALPHA_SATURATE,[oE]:o.DST_COLOR,[rE]:o.DST_ALPHA,[aE]:o.ONE_MINUS_SRC_COLOR,[Wd]:o.ONE_MINUS_SRC_ALPHA,[lE]:o.ONE_MINUS_DST_COLOR,[sE]:o.ONE_MINUS_DST_ALPHA,[cE]:o.CONSTANT_COLOR,[fE]:o.ONE_MINUS_CONSTANT_COLOR,[hE]:o.CONSTANT_ALPHA,[dE]:o.ONE_MINUS_CONSTANT_ALPHA};function De(A,$,vt,Dt,Mt,St,Xt,ce,ke,Te){if(A===or){C===!0&&(At(o.BLEND),C=!1);return}if(C===!1&&(et(o.BLEND),C=!0),A!==KM){if(A!==M||Te!==D){if((x!==kr||U!==kr)&&(o.blendEquation(o.FUNC_ADD),x=kr,U=kr),Te)switch(A){case io:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vv:o.blendFunc(o.ONE,o.ONE);break;case xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Sv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case io:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case xv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}B=null,z=null,X=null,H=null,O.set(0,0,0),Y=0,M=A,D=Te}return}Mt=Mt||$,St=St||vt,Xt=Xt||Dt,($!==x||Mt!==U)&&(o.blendEquationSeparate(Bt[$],Bt[Mt]),x=$,U=Mt),(vt!==B||Dt!==z||St!==X||Xt!==H)&&(o.blendFuncSeparate(P[vt],P[Dt],P[St],P[Xt]),B=vt,z=Dt,X=St,H=Xt),(ce.equals(O)===!1||ke!==Y)&&(o.blendColor(ce.r,ce.g,ce.b,ke),O.copy(ce),Y=ke),M=A,D=!1}function se(A,$){A.side===Ta?At(o.CULL_FACE):et(o.CULL_FACE);let vt=A.side===kn;$&&(vt=!vt),Jt(vt),A.blending===io&&A.transparent===!1?De(or):De(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),d.setFunc(A.depthFunc),d.setTest(A.depthTest),d.setMask(A.depthWrite),f.setMask(A.colorWrite);const Dt=A.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(A.stencilWriteMask),h.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),h.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Gt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(A){w!==A&&(A?o.frontFace(o.CW):o.frontFace(o.CCW),w=A)}function Lt(A){A!==jM?(et(o.CULL_FACE),A!==V&&(A===_v?o.cullFace(o.BACK):A===WM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),V=A}function ae(A){A!==st&&(q&&o.lineWidth(A),st=A)}function Gt(A,$,vt){A?(et(o.POLYGON_OFFSET_FILL),(ht!==$||xt!==vt)&&(o.polygonOffset($,vt),ht=$,xt=vt)):At(o.POLYGON_OFFSET_FILL)}function oe(A){A?et(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Re(A){A===void 0&&(A=o.TEXTURE0+dt-1),yt!==A&&(o.activeTexture(A),yt=A)}function He(A,$,vt){vt===void 0&&(yt===null?vt=o.TEXTURE0+dt-1:vt=yt);let Dt=Et[vt];Dt===void 0&&(Dt={type:void 0,texture:void 0},Et[vt]=Dt),(Dt.type!==A||Dt.texture!==$)&&(yt!==vt&&(o.activeTexture(vt),yt=vt),o.bindTexture(A,$||W[A]),Dt.type=A,Dt.texture=$)}function N(){const A=Et[yt];A!==void 0&&A.type!==void 0&&(o.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(){try{o.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function bt(){try{o.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ut(){try{o.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function jt(){try{o.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Qt(){try{o.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ct(){try{o.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function zt(A){pe.equals(A)===!1&&(o.scissor(A.x,A.y,A.z,A.w),pe.copy(A))}function $t(A){I.equals(A)===!1&&(o.viewport(A.x,A.y,A.z,A.w),I.copy(A))}function Kt(A,$){let vt=m.get($);vt===void 0&&(vt=new WeakMap,m.set($,vt));let Dt=vt.get(A);Dt===void 0&&(Dt=o.getUniformBlockIndex($,A.name),vt.set(A,Dt))}function It(A,$){const Dt=m.get($).get(A);_.get($)!==Dt&&(o.uniformBlockBinding($,Dt,A.__bindingPointIndex),_.set($,Dt))}function F(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,Et={},p={},S=new WeakMap,y=[],b=null,C=!1,M=null,x=null,B=null,z=null,U=null,X=null,H=null,O=new Ee(0,0,0),Y=0,D=!1,w=null,V=null,st=null,ht=null,xt=null,pe.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:et,disable:At,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Rt,setBlending:De,setMaterial:se,setFlipSided:Jt,setCullFace:Lt,setLineWidth:ae,setPolygonOffset:Gt,setScissorTest:oe,activeTexture:Re,bindTexture:He,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Qt,texImage3D:Ct,updateUBOMapping:Kt,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:jt,texSubImage2D:mt,texSubImage3D:bt,compressedTexSubImage2D:pt,compressedTexSubImage3D:qt,scissor:zt,viewport:$t,reset:F}}function uC(o,e,a,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new we,v=new WeakMap;let p;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return y?new OffscreenCanvas(N,T):Rc("canvas")}function C(N,T,it){let mt=1;const bt=He(N);if((bt.width>it||bt.height>it)&&(mt=it/Math.max(bt.width,bt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(mt*bt.width),qt=Math.floor(mt*bt.height);p===void 0&&(p=b(pt,qt));const Ut=T?b(pt,qt):p;return Ut.width=pt,Ut.height=qt,Ut.getContext("2d").drawImage(N,0,0,pt,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+pt+"x"+qt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function B(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(N,T,it,mt,bt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=T;if(T===o.RED&&(it===o.FLOAT&&(pt=o.R32F),it===o.HALF_FLOAT&&(pt=o.R16F),it===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.R8UI),it===o.UNSIGNED_SHORT&&(pt=o.R16UI),it===o.UNSIGNED_INT&&(pt=o.R32UI),it===o.BYTE&&(pt=o.R8I),it===o.SHORT&&(pt=o.R16I),it===o.INT&&(pt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(pt=o.RG32F),it===o.HALF_FLOAT&&(pt=o.RG16F),it===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RG8UI),it===o.UNSIGNED_SHORT&&(pt=o.RG16UI),it===o.UNSIGNED_INT&&(pt=o.RG32UI),it===o.BYTE&&(pt=o.RG8I),it===o.SHORT&&(pt=o.RG16I),it===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),it===o.UNSIGNED_INT&&(pt=o.RGB32UI),it===o.BYTE&&(pt=o.RGB8I),it===o.SHORT&&(pt=o.RGB16I),it===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),it===o.UNSIGNED_INT&&(pt=o.RGBA32UI),it===o.BYTE&&(pt=o.RGBA8I),it===o.SHORT&&(pt=o.RGBA16I),it===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),T===o.RGBA){const qt=bt?bc:Oe.getTransfer(mt);it===o.FLOAT&&(pt=o.RGBA32F),it===o.HALF_FLOAT&&(pt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(pt=qt===qe?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function U(N,T){let it;return N?T===null||T===Wr||T===Sl?it=o.DEPTH24_STENCIL8:T===Ji?it=o.DEPTH32F_STENCIL8:T===xl&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===Sl?it=o.DEPTH_COMPONENT24:T===Ji?it=o.DEPTH_COMPONENT32F:T===xl&&(it=o.DEPTH_COMPONENT16),it}function X(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==hi&&N.minFilter!==Qi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function H(N){const T=N.target;T.removeEventListener("dispose",H),Y(T),T.isVideoTexture&&v.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),w(T)}function Y(N){const T=s.get(N);if(T.__webglInit===void 0)return;const it=N.source,mt=S.get(it);if(mt){const bt=mt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&D(N),Object.keys(mt).length===0&&S.delete(it)}s.remove(N)}function D(N){const T=s.get(N);o.deleteTexture(T.__webglTexture);const it=N.source,mt=S.get(it);delete mt[T.__cacheKey],d.memory.textures--}function w(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let bt=0;bt<T.__webglFramebuffer[mt].length;bt++)o.deleteFramebuffer(T.__webglFramebuffer[mt][bt]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=N.textures;for(let mt=0,bt=it.length;mt<bt;mt++){const pt=s.get(it[mt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),d.memory.textures--),s.remove(it[mt])}s.remove(N)}let V=0;function st(){V=0}function ht(){const N=V;return N>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u.maxTextures),V+=1,N}function xt(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function dt(N,T){const it=s.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&it.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(it,N,T);return}}else N.isExternalTexture&&(it.__webglTexture=N.sourceTexture?N.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function q(N,T){const it=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){W(it,N,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function rt(N,T){const it=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){W(it,N,T);return}a.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function j(N,T){const it=s.get(N);if(N.version>0&&it.__version!==N.version){et(it,N,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const yt={[ap]:o.REPEAT,[qr]:o.CLAMP_TO_EDGE,[rp]:o.MIRRORED_REPEAT},Et={[hi]:o.NEAREST,[ME]:o.NEAREST_MIPMAP_NEAREST,[Qu]:o.NEAREST_MIPMAP_LINEAR,[Qi]:o.LINEAR,[fd]:o.LINEAR_MIPMAP_NEAREST,[jr]:o.LINEAR_MIPMAP_LINEAR},Vt={[AE]:o.NEVER,[NE]:o.ALWAYS,[RE]:o.LESS,[Dx]:o.LEQUAL,[CE]:o.EQUAL,[UE]:o.GEQUAL,[wE]:o.GREATER,[DE]:o.NOTEQUAL};function ie(N,T){if(T.type===Ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qi||T.magFilter===fd||T.magFilter===Qu||T.magFilter===jr||T.minFilter===Qi||T.minFilter===fd||T.minFilter===Qu||T.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,yt[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Et[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Et[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Vt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==Qu&&T.minFilter!==jr||T.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function pe(N,T){let it=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",H));const mt=T.source;let bt=S.get(mt);bt===void 0&&(bt={},S.set(mt,bt));const pt=xt(T);if(pt!==N.__cacheKey){bt[pt]===void 0&&(bt[pt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,it=!0),bt[pt].usedTimes++;const qt=bt[N.__cacheKey];qt!==void 0&&(bt[N.__cacheKey].usedTimes--,qt.usedTimes===0&&D(T)),N.__cacheKey=pt,N.__webglTexture=bt[pt].texture}return it}function I(N,T,it){return Math.floor(Math.floor(N/it)/T)}function ot(N,T,it,mt){const pt=N.updateRanges;if(pt.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,mt,T.data);else{pt.sort((Ct,zt)=>Ct.start-zt.start);let qt=0;for(let Ct=1;Ct<pt.length;Ct++){const zt=pt[qt],$t=pt[Ct],Kt=zt.start+zt.count,It=I($t.start,T.width,4),F=I(zt.start,T.width,4);$t.start<=Kt+1&&It===F&&I($t.start+$t.count-1,T.width,4)===It?zt.count=Math.max(zt.count,$t.start+$t.count-zt.start):(++qt,pt[qt]=$t)}pt.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Ct=0,zt=pt.length;Ct<zt;Ct++){const $t=pt[Ct],Kt=Math.floor($t.start/4),It=Math.ceil($t.count/4),F=Kt%T.width,A=Math.floor(Kt/T.width),$=It,vt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,F),o.pixelStorei(o.UNPACK_SKIP_ROWS,A),a.texSubImage2D(o.TEXTURE_2D,0,F,A,$,vt,it,mt,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function W(N,T,it){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const bt=pe(N,T),pt=T.source;a.bindTexture(mt,N.__webglTexture,o.TEXTURE0+it);const qt=s.get(pt);if(pt.version!==qt.__version||bt===!0){a.activeTexture(o.TEXTURE0+it);const Ut=Oe.getPrimaries(Oe.workingColorSpace),jt=T.colorSpace===sr?null:Oe.getPrimaries(T.colorSpace),Qt=T.colorSpace===sr||Ut===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Ct=C(T.image,!1,u.maxTextureSize);Ct=Re(T,Ct);const zt=f.convert(T.format,T.colorSpace),$t=f.convert(T.type);let Kt=z(T.internalFormat,zt,$t,T.colorSpace,T.isVideoTexture);ie(mt,T);let It;const F=T.mipmaps,A=T.isVideoTexture!==!0,$=qt.__version===void 0||bt===!0,vt=pt.dataReady,Dt=X(T,Ct);if(T.isDepthTexture)Kt=U(T.format===Ml,T.type),$&&(A?a.texStorage2D(o.TEXTURE_2D,1,Kt,Ct.width,Ct.height):a.texImage2D(o.TEXTURE_2D,0,Kt,Ct.width,Ct.height,0,zt,$t,null));else if(T.isDataTexture)if(F.length>0){A&&$&&a.texStorage2D(o.TEXTURE_2D,Dt,Kt,F[0].width,F[0].height);for(let Mt=0,St=F.length;Mt<St;Mt++)It=F[Mt],A?vt&&a.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,zt,$t,It.data):a.texImage2D(o.TEXTURE_2D,Mt,Kt,It.width,It.height,0,zt,$t,It.data);T.generateMipmaps=!1}else A?($&&a.texStorage2D(o.TEXTURE_2D,Dt,Kt,Ct.width,Ct.height),vt&&ot(T,Ct,zt,$t)):a.texImage2D(o.TEXTURE_2D,0,Kt,Ct.width,Ct.height,0,zt,$t,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){A&&$&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Kt,F[0].width,F[0].height,Ct.depth);for(let Mt=0,St=F.length;Mt<St;Mt++)if(It=F[Mt],T.format!==Pi)if(zt!==null)if(A){if(vt)if(T.layerUpdates.size>0){const Xt=Zv(It.width,It.height,T.format,T.type);for(const ce of T.layerUpdates){const ke=It.data.subarray(ce*Xt/It.data.BYTES_PER_ELEMENT,(ce+1)*Xt/It.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ce,It.width,It.height,1,zt,ke)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,Ct.depth,zt,It.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Kt,It.width,It.height,Ct.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else A?vt&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,Ct.depth,zt,$t,It.data):a.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Kt,It.width,It.height,Ct.depth,0,zt,$t,It.data)}else{A&&$&&a.texStorage2D(o.TEXTURE_2D,Dt,Kt,F[0].width,F[0].height);for(let Mt=0,St=F.length;Mt<St;Mt++)It=F[Mt],T.format!==Pi?zt!==null?A?vt&&a.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,zt,It.data):a.compressedTexImage2D(o.TEXTURE_2D,Mt,Kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):A?vt&&a.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,zt,$t,It.data):a.texImage2D(o.TEXTURE_2D,Mt,Kt,It.width,It.height,0,zt,$t,It.data)}else if(T.isDataArrayTexture)if(A){if($&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Kt,Ct.width,Ct.height,Ct.depth),vt)if(T.layerUpdates.size>0){const Mt=Zv(Ct.width,Ct.height,T.format,T.type);for(const St of T.layerUpdates){const Xt=Ct.data.subarray(St*Mt/Ct.data.BYTES_PER_ELEMENT,(St+1)*Mt/Ct.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Ct.width,Ct.height,1,zt,$t,Xt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,zt,$t,Ct.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,Ct.width,Ct.height,Ct.depth,0,zt,$t,Ct.data);else if(T.isData3DTexture)A?($&&a.texStorage3D(o.TEXTURE_3D,Dt,Kt,Ct.width,Ct.height,Ct.depth),vt&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,zt,$t,Ct.data)):a.texImage3D(o.TEXTURE_3D,0,Kt,Ct.width,Ct.height,Ct.depth,0,zt,$t,Ct.data);else if(T.isFramebufferTexture){if($)if(A)a.texStorage2D(o.TEXTURE_2D,Dt,Kt,Ct.width,Ct.height);else{let Mt=Ct.width,St=Ct.height;for(let Xt=0;Xt<Dt;Xt++)a.texImage2D(o.TEXTURE_2D,Xt,Kt,Mt,St,0,zt,$t,null),Mt>>=1,St>>=1}}else if(F.length>0){if(A&&$){const Mt=He(F[0]);a.texStorage2D(o.TEXTURE_2D,Dt,Kt,Mt.width,Mt.height)}for(let Mt=0,St=F.length;Mt<St;Mt++)It=F[Mt],A?vt&&a.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt,$t,It):a.texImage2D(o.TEXTURE_2D,Mt,Kt,zt,$t,It);T.generateMipmaps=!1}else if(A){if($){const Mt=He(Ct);a.texStorage2D(o.TEXTURE_2D,Dt,Kt,Mt.width,Mt.height)}vt&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,$t,Ct)}else a.texImage2D(o.TEXTURE_2D,0,Kt,zt,$t,Ct);M(T)&&x(mt),qt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function et(N,T,it){if(T.image.length!==6)return;const mt=pe(N,T),bt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+it);const pt=s.get(bt);if(bt.version!==pt.__version||mt===!0){a.activeTexture(o.TEXTURE0+it);const qt=Oe.getPrimaries(Oe.workingColorSpace),Ut=T.colorSpace===sr?null:Oe.getPrimaries(T.colorSpace),jt=T.colorSpace===sr||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Qt&&!Ct?zt[St]=C(T.image[St],!0,u.maxCubemapSize):zt[St]=Ct?T.image[St].image:T.image[St],zt[St]=Re(T,zt[St]);const $t=zt[0],Kt=f.convert(T.format,T.colorSpace),It=f.convert(T.type),F=z(T.internalFormat,Kt,It,T.colorSpace),A=T.isVideoTexture!==!0,$=pt.__version===void 0||mt===!0,vt=bt.dataReady;let Dt=X(T,$t);ie(o.TEXTURE_CUBE_MAP,T);let Mt;if(Qt){A&&$&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,F,$t.width,$t.height);for(let St=0;St<6;St++){Mt=zt[St].mipmaps;for(let Xt=0;Xt<Mt.length;Xt++){const ce=Mt[Xt];T.format!==Pi?Kt!==null?A?vt&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,0,0,ce.width,ce.height,Kt,ce.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,F,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?vt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,0,0,ce.width,ce.height,Kt,It,ce.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,F,ce.width,ce.height,0,Kt,It,ce.data)}}}else{if(Mt=T.mipmaps,A&&$){Mt.length>0&&Dt++;const St=He(zt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,F,St.width,St.height)}for(let St=0;St<6;St++)if(Ct){A?vt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,Kt,It,zt[St].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,F,zt[St].width,zt[St].height,0,Kt,It,zt[St].data);for(let Xt=0;Xt<Mt.length;Xt++){const ke=Mt[Xt].image[St].image;A?vt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,0,0,ke.width,ke.height,Kt,It,ke.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,F,ke.width,ke.height,0,Kt,It,ke.data)}}else{A?vt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,It,zt[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,F,Kt,It,zt[St]);for(let Xt=0;Xt<Mt.length;Xt++){const ce=Mt[Xt];A?vt&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,0,0,Kt,It,ce.image[St]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,F,Kt,It,ce.image[St])}}}M(T)&&x(o.TEXTURE_CUBE_MAP),pt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function At(N,T,it,mt,bt,pt){const qt=f.convert(it.format,it.colorSpace),Ut=f.convert(it.type),jt=z(it.internalFormat,qt,Ut,it.colorSpace),Qt=s.get(T),Ct=s.get(it);if(Ct.__renderTarget=T,!Qt.__hasExternalTextures){const zt=Math.max(1,T.width>>pt),$t=Math.max(1,T.height>>pt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?a.texImage3D(bt,pt,jt,zt,$t,T.depth,0,qt,Ut,null):a.texImage2D(bt,pt,jt,zt,$t,0,qt,Ut,null)}a.bindFramebuffer(o.FRAMEBUFFER,N),Gt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,bt,Ct.__webglTexture,0,ae(T)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,bt,Ct.__webglTexture,pt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(N,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const mt=T.depthTexture,bt=mt&&mt.isDepthTexture?mt.type:null,pt=U(T.stencilBuffer,bt),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=ae(T);Gt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,pt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const mt=T.textures;for(let bt=0;bt<mt.length;bt++){const pt=mt[bt],qt=f.convert(pt.format,pt.colorSpace),Ut=f.convert(pt.type),jt=z(pt.internalFormat,qt,Ut,pt.colorSpace),Qt=ae(T);it&&Gt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,jt,T.width,T.height):Gt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt(T.depthTexture,0);const bt=mt.__webglTexture,pt=ae(T);if(T.depthTexture.format===yl)Gt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,bt,0);else if(T.depthTexture.format===Ml)Gt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Rt(N){const T=s.get(N),it=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",bt)};mt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=mt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?Tt(T.__webglFramebuffer[0],N):Tt(T.__webglFramebuffer,N)}else if(it){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),Nt(T.__webglDepthbuffer[mt],N,!1);else{const bt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Nt(T.__webglDepthbuffer,N,!1);else{const bt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,pt)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(N,T,it){const mt=s.get(N);T!==void 0&&At(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Rt(N)}function P(N){const T=N.texture,it=s.get(N),mt=s.get(T);N.addEventListener("dispose",O);const bt=N.textures,pt=N.isWebGLCubeRenderTarget===!0,qt=bt.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,d.memory.textures++),pt){it.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[Ut]=[];for(let jt=0;jt<T.mipmaps.length;jt++)it.__webglFramebuffer[Ut][jt]=o.createFramebuffer()}else it.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)it.__webglFramebuffer[Ut]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,jt=bt.length;Ut<jt;Ut++){const Qt=s.get(bt[Ut]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Gt(N)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ut=0;Ut<bt.length;Ut++){const jt=bt[Ut];it.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ut]);const Qt=f.convert(jt.format,jt.colorSpace),Ct=f.convert(jt.type),zt=z(jt.internalFormat,Qt,Ct,jt.colorSpace,N.isXRRenderTarget===!0),$t=ae(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,zt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(it.__webglDepthRenderbuffer,N,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),ie(o.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)At(it.__webglFramebuffer[Ut][jt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,jt);else At(it.__webglFramebuffer[Ut],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(qt){for(let Ut=0,jt=bt.length;Ut<jt;Ut++){const Qt=bt[Ut],Ct=s.get(Qt);let zt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(zt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(zt,Ct.__webglTexture),ie(zt,Qt),At(it.__webglFramebuffer,N,Qt,o.COLOR_ATTACHMENT0+Ut,zt,0),M(Qt)&&x(zt)}a.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ut,mt.__webglTexture),ie(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)At(it.__webglFramebuffer[jt],N,T,o.COLOR_ATTACHMENT0,Ut,jt);else At(it.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Ut,0);M(T)&&x(Ut),a.unbindTexture()}N.depthBuffer&&Rt(N)}function De(N){const T=N.textures;for(let it=0,mt=T.length;it<mt;it++){const bt=T[it];if(M(bt)){const pt=B(N),qt=s.get(bt).__webglTexture;a.bindTexture(pt,qt),x(pt),a.unbindTexture()}}}const se=[],Jt=[];function Lt(N){if(N.samples>0){if(Gt(N)===!1){const T=N.textures,it=N.width,mt=N.height;let bt=o.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(N),Ut=T.length>1;if(Ut)for(let Qt=0;Qt<T.length;Qt++)a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const jt=N.texture.mipmaps;jt&&jt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Qt]);const Ct=s.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,it,mt,0,0,it,mt,bt,o.NEAREST),_===!0&&(se.length=0,Jt.length=0,se.push(o.COLOR_ATTACHMENT0+Qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(se.push(pt),Jt.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Qt=0;Qt<T.length;Qt++){a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Qt]);const Ct=s.get(T[Qt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,Ct,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&_){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(N){return Math.min(u.maxSamples,N.samples)}function Gt(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(N){const T=d.render.frame;v.get(N)!==T&&(v.set(N,T),N.update())}function Re(N,T){const it=N.colorSpace,mt=N.format,bt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||it!==lo&&it!==sr&&(Oe.getTransfer(it)===qe?(mt!==Pi||bt!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function He(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ht,this.resetTextureUnits=st,this.setTexture2D=dt,this.setTexture2DArray=q,this.setTexture3D=rt,this.setTextureCube=j,this.rebindTextures=Bt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Gt}function cC(o,e){function a(s,u=sr){let f;const d=Oe.getTransfer(u);if(s===ea)return o.UNSIGNED_BYTE;if(s===Vp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Xp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===bx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ax)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ex)return o.BYTE;if(s===Tx)return o.SHORT;if(s===xl)return o.UNSIGNED_SHORT;if(s===Gp)return o.INT;if(s===Wr)return o.UNSIGNED_INT;if(s===Ji)return o.FLOAT;if(s===bl)return o.HALF_FLOAT;if(s===Rx)return o.ALPHA;if(s===Cx)return o.RGB;if(s===Pi)return o.RGBA;if(s===yl)return o.DEPTH_COMPONENT;if(s===Ml)return o.DEPTH_STENCIL;if(s===kp)return o.RED;if(s===Yp)return o.RED_INTEGER;if(s===wx)return o.RG;if(s===qp)return o.RG_INTEGER;if(s===jp)return o.RGBA_INTEGER;if(s===Sc||s===yc||s===Mc||s===Ec)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Sc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Sc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sp||s===op||s===lp||s===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===sp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===op)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cp||s===fp||s===hp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===cp||s===fp)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===hp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===Tp||s===bp||s===Ap)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===dp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_p)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ep)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ap)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rp||s===Cp||s===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Rp)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dp||s===Up||s===Np||s===Lp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Dp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Up)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Np)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const fC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const s=new Xx(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new cr({vertexShader:fC,fragmentShader:hC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new un(new wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pC extends co{constructor(e,a){super();const s=this;let u=null,f=1,d=null,h="local-floor",_=1,m=null,v=null,p=null,S=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new dC,x={},B=a.getContextAttributes();let z=null,U=null;const X=[],H=[],O=new we;let Y=null;const D=new fi;D.viewport=new je;const w=new fi;w.viewport=new je;const V=[D,w],st=new PT;let ht=null,xt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=X[W];return et===void 0&&(et=new Ld,X[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=X[W];return et===void 0&&(et=new Ld,X[W]=et),et.getGripSpace()},this.getHand=function(W){let et=X[W];return et===void 0&&(et=new Ld,X[W]=et),et.getHandSpace()};function dt(W){const et=H.indexOf(W.inputSource);if(et===-1)return;const At=X[et];At!==void 0&&(At.update(W.inputSource,W.frame,m||d),At.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){u.removeEventListener("select",dt),u.removeEventListener("selectstart",dt),u.removeEventListener("selectend",dt),u.removeEventListener("squeeze",dt),u.removeEventListener("squeezestart",dt),u.removeEventListener("squeezeend",dt),u.removeEventListener("end",q),u.removeEventListener("inputsourceschange",rt);for(let W=0;W<X.length;W++){const et=H[W];et!==null&&(H[W]=null,X[W].disconnect(et))}ht=null,xt=null,M.reset();for(const W in x)delete x[W];e.setRenderTarget(z),y=null,S=null,p=null,u=null,U=null,ot.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){f=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(u,a)),p},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(W){if(u=W,u!==null){if(z=e.getRenderTarget(),u.addEventListener("select",dt),u.addEventListener("selectstart",dt),u.addEventListener("selectend",dt),u.addEventListener("squeeze",dt),u.addEventListener("squeezestart",dt),u.addEventListener("squeezeend",dt),u.addEventListener("end",q),u.addEventListener("inputsourceschange",rt),B.xrCompatible!==!0&&await a.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Nt=null,Tt=null;B.depth&&(Tt=B.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,At=B.stencil?Ml:yl,Nt=B.stencil?Sl:Wr);const Rt={colorFormat:a.RGBA8,depthFormat:Tt,scaleFactor:f};p=this.getBinding(),S=p.createProjectionLayer(Rt),u.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Zr(S.textureWidth,S.textureHeight,{format:Pi,type:ea,depthTexture:new Vx(S.textureWidth,S.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const At={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(u,a,At),u.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Zr(y.framebufferWidth,y.framebufferHeight,{format:Pi,type:ea,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(_),m=null,d=await u.requestReferenceSpace(h),ot.setContext(u),ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function rt(W){for(let et=0;et<W.removed.length;et++){const At=W.removed[et],Nt=H.indexOf(At);Nt>=0&&(H[Nt]=null,X[Nt].disconnect(At))}for(let et=0;et<W.added.length;et++){const At=W.added[et];let Nt=H.indexOf(At);if(Nt===-1){for(let Rt=0;Rt<X.length;Rt++)if(Rt>=H.length){H.push(At),Nt=Rt;break}else if(H[Rt]===null){H[Rt]=At,Nt=Rt;break}if(Nt===-1)break}const Tt=X[Nt];Tt&&Tt.connect(At)}}const j=new lt,yt=new lt;function Et(W,et,At){j.setFromMatrixPosition(et.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);const Nt=j.distanceTo(yt),Tt=et.projectionMatrix.elements,Rt=At.projectionMatrix.elements,Bt=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),De=(Tt[9]+1)/Tt[5],se=(Tt[9]-1)/Tt[5],Jt=(Tt[8]-1)/Tt[0],Lt=(Rt[8]+1)/Rt[0],ae=Bt*Jt,Gt=Bt*Lt,oe=Nt/(-Jt+Lt),Re=oe*-Jt;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Re),W.translateZ(oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const He=Bt+oe,N=P+oe,T=ae-Re,it=Gt+(Nt-Re),mt=De*P/N*He,bt=se*P/N*He;W.projectionMatrix.makePerspective(T,it,mt,bt,He,N),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Vt(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(u===null)return;let et=W.near,At=W.far;M.texture!==null&&(M.depthNear>0&&(et=M.depthNear),M.depthFar>0&&(At=M.depthFar)),st.near=w.near=D.near=et,st.far=w.far=D.far=At,(ht!==st.near||xt!==st.far)&&(u.updateRenderState({depthNear:st.near,depthFar:st.far}),ht=st.near,xt=st.far),st.layers.mask=W.layers.mask|6,D.layers.mask=st.layers.mask&3,w.layers.mask=st.layers.mask&5;const Nt=W.parent,Tt=st.cameras;Vt(st,Nt);for(let Rt=0;Rt<Tt.length;Rt++)Vt(Tt[Rt],Nt);Tt.length===2?Et(st,D,w):st.projectionMatrix.copy(D.projectionMatrix),ie(W,st,Nt)};function ie(W,et,At){At===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(At.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=El*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&y===null))return _},this.setFoveation=function(W){_=W,S!==null&&(S.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(st)},this.getCameraTexture=function(W){return x[W]};let pe=null;function I(W,et){if(v=et.getViewerPose(m||d),b=et,v!==null){const At=v.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let Nt=!1;At.length!==st.cameras.length&&(st.cameras.length=0,Nt=!0);for(let P=0;P<At.length;P++){const De=At[P];let se=null;if(y!==null)se=y.getViewport(De);else{const Lt=p.getViewSubImage(S,De);se=Lt.viewport,P===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(U))}let Jt=V[P];Jt===void 0&&(Jt=new fi,Jt.layers.enable(P),Jt.viewport=new je,V[P]=Jt),Jt.matrix.fromArray(De.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(De.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(se.x,se.y,se.width,se.height),P===0&&(st.matrix.copy(Jt.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Nt===!0&&st.cameras.push(Jt)}const Tt=u.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&C){p=s.getBinding();const P=p.getDepthInformation(At[0]);P&&P.isValid&&P.texture&&M.init(P,u.renderState)}if(Tt&&Tt.includes("camera-access")&&C){e.state.unbindTexture(),p=s.getBinding();for(let P=0;P<At.length;P++){const De=At[P].camera;if(De){let se=x[De];se||(se=new Xx,x[De]=se);const Jt=p.getCameraImage(De);se.sourceTexture=Jt}}}}for(let At=0;At<X.length;At++){const Nt=H[At],Tt=X[At];Nt!==null&&Tt!==void 0&&Tt.update(Nt,et,m||d)}pe&&pe(W,et),et.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:et}),b=null}const ot=new qx;ot.setAnimationLoop(I),this.setAnimationLoop=function(W){pe=W},this.dispose=function(){}}}const Gr=new Ii,mC=new $e;function gC(o,e){function a(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Bx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,B,z,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(M,x):x.isMeshToonMaterial?(f(M,x),p(M,x)):x.isMeshPhongMaterial?(f(M,x),v(M,x)):x.isMeshStandardMaterial?(f(M,x),S(M,x),x.isMeshPhysicalMaterial&&y(M,x,U)):x.isMeshMatcapMaterial?(f(M,x),b(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),C(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?_(M,x,B,z):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,a(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,a(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,a(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,a(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,a(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,a(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const B=e.get(x),z=B.envMap,U=B.envMapRotation;z&&(M.envMap.value=z,Gr.copy(U),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),M.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(Gr)),M.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,a(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function _(M,x,B,z){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*B,M.scale.value=z*.5,x.map&&(M.map.value=x.map,a(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,a(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,a(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,a(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function p(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,B){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const B=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function _C(o,e,a,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(B,z){const U=z.program;s.uniformBlockBinding(B,U)}function m(B,z){let U=u[B.id];U===void 0&&(b(B),U=v(B),u[B.id]=U,B.addEventListener("dispose",M));const X=z.program;s.updateUBOMapping(B,X);const H=e.render.frame;f[B.id]!==H&&(S(B),f[B.id]=H)}function v(B){const z=p();B.__bindingPointIndex=z;const U=o.createBuffer(),X=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,X,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,U),U}function p(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const z=u[B.id],U=B.uniforms,X=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let H=0,O=U.length;H<O;H++){const Y=Array.isArray(U[H])?U[H]:[U[H]];for(let D=0,w=Y.length;D<w;D++){const V=Y[D];if(y(V,H,D,X)===!0){const st=V.__offset,ht=Array.isArray(V.value)?V.value:[V.value];let xt=0;for(let dt=0;dt<ht.length;dt++){const q=ht[dt],rt=C(q);typeof q=="number"||typeof q=="boolean"?(V.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,st+xt,V.__data)):q.isMatrix3?(V.__data[0]=q.elements[0],V.__data[1]=q.elements[1],V.__data[2]=q.elements[2],V.__data[3]=0,V.__data[4]=q.elements[3],V.__data[5]=q.elements[4],V.__data[6]=q.elements[5],V.__data[7]=0,V.__data[8]=q.elements[6],V.__data[9]=q.elements[7],V.__data[10]=q.elements[8],V.__data[11]=0):(q.toArray(V.__data,xt),xt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,z,U,X){const H=B.value,O=z+"_"+U;if(X[O]===void 0)return typeof H=="number"||typeof H=="boolean"?X[O]=H:X[O]=H.clone(),!0;{const Y=X[O];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return X[O]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function b(B){const z=B.uniforms;let U=0;const X=16;for(let O=0,Y=z.length;O<Y;O++){const D=Array.isArray(z[O])?z[O]:[z[O]];for(let w=0,V=D.length;w<V;w++){const st=D[w],ht=Array.isArray(st.value)?st.value:[st.value];for(let xt=0,dt=ht.length;xt<dt;xt++){const q=ht[xt],rt=C(q),j=U%X,yt=j%rt.boundary,Et=j+yt;U+=yt,Et!==0&&X-Et<rt.storage&&(U+=X-Et),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=rt.storage}}}const H=U%X;return H>0&&(U+=X-H),B.__size=U,B.__cache={},this}function C(B){const z={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(z.boundary=4,z.storage=4):B.isVector2?(z.boundary=8,z.storage=8):B.isVector3||B.isColor?(z.boundary=16,z.storage=12):B.isVector4?(z.boundary=16,z.storage=16):B.isMatrix3?(z.boundary=48,z.storage=48):B.isMatrix4?(z.boundary=64,z.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),z}function M(B){const z=B.target;z.removeEventListener("dispose",M);const U=d.indexOf(z.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(u[z.id]),delete u[z.id],delete f[z.id]}function x(){for(const B in u)o.deleteBuffer(u[B]);d=[],u={},f={}}return{bind:_,update:m,dispose:x}}class vC{constructor(e={}){const{canvas:a=ZE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const b=new Uint32Array(4),C=new Int32Array(4);let M=null,x=null;const B=[],z=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let X=!1;this._outputColorSpace=ci;let H=0,O=0,Y=null,D=-1,w=null;const V=new je,st=new je;let ht=null;const xt=new Ee(0);let dt=0,q=a.width,rt=a.height,j=1,yt=null,Et=null;const Vt=new je(0,0,q,rt),ie=new je(0,0,q,rt);let pe=!1;const I=new Qp;let ot=!1,W=!1;const et=new $e,At=new lt,Nt=new je,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Bt(){return Y===null?j:1}let P=s;function De(R,Q){return a.getContext(R,Q)}try{const R={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:_,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Fp}`),a.addEventListener("webglcontextlost",vt,!1),a.addEventListener("webglcontextrestored",Dt,!1),a.addEventListener("webglcontextcreationerror",Mt,!1),P===null){const Q="webgl2";if(P=De(Q,R),P===null)throw De(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Jt,Lt,ae,Gt,oe,Re,He,N,T,it,mt,bt,pt,qt,Ut,jt,Qt,Ct,zt,$t,Kt,It,F;function A(){se=new CA(P),se.init(),Kt=new cC(P,se),Jt=new yA(P,se,e,Kt),Lt=new lC(P,se),Jt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ae=new UA(P),Gt=new ZR,oe=new uC(P,se,Lt,Gt,Jt,Kt,ae),Re=new EA(U),He=new RA(U),N=new IT(P),It=new xA(P,N),T=new wA(P,N,ae,It),it=new LA(P,T,N,ae),Ct=new NA(P,Jt,oe),Ut=new MA(Gt),mt=new WR(U,Re,He,se,Jt,It,Ut),bt=new gC(U,Gt),pt=new QR,qt=new iC(se),Qt=new vA(U,Re,He,Lt,it,y,_),jt=new sC(U,it,Jt),F=new _C(P,ae,Jt,Lt),zt=new SA(P,se,ae),$t=new DA(P,se,ae),ae.programs=mt.programs,U.capabilities=Jt,U.extensions=se,U.properties=Gt,U.renderLists=pt,U.shadowMap=jt,U.state=Lt,U.info=ae}A();const $=new pC(U,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(q,rt,!1))},this.getSize=function(R){return R.set(q,rt)},this.setSize=function(R,Q,ct=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,rt=Q,a.width=Math.floor(R*j),a.height=Math.floor(Q*j),ct===!0&&(a.style.width=R+"px",a.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(q*j,rt*j).floor()},this.setDrawingBufferSize=function(R,Q,ct){q=R,rt=Q,j=ct,a.width=Math.floor(R*ct),a.height=Math.floor(Q*ct),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(Vt)},this.setViewport=function(R,Q,ct,ft){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,Q,ct,ft),Lt.viewport(V.copy(Vt).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,Q,ct,ft){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,Q,ct,ft),Lt.scissor(st.copy(ie).multiplyScalar(j).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){Lt.setScissorTest(pe=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,ct=!0){let ft=0;if(R){let tt=!1;if(Y!==null){const wt=Y.texture.format;tt=wt===jp||wt===qp||wt===Yp}if(tt){const wt=Y.texture.type,Ft=wt===ea||wt===Wr||wt===xl||wt===Sl||wt===Vp||wt===Xp,kt=Qt.getClearColor(),Ot=Qt.getClearAlpha(),Wt=kt.r,re=kt.g,ee=kt.b;Ft?(b[0]=Wt,b[1]=re,b[2]=ee,b[3]=Ot,P.clearBufferuiv(P.COLOR,0,b)):(C[0]=Wt,C[1]=re,C[2]=ee,C[3]=Ot,P.clearBufferiv(P.COLOR,0,C))}else ft|=P.COLOR_BUFFER_BIT}Q&&(ft|=P.DEPTH_BUFFER_BIT),ct&&(ft|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",vt,!1),a.removeEventListener("webglcontextrestored",Dt,!1),a.removeEventListener("webglcontextcreationerror",Mt,!1),Qt.dispose(),pt.dispose(),qt.dispose(),Gt.dispose(),Re.dispose(),He.dispose(),it.dispose(),It.dispose(),F.dispose(),mt.dispose(),$.dispose(),$.removeEventListener("sessionstart",gn),$.removeEventListener("sessionend",Nn),na.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=ae.autoReset,Q=jt.enabled,ct=jt.autoUpdate,ft=jt.needsUpdate,tt=jt.type;A(),ae.autoReset=R,jt.enabled=Q,jt.autoUpdate=ct,jt.needsUpdate=ft,jt.type=tt}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){const Q=R.target;Q.removeEventListener("dispose",St),Xt(Q)}function Xt(R){ce(R),Gt.remove(R)}function ce(R){const Q=Gt.get(R).programs;Q!==void 0&&(Q.forEach(function(ct){mt.releaseProgram(ct)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ct,ft,tt,wt){Q===null&&(Q=Tt);const Ft=tt.isMesh&&tt.matrixWorld.determinant()<0,kt=wl(R,Q,ct,ft,tt);Lt.setMaterial(ft,Ft);let Ot=ct.index,Wt=1;if(ft.wireframe===!0){if(Ot=T.getWireframeAttribute(ct),Ot===void 0)return;Wt=2}const re=ct.drawRange,ee=ct.attributes.position;let xe=re.start*Wt,Be=(re.start+re.count)*Wt;wt!==null&&(xe=Math.max(xe,wt.start*Wt),Be=Math.min(Be,(wt.start+wt.count)*Wt)),Ot!==null?(xe=Math.max(xe,0),Be=Math.min(Be,Ot.count)):ee!=null&&(xe=Math.max(xe,0),Be=Math.min(Be,ee.count));const Je=Be-xe;if(Je<0||Je===1/0)return;It.setup(tt,ft,kt,ct,Ot);let Pe,Ue=zt;if(Ot!==null&&(Pe=N.get(Ot),Ue=$t,Ue.setIndex(Pe)),tt.isMesh)ft.wireframe===!0?(Lt.setLineWidth(ft.wireframeLinewidth*Bt()),Ue.setMode(P.LINES)):Ue.setMode(P.TRIANGLES);else if(tt.isLine){let ne=ft.linewidth;ne===void 0&&(ne=1),Lt.setLineWidth(ne*Bt()),tt.isLineSegments?Ue.setMode(P.LINES):tt.isLineLoop?Ue.setMode(P.LINE_LOOP):Ue.setMode(P.LINE_STRIP)}else tt.isPoints?Ue.setMode(P.POINTS):tt.isSprite&&Ue.setMode(P.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)Tl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ue.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ne=tt._multiDrawStarts,ze=tt._multiDrawCounts,_e=tt._multiDrawCount,_n=Ot?N.get(Ot).bytesPerElement:1,Qn=Gt.get(ft).currentProgram.getUniforms();for(let Ne=0;Ne<_e;Ne++)Qn.setValue(P,"_gl_DrawID",Ne),Ue.render(ne[Ne]/_n,ze[Ne])}else if(tt.isInstancedMesh)Ue.renderInstances(xe,Je,tt.count);else if(ct.isInstancedBufferGeometry){const ne=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,ze=Math.min(ct.instanceCount,ne);Ue.renderInstances(xe,Je,ze)}else Ue.render(xe,Je)};function ke(R,Q,ct){R.transparent===!0&&R.side===Ta&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,di(R,Q,ct),R.side=ur,R.needsUpdate=!0,di(R,Q,ct),R.side=Ta):di(R,Q,ct)}this.compile=function(R,Q,ct=null){ct===null&&(ct=R),x=qt.get(ct),x.init(Q),z.push(x),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),R!==ct&&R.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(x.pushLight(tt),tt.castShadow&&x.pushShadow(tt))}),x.setupLights();const ft=new Set;return R.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const wt=tt.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const kt=wt[Ft];ke(kt,ct,tt),ft.add(kt)}else ke(wt,ct,tt),ft.add(wt)}),x=z.pop(),ft},this.compileAsync=function(R,Q,ct=null){const ft=this.compile(R,Q,ct);return new Promise(tt=>{function wt(){if(ft.forEach(function(Ft){Gt.get(Ft).currentProgram.isReady()&&ft.delete(Ft)}),ft.size===0){tt(R);return}setTimeout(wt,10)}se.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Te=null;function en(R){Te&&Te(R)}function gn(){na.stop()}function Nn(){na.start()}const na=new qx;na.setAnimationLoop(en),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){Te=R,$.setAnimationLoop(R),R===null?na.stop():na.start()},$.addEventListener("sessionstart",gn),$.addEventListener("sessionend",Nn),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(Q),Q=$.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,Q,Y),x=qt.get(R,z.length),x.init(Q),z.push(x),et.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),I.setFromProjectionMatrix(et,$i,Q.reversedDepth),W=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,W),M=pt.get(R,B.length),M.init(),B.push(M),$.enabled===!0&&$.isPresenting===!0){const wt=U.xr.getDepthSensingMesh();wt!==null&&go(wt,Q,-1/0,U.sortObjects)}go(R,Q,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(yt,Et),Rt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Rt&&Qt.addToRenderList(M,R),this.info.render.frame++,ot===!0&&Ut.beginShadows();const ct=x.state.shadowsArray;jt.render(ct,R,Q),ot===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=M.opaque,tt=M.transmissive;if(x.setupLights(),Q.isArrayCamera){const wt=Q.cameras;if(tt.length>0)for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Ot=wt[Ft];hr(ft,tt,R,Ot)}Rt&&Qt.render(R);for(let Ft=0,kt=wt.length;Ft<kt;Ft++){const Ot=wt[Ft];Cl(M,R,Ot,Ot.viewport)}}else tt.length>0&&hr(ft,tt,R,Q),Rt&&Qt.render(R),Cl(M,R,Q);Y!==null&&O===0&&(oe.updateMultisampleRenderTarget(Y),oe.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(U,R,Q),It.resetDefaultState(),D=-1,w=null,z.pop(),z.length>0?(x=z[z.length-1],ot===!0&&Ut.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function go(R,Q,ct,ft){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||I.intersectsSprite(R)){ft&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(et);const Ft=it.update(R),kt=R.material;kt.visible&&M.push(R,Ft,kt,ct,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||I.intersectsObject(R))){const Ft=it.update(R),kt=R.material;if(ft&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Nt.copy(Ft.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(et)),Array.isArray(kt)){const Ot=Ft.groups;for(let Wt=0,re=Ot.length;Wt<re;Wt++){const ee=Ot[Wt],xe=kt[ee.materialIndex];xe&&xe.visible&&M.push(R,Ft,xe,ct,Nt.z,ee)}}else kt.visible&&M.push(R,Ft,kt,ct,Nt.z,null)}}const wt=R.children;for(let Ft=0,kt=wt.length;Ft<kt;Ft++)go(wt[Ft],Q,ct,ft)}function Cl(R,Q,ct,ft){const tt=R.opaque,wt=R.transmissive,Ft=R.transparent;x.setupLightsView(ct),ot===!0&&Ut.setGlobalState(U.clippingPlanes,ct),ft&&Lt.viewport(V.copy(ft)),tt.length>0&&ia(tt,Q,ct),wt.length>0&&ia(wt,Q,ct),Ft.length>0&&ia(Ft,Q,ct),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function hr(R,Q,ct,ft){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ft.id]===void 0&&(x.state.transmissionRenderTarget[ft.id]=new Zr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?bl:ea,minFilter:jr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const wt=x.state.transmissionRenderTarget[ft.id],Ft=ft.viewport||V;wt.setSize(Ft.z*U.transmissionResolutionScale,Ft.w*U.transmissionResolutionScale);const kt=U.getRenderTarget(),Ot=U.getActiveCubeFace(),Wt=U.getActiveMipmapLevel();U.setRenderTarget(wt),U.getClearColor(xt),dt=U.getClearAlpha(),dt<1&&U.setClearColor(16777215,.5),U.clear(),Rt&&Qt.render(ct);const re=U.toneMapping;U.toneMapping=lr;const ee=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),x.setupLightsView(ft),ot===!0&&Ut.setGlobalState(U.clippingPlanes,ft),ia(R,ct,ft),oe.updateMultisampleRenderTarget(wt),oe.updateRenderTargetMipmap(wt),se.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Be=0,Je=Q.length;Be<Je;Be++){const Pe=Q[Be],Ue=Pe.object,ne=Pe.geometry,ze=Pe.material,_e=Pe.group;if(ze.side===Ta&&Ue.layers.test(ft.layers)){const _n=ze.side;ze.side=kn,ze.needsUpdate=!0,dr(Ue,ct,ft,ne,ze,_e),ze.side=_n,ze.needsUpdate=!0,xe=!0}}xe===!0&&(oe.updateMultisampleRenderTarget(wt),oe.updateRenderTargetMipmap(wt))}U.setRenderTarget(kt,Ot,Wt),U.setClearColor(xt,dt),ee!==void 0&&(ft.viewport=ee),U.toneMapping=re}function ia(R,Q,ct){const ft=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,wt=R.length;tt<wt;tt++){const Ft=R[tt],kt=Ft.object,Ot=Ft.geometry,Wt=Ft.group;let re=Ft.material;re.allowOverride===!0&&ft!==null&&(re=ft),kt.layers.test(ct.layers)&&dr(kt,Q,ct,Ot,re,Wt)}}function dr(R,Q,ct,ft,tt,wt){R.onBeforeRender(U,Q,ct,ft,tt,wt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),tt.onBeforeRender(U,Q,ct,ft,R,wt),tt.transparent===!0&&tt.side===Ta&&tt.forceSinglePass===!1?(tt.side=kn,tt.needsUpdate=!0,U.renderBufferDirect(ct,Q,ft,tt,R,wt),tt.side=ur,tt.needsUpdate=!0,U.renderBufferDirect(ct,Q,ft,tt,R,wt),tt.side=Ta):U.renderBufferDirect(ct,Q,ft,tt,R,wt),R.onAfterRender(U,Q,ct,ft,tt,wt)}function di(R,Q,ct){Q.isScene!==!0&&(Q=Tt);const ft=Gt.get(R),tt=x.state.lights,wt=x.state.shadowsArray,Ft=tt.state.version,kt=mt.getParameters(R,tt.state,wt,Q,ct),Ot=mt.getProgramCacheKey(kt);let Wt=ft.programs;ft.environment=R.isMeshStandardMaterial?Q.environment:null,ft.fog=Q.fog,ft.envMap=(R.isMeshStandardMaterial?He:Re).get(R.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",St),Wt=new Map,ft.programs=Wt);let re=Wt.get(Ot);if(re!==void 0){if(ft.currentProgram===re&&ft.lightsStateVersion===Ft)return Aa(R,kt),re}else kt.uniforms=mt.getUniforms(R),R.onBeforeCompile(kt,U),re=mt.acquireProgram(kt,Ot),Wt.set(Ot,re),ft.uniforms=kt.uniforms;const ee=ft.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=Ut.uniform),Aa(R,kt),ft.needsLights=Dl(R),ft.lightsStateVersion=Ft,ft.needsLights&&(ee.ambientLightColor.value=tt.state.ambient,ee.lightProbe.value=tt.state.probe,ee.directionalLights.value=tt.state.directional,ee.directionalLightShadows.value=tt.state.directionalShadow,ee.spotLights.value=tt.state.spot,ee.spotLightShadows.value=tt.state.spotShadow,ee.rectAreaLights.value=tt.state.rectArea,ee.ltc_1.value=tt.state.rectAreaLTC1,ee.ltc_2.value=tt.state.rectAreaLTC2,ee.pointLights.value=tt.state.point,ee.pointLightShadows.value=tt.state.pointShadow,ee.hemisphereLights.value=tt.state.hemi,ee.directionalShadowMap.value=tt.state.directionalShadowMap,ee.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ee.spotShadowMap.value=tt.state.spotShadowMap,ee.spotLightMatrix.value=tt.state.spotLightMatrix,ee.spotLightMap.value=tt.state.spotLightMap,ee.pointShadowMap.value=tt.state.pointShadowMap,ee.pointShadowMatrix.value=tt.state.pointShadowMatrix),ft.currentProgram=re,ft.uniformsList=null,re}function pr(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Aa(R,Q){const ct=Gt.get(R);ct.outputColorSpace=Q.outputColorSpace,ct.batching=Q.batching,ct.batchingColor=Q.batchingColor,ct.instancing=Q.instancing,ct.instancingColor=Q.instancingColor,ct.instancingMorph=Q.instancingMorph,ct.skinning=Q.skinning,ct.morphTargets=Q.morphTargets,ct.morphNormals=Q.morphNormals,ct.morphColors=Q.morphColors,ct.morphTargetsCount=Q.morphTargetsCount,ct.numClippingPlanes=Q.numClippingPlanes,ct.numIntersection=Q.numClipIntersection,ct.vertexAlphas=Q.vertexAlphas,ct.vertexTangents=Q.vertexTangents,ct.toneMapping=Q.toneMapping}function wl(R,Q,ct,ft,tt){Q.isScene!==!0&&(Q=Tt),oe.resetTextureUnits();const wt=Q.fog,Ft=ft.isMeshStandardMaterial?Q.environment:null,kt=Y===null?U.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:lo,Ot=(ft.isMeshStandardMaterial?He:Re).get(ft.envMap||Ft),Wt=ft.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,re=!!ct.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ee=!!ct.morphAttributes.position,xe=!!ct.morphAttributes.normal,Be=!!ct.morphAttributes.color;let Je=lr;ft.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Je=U.toneMapping);const Pe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0,ne=Gt.get(ft),ze=x.state.lights;if(ot===!0&&(W===!0||R!==w)){const an=R===w&&ft.id===D;Ut.setState(ft,R,an)}let _e=!1;ft.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==ze.state.version||ne.outputColorSpace!==kt||tt.isBatchedMesh&&ne.batching===!1||!tt.isBatchedMesh&&ne.batching===!0||tt.isBatchedMesh&&ne.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ne.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ne.instancing===!1||!tt.isInstancedMesh&&ne.instancing===!0||tt.isSkinnedMesh&&ne.skinning===!1||!tt.isSkinnedMesh&&ne.skinning===!0||tt.isInstancedMesh&&ne.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ne.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ne.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ne.instancingMorph===!1&&tt.morphTexture!==null||ne.envMap!==Ot||ft.fog===!0&&ne.fog!==wt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Ut.numPlanes||ne.numIntersection!==Ut.numIntersection)||ne.vertexAlphas!==Wt||ne.vertexTangents!==re||ne.morphTargets!==ee||ne.morphNormals!==xe||ne.morphColors!==Be||ne.toneMapping!==Je||ne.morphTargetsCount!==Ue)&&(_e=!0):(_e=!0,ne.__version=ft.version);let _n=ne.currentProgram;_e===!0&&(_n=di(ft,Q,tt));let Qn=!1,Ne=!1,Ra=!1;const Ze=_n.getUniforms(),In=ne.uniforms;if(Lt.useProgram(_n.program)&&(Qn=!0,Ne=!0,Ra=!0),ft.id!==D&&(D=ft.id,Ne=!0),Qn||w!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(P,"projectionMatrix",R.projectionMatrix),Ze.setValue(P,"viewMatrix",R.matrixWorldInverse);const Ln=Ze.map.cameraPosition;Ln!==void 0&&Ln.setValue(P,At.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&Ze.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ze.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ne=!0,Ra=!0)}if(tt.isSkinnedMesh){Ze.setOptional(P,tt,"bindMatrix"),Ze.setOptional(P,tt,"bindMatrixInverse");const an=tt.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ze.setValue(P,"boneTexture",an.boneTexture,oe))}tt.isBatchedMesh&&(Ze.setOptional(P,tt,"batchingTexture"),Ze.setValue(P,"batchingTexture",tt._matricesTexture,oe),Ze.setOptional(P,tt,"batchingIdTexture"),Ze.setValue(P,"batchingIdTexture",tt._indirectTexture,oe),Ze.setOptional(P,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ze.setValue(P,"batchingColorTexture",tt._colorsTexture,oe));const cn=ct.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Ct.update(tt,ct,_n),(Ne||ne.receiveShadow!==tt.receiveShadow)&&(ne.receiveShadow=tt.receiveShadow,Ze.setValue(P,"receiveShadow",tt.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(In.envMap.value=Ot,In.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&Q.environment!==null&&(In.envMapIntensity.value=Q.environmentIntensity),Ne&&(Ze.setValue(P,"toneMappingExposure",U.toneMappingExposure),ne.needsLights&&Uc(In,Ra),wt&&ft.fog===!0&&bt.refreshFogUniforms(In,wt),bt.refreshMaterialUniforms(In,ft,j,rt,x.state.transmissionRenderTarget[R.id]),Tc.upload(P,pr(ne),In,oe)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Tc.upload(P,pr(ne),In,oe),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ze.setValue(P,"center",tt.center),Ze.setValue(P,"modelViewMatrix",tt.modelViewMatrix),Ze.setValue(P,"normalMatrix",tt.normalMatrix),Ze.setValue(P,"modelMatrix",tt.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const an=ft.uniformsGroups;for(let Ln=0,Qr=an.length;Ln<Qr;Ln++){const Bi=an[Ln];F.update(Bi,_n),F.bind(Bi,_n)}}return _n}function Uc(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Dl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,Q,ct){const ft=Gt.get(R);ft.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=Q,Gt.get(R.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ct,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){const ct=Gt.get(R);ct.__webglFramebuffer=Q,ct.__useDefaultFramebuffer=Q===void 0};const _o=P.createFramebuffer();this.setRenderTarget=function(R,Q=0,ct=0){Y=R,H=Q,O=ct;let ft=!0,tt=null,wt=!1,Ft=!1;if(R){const Ot=Gt.get(R);if(Ot.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(P.FRAMEBUFFER,null),ft=!1;else if(Ot.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Ot.__hasExternalTextures)oe.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Ot.__boundDepthTexture!==ee){if(ee!==null&&Gt.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ft=!0);const re=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[Q])?tt=re[Q][ct]:tt=re[Q],wt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?tt=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?tt=re[ct]:tt=re,V.copy(R.viewport),st.copy(R.scissor),ht=R.scissorTest}else V.copy(Vt).multiplyScalar(j).floor(),st.copy(ie).multiplyScalar(j).floor(),ht=pe;if(ct!==0&&(tt=_o),Lt.bindFramebuffer(P.FRAMEBUFFER,tt)&&ft&&Lt.drawBuffers(R,tt),Lt.viewport(V),Lt.scissor(st),Lt.setScissorTest(ht),wt){const Ot=Gt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ot.__webglTexture,ct)}else if(Ft){const Ot=Q;for(let Wt=0;Wt<R.textures.length;Wt++){const re=Gt.get(R.textures[Wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Wt,re.__webglTexture,ct,Ot)}}else if(R!==null&&ct!==0){const Ot=Gt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,ct)}D=-1},this.readRenderTargetPixels=function(R,Q,ct,ft,tt,wt,Ft,kt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){Lt.bindFramebuffer(P.FRAMEBUFFER,Ot);try{const Wt=R.textures[kt],re=Wt.format,ee=Wt.type;if(!Jt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-ft&&ct>=0&&ct<=R.height-tt&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+kt),P.readPixels(Q,ct,ft,tt,Kt.convert(re),Kt.convert(ee),wt))}finally{const Wt=Y!==null?Gt.get(Y).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ct,ft,tt,wt,Ft,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if(Q>=0&&Q<=R.width-ft&&ct>=0&&ct<=R.height-tt){Lt.bindFramebuffer(P.FRAMEBUFFER,Ot);const Wt=R.textures[kt],re=Wt.format,ee=Wt.type;if(!Jt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.bufferData(P.PIXEL_PACK_BUFFER,wt.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+kt),P.readPixels(Q,ct,ft,tt,Kt.convert(re),Kt.convert(ee),0);const Be=Y!==null?Gt.get(Y).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,Be);const Je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await KE(P,Je,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,wt),P.deleteBuffer(xe),P.deleteSync(Je),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,ct=0){const ft=Math.pow(2,-ct),tt=Math.floor(R.image.width*ft),wt=Math.floor(R.image.height*ft),Ft=Q!==null?Q.x:0,kt=Q!==null?Q.y:0;oe.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,ct,0,0,Ft,kt,tt,wt),Lt.unbindTexture()};const mr=P.createFramebuffer(),Nc=P.createFramebuffer();this.copyTextureToTexture=function(R,Q,ct=null,ft=null,tt=0,wt=null){wt===null&&(tt!==0?(Tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=tt,tt=0):wt=0);let Ft,kt,Ot,Wt,re,ee,xe,Be,Je;const Pe=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(ct!==null)Ft=ct.max.x-ct.min.x,kt=ct.max.y-ct.min.y,Ot=ct.isBox3?ct.max.z-ct.min.z:1,Wt=ct.min.x,re=ct.min.y,ee=ct.isBox3?ct.min.z:0;else{const cn=Math.pow(2,-tt);Ft=Math.floor(Pe.width*cn),kt=Math.floor(Pe.height*cn),R.isDataArrayTexture?Ot=Pe.depth:R.isData3DTexture?Ot=Math.floor(Pe.depth*cn):Ot=1,Wt=0,re=0,ee=0}ft!==null?(xe=ft.x,Be=ft.y,Je=ft.z):(xe=0,Be=0,Je=0);const Ue=Kt.convert(Q.format),ne=Kt.convert(Q.type);let ze;Q.isData3DTexture?(oe.setTexture3D(Q,0),ze=P.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(oe.setTexture2DArray(Q,0),ze=P.TEXTURE_2D_ARRAY):(oe.setTexture2D(Q,0),ze=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment);const _e=P.getParameter(P.UNPACK_ROW_LENGTH),_n=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Qn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ne=P.getParameter(P.UNPACK_SKIP_ROWS),Ra=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,re),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ee);const Ze=R.isDataArrayTexture||R.isData3DTexture,In=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const cn=Gt.get(R),an=Gt.get(Q),Ln=Gt.get(cn.__renderTarget),Qr=Gt.get(an.__renderTarget);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Bi=0;Bi<Ot;Bi++)Ze&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,tt,ee+Bi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.get(Q).__webglTexture,wt,Je+Bi)),P.blitFramebuffer(Wt,re,Ft,kt,xe,Be,Ft,kt,P.DEPTH_BUFFER_BIT,P.NEAREST);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(tt!==0||R.isRenderTargetTexture||Gt.has(R)){const cn=Gt.get(R),an=Gt.get(Q);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,mr),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Nc);for(let Ln=0;Ln<Ot;Ln++)Ze?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cn.__webglTexture,tt,ee+Ln):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,tt),In?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,an.__webglTexture,wt,Je+Ln):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,an.__webglTexture,wt),tt!==0?P.blitFramebuffer(Wt,re,Ft,kt,xe,Be,Ft,kt,P.COLOR_BUFFER_BIT,P.NEAREST):In?P.copyTexSubImage3D(ze,wt,xe,Be,Je+Ln,Wt,re,Ft,kt):P.copyTexSubImage2D(ze,wt,xe,Be,Wt,re,Ft,kt);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(ze,wt,xe,Be,Je,Ft,kt,Ot,Ue,ne,Pe.data):Q.isCompressedArrayTexture?P.compressedTexSubImage3D(ze,wt,xe,Be,Je,Ft,kt,Ot,Ue,Pe.data):P.texSubImage3D(ze,wt,xe,Be,Je,Ft,kt,Ot,Ue,ne,Pe):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,wt,xe,Be,Ft,kt,Ue,ne,Pe.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,wt,xe,Be,Pe.width,Pe.height,Ue,Pe.data):P.texSubImage2D(P.TEXTURE_2D,wt,xe,Be,Ft,kt,Ue,ne,Pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_n),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ra),wt===0&&Q.generateMipmaps&&P.generateMipmap(ze),Lt.unbindTexture()},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){H=0,O=0,Y=null,Lt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),a.unpackColorSpace=Oe._getUnpackColorSpace()}}class xC extends Gx{constructor(){super();const e=new po;e.deleteAttribute("uv");const a=new Op({side:kn}),s=new Op,u=new LT(16777215,900,28,2);u.position.set(.418,16.199,.3),this.add(u);const f=new un(e,a);f.position.set(-.757,13.219,.717),f.scale.set(31.713,28.305,28.591),this.add(f);const d=new TT(e,s,6),h=new bn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),d.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),d.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),d.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),d.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),d.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),d.setMatrixAt(5,h.matrix),this.add(d);const _=new un(e,Js(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const m=new un(e,Js(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const v=new un(e,Js(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const p=new un(e,Js(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const S=new un(e,Js(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const y=new un(e,Js(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(a=>{a.isMesh&&(e.add(a.geometry),e.add(a.material))});for(const a of e)a.dispose()}}function Js(o){return new CT({color:0,emissive:16777215,emissiveIntensity:o})}function SC(o){let e;try{e=new vC({alpha:!0,antialias:!0,powerPreference:"low-power",failIfMajorPerformanceCaveat:!0})}catch{return o.dataset.renderState="fallback",{setPointer(){},setReducedMotion(){},dispose(){}}}const a=e.domElement;a.setAttribute("aria-hidden","true"),a.style.cssText="display:block;width:100%;height:100%;pointer-events:none;",o.appendChild(a),o.dataset.renderState="webgl",e.setClearColor(1184796,0),e.outputColorSpace=ci,e.toneMapping=yx,e.toneMappingExposure=1.12;const s=new Gx,u=new fi(42,1,.1,60);u.position.set(0,0,16);const f=new Pp(e),d=new xC;let h;try{h=f.fromScene(d,.04,.1,100),s.environment=h.texture}catch{}finally{d.dispose(),f.dispose()}s.add(new UT(14739967,1184540,2.2));const _=new Wv(16777215,3.1);_.position.set(-5,7,8),s.add(_);const m=new Wv(6716415,1.8);m.position.set(7,0,5),s.add(m);const v=new Pd({color:2176767,metalness:.24,roughness:.18,clearcoat:.95,clearcoatRoughness:.12,envMapIntensity:1.2}),p=new Pd({color:15922170,metalness:.06,roughness:.21,clearcoat:.6,envMapIntensity:.9}),S=new Pd({color:2369072,metalness:.35,roughness:.3,clearcoat:.5,envMapIntensity:.65}),y=new vl(3.8,.64,24,112),b=new vl(2.12,.49,24,80),C=new vl(3.9,.62,24,96),M=new eo,x=new un(y,v);x.rotation.set(.28,-.35,-.42),M.add(x);const B=new un(b,p);B.position.set(.35,-.6,1.5),B.rotation.set(.35,-.55,-.75),M.add(B),s.add(M);const z=new eo,U=new un(C,S);U.scale.set(.68,1.2,1),U.rotation.set(-.15,.45,-.22),z.add(U),s.add(z);let X=0,H=!1,O=!1,Y=!0,D=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=0,V=0,st=0,ht=0;const xt=performance.now(),dt=()=>!H&&!O&&Y&&!document.hidden;function q(ot=performance.now()){if(X=0,!dt())return;const W=D?0:(ot-xt)/1e3;st+=((D?0:w)-st)*.045,ht+=((D?0:V)-ht)*.045,M.rotation.y=Math.sin(W*.12)*.045+st*.055,M.rotation.z=Math.sin(W*.1)*.025-ht*.025,z.rotation.y=Math.sin(W*.08+1)*.035-st*.035,z.rotation.z=Math.sin(W*.1)*.018,u.position.x=st*.16,u.position.y=-ht*.11,u.lookAt(0,0,0),e.render(s,u),D||(X=requestAnimationFrame(q))}function rt(){dt()&&!X&&(X=requestAnimationFrame(q))}function j(){cancelAnimationFrame(X),X=0}function yt(){const{width:ot,height:W}=o.getBoundingClientRect();if(!ot||!W||H)return;const et=ot<700;e.setPixelRatio(Math.min(window.devicePixelRatio||1,et?1.2:1.5)),e.setSize(ot,W,!1),u.aspect=ot/W,u.updateProjectionMatrix();const At=Math.tan(hd.degToRad(u.fov/2))*u.position.z,Nt=At*u.aspect;M.position.set(-Nt*(et?.95:.78),-At*1.05,-.4),M.scale.setScalar(et?.72:1.12),z.position.set(Nt*.68,At*.61,-3.3),z.scale.setScalar(et?.78:1.1),rt()}const Et=new ResizeObserver(yt);Et.observe(o);const Vt=new IntersectionObserver(([ot])=>{Y=(ot==null?void 0:ot.isIntersecting)??!0,Y?rt():j()},{rootMargin:"100px"});Vt.observe(o);function ie(){document.hidden?j():rt()}function pe(ot){ot.preventDefault(),O=!0,o.dataset.renderState="fallback",j()}function I(){O=!1,o.dataset.renderState="webgl",rt()}return document.addEventListener("visibilitychange",ie),a.addEventListener("webglcontextlost",pe),a.addEventListener("webglcontextrestored",I),yt(),{setPointer(ot,W){w=hd.clamp(ot,-1,1),V=hd.clamp(W,-1,1),D||rt()},setReducedMotion(ot){D=ot,st=0,ht=0,j(),rt()},dispose(){H=!0,j(),Et.disconnect(),Vt.disconnect(),document.removeEventListener("visibilitychange",ie),a.removeEventListener("webglcontextlost",pe),a.removeEventListener("webglcontextrestored",I);for(const ot of[y,b,C])ot.dispose();for(const ot of[v,p,S])ot.dispose();h==null||h.dispose(),e.dispose(),a.remove()}}}const kd="./memory.webp",yC="https://github.com/jash65571/time-heist",Qx="time-heist-v1",li=(o,e,a)=>Math.min(a,Math.max(e,o)),Li=o=>`${String(Math.floor(o/60)).padStart(2,"0")}:${String(Math.floor(o%60)).padStart(2,"0")}`,Yd=o=>o.length<=80?o:[...o.slice(0,4),...o.slice(-76)];function MC(){try{const o=JSON.parse(localStorage.getItem(Qx)||"null");if(!o||!Array.isArray(o.entries)||!o.entries.length||o.entries.length>80)return null;const e=u=>u&&["light","dark"].includes(u.theme)&&typeof u.headline=="string"&&u.headline.length<=120&&Array.isArray(u.objects)&&u.objects.length<=128&&u.objects.every(f=>f&&typeof f.id=="string"&&f.id.length<=160&&["x","y","width","rotation","asset"].every(d=>Number.isFinite(f[d]))&&f.x>=0&&f.x<=1&&f.y>=0&&f.y<=1&&f.width>0&&f.width<=1&&Number.isInteger(f.asset)&&f.asset>=0&&f.asset<=2&&typeof f.visible=="boolean"&&(f.recoveredFrom===void 0||Number.isFinite(f.recoveredFrom)&&f.recoveredFrom>=0));if(!e(o.state)||!Number.isFinite(o.time)||o.time<0||!o.entries.every(u=>u&&typeof u.id=="string"&&typeof u.label=="string"&&u.label.length<=200&&Number.isFinite(u.time)&&u.time>=0&&e(u.state)))return null;const a=[...o.entries].sort((u,f)=>u.time-f.time);if(new Set(a.map(u=>u.id)).size!==a.length)return null;const s=on(o.state);return s.objects=s.objects.filter(u=>u.visible),{state:s,entries:a,time:Math.max(o.time,a[a.length-1].time)}}catch{return null}}function ui({name:o}){const e={sound:J.jsx("path",{d:"M2 12c3-11 5-11 8 0s5 11 8 0 4-8 4-8"}),mute:J.jsx(J.Fragment,{children:J.jsx("path",{d:"M3 12h18M5 5l14 14"})}),lens:J.jsxs(J.Fragment,{children:[J.jsx("circle",{cx:"12",cy:"12",r:"8"}),J.jsx("path",{d:"M12 1v4m0 14v4M1 12h4m14 0h4"})]}),move:J.jsx(J.Fragment,{children:J.jsx("path",{d:"M12 2v20M2 12h20m-14-6 4-4 4 4m-10 2-4 4 4 4m2 2 4 4 4-4m2-10 4 4-4 4"})}),close:J.jsx("path",{d:"m6 6 12 12M6 18 18 6"}),play:J.jsx("path",{d:"m9 5 11 7-11 7Z"}),sun:J.jsxs(J.Fragment,{children:[J.jsx("circle",{cx:"12",cy:"12",r:"4"}),J.jsx("path",{d:"M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"})]}),plus:J.jsx("path",{d:"M12 4v16M4 12h16"}),trash:J.jsx(J.Fragment,{children:J.jsx("path",{d:"M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"})}),reset:J.jsx(J.Fragment,{children:J.jsx("path",{d:"M4 10a8 8 0 1 1 1 8M4 4v6h6"})}),github:J.jsx("path",{d:"M9 20c-5 1-5-2-7-2m14 4v-4a3 3 0 0 0-1-2c4-.5 6-2 6-5a4 4 0 0 0-1-3c.3-1 .3-2 0-3-2 0-3 1-3 1a12 12 0 0 0-7 0S8 5 6 5c-.4 1-.4 2 0 3a4 4 0 0 0-1 3c0 3 2 4.5 6 5a3 3 0 0 0-1 2v4"})};return J.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e[o]||e.lens})}function EC(){var It;const[o]=ue.useState(MC),[e,a]=ue.useState(()=>(o==null?void 0:o.state)||on(to)),[s,u]=ue.useState(()=>(o==null?void 0:o.entries)||cd.map(F=>({...F,state:on(F.state)}))),[f,d]=ue.useState((o==null?void 0:o.time)??28),[h,_]=ue.useState(()=>{var F;return Math.max(12,((F=o==null?void 0:o.entries[0])==null?void 0:F.time)??0)}),[m,v]=ue.useState(null),[p,S]=ue.useState({x:.59,y:.49,radius:200}),[y,b]=ue.useState({width:1200,height:650}),[C,M]=ue.useState("lens"),[x,B]=ue.useState(null),[z,U]=ue.useState(null),[X,H]=ue.useState(""),[O,Y]=ue.useState(!1),[D,w]=ue.useState(()=>!matchMedia("(prefers-reduced-motion: reduce)").matches),[V,st]=ue.useState(!1),[ht,xt]=ue.useState("about"),[dt,q]=ue.useState(!1),rt=ue.useRef(null),j=ue.useRef(null),yt=ue.useRef(null),Et=ue.useRef(null),Vt=ue.useRef(null),ie=ue.useRef(null),pe=ue.useRef(null),I=ue.useRef(null),ot=ue.useRef(null),W=ue.useRef(f),et=ue.useRef(e),At=ue.useRef(null),Nt=ue.useRef([]),Tt=ue.useCallback(()=>{Nt.current.forEach(clearTimeout),Nt.current=[],st(!1),B(null),ot.current=null,I.current=null},[]),Rt=y.width<640,Bt=((It=s[0])==null?void 0:It.time)??0,P=ue.useMemo(()=>{const F=m?s.find(A=>A.id===m):void 0;return F?on(F.state):qM(s,h)},[s,h,m]),De=P.objects.find(F=>F.visible),se=e.objects.filter(F=>F.visible),Jt=e.objects.find(F=>F.id===z&&F.visible),Lt=li(p.radius,65,Math.min(y.width*.46,y.height*.47)),ae=h<f-.5,Gt=(x==null?void 0:x.source)==="past"&&Math.hypot(x.x*y.width-p.x*y.width,x.y*y.height-p.y*y.height)>Lt*.75;ue.useEffect(()=>{et.current=e},[e]),ue.useEffect(()=>{W.current=f},[f]),ue.useEffect(()=>{_(F=>li(F,Bt,f)),m&&!s.some(F=>F.id===m)&&v(null)},[Bt,f,s,m]),ue.useEffect(()=>{const F=window.setInterval(()=>{document.hidden||d(A=>A+1)},1e3);return()=>window.clearInterval(F)},[]),ue.useEffect(()=>{const F=matchMedia("(prefers-reduced-motion: reduce)"),A=()=>w(!F.matches);return F.addEventListener("change",A),()=>F.removeEventListener("change",A)},[]),ue.useEffect(()=>{if(!j.current)return;const F=SC(j.current);return yt.current=F,()=>{F.dispose(),yt.current=null}},[]),ue.useEffect(()=>{var F;(F=yt.current)==null||F.setReducedMotion(!D)},[D]),ue.useEffect(()=>{if(!rt.current)return;let F=!0;const A=new ResizeObserver(([$])=>{const{width:vt,height:Dt}=$.contentRect;b({width:vt,height:Dt}),F&&(S({x:vt<640?.53:.58,y:vt<640?.51:.47,radius:vt<640?Math.min(vt*.4,Dt*.47):Math.min(vt*.2,Dt*.35)}),F=!1)});return A.observe(rt.current),()=>A.disconnect()},[]),ue.useEffect(()=>{try{localStorage.setItem(Qx,JSON.stringify({state:e,entries:Yd(s),time:W.current}))}catch{}},[e,s]),ue.useEffect(()=>{if(!X)return;const F=window.setTimeout(()=>H(""),3400);return()=>window.clearTimeout(F)},[X]),ue.useEffect(()=>()=>{var F;Nt.current.forEach(clearTimeout),(F=At.current)==null||F.close()},[]);const oe=ue.useCallback((F=!1)=>{if(O)try{const A=At.current||(At.current=new AudioContext);A.resume();const $=A.createOscillator(),vt=A.createGain();$.type="sine",$.frequency.setValueAtTime(F?440:220,A.currentTime),$.frequency.exponentialRampToValueAtTime(F?880:150,A.currentTime+.15),vt.gain.setValueAtTime(.045,A.currentTime),vt.gain.exponentialRampToValueAtTime(.001,A.currentTime+.25),$.connect(vt),vt.connect(A.destination),$.start(),$.stop(A.currentTime+.26)}catch{}},[O]),Re=ue.useCallback((F,A)=>{Tt(),et.current=F,a(F),u($=>Yd(mv($,F,A,W.current))),oe()},[oe,Tt]);function He(F){Tt(),v(null),_(li(F,Bt,f))}function N(F){Tt(),M(F)}ue.useEffect(()=>{const F=rt.current;if(!F)return;const A=$=>{const vt=F.getBoundingClientRect();!(Math.hypot($.clientX-vt.left-p.x*y.width,$.clientY-vt.top-p.y*y.height)<=Lt)||$.deltaY===0||$.ctrlKey||$.metaKey||($.preventDefault(),Tt(),v(null),_(Mt=>li(Mt+($.deltaY>0?-1:1),Bt,f)))};return F.addEventListener("wheel",A,{passive:!1}),()=>F.removeEventListener("wheel",A)},[p.x,p.y,y.width,y.height,Lt,Bt,f,Tt]);function T(F=De,A){if(Tt(),!F||!ae){H("Rewind to a moment with a photo first.");return}if(et.current.objects.filter(vt=>vt.visible).length>=12){H("Make some room. Remove a photo before bringing another back.");return}const $=gv(et.current,F,A||{x:Rt?.58:.75,y:Rt?.71:.67},h);$.objects[$.objects.length-1].rotation=4,Re($,`Recovered a photo from ${Li(h)}`),U($.objects[$.objects.length-1].id),H(`A memory from ${Li(h)}. Yours again.`),oe(!0)}const it=F=>{const A=rt.current.getBoundingClientRect();return{x:li((F.clientX-A.left)/A.width,.03,.97),y:li((F.clientY-A.top)/A.height,.04,.96)}};function mt(F,A,$){var Mt;if(F.button!==0)return;F.preventDefault(),F.stopPropagation(),Tt(),$==="now"&&U(A.id);const vt=it(F),Dt={object:A,...vt,source:$,startX:vt.x,startY:vt.y};B(Dt),ot.current=Dt,(Mt=rt.current)==null||Mt.setPointerCapture(F.pointerId)}function bt(F){if(F.button!==0||F.target.closest("button,input,a,[data-memory],.lens-handle,.lens-time"))return;V&&Tt(),U(null);const A=it(F);I.current={...A,moving:!1,lens:{...p},draw:C==="lens",minX:A.x,maxX:A.x,minY:A.y,maxY:A.y},C==="lens"&&S($=>({...$,...A})),F.currentTarget.setPointerCapture(F.pointerId)}function pt(F){var vt;const A=it(F);if((vt=yt.current)==null||vt.setPointer((A.x-.5)*2,(A.y-.5)*2),ot.current){const Dt={...ot.current,...A};B(Dt),ot.current=Dt;return}const $=I.current;if($)if($.moving=!0,$.draw){$.minX=Math.min($.minX,A.x),$.maxX=Math.max($.maxX,A.x),$.minY=Math.min($.minY,A.y),$.maxY=Math.max($.maxY,A.y);const Dt=Math.max(($.maxX-$.minX)*y.width,($.maxY-$.minY)*y.height)/2;S({x:($.minX+$.maxX)/2,y:($.minY+$.maxY)/2,radius:li(Dt,65,Math.min(y.width,y.height)*.45)})}else S({...$.lens,x:li($.lens.x+A.x-$.x,.08,.92),y:li($.lens.y+A.y-$.y,.1,.9)})}function qt(F){const A=ot.current;if(A){const $=Math.hypot((A.x-A.startX)*y.width,(A.y-A.startY)*y.height)>5;if(A.source==="past"&&$)Math.hypot((A.x-p.x)*y.width,(A.y-p.y)*y.height)>Lt*.75?T(A.object,{x:A.x,y:A.y}):H("Cross the blue edge to bring it into now.");else if(A.source==="now"&&$){const vt=on(et.current),Dt=vt.objects.find(Mt=>Mt.id===A.object.id);Dt.x=A.x,Dt.y=A.y,Re(vt,"Moved a memory")}else A.source==="past"&&H("Drag this photo beyond the circle, or choose Bring to now.");B(null),ot.current=null}I.current=null,F.currentTarget.hasPointerCapture(F.pointerId)&&F.currentTarget.releasePointerCapture(F.pointerId)}function Ut(){if(!z)return;const F=on(et.current);F.objects.some(A=>A.id===z)&&(F.objects=F.objects.filter(A=>A.id!==z&&A.visible),Re(F,"Removed a photo"),U(null),H("Gone from now. Still there in the past."))}function jt(){Tt(),a(on(to)),et.current=on(to),u(cd.map(F=>({...F,state:on(F.state)}))),d(28),W.current=28,_(12),v(null),U(null),S({x:Rt?.53:.58,y:Rt?.51:.48,radius:Rt?Math.min(y.width*.4,y.height*.47):Math.min(y.width*.2,y.height*.35)}),H("A fresh timeline. The past is yours to explore.")}function Qt(){jt(),st(!0),H("Watch the blue edge.");const F=cd[1].state.objects[0],A=[window.setTimeout(()=>{_(0),H("The lens reveals the same page, earlier.")},800),window.setTimeout(()=>{_(12),H("The photo existed at 00:12.")},2200),window.setTimeout(()=>{let vt=0;const Dt=()=>{if(vt>=55){B(null);const Xt=gv(on(to),F,{x:Rt?.6:.76,y:.67},12);Xt.objects[Xt.objects.length-1].rotation=4,a(Xt),et.current=Xt,u(ce=>Yd(mv(ce,Xt,"Recovered a photo from 00:12",W.current))),Nt.current=[],U(Xt.objects[Xt.objects.length-1].id),H("The past just became part of now. Your turn."),st(!1),oe(!0);return}const Mt=vt++/55,St=Mt*Mt*(3-2*Mt);B({object:F,source:"past",x:F.x+((Rt?.6:.76)-F.x)*St,y:F.y+(.67-F.y)*St,startX:F.x,startY:F.y}),Nt.current.push(window.setTimeout(Dt,D?22:1))};Dt()},3400)];Nt.current=A}ue.useEffect(()=>{const F=A=>{var vt;A.target.closest("input,textarea,dialog")||A.metaKey||A.ctrlKey||A.altKey||(A.key==="Escape"&&(Tt(),U(null)),A.key.toLowerCase()==="l"&&N("lens"),A.key.toLowerCase()==="v"&&N("move"),A.key==="?"&&!((vt=Et.current)!=null&&vt.open)&&$t(),(A.key==="Delete"||A.key==="Backspace")&&z&&(A.preventDefault(),Ut()))};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)});function Ct(F,A=!1){const $=Rt?Math.max(.68,F.width):F.width;return{left:`${F.x*100}%`,top:`${F.y*100}%`,width:`${$*100}%`,transform:`translate(-50%,-50%) rotate(${A?3:F.rotation}deg)`}}function zt(F,A=!1){return J.jsxs("div",{"data-memory":F.id,className:`memory ${A?"past-memory":""} ${z===F.id?"selected":""} ${(x==null?void 0:x.source)==="now"&&x.object.id===F.id?"being-dragged":""}`,style:Ct(F),children:[J.jsx("button",{className:"photo-surface",tabIndex:A?-1:0,"aria-label":A?"Drag this past photo into the present":"Select or drag recovered photo",onPointerDown:$=>mt($,F,A?"past":"now"),onDoubleClick:()=>{var $;A||(Tt(),q(!0),($=Vt.current)==null||$.showModal())},onKeyDown:$=>{if(A&&($.key==="Enter"||$.key===" ")&&($.preventDefault(),T(F)),!A&&$.key.startsWith("Arrow")){$.preventDefault();const vt=on(et.current),Dt=vt.objects.find(Mt=>Mt.id===F.id);Dt.x=li(Dt.x+($.key==="ArrowRight"?.02:$.key==="ArrowLeft"?-.02:0),.05,.95),Dt.y=li(Dt.y+($.key==="ArrowDown"?.02:$.key==="ArrowUp"?-.02:0),.06,.94),Re(vt,"Moved a memory")}},onFocus:()=>{A||U(F.id)},children:J.jsx("img",{src:kd,alt:"A cobalt loop above a concrete stair, a moment worth keeping",draggable:"false"})}),J.jsx("span",{className:"memory-caption",children:A?`STILL HERE / ${Li(h)}`:`Recovered from ${Li(F.recoveredFrom??f)}`})]},F.id)}function $t(F="about"){var A;Tt(),xt(F),(A=Et.current)==null||A.showModal()}const Kt={left:`${p.x*100}%`,top:`${p.y*100}%`,width:Lt*2,height:Lt*2};return J.jsxs("main",{className:"app-shell",children:[J.jsx("a",{className:"skip-link",href:"#experiment",children:"Skip to experiment"}),J.jsxs("header",{className:"masthead",children:[J.jsxs("a",{className:"wordmark",href:"./","aria-label":"TIME HEIST home",children:["TIME HEIST",J.jsx("span",{className:"wordmark-dot"})]}),J.jsxs("h1",{children:["Reach into the past.",J.jsx("br",{}),"Bring something back."]}),J.jsxs("nav",{className:"header-actions","aria-label":"Main controls",children:[J.jsx("button",{className:`sound-button ${O?"active":""}`,onClick:()=>{Y(!O),O||H("Sound on. A little signal when time shifts.")},"aria-label":O?"Mute sound":"Enable sound","aria-pressed":O,children:J.jsx(ui,{name:O?"sound":"mute"})}),J.jsxs("button",{className:"pill dark reset-button",onClick:jt,children:["RESET",J.jsx("span",{className:"button-dot"})]}),J.jsxs("button",{className:"pill",onClick:()=>$t(),children:["ABOUT",J.jsx("span",{className:"menu-dots",children:"··"})]})]})]}),J.jsxs("section",{className:"experiment-wrap","aria-label":"Interactive time canvas",children:[J.jsxs("div",{ref:rt,id:"experiment",className:`stage ${e.theme} tool-${C} ${V?"demo-running":""}`,onPointerDown:bt,onPointerMove:pt,onPointerUp:qt,onPointerCancel:()=>{B(null),ot.current=null,I.current=null},children:[J.jsx("div",{ref:j,className:"scene-host","aria-hidden":"true"}),J.jsxs("div",{className:"scene-fallback","aria-hidden":"true",children:[J.jsx("i",{}),J.jsx("i",{}),J.jsx("i",{})]}),J.jsxs("div",{className:"canvas-copy",children:[J.jsx("span",{className:"eyebrow",children:"A SMALL EXPERIMENT IN TIME"}),J.jsx("h2",{children:e.headline}),J.jsxs("span",{className:"live-time",children:[J.jsx("span",{}),"LIVE / ",Li(f)]})]}),J.jsxs("div",{className:"stage-tools","aria-label":"Canvas tools",children:[J.jsxs("button",{"aria-label":"Draw time lens (L)","aria-pressed":C==="lens",className:C==="lens"?"chosen":"",onClick:()=>N("lens"),children:[J.jsx(ui,{name:"lens"}),J.jsx("span",{children:"Lens"})]}),J.jsxs("button",{"aria-label":"Move time lens (V)","aria-pressed":C==="move",className:C==="move"?"chosen":"",onClick:()=>N("move"),children:[J.jsx(ui,{name:"move"}),J.jsx("span",{children:"Move"})]})]}),J.jsxs("div",{className:`past-layer ${P.theme}`,style:{clipPath:`circle(${Lt}px at ${p.x*y.width}px ${p.y*y.height}px)`},"aria-label":`Page at ${Li(h)}`,children:[J.jsx("div",{className:"past-scene","aria-hidden":"true"}),J.jsxs("div",{className:"canvas-copy",children:[J.jsx("span",{className:"eyebrow",children:"A SMALL EXPERIMENT IN TIME"}),J.jsx("h2",{children:P.headline}),J.jsxs("span",{className:"live-time",children:["THEN / ",Li(h)]})]}),P.objects.filter(F=>F.visible).map(F=>zt(F,!0)),!De&&J.jsxs("span",{className:"empty-past",children:["Nothing here at ",Li(h),".",J.jsx("br",{}),"Rewind a little further."]})]}),J.jsxs("div",{className:`lens-ring ${Gt?"crossing":""}`,style:Kt,"aria-hidden":"true",children:[J.jsx("span",{className:"rim-tick top"}),J.jsx("span",{className:"rim-tick bottom"})]}),J.jsxs("button",{className:"lens-time",style:{left:`${p.x*100}%`,top:`calc(${p.y*100}% - ${Lt}px - 16px)`},onClick:()=>He(h===Bt?Math.max(12,Bt):Bt),"aria-label":"Switch between the first two past moments",children:[Math.max(0,Math.round(f-h))," seconds ago",J.jsx("span",{})]}),J.jsx("button",{className:"lens-handle",style:{left:`calc(${p.x*100}% + ${Lt*.707}px)`,top:`calc(${p.y*100}% - ${Lt*.707}px)`},"aria-label":"Move the time lens. Use arrow keys to adjust.",onPointerDown:F=>{var $;F.preventDefault(),F.stopPropagation(),Tt();const A=it(F);I.current={...A,moving:!1,lens:{...p},draw:!1,minX:A.x,maxX:A.x,minY:A.y,maxY:A.y},($=rt.current)==null||$.setPointerCapture(F.pointerId)},onKeyDown:F=>{F.key.startsWith("Arrow")&&(F.preventDefault(),Tt(),S(A=>({...A,x:li(A.x+(F.key==="ArrowLeft"?-.025:F.key==="ArrowRight"?.025:0),.1,.9),y:li(A.y+(F.key==="ArrowUp"?-.025:F.key==="ArrowDown"?.025:0),.15,.85)})))},children:J.jsx(ui,{name:"move"})}),se.map(F=>zt(F)),x&&J.jsxs("div",{className:`memory dragged-memory ${Gt?"crossing":""}`,style:Ct({...x.object,x:x.x,y:x.y},!0),"aria-hidden":"true",children:[J.jsx("img",{src:kd,alt:"",draggable:"false"}),J.jsx("span",{className:"memory-caption",children:x.source==="past"?Gt?"Release. Make it yours.":"Cross the blue edge.":"A little closer to now."})]}),J.jsxs("div",{className:"stage-bottom",children:[J.jsx("span",{children:V?"A MOMENT, REPLAYING":se.length?"THE PAST IS PART OF NOW":"SOME THINGS ARE NEVER REALLY GONE"}),J.jsxs("button",{onClick:V?Tt:Qt,children:[J.jsx(ui,{name:V?"close":"play"}),V?"Stop demo":"Show me"]})]})]}),J.jsxs("div",{className:"canvas-controls",children:[J.jsxs("div",{className:"time-controls",children:[J.jsxs("span",{className:"control-label",children:["THEN ",J.jsx("b",{children:Li(h)})]}),J.jsx("input",{type:"range","aria-label":"Time inside the lens",min:Bt,max:f,step:"1",value:h,style:{"--progress":`${(h-Bt)/Math.max(1,f-Bt)*100}%`},onChange:F=>He(Number(F.target.value))}),J.jsxs("span",{className:"control-label now-label",children:["NOW ",J.jsx("b",{children:Li(f)})]})]}),J.jsxs("button",{className:"recover-button",onClick:()=>T(),disabled:!De||!ae||V,children:["Bring to now",J.jsx(ui,{name:"plus"})]})]})]}),J.jsxs("footer",{className:"footer",children:[J.jsx("span",{className:"registration","aria-hidden":"true",children:"+"}),J.jsx("button",{className:"footer-instruction",onClick:()=>$t(),children:"Draw a lens. Drag the past into now."}),J.jsx("span",{className:"registration middle","aria-hidden":"true",children:"+"}),J.jsxs("div",{className:"footer-links",children:[J.jsxs("button",{onClick:()=>$t("history"),children:["Your timeline ",J.jsx("span",{className:"count",children:s.length})]}),J.jsxs("a",{href:yC,target:"_blank",rel:"noreferrer",children:["GitHub",J.jsx(ui,{name:"github"})]})]}),J.jsx("span",{className:"registration","aria-hidden":"true",children:"+"})]}),J.jsxs("div",{className:"edit-toolbar","aria-label":"Edit the present",children:[J.jsx("span",{children:"MAKE A CHANGE"}),J.jsx("button",{onClick:()=>{var F;Tt(),(F=ie.current)==null||F.showModal(),window.setTimeout(()=>{var A;return(A=pe.current)==null?void 0:A.select()},0)},children:"Edit words"}),J.jsxs("button",{onClick:()=>Re({...on(e),theme:e.theme==="dark"?"light":"dark"},"Changed the light"),children:[J.jsx(ui,{name:"sun"}),"Change light"]}),J.jsxs("button",{disabled:!Jt,onClick:Ut,children:[J.jsx(ui,{name:"trash"}),"Remove photo"]})]}),J.jsx("div",{className:"toast",role:"status","aria-live":"polite","data-visible":!!X,children:X}),J.jsx("dialog",{ref:Et,className:"about-dialog",onClick:F=>{F.target===F.currentTarget&&F.currentTarget.close()},children:J.jsxs("div",{className:"dialog-inner",children:[J.jsxs("div",{className:"dialog-top",children:[J.jsx("span",{children:"TIME HEIST"}),J.jsx("button",{className:"icon-button","aria-label":"Close about",onClick:()=>{var F;return(F=Et.current)==null?void 0:F.close()},children:J.jsx(ui,{name:"close"})})]}),J.jsxs("div",{className:"dialog-tabs",children:[J.jsx("button",{className:ht==="about"?"active":"",onClick:()=>xt("about"),children:"The experiment"}),J.jsx("button",{className:ht==="history"?"active":"",onClick:()=>xt("history"),children:"Your timeline"})]}),ht==="about"?J.jsxs(J.Fragment,{children:[J.jsxs("h2",{children:["The past is",J.jsx("br",{}),"still touchable."]}),J.jsx("p",{children:"Every change leaves a trace. The circle is a window into an earlier version of this very page."}),J.jsxs("ol",{className:"instructions",children:[J.jsxs("li",{children:[J.jsx("strong",{children:"Find a moment."}),J.jsx("span",{children:"Move the time slider, or scroll inside the circle."})]}),J.jsxs("li",{children:[J.jsx("strong",{children:"Reach through."}),J.jsx("span",{children:"Drag a photo across the blue edge. On your phone, tap Bring to now."})]}),J.jsxs("li",{children:[J.jsx("strong",{children:"Change the present."}),J.jsx("span",{children:"Move or remove the photo. Change the words or the light. Then find those changes in the past."})]})]}),J.jsxs("div",{className:"preferences",children:[J.jsxs("label",{children:[J.jsx("span",{children:"Gentle motion"}),J.jsx("input",{type:"checkbox",checked:D,onChange:F=>{Tt(),w(F.target.checked)}})]}),J.jsx("span",{children:"Keyboard: L for lens, V to move, arrow keys on a photo or lens handle, Delete to remove, ? for help."})]}),J.jsxs("p",{className:"small-print",children:["Made by"," ",J.jsx("a",{href:"https://github.com/jash65571",target:"_blank",rel:"noreferrer",children:"Jash Patel"}),". Visual direction inspired by"," ",J.jsx("a",{href:"https://lusion.co",target:"_blank",rel:"noreferrer",children:"Lusion"}),". Original code and artwork. Your timeline stays in this browser."]}),J.jsxs("button",{className:"dialog-primary",onClick:()=>{var F;(F=Et.current)==null||F.close(),Qt()},children:["Watch the experiment",J.jsx(ui,{name:"play"})]})]}):J.jsxs(J.Fragment,{children:[J.jsxs("h2",{children:["Every change.",J.jsx("br",{}),"Still here."]}),J.jsx("p",{children:"Choose a moment to see it inside the lens. Your present keeps moving."}),J.jsx("div",{className:"history-list",children:[...s].reverse().map(F=>J.jsxs("button",{onClick:()=>{var A;Tt(),v(F.id),_(F.time),(A=Et.current)==null||A.close()},children:[J.jsx("span",{children:Li(F.time)}),J.jsx("strong",{children:F.label}),J.jsx("span",{className:"history-dot"})]},F.id))}),J.jsx("button",{className:"text-button",onClick:()=>{var F;(F=Et.current)==null||F.close(),jt()},children:"Start a fresh timeline"})]})]})}),J.jsx("dialog",{ref:ie,className:"edit-dialog",children:J.jsxs("form",{method:"dialog",onSubmit:F=>{var $,vt;F.preventDefault();const A=($=pe.current)==null?void 0:$.value.trim();A&&Re({...on(et.current),headline:A.slice(0,100)},"Changed the words"),(vt=ie.current)==null||vt.close()},children:[J.jsxs("div",{className:"dialog-top",children:[J.jsx("span",{children:"CHANGE THE PRESENT"}),J.jsx("button",{type:"button",className:"icon-button","aria-label":"Close text editor",onClick:()=>{var F;return(F=ie.current)==null?void 0:F.close()},children:J.jsx(ui,{name:"close"})})]}),J.jsx("label",{htmlFor:"headline",children:"Leave a few words behind."}),J.jsx("input",{ref:pe,id:"headline",defaultValue:e.headline,maxLength:100,required:!0,autoComplete:"off"},e.headline),J.jsx("p",{children:"They will be waiting when you look back."}),J.jsx("button",{className:"dialog-primary",type:"submit",children:"Keep these words"})]})}),J.jsx("dialog",{ref:Vt,className:"image-dialog",onClose:()=>q(!1),onClick:F=>{F.target===F.currentTarget&&F.currentTarget.close()},children:dt&&J.jsxs(J.Fragment,{children:[J.jsx("button",{className:"icon-button","aria-label":"Close photo",onClick:()=>{var F;return(F=Vt.current)==null?void 0:F.close()},children:J.jsx(ui,{name:"close"})}),J.jsx("img",{src:kd,alt:"Original artwork: a cobalt loop over a concrete staircase"}),J.jsx("p",{children:"A moment worth keeping. Original artwork for TIME HEIST."})]})})]})}kM.createRoot(document.getElementById("root")).render(J.jsx(IM.StrictMode,{children:J.jsx(EC,{})}));
