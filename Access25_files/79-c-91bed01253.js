(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[79],{"6ohZ":function(n,t,e){"use strict"
e.d(t,"a",(function(){return u}))
var i=e("RtDj")
var o=e("q1tI")
var r=e.n(o)
e("17x9")
var a=e("Mmr1")
var c=e("msMH")
var l=e("HGxv")
var f=e("Dibh")
const s=Object(l["useScope"])("modal")
function b(){return document.getElementById("flash_screenreader_holder")}function u({label:n,closeButtonLabel:t,onDismiss:e,children:o,...l}){return r.a.createElement(f["a"],Object.assign({liveRegion:b},l,{label:n,onDismiss:e}),Object(i["a"])(f["a"].Header,{},void 0,Object(i["a"])(a["a"],{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:e,screenReaderLabel:t||s.t("Close")}),Object(i["a"])(c["a"],{},void 0,n)),o)}["Header","Body","Footer"].forEach(n=>u[n]=f["a"][n])
u.defaultProps={closeButtonLabel:void 0}},"8o96":function(n,t,e){"use strict"
e.d(t,"a",(function(){return a}))
var i=e("QF4Q")
var o=e("gCYW")
var r=e("ISHz")
function a(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["width"]
var a=Object(i["a"])(n)
var c=Object(o["a"])(a)
var l=false
var f
var s=function n(){if(l)return
var i=Object(o["a"])(a)
var s={width:i.width,height:i.height}
e.some((function(n){return s[n]!=c[n]}))&&"function"===typeof t&&t(s)
c=s
f=Object(r["a"])(n)}
s()
return{remove:function(){l=true
f.cancel()}}}},"8t0o":function(n,t,e){"use strict"
e.d(t,"a",(function(){return I}))
var i=e("rePB")
var o=e("Ff2n")
var r=e("1OyB")
var a=e("vuIU")
var c=e("JX7q")
var l=e("Ji7U")
var f=e("LK+K")
e("DEX3")
var s=e("q1tI")
var b=e.n(s)
var u=e("17x9")
var d=e.n(u)
var h=e("TSYQ")
var v=e.n(h)
var H=e("n12J")
var y=e("J2CL")
var p=e("rW8M")
var m=e("/UXv")
var g=e("kR0I")
var _=e("nAyT")
var k=e("E+IV")
var x=e("jtGx")
var O=e("4Awi")
var F=e("tCl5")
var B=e("KgFQ")
var w=e("oXx0")
var G=e("o4+2")
function Q(n){var t=n.colors,e=n.typography,i=n.borders,o=n.spacing
return{fontFamily:e.fontFamily,fontWeight:e.fontWeightNormal,color:t.textLink,textDecorationWithinText:"underline",hoverTextDecorationWithinText:"none",textDecorationOutsideText:"none",hoverTextDecorationOutsideText:"underline",focusOutlineWidth:i.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:i.style,hoverColor:Object(G["a"])(t.textLink,10),colorInverse:t.textLight,focusInverseOutlineColor:t.borderLightest,focusInverseIconOutlineColor:t.borderLightest,iconSize:"1.125em",iconPlusTextMargin:o.xxSmall}}Q["canvas"]=function(n){return{color:n["ic-link-color"],focusOutlineColor:n["ic-brand-primary"],hoverColor:Object(G["a"])(n["ic-link-color"],10)}}
Q["canvas-high-contrast"]=function(n){return{textDecorationOutsideText:"underline",hoverTextDecorationOutsideText:"none"}}
var j,T,C,S,W,A
var z={componentId:"fbyHH",template:function(n){return"\n\n.fbyHH_bGBk,a.fbyHH_bGBk,button.fbyHH_bGBk{box-sizing:border-box;font-family:".concat(n.fontFamily||"inherit",";font-weight:").concat(n.fontWeight||"inherit",";outline-color:transparent;outline-offset:0.25rem;outline-style:").concat(n.focusOutlineStyle||"inherit",";outline-width:").concat(n.focusOutlineWidth||"inherit",";transition:outline-color 0.2s;vertical-align:baseline}\n\n.fbyHH_bGBk:focus,a.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{outline-color:").concat(n.focusOutlineColor||"inherit","}\n\n.fbyHH_bGBk[aria-disabled],a.fbyHH_bGBk[aria-disabled],button.fbyHH_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.fbyHH_bGBk::-moz-focus-inner,a.fbyHH_bGBk::-moz-focus-inner,button.fbyHH_bGBk::-moz-focus-inner{border:0}\n\na.fbyHH_bGBk,button.fbyHH_bGBk{color:").concat(n.color||"inherit",";cursor:pointer}\n\na.fbyHH_bGBk.fbyHH_vIby,button.fbyHH_bGBk.fbyHH_vIby{-webkit-text-decoration:").concat(n.textDecorationWithinText||"inherit",";text-decoration:").concat(n.textDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk.fbyHH_bSMN,button.fbyHH_bGBk.fbyHH_bSMN{-webkit-text-decoration:").concat(n.textDecorationOutsideText||"inherit",";text-decoration:").concat(n.textDecorationOutsideText||"inherit","}\n\na.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{color:").concat(n.color||"inherit","}\n\na.fbyHH_bGBk:active,a.fbyHH_bGBk:hover,button.fbyHH_bGBk:active,button.fbyHH_bGBk:hover{color:").concat(n.hoverColor||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_vIby,a.fbyHH_bGBk:hover.fbyHH_vIby,button.fbyHH_bGBk:active.fbyHH_vIby,button.fbyHH_bGBk:hover.fbyHH_vIby{-webkit-text-decoration:").concat(n.hoverTextDecorationWithinText||"inherit",";text-decoration:").concat(n.hoverTextDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_bSMN,a.fbyHH_bGBk:hover.fbyHH_bSMN,button.fbyHH_bGBk:active.fbyHH_bSMN,button.fbyHH_bGBk:hover.fbyHH_bSMN{-webkit-text-decoration:").concat(n.hoverTextDecorationOutsideText||"inherit",";text-decoration:").concat(n.hoverTextDecorationOutsideText||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH,a.fbyHH_bGBk.fbyHH_dQmH:link,a.fbyHH_bGBk.fbyHH_dQmH:visited,button.fbyHH_bGBk.fbyHH_dQmH{color:").concat(n.colorInverse||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,button.fbyHH_bGBk.fbyHH_dQmH:focus{outline-color:").concat(n.focusInverseOutlineColor||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:active,.fbyHH_bGBk.fbyHH_dQmH:focus,.fbyHH_bGBk.fbyHH_dQmH:hover,a.fbyHH_bGBk.fbyHH_dQmH:link:active,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:hover,a.fbyHH_bGBk.fbyHH_dQmH:visited:active,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:hover,button.fbyHH_bGBk.fbyHH_dQmH:active,button.fbyHH_bGBk.fbyHH_dQmH:focus,button.fbyHH_bGBk.fbyHH_dQmH:hover{color:").concat(n.colorInverse||"inherit","}\n\nbutton.fbyHH_bGBk{-moz-appearance:none;-ms-user-select:text;-webkit-appearance:none;-webkit-user-select:text;appearance:none;background:none;border:none;cursor:pointer;font-size:1em;margin:0;padding:0;text-align:inherit;user-select:text}\n\n[dir=ltr] button.fbyHH_bGBk,[dir=rtl] button.fbyHH_bGBk{text-align:inherit}\n\n.fbyHH_dnnz{box-sizing:border-box;font-size:").concat(n.iconSize||"inherit","}\n\n.fbyHH_ddMx .fbyHH_dnnz{-webkit-padding-end:").concat(n.iconPlusTextMargin||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(n.iconPlusTextMargin||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .fbyHH_ddMx .fbyHH_dnnz{padding-left:0;padding-right:").concat(n.iconPlusTextMargin||"inherit","}\n\n[dir=rtl] .fbyHH_ddMx .fbyHH_dnnz{padding-left:").concat(n.iconPlusTextMargin||"inherit",";padding-right:0}\n\n.fbyHH_bkXt .fbyHH_dnnz{-webkit-padding-end:0;-webkit-padding-start:").concat(n.iconPlusTextMargin||"inherit",";padding-inline-end:0;padding-inline-start:").concat(n.iconPlusTextMargin||"inherit","}\n\n[dir=ltr] .fbyHH_bkXt .fbyHH_dnnz{padding-left:").concat(n.iconPlusTextMargin||"inherit",";padding-right:0}\n\n[dir=rtl] .fbyHH_bkXt .fbyHH_dnnz{padding-left:0;padding-right:").concat(n.iconPlusTextMargin||"inherit","}\n\n.fbyHH_FcDy.fbyHH_bkXt,.fbyHH_FcDy.fbyHH_ddMx{align-items:center}")},root:"fbyHH_bGBk",isWithinText:"fbyHH_vIby",isOutsideText:"fbyHH_bSMN","color--link-inverse":"fbyHH_dQmH",icon:"fbyHH_dnnz","iconPlacement--start":"fbyHH_ddMx","iconPlacement--end":"fbyHH_bkXt",truncates:"fbyHH_FcDy"}
var I=(j=Object(_["a"])("8.0.0",{linkRef:"elementRef",variant:"color"}),T=Object(w["a"])(),C=Object(y["j"])(Q,z),j(S=T(S=C(S=(A=W=function(n){Object(l["a"])(e,n)
var t=Object(f["a"])(e)
function e(){var n
Object(r["a"])(this,e)
for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a]
n=t.call.apply(t,[this].concat(o))
n.state={hasFocus:false}
n.handleElementRef=function(t){var e=n.props,i=e.elementRef,o=e.linkRef
n._link=t
"function"===typeof o&&o(t)
"function"===typeof i&&i(t)}
n.handleClick=function(t){var e=n.props.onClick
var i=Object(c["a"])(n),o=i.interaction
if("disabled"===o){t.preventDefault()
t.stopPropagation()}else"function"===typeof e&&e(t)}
n.handleFocus=function(t){n.setState({hasFocus:true})
"function"===typeof n.props.onFocus&&n.props.onFocus(t)}
n.handleBlur=function(t){n.setState({hasFocus:false})
"function"===typeof n.props.onBlur&&n.props.onBlur(t)}
return n}Object(a["a"])(e,[{key:"focus",value:function(){this._link&&this._link.focus()}},{key:"renderIcon",value:function(){this.props.display
return b.a.createElement("span",{className:z.icon},Object(k["a"])(this.props.renderIcon))}},{key:"render",value:function(){var n
var t=this.props,e=t.children,r=t.onClick,a=t.color,c=t.href,l=t.margin,f=t.renderIcon,s=t.iconPlacement,u=t.isWithinText,d=t.variant,h=Object(o["a"])(t,["children","onClick","color","href","margin","renderIcon","iconPlacement","isWithinText","variant"])
var y=(n={},Object(i["a"])(n,z.root,true),Object(i["a"])(n,z["color--link-inverse"],"inverse"===d||"link-inverse"===a),Object(i["a"])(n,z["iconPlacement--".concat(s)],f&&this.hasVisibleChildren),Object(i["a"])(n,z.truncates,this.containsTruncateText),Object(i["a"])(n,z["is".concat(u?"Within":"Outside","Text")],true),n)
var p=this.interaction
var m="disabled"===p
var g=r&&"button"!==this.element?"button":null
var _="button"===this.element||"input"===this.element?"button":null
var k="button"!==g||m?null:"0"
return b.a.createElement(H["a"],Object.assign({},Object(x["b"])(h),{elementRef:this.handleElementRef,as:this.element,display:this.display,margin:l,href:c,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-disabled":m?"true":null,role:g,type:_,tabIndex:k,className:v()(y)}),f&&"start"===s&&this.renderIcon(),e,f&&"end"===s&&this.renderIcon())}},{key:"containsTruncateText",get:function(){var n=false
b.a.Children.forEach(this.props.children,(function(t){t&&Object(O["a"])(t,["TruncateText"])&&(n=true)}))
!n||this.props.display
return n}},{key:"display",get:function(){if(this.props.display)return this.props.display
var n=this.containsTruncateText
return this.props.renderIcon?n?"inline-flex":"inline-block":n?"block":"auto"}},{key:"interaction",get:function(){return Object(F["a"])({props:this.props,interactionTypes:["disabled"]})}},{key:"element",get:function(){return Object(B["a"])(e,this.props)}},{key:"focused",get:function(){return Object(m["a"])(this._link)}},{key:"focusable",get:function(){return Object(g["a"])(this._link)}},{key:"hasVisibleChildren",get:function(){return Object(p["a"])(this.props.children)}}])
e.displayName="Link"
return e}(s["Component"]),W.propTypes={children:d.a.node.isRequired,href:d.a.string,color:d.a.oneOf(["link","link-inverse"]),elementRef:d.a.func,as:d.a.elementType,interaction:d.a.oneOf(["enabled","disabled"]),margin:y["c"].spacing,renderIcon:d.a.oneOfType([d.a.func,d.a.node]),iconPlacement:d.a.oneOf(["start","end"]),display:d.a.oneOf(["auto","block","inline-block","flex","inline-flex"]),isWithinText:d.a.bool,onClick:d.a.func,onFocus:d.a.func,onBlur:d.a.func,linkRef:d.a.func,variant:d.a.oneOf(["default","inverse"])},W.defaultProps={href:void 0,elementRef:void 0,interaction:void 0,margin:void 0,renderIcon:void 0,display:void 0,color:"link",as:void 0,iconPlacement:"start",isWithinText:true,onClick:void 0,onFocus:void 0,onBlur:void 0},A))||S)||S)||S)},BrAc:function(n,t,e){"use strict"
var i=e("vDqi")
var o=e.n(i)
o.a.defaults.xsrfCookieName="_csrf_token"
o.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=o.a.defaults.headers.common.Accept
o.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
o.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=o.a},M4Ft:function(n,t,e){"use strict"
e.d(t,"a",(function(){return o}))
var i="undefined"!==typeof navigator&&navigator.userAgent||""
var o=/msie|trident/i.test(i)},eGSd:function(n,t,e){"use strict"
e.d(t,"a",(function(){return i}))
function i(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var i,o,r,a
var c=0
var l=[]
var f=false
if("function"!==typeof n)throw new TypeError("Expected a function")
var s=!!e.leading
var b="maxWait"in e
var u=!("trailing"in e)||!!e.trailing
var d=b?Math.max(+e.maxWait||0,t):0
function h(t){var e=i
var a=o
i=o=void 0
c=t
if(true!==f){r=n.apply(a,e)
return r}}function v(n){c=n
l.push(setTimeout(p,t))
return s?h(n):r}function H(n){var e=n-a
var i=n-c
var o=t-e
return b?Math.min(o,d-i):o}function y(n){var e=n-a
var i=n-c
return"undefined"===typeof a||e>=t||e<0||b&&i>=d}function p(){var n=Date.now()
if(y(n))return m(n)
l.push(setTimeout(p,H(n)))}function m(n){k()
if(u&&i)return h(n)
i=o=void 0
return r}function g(){f=true
k()
c=0
i=a=o=void 0}function _(){return 0===l.length?r:m(Date.now())}function k(){l.forEach((function(n){return clearTimeout(n)}))
l=[]}function x(){var n=Date.now()
var e=y(n)
for(var c=arguments.length,f=new Array(c),s=0;s<c;s++)f[s]=arguments[s]
i=f
o=this
a=n
if(e){if(0===l.length)return v(a)
if(b){l.push(setTimeout(p,t))
return h(a)}}0===l.length&&l.push(setTimeout(p,t))
return r}x.cancel=g
x.flush=_
return x}},gCYW:function(n,t,e){"use strict"
e.d(t,"a",(function(){return c}))
var i=e("QF4Q")
var o=e("i/8D")
var r=e("EgqM")
var a=e("DUTp")
function c(n){var t={top:0,left:0,height:0,width:0}
if(!o["a"])return t
var e=Object(i["a"])(n)
if(!e)return t
if(e===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=n===document?document:Object(a["a"])(e)
var f=l&&l.documentElement
if(!f||!Object(r["a"])(f,e))return t
var s=e.getBoundingClientRect()
var b
for(b in s)t[b]=s[b]
if(l!==document){var u=l.defaultView.frameElement
if(u){var d=c(u)
t.top+=d.top
t.bottom+=d.top
t.left+=d.left
t.right+=d.left}}return{top:t.top+(window.pageYOffset||f.scrollTop)-(f.clientTop||0),left:t.left+(window.pageXOffset||f.scrollLeft)-(f.clientLeft||0),width:(null==t.width?e.offsetWidth:t.width)||0,height:(null==t.height?e.offsetHeight:t.height)||0,right:l.body.clientWidth-t.width-t.left,bottom:l.body.clientHeight-t.height-t.top}}},kR0I:function(n,t,e){"use strict"
e.d(t,"a",(function(){return c}))
var i=e("KQm4")
var o=e("QF4Q")
function r(n,t){var e=n&&Object(o["a"])(n)
if(!e)return false
return e.matches?e.matches(t):e.msMatchesSelector(t)}var a=e("IPIv")
function c(n,t,e){var a=Object(o["a"])(n)
if(!a||"function"!==typeof a.querySelectorAll)return[]
var c="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var l=Array.from(a.querySelectorAll(c))
e&&r(a,c)&&(l=[].concat(Object(i["a"])(l),[a]))
return l.filter((function(n){return"function"===typeof t?t(n)&&b(n):b(n)}))}function l(n){var t=Object(a["a"])(n)
return"inline"!==t.display&&n.offsetWidth<=0&&n.offsetHeight<=0||"none"===t.display}function f(n){var t=["fixed","absolute"]
if(t.includes(n.style.position.toLowerCase()))return true
if(t.includes(Object(a["a"])(n).getPropertyValue("position").toLowerCase()))return true
return false}function s(n){while(n){if(n===document.body)break
if(l(n))return false
if(f(n))break
n=n.parentNode}return true}function b(n){return!n.disabled&&s(n)}},msMH:function(n,t,e){"use strict"
e.d(t,"a",(function(){return C}))
var i=e("rePB")
var o=e("Ff2n")
var r=e("1OyB")
var a=e("vuIU")
var c=e("Ji7U")
var l=e("LK+K")
var f=e("q1tI")
var s=e.n(f)
var b=e("17x9")
var u=e.n(b)
var d=e("TSYQ")
var h=e.n(d)
var v=e("n12J")
var H=e("J2CL")
function y(n,t,e){if("input"===n.as){if("children"===t&&n.children||void 0==n.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(e,' as="input"`'))}else{if("value"===t&&void 0!=n.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(e,' as="input"`'))
if(!n.children)return new Error("Prop `children` should be supplied unless `".concat(e,' as="input"`.'))}return}var p=e("nAyT")
var m=e("KgFQ")
var g=e("jtGx")
var _=e("oXx0")
function k(n){var t=n.borders,e=n.colors,i=n.spacing,o=n.typography
return{lineHeight:o.lineHeightFit,h1FontSize:o.fontSizeXXLarge,h1FontWeight:o.fontWeightLight,h1FontFamily:o.fontFamily,h2FontSize:o.fontSizeXLarge,h2FontWeight:o.fontWeightNormal,h2FontFamily:o.fontFamily,h3FontSize:o.fontSizeLarge,h3FontWeight:o.fontWeightBold,h3FontFamily:o.fontFamily,h4FontSize:o.fontSizeMedium,h4FontWeight:o.fontWeightBold,h4FontFamily:o.fontFamily,h5FontSize:o.fontSizeSmall,h5FontWeight:o.fontWeightNormal,h5FontFamily:o.fontFamily,primaryInverseColor:e.textLightest,primaryColor:e.textDarkest,secondaryColor:e.textDark,secondaryInverseColor:e.textLight,borderPadding:i.xxxSmall,borderColor:e.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}k.canvas=function(n){return{primaryColor:n["ic-brand-font-color-dark"]}}
k["instructure"]=function(n){var t=n.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var x={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var O=Object(H["d"])({map:x,version:"8.0.0"})
var F,B,w,G,Q,j
var T={componentId:"blnAQ",template:function(n){return"\n\n.blnAQ_bGBk{line-height:".concat(n.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(n.h1FontFamily||"inherit",";font-size:").concat(n.h1FontSize||"inherit",";font-weight:").concat(n.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(n.h2FontFamily||"inherit",";font-size:").concat(n.h2FontSize||"inherit",";font-weight:").concat(n.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(n.h3FontFamily||"inherit",";font-size:").concat(n.h3FontSize||"inherit",";font-weight:").concat(n.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(n.h4FontFamily||"inherit",";font-size:").concat(n.h4FontSize||"inherit",";font-weight:").concat(n.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(n.h5FontFamily||"inherit",";font-size:").concat(n.h5FontSize||"inherit",";font-weight:").concat(n.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-top:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(n.borderWidth||"inherit"," ").concat(n.borderStyle||"inherit"," ").concat(n.borderColor||"inherit",";padding-bottom:").concat(n.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(n.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(n.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(n.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(n.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var C=(F=Object(p["a"])("8.0.0",{ellipsis:"<TruncateText />"}),B=Object(_["a"])(),w=Object(H["j"])(k,T,O),F(G=B(G=w(G=(j=Q=function(n){Object(c["a"])(e,n)
var t=Object(l["a"])(e)
function e(){Object(r["a"])(this,e)
return t.apply(this,arguments)}Object(a["a"])(e,[{key:"render",value:function(){var n
var t=this.props,r=t.border,a=t.children,c=t.color,l=t.level,f=t.margin,b=t.elementRef,u=t.ellipsis,d=Object(o["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var H=Object(m["a"])(e,this.props,(function(){return"reset"===l?"span":l}))
return s.a.createElement(v["a"],Object.assign({},Object(g["b"])(d),{className:h()((n={},Object(i["a"])(n,T.root,true),Object(i["a"])(n,T["level--".concat(l)],true),Object(i["a"])(n,T["color--".concat(c)],c),Object(i["a"])(n,T["border--".concat(r)],"none"!==r),Object(i["a"])(n,T.ellipsis,u),n)),as:H,margin:f,elementRef:b}),a)}}])
e.displayName="Heading"
return e}(f["Component"]),Q.propTypes={border:u.a.oneOf(["none","top","bottom"]),children:y,color:u.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:u.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:u.a.elementType,margin:H["c"].spacing,elementRef:u.a.func,ellipsis:u.a.bool},Q.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},j))||G)||G)||G)},onq7:function(n,t,e){"use strict"
var i=e("mX+G")
var o=e.n(i)
function r(n){const t={...o.a.Events}
let e=n||{}
return{setState(n){Object.assign(e,n)
this.emitChange()},getState:()=>e,clearState(){e={}
this.emitChange()},addChangeListener(n){t.on("change",n)},removeChangeListener(n){t.off("change",n)},emitChange(){t.trigger("change")}}}t["a"]=r},rJZq:function(n,t,e){"use strict"
var i=e("17x9")
var o=e.n(i)
o.a.func,o.a.func,o.a.func,o.a.func}}])

//# sourceMappingURL=79-c-91bed01253.js.map