(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4017],{"CO+y":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("Ff2n")
var r=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var u=n("17x9")
var d=n.n(u)
var f=n("KgFQ")
var h=n("jtGx")
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,r=Object(a["a"])(e,["children"])
var i=Object(f["a"])(n,this.props)
return l.a.createElement(i,Object.assign({},Object(h["b"])(r),{"aria-hidden":"true"}),t)}}])
n.displayName="PresentationContent"
return n}(c["Component"])
p.propTypes={as:d.a.elementType,children:d.a.node}
p.defaultProps={as:"span",children:null}},"Ci/e":function(e,t,n){"use strict"
n.d(t,"a",(function(){return Z}))
var a=n("rePB")
var r=n("Ff2n")
var i=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var f=n.n(d)
var h=n("TSYQ")
var p=n.n(h)
var m=n("VTBJ")
n("DEX3")
var b=n("KgFQ")
var v=n("jtGx")
var g=n("ISHz")
var _=n("QF4Q")
var y=n("TjLr")
var E=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
e=t.call.apply(t,[this].concat(r))
e._raf=[]
e._focusRegion=null
e.getRef=function(t){e._root=t}
return e}Object(o["a"])(n,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var t=this.props,n=(t.open,t.contentElement,Object(r["a"])(t,["open","contentElement"]))
this._raf.push(Object(g["a"])((function(){setTimeout((function(){e._focusRegion=y["a"].activateRegion(e.contentElement,Object(m["a"])({},n))}),0)})))}},{key:"close",value:function(){this._focusRegion&&y["a"].blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&y["a"].focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=Object(b["a"])(n,this.props)
var t=this.props.role||(this.props.label?"dialog":void 0)
return this.props.open?u.a.createElement(e,Object.assign({},Object(v["a"])(this.props,n.propTypes),{ref:this.getRef,role:t,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(_["a"])(this.props.contentElement)
e||(e=Object(_["a"])(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&y["a"].isFocused(this.contentElement,this._focusRegion.id)}}])
n.displayName="Dialog"
return n}(l["Component"])
E.propTypes={children:f.a.node,as:f.a.elementType,display:f.a.oneOf(["auto","block","inline-block"]),label:f.a.string,open:f.a.bool,onBlur:f.a.func,onDismiss:f.a.func,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),contentElement:f.a.oneOfType([f.a.element,f.a.func]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),shouldContainFocus:f.a.oneOfType([f.a.bool,f.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,shouldCloseOnEscape:f.a.bool,shouldFocusOnOpen:f.a.bool}
E.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}}
var k=n("AdN2")
var O=n("9yTY")
var x=n("FOOe")
var D=n("J2CL")
var Q=n("oXx0")
var T=n("3Zzb")
var j=n("k72m")
var L=n("XQb/")
var C=function(e){var t=e.colors,n=e.breakpoints,a=e.shadows,r=e.stacking,i=e.borders
return{background:t.backgroundLightest,borderColor:t.borderMedium,borderWidth:i.widthSmall,borderStyle:i.style,boxShadow:a.depth3,xSmallWidth:n.xSmall,smallWidth:"20em",regularWidth:n.small,mediumWidth:n.medium,largeWidth:n.large,zIndex:r.topmost}}
var N,w,S,z,Y,J
var H={componentId:"fLzZc",template:function(e){return"\n\n.fLzZc_bGBk{background-color:".concat(e.background||"inherit",";box-sizing:border-box;max-height:100vh;max-width:100vw;overflow-x:hidden;overflow-y:auto;position:fixed;z-index:").concat(e.zIndex||"inherit","}\n\n.fLzZc_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:0}\n\n.fLzZc_fSpQ{box-shadow:").concat(e.boxShadow||"inherit","}\n\n.fLzZc_ehJX .fLzZc_caGd,.fLzZc_bQpq .fLzZc_caGd,.fLzZc_bxia .fLzZc_caGd{min-height:100vh}\n\n.fLzZc_bgun,.fLzZc_dLYh{inset-inline-end:0;inset-inline-start:0}\n\n[dir=ltr] .fLzZc_bgun,[dir=ltr] .fLzZc_dLYh{left:0;right:0}\n\n[dir=rtl] .fLzZc_bgun,[dir=rtl] .fLzZc_dLYh{left:0;right:0}\n\n.fLzZc_bQpq,.fLzZc_bxia{bottom:0;top:0}\n\n.fLzZc_bQpq.fLzZc_dfBC,.fLzZc_bxia.fLzZc_dfBC{width:").concat(e.xSmallWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_doqw,.fLzZc_bxia.fLzZc_doqw{width:").concat(e.smallWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_cXTs,.fLzZc_bxia.fLzZc_cXTs{width:").concat(e.regularWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_ycrn,.fLzZc_bxia.fLzZc_ycrn{width:").concat(e.mediumWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_cMDj,.fLzZc_bxia.fLzZc_cMDj{width:").concat(e.largeWidth||"inherit","}\n\n.fLzZc_ehJX{bottom:0;left:0;right:0;top:0}\n\n.fLzZc_bxia{inset-inline-end:auto;inset-inline-start:0}\n\n[dir=ltr] .fLzZc_bxia{left:0;right:auto}\n\n[dir=rtl] .fLzZc_bxia{left:auto;right:0}\n\n.fLzZc_bxia.fLzZc_dHtp{border-inline-end-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .fLzZc_bxia.fLzZc_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .fLzZc_bxia.fLzZc_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_bQpq{inset-inline-end:0;inset-inline-start:auto}\n\n[dir=ltr] .fLzZc_bQpq{left:auto;right:0}\n\n[dir=rtl] .fLzZc_bQpq{left:0;right:auto}\n\n.fLzZc_bQpq.fLzZc_dHtp{border-inline-start-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .fLzZc_bQpq.fLzZc_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .fLzZc_bQpq.fLzZc_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_dLYh{top:0}\n\n.fLzZc_dLYh.fLzZc_dHtp{border-bottom-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_bgun{bottom:0}\n\n.fLzZc_bgun.fLzZc_dHtp{border-top-width:").concat(e.borderWidth||"inherit","}")},root:"fLzZc_bGBk",border:"fLzZc_dHtp",shadow:"fLzZc_fSpQ","placement--center":"fLzZc_ehJX",content:"fLzZc_caGd","placement--end":"fLzZc_bQpq","placement--start":"fLzZc_bxia","placement--bottom":"fLzZc_bgun","placement--top":"fLzZc_dLYh","x-small":"fLzZc_dfBC",small:"fLzZc_doqw",regular:"fLzZc_cXTs",medium:"fLzZc_ycrn",large:"fLzZc_cMDj"}
var Z=(N=Object(Q["a"])(),w=Object(x["a"])(),S=Object(D["j"])(C,H),N(z=w(z=S(z=(J=Y=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
e=t.call.apply(t,[this].concat(r))
e.state={transitioning:false}
e.handleTransitionComplete=function(){e.setState({transitioning:false})}
e.handlePortalOpen=function(t){e.DOMNode=t
t&&e.applyTheme(t)}
return e}Object(o["a"])(n,[{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.setState({transitioning:true})}},{key:"render",value:function(){var e
var t=this.props,i=t.label,o=t.children,s=t.size,c=(t.placement,t.open),l=(t.defaultFocusElement,t.contentRef),d=t.shouldContainFocus,f=t.shouldReturnFocus,h=t.shouldCloseOnDocumentClick,m=t.onOpen,b=t.onClose,g=t.onDismiss,_=t.mountNode,y=t.insertAt,k=t.liveRegion,x=t.onEnter,D=t.onEntering,Q=t.onEntered,j=t.onExit,C=t.onExiting,N=t.onExited,w=t.onTransition,S=t.border,z=t.shadow,Y=Object(r["a"])(t,["label","children","size","placement","open","defaultFocusElement","contentRef","shouldContainFocus","shouldReturnFocus","shouldCloseOnDocumentClick","onOpen","onClose","onDismiss","mountNode","insertAt","liveRegion","onEnter","onEntering","onEntered","onExit","onExiting","onExited","onTransition","border","shadow"])
var J=c||this.state.transitioning
return u.a.createElement(T["a"],{open:J,onOpen:this.handlePortalOpen,insertAt:y,mountNode:_},J&&u.a.createElement(L["a"],{in:c,type:this.transition,onTransition:w,onEnter:x,onEntering:D,onEntered:Object(O["a"])(this.handleTransitionComplete,Q,m),onExit:j,onExiting:C,onExited:Object(O["a"])(this.handleTransitionComplete,N,b),transitionOnMount:true,transitionEnter:true,transitionExit:true},u.a.createElement("span",Object.assign({},Object(v["a"])(Y,n.propTypes),{className:p()((e={},Object(a["a"])(e,H.root,true),Object(a["a"])(e,H.border,S),Object(a["a"])(e,H.shadow,z),Object(a["a"])(e,H[s],true),Object(a["a"])(e,H["placement--".concat(this.props.placement)],true),e)),ref:l}),this.state.transitioning?o:u.a.createElement(E,{as:"div",label:i,defaultFocusElement:this.defaultFocusElement,open:true,shouldContainFocus:d,shouldReturnFocus:f,shouldCloseOnDocumentClick:h,shouldCloseOnEscape:true,liveRegion:k,onDismiss:g},u.a.createElement("div",{className:H.content},o)))))}},{key:"placement",get:function(){var e=this.props.placement
return this.rtl?Object(j["a"])(e," "):e}},{key:"direction",get:function(){switch(this.placement){case"top":return"up"
case"bottom":return"down"
case"end":return"right"
default:return"left"}}},{key:"transition",get:function(){return"slide-".concat(this.direction)}},{key:"defaultFocusElement",get:function(){var e=this
return this.props.defaultFocusElement||function(){return e._closeButton}}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}}])
n.displayName="Tray"
return n}(l["Component"]),Y.propTypes={label:f.a.string.isRequired,children:f.a.node,size:f.a.oneOf(["x-small","small","regular","medium","large"]),placement:f.a.oneOf(["top","bottom","start","end"]),open:f.a.bool,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),contentRef:f.a.func,shouldContainFocus:f.a.bool,shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,onOpen:f.a.func,onClose:f.a.func,onDismiss:f.a.func,mountNode:f.a.oneOfType([k["a"],f.a.func]),insertAt:f.a.oneOf(["bottom","top"]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),onTransition:f.a.func,onEnter:f.a.func,onEntering:f.a.func,onEntered:f.a.func,onExit:f.a.func,onExiting:f.a.func,onExited:f.a.func,border:f.a.bool,shadow:f.a.bool},Y.defaultProps={open:false,onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:false,shouldContainFocus:true,shouldReturnFocus:true,defaultFocusElement:null,size:"small",placement:"start",shadow:true,border:false,children:null,onTransition:void 0},J))||z)||z)||z)},CyAq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},M4Ft:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a="undefined"!==typeof navigator&&navigator.userAgent||""
var r=/msie|trident/i.test(a)},WSx9:function(e,t,n){"use strict"
n.r(t)
var a=n("ouhR")
var r=n.n(a)
var i=n("HGxv")
var o=n("q1tI")
var s=n.n(o)
var c=n("i8i4")
var l=n.n(c)
var u=n("RtDj")
n("17x9")
var d=n("Ci/e")
var f=n("Mmr1")
var h=n("n12J")
var p=n("uSnb")
var m=n("6SzX")
var b=n("CO+y")
var v=n("etQE")
const g=Object(i["useScope"])("UnreadCounts")
const _=12e4
function y(e){const t=e.match(/\/api\/v1\/(.*)\/unread_count/)
const n=(t?t[1]:"UNKNOWN").replace(/\//g,"_")
return`unread_count_${window.ENV.current_user_id}_${n}`}E.defaultProps={onUpdate:Function.prototype,onError:e=>{console.warn("Error fetching unread count: "+e)},srText:e=>g.t("%{count} unread.",{count:e}),pollIntervalMs:_,allowedAge:_/2,maxTries:5,useSessionStorage:true}
function E(e){const{targetEl:t,onUpdate:n,onError:a,srText:r,dataUrl:i,pollIntervalMs:l,allowedAge:d,maxTries:f,useSessionStorage:h}=e
const p=Object(o["useRef"])({msUntilFirstPoll:0,savedChecked:false})
const[g,_]=Object(o["useState"])(NaN)
let E=null
function k(){if(!t)return false
if(!window.ENV.current_user_id)return false
if(window.ENV.current_user&&window.ENV.current_user.fake_student)return false
return true}function O(e){"function"===typeof n&&n(e)}function x(){let e=null
let t=0
function n(){e&&clearTimeout(e)}async function r(){try{const e=await fetch(i,v["e"])
const n=await e.json()
const a=parseInt(n.unread_count,10)
if(h)try{const e=JSON.stringify({updatedAt:+new Date,unreadCount:a})
sessionStorage.setItem(y(i),e)}catch(e){}if(g!==a){_(a)
O(a)}t=0
E=null}catch(e){E=e}}async function o(){if(document.hidden){document.addEventListener("visibilitychange",o,{once:true})
return}await r()
t+=1
t<f&&l>0&&(e=setTimeout(o,t*l))
E&&a(`URL=${i} error text=${E.message}`)}if(k()){const t=p.current.msUntilFirstPoll
t>0?l>0&&(e=setTimeout(o,t)):o()}return n}function D(){const e=sessionStorage.getItem(y(i))
if(e&&k()){const t=JSON.parse(e)
const n=new Date-t.updatedAt
if(n<d&&g!==t.unreadCount){_(t.unreadCount)
O(t.unreadCount)
p.current.msUntilFirstPoll=d-n}}p.current.savedChecked=true}Object(o["useEffect"])(x,[])
h&&!p.current.savedChecked&&D()
if(!g)return Object(c["createPortal"])(null,t)
return Object(c["createPortal"])(s.a.createElement(s.a.Fragment,null,Object(u["a"])(m["a"],{},void 0,r(g)),Object(u["a"])(b["a"],{},void 0,g)),t)}var k=n("qqwe")
var O=n("vhl9")
var x=n("zSOE")
var D=n("vGBm")
const Q=Object(i["useScope"])("Navigation")
const T=s.a.lazy(()=>Promise.all([n.e(19),n.e(4161)]).then(n.bind(null,"u48a")))
const j=s.a.lazy(()=>Promise.all([n.e(19),n.e(4172)]).then(n.bind(null,"wwib")))
const L=s.a.lazy(()=>Promise.all([n.e(19),n.e(4171)]).then(n.bind(null,"S/PN")))
const C=s.a.lazy(()=>Promise.all([n.e(5),n.e(7),n.e(8),n.e(10),n.e(13),n.e(16),n.e(17),n.e(19),n.e(107),n.e(4173)]).then(n.bind(null,"yU3J")))
const N=s.a.lazy(()=>Promise.all([n.e(2),n.e(5),n.e(9),n.e(12),n.e(13),n.e(19),n.e(33),n.e(36),n.e(59),n.e(74),n.e(4162)]).then(n.bind(null,"bSHS")))
const w=s.a.lazy(()=>Promise.all([n.e(7),n.e(8),n.e(10),n.e(12),n.e(16),n.e(17),n.e(18),n.e(19),n.e(124),n.e(4126)]).then(n.bind(null,"D3Z6")))
const S=/^\/accounts\/[^\/]*\/(external_tools)/
const z=/^\/(courses|groups|accounts|grades|calendar|conversations|profile)|^#history/
const Y="ic-app-header__menu-list-item--active"
const J={courses:"/api/v1/users/self/favorites/courses?include[]=term&exclude[]=enrollments&sort=nickname",groups:"/api/v1/users/self/groups?include[]=can_access",accounts:"/api/v1/accounts",profile:"/api/v1/users/self/tabs",history:"/api/v1/users/self/history",help:"/help_links"}
const H={groups:e=>e.can_access&&!e.concluded}
const Z=10
let I
function R(){if(!I){I=document.createElement("div")
I.id="nav-tray-portal"
I.setAttribute("style","position: relative; z-index: 99;")
document.body.appendChild(I)}return I}function A(){}class U extends s.a.Component{constructor(...e){super(...e)
this.state={groups:[],accounts:[],courses:[],help:[],profile:[],unreadSharesCount:0,isTrayOpen:false,type:null,coursesLoading:false,coursesAreLoaded:false,observedUserId:"",accountsLoading:false,accountsAreLoaded:false,groupsLoading:false,groupsAreLoaded:false,helpLoading:false,helpAreLoaded:false,profileAreLoading:false,profileAreLoaded:false,historyLoading:false,historyAreLoaded:false,releaseNotesBadgeDisabled:!ENV.FEATURES.embedded_release_notes||ENV.SETTINGS.release_notes_badge_disabled}
this._isLoadedOrLoading=e=>this.state[e+"AreLoaded"]||this.state[e+"Loading"]
this.closeTray=()=>{this.determineActiveLink()
this.setState({isTrayOpen:false,noFocus:false},()=>{setTimeout(()=>{this.setState({type:null})},150)})}}componentDidMount(){Object.keys(J).forEach(e=>{r()(`#global_nav_${e}_link`).on("click",Object(k["a"])(this.handleMenuClick.bind(this,e)))})
this.openPublishUnsubscribe=x["a"].subscribe("navigation-tray-open",({type:e,noFocus:t})=>{this.ensureLoaded(e)
this.openTray(e,t)
this.state.isTrayOpen&&this.state.type===e&&x["a"].publish("navigation-tray-opened",e)})
this.closePublishUnsubscribe=x["a"].subscribe("navigation-tray-close",()=>{this.closeTray()})
this.overrideDismissUnsubscribe=x["a"].subscribe("navigation-tray-override-dismiss",e=>{this.setState({overrideDismiss:e})})}componentWillUnmount(){this.openPublishUnsubscribe&&this.openPublishUnsubscribe()
this.overrideDismissUnsubscribe&&this.overrideDismissUnsubscribe()
this.closePublishUnsubscribe&&this.closePublishUnsubscribe()}componentDidUpdate(e,t){if(t.activeItem!==this.state.activeItem){r()("."+Y).removeClass(Y).removeAttr("aria-current")
r()(`#global_nav_${this.state.activeItem}_link`).closest("li").addClass(Y).attr("aria-current","page")}}getResource(e,t){this.setState({[t+"Loading"]:true})
this.loadResourcePage(e,t)}ensureLoaded(e){let t=J[e]
if(!t)return
if("courses"===e&&ENV.current_user_roles.includes("observer")){let n=false
const a=Object(D["c"])(ENV.current_user_id)
if(a){t=`${t}&observed_user_id=${a}`
if(a!==this.state.observedUserId){this.setState({observedUserId:a,[e+"AreLoaded}"]:false,[e+"Loading"]:false})
n=true}}!n&&this._isLoadedOrLoading(e)||this.getResource(t,e)}else this._isLoadedOrLoading(e)||this.getResource(t,e)}loadResourcePage(e,t,n=[]){r.a.getJSON(e,(e,a,r)=>{const i=n.concat(this.filterDataForType(e,t))
if(i.length<Z){const e=Object(O["a"])(r)
if(e.next){this.loadResourcePage(e.next,t,i)
return}}this.setState({[t]:i,[t+"Loading"]:false,[t+"AreLoaded"]:true},this.props.onDataReceived)})}filterDataForType(e,t){const n=H[t]
if("function"===typeof n)return e.filter(n)
return e}determineActiveLink(){const e=window.location.pathname
const t=e.match(S)||e.match(z)
const n=t&&t[1]
n?this.setState({activeItem:n}):this.setState({activeItem:"dashboard"})}handleMenuClick(e){this.ensureLoaded(e)
this.state.isTrayOpen&&this.state.activeItem===e?this.closeTray():(this.state.isTrayOpen&&this.state.activeItem,this.openTray(e))}openTray(e,t){this.setState({type:e,noFocus:t,isTrayOpen:true,activeItem:e})}renderTrayContent(){var e
switch(this.state.type){case"courses":return Object(u["a"])(T,{courses:window.ENV.K5_USER&&null!==(e=window.ENV.current_user_roles)&&void 0!==e&&e.every(e=>"student"===e||"user"===e)?this.state.courses.filter(e=>!e.homeroom_course):this.state.courses,hasLoaded:this.state.coursesAreLoaded,closeTray:this.closeTray,k5User:window.ENV.K5_USER})
case"groups":return Object(u["a"])(j,{groups:this.state.groups,hasLoaded:this.state.groupsAreLoaded,closeTray:this.closeTray})
case"accounts":return Object(u["a"])(L,{accounts:this.state.accounts,hasLoaded:this.state.accountsAreLoaded,closeTray:this.closeTray})
case"profile":return Object(u["a"])(C,{userDisplayName:window.ENV.current_user.display_name,userPronouns:window.ENV.current_user.pronouns,userAvatarURL:window.ENV.current_user.avatar_is_fallback?null:window.ENV.current_user.avatar_image_url,loaded:this.state.profileAreLoaded,tabs:this.state.profile,counts:{unreadShares:this.state.unreadSharesCount}})
case"history":return Object(u["a"])(N,{history:this.state.history,hasLoaded:this.state.historyAreLoaded,closeTray:this.closeTray})
case"help":return Object(u["a"])(w,{trayTitle:window.ENV.help_link_name,links:this.state.help,hasLoaded:this.state.helpAreLoaded,closeTray:this.closeTray,showNotes:ENV.FEATURES.embedded_release_notes,badgeDisabled:this.state.releaseNotesBadgeDisabled,setBadgeDisabled:e=>this.setState({releaseNotesBadgeDisabled:e})})
default:return null}}getTrayLabel(){switch(this.state.type){case"courses":return Q.t("Courses tray")
case"groups":return Q.t("Groups tray")
case"accounts":return Q.t("Admin tray")
case"profile":return Q.t("Profile tray")
case"help":return Q.t("%{title} tray",{title:window.ENV.help_link_name})
case"history":return Q.t("Recent History tray")
default:return Q.t("Global navigation tray")}}onInboxUnreadUpdate(e){this.state.unreadInboxCount!==e&&this.setState({unreadInboxCount:e})
const t=document.getElementById("mobileHeaderInboxUnreadBadge")
t&&(t.style.display=e>0?"":"none")
"function"===typeof this.props.onDataReceived&&this.props.onDataReceived()}onSharesUnreadUpdate(e){this.state.unreadSharesCount!==e&&this.setState({unreadSharesCount:e})}inboxUnreadSRText(e){return Q.t({one:"One unread message.",other:"%{count} unread messages."},{count:e})}sharesUnreadSRText(e){return Q.t({one:"One unread share.",other:"%{count} unread shares."},{count:e})}releaseNotesBadgeText(e){return Q.t({one:"One unread release note.",other:"%{count} release notes."},{count:e})}render(){const e=this.props.unreadComponent
return s.a.createElement(s.a.Fragment,null,Object(u["a"])(d["a"],{label:this.getTrayLabel(),size:"small",open:this.state.isTrayOpen,onDismiss:this.state.overrideDismiss?A:this.closeTray,shouldCloseOnDocumentClick:true,shouldContainFocus:!this.state.noFocus,mountNode:R(),theme:{smallWidth:"28em"},onEntered:()=>{x["a"].publish("navigation-tray-opened",this.state.type)}},this.state.type,Object(u["a"])("div",{className:`navigation-tray-container ${this.state.type}-tray`},void 0,Object(u["a"])(f["a"],{placement:"end",onClick:this.closeTray,screenReaderLabel:Q.t("Close")}),Object(u["a"])("div",{className:"tray-with-space-for-global-nav"},void 0,Object(u["a"])(s.a.Suspense,{fallback:Object(u["a"])(h["a"],{display:"block",textAlign:"center"},void 0,Object(u["a"])(p["a"],{size:"large",margin:"large auto",renderTitle:()=>Q.t("Loading")}))},void 0,this.renderTrayContent())))),ENV.DIRECT_SHARE_ENABLED&&ENV.current_user_id&&Object(u["a"])(e,{targetEl:this.unreadSharesCountElement||(this.unreadSharesCountElement=document.querySelector("#global_nav_profile_link .menu-item__badge")),dataUrl:"/api/v1/users/self/content_shares/unread_count",onUpdate:e=>this.onSharesUnreadUpdate(e),srText:this.sharesUnreadSRText}),!ENV.current_user_disabled_inbox&&Object(u["a"])(e,{targetEl:this.unreadInboxCountElement||(this.unreadInboxCountElement=document.querySelector("#global_nav_conversations_link .menu-item__badge")),dataUrl:"/api/v1/conversations/unread_count",onUpdate:e=>this.onInboxUnreadUpdate(e),srText:this.inboxUnreadSRText,useSessionStorage:false}),!this.state.releaseNotesBadgeDisabled&&Object(u["a"])(e,{targetEl:this.unreadReleaseNotesCountElement||(this.unreadReleaseNotesCountElement=document.querySelector("#global_nav_help_link .menu-item__badge")),dataUrl:"/api/v1/release_notes/unread_count",srText:this.releaseNotesBadgeText,allowedAge:3e5,pollIntervalMs:0}))}}U.defaultProps={unreadComponent:E}
const F=Object(i["useScope"])("MobileNavigation")
const B=s.a.lazy(()=>Promise.all([n.e(7),n.e(12),n.e(17),n.e(120),n.e(4122)]).then(n.bind(null,"9otE")))
const W=s.a.lazy(()=>Promise.all([n.e(2),n.e(5),n.e(7),n.e(8),n.e(9),n.e(10),n.e(12),n.e(13),n.e(16),n.e(17),n.e(18),n.e(19),n.e(33),n.e(36),n.e(59),n.e(74),n.e(107),n.e(124),n.e(4128)]).then(n.bind(null,"xlqh")))
class P extends s.a.Component{constructor(...e){super(...e)
this.state={globalNavIsOpen:false,contextNavIsOpen:false}}componentDidMount(){r()(".mobile-header-hamburger").on("touchstart click",Object(k["a"])(()=>this.setState({globalNavIsOpen:true})))
const e=document.getElementById("mobileHeaderArrowIcon")
const t=document.getElementById("mobileContextNavContainer")
r()(".mobile-header-title.expandable, .mobile-header-arrow").on("touchstart click",Object(k["a"])(()=>{this.setState(n=>{const a=!n.contextNavIsOpen
e.className=a?"icon-x":"icon-arrow-open-down"
t.setAttribute("aria-expanded",a)
return{contextNavIsOpen:a}})}))}render(){const e=()=>this.setState({globalNavIsOpen:false})
const t=Object(u["a"])(h["a"],{display:"block",textAlign:"center"},void 0,Object(u["a"])(p["a"],{size:"large",margin:"large auto",renderTitle:()=>F.t("...Loading")}))
return s.a.createElement(s.a.Fragment,null,this.state.globalNavIsOpen&&Object(u["a"])(d["a"],{size:"large",label:F.t("Global Navigation"),open:this.state.globalNavIsOpen,onDismiss:e,shouldCloseOnDocumentClick:true},void 0,this.state.globalNavIsOpen&&Object(u["a"])(s.a.Suspense,{fallback:t},void 0,Object(u["a"])(W,{DesktopNavComponent:this.props.DesktopNavComponent,onDismiss:e}))),this.state.contextNavIsOpen&&Object(u["a"])(s.a.Suspense,{fallback:t},void 0,Object(u["a"])(B,{spinner:t})))}}var q=n("3lLS")
var M=n.n(q)
const V=Object(i["useScope"])("common")
let G=window.ENV.SETTINGS&&window.ENV.SETTINGS.collapse_global_nav
r()("body").on("click","#primaryNavToggle",(function(){let e
G=!G
if(G){r()("body").removeClass("primary-nav-expanded")
r.a.ajaxJSON("/api/v1/users/self/settings","PUT",{collapse_global_nav:true})
e=V.t("Expand global navigation")
r()(this).attr({title:e,"aria-label":e})
setTimeout(()=>{r()("body").addClass("primary-nav-transitions")},300)}else{r()("body").removeClass("primary-nav-transitions").addClass("primary-nav-expanded")
r.a.ajaxJSON("/api/v1/users/self/settings","PUT",{collapse_global_nav:false})
e=V.t("Minimize global navigation")
r()(this).attr({title:e,"aria-label":e})}}))
M()(()=>{const e=document.getElementById("global_nav_tray_container")
if(e){const t=s.a.createRef()
const n=s.a.createRef()
l.a.render(s.a.createElement(U,{ref:t,onDataReceived:()=>{var e
return null===(e=n.current)||void 0===e?void 0:e.forceUpdate()}}),e,()=>{const e=document.getElementById("mobileContextNavContainer")
e&&l.a.render(s.a.createElement(P,{ref:n,DesktopNavComponent:t.current}),e)})}})},"XQb/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return Y}))
var a=n("Ff2n")
var r=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var u=n("17x9")
var d=n.n(u)
var f=n("J2CL")
var h=n("ODXe")
var p=n("CyAq")
function m(e){if(!e||"number"===typeof e)return e
var t=Object(p["a"])(e),n=Object(h["a"])(t,2),a=n[0],r=n[1]
return"ms"===r?a:"s"===r?1e3*a:a}var b=n("oXx0")
var v=n("JX7q")
var g=n("KQm4")
var _=n("QF4Q")
var y=false
var E={toArray:function(){return[]},contains:function(){return false},add:function(){},remove:function(){}}
function k(e){var t=Object(_["a"])(e)
if(!t)return E
var n={toArray:function(){O()
return Object(g["a"])(t.classList)}};["contains","add","remove"].forEach((function(e){n[e]=function(n){O()
return t.classList[e](n)}}))
return n}function O(){if(!y){if(!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){var e=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"classList")
Object.defineProperty(SVGElement.prototype,"classList",e)}y=true}}var x=n("II2N")
var D=n("sQ3t")
var Q={EXITED:-2,EXITING:-1,ENTERING:1,ENTERED:2}
var T=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._timeouts=[]
e.state={transitioning:false}
e.startTransition=function(t,n){var a=e.props,r=a.transitionEnter,i=a.transitionExit
t?e.enter(r&&n?Q.EXITED:null):e.exit(i&&n?Q.ENTERED:null)}
e.transition=function(t,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(e._unmounted)return
var i=k(Object(v["a"])(e))
var o=e.getTransitionClassName(t)
var s=e.getTransitionClassName(n)
var c=e.props.transitionClassName
n&&r&&e.transitionEnabled(t)?i.add(c):i.remove(c)
s&&i.remove(s)
o&&i.add(o)
t&&n&&e.props.onTransition(t,n)
e._timeouts.push(setTimeout((function(){if(e._unmounted)return
"function"===typeof a&&a()}),r))}
e.enter=function(t){if(e.state.transitioning||e._unmounted)return
var n=Object(v["a"])(e),a=n.props
a.onEnter()
a.transitionEnter?e.setState({transitioning:true},(function(){var n=function(){a.onEntering()
e.transition(Q.ENTERED,Q.ENTERING,(function(){e.setState({transitioning:false},(function(){a.onEntered()}))}))}
t?e.transition(t,null,(function(){e.transition(Q.ENTERING,t,n,a.enterDelay)})):n()})):e.setState({transitioning:false},(function(){e.transition(Q.ENTERED,Q.EXITED)
a.onEntered()}))}
e.exit=function(t){if(e.state.transitioning)return
var n=Object(v["a"])(e),a=n.props
a.onExit()
a.transitionExit?e.setState({transitioning:true},(function(){var n=function(){a.onExiting()
e.transition(Q.EXITED,Q.EXITING,(function(){e.setState({transitioning:false},(function(){a.onExited()}))}))}
t?e.transition(t,null,(function(){e.transition(Q.EXITING,t,n,a.exitDelay)})):n()})):e.setState({transitioning:false},(function(){e.transition(Q.EXITED,Q.ENTERED)
a.onExited()}))}
return e}Object(i["a"])(n,[{key:"componentDidMount",value:function(){this.startTransition(this.props.in,this.props.transitionOnMount)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){if(this.props.in!==e.in&&t.transitioning)return true
return null}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.clearTransition(e.transitionClassName)
this.props.transitionClassName!==e.transitionClassName&&this.clearTransition(e.transitionClassName)
e.in!==this.props.in&&this.startTransition(this.props.in,true)}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach((function(e){clearTimeout(e)}))
this._unmounted=true}},{key:"clearTransition",value:function(e){var t=this
if(this._unmounted)return
this.setState({transitioning:false},(function(){if(t._unmounted)return
var n=k(t)
Object.keys(Q).forEach((function(e){n.remove(t.getTransitionClassName(e))}))
n.remove(e)}))}},{key:"transitionEnabled",value:function(e){var t=this.props
switch(e){case Q.EXITED:case Q.EXITING:return t.transitionExit
case Q.ENTERED:case Q.ENTERING:return t.transitionEnter
default:return false}}},{key:"getTransitionClassName",value:function(e){var t=this.props
switch(e){case Q.EXITED:return t.exitedClassName
case Q.ENTERING:return t.enteringClassName
case Q.ENTERED:return t.enteredClassName
case Q.EXITING:return t.exitingClassName
default:return null}}},{key:"renderChildren",value:function(){return Object(x["a"])(Object(D["a"])(this.props.children),{"aria-hidden":!this.props.in||null})}},{key:"render",value:function(){return this.props.in||!this.props.unmountOnExit||this.state.transitioning?this.renderChildren():null}}])
n.displayName="BaseTransition"
return n}(l.a.Component)
T.propTypes={in:d.a.bool,unmountOnExit:d.a.bool,transitionOnMount:d.a.bool,transitionEnter:d.a.bool,transitionExit:d.a.bool,enterDelay:d.a.number,exitDelay:d.a.number,transitionClassName:d.a.string,exitedClassName:d.a.string,exitingClassName:d.a.string,enteredClassName:d.a.string,enteringClassName:d.a.string,onTransition:d.a.func,onEnter:d.a.func,onEntering:d.a.func,onEntered:d.a.func,onExit:d.a.func,onExiting:d.a.func,onExited:d.a.func,children:d.a.node,className:d.a.string}
T.defaultProps={in:false,component:"div",unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,enterDelay:300,exitDelay:300,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},className:void 0,children:null,transitionClassName:void 0,exitedClassName:void 0,exitingClassName:void 0,enteredClassName:void 0,enteringClassName:void 0}
T.states=Q
var j=function(e){var t=e.transitions
return{duration:t.duration,timing:t.timing}}
var L,C,N,w,S
var z={componentId:"eJkkQ",template:function(e){return"\n\n.eJkkQ_bGBk{transform:translateZ(0)}\n\n.eJkkQ_ddDm{transition:opacity ".concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_cpZA,.eJkkQ_fTmM{opacity:0.01}\n\n.eJkkQ_bEpV,.eJkkQ_NoZX{opacity:1}\n\n.eJkkQ_fOgU{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_ZDum,.eJkkQ_fihg{opacity:0.01;transform:scale(0.01) translateZ(0)}\n\n.eJkkQ_eqrf,.eJkkQ_ftWB{opacity:1;transform:scale(1) translateZ(0)}\n\n.eJkkQ_dlJm,.eJkkQ_cPWt,.eJkkQ_bewW,.eJkkQ_bHhn{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_bOBe,.eJkkQ_eKZC,.eJkkQ_cusP,.eJkkQ_djUe{opacity:0.01}\n\n.eJkkQ_cusP,.eJkkQ_dWfS{transform:translate3d(100%,0,0)}\n\n.eJkkQ_eKZC,.eJkkQ_chud{transform:translate3d(-100%,0,0)}\n\n.eJkkQ_djUe,.eJkkQ_fDdb{transform:translate3d(0,-100%,0)}\n\n.eJkkQ_bOBe,.eJkkQ_cYey{transform:translate3d(0,100%,0)}\n\n.eJkkQ_diPG,.eJkkQ_fEMB,.eJkkQ_eOlt,.eJkkQ_fvoZ,.eJkkQ_bIuM,.eJkkQ_fyZW,.eJkkQ_cuyj,.eJkkQ_gaix{opacity:1;transform:translateZ(0)}")},root:"eJkkQ_bGBk",fade:"eJkkQ_ddDm","fade--exited":"eJkkQ_cpZA","fade--exiting":"eJkkQ_fTmM","fade--entered":"eJkkQ_bEpV","fade--entering":"eJkkQ_NoZX",scale:"eJkkQ_fOgU","scale--exited":"eJkkQ_ZDum","scale--exiting":"eJkkQ_fihg","scale--entered":"eJkkQ_eqrf","scale--entering":"eJkkQ_ftWB","slide-down":"eJkkQ_dlJm","slide-left":"eJkkQ_cPWt","slide-right":"eJkkQ_bewW","slide-up":"eJkkQ_bHhn","slide-down--exited":"eJkkQ_bOBe","slide-left--exited":"eJkkQ_eKZC","slide-right--exited":"eJkkQ_cusP","slide-up--exited":"eJkkQ_djUe","slide-right--exiting":"eJkkQ_dWfS","slide-left--exiting":"eJkkQ_chud","slide-up--exiting":"eJkkQ_fDdb","slide-down--exiting":"eJkkQ_cYey","slide-down--entered":"eJkkQ_diPG","slide-down--entering":"eJkkQ_fEMB","slide-left--entered":"eJkkQ_eOlt","slide-left--entering":"eJkkQ_fvoZ","slide-right--entered":"eJkkQ_bIuM","slide-right--entering":"eJkkQ_fyZW","slide-up--entered":"eJkkQ_cuyj","slide-up--entering":"eJkkQ_gaix"}
var Y=(L=Object(b["a"])(),C=Object(f["j"])(j,z),L(N=C(N=(S=w=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.handleExited=function(){"function"===typeof e.props.onExited&&e.props.onExited(e.props.type)}
e.handleEntered=function(){"function"===typeof e.props.onEntered&&e.props.onEntered(e.props.type)}
return e}Object(i["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,r=Object(a["a"])(e,["type","children"])
var i=m(this.theme.duration)
var o=t?{exited:z["".concat(t,"--exited")],exiting:z["".concat(t,"--exiting")],entering:z["".concat(t,"--entered")],entered:z["".concat(t,"--entering")]}:{}
return l.a.createElement(T,Object.assign({},r,{enterDelay:i,exitDelay:i,transitionClassName:z[t],exitedClassName:o.exited,exitingClassName:o.exiting,enteredClassName:o.entering,enteringClassName:o.entered,onEntered:this.handleEntered,onExited:this.handleExited}),n)}}])
n.displayName="Transition"
return n}(c["Component"]),w.propTypes={type:d.a.oneOf(["fade","scale","slide-down","slide-up","slide-left","slide-right"]),children:d.a.element,in:d.a.bool,unmountOnExit:d.a.bool,transitionOnMount:d.a.bool,transitionEnter:d.a.bool,transitionExit:d.a.bool,onTransition:d.a.func,onEnter:d.a.func,onEntering:d.a.func,onEntered:d.a.func,onExit:d.a.func,onExiting:d.a.func,onExited:d.a.func},w.defaultProps={type:"fade",in:false,unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},children:null},w.states=T.states,S))||N)||N)},etQE:function(e,t,n){"use strict"
n.d(t,"f",(function(){return r}))
n.d(t,"d",(function(){return i}))
n.d(t,"a",(function(){return o}))
n.d(t,"b",(function(){return s}))
n.d(t,"c",(function(){return c}))
n.d(t,"e",(function(){return l}))
var a=n("FOCd")
function r(e){return window.prefetched_xhrs&&window.prefetched_xhrs[e]}function i(e){if(window.prefetched_xhrs){const t=window.prefetched_xhrs[e]
delete window.prefetched_xhrs[e]
return t}return}function o(e,t="json"){if(!e)return
return e.then(c).then(e=>e.clone()[t]().then(t=>({data:t,headers:{link:e.headers.get("Link")}})))}function s(e){if(!e)return
return e.then(c).then(e=>e.clone().json())}function c(e){if(e.status<400)return e
{const t=new Error(e.statusText)
t.response=e
throw t}}const l={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":Object(a["a"])("_csrf_token")}}},k72m:function(e,t,n){"use strict"
n.d(t,"b",(function(){return i}))
n.d(t,"a",(function(){return o}))
var a=n("ODXe")
var r={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function i(e,t){return s(e,(function(e,t){return[r[e],t]}),t)}function o(e,t){return s(e,(function(e,t){return[e,t].map((function(e){return"start"===e||"end"===e?r[e]:e}))}),t)}function s(e,t,n){var r=Array.isArray(e)?e:e.split(" "),i=Object(a["a"])(r,2),o=i[0],s=i[1]
var c=t(o,s).filter((function(e){return e}))
return n?c.join(n):c}},kR0I:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("KQm4")
var r=n("QF4Q")
function i(e,t){var n=e&&Object(r["a"])(e)
if(!n)return false
return n.matches?n.matches(t):n.msMatchesSelector(t)}var o=n("IPIv")
function s(e,t,n){var o=Object(r["a"])(e)
if(!o||"function"!==typeof o.querySelectorAll)return[]
var s="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var c=Array.from(o.querySelectorAll(s))
n&&i(o,s)&&(c=[].concat(Object(a["a"])(c),[o]))
return c.filter((function(e){return"function"===typeof t?t(e)&&d(e):d(e)}))}function c(e){var t=Object(o["a"])(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function l(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Object(o["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function u(e){while(e){if(e===document.body)break
if(c(e))return false
if(l(e))break
e=e.parentNode}return true}function d(e){return!e.disabled&&u(e)}},uSnb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var a=n("rePB")
var r=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
n("DEX3")
var c=n("q1tI")
var l=n.n(c)
var u=n("17x9")
var d=n.n(u)
var f=n("TSYQ")
var h=n.n(f)
var p=n("n12J")
var m=n("nAyT")
var b=n("jtGx")
var v=n("E+IV")
var g=n("J2CL")
var _=n("M4Ft")
var y=n("BTe1")
var E=n("oXx0")
function k(e){var t=e.colors
return{trackColor:t.backgroundLight,color:t.backgroundBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseColor:t.backgroundBrand}}k["canvas-a11y"]=k["canvas-high-contrast"]=function(e){var t=e.colors
return{inverseColor:t.backgroundLightest}}
k.canvas=function(e){return{color:e["ic-brand-primary"]}}
var O,x,D,Q,T,j
var L={componentId:"eHQDY",template:function(e){return"\n\n@keyframes eHQDY_dpDr{to{transform:rotate(360deg)}}\n\n@keyframes eHQDY_buIf{0%{stroke-dashoffset:190%}50%{stroke-dashoffset:50%;transform:rotate(90deg)}to{stroke-dashoffset:190%;transform:rotate(360deg)}}\n\n.eHQDY_bGBk{box-sizing:border-box;display:inline-block;overflow:hidden;position:relative;vertical-align:middle}\n\n.eHQDY_dTxv{stroke:".concat(e.trackColor||"inherit","}\n\n.eHQDY_dfBC,.eHQDY_dfBC .eHQDY_cJVF{height:").concat(e.xSmallSize||"inherit",";width:").concat(e.xSmallSize||"inherit","}\n\n.eHQDY_dfBC .eHQDY_eWAY,.eHQDY_dfBC .eHQDY_dTxv{stroke-width:").concat(e.xSmallBorderWidth||"inherit","}\n\n.eHQDY_dfBC .eHQDY_eWAY{stroke-dasharray:3em;transform-origin:calc(").concat(e.xSmallSize||"inherit","/2) calc(").concat(e.xSmallSize||"inherit","/2)}\n\n.eHQDY_doqw,.eHQDY_doqw .eHQDY_cJVF{height:").concat(e.smallSize||"inherit",";width:").concat(e.smallSize||"inherit","}\n\n.eHQDY_doqw .eHQDY_eWAY,.eHQDY_doqw .eHQDY_dTxv{stroke-width:").concat(e.smallBorderWidth||"inherit","}\n\n.eHQDY_doqw .eHQDY_eWAY{stroke-dasharray:6em;transform-origin:calc(").concat(e.smallSize||"inherit","/2) calc(").concat(e.smallSize||"inherit","/2)}\n\n.eHQDY_ycrn,.eHQDY_ycrn .eHQDY_cJVF{height:").concat(e.mediumSize||"inherit",";width:").concat(e.mediumSize||"inherit","}\n\n.eHQDY_ycrn .eHQDY_cJVF,.eHQDY_ycrn .eHQDY_eWAY,.eHQDY_ycrn .eHQDY_dTxv{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.eHQDY_ycrn .eHQDY_eWAY{stroke-dasharray:10.5em;transform-origin:calc(").concat(e.mediumSize||"inherit","/2) calc(").concat(e.mediumSize||"inherit","/2)}\n\n.eHQDY_cMDj,.eHQDY_cMDj .eHQDY_cJVF{height:").concat(e.largeSize||"inherit",";width:").concat(e.largeSize||"inherit","}\n\n.eHQDY_cMDj .eHQDY_cJVF,.eHQDY_cMDj .eHQDY_eWAY,.eHQDY_cMDj .eHQDY_dTxv{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.eHQDY_cMDj .eHQDY_eWAY{stroke-dasharray:14em;transform-origin:calc(").concat(e.largeSize||"inherit","/2) calc(").concat(e.largeSize||"inherit","/2)}\n\n.eHQDY_cJVF{animation-duration:2.25s;animation-iteration-count:infinite;animation-name:eHQDY_dpDr;animation-timing-function:linear;display:block;left:0;position:absolute;top:0}\n\n.eHQDY_eWAY,.eHQDY_dTxv{fill:none}\n\n.eHQDY_eWAY{stroke-linecap:round}\n\n.eHQDY_bGBk:not(.eHQDY_eoSs) .eHQDY_eWAY{animation-duration:1.75s;animation-iteration-count:infinite;animation-name:eHQDY_buIf;animation-timing-function:ease}\n\n.eHQDY_bGBk.eHQDY_eoSs .eHQDY_eWAY{stroke-dashoffset:100%}\n\n.eHQDY_ddES .eHQDY_eWAY{stroke:").concat(e.color||"inherit","}\n\n.eHQDY_enfx .eHQDY_eWAY{stroke:").concat(e.inverseColor||"inherit","}")},root:"eHQDY_bGBk",circleTrack:"eHQDY_dTxv","x-small":"eHQDY_dfBC",circle:"eHQDY_cJVF",circleSpin:"eHQDY_eWAY",small:"eHQDY_doqw",medium:"eHQDY_ycrn",large:"eHQDY_cMDj",rotate:"eHQDY_dpDr",ie11:"eHQDY_eoSs",morph:"eHQDY_buIf",default:"eHQDY_ddES",inverse:"eHQDY_enfx"}
var C=(O=Object(m["a"])("8.0.0",{title:"renderTitle"}),x=Object(E["a"])(),D=Object(g["j"])(k,L),O(Q=x(Q=D(Q=(j=T=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(e){var a
Object(r["a"])(this,n)
a=t.call(this)
a.titleId=Object(y["a"])("Spinner")
return a}Object(i["a"])(n,[{key:"radius",value:function(){switch(this.props.size){case"x-small":return"0.5em"
case"small":return"1em"
case"large":return"2.25em"
default:return"1.75em"}}},{key:"render",value:function(){var e
var t=(e={},Object(a["a"])(e,L.root,true),Object(a["a"])(e,L[this.props.size],true),Object(a["a"])(e,L[this.props.variant],true),Object(a["a"])(e,L.ie11,_["a"]),e)
var r=p["a"].omitViewProps(Object(b["a"])(this.props,n.propTypes),n)
this.props.renderTitle||this.props.title
return l.a.createElement(p["a"],Object.assign({},r,{as:this.props.as,elementRef:this.props.elementRef,className:h()(t),margin:this.props.margin}),l.a.createElement("svg",{className:L.circle,role:"img","aria-labelledby":this.titleId,focusable:"false"},l.a.createElement("title",{id:this.titleId},Object(v["a"])(this.props.renderTitle)),l.a.createElement("g",{role:"presentation"},"inverse"!==this.props.variant&&l.a.createElement("circle",{className:L.circleTrack,cx:"50%",cy:"50%",r:this.radius()}),l.a.createElement("circle",{className:L.circleSpin,cx:"50%",cy:"50%",r:this.radius()}))))}}])
n.displayName="Spinner"
return n}(c["Component"]),T.propTypes={renderTitle:d.a.oneOfType([d.a.func,d.a.node]),size:d.a.oneOf(["x-small","small","medium","large"]),variant:d.a.oneOf(["default","inverse"]),margin:g["c"].spacing,elementRef:d.a.func,as:d.a.elementType,title:d.a.string},T.defaultProps={renderTitle:void 0,as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0},j))||Q)||Q)||Q)},vGBm:function(e,t,n){"use strict"
n.d(t,"c",(function(){return o}))
n.d(t,"b",(function(){return s}))
n.d(t,"a",(function(){return c}))
var a=n("FOCd")
const r="k5_observed_user_for_"
const i=e=>`${r}${e}`
const o=e=>Object(a["a"])(i(e))
const s=(e,t)=>{document.cookie=l(e,t)}
const c=e=>{document.cookie=l(e,"")+";max-age=-1"}
const l=(e,t)=>`${i(e)}=${t};path=/`},vhl9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
const a=/<(http.*?)>; rel="([a-z]*)"/g
function r(e){let t
const n={}
const r=e&&e.getResponseHeader("Link")
if(!r)return n
while(t=a.exec(r))n[t[2]]=t[1]
return n}}}])

//# sourceMappingURL=navigation_header-c-1569967c08.js.map