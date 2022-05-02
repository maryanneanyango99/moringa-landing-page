(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3773],{"/5Zp":function(e,t,a){"use strict"
a.d(t,"a",(function(){return S}))
var n=a("1OyB")
var o=a("vuIU")
var i=a("Ji7U")
var r=a("LK+K")
var s=a("q1tI")
var c=a.n(s)
var l=a("17x9")
var d=a.n(l)
var u=a("cClk")
var m=a("sTNg")
var h=a("BTe1")
var p=a("oXx0")
var b=a("4Awi")
var g=a("II2N")
var f=a("jtGx")
var v=a("GTSS")
var _,y,O,w
var S=(_=Object(p["a"])(),_(y=(w=O=function(e){Object(i["a"])(a,e)
var t=Object(r["a"])(a)
function a(e){var o
Object(n["a"])(this,a)
o=t.call(this)
o.handleChange=function(e){var t=e.target.value
if(o.props.disabled||o.props.readOnly){e.preventDefault()
return}"undefined"===typeof o.props.value&&o.setState({value:t})
"function"===typeof o.props.onChange&&o.props.onChange(e,t)}
"undefined"===typeof e.value&&(o.state={value:e.defaultValue})
o._messagesId=Object(h["a"])("RadioInputGroup-messages")
return o}Object(o["a"])(a,[{key:"renderChildren",value:function(){var e=this
var t=this.props,a=t.children,n=t.name,o=t.variant,i=t.size,r=t.disabled,c=t.readOnly
return s["Children"].map(a,(function(t,a){if(Object(b["a"])(t,[v["a"]])){var s=e.value===t.props.value
var l=!e.value&&0===a
return Object(g["a"])(t,{name:n,disabled:r||t.props.disabled,variant:o,size:i,checked:s,onChange:e.handleChange,readOnly:c||t.props.readOnly,width:t.props.width||"auto","aria-describedby":e.hasMessages&&e._messagesId,tabIndex:s||l?"0":"-1"})}return t}))}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.layout
return c.a.createElement(m["b"],Object.assign({},Object(f["a"])(this.props,a.propTypes),Object(f["c"])(this.props,m["b"].propTypes),{layout:"columns"===n&&"toggle"===t?"stacked":n,vAlign:"toggle"===t?"middle":"top",rowSpacing:"small",colSpacing:"toggle"===t?"none":"small",startAt:"toggle"===t?"small":void 0,messagesId:this._messagesId}),this.renderChildren())}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"value",get:function(){return"undefined"===typeof this.props.value?this.state.value:this.props.value}}])
a.displayName="RadioInputGroup"
return a}(s["Component"]),O.propTypes={name:d.a.string.isRequired,description:d.a.node.isRequired,defaultValue:d.a.oneOfType([d.a.string,d.a.number]),value:Object(u["a"])(d.a.oneOfType([d.a.string,d.a.number])),onChange:d.a.func,disabled:d.a.bool,readOnly:d.a.bool,messages:d.a.arrayOf(m["d"].message),children:d.a.node,variant:d.a.oneOf(["simple","toggle"]),size:d.a.oneOf(["small","medium","large"]),layout:d.a.oneOf(["stacked","columns","inline"])},O.defaultProps={disabled:false,variant:"simple",size:"medium",layout:"stacked",readOnly:false,defaultValue:void 0,value:void 0,children:null,messages:void 0,onChange:void 0},w))||y)},"/WiN":function(e,t,a){"use strict"
a.d(t,"a",(function(){return m}))
var n=a("RtDj")
var o=a("HGxv")
var i=a("q1tI")
var r=a.n(i)
a("17x9")
var s=a("L+/K")
var c=a("Oioo")
var l=a("uSnb")
const d=Object(o["useScope"])("canvas_async_search_select")
const u="~~empty-option~~"
m.Option=c["a"].Option
m.defaultProps={isLoading:false,noOptionsLabel:"---",noOptionsValue:"",onOptionSelected:Function.prototype,onInputChange:Function.prototype,onBlur:Function.prototype,onFocus:Function.prototype}
function m({options:e,inputValue:t,isLoading:a,selectedOptionId:o,noOptionsLabel:m,noOptionsValue:h,onOptionSelected:p,onInputChange:b,onFocus:g,onBlur:f,children:v,..._}){var y
const O=Object(i["useRef"])(a)
const w=O.current
const S=Object(i["useRef"])(o)
const[j,k]=Object(i["useState"])(false)
const[x,V]=Object(i["useState"])(null)
const[H,C]=Object(i["useState"])("")
const[B,z]=Object(i["useState"])(false)
const[D,M]=Object(i["useState"])("")
function I(e){let t
r.a.Children.forEach(v,a=>{a.props.id===e&&(t=a)})
return t}function q(e){const{id:t,renderBeforeLabel:a,...n}=e.props
const i={isHighlighted:t===x,isSelected:t===o}
const s=e.props.children
const l="function"===typeof a?a(i):a
const d="function"===typeof s?s(i):s
return r.a.createElement(c["a"].Option,Object.assign({key:t,id:t},n,i,{renderBeforeLabel:l}),d)}function F(){return a?Object(n["a"])(c["a"].Option,{id:u},void 0,Object(n["a"])(l["a"],{renderTitle:d.t("Loading options..."),size:"x-small"})):0===r.a.Children.count(v)?y||(y=Object(n["a"])(c["a"].Option,{id:u},void 0,m)):r.a.Children.map(v,q)}function E(e){const a=e.target.value
"undefined"===typeof t&&M(a)
k(true)
b(e,a)}function R(){k(true)}function T(){k(false)
C(d.t("List Collapsed"))}function W(e,{id:t}){const a=I(t)
if(a){V(t)
C(a.props.children)}}function L(e,{id:a}){const n=I(a)
const o=null===n||void 0===n?void 0:n.props.children
if(!n)return
k(false)
C(r.a.createElement(r.a.Fragment,null,d.t("Option selected:")," ",o," ",d.t("List collapsed.")))
if(a!==u){"undefined"===typeof t&&M(o)
p(e,a)}}function Y(e){z(true)
g(e)}function N(e){z(false)
V(null)
if(0===r.a.Children.count(v)&&"undefined"===typeof t){M("")
p(e,h)}f(e)}B&&w!==a&&C(a?d.t("Loading options..."):d.t("%{count} options loaded.",{count:r.a.Children.count(v)}))
"undefined"!==typeof t||o===S.current||o||M("")
const A={inputValue:"undefined"===typeof t?D:t,isShowingOptions:j,assistiveText:d.t("Type to search"),onFocus:Y,onBlur:N,onInputChange:E,onRequestShowOptions:R,onRequestHideOptions:T,onRequestHighlightOption:W,onRequestSelectOption:L}
O.current=a
S.current=o
return r.a.createElement(r.a.Fragment,null,r.a.createElement(c["a"],Object.assign({},A,_),F()),Object(n["a"])(s["a"],{liveRegion:()=>document.getElementById("flash_screenreader_holder"),liveRegionPoliteness:"assertive",screenReaderOnly:true},void 0,H))}},"1L5+":function(e,t,a){"use strict"
a.d(t,"b",(function(){return n}))
a.d(t,"a",(function(){return o}))
const n=()=>{let e
return t=>{if(e){if(t!==e){sessionStorage.setItem("autoFocusObserverPicker",true)
window.location.reload()}}else e=t}}
const o=()=>{if(sessionStorage.getItem("autoFocusObserverPicker")){sessionStorage.removeItem("autoFocusObserverPicker")
return true}return false}},"7FcX":function(e,t,a){"use strict"
a.r(t)
var n=a("ouhR")
var o=a.n(n)
var i=a("HGxv")
var r=a("gI0r")
var s=a("RtDj")
var c=a("NQuj")
var l=a("FumF")
var d=a("n0Gy")
var u=a("1L5+")
var m=a("onq7")
var h=a("n12J")
a("r2Yr")
var p=a("q1tI")
var b=a.n(p)
a("17x9")
var g=a("i8i4")
var f=a.n(g)
var v=a("snU/")
var _=a("uloQ")
var y=a("msTH")
var O=a("ZoFV")
var w,S
const j=Object(i["useScope"])("courses_show")
const k=Object(m["a"])({selectedDefaultView:ENV.COURSE.default_view,savedDefaultView:ENV.COURSE.default_view})
class x extends b.a.Component{constructor(...e){super(...e)
this.state={dialogOpen:false}
this.onClick=()=>{this.setState({dialogOpen:true})}
this.onClose=()=>{this.setState({dialogOpen:false})}}render(){return Object(s["a"])("div",{},void 0,b.a.createElement("button",{type:"button",className:"Button button-sidebar-wide choose_home_page_link",ref:e=>this.chooseButton=e,onClick:this.onClick},w||(w=Object(s["a"])("i",{className:"icon-target","aria-hidden":"true"}))," ",j.t("Choose Home Page")),this.state.dialogOpen&&Object(s["a"])(c["a"],{store:this.props.store,open:this.state.dialogOpen,onRequestClose:this.onClose,courseId:ENV.COURSE.id,wikiFrontPageTitle:ENV.COURSE.front_page_title,wikiUrl:ENV.COURSE.pages_url,returnFocusTo:this.chooseButton,isPublishing:false}))}}const V=e=>{Object(v["g"])({env:window.ENV,flashError:e=>Object(_["b"])({message:e,type:"error"}),flashMessage:e=>Object(_["b"])({message:e,type:"info"}),srFlashMessage:o.a.screenReaderFlashMessage,convertApiUserContent:y["a"].convert,dateTimeFormatters:{dateString:o.a.dateString,timeString:o.a.timeString,datetimeString:o.a.datetimeString},forCourse:ENV.COURSE.id}).then(()=>{Object(v["k"])(e)}).catch(()=>{Object(_["b"])({message:j.t("Failed to load the To Do Sidebar"),type:"error"})})}
o()(()=>{var e
o()("#course_status_form").submit(e=>{const t=e.target.elements.namedItem("course[event]")
const a=t&&t.value
const n=ENV.COURSE.id
if("offer"===a){e.preventDefault()
const t=k.getState().savedDefaultView
const a=document.getElementById("choose_home_page_not_modules")
a?O["a"]({courseId:n}).then(({data:e})=>{"modules"===t&&0===e.length?f.a.render(Object(s["a"])(l["a"],{forceOpen:true,store:k,courseId:n,wikiFrontPageTitle:ENV.COURSE.front_page_title,wikiUrl:ENV.COURSE.pages_url,returnFocusTo:o()(".btn-publish").get(0),onSubmit:()=>{"modules"!==k.getState().savedDefaultView&&O["b"]({courseId:n})}}),a):O["b"]({courseId:n})}):O["b"]({courseId:n})}})
const t=document.getElementById("choose_home_page")
t&&f.a.render(S||(S=Object(s["a"])(x,{store:k})),t)
const a=document.querySelector(".todo-list")
a&&V(a)
const n=document.getElementById("observer-picker-mountpoint")
if(n&&null!==(e=ENV.OBSERVER_OPTIONS)&&void 0!==e&&e.OBSERVED_USERS_LIST){var i
f.a.render(Object(s["a"])(h["a"],{as:"div",maxWidth:"12em"},void 0,Object(s["a"])(d["a"],{autoFocus:Object(u["a"])(),canAddObservee:!!(null!==(i=ENV.OBSERVER_OPTIONS)&&void 0!==i&&i.CAN_ADD_OBSERVEE),currentUserRoles:ENV.current_user_roles,currentUser:ENV.current_user,handleChangeObservedUser:Object(u["b"])(),observedUsersList:ENV.OBSERVER_OPTIONS.OBSERVED_USERS_LIST,renderLabel:j.t("Select a student to view. The page will refresh automatically.")})),n)}})
a("dhbk")
a("ESjL")
a("897F")
a("lBOK")
a("w2hD")
var H=a("qqwe")
o.a.fn.openAsDialog=function(e){return this.click(Object(H["a"])(t=>{const a=o()(t.target)
const n={width:550,height:500,title:a.attr("title"),resizable:false,...e}
const i=o()("<div>")
const r=o()("<iframe>",{style:"position:absolute;top:0;left:0;border:none",src:a.attr("href")+"?embedded=1&no_headers=1"})
i.append(r)
i.on("dialogopen",()=>{const e=i.closest(".ui-dialog-content")
r.height(e.outerHeight())
r.width(e.outerWidth())})
return i.dialog(n)}))}
o()(()=>o()("a[data-open-as-dialog]").openAsDialog())
o.a
const C=Object(i["useScope"])("courses.show")
o()(document).ready(()=>{const e=o()("#self_unenrollment_dialog")
o()(".self_unenrollment_link").click(t=>e.dialog({title:C.t("titles.drop_course","Drop this Course")}).fixDialogButtons())
e.on("click",".action",(function(){e.disableWhileLoading(o.a.Deferred())
o.a.ajaxJSON(o()(this).attr("href"),"POST",{},()=>window.location.reload())}))
o()(".re_send_confirmation_link").click((function(e){e.preventDefault()
const t=o()(this)
t.text(C.t("re_sending","Re-Sending..."))
o.a.ajaxJSON(t.attr("href"),"POST",{},e=>t.text(C.t("send_done","Done! Message may take a few minutes.")),e=>t.text(C.t("send_failed","Request failed. Try again.")))}))
o()(".home_page_link").click((function(e){e.preventDefault()
const t=o()(this)
o()(".floating_links").hide()
o()("#course_messages").slideUp(()=>o()(".floating_links").show())
o()("#home_page").slideDown().loadingImage()
t.hide()
o.a.ajaxJSON(o()(this).attr("href"),"GET",{},e=>{o()("#home_page").loadingImage("remove")
let t=Object(r["a"])(o.a.trim(e.wiki_page.body))
0===t.length&&(t=Object(r["a"])(C.t("empty_body","No Content")))
o()("#home_page_content").html(t)
o()("html,body").scrollTo(o()("#home_page"))})}))
o()(".dashboard_view_link").click(e=>{e.preventDefault()
o()(".floating_links").hide()
o()("#course_messages").slideDown(()=>o()(".floating_links").show())
o()("#home_page").slideUp()
o()(".home_page_link").show()})
o()(".publish_course_in_wizard_link").click(e=>{e.preventDefault()
o()("#wizard_box:visible").length>0?o()("#wizard_box .option.publish_step").click():o()("#wizard_box").slideDown("slow",(function(){o()(this).find(".option.publish_step").click()}))})})},"897F":function(e,t,a){"use strict"
var n=a("ouhR")
var o=a.n(n)
var i=a("Y/W1")
var r=a.n(i)
var s=a("qqwe")
a("ESjL")
o.a.fn.fixDialogButtons=function(){return this.each((function(){const e=o()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let a=o.a.map(t.toArray(),t=>{const a=o()(t)
let n=a.attr("class")||""
const i=a.attr("id")
if(a.is(".dialog_closer")){a.off(".fixdialogbuttons")
a.on("click.fixdialogbuttons",Object(s["a"])(()=>e.dialog("close")))}"submit"===a.prop("type")&&a[0].form&&(n+=" button_type_submit")
return{text:a.text(),"data-text-while-loading":a.data("textWhileLoading"),click:()=>a.click(),class:n,id:i}})
a=r.a.sortBy(a,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",a)}}))}},FumF:function(e,t,a){"use strict"
var n=a("RtDj")
var o=a("q1tI")
var i=a.n(o)
a("17x9")
var r=a("NQuj")
var s=a("HGxv")
var c=a("ouhR")
var l=a.n(c)
a("r2Yr")
const d=Object(s["useScope"])("home_page_prompt")
class u extends i.a.Component{constructor(...e){super(...e)
this.state={dialogOpen:true}
this.onClose=()=>{this.setState({dialogOpen:false})}}componentDidMount(){this.flashScreenReaderAlert()}componentWillReceiveProps(e){if(e.forceOpen){this.setState({dialogOpen:true})
this.flashScreenReaderAlert()}}flashScreenReaderAlert(){l.a.screenReaderFlashMessage(d.t("Before publishing your course, you must either publish a module or choose a different home page."))}render(){return this.state.dialogOpen?Object(n["a"])(r["a"],{store:this.props.store,open:this.state.dialogOpen,onRequestClose:this.onClose,courseId:this.props.courseId,wikiFrontPageTitle:this.props.wikiFrontPageTitle,wikiUrl:this.props.wikiUrl,onSubmit:this.props.onSubmit,returnFocusTo:this.props.returnFocusTo,isPublishing:true}):i.a.createElement(i.a.Fragment,null)}}t["a"]=u},GTSS:function(e,t,a){"use strict"
a.d(t,"a",(function(){return x}))
var n=a("rePB")
var o=a("1OyB")
var i=a("vuIU")
var r=a("Ji7U")
var s=a("LK+K")
var c=a("q1tI")
var l=a.n(c)
var d=a("17x9")
var u=a.n(d)
var m=a("TSYQ")
var h=a.n(m)
var p=a("BTe1")
var b=a("J2CL")
var g=a("oXx0")
var f=a("jtGx")
var v=a("/UXv")
function _(e){var t=e.spacing,a=e.borders,n=e.colors,o=e.forms,i=e.shadows,r=e.typography
return{labelColor:n.textDarkest,labelFontFamily:r.fontFamily,labelFontWeight:r.fontWeightNormal,labelLineHeight:r.lineHeightCondensed,background:n.backgroundLightest,borderWidth:a.widthSmall,borderColor:n.borderMedium,hoverBorderColor:n.borderDarkest,controlSize:"0.1875rem",focusBorderColor:n.borderBrand,focusBorderWidth:a.widthMedium,focusBorderStyle:a.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:r.fontSizeSmall,simpleFontSizeMedium:r.fontSizeMedium,simpleFontSizeLarge:r.fontSizeLarge,simpleFacadeMarginEnd:t.xSmall,toggleBorderRadius:a.radiusSmall,toggleBorderWidth:a.widthLarge,toggleBackgroundSuccess:n.backgroundSuccess,toggleBackgroundOff:n.backgroundDark,toggleBackgroundDanger:n.backgroundDanger,toggleBackgroundWarning:n.backgroundWarning,toggleHandleText:n.textLightest,toggleSmallHeight:o.inputHeightSmall,toggleMediumHeight:o.inputHeightMedium,toggleLargeHeight:o.inputHeightLarge,toggleShadow:i.depth1,toggleSmallFontSize:r.fontSizeXSmall,toggleMediumFontSize:r.fontSizeSmall,toggleLargeFontSize:r.fontSizeMedium}}_["canvas-a11y"]=_["canvas-high-contrast"]=function(e){var t=e.colors
return{toggleBackgroundOff:t.backgroundDarkest}}
_.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"],hoverBorderColor:e["ic-brand-font-color-dark"],labelColor:e["ic-brand-font-color-dark"]}}
var y,O,w,S,j
var k={componentId:"Vmatu",template:function(e){return"\n\n.Vmatu_bGBk{position:relative;width:100%}\n\n.Vmatu_bGBk:hover{cursor:default}\n\n.Vmatu_bOnW{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;direction:inherit;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .Vmatu_bOnW{text-align:left}\n\n[dir=rtl] .Vmatu_bOnW{text-align:right}\n\n.Vmatu_cwos,input.Vmatu_cwos[type=radio]{font-size:inherit;left:0;line-height:inherit;margin:0;opacity:0.0001;padding:0;position:absolute;top:0;width:auto}\n\n.Vmatu_ywdX{opacity:0.5}\n\n.Vmatu_ywdX:hover{cursor:not-allowed}\n\n.Vmatu_eXrk{display:inline-block;vertical-align:middle;width:auto}\n\n.Vmatu_blJt{color:".concat(e.labelColor||"inherit",";flex:1 1 auto;font-family:").concat(e.labelFontFamily||"inherit",";font-weight:").concat(e.labelFontWeight||"inherit",";line-height:").concat(e.labelLineHeight||"inherit","}\n\n.Vmatu_cAug .Vmatu_bOnW{align-items:flex-start;display:flex}\n\n.Vmatu_cAug .Vmatu_cSXm{-webkit-margin-end:").concat(e.simpleFacadeMarginEnd||"inherit",";-webkit-margin-start:0;background:").concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:100%;box-sizing:border-box;display:block;flex-shrink:0;margin-inline-end:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-inline-start:0;min-width:1rem;position:relative;transition:all 0.2s ease-out}\n\n[dir=ltr] .Vmatu_cAug .Vmatu_cSXm{margin-left:0;margin-right:").concat(e.simpleFacadeMarginEnd||"inherit","}\n\n[dir=rtl] .Vmatu_cAug .Vmatu_cSXm{margin-left:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-right:0}\n\n.Vmatu_cAug .Vmatu_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",';border-radius:100%;box-sizing:border-box;content:"";height:calc(100% + 0.75rem);left:-0.375rem;opacity:0;pointer-events:none;position:absolute;top:-0.375rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.75rem)}\n\n.Vmatu_cAug.Vmatu_doqw .Vmatu_cSXm{height:').concat(e.simpleFacadeSmallSize||"inherit",";width:").concat(e.simpleFacadeSmallSize||"inherit","}\n\n.Vmatu_cAug.Vmatu_doqw .Vmatu_blJt{font-size:").concat(e.simpleFontSizeSmall||"inherit","}\n\n.Vmatu_cAug.Vmatu_doqw .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetSmall||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug.Vmatu_ycrn .Vmatu_cSXm{height:").concat(e.simpleFacadeMediumSize||"inherit",";width:").concat(e.simpleFacadeMediumSize||"inherit","}\n\n.Vmatu_cAug.Vmatu_ycrn .Vmatu_blJt{font-size:").concat(e.simpleFontSizeMedium||"inherit","}\n\n.Vmatu_cAug.Vmatu_ycrn .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetMedium||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug.Vmatu_cMDj .Vmatu_cSXm{height:").concat(e.simpleFacadeLargeSize||"inherit",";width:").concat(e.simpleFacadeLargeSize||"inherit","}\n\n.Vmatu_cAug.Vmatu_cMDj .Vmatu_blJt{font-size:").concat(e.simpleFontSizeLarge||"inherit","}\n\n.Vmatu_cAug.Vmatu_cMDj .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetLarge||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:hover+.Vmatu_bOnW .Vmatu_cSXm{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{background:").concat(e.background||"inherit",";border-color:").concat(e.hoverBorderColor||"inherit",";box-shadow:inset 0 0 0 ").concat(e.controlSize||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_cSXm{background:").concat(e.background||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_cSXm:before{opacity:1;transform:scale(1)}\n\n.Vmatu_cjSw .Vmatu_bOnW{-ms-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;position:relative;user-select:none}\n\n.Vmatu_cjSw .Vmatu_blJt{align-items:center;display:flex;line-height:1;min-width:0.0625rem;overflow:hidden;position:relative;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;z-index:1}\n\n.Vmatu_cjSw .Vmatu_cSXm{border-radius:").concat(e.toggleBorderRadius||"inherit",";box-shadow:").concat(e.toggleShadow||"inherit",";display:block;height:100%;left:0;top:0;visibility:hidden;width:100%;z-index:1}\n\n.Vmatu_cjSw .Vmatu_cSXm,.Vmatu_cjSw .Vmatu_cSXm:before{box-sizing:border-box;position:absolute}\n\n.Vmatu_cjSw .Vmatu_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",' + 0.0625rem);content:"";height:calc(100% + 0.5rem);left:-0.25rem;opacity:0;top:-0.25rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.5rem)}\n\n.Vmatu_cjSw.Vmatu_cOXX .Vmatu_cSXm{background-color:').concat(e.toggleBackgroundSuccess||"inherit","}\n\n.Vmatu_cjSw.Vmatu_zGXc .Vmatu_cSXm{background-color:").concat(e.toggleBackgroundDanger||"inherit","}\n\n.Vmatu_cjSw.Vmatu_eRqw .Vmatu_cSXm{background-color:").concat(e.toggleBackgroundWarning||"inherit","}\n\n.Vmatu_cjSw.Vmatu_ksNK .Vmatu_cSXm{background-color:").concat(e.toggleBackgroundOff||"inherit","}\n\n.Vmatu_cjSw.Vmatu_doqw .Vmatu_bOnW{height:").concat(e.toggleSmallHeight||"inherit",";padding:0 0.5rem}\n\n.Vmatu_cjSw.Vmatu_doqw .Vmatu_bOnW .Vmatu_blJt{font-size:").concat(e.toggleSmallFontSize||"inherit",";height:").concat(e.toggleSmallHeight||"inherit","}\n\n.Vmatu_cjSw.Vmatu_doqw .Vmatu_bOnW .Vmatu_blJt svg{font-size:calc(").concat(e.toggleSmallFontSize||"inherit"," + 0.375rem)}\n\n.Vmatu_cjSw.Vmatu_ycrn .Vmatu_bOnW{height:").concat(e.toggleMediumHeight||"inherit",";padding:0 0.875rem}\n\n.Vmatu_cjSw.Vmatu_ycrn .Vmatu_bOnW .Vmatu_blJt{font-size:").concat(e.toggleMediumFontSize||"inherit",";height:").concat(e.toggleMediumHeight||"inherit","}\n\n.Vmatu_cjSw.Vmatu_ycrn .Vmatu_bOnW .Vmatu_blJt svg{font-size:calc(").concat(e.toggleMediumFontSize||"inherit"," + 0.375rem)}\n\n.Vmatu_cjSw.Vmatu_cMDj .Vmatu_bOnW{height:").concat(e.toggleLargeHeight||"inherit",";padding:0 1rem}\n\n.Vmatu_cjSw.Vmatu_cMDj .Vmatu_bOnW .Vmatu_blJt{font-size:").concat(e.toggleLargeFontSize||"inherit",";height:").concat(e.toggleLargeHeight||"inherit","}\n\n.Vmatu_cjSw.Vmatu_cMDj .Vmatu_bOnW .Vmatu_blJt svg{font-size:calc(").concat(e.toggleLargeFontSize||"inherit"," + 0.375rem)}\n\n.Vmatu_cjSw .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{visibility:visible}\n\n.Vmatu_cjSw .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_blJt{color:").concat(e.toggleHandleText||"inherit","}\n\n.Vmatu_cjSw .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_blJt{text-decoration:underline}\n\n.Vmatu_cjSw .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_cSXm:before{opacity:1;transform:scale(1)}")},root:"Vmatu_bGBk",control:"Vmatu_bOnW",input:"Vmatu_cwos",disabled:"Vmatu_ywdX",inline:"Vmatu_eXrk",label:"Vmatu_blJt",simple:"Vmatu_cAug",facade:"Vmatu_cSXm",small:"Vmatu_doqw",medium:"Vmatu_ycrn",large:"Vmatu_cMDj",toggle:"Vmatu_cjSw",success:"Vmatu_cOXX",danger:"Vmatu_zGXc",warning:"Vmatu_eRqw",off:"Vmatu_ksNK"}
var x=(y=Object(g["a"])(),O=Object(b["j"])(_,k),y(w=O(w=(j=S=function(e){Object(r["a"])(a,e)
var t=Object(s["a"])(a)
function a(e){var n
Object(o["a"])(this,a)
n=t.call(this,e)
n.handleClick=function(e){if(n.props.disabled||n.props.readOnly){e.preventDefault()
return}n.props.onClick(e)}
n.handleChange=function(e){if(n.props.disabled||n.props.readOnly){e.preventDefault()
return}"undefined"===typeof n.props.checked&&n.setState({checked:!n.state.checked})
n.props.onChange(e)}
n.state={}
"undefined"===typeof e.checked&&(n.state.checked=false)
n._defaultId=Object(p["a"])("RadioInput")
return n}Object(i["a"])(a,[{key:"focus",value:function(){this._input.focus()}},{key:"render",value:function(){var e,t=this
var o=this.props,i=o.disabled,r=o.readOnly,s=o.label,c=o.variant,d=o.size,u=o.inline,m=o.context,p=o.value,b=o.name
var g=Object(f["a"])(this.props,a.propTypes)
var v=(e={},Object(n["a"])(e,k.root,true),Object(n["a"])(e,k.disabled,i),Object(n["a"])(e,k[c],true),Object(n["a"])(e,k[m],"toggle"===c),Object(n["a"])(e,k[d],true),Object(n["a"])(e,k["inline"],u),e)
return l.a.createElement("div",{className:h()(v)},l.a.createElement("input",Object.assign({},g,{id:this.id,ref:function(e){t._input=e},value:p,name:b,checked:this.checked,type:"radio",className:k.input,disabled:i||r,"aria-disabled":i||r?"true":null,onChange:this.handleChange,onClick:this.handleClick})),l.a.createElement("label",{className:k.control,htmlFor:this.id},l.a.createElement("span",{className:k.facade,"aria-hidden":"true"}),l.a.createElement("span",{className:k.label},s)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(v["a"])(this._input)}},{key:"checked",get:function(){return"undefined"===typeof this.props.checked?this.state.checked:this.props.checked}}])
a.displayName="RadioInput"
return a}(c["Component"]),S.propTypes={label:u.a.node.isRequired,value:u.a.oneOfType([u.a.string,u.a.number]),id:u.a.string,name:u.a.string,checked:u.a.bool,disabled:u.a.bool,readOnly:u.a.bool,variant:u.a.oneOf(["simple","toggle"]),size:u.a.oneOf(["small","medium","large"]),context:u.a.oneOf(["success","warning","danger","off"]),inline:u.a.bool,onClick:u.a.func,onChange:u.a.func},S.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},j))||w)||w)},HMVb:function(e,t,a){"use strict"
a.d(t,"a",(function(){return d}))
var n=a("ODXe")
var o=a("i/8D")
var i=a("DUTp")
var r=a("IPIv")
var s={}
function c(e,t){if(!o["a"])return 16
var a=e||Object(i["a"])(e).documentElement
if(!t&&s[a])return s[a]
var n=parseInt(Object(r["a"])(a).getPropertyValue("font-size"))
s[a]=n
return n}var l=a("CyAq")
function d(e,t){var a=t||document.body
if(!e||"number"===typeof e)return e
var o=Object(l["a"])(e),i=Object(n["a"])(o,2),r=i[0],s=i[1]
return"rem"===s?r*c():"em"===s?r*c(a):r}},Ipg6:function(e,t,a){"use strict"
a.d(t,"a",(function(){return d}))
var n=a("ouhR")
var o=a.n(n)
var i=a("FOCd")
var r=a("08kA")
var s=a.n(r)
var c=a("etQE")
function l({path:e,params:t}){const a=o.a.param(t)
if(!a.length)return e
return`${e}?${a}`}async function d({path:e,method:t="GET",headers:a={},params:n={},body:o,fetchOpts:r={}}){const d={...c["e"]}
d.headers["X-CSRF-Token"]=Object(i["a"])("_csrf_token")
if(o&&"string"!==typeof o){o=JSON.stringify(o)
d.headers["Content-Type"]="application/json"}Object.assign(d.headers,a)
Object.assign(d,r)
const u=l({path:e,params:n})
const m=await fetch(u,{body:o,method:t,...d})
if(!m.ok){const e=new Error(`doFetchApi received a bad response: ${m.status} ${m.statusText}`)
Object.assign(e,{response:m})
throw e}const h=m.headers.get("Link")
const p=h&&s()(h)||void 0
const b=await m.text()
const g=b.length>0?JSON.parse(b):void 0
return{json:g,response:m,link:p}}},"M8//":function(e,t,a){"use strict"
a.d(t,"a",(function(){return M}))
var n=a("rePB")
var o=a("1OyB")
var i=a("vuIU")
var r=a("Ji7U")
var s=a("LK+K")
var c=a("q1tI")
var l=a.n(c)
var d=a("17x9")
var u=a.n(d)
var m=a("TSYQ")
var h=a.n(m)
var p=a("cClk")
var b=a("sTNg")
var g=a("yfCu")
var f=a("8o96")
var v=a("ISHz")
var _=a("/UXv")
var y=a("eGSd")
var O=a("BTe1")
var w=a("HMVb")
var S=a("J2CL")
var j=a("oXx0")
var k=a("jtGx")
function x(e){var t=e.colors,a=e.borders,n=e.spacing,o=e.typography,i=e.forms
return{fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderWidth:a.widthSmall,borderStyle:a.style,borderTopColor:t.borderMedium,borderRightColor:t.borderMedium,borderBottomColor:t.borderMedium,borderLeftColor:t.borderMedium,borderRadius:a.radiusMedium,padding:n.small,focusOutlineColor:t.borderBrand,focusOutlineWidth:a.widthMedium,focusOutlineStyle:a.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:o.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:o.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:o.fontSizeLarge,largeHeight:i.inputHeightLarge}}x.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var V,H,C,B,z
var D={componentId:"chpSa",template:function(e){return"\n\n.chpSa_byIz{position:relative}\n\n.chpSa_cPAP{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-bottom-color:").concat(e.borderBottomColor||"inherit",";border-collapse:separate;border-image:none;border-left-color:").concat(e.borderLeftColor||"inherit",";border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-right-color:").concat(e.borderRightColor||"inherit",";border-spacing:0;border-style:").concat(e.borderStyle||"inherit",";border-top-color:").concat(e.borderTopColor||"inherit",";border-width:").concat(e.borderWidth||"inherit",";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\n\n[dir=ltr] .chpSa_blLZ{text-align:left}\n\n[dir=rtl] .chpSa_blLZ{text-align:right}\n\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\n\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.chpSa_blLZ:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.chpSa_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.chpSa_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.chpSa_cMDj{font-size:").concat(e.largeFontSize||"inherit","}")},layout:"chpSa_byIz",outline:"chpSa_cPAP",textarea:"chpSa_blLZ",disabled:"chpSa_ywdX",small:"chpSa_doqw",medium:"chpSa_ycrn",large:"chpSa_cMDj"}
var M=(V=Object(j["a"])(),H=Object(S["j"])(x,D),V(C=H(C=(z=B=function(e){Object(r["a"])(a,e)
var t=Object(s["a"])(a)
function a(){var e
Object(o["a"])(this,a)
e=t.call(this)
e._textareaResize=function(t){var a=e._textarea.style.height
if(a!=e._height){e._manuallyResized=true
e._textarea.style.overflowY="auto"
e._container.style.minHeight=a}}
e.grow=function(t){if(!e._textarea||e._manuallyResized)return
var a=e._textarea.offsetHeight-e._textarea.clientHeight
var n=""
e._textarea.style.height="auto"
e._textarea.style.overflowY="hidden"
n=e._textarea.scrollHeight+a+"px"
var o=Object(w["a"])(e.props.maxHeight,e._container)
if(e.props.maxHeight&&e._textarea.scrollHeight>o)e._textarea.style.overflowY="auto"
else if(e.props.height)if(""===e._textarea.value)n=e.props.height
else if(Object(w["a"])(e.props.height,e._container)>e._textarea.scrollHeight){e._textarea.style.overflowY="auto"
n=e.props.height}var i=Object(w["a"])(n)>o
i||(e._container.style.minHeight=n)
e._height=n
e._textarea.style.height=n}
e.handleChange=function(t){var a=e.props,n=a.onChange,o=a.value,i=a.disabled,r=a.readOnly
if(i||r){t.preventDefault()
return}"undefined"===typeof o&&e.autoGrow()
"function"===typeof n&&n(t)}
e.handleContainerRef=function(t){e._container=t}
e._defaultId=Object(O["a"])("TextArea")
return e}Object(i["a"])(a,[{key:"componentDidMount",value:function(){this.autoGrow()}},{key:"componentDidUpdate",value:function(){this.autoGrow()}},{key:"componentWillUnmount",value:function(){this._listener&&this._listener.remove()
this._textareaResizeListener&&this._textareaResizeListener.remove()
this._request&&this._request.cancel()
this._debounced&&this._debounced.cancel()}},{key:"autoGrow",value:function(){if(this.props.autoGrow){this._debounced||(this._debounced=Object(y["a"])(this.grow,200,{leading:false,trailing:true}))
this._listener||(this._listener=Object(g["a"])(window,"resize",this._debounced))
this._textarea&&!this._textareaResizeListener&&(this._textareaResizeListener=Object(f["a"])(this._textarea,this._textareaResize,["height"]))
this._request=Object(v["a"])(this.grow)}}},{key:"focus",value:function(){this._textarea.focus()}},{key:"render",value:function(){var e,t=this
var o=this.props,i=o.autoGrow,r=o.placeholder,s=o.value,c=o.defaultValue,d=o.disabled,u=o.readOnly,m=o.required,p=o.width,g=o.height,f=o.maxHeight,v=o.textareaRef,_=o.resize,y=o.size
var O=Object(k["a"])(this.props,a.propTypes)
var w=(e={},Object(n["a"])(e,D.textarea,true),Object(n["a"])(e,D[y],true),Object(n["a"])(e,D.disabled,d),e)
var S={width:p,resize:_,height:i?null:g,maxHeight:f}
var j=l.a.createElement("textarea",Object.assign({},O,{value:s,defaultValue:c,placeholder:r,ref:function(e){t._textarea=e
for(var a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o]
v.apply(t,[e].concat(n))},style:S,id:this.id,required:m,"aria-required":m,"aria-invalid":this.invalid?"true":null,disabled:d||u,className:h()(w),onChange:this.handleChange}))
return l.a.createElement(b["a"],Object.assign({},Object(k["c"])(this.props,b["a"].propTypes),{vAlign:"top",id:this.id,ref:function(e){t._node=e}}),l.a.createElement("div",{className:D.layout,style:{width:p,maxHeight:f},ref:this.handleContainerRef},j,d||u?null:l.a.createElement("span",{className:D.outline,"aria-hidden":"true"})))}},{key:"minHeight",get:function(){return this._textarea.style.minHeight}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(_["a"])(this._textarea)}},{key:"value",get:function(){return this._textarea.value}}])
a.displayName="TextArea"
return a}(c["Component"]),B.propTypes={label:u.a.node.isRequired,id:u.a.string,size:u.a.oneOf(["small","medium","large"]),layout:u.a.oneOf(["stacked","inline"]),autoGrow:u.a.bool,resize:u.a.oneOf(["none","both","horizontal","vertical"]),width:u.a.string,height:u.a.string,maxHeight:u.a.oneOfType([u.a.number,u.a.string]),messages:u.a.arrayOf(b["d"].message),inline:u.a.bool,placeholder:u.a.string,disabled:u.a.bool,readOnly:u.a.bool,required:u.a.bool,textareaRef:u.a.func,defaultValue:u.a.string,value:Object(p["a"])(u.a.string),onChange:u.a.func},B.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},z))||C)||C)},MfTp:function(e,t,a){"use strict"
a.d(t,"b",(function(){return i}))
a.d(t,"c",(function(){return r}))
a.d(t,"a",(function(){return s}))
var n=a("plYi")
var o=a("Ipg6")
const i=e=>e?e.map(e=>({id:e.id,name:e.name,avatarUrl:e.avatar_url})):[]
const r=(e,t,a)=>{const o=e.filter(e=>e.observed_user).reduce((e,t)=>{e.some(e=>e.id===t.observed_user.id)||e.push({id:t.observed_user.id,name:t.observed_user.name,sortableName:t.observed_user.sortable_name,avatarUrl:t.observed_user.avatar_url})
return e},[]).sort((e,t)=>n["a"].strings(e.sortableName,t.sortableName))
t||o.unshift({id:a.id,name:a.display_name,avatarUrl:a.avatar_image_url})
return o}
const s=e=>Object(o["a"])({path:`/api/v1/users/${e}/show_k5_dashboard`}).then(({json:e})=>e.k5_user)},NQuj:function(e,t,a){"use strict"
var n=a("RtDj")
var o=a("q1tI")
var i=a.n(o)
a("17x9")
var r=a("BrAc")
var s=a("6ohZ")
var c=a("/5Zp")
var l=a("GTSS")
var d=a("Xx/m")
var u=a("8t0o")
var m=a("ZbPE")
var h=a("l9BP")
var p=a("6SzX")
var b=a("HGxv")
a("rJZq")
var g
const f=Object(b["useScope"])("course_home_dialog")
class v extends i.a.Component{constructor(e){super(e)
this.onClose=()=>{window.setTimeout(()=>{const e=this.props.returnFocusTo
e&&e.focus()})}
this.onStoreChange=()=>{this.setState(this.props.store.getState())}
this.onSubmit=()=>{const{selectedDefaultView:e,savedDefaultView:t}=this.state
let a
a=e!==t?r["a"].put("/api/v1/courses/"+this.props.courseId,{course:{default_view:this.state.selectedDefaultView}}).then(({data:e})=>e.default_view):Promise.resolve(t)
a.then(e=>{this.props.store.setState({savedDefaultView:e})
this.props.onSubmit()})}
this.onChange=e=>{this.props.store.setState({selectedDefaultView:e})}
this.state=e.store.getState()}renderWikiLabelContent(){var e
const{wikiUrl:t,wikiFrontPageTitle:a}=this.props
if(a)return Object(n["a"])("span",{},void 0,Object(n["a"])(m["a"],{size:"small",color:"secondary"},void 0,"  ",e||(e=Object(n["a"])("i",{},void 0,a)),"  [",Object(n["a"])(u["a"],{href:t},void 0,f.t("Change")),"]"))
return Object(n["a"])("span",{},void 0,g||(g=Object(n["a"])(h["a"],{},void 0,"*")),Object(n["a"])(p["a"],{},void 0,Object(n["a"])(u["a"],{href:t},void 0,f.t("Front Page must be set first"))))}renderWikiLabel(){return Object(n["a"])("span",{},void 0,f.t("Pages Front Page"),this.renderWikiLabelContent())}render(){const{selectedDefaultView:e}=this.state
const{wikiFrontPageTitle:t,wikiUrl:a}=this.props
const o=[{value:"feed",get label(){return f.t("Course Activity Stream")},checked:"feed"===e},{value:"wiki",label:this.renderWikiLabel(),checked:"wiki"===e,disabled:!t},{value:"modules",get label(){return f.t("Course Modules")},checked:"modules"===e},{value:"assignments",get label(){return f.t("Assignments List")},checked:"assignments"===e},{value:"syllabus",get label(){return f.t("Syllabus")},checked:"syllabus"===e}]
const i=this.props.isPublishing?f.t("Before publishing your course, you must either publish a module in the Modules page, or choose a different home page."):f.t("Select what you'd like to display on the home page.")
return Object(n["a"])(s["a"],{open:this.props.open,transition:"fade",label:f.t("Choose Course Home Page"),onDismiss:this.props.onRequestClose,onClose:this.onClose},void 0,Object(n["a"])(s["a"].Body,{},void 0,Object(n["a"])("div",{className:"content-box-mini",style:{marginTop:"0"}},void 0,Object(n["a"])(h["a"],{},void 0,Object(n["a"])(m["a"],{weight:"bold",size:"small"},void 0,i))),Object(n["a"])(c["a"],{description:Object(n["a"])(p["a"],{},void 0,i),name:"course[default_view]",onChange:(e,t)=>this.onChange(t),defaultValue:e},void 0,o.map(e=>Object(n["a"])(l["a"],{checked:e.checked,value:e.value,label:e.label,disabled:e.disabled},e.value))),t?null:Object(n["a"])("div",{className:"content-box-mini"},void 0,"*",Object(n["a"])(u["a"],{href:a,isWithinText:false,theme:{mediumPaddingHorizontal:"0",mediumHeight:"1.5rem"}},void 0,f.t("Front Page must be set first")))),Object(n["a"])(s["a"].Footer,{},void 0,Object(n["a"])(d["a"],{onClick:this.props.onRequestClose,margin:"0 x-small"},void 0,f.t("Cancel")),Object(n["a"])(d["a"],{onClick:this.onSubmit,disabled:this.props.isPublishing&&"modules"===this.state.selectedDefaultView,color:"primary"},void 0,this.props.isPublishing?f.t("Choose and Publish"):f.t("Save"))))}componentDidMount(){this.props.store.addChangeListener(this.onStoreChange)}componentWillUnmount(){this.props.store.removeChangeListener(this.onStoreChange)}}v.defaultProps={onSubmit:()=>{window.location.reload()},wikiFrontPageTitle:null}
t["a"]=v},RqKb:function(e,t,a){"use strict"
a.d(t,"a",(function(){return m}))
var n=a("VTBJ")
var o=a("1OyB")
var i=a("vuIU")
var r=a("Ji7U")
var s=a("LK+K")
var c=a("q1tI")
var l=a.n(c)
var d=a("hPGw")
var u=l.a.createElement("path",{d:"M915.743529 213L915.743529 915.743529 213 915.743529 213 1003.58647 915.743529 1003.58647 915.743529 1706.33 1003.58647 1706.33 1003.58647 1003.58647 1706.33 1003.58647 1706.33 915.743529 1003.58647 915.743529 1003.58647 213z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){Object(r["a"])(a,e)
var t=Object(s["a"])(a)
function a(){Object(o["a"])(this,a)
return t.apply(this,arguments)}Object(i["a"])(a,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconAdd",viewBox:"0 0 1920 1920"}),u)}}])
a.displayName="IconAddLine"
return a}(c["Component"])
m.glyphName="add"
m.variant="Line"
m.propTypes=Object(n["a"])({},d["a"].propTypes)},WEeK:function(e,t,a){"use strict"
a.d(t,"a",(function(){return D}))
var n=a("rePB")
var o=a("Ff2n")
var i=a("1OyB")
var r=a("vuIU")
var s=a("Ji7U")
var c=a("LK+K")
var l=a("q1tI")
var d=a.n(l)
var u=a("17x9")
var m=a.n(u)
var h=a("TSYQ")
var p=a.n(h)
var b=a("cClk")
var g=a("nAyT")
var f=a("jtGx")
var v=a("E+IV")
var _=a("tCl5")
var y=a("/UXv")
var O=a("sTNg")
var w=a("TstA")
var S=a("BTe1")
var j=a("J2CL")
function k(e){var t=e.colors,a=e.typography,n=e.borders,o=e.spacing,i=e.forms
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,borderWidth:n.widthSmall,borderStyle:n.style,borderColor:t.borderMedium,borderRadius:n.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:o.small,focusOutlineWidth:n.widthMedium,focusOutlineStyle:n.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:a.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:a.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:a.fontSizeLarge,largeHeight:i.inputHeightLarge}}k.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var x,V,H,C,B
var z={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var D=(x=Object(g["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),V=Object(j["j"])(k,z),x(H=V(H=(B=C=function(e){Object(s["a"])(a,e)
var t=Object(c["a"])(a)
function a(e){var n
Object(i["a"])(this,a)
n=t.call(this)
n.handleInputRef=function(e){n._input=e
n.props.inputRef(e)}
n.handleChange=function(e){n.props.onChange(e,e.target.value)}
n.handleBlur=function(e){n.props.onBlur(e)
n.setState({hasFocus:false})}
n.handleFocus=function(e){n.props.onFocus(e)
n.setState({hasFocus:true})}
n.state={hasFocus:false}
n._defaultId=Object(S["a"])("TextInput")
n._messagesId=Object(S["a"])("TextInput-messages")
return n}Object(r["a"])(a,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,a=t.type,i=t.size,r=t.htmlSize,s=(t.display,t.textAlign),c=t.placeholder,l=t.value,u=t.defaultValue,m=t.required,h=t.isRequired,b=Object(o["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var g=Object(f["b"])(b)
var v=this.interaction
var _=(e={},Object(n["a"])(e,z.input,true),Object(n["a"])(e,z[i],i),Object(n["a"])(e,z["textAlign--".concat(s)],s),e)
var y=""
g["aria-describedby"]&&(y="".concat(g["aria-describedby"]))
this.hasMessages&&(y=""!==y?"".concat(y," ").concat(this._messagesId):this._messagesId)
return d.a.createElement("input",Object.assign({},g,{className:p()(_),defaultValue:u,value:l,placeholder:c,ref:this.handleInputRef,type:a,id:this.id,required:h||m,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===v,readOnly:"readonly"===v,"aria-describedby":""!==y?y:null,size:r,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,a=t.width,o=t.inline,i=t.display,r=t.label,s=t.renderLabel,c=t.renderBeforeInput,l=t.renderAfterInput,u=t.messages,m=t.inputContainerRef,h=t.icon,b=t.shouldNotWrap
var g=this.interaction
var f=c||l||h
var _=(e={},Object(n["a"])(e,z.facade,true),Object(n["a"])(e,z.disabled,"disabled"===g),Object(n["a"])(e,z.invalid,this.invalid),Object(n["a"])(e,z.focused,this.state.hasFocus),e)
return d.a.createElement(O["a"],{id:this.id,label:Object(v["a"])(s||r),messagesId:this._messagesId,messages:u,inline:"inline-block"===i||o,width:a,inputContainerRef:m,layout:this.props.layout},d.a.createElement("span",{className:p()(_)},f?d.a.createElement(w["a"],{wrap:b?"no-wrap":"wrap"},c&&d.a.createElement(w["a"].Item,{padding:"0 0 0 small"},Object(v["a"])(c)),d.a.createElement(w["a"].Item,{shouldGrow:true,shouldShrink:true},d.a.createElement(w["a"],null,d.a.createElement(w["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(l||h)&&d.a.createElement(w["a"].Item,{padding:"0 small 0 0"},l?Object(v["a"])(l):Object(v["a"])(h))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(_["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(y["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
a.displayName="TextInput"
return a}(l["Component"]),C.propTypes={renderLabel:m.a.oneOfType([m.a.node,m.a.func]),type:m.a.oneOf(["text","email","url","tel","search","password"]),id:m.a.string,value:Object(b["a"])(m.a.string),defaultValue:m.a.string,interaction:m.a.oneOf(["enabled","disabled","readonly"]),messages:m.a.arrayOf(O["d"].message),size:m.a.oneOf(["small","medium","large"]),textAlign:m.a.oneOf(["start","center"]),width:m.a.string,htmlSize:m.a.oneOfType([m.a.string,m.a.number]),display:m.a.oneOf(["inline-block","block"]),shouldNotWrap:m.a.bool,placeholder:m.a.string,isRequired:m.a.bool,inputRef:m.a.func,inputContainerRef:m.a.func,renderBeforeInput:m.a.oneOfType([m.a.node,m.a.func]),renderAfterInput:m.a.oneOfType([m.a.node,m.a.func]),onChange:m.a.func,onBlur:m.a.func,onFocus:m.a.func,icon:m.a.func,label:m.a.oneOfType([m.a.node,m.a.func]),required:m.a.bool,inline:m.a.bool},C.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},B))||H)||H)},ZoFV:function(e,t,a){"use strict"
a.d(t,"b",(function(){return c}))
a.d(t,"a",(function(){return l}))
var n=a("BrAc")
var o=a("HGxv")
var i=a("ouhR")
var r=a.n(i)
const s=Object(o["useScope"])("modules_home_page")
const c=({courseId:e})=>{n["a"].put("/api/v1/courses/"+e,{course:{event:"offer"}}).then(()=>{window.location.reload()}).catch(e=>{401===e.response.status&&"unverified"===e.response.data.status?r.a.flashWarning(s.t("Complete registration by clicking the “finish the registration process” link sent to your email.")):r.a.flashError(s.t("An error ocurred while publishing course"))})}
const l=({courseId:e})=>n["a"].get(`/api/v1/courses/${e}/modules`)},cClk:function(e,t,a){"use strict"
a.d(t,"a",(function(){return n}))
function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(n,o,i){var r=e.apply(null,arguments)
if(r)return r
if(n[o]&&"function"!==typeof n[t])return new Error(["You provided a '".concat(o,"' prop without an '").concat(t,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(a,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},lBOK:function(e,t,a){"use strict"
var n=a("ouhR")
var o=a.n(n)
o.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const a=this.filter(":first")
let n
if("hide"===e||"remove"===e){a.children(".loading_image").remove()
n=a.data("loading_images")||[]
n.forEach(e=>{e&&e.remove()})
a.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){a.children(".loading_image").remove()
n=a.data("loading_images")||[]
const e=n.pop()
e&&e.remove()
a.data("loading_images",n)
return this}if("register_image"===e&&3===arguments.length){o.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=o.a.extend({},o.a.fn.loadingImg.defaults,e)
let i=o.a.fn.loadingImg.image_files.normal
e.image_size&&o.a.fn.loadingImg.image_files[e.image_size]&&(i=o.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let r=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)r=a.outerHeight()
else if("middle"===e.vertical)r=a.outerHeight()/2-i.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}let s=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)s=a.outerWidth()-i.width
else if("right!"===e.horizontal){s="ltr"===t?a.outerWidth()+5:-5-(i.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)s=a.outerWidth()/2-i.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}const c=a.zIndex()+1
const l=o()(document.createElement("div")).addClass("loading_image_holder")
const d=o()(document.createElement("img")).attr("src",i.url)
l.append(d)
n=a.data("loading_images")||[]
n.push(l)
a.data("loading_images",n)
if(a.css("position")&&"static"!==a.css("position")){l.css({zIndex:c,position:"absolute",top:r,left:s})
a.append(l)}else{const t=a.offset()
let n=t.top,i=t.left
e.vertical&&(n+=r)
e.horizontal&&(i+=s)
l.css({zIndex:c,position:"absolute",top:n,left:i})
o()("body").append(l)}return o()(this)}
o.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
o.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
o.a.fn.loadingImage=o.a.fn.loadingImg},msTH:function(e,t,a){"use strict"
var n=a("ouhR")
var o=a.n(n)
var i=a("Y/W1")
var r=a.n(i)
var s=a("gI0r")
var c=a("HGxv")
const l=Object(c["useScope"])("user_content")
const d={translateMathmlForScreenreaders(e){var t,a
if(!(null!==(t=ENV)&&void 0!==t&&null!==(a=t.FEATURES)&&void 0!==a&&a.new_math_equation_handling)){const t=o()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const a=o()('<span class="hidden-readable"></span>')
a.html(t)
return a}},toMediaCommentLink(e){const t=o()(`<a\n        id='media_comment_${Object(s["a"])(o()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(o()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(o()(e).attr("data-alt"))}'\n      />`)
t.html(o()(e).html())
return t},convert(e,t={}){const a=o()("<div />").html(e)
a.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
a.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){a.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=o()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=r.a.uniqueId("uc_")
let a="/object_snippet"
ENV.files_domain&&(a=`//${ENV.files_domain}${a}`)
const n=o()(`<form\n            action='${Object(s["a"])(a)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
n.append(o()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(o()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
o()("body").append(n)
setTimeout(()=>n.submit(),0)
return o()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(l.t("User Content"))}'\n          />`)}))
a.find("img.equation_image").each((e,t)=>{const a=o()(t)
const n=d.translateMathmlForScreenreaders(a)
a.removeAttr("x-canvaslms-safe-mathml")
a.after(n)})}return a.html()}}
t["a"]=d},n0Gy:function(e,t,a){"use strict"
a.d(t,"b",(function(){return C}))
var n=a("RtDj")
var o=a("q1tI")
var i=a("17x9")
var r=a.n(i)
var s=a("HGxv")
var c=a("n12J")
var l=a("6SzX")
var d=a("l9BP")
var u=a("RqKb")
var m=a("uNh2")
var h=a("ZbPE")
var p=a("/WiN")
var b=a("uloQ")
var g=a("Ipg6")
var f=a("vGBm")
var v=a("Dibh")
var _=a("Mmr1")
var y=a("Xx/m")
var O=a("msMH")
var w=a("WEeK")
const S=Object(s["useScope"])("add_student_modal")
const j=({open:e,handleClose:t,currentUserId:a,onStudentPaired:i})=>{const r=Object(o["useRef"])(null)
const[s,d]=Object(o["useState"])(null)
const u='<a target="canvas_guides" href="https://community.canvaslms.com/t5/Student-Guide/How-do-I-generate-a-pairing-code-for-an-observer-as-a-student/ta-p/418">$1</a>'
const m=e=>{d(e)
setTimeout(()=>{d([])},1e4)}
const p=()=>{const e=r.current.value
e?f(e):m([{text:S.t("Please provide a pairing code."),type:"error"}])}
const f=async e=>{try{const{response:n}=await Object(g["a"])({method:"POST",path:`/api/v1/users/${a}/observees`,body:{pairing_code:e}})
Object(b["b"])({message:S.t("Student paired successfully"),type:"success"})
n.ok&&i()
t()}catch(e){m([{text:S.t("Invalid pairing code."),type:"error"}])
Object(b["b"])({message:S.t("Failed pairing student."),type:"error"})}}
return Object(n["a"])(v["a"],{open:e,onDismiss:t,size:"small",label:S.t("Pair with student"),shouldCloseOnDocumentClick:true,theme:{smallMaxWidth:"27em"}},void 0,Object(n["a"])(v["a"].Header,{},void 0,Object(n["a"])(_["a"],{placement:"end",offset:"small",onClick:t,screenReaderLabel:"Close"}),Object(n["a"])(O["a"],{},void 0,S.t("Pair with student"))),Object(n["a"])(v["a"].Body,{},void 0,Object(n["a"])(h["a"],{},void 0,S.t("Enter a student pairing code below to add a student to observe.")),Object(n["a"])(c["a"],{as:"div",padding:"small 0 x-small 0"},void 0,Object(n["a"])(w["a"],{"data-testid":"pairing-code-input",messages:s,renderLabel:Object(n["a"])(l["a"],{},void 0,S.t("Pairing code")),inputRef:e=>{r.current=e},placeholder:S.t("Pairing code"),onChange:()=>{s&&d([])}})),Object(n["a"])(c["a"],{as:"div",display:"inline-block",dangerouslySetInnerHTML:{__html:S.t("Visit *Canvas Guides* to learn more.",{wrappers:[u]})}})),Object(n["a"])(v["a"].Footer,{},void 0,Object(n["a"])(y["a"],{"data-testid":"close-modal",onClick:t,margin:"0 x-small 0 0"},void 0,S.t("Close")),Object(n["a"])(y["a"],{"data-testid":"add-student-btn",onClick:p,color:"primary"},void 0,S.t("Pair"))))}
var k=j
var x=a("MfTp")
const V=Object(s["useScope"])("observer_options")
const H=({observedUsersList:e,currentUser:t,handleChangeObservedUser:a,margin:i,canAddObservee:r,currentUserRoles:s,autoFocus:v,renderLabel:_})=>{const[y,O]=Object(o["useState"])(()=>Object(x["b"])(e))
const[w,S]=Object(o["useState"])("")
const[j,H]=Object(o["useState"])(null)
const[C,B]=Object(o["useState"])(false)
const z=null===s||void 0===s?void 0:s.every(e=>"user"===e||"observer"===e)
const D=Object(o["useCallback"])(e=>{S(e.name)
H(e)
a(e.id)
Object(f["b"])(t.id,e.id)},[t.id,a])
const M=Object(o["useCallback"])(e=>{const t=y.find(t=>t.id===e)
D(t)},[y,D])
Object(o["useEffect"])(()=>{if(y.length>0){const e=Object(f["c"])(t.id)
const a=y.find(t=>t.id===e)
D(a||y[0])}},[])
const I=async()=>{try{const{json:e}=await Object(g["a"])({path:"/api/v1/users/self/enrollments",params:{type:["ObserverEnrollment"],include:["avatar_url","observed_users"],per_page:100}})
const a=Object(x["c"])(e,z,t)
const n=a.reduce((e,t)=>y.findIndex(e=>e.id===t.id)<0?t:e)
O(a)
D(n)}catch(e){Object(b["b"])({message:V.t("Unable to get observed students"),err:e,type:"error"})}}
const q=e=>{if(!e)return
const t=e.avatarUrl&&!e.avatarUrl.includes("avatar-50.png")?e.avatarUrl:void 0
return Object(n["a"])(m["a"],{name:e.name,src:t,size:"xx-small",margin:"auto 0"})}
const F=q(j)
const E=Object(n["a"])(p["a"].Option,{id:"new-student-option",value:"new",renderBeforeLabel:e=>Object(n["a"])(u["a"],{color:e.isHighlighted?null:"brand"})},"new",e=>Object(n["a"])(h["a"],{color:e.isHighlighted?null:"brand"},void 0,V.t("Add Student")))
const R=()=>{B(false)}
const T=e=>{"new-student-option"===e?B(true):M(e)}
if(y.length>1||r){const e=y.filter(e=>e.name.toLowerCase().includes(w.toLowerCase())||j.name.toLowerCase()===w.toLowerCase()).map(e=>Object(n["a"])(p["a"].Option,{id:e.id,value:e.id,renderBeforeLabel:q(e)},e.id,e.name))
r&&e.push(E)
return Object(n["a"])(c["a"],{as:"div",margin:i},void 0,Object(n["a"])(p["a"],{autoFocus:!!v,"data-testid":"observed-student-dropdown",inputValue:w,renderLabel:Object(n["a"])(l["a"],{},void 0,_||V.t("Select a student to view")),noOptionsLabel:V.t("No Results"),onInputChange:e=>S(e.target.value),onOptionSelected:(e,t)=>{T(t)},selectedOptionId:null===j||void 0===j?void 0:j.id,renderBeforeInput:F,shouldNotWrap:true},void 0,e),r&&Object(n["a"])(k,{open:C,handleClose:R,currentUserId:t.id,onStudentPaired:I}))}return 1===y.length&&y[0].id!==t.id?Object(n["a"])(c["a"],{as:"div",margin:i},void 0,Object(n["a"])(d["a"],{alt:V.t("You are observing %{observedUser}",{observedUser:y[0].name})},void 0,Object(n["a"])(h["a"],{as:"div","data-testid":"observed-student-label"},void 0,F," ",y[0].name))):null}
r.a.arrayOf(r.a.shape({id:r.a.string.isRequired,name:r.a.string.isRequired,avatar_url:r.a.string}))
const C=(e,t)=>e.length>1||1===e.length&&e[0].id!==t.id
t["a"]=H},plYi:function(e,t,a){"use strict"
var n=a("HGxv")
t["a"]={strings(e,t){let a=n["default"].locale||"en-US"
const o={zh_Hant:"zh-Hant"}
a=o[a]||a
return e.localeCompare(t,a,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,a)=>this.strings(e(t),e(a))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},"rf+m":function(e,t,a){"use strict"
a.d(t,"a",(function(){return m}))
var n=a("VTBJ")
var o=a("1OyB")
var i=a("vuIU")
var r=a("Ji7U")
var s=a("LK+K")
var c=a("q1tI")
var l=a.n(c)
var d=a("hPGw")
var u=l.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){Object(r["a"])(a,e)
var t=Object(s["a"])(a)
function a(){Object(o["a"])(this,a)
return t.apply(this,arguments)}Object(i["a"])(a,[{key:"render",value:function(){return l.a.createElement(d["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
a.displayName="IconArrowOpenEndSolid"
return a}(c["Component"])
m.glyphName="arrow-open-end"
m.variant="Solid"
m.propTypes=Object(n["a"])({},d["a"].propTypes)},uSnb:function(e,t,a){"use strict"
a.d(t,"a",(function(){return B}))
var n=a("rePB")
var o=a("1OyB")
var i=a("vuIU")
var r=a("Ji7U")
var s=a("LK+K")
a("DEX3")
var c=a("q1tI")
var l=a.n(c)
var d=a("17x9")
var u=a.n(d)
var m=a("TSYQ")
var h=a.n(m)
var p=a("n12J")
var b=a("nAyT")
var g=a("jtGx")
var f=a("E+IV")
var v=a("J2CL")
var _=a("M4Ft")
var y=a("BTe1")
var O=a("oXx0")
function w(e){var t=e.colors
return{trackColor:t.backgroundLight,color:t.backgroundBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseColor:t.backgroundBrand}}w["canvas-a11y"]=w["canvas-high-contrast"]=function(e){var t=e.colors
return{inverseColor:t.backgroundLightest}}
w.canvas=function(e){return{color:e["ic-brand-primary"]}}
var S,j,k,x,V,H
var C={componentId:"eHQDY",template:function(e){return"\n\n@keyframes eHQDY_dpDr{to{transform:rotate(360deg)}}\n\n@keyframes eHQDY_buIf{0%{stroke-dashoffset:190%}50%{stroke-dashoffset:50%;transform:rotate(90deg)}to{stroke-dashoffset:190%;transform:rotate(360deg)}}\n\n.eHQDY_bGBk{box-sizing:border-box;display:inline-block;overflow:hidden;position:relative;vertical-align:middle}\n\n.eHQDY_dTxv{stroke:".concat(e.trackColor||"inherit","}\n\n.eHQDY_dfBC,.eHQDY_dfBC .eHQDY_cJVF{height:").concat(e.xSmallSize||"inherit",";width:").concat(e.xSmallSize||"inherit","}\n\n.eHQDY_dfBC .eHQDY_eWAY,.eHQDY_dfBC .eHQDY_dTxv{stroke-width:").concat(e.xSmallBorderWidth||"inherit","}\n\n.eHQDY_dfBC .eHQDY_eWAY{stroke-dasharray:3em;transform-origin:calc(").concat(e.xSmallSize||"inherit","/2) calc(").concat(e.xSmallSize||"inherit","/2)}\n\n.eHQDY_doqw,.eHQDY_doqw .eHQDY_cJVF{height:").concat(e.smallSize||"inherit",";width:").concat(e.smallSize||"inherit","}\n\n.eHQDY_doqw .eHQDY_eWAY,.eHQDY_doqw .eHQDY_dTxv{stroke-width:").concat(e.smallBorderWidth||"inherit","}\n\n.eHQDY_doqw .eHQDY_eWAY{stroke-dasharray:6em;transform-origin:calc(").concat(e.smallSize||"inherit","/2) calc(").concat(e.smallSize||"inherit","/2)}\n\n.eHQDY_ycrn,.eHQDY_ycrn .eHQDY_cJVF{height:").concat(e.mediumSize||"inherit",";width:").concat(e.mediumSize||"inherit","}\n\n.eHQDY_ycrn .eHQDY_cJVF,.eHQDY_ycrn .eHQDY_eWAY,.eHQDY_ycrn .eHQDY_dTxv{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.eHQDY_ycrn .eHQDY_eWAY{stroke-dasharray:10.5em;transform-origin:calc(").concat(e.mediumSize||"inherit","/2) calc(").concat(e.mediumSize||"inherit","/2)}\n\n.eHQDY_cMDj,.eHQDY_cMDj .eHQDY_cJVF{height:").concat(e.largeSize||"inherit",";width:").concat(e.largeSize||"inherit","}\n\n.eHQDY_cMDj .eHQDY_cJVF,.eHQDY_cMDj .eHQDY_eWAY,.eHQDY_cMDj .eHQDY_dTxv{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.eHQDY_cMDj .eHQDY_eWAY{stroke-dasharray:14em;transform-origin:calc(").concat(e.largeSize||"inherit","/2) calc(").concat(e.largeSize||"inherit","/2)}\n\n.eHQDY_cJVF{animation-duration:2.25s;animation-iteration-count:infinite;animation-name:eHQDY_dpDr;animation-timing-function:linear;display:block;left:0;position:absolute;top:0}\n\n.eHQDY_eWAY,.eHQDY_dTxv{fill:none}\n\n.eHQDY_eWAY{stroke-linecap:round}\n\n.eHQDY_bGBk:not(.eHQDY_eoSs) .eHQDY_eWAY{animation-duration:1.75s;animation-iteration-count:infinite;animation-name:eHQDY_buIf;animation-timing-function:ease}\n\n.eHQDY_bGBk.eHQDY_eoSs .eHQDY_eWAY{stroke-dashoffset:100%}\n\n.eHQDY_ddES .eHQDY_eWAY{stroke:").concat(e.color||"inherit","}\n\n.eHQDY_enfx .eHQDY_eWAY{stroke:").concat(e.inverseColor||"inherit","}")},root:"eHQDY_bGBk",circleTrack:"eHQDY_dTxv","x-small":"eHQDY_dfBC",circle:"eHQDY_cJVF",circleSpin:"eHQDY_eWAY",small:"eHQDY_doqw",medium:"eHQDY_ycrn",large:"eHQDY_cMDj",rotate:"eHQDY_dpDr",ie11:"eHQDY_eoSs",morph:"eHQDY_buIf",default:"eHQDY_ddES",inverse:"eHQDY_enfx"}
var B=(S=Object(b["a"])("8.0.0",{title:"renderTitle"}),j=Object(O["a"])(),k=Object(v["j"])(w,C),S(x=j(x=k(x=(H=V=function(e){Object(r["a"])(a,e)
var t=Object(s["a"])(a)
function a(e){var n
Object(o["a"])(this,a)
n=t.call(this)
n.titleId=Object(y["a"])("Spinner")
return n}Object(i["a"])(a,[{key:"radius",value:function(){switch(this.props.size){case"x-small":return"0.5em"
case"small":return"1em"
case"large":return"2.25em"
default:return"1.75em"}}},{key:"render",value:function(){var e
var t=(e={},Object(n["a"])(e,C.root,true),Object(n["a"])(e,C[this.props.size],true),Object(n["a"])(e,C[this.props.variant],true),Object(n["a"])(e,C.ie11,_["a"]),e)
var o=p["a"].omitViewProps(Object(g["a"])(this.props,a.propTypes),a)
this.props.renderTitle||this.props.title
return l.a.createElement(p["a"],Object.assign({},o,{as:this.props.as,elementRef:this.props.elementRef,className:h()(t),margin:this.props.margin}),l.a.createElement("svg",{className:C.circle,role:"img","aria-labelledby":this.titleId,focusable:"false"},l.a.createElement("title",{id:this.titleId},Object(f["a"])(this.props.renderTitle)),l.a.createElement("g",{role:"presentation"},"inverse"!==this.props.variant&&l.a.createElement("circle",{className:C.circleTrack,cx:"50%",cy:"50%",r:this.radius()}),l.a.createElement("circle",{className:C.circleSpin,cx:"50%",cy:"50%",r:this.radius()}))))}}])
a.displayName="Spinner"
return a}(c["Component"]),V.propTypes={renderTitle:u.a.oneOfType([u.a.func,u.a.node]),size:u.a.oneOf(["x-small","small","medium","large"]),variant:u.a.oneOf(["default","inverse"]),margin:v["c"].spacing,elementRef:u.a.func,as:u.a.elementType,title:u.a.string},V.defaultProps={renderTitle:void 0,as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0},H))||x)||x)||x)},vGBm:function(e,t,a){"use strict"
a.d(t,"c",(function(){return r}))
a.d(t,"b",(function(){return s}))
a.d(t,"a",(function(){return c}))
var n=a("FOCd")
const o="k5_observed_user_for_"
const i=e=>`${o}${e}`
const r=e=>Object(n["a"])(i(e))
const s=(e,t)=>{document.cookie=l(e,t)}
const c=e=>{document.cookie=l(e,"")+";max-age=-1"}
const l=(e,t)=>`${i(e)}=${t};path=/`}}])

//# sourceMappingURL=course_show-c-dcdf1732dd.js.map