(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[77],{"3Yjv":function(e,t,n){"use strict"
var r=n("RtDj")
var i=n("q1tI")
var a=n.n(i)
var o=n("fhzG")
var s=n.n(o)
var l=n("i8i4")
var c=n.n(l)
var d=n("ouhR")
var u=n.n(d)
var p=n("HGxv")
var h=n("17x9")
var f=n.n(h)
var m=n("Lg2F")
n("r2Yr")
n("7AEQ")
const g=Object(p["useScope"])("broccoli_cloud")
var b={displayName:"PublishCloud",propTypes:{togglePublishClassOn:f.a.object,model:m["a"].filesystemObject,userCanEditFilesForContext:f.a.bool.isRequired,fileName:f.a.string},getInitialState(){return this.extractStateFromModel(this.props.model)},componentDidMount(){this.props.togglePublishClassOn&&this.updatePublishClassElements()},componentDidUpdate(){this.props.togglePublishClassOn&&this.updatePublishClassElements()},componentWillMount(){const e=e=>this.setState(this.extractStateFromModel(e))
this.props.model.on("change",e,this)},componentWillUnmount(){this.props.model.off(null,null,this)},updatePublishClassElements(){return this.props.togglePublishClassOn.classList[this.state.published?"add":"remove"]("ig-published")},getRestrictedText(){if(this.props.model.get("unlock_at")&&this.props.model.get("lock_at"))return g.t("Available after %{unlock_at} until %{lock_at}",{unlock_at:u.a.datetimeString(this.props.model.get("unlock_at")),lock_at:u.a.datetimeString(this.props.model.get("lock_at"))})
if(this.props.model.get("unlock_at")&&!this.props.model.get("lock_at"))return g.t("Available after %{unlock_at}",{unlock_at:u.a.datetimeString(this.props.model.get("unlock_at"))})
if(!this.props.model.get("unlock_at")&&this.props.model.get("lock_at"))return g.t("Available until %{lock_at}",{lock_at:u.a.datetimeString(this.props.model.get("lock_at"))})},extractStateFromModel:e=>({published:!e.get("locked"),restricted:!!e.get("lock_at")||!!e.get("unlock_at"),hidden:!!e.get("hidden")}),togglePublishedState(){this.setState({published:!this.state.published,restricted:false,hidden:false})}}
n("ESjL")
var v,_,y,j,S
const w=Object(p["useScope"])("publish_cloud")
b.openRestrictedDialog=function(){const e=u()("<div>").dialog({title:w.t("Editing permissions for: %{name}",{name:this.props.model.displayName()}),width:800,minHeight:300,close(){c.a.unmountComponentAtNode(this)
u()(this).remove()}})
n.e(119).then(n.bind(null,"c9cI")).then(({default:t})=>{c.a.render(Object(r["a"])(t,{usageRightsRequiredForContext:this.props.usageRightsRequiredForContext,models:[this.props.model],closeDialog:()=>{e.dialog("close")}}),e[0])})}
b.render=function(){const e=this.props.model&&this.props.model.displayName()||w.t("This file")
return this.props.userCanEditFilesForContext?this.state.published&&this.state.restricted?a.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status restricted",title:this.getRestrictedText(),"aria-label":w.t("%{fileName} is %{restricted} - Click to modify",{fileName:e,restricted:this.getRestrictedText()})},v||(v=Object(r["a"])("i",{className:"icon-calendar-month icon-line"}))):this.state.published&&this.state.hidden?a.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status hiddenState",title:w.t("Only available to students with link"),"aria-label":w.t("%{fileName} is only available to students with the link - Click to modify",{fileName:e})},_||(_=Object(r["a"])("i",{className:"icon-off icon-line"}))):this.state.published?a.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status published",title:w.t("Published"),"aria-label":w.t("%{fileName} is Published - Click to modify",{fileName:e})},y||(y=Object(r["a"])("i",{className:"icon-publish icon-Solid"}))):a.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status unpublished",title:w.t("Unpublished"),"aria-label":w.t("%{fileName} is Unpublished - Click to modify",{fileName:e})},j||(j=Object(r["a"])("i",{className:"icon-unpublish"}))):this.state.published&&this.state.restricted?a.a.createElement("div",{style:{marginRight:"12px"},"data-tooltip":"left",ref:"publishCloud",className:"published-status restricted",title:this.getRestrictedText(),"aria-label":w.t("%{fileName} is %{restricted}",{fileName:e,restricted:this.getRestrictedText()})},S||(S=Object(r["a"])("i",{className:"icon-calendar-day"}))):Object(r["a"])("div",{style:{width:28,height:36}})}
t["a"]=s()(b)},"3jyj":function(e,t,n){"use strict"
var r=n("QYKH")
n("mX+G")
var i=n("Y/W1")
var a=n.n(i)
var o={}
var s=function(e){var t=a.a.uniqueId()
var n=a.a.extend((function(n,r){var i=function(){return new e(n,r)}
var a=n&&n[e.prototype.idAttribute]
if(a){var s=t+":"+a
if(o[s]){var l=o[s]
r&&r.parse&&(n=l.parse(n))
l.set(n)}else o[s]=i()
return o[s]}var c=i()
c.on("change:"+e.prototype.idAttribute,(function(e,n){o[t+":"+n]=c
c.off(null,null,this)}),this)
return c}),e)
n.prototype=e.prototype
return n}
s.resetCache=function(){o={}}
var l=s
var c=n("TnsN")
var d=n("VXGR")
var u=n("plYi")
var p={encodeSpecialChars:e=>e.replace(/%/g,"&#37;"),decodeSpecialChars:e=>e.split("/").map(e=>encodeURIComponent(decodeURIComponent(e).replace(/&#37;/,"%"))).join("/")}
const h=/^[^\/]+\/?/
let f=null
function m(e,t){return"name"!==t||e instanceof b?"user"===t?_(e.get("user"),e=>e.display_name)||"":"usage_rights"===t?_(e.get("usage_rights"),e=>e.license_name)||"":e.get(t):e.get("display_name")}class g extends r["a"]{initialize(e){this.contentTypes||(this.contentTypes=null!=e?e.contentTypes:void 0)
this.useVerifiers||(this.useVerifiers=null!=e?e.useVerifiers:void 0)
this.setUpFilesAndFoldersIfNeeded()
this.on("change:sort change:order",this.setQueryStringParams)
return super.initialize(...arguments)}url(){return this.isNew()?super.url(...arguments):"/api/v1/folders/"+this.id}parse(e){const t=super.parse(...arguments)
this.contentTypes||(this.contentTypes=e.contentTypes)
this.useVerifiers||(this.useVerifiers=e.useVerifiers)
this.setUpFilesAndFoldersIfNeeded()
this.folders.url=e.folders_url
this.files.url=e.files_url
return t}setUpFilesAndFoldersIfNeeded(){this.folders||(this.folders=new v([],{parentFolder:this}))
if(!this.files)return this.files=new d["a"]([],{parentFolder:this})}getSubtrees(){return this.folders}getItems(){return this.files}expand(e=false,t={}){let n
this.isExpanded=true
this.trigger("expanded")
if(this.expandDfd||e)return $.when()
this.isExpanding=true
this.trigger("beginexpanding")
this.expandDfd=$.Deferred().done(()=>{this.isExpanding=false
return this.trigger("endexpanding")})
const r=this.folders.url===this.folders.constructor.prototype.url||this.files.url===this.files.constructor.prototype.url;(r||e)&&(n=this.fetch())
return $.when(n).done(()=>{let e,n
0!==this.get("folders_count")&&(n=this.folders.fetch({data:{per_page:this.get("folders_count")}}))
0===this.get("files_count")||t.onlyShowSubtrees||(e=this.files.fetch())
return $.when(n,e).done(this.expandDfd.resolve)})}collapse(){this.isExpanded=false
return this.trigger("collapsed")}toggle(e){return this.isExpanded?this.collapse():this.expand(false,e)}previewUrl(){let e
if(e=this.get("context_type"),["Course","Group"].includes(e))return`/${this.get("context_type").toLowerCase()+"s"}/${this.get("context_id")}/files/{{id}}/preview`}isEmpty(){return!!(this.files.loadedAll&&0===this.files.length)&&this.folders.loadedAll&&0===this.folders.length}urlPath(){let e=(this.get("full_name")||"").replace(h,"")
e=p.encodeSpecialChars(e)
e=e.split("/").map(e=>encodeURIComponent(e)).join("/")
f||(f=n("m452").default)
if(f.showingAllContexts){const t=`${_(this.get("context_type"),e=>e.toLowerCase())}s_${this.get("context_id")}`
e=`${t}/${e}`}return e}childrenSorter(e="name",t="asc",n,r){let i
const a=["name","user","usage_rights"].includes(e)
n=m(n,e)
r=m(r,e)
i=a?u["a"].strings(n,r):(()=>{if(n===r)return 0
if(n>r||void 0===n)return 1
if(n<r||void 0===r)return-1
throw new Error("wat? error sorting")})()
"desc"===t&&(i=0-i)
return i}children({sort:e,order:t}){return this.folders.toArray().concat(this.files.toArray()).sort(this.childrenSorter.bind(null,e,t))}}g.resolvePath=function(e,t,n){n=p.decodeSpecialChars(n)
const r=`/api/v1/${e}/${t}/folders/by_path${n}`
return $.getJSON(r).pipe(e=>e.map(e=>new b(e,{parse:true})))}
g.prototype.defaults={name:""}
const b=l(g)
t["a"]=b
class v extends c["a"]{static initClass(){this.optionProperty("parentFolder")
this.prototype.model=b}parse(e){e&&e.forEach(e=>{e.contentTypes=this.parentFolder.contentTypes
return e.useVerifiers=this.parentFolder.useVerifiers})
return super.parse(...arguments)}}v.initClass()
b.FoldersCollection=v
function _(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}},"8S//":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r="undefined"!==typeof navigator&&navigator.userAgent||""
var i=/Edge/.test(r)},G4i8:function(e,t,n){var r={"./__tests__/lti.resourceImported.test.js":["LFe7",4207],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4208],"./__tests__/lti.showAlert.test.js":["+y7l",4209],"./__tests__/org.imsglobal.lti.get_data.test.js":["CXUv",4194],"./__tests__/org.imsglobal.lti.put_data.test.js":["mElt",4195],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4210],"./lti.enableScrollEvents.js":["HVU3",4270],"./lti.fetchWindowSize.js":["OANa",4271],"./lti.frameResize.js":["bSyB",4196],"./lti.hideRightSideWrapper.js":["ozOx",4272],"./lti.removeUnloadMessage.js":["tjuu",4211],"./lti.resourceImported.js":["FC2N",4273],"./lti.screenReaderAlert.js":["YYEg",4274],"./lti.scrollToTop.js":["W/R1",4275],"./lti.setUnloadMessage.js":["6fDN",4212],"./lti.showAlert.js":["onLg",4276],"./lti.showModuleNavigation.js":["NSTA",4277],"./org.imsglobal.lti.capabilities.js":["zPPZ",4278],"./org.imsglobal.lti.get_data.js":["lH2A",4205],"./org.imsglobal.lti.put_data.js":["hugc",4206],"./requestFullWindowLaunch.js":["8IHO",4279],"./toggleCourseNavigationMenu.js":["ECMy",4280]}
function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=r[e],i=t[0]
return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)}
i.id="G4i8"
e.exports=i},Lg2F:function(e,t,n){"use strict"
var r=n("17x9")
var i=n.n(r)
var a=n("3jyj")
var o=n("QYKH")
t["a"]={contextType:i.a.oneOf(["users","groups","accounts","courses"]),contextId:i.a.oneOfType([i.a.string,i.a.number]),folder:i.a.instanceOf(a["a"]),filesystemObject:i.a.instanceOf(o["a"])}},"UT5+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return $}))
var r=n("rePB")
var i=n("Ff2n")
var a=n("ODXe")
var o=n("1OyB")
var s=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var d=n("q1tI")
var u=n.n(d)
var p=n("17x9")
var h=n.n(p)
var f=n("TSYQ")
var m=n.n(f)
var g=n("3zPy")
var b=n.n(g)
var v=n("sTNg")
var _=n("n12J")
var y=n("BTe1")
var j=n("J2CL")
var S=n("oXx0")
var w=n("nAyT")
var L=n("E+IV")
var x=n("jtGx")
var E=n("tCl5")
var k=n("8S//")
function C(e,t){if(e&&t&&"application/x-moz-file"!==e.type){var n=D(t)
var r=e.type||""
var i=r.replace(/\/.*$/,"")
return n.some((function(t){if("."===t.charAt(0)){if(!e.name)return r.endsWith(t.slice(1))
return e.name.toLowerCase().endsWith(t.toLowerCase())}if(/\/\*$/.test(t))return i===t.replace(/\/.*$/,"")
return r===t}))}return true}function D(e){var t=Array.isArray(e)?e:e.split(",")
return t.map((function(e){return e.trim().replace(/^\w+$/,".$&")}))}function O(e,t){var n=e.dataTransfer
if(n){if(n.files&&n.files.length)return n.files
if(n.items&&n.items.length)return n.items}else if(t&&t.files)return t.files
return[]}function B(e){var t=e.borders,n=e.colors
return{backgroundColor:n.backgroundLightest,borderRadius:t.radiusLarge,borderWidth:t.widthMedium,borderStyle:"dashed",borderColor:n.borderMedium,hoverBorderColor:n.borderBrand,acceptedColor:n.textBrand,rejectedColor:n.textDanger}}B.canvas=function(e){return{hoverBorderColor:e["ic-brand-primary"],acceptedColor:e["ic-brand-primary"]}}
var P,F,R,A,I,T
var N={componentId:"emSEn",template:function(e){return"\n\n.emSEn_blJt,.emSEn_bGBk{position:relative}\n\n.emSEn_blJt{box-sizing:border-box;display:block}\n\n.emSEn_blJt.emSEn_JSXc{height:100%}\n\n.emSEn_cwos{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}\n\n.emSEn_QUBp{border:".concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;text-align:center;z-index:1}\n\n[dir=ltr] .emSEn_QUBp,[dir=rtl] .emSEn_QUBp{text-align:center}\n\n.emSEn_QUBp:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.emSEn_QUBp.emSEn_JSXc{height:100%}\n\n.emSEn_byIz{border-radius:").concat(e.borderRadius||"inherit",";display:block;overflow:hidden}\n\n.emSEn_byIz.emSEn_JSXc{height:100%}\n\n.emSEn_cbYS .emSEn_QUBp{border-color:").concat(e.acceptedColor||"inherit","}\n\n.emSEn_cvQK .emSEn_QUBp{border-color:").concat(e.rejectedColor||"inherit","}\n\n.emSEn_cFXB{cursor:not-allowed;pointer-events:none}\n\n.emSEn_eXzv{opacity:0.5}")},label:"emSEn_blJt",root:"emSEn_bGBk",withHeight:"emSEn_JSXc",input:"emSEn_cwos",labelContent:"emSEn_QUBp",layout:"emSEn_byIz",dragAccepted:"emSEn_cbYS",dragRejected:"emSEn_cvQK",functionallyDisabled:"emSEn_cFXB",visuallyDisabled:"emSEn_eXzv"}
function z(e){return e.keyCode===b.a.codes.space||e.keyCode===b.a.codes.enter}function M(){var e=false
try{e=document.documentMode||k["a"]}catch(e){}return e}var U=M()
var $=(P=Object(w["a"])("8.0.0",{label:"renderLabel",enablePreview:"shouldEnablePreview",allowRepeatFileSelection:"shouldAllowRepeats",allowMultiple:"shouldAllowMultiple"}),F=Object(S["a"])(),R=Object(j["j"])(B,N),P(A=F(A=R(A=(T=I=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var r
Object(o["a"])(this,n)
r=t.call(this,e)
r.state={isDragAccepted:false,isDragRejected:false,isFocused:false,isFileBrowserDisplayed:false}
r.enterCounter=0
r.fileInputEl=null
r.defaultId=null
r.handleDragEnter=function(e){e.preventDefault()
r.enterCounter+=1
if(r.enterCounter>1)return
var t=r.allFilesAccepted(r.getDataTransferItems(e))
r.setState({isDragAccepted:t,isDragRejected:!t})
r.props.onDragEnter(e)}
r.handleDragOver=function(e){e.preventDefault()
e.stopPropagation()
try{var t=e
t.dataTransfer.dropEffect="copy"}catch(e){}r.props.onDragOver(e)
return false}
r.handleDragLeave=function(e){e.preventDefault()
r.enterCounter-=1
if(r.enterCounter>0)return
r.setState({isDragAccepted:false,isDragRejected:false})
r.props.onDragLeave(e)}
r.handleChange=function(e){var t=r.props,n=t.onDrop,i=t.onDropAccepted,o=t.onDropRejected
var s=r.getDataTransferItems(e,r.shouldEnablePreview)
var l=r.parseFiles(s),c=Object(a["a"])(l,2),d=c[0],u=c[1]
e.preventDefault()
r.enterCounter=0
n(d,u,e)
u.length>0&&o(u,e)
d.length>0&&i(d,e)
r.setState({isDragAccepted:false,isDragRejected:false,isFileBrowserDisplayed:false})}
r.fileAccepted=function(e){return C(e,r.props.accept)}
r.handleRef=function(e){r.fileInputEl=e}
r.handleBlur=function(){r.setState({isFocused:false,isFileBrowserDisplayed:false})}
r.handleFocus=function(){r.setState({isFocused:true,isFileBrowserDisplayed:false})}
r.handleClick=function(e){r.fileInputEl.value&&r.shouldAllowRepeats&&(r.fileInputEl.value=null)
r.fileInputEl.focus()
r.props.onClick(e)
r.setState({isFileBrowserDisplayed:true})}
r.handleKeyDown=function(e){if(r.state.isFocused&&z(e)){r.shouldAllowRepeats&&(r.fileInputEl.value=null)
if(U){e.stopPropagation()
e.preventDefault()
r.fileInputEl.click()}}}
r.handleKeyUp=function(e){if(e.keyCode===b.a.codes.esc&&r.state.isFileBrowserDisplayed){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()
r.setState({isFileBrowserDisplayed:false})}}
r.defaultId=Object(y["a"])("FileDrop")
r.messagesId=Object(y["a"])("FileDrop-messages")
return r}Object(s["a"])(n,[{key:"getDataTransferItems",value:function(e,t){var n=Array.from(O(e,this.fileInputEl))
n.length>1&&(n=this.shouldAllowMultiple?n:[n[0]])
if(t)return n.map((function(e){return Object.assign(e,{preview:window.URL.createObjectURL(e)})}))
return n}},{key:"parseFiles",value:function(e){var t=this
var n=[]
var r=[]
e.forEach((function(e){t.fileAccepted(e)&&t.fileMatchSize(e)?n.push(e):r.push(e)}))
return[n,r]}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"acceptStr",value:function(){var e=this.props.accept
return e?D(e).join(","):null}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,n=e.renderLabel
return Object(L["a"])(t||n,{isDragAccepted:this.state.isDragAccepted,isDragRejected:this.state.isDragRejected,interaction:this.interaction})}},{key:"render",value:function(){var e,t,n
var a=this.props,o=a.display,s=a.height,l=a.width,c=a.minWidth,d=a.maxWidth,p=a.margin,h=(a.onDropAccepted,a.onDropRejected,Object(i["a"])(a,["display","height","width","minWidth","maxWidth","margin","onDropAccepted","onDropRejected"]))
var f=this.props.id||this.defaultId
var g="disabled"===this.interaction||"readonly"===this.interaction
var b=this.state.isDragRejected||this.invalid?"danger":void 0
var y=(e={},Object(r["a"])(e,N.label,true),Object(r["a"])(e,N.functionallyDisabled,g),Object(r["a"])(e,N.visuallyDisabled,"disabled"===this.interaction),Object(r["a"])(e,N.dragRejected,this.state.isDragRejected||this.invalid),Object(r["a"])(e,N.dragAccepted,this.state.isDragAccepted),Object(r["a"])(e,N.withHeight,s),e)
return u.a.createElement(_["a"],{display:o,position:"relative",width:l,minWidth:c,maxWidth:d,margin:p,height:s},u.a.createElement("label",{className:m()(y),htmlFor:f,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleChange},u.a.createElement(_["a"],{display:"block",position:"relative",withFocusOutline:this.state.isFocused,borderRadius:"large",focusColor:b,height:s},u.a.createElement("span",{className:m()((t={},Object(r["a"])(t,N.labelContent,true),Object(r["a"])(t,N.withHeight,s),t))},u.a.createElement("span",{className:m()((n={},Object(r["a"])(n,N.layout,true),Object(r["a"])(n,N.withHeight,s),n))},u.a.createElement(_["a"],{height:s},this.renderLabel()))))),u.a.createElement("input",Object.assign({},Object(x["b"])(h),{onClick:this.handleClick,type:"file",className:N.input,id:f,ref:this.handleRef,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,multiple:this.shouldAllowMultiple,accept:this.acceptStr(),onChange:this.handleChange,"aria-describedby":this.hasMessages?this.messagesId:null,disabled:g})),this.hasMessages?u.a.createElement(_["a"],{display:"block",margin:"small 0 0"},u.a.createElement(v["c"],{id:this.messagesId,messages:this.props.messages})):null)}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"interaction",get:function(){return Object(E["a"])({props:this.props})}},{key:"shouldEnablePreview",get:function(){return this.props.enablePreview||this.props.shouldEnablePreview}},{key:"shouldAllowRepeats",get:function(){return this.props.allowRepeatFileSelection||this.props.shouldAllowRepeats}},{key:"shouldAllowMultiple",get:function(){return this.props.allowMultiple||this.props.shouldAllowMultiple}},{key:"invalid",get:function(){return this.hasMessages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}}])
n.displayName="FileDrop"
return n}(d["Component"]),I.propTypes={id:h.a.string,renderLabel:h.a.oneOfType([h.a.func,h.a.node]).isRequired,accept:h.a.oneOfType([h.a.string,h.a.arrayOf(h.a.string)]),messages:h.a.arrayOf(v["d"].message),onClick:h.a.func,onDrop:h.a.func,onDropAccepted:h.a.func,onDropRejected:h.a.func,onDragEnter:h.a.func,onDragOver:h.a.func,onDragLeave:h.a.func,shouldEnablePreview:h.a.bool,shouldAllowMultiple:h.a.bool,shouldAllowRepeats:h.a.bool,maxSize:h.a.number,minSize:h.a.number,interaction:h.a.oneOf(["enabled","disabled","readonly"]),display:h.a.oneOf(["block","inline-block"]),height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),maxWidth:h.a.oneOfType([h.a.string,h.a.number]),minWidth:h.a.oneOfType([h.a.string,h.a.number]),margin:j["c"].spacing,label:h.a.oneOfType([h.a.func,h.a.node]),enablePreview:h.a.bool,allowRepeatFileSelection:h.a.bool,allowMultiple:h.a.bool},I.defaultProps={onClick:function(e){},onDrop:function(e,t,n){},onDropAccepted:function(e,t){},onDropRejected:function(e,t){},onDragEnter:function(e){},onDragOver:function(e){},onDragLeave:function(e){},shouldEnablePreview:false,shouldAllowMultiple:false,shouldAllowRepeats:true,maxSize:Infinity,minSize:0,interaction:void 0,messages:[],id:void 0,accept:void 0,display:"block",height:void 0,width:void 0,minWidth:void 0,maxWidth:void 0,margin:void 0},T))||A)||A)||A)},VXGR:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("TnsN")
var i=n("Y/W1")
var a=n.n(i)
var o=n("C8i9")
class s extends r["a"]{initialize(){this.on("change:sort change:order",this.setQueryStringParams)
return super.initialize(...arguments)}fetch(e={}){e.data=a.a.extend({content_types:null!=this.parentFolder?this.parentFolder.contentTypes:void 0},e.data||{});(null!=this.parentFolder?this.parentFolder.useVerifiers:void 0)&&(e.data.use_verifiers=1)
return super.fetch(e)}parse(e){if(e&&this.parentFolder){const t=this.parentFolder.previewUrl()
a.a.each(e,e=>e.rce_preview_url=t?t.replace("{{id}}",e.id.toString()):e.url)}return super.parse(...arguments)}setQueryStringParams(){const e={include:["user"],per_page:20,sort:this.get("sort"),order:this.get("order")}
if(this.loadedAll)return
const t=new URL(this.url)
const n=deparam(t.search)
t.search=$.param(a.a.extend(n,e))
this.url=t.toString()
return this.reset()}}s.optionProperty("parentFolder")
s.prototype.model=o["a"]},WIG6:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("RtDj")
n("q1tI")
n("17x9")
var i=n("bJGz")
var a=n("ouhR")
var o=n.n(a)
function s({tool:e,placement:t,acceptedResourceTypes:n,targetResourceType:a,allowItemSelection:s,selectableItems:l,onDismiss:c,open:d}){const u={com_instructure_course_accept_canvas_resource_types:n,com_instructure_course_canvas_resource_type:a,com_instructure_course_allow_canvas_resource_selection:s,com_instructure_course_available_canvas_resources:l,display:"borderless",placement:t}
const p=-1===(null===e||void 0===e?void 0:e.base_url.indexOf("?"))?"?":"&"
const h=`${null===e||void 0===e?void 0:e.base_url}${p}${o.a.param(u)}`
const f=e?e.title:""
return Object(r["a"])(i["a"],{open:d,label:f,onDismiss:c,placement:"end",size:"regular",padding:"0",headerPadding:"medium"},void 0,Object(r["a"])("iframe",{style:{border:"none",display:"block",width:"100%",height:"100%"},"data-testid":"ltiIframe",src:h,title:f,"data-lti-launch":"true"}))}},agq5:function(e,t,n){"use strict"
n.d(t,"a",(function(){return k}))
var r=n("VTBJ")
var i=n("rePB")
var a=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var d=n.n(c)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var f=n.n(h)
var m=n("msMH")
var g=n("n12J")
var b=n("J2CL")
var v=n("E+IV")
var _=n("KgFQ")
var y=n("jtGx")
function j(e){var t=e.borders,n=e.colors,r=e.spacing,i=e.typography
return{fontFamily:i.fontFamily,paddingSmall:r.small,paddingMedium:r.medium,paddingLarge:r.medium,iconColor:n.textDark,mediumMargin:r.small,largeMargin:r.medium,iconHoverColor:n.textLink,backgroundColor:n.backgroundLightest,iconHoverColorInverse:n.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:n.textDark,messageColorClickable:n.textLink,messageColorInverse:n.textLight,messageFontSizeSmall:i.fontSizeSmall,messageFontSizeMedium:i.fontSizeMedium,messageFontSizeLarge:i.fontSizeLarge,clickableActiveBg:n.backgroundBrand,clickableActiveText:n.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}j.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
var S,w,L,x
var E={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var k=(S=Object(b["j"])(j,E),S(w=(x=L=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(a["a"])(this,n)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e.handleClick=function(t){var n=e.props,r=n.readOnly,i=n.onClick
if(r){t.preventDefault()
t.stopPropagation()}else"function"===typeof i&&i(t)}
return e}Object(o["a"])(n,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,n=e.headingAs,r=e.heading
return d.a.createElement("span",{className:E.heading},d.a.createElement(m["a"],{level:t,as:n,color:"primary"},r))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,n=e.message,r=e.hero
return d.a.createElement("span",{className:E.content},r&&d.a.createElement("span",{className:E.hero},this.renderHero()),t&&this.renderHeading(),n&&d.a.createElement("span",{className:E.message},Object(v["a"])(n)))}},{key:"render",value:function(){var e
var t=this.props,a=t.href,o=t.disabled,s=t.readOnly,l=t.onClick,c=t.size,u=t.margin,p=t.elementRef
var h=(e={},Object(i["a"])(e,E.root,true),Object(i["a"])(e,E[c],true),Object(i["a"])(e,E.clickable,a||l),Object(i["a"])(e,E.disabled,o),e)
var m=Object(_["a"])(n,this.props)
return d.a.createElement(g["a"],{as:"div",margin:u},d.a.createElement(g["a"],Object.assign({},Object(y["a"])(this.props,Object(r["a"])({},n.propTypes,{},g["a"].propTypes)),{type:"button"===m?"button":null,as:m,elementRef:p,className:f()(h),href:a,onClick:this.handleClick,disabled:o,"aria-disabled":o||s?"true":null}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
n.displayName="Billboard"
return n}(c["Component"]),L.propTypes={hero:p.a.oneOfType([p.a.element,p.a.func]),size:p.a.oneOf(["small","medium","large"]),as:p.a.elementType,elementRef:p.a.func,heading:p.a.string,headingAs:p.a.oneOf(["h1","h2","h3","span"]),headingLevel:p.a.oneOf(["h1","h2","h3","h4"]),message:p.a.oneOfType([p.a.node,p.a.func]),onClick:p.a.func,href:p.a.string,disabled:p.a.bool,readOnly:p.a.bool,margin:b["c"].spacing},L.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},x))||w)},fhP7:function(e,t,n){"use strict"
n.d(t,"k",(function(){return r}))
n.d(t,"e",(function(){return i}))
n.d(t,"f",(function(){return a}))
n.d(t,"g",(function(){return o}))
n.d(t,"h",(function(){return s}))
n.d(t,"l",(function(){return l}))
n.d(t,"i",(function(){return c}))
n.d(t,"b",(function(){return d}))
n.d(t,"j",(function(){return u}))
n.d(t,"c",(function(){return p}))
n.d(t,"d",(function(){return h}))
n.d(t,"a",(function(){return f}))
const r="@"
const i="mentions-marker"
const a="span#"+i
const o="mention-menu"
const s="span#mention-menu"
const l=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const c="mentions.NavigationEvent"
const d="mentions.InputChangeEvent"
const u="mentions.SelectionEvent"
const p={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const h={[p.up]:"UpArrow",[p.down]:"DownArrow",[p.enter]:"Enter"}
const f={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,t)=>`${e}-mention-popup-item-${t}`}},jFoo:function(e,t,n){"use strict"
n.d(t,"b",(function(){return d}))
n.d(t,"a",(function(){return u}))
n.d(t,"c",(function(){return f}))
var r=n("fhP7")
const i="error"
const a="unsupported_subject"
const o="wrong_origin"
const s="bad_request"
const l=({targetWindow:e,origin:t,subject:n,message_id:r})=>{const l=(i={})=>{const a={subject:n+".response"}
r&&(a.message_id=r)
e?e.postMessage({...a,...i},t):console.error("Error sending response postMessage: target window does not exist")}
const c=()=>{l({})}
const d=(e,t)=>{const n={code:e}
t&&(n.message=t)
l({error:n})}
const u=e=>{d(i,e)}
const p=e=>{d(s,e)}
const h=()=>{d(o)}
const f=()=>{d(a)}
return{sendResponse:l,sendSuccess:c,sendError:d,sendGenericError:u,sendBadRequestError:p,sendWrongOriginError:h,sendUnsupportedSubjectError:f}}
var c=l
const d={}
const u=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.hideRightSideWrapper","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","org.imsglobal.lti.capabilities","org.imsglobal.lti.get_data","org.imsglobal.lti.put_data","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const p=["A2ExternalContentReady","LtiDeepLinkingResponse",r["i"],r["b"],r["j"]]
async function h(e,t=false){if(e.data.source&&e.data.source.includes("react-devtools"))return false
let r
try{r="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}const i=r.subject||r.messageType
const a=c({targetWindow:e.source,origin:e.origin,subject:i,message_id:r.message_id})
if(p.includes(i))return false
if(!u.includes(i)){t&&a.sendUnsupportedSubjectError()
return false}if(!t&&i.includes("org.imsglobal.lti"))return false
try{const o=await n("G4i8")(`./${i}.js`)
const s=o.default({message:r,event:e,responseMessages:a})
!s&&t&&a.sendSuccess()
return true}catch(e){console.error(`Error loading or executing message handler for "${i}": ${e}`)
t&&a.sendGenericError(e.message)
return false}}function f(){var e,t
const n=null===(e=ENV)||void 0===e||null===(t=e.FEATURES)||void 0===t?void 0:t.lti_platform_storage
window.addEventListener("message",e=>{""!==e.data&&h(e,n)})}},m452:function(e,t,n){"use strict"
n.r(t)
var r=n("3jyj")
var i=n("s9Pr")
const a=ENV.FILES_CONTEXTS||[]
const o={contexts:a,contextsDictionary:a.reduce((e,t)=>{const[n,r]=Array.from(Object(i["a"])(t.asset_string))
t.contextType=n
t.contextId=r
e[[n,r].join("_")]=t
return e},{}),showingAllContexts:window.location.pathname.match(/^\/files/),contextType:null!=a[0]?a[0].contextType:void 0,contextId:null!=a[0]?a[0].contextId:void 0,rootFolders:a.map(e=>{if(ENV.current_user_id){const t=new r["a"]({custom_name:e.name,context_type:e.contextType.replace(/s$/,""),context_id:e.contextId})
t.url=`/api/v1/${e.contextType}/${e.contextId}/folders/root`
t.fetch()
return t}})}
o.contextFor=function(e){let t
e.collection&&e.collection.parentFolder&&(e=e.collection.parentFolder)
if(e instanceof r["a"]){const n=e
t=`${n&&n.get("context_type")}s_${n&&n.get("context_id")}`.toLowerCase()}else e.contextType&&e.contextId&&(t=`${e.contextType}_${e.contextId}`.toLowerCase())
return o.contextsDictionary&&o.contextsDictionary[t]}
o.userHasPermission=function(e,t){if(!e)return false
return o.contextFor(e)&&o.contextFor(e).permissions&&o.contextFor(e).permissions[t]}
o.baseUrl=o.showingAllContexts?"/files":`/${o.contextType}/${o.contextId}/files`
t["default"]=o},msTH:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("Y/W1")
var o=n.n(a)
var s=n("gI0r")
var l=n("HGxv")
const c=Object(l["useScope"])("user_content")
const d={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=i()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=i()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=i()(`<a\n        id='media_comment_${Object(s["a"])(i()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(i()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(i()(e).attr("data-alt"))}'\n      />`)
t.html(i()(e).html())
return t},convert(e,t={}){const n=i()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=i()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const r=i()(`<form\n            action='${Object(s["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
r.append(i()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
r.append(i()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
i()("body").append(r)
setTimeout(()=>r.submit(),0)
return i()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(c.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=i()(t)
const r=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(r)})}return n.html()}}
t["a"]=d},plYi:function(e,t,n){"use strict"
var r=n("HGxv")
t["a"]={strings(e,t){let n=r["default"].locale||"en-US"
const i={zh_Hant:"zh-Hant"}
n=i[n]||n
return e.localeCompare(t,n,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,n)=>this.strings(e(t),e(n))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},whu9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("VTBJ")
var i=n("1OyB")
var a=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var d=n("hPGw")
var u=c.a.createElement("path",{d:"M1838.86029,1451.57632 L1920,1532.94589 L1558.4341,1894.51179 L361.565904,1894.51179 L0,1532.94589 L81.2546391,1451.57632 L409.146414,1779.58302 L1510.85359,1779.58302 L1838.86029,1451.57632 Z M962.333054,25 L1462.61798,525.284928 L1381.47827,606.654495 L1019.68251,244.973662 L1019.68251,1432.53262 L904.86867,1432.53262 L904.86867,244.973662 L543.187837,606.654495 L462.048126,525.284928 L962.333054,25 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconUploadLine"
return n}(l["Component"])
p.glyphName="upload"
p.variant="Line"
p.propTypes=Object(r["a"])({},d["a"].propTypes)},"zq/q":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("QYKH")
class i extends r["a"]{initialize(e,t){return super.initialize(...arguments)}}}}])

//# sourceMappingURL=77-c-b1b17c7056.js.map