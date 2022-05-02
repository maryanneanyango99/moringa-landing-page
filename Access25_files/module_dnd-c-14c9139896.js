(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3868],{"8S//":function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a="undefined"!==typeof navigator&&navigator.userAgent||""
var r=/Edge/.test(a)},Ta57:function(e,t,n){"use strict"
n.r(t)
var a=n("RtDj")
n("q1tI")
var r=n("i8i4")
var i=n.n(r)
var o=n("d61b")
var l=n("3lLS")
var s=n.n(l)
s()(()=>{const e=document.getElementById("context_modules")
const t=document.querySelectorAll(".editable_context_module:not(#context_module_blank) .module_dnd")
t.forEach(t=>{i.a.render(Object(a["a"])(o["a"],{courseId:ENV.course_id,moduleId:t.getAttribute("data-context-module-id"),contextModules:e}),t)})})},"UT5+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return W}))
var a=n("rePB")
var r=n("Ff2n")
var i=n("ODXe")
var o=n("1OyB")
var l=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var d=n("q1tI")
var p=n.n(d)
var h=n("17x9")
var u=n.n(h)
var f=n("TSYQ")
var m=n.n(f)
var g=n("3zPy")
var b=n.n(g)
var v=n("sTNg")
var y=n("n12J")
var S=n("BTe1")
var B=n("J2CL")
var L=n("oXx0")
var _=n("nAyT")
var F=n("E+IV")
var x=n("jtGx")
var w=n("tCl5")
var D=n("8S//")
function j(e,t){if(e&&t&&"application/x-moz-file"!==e.type){var n=O(t)
var a=e.type||""
var r=a.replace(/\/.*$/,"")
return n.some((function(t){if("."===t.charAt(0)){if(!e.name)return a.endsWith(t.slice(1))
return e.name.toLowerCase().endsWith(t.toLowerCase())}if(/\/\*$/.test(t))return r===t.replace(/\/.*$/,"")
return a===t}))}return true}function O(e){var t=Array.isArray(e)?e:e.split(",")
return t.map((function(e){return e.trim().replace(/^\w+$/,".$&")}))}function k(e,t){var n=e.dataTransfer
if(n){if(n.files&&n.files.length)return n.files
if(n.items&&n.items.length)return n.items}else if(t&&t.files)return t.files
return[]}function P(e){var t=e.borders,n=e.colors
return{backgroundColor:n.backgroundLightest,borderRadius:t.radiusLarge,borderWidth:t.widthMedium,borderStyle:"dashed",borderColor:n.borderMedium,hoverBorderColor:n.borderBrand,acceptedColor:n.textBrand,rejectedColor:n.textDanger}}P.canvas=function(e){return{hoverBorderColor:e["ic-brand-primary"],acceptedColor:e["ic-brand-primary"]}}
var A,C,E,z,I,T
var M={componentId:"emSEn",template:function(e){return"\n\n.emSEn_blJt,.emSEn_bGBk{position:relative}\n\n.emSEn_blJt{box-sizing:border-box;display:block}\n\n.emSEn_blJt.emSEn_JSXc{height:100%}\n\n.emSEn_cwos{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}\n\n.emSEn_QUBp{border:".concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;text-align:center;z-index:1}\n\n[dir=ltr] .emSEn_QUBp,[dir=rtl] .emSEn_QUBp{text-align:center}\n\n.emSEn_QUBp:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.emSEn_QUBp.emSEn_JSXc{height:100%}\n\n.emSEn_byIz{border-radius:").concat(e.borderRadius||"inherit",";display:block;overflow:hidden}\n\n.emSEn_byIz.emSEn_JSXc{height:100%}\n\n.emSEn_cbYS .emSEn_QUBp{border-color:").concat(e.acceptedColor||"inherit","}\n\n.emSEn_cvQK .emSEn_QUBp{border-color:").concat(e.rejectedColor||"inherit","}\n\n.emSEn_cFXB{cursor:not-allowed;pointer-events:none}\n\n.emSEn_eXzv{opacity:0.5}")},label:"emSEn_blJt",root:"emSEn_bGBk",withHeight:"emSEn_JSXc",input:"emSEn_cwos",labelContent:"emSEn_QUBp",layout:"emSEn_byIz",dragAccepted:"emSEn_cbYS",dragRejected:"emSEn_cvQK",functionallyDisabled:"emSEn_cFXB",visuallyDisabled:"emSEn_eXzv"}
function Q(e){return e.keyCode===b.a.codes.space||e.keyCode===b.a.codes.enter}function R(){var e=false
try{e=document.documentMode||D["a"]}catch(e){}return e}var U=R()
var W=(A=Object(_["a"])("8.0.0",{label:"renderLabel",enablePreview:"shouldEnablePreview",allowRepeatFileSelection:"shouldAllowRepeats",allowMultiple:"shouldAllowMultiple"}),C=Object(L["a"])(),E=Object(B["j"])(P,M),A(z=C(z=E(z=(T=I=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var a
Object(o["a"])(this,n)
a=t.call(this,e)
a.state={isDragAccepted:false,isDragRejected:false,isFocused:false,isFileBrowserDisplayed:false}
a.enterCounter=0
a.fileInputEl=null
a.defaultId=null
a.handleDragEnter=function(e){e.preventDefault()
a.enterCounter+=1
if(a.enterCounter>1)return
var t=a.allFilesAccepted(a.getDataTransferItems(e))
a.setState({isDragAccepted:t,isDragRejected:!t})
a.props.onDragEnter(e)}
a.handleDragOver=function(e){e.preventDefault()
e.stopPropagation()
try{var t=e
t.dataTransfer.dropEffect="copy"}catch(e){}a.props.onDragOver(e)
return false}
a.handleDragLeave=function(e){e.preventDefault()
a.enterCounter-=1
if(a.enterCounter>0)return
a.setState({isDragAccepted:false,isDragRejected:false})
a.props.onDragLeave(e)}
a.handleChange=function(e){var t=a.props,n=t.onDrop,r=t.onDropAccepted,o=t.onDropRejected
var l=a.getDataTransferItems(e,a.shouldEnablePreview)
var s=a.parseFiles(l),c=Object(i["a"])(s,2),d=c[0],p=c[1]
e.preventDefault()
a.enterCounter=0
n(d,p,e)
p.length>0&&o(p,e)
d.length>0&&r(d,e)
a.setState({isDragAccepted:false,isDragRejected:false,isFileBrowserDisplayed:false})}
a.fileAccepted=function(e){return j(e,a.props.accept)}
a.handleRef=function(e){a.fileInputEl=e}
a.handleBlur=function(){a.setState({isFocused:false,isFileBrowserDisplayed:false})}
a.handleFocus=function(){a.setState({isFocused:true,isFileBrowserDisplayed:false})}
a.handleClick=function(e){a.fileInputEl.value&&a.shouldAllowRepeats&&(a.fileInputEl.value=null)
a.fileInputEl.focus()
a.props.onClick(e)
a.setState({isFileBrowserDisplayed:true})}
a.handleKeyDown=function(e){if(a.state.isFocused&&Q(e)){a.shouldAllowRepeats&&(a.fileInputEl.value=null)
if(U){e.stopPropagation()
e.preventDefault()
a.fileInputEl.click()}}}
a.handleKeyUp=function(e){if(e.keyCode===b.a.codes.esc&&a.state.isFileBrowserDisplayed){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()
a.setState({isFileBrowserDisplayed:false})}}
a.defaultId=Object(S["a"])("FileDrop")
a.messagesId=Object(S["a"])("FileDrop-messages")
return a}Object(l["a"])(n,[{key:"getDataTransferItems",value:function(e,t){var n=Array.from(k(e,this.fileInputEl))
n.length>1&&(n=this.shouldAllowMultiple?n:[n[0]])
if(t)return n.map((function(e){return Object.assign(e,{preview:window.URL.createObjectURL(e)})}))
return n}},{key:"parseFiles",value:function(e){var t=this
var n=[]
var a=[]
e.forEach((function(e){t.fileAccepted(e)&&t.fileMatchSize(e)?n.push(e):a.push(e)}))
return[n,a]}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"acceptStr",value:function(){var e=this.props.accept
return e?O(e).join(","):null}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,n=e.renderLabel
return Object(F["a"])(t||n,{isDragAccepted:this.state.isDragAccepted,isDragRejected:this.state.isDragRejected,interaction:this.interaction})}},{key:"render",value:function(){var e,t,n
var i=this.props,o=i.display,l=i.height,s=i.width,c=i.minWidth,d=i.maxWidth,h=i.margin,u=(i.onDropAccepted,i.onDropRejected,Object(r["a"])(i,["display","height","width","minWidth","maxWidth","margin","onDropAccepted","onDropRejected"]))
var f=this.props.id||this.defaultId
var g="disabled"===this.interaction||"readonly"===this.interaction
var b=this.state.isDragRejected||this.invalid?"danger":void 0
var S=(e={},Object(a["a"])(e,M.label,true),Object(a["a"])(e,M.functionallyDisabled,g),Object(a["a"])(e,M.visuallyDisabled,"disabled"===this.interaction),Object(a["a"])(e,M.dragRejected,this.state.isDragRejected||this.invalid),Object(a["a"])(e,M.dragAccepted,this.state.isDragAccepted),Object(a["a"])(e,M.withHeight,l),e)
return p.a.createElement(y["a"],{display:o,position:"relative",width:s,minWidth:c,maxWidth:d,margin:h,height:l},p.a.createElement("label",{className:m()(S),htmlFor:f,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleChange},p.a.createElement(y["a"],{display:"block",position:"relative",withFocusOutline:this.state.isFocused,borderRadius:"large",focusColor:b,height:l},p.a.createElement("span",{className:m()((t={},Object(a["a"])(t,M.labelContent,true),Object(a["a"])(t,M.withHeight,l),t))},p.a.createElement("span",{className:m()((n={},Object(a["a"])(n,M.layout,true),Object(a["a"])(n,M.withHeight,l),n))},p.a.createElement(y["a"],{height:l},this.renderLabel()))))),p.a.createElement("input",Object.assign({},Object(x["b"])(u),{onClick:this.handleClick,type:"file",className:M.input,id:f,ref:this.handleRef,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,multiple:this.shouldAllowMultiple,accept:this.acceptStr(),onChange:this.handleChange,"aria-describedby":this.hasMessages?this.messagesId:null,disabled:g})),this.hasMessages?p.a.createElement(y["a"],{display:"block",margin:"small 0 0"},p.a.createElement(v["c"],{id:this.messagesId,messages:this.props.messages})):null)}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"interaction",get:function(){return Object(w["a"])({props:this.props})}},{key:"shouldEnablePreview",get:function(){return this.props.enablePreview||this.props.shouldEnablePreview}},{key:"shouldAllowRepeats",get:function(){return this.props.allowRepeatFileSelection||this.props.shouldAllowRepeats}},{key:"shouldAllowMultiple",get:function(){return this.props.allowMultiple||this.props.shouldAllowMultiple}},{key:"invalid",get:function(){return this.hasMessages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}}])
n.displayName="FileDrop"
return n}(d["Component"]),I.propTypes={id:u.a.string,renderLabel:u.a.oneOfType([u.a.func,u.a.node]).isRequired,accept:u.a.oneOfType([u.a.string,u.a.arrayOf(u.a.string)]),messages:u.a.arrayOf(v["d"].message),onClick:u.a.func,onDrop:u.a.func,onDropAccepted:u.a.func,onDropRejected:u.a.func,onDragEnter:u.a.func,onDragOver:u.a.func,onDragLeave:u.a.func,shouldEnablePreview:u.a.bool,shouldAllowMultiple:u.a.bool,shouldAllowRepeats:u.a.bool,maxSize:u.a.number,minSize:u.a.number,interaction:u.a.oneOf(["enabled","disabled","readonly"]),display:u.a.oneOf(["block","inline-block"]),height:u.a.oneOfType([u.a.string,u.a.number]),width:u.a.oneOfType([u.a.string,u.a.number]),maxWidth:u.a.oneOfType([u.a.string,u.a.number]),minWidth:u.a.oneOfType([u.a.string,u.a.number]),margin:B["c"].spacing,label:u.a.oneOfType([u.a.func,u.a.node]),enablePreview:u.a.bool,allowRepeatFileSelection:u.a.bool,allowMultiple:u.a.bool},I.defaultProps={onClick:function(e){},onDrop:function(e,t,n){},onDropAccepted:function(e,t){},onDropRejected:function(e,t){},onDragEnter:function(e){},onDragOver:function(e){},onDragLeave:function(e){},shouldEnablePreview:false,shouldAllowMultiple:false,shouldAllowRepeats:true,maxSize:Infinity,minSize:0,interaction:void 0,messages:[],id:void 0,accept:void 0,display:"block",height:void 0,width:void 0,minWidth:void 0,maxWidth:void 0,margin:void 0},T))||z)||z)||z)},agq5:function(e,t,n){"use strict"
n.d(t,"a",(function(){return D}))
var a=n("VTBJ")
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var l=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var p=n("17x9")
var h=n.n(p)
var u=n("TSYQ")
var f=n.n(u)
var m=n("msMH")
var g=n("n12J")
var b=n("J2CL")
var v=n("E+IV")
var y=n("KgFQ")
var S=n("jtGx")
function B(e){var t=e.borders,n=e.colors,a=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,paddingSmall:a.small,paddingMedium:a.medium,paddingLarge:a.medium,iconColor:n.textDark,mediumMargin:a.small,largeMargin:a.medium,iconHoverColor:n.textLink,backgroundColor:n.backgroundLightest,iconHoverColorInverse:n.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:n.textDark,messageColorClickable:n.textLink,messageColorInverse:n.textLight,messageFontSizeSmall:r.fontSizeSmall,messageFontSizeMedium:r.fontSizeMedium,messageFontSizeLarge:r.fontSizeLarge,clickableActiveBg:n.backgroundBrand,clickableActiveText:n.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}B.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
var L,_,F,x
var w={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var D=(L=Object(b["j"])(B,w),L(_=(x=F=function(e){Object(l["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
e=t.call.apply(t,[this].concat(r))
e.handleClick=function(t){var n=e.props,a=n.readOnly,r=n.onClick
if(a){t.preventDefault()
t.stopPropagation()}else"function"===typeof r&&r(t)}
return e}Object(o["a"])(n,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,n=e.headingAs,a=e.heading
return d.a.createElement("span",{className:w.heading},d.a.createElement(m["a"],{level:t,as:n,color:"primary"},a))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,n=e.message,a=e.hero
return d.a.createElement("span",{className:w.content},a&&d.a.createElement("span",{className:w.hero},this.renderHero()),t&&this.renderHeading(),n&&d.a.createElement("span",{className:w.message},Object(v["a"])(n)))}},{key:"render",value:function(){var e
var t=this.props,i=t.href,o=t.disabled,l=t.readOnly,s=t.onClick,c=t.size,p=t.margin,h=t.elementRef
var u=(e={},Object(r["a"])(e,w.root,true),Object(r["a"])(e,w[c],true),Object(r["a"])(e,w.clickable,i||s),Object(r["a"])(e,w.disabled,o),e)
var m=Object(y["a"])(n,this.props)
return d.a.createElement(g["a"],{as:"div",margin:p},d.a.createElement(g["a"],Object.assign({},Object(S["a"])(this.props,Object(a["a"])({},n.propTypes,{},g["a"].propTypes)),{type:"button"===m?"button":null,as:m,elementRef:h,className:f()(u),href:i,onClick:this.handleClick,disabled:o,"aria-disabled":o||l?"true":null}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
n.displayName="Billboard"
return n}(c["Component"]),F.propTypes={hero:h.a.oneOfType([h.a.element,h.a.func]),size:h.a.oneOf(["small","medium","large"]),as:h.a.elementType,elementRef:h.a.func,heading:h.a.string,headingAs:h.a.oneOf(["h1","h2","h3","span"]),headingLevel:h.a.oneOf(["h1","h2","h3","h4"]),message:h.a.oneOfType([h.a.node,h.a.func]),onClick:h.a.func,href:h.a.string,disabled:h.a.bool,readOnly:h.a.bool,margin:b["c"].spacing},F.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},x))||_)},d61b:function(e,t,n){"use strict"
n.d(t,"a",(function(){return x}))
var a=n("RtDj")
var r=n("q1tI")
var i=n.n(r)
n("17x9")
var o=n("HGxv")
var l=n("BrAc")
var s=n("hlSo")
var c=n("QYKH")
function d(e,t){return Promise.all([e,t]).then(([e,t])=>e.concat(t))}function p(e){return Promise.resolve(e.data.map(e=>new c["a"](e)))}function h(e){return l["a"].get(e).then(e=>{var t,n
const a=null===(t=Object(s["a"])(null===(n=e.headers)||void 0===n?void 0:n.link))||void 0===t?void 0:t.next
return a?d(p(e),h(a)):p(e)})}function u(e){return h(`/api/v1/folders/${e}/files?only[]=names`)}function f(e){return l["a"].get(`/api/v1/courses/${e}/folders/root`).then(({data:e})=>e)}var m=n("uloQ")
var g=n("UT5+")
var b=n("agq5")
var v=n("whu9")
var y=n("ZbPE")
var S=n("vavB")
var B=n("e2r+")
var L=n("MAjw")
var _=n("7lHU")
const F=Object(o["useScope"])("modules")
class x extends i.a.Component{constructor(e){super(e)
this.showAlert=()=>{Object(m["b"])({type:"error",message:F.t("Unable to set up drag and drop for modules")})}
this.handleDragEnter=()=>{this.setState({hightlightUpload:true})}
this.handleDragLeave=()=>{this.setState({hightlightUpload:false})}
this.handleDrop=e=>{const{moduleId:t,contextModules:n}=this.props
const{folder:a}=this.state
this.setInteractionOnAll(false)
S["a"].prototype.onUploadPosted=e=>{this.addFile(e)
if(n){const a=new Event("addFileToModule")
a.moduleId=t
a.attachment=e
n.dispatchEvent(a)}}
L["a"].setUploadOptions({alwaysRename:false,alwaysUploadZips:true})
this.setState({hightlightUpload:false,isUploading:true},()=>{L["a"].setFolder(a)
L["a"].setOptionsFromFiles(e,true)})}
this.handleEmptyUpload=()=>{this.setState({isUploading:false})
this.setInteractionOnAll(true)}
this.renameFileMessage=e=>F.t('A file named "%{name}" already exists. Do you want to replace the existing file?',{name:e})
this.lockFileMessage=e=>F.t('A locked file named "%{name}" already exists. Please enter a new name.',{name:e})
this.handleUploadChange=e=>{0===e&&this.setInteractionOnAll(true)
this.setState({isUploading:e>0})}
this.state={hightlightUpload:false,isUploading:false,folder:null,contextType:null,contextId:null,interaction:true}}componentDidMount(){Object.keys(x.folderState).length>0&&this.setFolderState(x.folderState)
0===x.activeDrops.size&&this.fetchRootFolder()
x.activeDrops.add(this)}fetchRootFolder(){return f(this.props.courseId).then(e=>u(e.id).then(t=>{e.files=t
x.folderState={contextId:e.context_id,contextType:e.context_type,folder:e}
x.activeDrops.forEach(e=>{e.setFolderState(x.folderState)})}).catch(this.showAlert)).catch(this.showAlert)}addFile(e){x.folderState.folder.files=[...x.folderState.folder.files,new c["a"](e)]
x.activeDrops.forEach(e=>{e.setFolderState(x.folderState)})}componentWillUnmount(){x.activeDrops.delete(this)}setFolderState(e){this.setState(e)}renderHero(e){const{hightlightUpload:t}=this.state
return Object(a["a"])(v["a"],{size:e,color:t?"brand":"primary"})}renderBillboard(){const{folder:e}=this.state
return Object(a["a"])(b["a"],{heading:e?F.t("Drop files here to add to module"):F.t("Loading..."),headingLevel:"h4",hero:e=>this.renderHero(e),message:Object(a["a"])(y["a"],{size:"small",color:"brand"},void 0,e?F.t("or choose files"):"")})}setInteractionOnAll(e){x.activeDrops.forEach(t=>t.setInteraction(e))}setInteraction(e){this.setState({interaction:e})}renderFileDrop(){const{interaction:e,folder:t}=this.state
return Object(a["a"])(g["a"],{shouldAllowMultiple:true,renderLabel:this.renderBillboard(),onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,interaction:e&&t?"enabled":"disabled"})}renderUploading(){const{folder:e,contextId:t,contextType:n}=this.state
return i.a.createElement(i.a.Fragment,null,Object(a["a"])(_["a"],{visible:false,currentFolder:e,contextId:t,contextType:n,allowSkip:true,alwaysUploadZips:true,onEmptyOrClose:this.handleEmptyUpload,onRenameFileMessage:this.renameFileMessage,onLockFileMessage:this.lockFileMessage}),Object(a["a"])(B["a"],{onUploadChange:this.handleUploadChange}))}render(){const{isUploading:e}=this.state
return e?this.renderUploading():this.renderFileDrop()}}x.defaultProps={contextModules:null}
x.folderState={}
x.activeDrops=new Set},hlSo:function(e,t,n){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const n=e[0].substring(1,e[0].length-1)
let a=e[1].split("=")
a=a[1]
a=a.substring(1,a.length-1)
t[a]=n})
return t}},msMH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return A}))
var a=n("rePB")
var r=n("Ff2n")
var i=n("1OyB")
var o=n("vuIU")
var l=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var p=n("17x9")
var h=n.n(p)
var u=n("TSYQ")
var f=n.n(u)
var m=n("n12J")
var g=n("J2CL")
function b(e,t,n){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}return}var v=n("nAyT")
var y=n("KgFQ")
var S=n("jtGx")
var B=n("oXx0")
function L(e){var t=e.borders,n=e.colors,a=e.spacing,r=e.typography
return{lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h1FontFamily:r.fontFamily,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h2FontFamily:r.fontFamily,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h3FontFamily:r.fontFamily,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h4FontFamily:r.fontFamily,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,h5FontFamily:r.fontFamily,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:a.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}L.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
L["instructure"]=function(e){var t=e.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var _={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var F=Object(g["d"])({map:_,version:"8.0.0"})
var x,w,D,j,O,k
var P={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var A=(x=Object(v["a"])("8.0.0",{ellipsis:"<TruncateText />"}),w=Object(B["a"])(),D=Object(g["j"])(L,P,F),x(j=w(j=D(j=(k=O=function(e){Object(l["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){var e
var t=this.props,i=t.border,o=t.children,l=t.color,s=t.level,c=t.margin,p=t.elementRef,h=t.ellipsis,u=Object(r["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var g=Object(y["a"])(n,this.props,(function(){return"reset"===s?"span":s}))
return d.a.createElement(m["a"],Object.assign({},Object(S["b"])(u),{className:f()((e={},Object(a["a"])(e,P.root,true),Object(a["a"])(e,P["level--".concat(s)],true),Object(a["a"])(e,P["color--".concat(l)],l),Object(a["a"])(e,P["border--".concat(i)],"none"!==i),Object(a["a"])(e,P.ellipsis,h),e)),as:g,margin:c,elementRef:p}),o)}}])
n.displayName="Heading"
return n}(c["Component"]),O.propTypes={border:h.a.oneOf(["none","top","bottom"]),children:b,color:h.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:h.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:h.a.elementType,margin:g["c"].spacing,elementRef:h.a.func,ellipsis:h.a.bool},O.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},k))||j)||j)||j)},scx4:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("HGxv")
const r=Object(a["useScope"])("mimeClass")
const i={audio:{get displayName(){return r.t("Audio")},mimeTypes:["audio/x-mpegurl","audio/x-pn-realaudio","audio/x-aiff","audio/3gpp","audio/mid","audio/x-wav","audio/basic","audio/mpeg"]},code:{get displayName(){return r.t("Source code")},mimeTypes:["text/xml","text/css","text/x-yaml","application/xml","application/javascript","text/x-csharp"]},doc:{get displayName(){return r.t("Text document")},mimeTypes:["application/x-docx","text/rtf","application/msword","application/rtf","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},flash:{get displayName(){return r.t("Flash")},mimeTypes:["application/x-shockwave-flash"]},html:{get displayName(){return r.t("Web page")},mimeTypes:["text/html","application/xhtml+xml"]},image:{get displayName(){return r.t("Image")},mimeTypes:["image/png","image/x-psd","image/gif","image/pjpeg","image/jpeg","image/webp"]},ppt:{get displayName(){return r.t("Presentation")},mimeTypes:["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint"]},pdf:{get displayName(){return r.t("PDF")},mimeTypes:["application/pdf"]},text:{get displayName(){return r.t("Plain text")},mimeTypes:["text","text/plain"]},video:{get displayName(){return r.t("Video")},mimeTypes:["video/mp4","video/x-ms-asf","video/x-msvideo","video/x-sgi-movie","video/mpeg","video/quicktime","video/x-la-asf","video/3gpp","video/webm","video/avi"]},xls:{get displayName(){return r.t("Spreadsheet")},mimeTypes:["application/vnd.oasis.opendocument.spreadsheet","text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"]},zip:{get displayName(){return r.t("Archive")},mimeTypes:["application/x-rar-compressed","application/x-zip-compressed","application/zip","application/x-zip","application/x-rar"]}}
function o(e){return o.mimeClasses[e]||"file"}o.displayName=function(e){const t=i[o(e)]
return t&&t.displayName||r.t("Unknown")}
o.mimeClasses={}
for(const e in i){const t=i[e]
t.mimeTypes.forEach(t=>o.mimeClasses[t]=e)}},whu9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var a=n("VTBJ")
var r=n("1OyB")
var i=n("vuIU")
var o=n("Ji7U")
var l=n("LK+K")
var s=n("q1tI")
var c=n.n(s)
var d=n("hPGw")
var p=c.a.createElement("path",{d:"M1838.86029,1451.57632 L1920,1532.94589 L1558.4341,1894.51179 L361.565904,1894.51179 L0,1532.94589 L81.2546391,1451.57632 L409.146414,1779.58302 L1510.85359,1779.58302 L1838.86029,1451.57632 Z M962.333054,25 L1462.61798,525.284928 L1381.47827,606.654495 L1019.68251,244.973662 L1019.68251,1432.53262 L904.86867,1432.53262 L904.86867,244.973662 L543.187837,606.654495 L462.048126,525.284928 L962.333054,25 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(o["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),p)}}])
n.displayName="IconUploadLine"
return n}(s["Component"])
h.glyphName="upload"
h.variant="Line"
h.propTypes=Object(a["a"])({},d["a"].propTypes)}}])

//# sourceMappingURL=module_dnd-c-14c9139896.js.map