(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[55,4192],{"0k/6":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
n.d(t,"b",(function(){return s}))
n.d(t,"c",(function(){return l}))
n.d(t,"d",(function(){return p}))
var i=n("NFDp")
const r="inst-button-and-icons-edit"
const a="inst-button-and-icons-edit-toolbar"
const o="data-inst-icon-maker-icon"
const s="data-download-url"
const l="icon_maker_icons"
const c=e=>!!(null!==e&&void 0!==e&&e.getAttribute(o))
function p(e,t){u(e,t)
d(e)}function u(e,t){e.ui.registry.addButton(r,{onAction:t,text:Object(i["a"])("Edit"),tooltip:Object(i["a"])("Edit Existing Button / Icon")})}function d(e){e.ui.registry.addContextToolbar(a,{items:r,position:"node",scope:"node",predicate:c})}},"0unK":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
class o extends a.a.Component{render(){return Object(i["a"])("div",{className:this.props.className,style:this.props.style},void 0,this.props.children)}}o.displayName="ModalContent"
o.defaultProps={className:"ReactModal__Body",style:{}}},"7lHU":function(e,t,n){"use strict"
var i=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
var o=n("17x9")
var s=n("RfgP")
var l=n("HGxv")
var c=n("vCN0")
var p=n("0unK")
var u=n("GN1s")
const d=Object(l["useScope"])("zip_file_options_form")
class h extends a.a.Component{constructor(...e){super(...e)
this.handleExpandClick=()=>{this.props.onZipOptionsResolved({file:this.props.fileOptions.file,expandZip:true})}
this.handleUploadClick=()=>{this.props.onZipOptionsResolved({file:this.props.fileOptions.file,expandZip:false})}
this.buildMessage=e=>{let t
if(this.props.fileOptions){const e=this.props.fileOptions.file.name
t=d.t("message",'Would you like to expand the contents of "%{fileName}" into the current folder, or upload the zip file as is?',{fileName:e})}return t}}render(){return a.a.createElement(c["a"],{className:"ReactModal__Content--canvas ReactModal__Content--mini-modal",isOpen:!!this.props.fileOptions,ref:"canvasModal",title:d.t("zip_options","Zip file options"),onRequestClose:this.props.onClose},Object(i["a"])(p["a"],{},void 0,Object(i["a"])("p",{className:"modalMessage"},void 0,this.buildMessage())),Object(i["a"])(u["a"],{},void 0,Object(i["a"])("button",{className:"btn",onClick:this.handleExpandClick},void 0,d.t("expand","Expand It")),Object(i["a"])("button",{className:"btn btn-primary",onClick:this.handleUploadClick},void 0,d.t("upload","Upload It"))))}}h.displayName="ZipFileOptionsForm"
var f=h
var g=n("MAjw")
Object(o["oneOfType"])([o["string"],o["number"]]).isRequired,o["string"].isRequired,o["object"],o["bool"],o["bool"],o["string"],o["string"],o["bool"],o["bool"],o["bool"],o["bool"],o["func"],o["func"],o["func"],o["func"]
class m extends a.a.Component{constructor(e){super(e)
this.addFiles=()=>this.addFileInputRef.current.click()
this.handleFilesInputChange=e=>{this.props.onChange(e)
g["a"].setOptionsFromFiles(e.target.files)
this.setStateFromOptions()}
this.onNameConflictResolved=e=>{g["a"].onNameConflictResolved(e)
this.setStateFromOptions(()=>{if(this.state.resolvedNames.length+this.state.nameCollisions.length+this.state.zipOptions.length===0){this.reset()
this.props.onChange()}})}
this.onZipOptionsResolved=e=>{g["a"].onZipOptionsResolved(e)
this.setStateFromOptions()}
this.onClose=()=>{if(this.props.autoUpload){this.reset()
g["a"].resetState()
this.setStateFromOptions()
this.props.onEmptyOrClose()}else this.restore()}
this.setStateFromOptions=e=>{this.setState(g["a"].getState(),e)}
this.buildPotentialModal=()=>{if(this.state.zipOptions.length&&!this.props.alwaysUploadZips)return Object(i["a"])(f,{fileOptions:this.state.zipOptions[0],onZipOptionsResolved:this.onZipOptionsResolved,onClose:this.onClose})
if(this.state.nameCollisions.length&&!this.props.alwaysRename)return Object(i["a"])(s["a"],{"data-testid":"rename-dialog",fileOptions:this.state.nameCollisions[0],onNameConflictResolved:this.onNameConflictResolved,onClose:this.onClose,allowSkip:this.props.allowSkip,onRenameFileMessage:this.props.onRenameFileMessage,onLockFileMessage:this.props.onLockFileMessage})}
this.formRef=a.a.createRef()
this.addFileInputRef=a.a.createRef()
this.state={...g["a"].getState(),showResolveModals:this.props.autoUpload}
this.setFolder(e.currentFolder)
this.setUploadOptions(e)}setFolder(e){const t=g["a"].getFolder()
g["a"].setFolder(e)
if(!this.props.autoUpload&&null!==t&&void 0!==t&&t.id&&null!==e&&void 0!==e&&e.id&&e.id!==t.id){g["a"].setOptionsFromFiles(this.addFileInputRef.current.files)
this.setStateFromOptions()}}getFolder(){return g["a"].getFolder()}reset(e=false){if(e||this.props.autoUpload){var t
null===(t=this.formRef.current)||void 0===t||t.reset()}this.setState({showResolveModals:this.props.autoUpload})}restore(){g["a"].setOptionsFromFiles(this.addFileInputRef.current.files)
this.setStateFromOptions()
this.setState({showResolveModals:false})}setUploadOptions({alwaysRename:e,alwaysUploadZips:t}){g["a"].setUploadOptions({alwaysRename:e,alwaysUploadZips:t})}_actualQueueUploads(){this.reset()
return g["a"].queueUploads(this.props.contextId,this.props.contextType)}queueUploads(){this.props.autoUpload?this._actualQueueUploads():this.state.showResolveModals||this.setState({showResolveModals:true})}componentDidUpdate(){this.setFolder(this.props.currentFolder)
this.setUploadOptions(this.props)
0===this.state.zipOptions.length&&0===this.state.nameCollisions.length&&g["a"].hasNewOptions()&&(this.props.autoUpload?this.state.resolvedNames.length>0?this._actualQueueUploads():this.props.onEmptyOrClose():this.state.showResolveModals&&(this.state.resolvedNames.length>0?this._actualQueueUploads():this.restore()))}UNSAFE_componentWillMount(){g["a"].onChange=this.setStateFromOptions}componentWillUnMount(){g["a"].onChange=null}render(){return Object(i["a"])("span",{},void 0,a.a.createElement("form",{ref:this.formRef,className:this.props.visible?"":"hidden"},a.a.createElement("input",{id:this.props.inputId,name:this.props.inputName,type:"file",ref:this.addFileInputRef,onChange:this.handleFilesInputChange,multiple:true,"data-testid":"file-input",disabled:this.props.disabled})),this.state.showResolveModals&&this.buildPotentialModal())}}m.defaultProps={allowSkip:false,autoUpload:true,disabled:false,alwaysRename:false,alwaysUploadZips:false,onChange:()=>{},onEmptyOrClose:()=>{},onRenameFileMessage:()=>{},onLockFileMessage:()=>{}}
t["a"]=m},"9Qmj":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("RtDj")
n("q1tI")
n("17x9")
var r=n("TSYQ")
var a=n.n(r)
function o(e){return Object(i["a"])("div",{className:a()({"progress-bar__bar-container":true,"almost-done":100===e.progress})},void 0,Object(i["a"])("div",{className:a()({"progress-bar__bar":true,"almost-done":100===e.progress}),role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100","aria-label":e["aria-label"]||"",style:{width:Math.min(e.progress,100)+"%"}}))}},"9dNb":function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var i=n("0k/6")
const r="image/svg"
const a=400
const o="image/svg+xml-icon-maker-icons"
async function s(e){try{const t=await e.slice(0,a).text()
if(t.includes(o))return{category:i["c"]}}catch{}}async function l(e){var t
if(null!==e&&void 0!==e&&null!==(t=e.type)&&void 0!==t&&t.includes(r))return await s(e)}},BrAc:function(e,t,n){"use strict"
var i=n("vDqi")
var r=n.n(i)
r.a.defaults.xsrfCookieName="_csrf_token"
r.a.defaults.xsrfHeaderName="X-CSRF-Token"
const a=r.a.defaults.headers.common.Accept
r.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+a
r.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=r.a},C8i9:function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
var a=n("Y/W1")
var o=n.n(a)
var s=n("QYKH")
var l=n("EyBU")
n("dhbk")
var c=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var n in t)u.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},u={}.hasOwnProperty,d=[].slice
t["a"]=function(e){p(t,e)
function t(){this.externalToolEnabled=c(this.externalToolEnabled,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.url=function(){return this.isNew()?t.__super__.url.apply(this,arguments):"/api/v1/files/"+this.id}
t.prototype.initialize=function(e,n){null==n&&(n={})
this.preflightUrl=n.preflightUrl
return t.__super__.initialize.apply(this,arguments)}
t.prototype.save=function(e,n){var i,a,o,s,c,p
null==e&&(e={})
null==n&&(n={})
if(!this.get("file"))return t.__super__.save.apply(this,arguments)
this.set(e)
i=r.a.Deferred()
c=(u=this,function(e){u.set(e)
i.resolve(e)
return"function"===typeof n.success?n.success(e):void 0})
var u
s=function(e){i.reject(e)
return"function"===typeof n.error?n.error(e):void 0}
a=this.get("file")
o=(a.value||a.name).split(/[\/\\]/).pop()
a=a.files[0]
p={name:o,on_duplicate:"rename"}
Object(l["uploadFile"])(this.preflightUrl,p,a).then(c)["catch"](s)
return i}
t.prototype.isFile=true
t.prototype.toJSON=function(){var e
if(!this.get("file"))return t.__super__.toJSON.apply(this,arguments)
return o.a.pick.apply(o.a,[this.attributes,"file"].concat(d.call(o.a.keys(null!=(e=this.uploadParams)?e:{}))))}
t.prototype.present=function(){return o.a.clone(this.attributes)}
t.prototype.externalToolEnabled=function(e){var t
if(e.accept_media_types&&e.accept_media_types.length>0){t=this.get("content-type")
return o.a.find(e.accept_media_types.split(","),(function(e){var n
n=new RegExp("^"+e.replace("*",".*")+"$")
return t.match(n)}))}return true}
return t}(s["a"])},"CO+y":function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var i=n("Ff2n")
var r=n("1OyB")
var a=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var p=n("17x9")
var u=n.n(p)
var d=n("KgFQ")
var h=n("jtGx")
var f=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,r=Object(i["a"])(e,["children"])
var a=Object(d["a"])(n,this.props)
return c.a.createElement(a,Object.assign({},Object(h["b"])(r),{"aria-hidden":"true"}),t)}}])
n.displayName="PresentationContent"
return n}(l["Component"])
f.propTypes={as:u.a.elementType,children:u.a.node}
f.defaultProps={as:"span",children:null}},CyAq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},EyBU:function(e,t,n){"use strict"
n.r(t)
n.d(t,"uploadFile",(function(){return d}))
n.d(t,"completeUpload",(function(){return h}))
n.d(t,"submissionCommentAttachmentsUpload",(function(){return f}))
n.d(t,"uploadFiles",(function(){return g}))
var i=n("BrAc")
var r=n("Qyje")
var a=n.n(r)
var o=n("HGxv")
var s=n("gBVS")
const l=Object(o["useScope"])("upload_file")
function c(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to initiate the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function p(e){if("Network Error"===e.message){const t=new Error(l.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function u(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to complete the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function d(e,t,n,r=i["a"],o){if(!n&&!t.url)throw new Error("expected either a file to upload or a url to clone",{file:n,preflightData:t})
if(n&&t.url)throw new Error("can't upload with both a file object and a url to clone",{file:n,preflightData:t})
t.no_redirect=true
t["attachment[context_code]"]&&(t=a.a.stringify(t))
return r.post(e,t).catch(c).then(e=>h(e.data,n,{ajaxLib:r,onProgress:o}))}function h(e,t,n={}){const r=n.ajaxLib||i["a"]
const o=n.ajaxLibOptions||{}
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(t&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!t&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const{upload_url:l,progress:c}=e
if(!l)return Object(s["a"])(c,{ajaxLib:r}).catch(u)
let{file_param:d,upload_params:h,success_url:f}=e
d=d||"file"
h=h||{}
f=f||h.success_url
const g=!!f
const m=new FormData
Object.entries(h).forEach(([e,t])=>m.append(e,t))
t&&m.append(d,t,n.filename)
const v=r.post(l,m,{responseType:g?"document":"json",onUploadProgress:n.onProgress,withCredentials:!g,...o})
return v.catch(p).then(e=>{if(c)return Object(s["a"])(c,{ajaxLib:r}).catch(u)
let t,i={}
if(f){const{Bucket:n,Key:r,ETag:a}=e.data
t=f
i={bucket:n,key:r,etag:a}}else if(201===e.status&&!n.ignoreResult){t=e.data.location
i={}}if(t){n.includeAvatar&&(i.include="avatar")
i=a.a.stringify(i)
i&&(t=-1!==t.indexOf("?")?`${t}&${i}`:`${t}?${i}`)
return r.get(t).then(({data:e})=>e).catch(u)}return e.data})}function f(e,t,n){const i=`/api/v1/courses/${t}/assignments/${n}/submissions/self/comments/files`
const r=e.map(e=>{const t={name:e.name,content_type:e.type}
return d(i,t,e)})
return Promise.all(r)}function g(e,t){const n=e.map(e=>e.url?d(t,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:false}):d(t,{name:e.name,content_type:e.type},e))
return Promise.all(n)}},GN1s:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
class o extends a.a.Component{render(){return Object(i["a"])("div",{className:this.props.className},void 0,Object(i["a"])("div",{className:this.props.footerClassName},void 0,this.props.children))}}o.displayName="ModalButtons"
o.defaultProps={className:"ReactModal__Footer",footerClassName:"ReactModal__Footer-Actions"}},IRk9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var i=n("VTBJ")
var r=n("1OyB")
var a=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var p=n("hPGw")
var u=c.a.createElement("path",{d:"M797.319865 985.881673L344.771525 1438.43001 533.333333 1626.99182 985.881673 1174.44348 1438.43001 1626.99182 1626.99182 1438.43001 1174.44348 985.881673 1626.99182 533.333333 1438.43001 344.771525 985.881673 797.319865 533.333333 344.771525 344.771525 533.333333z",fillRule:"nonzero",stroke:"none",strokeWidth:"1"})
var d=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){return c.a.createElement(p["a"],Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920"}),u)}}])
n.displayName="IconXSolid"
return n}(l["Component"])
d.glyphName="x"
d.variant="Solid"
d.propTypes=Object(i["a"])({},p["a"].propTypes)},MAjw:function(e,t,n){"use strict"
var i=n("Y/W1")
var r=n.n(i)
var a=n("hlSq")
var o=n("i8i4")
var s=n.n(o)
var l=n("9dNb")
class c{constructor(){this.state=this.buildDefaultState()
this.uploadOptions={alwaysRename:false,alwaysUploadZips:false}}buildDefaultState(){return{resolvedNames:[],nameCollisions:[],zipOptions:[],newOptions:false}}async applyCategory(e){const t=async e=>{const t=await l["a"](e.file)
return{...e,...t}}
return Promise.all(e.map(t))}queueUploads(e,t){this.applyCategory(this.state.resolvedNames).then(n=>{n.forEach(n=>{a["a"].enqueue(n,this.folder,e,t)})}).catch(e=>{throw e})
this.setState({newOptions:false})}toFilesOptionArray(e){return[].slice.call(e,0).map(e=>({file:e}))}findMatchingFile(e){return(this.folder.files.models||this.folder.files).find(t=>t.get("display_name")===e)}isZipFile(e){return!!(null!=e.type?e.type.match(/zip/):void 0)}segregateOptionBuckets(e){const[t,n,i]=[[],[],[]]
e.forEach(e=>{this.isZipFile(e.file)&&this.uploadOptions.alwaysUploadZips&&(e.expandZip=false)
if(this.isZipFile(e.file)&&"undefined"===typeof e.expandZip)i.push(e)
else if("skip"!==e.dup){const i=e.name||e.file.name
const r=this.findMatchingFile(i)
if(!r||"overwrite"===e.dup||null!=e.expandZip&&false!==e.expandZip||this.uploadOptions.alwaysRename){e.replacingFileId=null===r||void 0===r?void 0:r.id
n.push(e)}else{r.get("restricted_by_master_course")&&(e.cannotOverwrite=true)
t.push(e)}}})
return{collisions:t,resolved:n,zips:i}}handleAddFilesClick(){return s.a.findDOMNode(this.refs.addFileInput).click()}handleFilesInputChange(e){const t=this.toFilesOptionArray(s.a.findDOMNode(this.refs.addFileInput).files)
const{resolved:n,collisions:i,zips:r}=this.segregateOptionBuckets(t)
this.setState({nameCollisions:i,resolvedNames:n,zipOptions:r})}onNameConflictResolved(e){let t,n
const{nameCollisions:i}=this.state
const{resolvedNames:r}=this.state
let a=this.state.zipOptions
r.push(e)
i.shift()
const o=r.concat(i).concat(a);({resolved:n,collisions:t,zips:a}=this.segregateOptionBuckets(o))
this.setState({nameCollisions:t,resolvedNames:n,zipOptions:a})}onZipOptionsResolved(e){let t,n
const{nameCollisions:i}=this.state
const{resolvedNames:r}=this.state
let a=this.state.zipOptions
r.push(e)
a.shift()
const o=r.concat(i).concat(a);({resolved:n,collisions:t,zips:a}=this.segregateOptionBuckets(o))
this.setState({nameCollisions:t,resolvedNames:n,zipOptions:a})}setOptionsFromFiles(e,t){const n=this.toFilesOptionArray(e)
const{resolved:i,collisions:r,zips:a}=this.segregateOptionBuckets(n)
this.setState({nameCollisions:r,resolvedNames:i,zipOptions:a,newOptions:true})
if(t&&this.onChange)return this.onChange()}hasNewOptions(){return this.state.newOptions}setFolder(e){return this.folder=e}getFolder(){return this.folder}setState(e){return this.state=r.a.defaults(e,this.state)}getState(){return this.state}resetState(){return this.state=this.buildDefaultState()}setUploadOptions(e){this.uploadOptions.alwaysRename=!!e.alwaysRename
this.uploadOptions.alwaysUploadZips=!!e.alwaysUploadZips}onChange(){}}t["a"]=new c},Mmr1:function(e,t,n){"use strict"
n.d(t,"a",(function(){return U}))
var i=n("rePB")
var r=n("Ff2n")
var a=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var l=n("LK+K")
n("DEX3")
var c=n("q1tI")
var p=n.n(c)
var u=n("17x9")
var d=n.n(u)
var h=n("TSYQ")
var f=n.n(h)
var g=n("IRk9")
var m=n("6SzX")
var v=n("oXx0")
var b=n("J2CL")
var _=n("nAyT")
var y=n("jtGx")
var k=n("tCl5")
var O=n("C6Zt")
var R=function(e){var t=e.spacing,n=e.stacking
return{offsetMedium:t.medium,offsetSmall:t.small,offsetXSmall:t.xSmall,zIndex:n.above}}
var x,C,j,w,E,N
var B={componentId:"ejhDx",template:function(e){return"\n\n.ejhDx_bGBk{display:inline-block;z-index:".concat(e.zIndex||"inherit","}\n\n.ejhDx_doBn{position:static}\n\n.ejhDx_bQpq,.ejhDx_bxia{position:absolute}\n\n.ejhDx_coHh{top:").concat(e.offsetXSmall||"inherit","}\n\n.ejhDx_cDib{top:").concat(e.offsetSmall||"inherit","}\n\n.ejhDx_faeR{top:").concat(e.offsetMedium||"inherit","}\n\n.ejhDx_bQpq{inset-inline-end:0;inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq{left:auto;right:0}\n\n[dir=rtl] .ejhDx_bQpq{left:0;right:auto}\n\n.ejhDx_bQpq.ejhDx_coHh{inset-inline-end:").concat(e.offsetXSmall||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq.ejhDx_coHh{left:auto;right:").concat(e.offsetXSmall||"inherit","}\n\n[dir=rtl] .ejhDx_bQpq.ejhDx_coHh{left:").concat(e.offsetXSmall||"inherit",";right:auto}\n\n.ejhDx_bQpq.ejhDx_cDib{inset-inline-end:").concat(e.offsetSmall||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq.ejhDx_cDib{left:auto;right:").concat(e.offsetSmall||"inherit","}\n\n[dir=rtl] .ejhDx_bQpq.ejhDx_cDib{left:").concat(e.offsetSmall||"inherit",";right:auto}\n\n.ejhDx_bQpq.ejhDx_faeR{inset-inline-end:").concat(e.offsetMedium||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .ejhDx_bQpq.ejhDx_faeR{left:auto;right:").concat(e.offsetMedium||"inherit","}\n\n[dir=rtl] .ejhDx_bQpq.ejhDx_faeR{left:").concat(e.offsetMedium||"inherit",";right:auto}\n\n.ejhDx_bxia{inset-inline-end:auto;inset-inline-start:0}\n\n[dir=ltr] .ejhDx_bxia{left:0;right:auto}\n\n[dir=rtl] .ejhDx_bxia{left:auto;right:0}\n\n.ejhDx_bxia.ejhDx_coHh{inset-inline-end:auto;inset-inline-start:").concat(e.offsetXSmall||"inherit","}\n\n[dir=ltr] .ejhDx_bxia.ejhDx_coHh{left:").concat(e.offsetXSmall||"inherit",";right:auto}\n\n[dir=rtl] .ejhDx_bxia.ejhDx_coHh{left:auto;right:").concat(e.offsetXSmall||"inherit","}\n\n.ejhDx_bxia.ejhDx_cDib{inset-inline-end:auto;inset-inline-start:").concat(e.offsetSmall||"inherit","}\n\n[dir=ltr] .ejhDx_bxia.ejhDx_cDib{left:").concat(e.offsetSmall||"inherit",";right:auto}\n\n[dir=rtl] .ejhDx_bxia.ejhDx_cDib{left:auto;right:").concat(e.offsetSmall||"inherit","}\n\n.ejhDx_bxia.ejhDx_faeR{inset-inline-end:auto;inset-inline-start:").concat(e.offsetMedium||"inherit","}\n\n[dir=ltr] .ejhDx_bxia.ejhDx_faeR{left:").concat(e.offsetMedium||"inherit",";right:auto}\n\n[dir=rtl] .ejhDx_bxia.ejhDx_faeR{left:auto;right:").concat(e.offsetMedium||"inherit","}")},root:"ejhDx_bGBk","placement--static":"ejhDx_doBn","placement--end":"ejhDx_bQpq","placement--start":"ejhDx_bxia","offset--x-small":"ejhDx_coHh","offset--small":"ejhDx_cDib","offset--medium":"ejhDx_faeR"}
var U=(x=Object(_["a"])("8.0.0",{children:"screenReaderLabel",buttonRef:"elementRef",variant:"color"}),C=Object(v["a"])(),j=Object(b["j"])(R,B),x(w=C(w=j(w=(N=E=function(e){Object(s["a"])(n,e)
var t=Object(l["a"])(n)
function n(){Object(a["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"componentDidMount",value:function(){this.props.screenReaderLabel||this.props.children}},{key:"componentDidUpdate",value:function(){this.props.screenReaderLabel||this.props.children}},{key:"render",value:function(){var e
var t=this.props,n=t.children,a=t.screenReaderLabel,o=t.elementRef,s=t.buttonRef,l=t.size,c=t.onClick,u=t.margin,d=t.placement,h=t.offset,v=t.type,b=t.as,_=t.href,k=t.cursor,R=t.tabIndex,x=Object(r["a"])(t,["children","screenReaderLabel","elementRef","buttonRef","size","onClick","margin","placement","offset","type","as","href","cursor","tabIndex"])
return p.a.createElement("span",Object.assign({},Object(y["b"])(x),{className:f()((e={},Object(i["a"])(e,B.root,true),Object(i["a"])(e,B["placement--".concat(d)],d),Object(i["a"])(e,B["offset--".concat(h)],h),e))}),p.a.createElement(O["a"],{renderIcon:g["a"],elementRef:o||s,interaction:this.interaction,type:v,color:this.color,size:l,onClick:c,margin:u,withBorder:false,withBackground:false,as:b,href:_,cursor:k,tabIndex:R},p.a.createElement(m["a"],null,a||n)))}},{key:"interaction",get:function(){return Object(k["a"])({props:this.props})}},{key:"color",get:function(){var e=this.props,t=e.color,n=e.variant
if("icon-inverse"===n||"primary-inverse"===t)return"primary-inverse"
return"secondary"}}])
n.displayName="CloseButton"
return n}(c["Component"]),E.propTypes={screenReaderLabel:d.a.oneOfType([d.a.string,d.a.node]),color:d.a.oneOf(["primary","primary-inverse"]),interaction:d.a.oneOf(["enabled","disabled","readonly"]),elementRef:d.a.func,size:d.a.oneOf(["small","medium","large"]),onClick:d.a.func,margin:b["c"].spacing,placement:d.a.oneOf(["start","end","static"]),offset:d.a.oneOf(["none","x-small","small","medium"]),type:d.a.oneOf(["button","submit","reset"]),as:d.a.elementType,href:d.a.string,cursor:d.a.string,tabIndex:d.a.oneOfType([d.a.number,d.a.string]),children:d.a.node,buttonRef:d.a.func,variant:d.a.oneOf(["icon","icon-inverse"])},E.defaultProps={screenReaderLabel:void 0,children:void 0,onClick:function(e){},elementRef:void 0,buttonRef:void 0,variant:void 0,color:void 0,interaction:void 0,disabled:void 0,readOnly:void 0,type:"button",placement:"static",offset:"x-small",size:"small",margin:"0",as:"button",href:void 0,cursor:"pointer",tabIndex:void 0},N))||w)||w)||w)},NFDp:function(e,t,n){"use strict"
var i=n("/HcR")
var r=n.n(i)
const a=r.a.namespace()
a.addLocale=e=>{a.setup({translations:{...a.setup().translations,...e}})}
t["a"]=a},QYKH:function(e,t,n){"use strict"
var i=n("mX+G")
var r=n.n(i)
var a=n("Y/W1")
var o=n.n(a)
var s=n("s9Pr")
var l=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
t["a"]=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.displayName=function(){return this.get("display_name")||this.get("name")}
t.prototype.destinationIsSameContext=function(e){var t,n,i,r,a,o,l,c
l=(t=this.get("context_asset_string"))?Object(s["a"])(t,false):[null!=(r=this.collection.parentFolder)?r.get("context_type"):void 0,null!=(a=this.collection.parentFolder)&&null!=(o=a.get("context_id"))?o.toString():void 0],i=l[0],n=l[1]
return i&&n&&i.toLowerCase()===e.get("context_type").toLowerCase()&&n===(null!=(c=e.get("context_id"))?c.toString():void 0)}
t.prototype.moveTo=function(e,t){null==t&&(t={})
return this.destinationIsSameContext(e)?this.moveToFolder(e,t):this.copyToContext(e,t)}
t.prototype.moveToFolder=function(e,t){var n
null==t&&(t={})
n=this.setAttributes({parent_folder_id:e.id},t)
$.extend(n,{parent_folder_id:e.id})
return this.save({},{attrs:n}).then((i=this,function(){i.collection.remove(i)
return i.updateCollection(i,e,t)}))
var i}
t.prototype.copyToContext=function(e,t){var n,i,r,a,s,l
null==t&&(t={})
n=this.setAttributes($.extend({},this.attributes),t)
s=this.isFile?"file":"folder"
n["source_"+s+"_id"]=n.id
delete n.id
i=new this.constructor(o.a.omit(n,"id","parent_folder_id","parent_folder_path"))
r=this.updateCollection(i,e,t)
i.url=r.url
this.set("url",r.url)
a="copy_"+s
l="/api/v1/folders/"+e.attributes.id+"/"+a
return i.save(n,{url:l})}
t.prototype.setAttributes=function(e,t){null==e&&(e={})
null==t&&(t={})
"overwrite"===t.dup?$.extend(e,{on_duplicate:"overwrite"}):"rename"===t.dup&&(t.name?$.extend(e,{display_name:t.name,name:t.name,on_duplicate:"rename"}):$.extend(e,{on_duplicate:"rename"}))
return e}
t.prototype.updateCollection=function(e,t,n){var i,r
r=this.isFile?"files":"folders"
i=t[r]
"overwrite"===n.dup&&i.remove(i.where({display_name:e.get("display_name")}))
i.add(e,{merge:true})
return i}
return t}(r.a.Model)},RfgP:function(e,t,n){"use strict"
var i=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
var o=n("fhzG")
var s=n.n(o)
var l=n("i8i4")
var c=n.n(l)
var p=n("17x9")
var u=n.n(p)
var d={displayName:"FileRenameForm",propType:{fileOptions:u.a.object,onNameConflictResolved:u.a.func.isRequired,allowSkip:u.a.bool,onRenameFileMessage:u.a.func,onLockFileMessage:u.a.func},getInitialState(){return{isEditing:false,fileOptions:this.props.fileOptions}},componentWillReceiveProps(e){this.setState({fileOptions:e.fileOptions,isEditing:false})},handleRenameClick(){this.setState({isEditing:true})},handleBackClick(){this.setState({isEditing:false})},handleSkipClick(){this.props.closeOnResolve&&this.refs.canvasModal.closeModal()
return this.props.onNameConflictResolved({file:this.state.fileOptions.file,dup:"skip",name:this.state.fileOptions.name,expandZip:this.state.fileOptions.expandZip})},handleReplaceClick(){this.props.closeOnResolve&&this.refs.canvasModal.closeModal()
return this.props.onNameConflictResolved({file:this.state.fileOptions.file,dup:"overwrite",name:this.state.fileOptions.name,expandZip:this.state.fileOptions.expandZip})},handleChangeClick(){this.props.closeOnResolve&&this.refs.canvasModal.closeModal()
return this.props.onNameConflictResolved({file:this.state.fileOptions.file,dup:"rename",name:c.a.findDOMNode(this.refs.newName).value,expandZip:this.state.fileOptions.expandZip})},handleFormSubmit(e){e.preventDefault()
return this.handleChangeClick()}}
var h=n("vCN0")
var f=n("0unK")
var g=n("GN1s")
var m=n("HGxv")
const v=Object(m["useScope"])("file_rename_form")
d.buildContent=function(){const{onRenameFileMessage:e,onLockFileMessage:t}=this.props
const n=this.state.fileOptions.name||this.state.fileOptions.file.name
let r
if(this.state.isEditing||this.state.fileOptions.cannotOverwrite){let e
e=this.state.fileOptions.cannotOverwrite?(null===t||void 0===t?void 0:t(n))||v.t('A locked item named "%{name}" already exists in this location. Please enter a new name.',{name:n}):v.t('Change "%{name}" to',{name:n})
r=a.a.createElement("div",{ref:"bodyContent"},Object(i["a"])("p",{},void 0,e),Object(i["a"])("form",{onSubmit:this.handleFormSubmit},void 0,Object(i["a"])("label",{className:"file-rename-form__form-label"},void 0,v.t("Name")),a.a.createElement("input",{className:"input-block-level",type:"text",defaultValue:n,ref:"newName"})))}else r=a.a.createElement("div",{ref:"bodyContent"},Object(i["a"])("p",{id:"renameFileMessage"},void 0,(null===e||void 0===e?void 0:e(n))||v.t('An item named "%{name}" already exists in this location. Do you want to replace the existing file?',{name:n})))
return r}
d.buildButtons=function(){let e
if(this.state.fileOptions.cannotOverwrite)e=[a.a.createElement("button",{key:"commitChangeBtn",ref:"commitChangeBtn",className:"btn btn-primary",onClick:this.handleChangeClick},v.t("Change"))]
else if(this.state.isEditing)e=[a.a.createElement("button",{key:"backBtn",ref:"backBtn",className:"btn btn-default",onClick:this.handleBackClick},v.t("Back")),a.a.createElement("button",{key:"commitChangeBtn",ref:"commitChangeBtn",className:"btn btn-primary",onClick:this.handleChangeClick},v.t("Change"))]
else{e=[a.a.createElement("button",{key:"renameBtn",ref:"renameBtn",className:"btn btn-default",onClick:this.handleRenameClick},v.t("Change Name")),a.a.createElement("button",{key:"replaceBtn",ref:"replaceBtn",className:"btn btn-primary",onClick:this.handleReplaceClick},v.t("Replace"))]
this.props.allowSkip&&e.unshift(a.a.createElement("button",{key:"skipBtn",ref:"skipBtn",className:"btn btn-default",onClick:this.handleSkipClick},v.t("Skip")))}return e}
d.render=function(){return Object(i["a"])("div",{},void 0,a.a.createElement(h["a"],{className:"ReactModal__Content--canvas ReactModal__Content--mini-modal",ref:"canvasModal",isOpen:this.props.fileOptions,title:v.t("Copy"),onRequestClose:this.props.onClose,closeWithX:this.props.closeWithX,"data-testid":"FileRenameForm-modal"},Object(i["a"])(f["a"],{},void 0,this.buildContent(),Object(i["a"])(g["a"],{},void 0,this.buildButtons()))))}
t["a"]=s()(d)},"XQb/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return F}))
var i=n("Ff2n")
var r=n("1OyB")
var a=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var p=n("17x9")
var u=n.n(p)
var d=n("J2CL")
var h=n("ODXe")
var f=n("CyAq")
function g(e){if(!e||"number"===typeof e)return e
var t=Object(f["a"])(e),n=Object(h["a"])(t,2),i=n[0],r=n[1]
return"ms"===r?i:"s"===r?1e3*i:i}var m=n("oXx0")
var v=n("JX7q")
var b=n("KQm4")
var _=n("QF4Q")
var y=false
var k={toArray:function(){return[]},contains:function(){return false},add:function(){},remove:function(){}}
function O(e){var t=Object(_["a"])(e)
if(!t)return k
var n={toArray:function(){R()
return Object(b["a"])(t.classList)}};["contains","add","remove"].forEach((function(e){n[e]=function(n){R()
return t.classList[e](n)}}))
return n}function R(){if(!y){if(!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){var e=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"classList")
Object.defineProperty(SVGElement.prototype,"classList",e)}y=true}}var x=n("II2N")
var C=n("sQ3t")
var j={EXITED:-2,EXITING:-1,ENTERING:1,ENTERED:2}
var w=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e._timeouts=[]
e.state={transitioning:false}
e.startTransition=function(t,n){var i=e.props,r=i.transitionEnter,a=i.transitionExit
t?e.enter(r&&n?j.EXITED:null):e.exit(a&&n?j.ENTERED:null)}
e.transition=function(t,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(e._unmounted)return
var a=O(Object(v["a"])(e))
var o=e.getTransitionClassName(t)
var s=e.getTransitionClassName(n)
var l=e.props.transitionClassName
n&&r&&e.transitionEnabled(t)?a.add(l):a.remove(l)
s&&a.remove(s)
o&&a.add(o)
t&&n&&e.props.onTransition(t,n)
e._timeouts.push(setTimeout((function(){if(e._unmounted)return
"function"===typeof i&&i()}),r))}
e.enter=function(t){if(e.state.transitioning||e._unmounted)return
var n=Object(v["a"])(e),i=n.props
i.onEnter()
i.transitionEnter?e.setState({transitioning:true},(function(){var n=function(){i.onEntering()
e.transition(j.ENTERED,j.ENTERING,(function(){e.setState({transitioning:false},(function(){i.onEntered()}))}))}
t?e.transition(t,null,(function(){e.transition(j.ENTERING,t,n,i.enterDelay)})):n()})):e.setState({transitioning:false},(function(){e.transition(j.ENTERED,j.EXITED)
i.onEntered()}))}
e.exit=function(t){if(e.state.transitioning)return
var n=Object(v["a"])(e),i=n.props
i.onExit()
i.transitionExit?e.setState({transitioning:true},(function(){var n=function(){i.onExiting()
e.transition(j.EXITED,j.EXITING,(function(){e.setState({transitioning:false},(function(){i.onExited()}))}))}
t?e.transition(t,null,(function(){e.transition(j.EXITING,t,n,i.exitDelay)})):n()})):e.setState({transitioning:false},(function(){e.transition(j.EXITED,j.ENTERED)
i.onExited()}))}
return e}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.startTransition(this.props.in,this.props.transitionOnMount)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){if(this.props.in!==e.in&&t.transitioning)return true
return null}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.clearTransition(e.transitionClassName)
this.props.transitionClassName!==e.transitionClassName&&this.clearTransition(e.transitionClassName)
e.in!==this.props.in&&this.startTransition(this.props.in,true)}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach((function(e){clearTimeout(e)}))
this._unmounted=true}},{key:"clearTransition",value:function(e){var t=this
if(this._unmounted)return
this.setState({transitioning:false},(function(){if(t._unmounted)return
var n=O(t)
Object.keys(j).forEach((function(e){n.remove(t.getTransitionClassName(e))}))
n.remove(e)}))}},{key:"transitionEnabled",value:function(e){var t=this.props
switch(e){case j.EXITED:case j.EXITING:return t.transitionExit
case j.ENTERED:case j.ENTERING:return t.transitionEnter
default:return false}}},{key:"getTransitionClassName",value:function(e){var t=this.props
switch(e){case j.EXITED:return t.exitedClassName
case j.ENTERING:return t.enteringClassName
case j.ENTERED:return t.enteredClassName
case j.EXITING:return t.exitingClassName
default:return null}}},{key:"renderChildren",value:function(){return Object(x["a"])(Object(C["a"])(this.props.children),{"aria-hidden":!this.props.in||null})}},{key:"render",value:function(){return this.props.in||!this.props.unmountOnExit||this.state.transitioning?this.renderChildren():null}}])
n.displayName="BaseTransition"
return n}(c.a.Component)
w.propTypes={in:u.a.bool,unmountOnExit:u.a.bool,transitionOnMount:u.a.bool,transitionEnter:u.a.bool,transitionExit:u.a.bool,enterDelay:u.a.number,exitDelay:u.a.number,transitionClassName:u.a.string,exitedClassName:u.a.string,exitingClassName:u.a.string,enteredClassName:u.a.string,enteringClassName:u.a.string,onTransition:u.a.func,onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func,children:u.a.node,className:u.a.string}
w.defaultProps={in:false,component:"div",unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,enterDelay:300,exitDelay:300,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},className:void 0,children:null,transitionClassName:void 0,exitedClassName:void 0,exitingClassName:void 0,enteredClassName:void 0,enteringClassName:void 0}
w.states=j
var E=function(e){var t=e.transitions
return{duration:t.duration,timing:t.timing}}
var N,B,U,G,D
var S={componentId:"eJkkQ",template:function(e){return"\n\n.eJkkQ_bGBk{transform:translateZ(0)}\n\n.eJkkQ_ddDm{transition:opacity ".concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_cpZA,.eJkkQ_fTmM{opacity:0.01}\n\n.eJkkQ_bEpV,.eJkkQ_NoZX{opacity:1}\n\n.eJkkQ_fOgU{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_ZDum,.eJkkQ_fihg{opacity:0.01;transform:scale(0.01) translateZ(0)}\n\n.eJkkQ_eqrf,.eJkkQ_ftWB{opacity:1;transform:scale(1) translateZ(0)}\n\n.eJkkQ_dlJm,.eJkkQ_cPWt,.eJkkQ_bewW,.eJkkQ_bHhn{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_bOBe,.eJkkQ_eKZC,.eJkkQ_cusP,.eJkkQ_djUe{opacity:0.01}\n\n.eJkkQ_cusP,.eJkkQ_dWfS{transform:translate3d(100%,0,0)}\n\n.eJkkQ_eKZC,.eJkkQ_chud{transform:translate3d(-100%,0,0)}\n\n.eJkkQ_djUe,.eJkkQ_fDdb{transform:translate3d(0,-100%,0)}\n\n.eJkkQ_bOBe,.eJkkQ_cYey{transform:translate3d(0,100%,0)}\n\n.eJkkQ_diPG,.eJkkQ_fEMB,.eJkkQ_eOlt,.eJkkQ_fvoZ,.eJkkQ_bIuM,.eJkkQ_fyZW,.eJkkQ_cuyj,.eJkkQ_gaix{opacity:1;transform:translateZ(0)}")},root:"eJkkQ_bGBk",fade:"eJkkQ_ddDm","fade--exited":"eJkkQ_cpZA","fade--exiting":"eJkkQ_fTmM","fade--entered":"eJkkQ_bEpV","fade--entering":"eJkkQ_NoZX",scale:"eJkkQ_fOgU","scale--exited":"eJkkQ_ZDum","scale--exiting":"eJkkQ_fihg","scale--entered":"eJkkQ_eqrf","scale--entering":"eJkkQ_ftWB","slide-down":"eJkkQ_dlJm","slide-left":"eJkkQ_cPWt","slide-right":"eJkkQ_bewW","slide-up":"eJkkQ_bHhn","slide-down--exited":"eJkkQ_bOBe","slide-left--exited":"eJkkQ_eKZC","slide-right--exited":"eJkkQ_cusP","slide-up--exited":"eJkkQ_djUe","slide-right--exiting":"eJkkQ_dWfS","slide-left--exiting":"eJkkQ_chud","slide-up--exiting":"eJkkQ_fDdb","slide-down--exiting":"eJkkQ_cYey","slide-down--entered":"eJkkQ_diPG","slide-down--entering":"eJkkQ_fEMB","slide-left--entered":"eJkkQ_eOlt","slide-left--entering":"eJkkQ_fvoZ","slide-right--entered":"eJkkQ_bIuM","slide-right--entering":"eJkkQ_fyZW","slide-up--entered":"eJkkQ_cuyj","slide-up--entering":"eJkkQ_gaix"}
var F=(N=Object(m["a"])(),B=Object(d["j"])(E,S),N(U=B(U=(D=G=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o]
e=t.call.apply(t,[this].concat(a))
e.handleExited=function(){"function"===typeof e.props.onExited&&e.props.onExited(e.props.type)}
e.handleEntered=function(){"function"===typeof e.props.onEntered&&e.props.onEntered(e.props.type)}
return e}Object(a["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,r=Object(i["a"])(e,["type","children"])
var a=g(this.theme.duration)
var o=t?{exited:S["".concat(t,"--exited")],exiting:S["".concat(t,"--exiting")],entering:S["".concat(t,"--entered")],entered:S["".concat(t,"--entering")]}:{}
return c.a.createElement(w,Object.assign({},r,{enterDelay:a,exitDelay:a,transitionClassName:S[t],exitedClassName:o.exited,exitingClassName:o.exiting,enteredClassName:o.entering,enteringClassName:o.entered,onEntered:this.handleEntered,onExited:this.handleExited}),n)}}])
n.displayName="Transition"
return n}(l["Component"]),G.propTypes={type:u.a.oneOf(["fade","scale","slide-down","slide-up","slide-left","slide-right"]),children:u.a.element,in:u.a.bool,unmountOnExit:u.a.bool,transitionOnMount:u.a.bool,transitionEnter:u.a.bool,transitionExit:u.a.bool,onTransition:u.a.func,onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func},G.defaultProps={type:"fade",in:false,unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},children:null},G.states=w.states,D))||U)||U)},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var i=n("rePB")
var r=n("1OyB")
var a=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var p=n("17x9")
var u=n.n(p)
var d=n("TSYQ")
var h=n.n(d)
var f=n("J2CL")
var g=n("KgFQ")
var m=n("jtGx")
var v=n("nAyT")
var b=n("VTBJ")
function _(e){var t=e.typography,n=e.colors,i=e.spacing
return Object(b["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(i.medium," 0")})}_.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,k,O,R
var x={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var C=(y=Object(f["j"])(_,x),y(k=(R=O=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.wrap,a=t.weight,o=t.fontStyle,s=t.size,l=t.lineHeight,p=t.letterSpacing,u=t.transform,d=t.color,f=t.children
var v=Object(g["a"])(n,this.props)
return c.a.createElement(v,Object.assign({},Object(m["b"])(this.props),{className:h()((e={},Object(i["a"])(e,x.root,true),Object(i["a"])(e,x[s],s),Object(i["a"])(e,x["wrap-".concat(r)],r),Object(i["a"])(e,x["weight-".concat(a)],a),Object(i["a"])(e,x["style-".concat(o)],o),Object(i["a"])(e,x["transform-".concat(u)],u),Object(i["a"])(e,x["lineHeight-".concat(l)],l),Object(i["a"])(e,x["letterSpacing-".concat(p)],p),Object(i["a"])(e,x["color-".concat(d)],d),e)),ref:this.props.elementRef}),f)}}])
n.displayName="Text"
return n}(l["Component"]),O.propTypes={as:u.a.elementType,children:u.a.node,color:v["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},O.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},R))||k)},"e2r+":function(e,t,n){"use strict"
var i=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
n("17x9")
var o=n("TSYQ")
var s=n.n(o)
var l=n("HGxv")
var c=n("9Qmj")
var p=n("scx4")
var u=n("hlSq")
var d=n("uloQ")
const h=Object(l["useScope"])("files_upload_progress")
class f extends a.a.Component{constructor(e){super(e)
this.state={progress:0,messages:{}}
this.resetProgress=this.resetProgress.bind(this)}componentDidMount(){const e=this.props.uploader.roundProgress()
if(this.state.progress!==e)return this.sendProgressUpdate(e)}UNSAFE_componentWillReceiveProps(e){const t=e.uploader.roundProgress()
if(this.state.progress!==t)return this.sendProgressUpdate(t)}componentWillUnmount(){return this.sendProgressUpdate(this.state.progress)}sendProgressUpdate(e){const{messages:t}=this.state
if(!(e in t)){const n=this.props.uploader.getFileName()
const i=e<100?h.t("%{fileName} - %{progress} percent uploaded",{fileName:n,progress:e}):h.t("%{fileName} uploaded successfully!",{fileName:n})
Object(d["b"])({message:i,err:null,type:"info",srOnly:true})
t[e]=true
this.setState({messages:t,progress:e})}}resetProgress(){this.setState({messages:{},progress:0})}renderProgressBar(){if(this.props.uploader.error){const e=this.props.uploader.error.message?h.t("Error: %{message}",{message:this.props.uploader.error.message}):h.t("Error uploading file.")
Object(d["b"])({message:e,type:"error",srOnly:true})
return Object(i["a"])("span",{},void 0,e,Object(i["a"])("button",{type:"button",className:"btn-link",onClick:()=>{this.resetProgress()
u["a"].attemptThisUpload(this.props.uploader)}},void 0,h.t("Retry")))}return Object(i["a"])(c["a"],{progress:this.props.uploader.roundProgress()})}render(){const e=s()({"ef-item-row":true,"text-error":this.props.uploader.error})
return Object(i["a"])("div",{className:e},void 0,Object(i["a"])("div",{className:"col-xs-6"},void 0,Object(i["a"])("div",{className:"media ellipsis"},void 0,Object(i["a"])("span",{className:"pull-left"},void 0,Object(i["a"])("i",{className:"media-object mimeClass-"+Object(p["a"])(this.props.uploader.getFileType())})),Object(i["a"])("span",{className:"media-body"},void 0,this.props.uploader.getFileName()))),Object(i["a"])("div",{className:"col-xs-5"},void 0,this.renderProgressBar()),this.props.uploader.canAbort()&&Object(i["a"])("button",{type:"button",onClick:this.props.uploader.cancel,"aria-label":h.t("Cancel"),className:"btn-link upload-progress-view__button"},void 0,"x"))}}var g=f
class m extends a.a.Component{constructor(...e){super(...e)
this.state={currentUploads:[]}
this.handleUploadQueueChange=e=>{this.setState({currentUploads:e.getAllUploaders()},()=>{this.props.onUploadChange(this.state.currentUploads.length)})}
this.renderUploadProgress=function(){if(this.state.currentUploads.length){const e=this.state.currentUploads.map(e=>Object(i["a"])(g,{uploader:e},e.getFileName()))
return Object(i["a"])("div",{className:"current_uploads__uploaders"},void 0,e)}return null}}componentDidMount(){u["a"].addChangeListener(this.handleUploadQueueChange)}componentWillUnmount(){u["a"].removeChangeListener(this.handleUploadQueueChange)}render(){const e=s()({current_uploads:this.state.currentUploads.length})
return Object(i["a"])("div",{className:e},void 0,this.renderUploadProgress())}}m.defaultProps={onUploadChange:()=>{}}
t["a"]=m},gBVS:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("BrAc")
function r(e){return new Promise(t=>{setTimeout(t,e)})}function a(e,t={}){const n=t.ajaxLib||i["a"]
const{url:o,workflow_state:s,results:l,message:c}=e
if("queued"===s||"running"===s){let{interval:e}=t
e||(e=1e3)
e<100&&(e=100)
return r(e).then(()=>n.get(o)).then(e=>{const n=e.data
return a(n,t)})}return"completed"===s?Promise.resolve(l):Promise.reject(c)}},hPGw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return j}))
var i=n("VTBJ")
var r=n("rePB")
var a=n("Ff2n")
var o=n("1OyB")
var s=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var p=n("q1tI")
var u=n.n(p)
var d=n("17x9")
var h=n.n(d)
var f=n("TSYQ")
var g=n.n(f)
var m=n("J2CL")
var v=n("oXx0")
var b=n("wnpw")
function _(){return{sizeXSmall:"1.125rem",sizeSmall:"2rem",sizeMedium:"3rem",sizeLarge:"5rem",sizeXLarge:"10rem"}}var y,k,O,R,x
var C={componentId:"cGqzL",template:function(e){return"\n\n.cGqzL_bGBk{height:1em;line-height:1;vertical-align:middle;width:1em}\n\n.cGqzL_cwgF{transform:rotate(90deg)}\n\n.cGqzL_exaY{transform:rotate(180deg)}\n\n.cGqzL_dTDN{transform:rotate(270deg)}\n\n[dir=rtl] .cGqzL_owrh{transform:scaleX(-1)}\n\n[dir=rtl] .cGqzL_owrh.cGqzL_cwgF{transform:scaleX(-1) rotate(90deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_exaY{transform:scaleX(-1) rotate(180deg)}\n\n[dir=rtl] .cGqzL_owrh .cGqzL_dTDN{transform:scaleX(-1) rotate(270deg)}\n\n.cGqzL_dIzR{font-size:".concat(e.sizeXSmall||"inherit","}\n\n.cGqzL_VCXp{font-size:").concat(e.sizeSmall||"inherit","}\n\n.cGqzL_fKcQ{font-size:").concat(e.sizeMedium||"inherit","}\n\n.cGqzL_cnhd{font-size:").concat(e.sizeLarge||"inherit","}\n\n.cGqzL_fWMB{font-size:").concat(e.sizeXLarge||"inherit","}")},root:"cGqzL_bGBk","rotate--90":"cGqzL_cwgF","rotate--180":"cGqzL_exaY","rotate--270":"cGqzL_dTDN",bidirectional:"cGqzL_owrh","size--x-small":"cGqzL_dIzR","size--small":"cGqzL_VCXp","size--medium":"cGqzL_fKcQ","size--large":"cGqzL_cnhd","size--x-large":"cGqzL_fWMB"}
var j=(y=Object(v["a"])(),k=Object(m["j"])(_,C),y(O=k(O=(x=R=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(s["a"])(n,[{key:"render",value:function(){var e
var t=this.props,n=t.rotate,i=t.className,o=t.size,s=t.bidirectional,l=Object(a["a"])(t,["rotate","className","size","bidirectional"])
return u.a.createElement(b["a"],Object.assign({},l,{rotate:n,className:g()((e={},Object(r["a"])(e,C.root,true),Object(r["a"])(e,C["rotate--".concat(n)],n&&"0"!==n),Object(r["a"])(e,C["size--".concat(o)],o),Object(r["a"])(e,C.bidirectional,s),Object(r["a"])(e,i,i),e))}))}}])
n.displayName="SVGIcon"
return n}(p["Component"]),R.propTypes=Object(i["a"])({},b["a"].propTypes,{rotate:h.a.oneOf(["0","90","180","270"]),size:h.a.oneOf(["x-small","small","medium","large","x-large"]),bidirectional:h.a.bool}),R.defaultProps={rotate:"0",bidirectional:false,size:void 0},x))||O)||O)},hlSq:function(e,t,n){"use strict"
var i=n("Y/W1")
var r=n.n(i)
var a=n("C8i9")
var o=n("vavB")
class s extends o["a"]{constructor(e,t){super(e,t)
this.addFileToCollection=e=>{var t,n
if(null!==(t=this.folder)&&void 0!==t&&null!==(n=t.files)&&void 0!==n&&n.add){const t=new a["a"](e,"no/url/needed/")
this.folder.files.add(t)
if("overwrite"===this.options.dup){const e=this.options.name||this.file.name
const t=this.folder.files.findWhere({display_name:e})
t&&this.folder.files.remove(t)}}}
this.onUploadPosted=this.onUploadPosted.bind(this)}onUploadPosted(e){this.inFlight=false
this.options.replacingFileId&&(e.replacingFileId=this.options.replacingFileId)
this.addFileToCollection(e)
super.onUploadPosted(e)}}var l=n("BrAc")
class c extends o["a"]{constructor(e,t,n,i){super(e,t)
this.onPreflightComplete=({data:e})=>{this.uploadData=e.pre_attachment
this.contentMigrationId=e.id
return this._actualUpload()}
this.getContentMigration=()=>Object(l["a"])({url:`/api/v1/${this.contextType}/${this.contextId}/content_migrations/${this.contentMigrationId}`,method:"GET",responseType:"json"}).then(({data:e})=>e.progress_url?this.pullMigrationProgress(e.progress_url):new Promise((e,t)=>{setTimeout(()=>{this.getContentMigration().then(e).catch(t)},500)}))
this.pullMigrationProgress=e=>Object(l["a"])({url:e,method:"GET",responseType:"json"}).then(({data:t})=>{this.trackMigrationProgress(t.completion||0)
if("failed"===t.workflow_state)throw new Error("zip file migration failed")
if(t.completion<100){if(t.completion>0){const e={loaded:t.completion,total:100}
this.trackProgress(e)}return new Promise((n,i)=>{setTimeout(()=>{this.pullMigrationProgress(`${e}#${t.completion}`).then(n).catch(i)},1e3)})}return this.onMigrationComplete()})
this.trackProgress=e=>{this.progress=e.loaded/e.total
return this.onProgress(this.progress,this.file)}
this.contextId=n
this.contextType=i
this.migrationProgress=0
this.onUploadPosted=this.onUploadPosted.bind(this)
this.onUploadCancelled=this.onUploadCancelled.bind(this)}createPreFlightParams(){return{migration_type:"zip_file_importer",settings:{folder_id:this.folder.id},pre_attachment:{name:this.options.name||this.file.name,size:this.file.size,content_type:this.file.type,on_duplicate:this.options.dup||"rename",no_redirect:true}}}getPreflightUrl(){return`/api/v1/${this.contextType}/${this.contextId}/content_migrations`}onUploadPosted(){this._cancelToken=null
this.onProgress(this.progress,this.file)
const e=this.getContentMigration()
super.onUploadPosted()
return e}onMigrationComplete(){this.inFlight=false
return this.folder.folders.fetch({reset:true}).then(()=>this.folder.files.fetch({reset:true}))}trackMigrationProgress(e){return this.migrationProgress=e/100}getProgress(){return(this.progress+this.migrationProgress)/2}roundProgress(){const e=this.getProgress()||0
return Math.min(Math.round(100*e),100)}getFileName(){return this.options.name||this.file.name}}class p{constructor(){this.listeners=[]}length(){return this._queue.length}pendingUploads(){return this._queue.length+(this.currentUploader?1:0)}flush(){this._queue=[]
this.currentUploader=null
this.onChange()}getAllUploaders(){let e=this._queue.slice()
this.currentUploader&&(e=e.concat(this.currentUploader))
return e.reverse()}getCurrentUploader(){return this.currentUploader}addChangeListener(e){this.listeners.push(e)}removeChangeListener(e){this.listeners=this.listeners.filter(t=>t!==e)}onChange(){this.listeners.forEach(e=>e(this))}createUploader(e,t,n,i){const a=e.expandZip?new c(e,t,n,i):new s(e,t)
a.onProgress=()=>{this.onChange()}
a.cancel=()=>{a.abort()
this._queue=r.a.without(this._queue,a)
this.currentUploader===a&&(this.currentUploader=null)
return this.onChange()}
return a}enqueue(e,t,n,i){const r=this.createUploader(e,t,n,i)
this._queue.push(r)
return this.attemptNextUpload()}dequeue(){const e=this._queue.find(e=>!e.error)
this._queue=r.a.without(this._queue,e)
return e}removeUploaderFromQueue(e){if(e.error||e.inFlight)return
const t=this._queue.findIndex(t=>t===e)
t>=0&&this._queue.splice(t,1)}pageChangeWarning(e){e.preventDefault()
e.returnValue=""}attemptNextUpload(){if(this._uploading||0===this._queue.length)return
const e=this.dequeue()
this.attemptThisUpload(e)}attemptThisUpload(e){if(!e)return
e.reset()
if(this._uploading)return
this.removeUploaderFromQueue(e)
this.currentUploader=e
this.onChange()
this._uploading=true
window.addEventListener("beforeunload",this.pageChangeWarning)
return e.upload().catch(t=>{if("user_aborted_upload"!==t)return this._queue.unshift(e)}).finally(()=>{var e
this._uploading=false
null!==(e=this.currentUploader)&&void 0!==e&&e.inFlight||(this.currentUploader=null)
window.removeEventListener("beforeunload",this.pageChangeWarning)
this.onChange()
this.attemptNextUpload()})}}p.prototype._uploading=false
p.prototype._queue=[]
t["a"]=new p},vCN0:function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var i=n("RtDj")
var r=n("q1tI")
var a=n.n(r)
var o=n("ouhR")
var s=n.n(o)
var l=n("Y/W1")
var c=n.n(l)
var p=n("qqwe")
var u=n("JHuN")
var d=n("0unK")
var h=n("GN1s")
var f,g
const m={overlay:{backgroundColor:"rgba(0,0,0,0.5)",zIndex:"2002"},content:{position:"static",top:"0",left:"0",right:"auto",bottom:"auto",borderRadius:"0",border:"none",padding:"0"}}
class v extends a.a.Component{constructor(...e){super(...e)
this.state={modalIsOpen:this.props.isOpen}
this.openModal=()=>{this.setState({modalIsOpen:true})}
this.cleanupAfterClose=()=>{this.props.onRequestClose&&this.props.onRequestClose()
s()(this.getAppElement()).removeAttr("aria-hidden")}
this.closeModal=()=>{this.setState({modalIsOpen:false},this.cleanupAfterClose)}
this.closeWithX=()=>{c.a.isFunction(this.props.closeWithX)&&this.props.closeWithX()
this.closeModal()}
this.onSubmit=()=>{const e=this.props.onSubmit()
s()(this.modal).disableWhileLoading(e)}
this.onAfterOpen=()=>{this.closeBtn.focus()
this.props.onAfterOpen&&this.props.onAfterOpen()}
this.getAppElement=()=>this.props.appElement||document.getElementById("application")
this.processMultipleChildren=e=>{let t=null
let n=null
a.a.Children.forEach(e.children,e=>{e.type===d["a"]?t=e:e.type===h["a"]?n=e:console.warn("Modal chilren must be wrapped in either a modal-content or modal-buttons component.")})
return this.props.onSubmit?Object(i["a"])("form",{className:"ModalForm",onSubmit:Object(p["a"])(this.onSubmit)},void 0,[t,n]):[t,n]}}componentWillReceiveProps(e){let t
this.props.isOpen&&!e.isOpen&&(t=this.cleanupAfterClose)
this.setState({modalIsOpen:e.isOpen},t)}render(){return Object(i["a"])("div",{className:"canvasModal"},void 0,Object(i["a"])(u["a"],{ariaHideApp:!!this.state.modalIsOpen,isOpen:!!this.state.modalIsOpen,onRequestClose:this.closeModal,className:this.props.className,style:m,onAfterOpen:this.onAfterOpen,overlayClassName:this.props.overlayClassName,contentLabel:this.props.contentLabel,appElement:this.getAppElement()},void 0,a.a.createElement("div",{ref:e=>{this.modal=e},className:"ReactModal__Layout",style:this.props.style},Object(i["a"])("div",{className:"ReactModal__Header"},void 0,Object(i["a"])("div",{className:"ReactModal__Header-Title"},void 0,Object(i["a"])("h4",{},void 0,this.props.title)),Object(i["a"])("div",{className:"ReactModal__Header-Actions"},void 0,a.a.createElement("button",{ref:e=>{this.closeBtn=e},className:"Button Button--icon-action",type:"button",onClick:this.closeWithX},f||(f=Object(i["a"])("i",{className:"icon-x"})),g||(g=Object(i["a"])("span",{className:"screenreader-only"},void 0,"Close"))))),this.processMultipleChildren(this.props))))}}v.defaultProps={className:"ReactModal__Content--canvas",style:{}}},vavB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("BrAc")
var r=n("EyBU")
class a{constructor(e,t){this.onPreflightComplete=({data:e})=>{this.uploadData=e
return this._actualUpload()}
this.trackProgress=e=>{this.progress=e.loaded/e.total
return this.onProgress(this.progress,this.file)}
this.canAbort=()=>!!this._cancelToken
this.abort=()=>{null===this||void 0===this||this._cancelRequest()
this.onUploadCancelled(this.file)}
this.file=e.file
this.options=e
this.folder=t
this.progress=0
this._cancelRequest=null
this._cancelToken=null
this.inFlight=false}onProgress(e,t){}createPreFlightParams(){return{name:this.options.name||this.file.name,size:this.file.size,content_type:this.file.type,on_duplicate:this.options.dup||"rename",parent_folder_id:this.folder.id,no_redirect:true,category:this.options.category}}getPreflightUrl(){return`/api/v1/folders/${this.folder.id}/files`}upload(){this._cancelToken=new i["a"].CancelToken(e=>{this._cancelRequest=e})
this.inFlight=true
return Object(i["a"])({url:this.getPreflightUrl(),method:"POST",data:this.createPreFlightParams(),responseType:"json",cancelToken:this._cancelToken}).then(this.onPreflightComplete).catch(e=>{this.inFlight=false
if(i["a"].isCancel(e)){this.onUploadCancelled()
throw"user_aborted_upload"}this.error=e
throw e})}_actualUpload(){return Object(r["completeUpload"])(this.uploadData,this.file,{ajaxLib:i["a"],onProgress:this.trackProgress,ajaxLibOptions:{cancelToken:this._cancelToken}}).then(this.onUploadPosted)}onUploadPosted(){}onUploadCancelled(e){this.inFlight=false}getProgress(){return this.progress}roundProgress(){const e=this.getProgress()||0
return Math.min(Math.round(100*e),100)}getFileType(){return this.file.type}getFileName(){return this.options.name||this.file.name}reset(){this.error=null
this.progress=0}}},wnpw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return w}))
var i=n("rePB")
var r=n("VTBJ")
var a=n("Ff2n")
var o=n("1OyB")
var s=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var p=n("q1tI")
var u=n.n(p)
var d=n("17x9")
var h=n.n(d)
var f=n("TSYQ")
var g=n.n(f)
var m=n("J2CL")
var v=n("BTe1")
var b=n("jtGx")
var _=n("oXx0")
function y(e){var t=e.colors
return{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,alertColor:t.textAlert,successColor:t.textSuccess}}y.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var k,O,R,x,C
var j={componentId:"dUOHu",template:function(e){return"\n\n.dUOHu_bGBk{fill:currentColor;overflow:visible}\n\n.dUOHu_eXrk{display:inline-block}\n\n.dUOHu_cRbP{display:block}\n\n.dUOHu_drOs{color:inherit}\n\n.dUOHu_eCSh{color:".concat(e.primaryColor||"inherit","}\n\n.dUOHu_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.dUOHu_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.dUOHu_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.dUOHu_eZal{color:").concat(e.successColor||"inherit","}\n\n.dUOHu_cVUo{color:").concat(e.brandColor||"inherit","}\n\n.dUOHu_eScd{color:").concat(e.warningColor||"inherit","}\n\n.dUOHu_cpQl{color:").concat(e.errorColor||"inherit","}\n\n.dUOHu_cUGG{color:").concat(e.alertColor||"inherit","}")},root:"dUOHu_bGBk",inline:"dUOHu_eXrk",block:"dUOHu_cRbP","color--inherit":"dUOHu_drOs","color--primary":"dUOHu_eCSh","color--secondary":"dUOHu_buuG","color--primary-inverse":"dUOHu_bFtJ","color--secondary-inverse":"dUOHu_dsSB","color--success":"dUOHu_eZal","color--brand":"dUOHu_cVUo","color--warning":"dUOHu_eScd","color--error":"dUOHu_cpQl","color--alert":"dUOHu_cUGG"}
var w=(k=Object(_["a"])(),O=Object(m["j"])(y,j),k(R=O(R=(C=x=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(o["a"])(this,n)
e=t.call(this)
e.titleId=Object(v["a"])("InlineSVG-title")
e.descId=Object(v["a"])("InlineSVG-desc")
return e}Object(s["a"])(n,[{key:"renderTitle",value:function(){var e=this.props.title
return e?u.a.createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(e){return e?u.a.createElement("desc",{id:this.descId},e):null}},{key:"renderContent",value:function(){if(this.props.src){var e=n.prepareSrc(this.props.src)
return u.a.createElement("g",{role:"presentation",dangerouslySetInnerHTML:{__html:e}})}return u.a.createElement("g",{role:"presentation"},this.props.children)}},{key:"render",value:function(){var e
var t=this.props,o=t.style,s=t.title,l=t.description,c=t.focusable,p=(t.children,t.src,t.color),d=Object(a["a"])(t,["style","title","description","focusable","children","src","color"])
var h="auto"===this.props.width?null:this.props.width
var f="auto"===this.props.height?null:this.props.height
return u.a.createElement("svg",Object.assign({},E(this.props.src),Object(b["a"])(this.props,n.propTypes,["inline"]),{style:Object(r["a"])({},o,{width:h,height:f}),width:h,height:f,"aria-hidden":s?null:"true","aria-labelledby":this.labelledBy,role:this.role,focusable:c?"true":"false",className:g()((e={},Object(i["a"])(e,j.root,true),Object(i["a"])(e,j["color--".concat(p)],"auto"!==p),Object(i["a"])(e,j.inline,this.props.inline),Object(i["a"])(e,j.block,!this.props.inline),Object(i["a"])(e,d.className,d.className),e))}),this.renderTitle(),this.renderDesc(l),this.renderContent())}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[]
this.props.title&&e.push(this.titleId)
this.props.description&&e.push(this.descId)
return e.length>0?e.join(" "):null}}])
n.displayName="InlineSVG"
return n}(p["Component"]),x.propTypes={children:h.a.node,src:h.a.string,title:h.a.string,description:h.a.string,focusable:h.a.bool,width:h.a.oneOfType([h.a.string,h.a.number]),height:h.a.oneOfType([h.a.string,h.a.number]),inline:h.a.bool,color:h.a.oneOf(["inherit","primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand","auto"])},x.defaultProps={focusable:false,src:"",title:"",description:"",inline:true,children:null,width:"1em",height:"1em",color:"inherit"},x.prepareSrc=function(e){var t=/<svg[^>]*>((.|[\n\r])*)<\/svg>/
var n=t.exec(e)
return n?n[1]:e},C))||R)||R)
function E(e){var t={}
var n=/<svg\s+([^>]*)\s*>/
var i=/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g
if("string"===typeof e){var r=n.exec(e)
var a=r?r[1]:""
var o=["xmlns","xmlns:xlink","version"]
var s=i.exec(a)
while(null!=s){-1===o.indexOf(s[1])&&(t[s[1]]=s[2]||(s[3]?s[3]:s[4]?s[4]:s[5])||s[1])
s=i.exec(a)}}return t}}}])

//# sourceMappingURL=55-c-7c1fc32e23.js.map