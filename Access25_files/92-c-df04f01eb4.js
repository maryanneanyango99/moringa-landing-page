(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[92],{"+6XX":function(e,t,o){var n=o("y1pI")
function i(e){return n(this.__data__,e)>-1}e.exports=i},"+tcD":function(e,t,o){"use strict"
o.d(t,"a",(function(){return _}))
var n=o("RtDj")
var i=o("ouhR")
var s=o.n(i)
var r=o("q1tI")
var l=o.n(r)
o("17x9")
var a=o("HGxv")
var d=o("dDTa")
var c=o("HeaX")
var u,p
const m=Object(a["useScope"])("external_toolsModalLauncher")
class _ extends l.a.Component{constructor(...e){super(...e)
this.state={beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",modalLaunchStyle:{}}
this.getDimensions=()=>{const e=this.getLaunchDimensions()
return{modalStyle:this.getModalStyle(e),modalBodyStyle:this.getModalBodyStyle(e),modalLaunchStyle:this.getModalLaunchStyle(e)}}
this.onExternalToolCompleted=(e,t)=>{this.props.onExternalContentReady&&this.props.onExternalContentReady(t)
this.props.onRequestClose()}
this.getIframeSrc=()=>{if(this.props.isOpen&&this.props.tool)return["/",this.props.contextType,"s/",this.props.contextId,"/external_tools/",this.props.tool.definition_id,"?display=borderless&launch_type=",this.props.launchType,this.props.contextModuleId&&"&context_module_id=",this.props.contextModuleId].join("")}
this.getLaunchDimensions=()=>{const e={width:700,height:700}
if(this.props.isOpen&&this.props.tool&&this.props.launchType&&this.props.tool.placements&&this.props.tool.placements[this.props.launchType]){const t=this.props.tool.placements[this.props.launchType];(t.launch_width||t.selection_width)&&(e.width=t.launch_width||t.selection_width);(t.launch_height||t.selection_height)&&(e.height=t.launch_height||t.selection_height)}return e}
this.getModalLaunchStyle=e=>({...e,border:"none"})
this.getModalBodyStyle=e=>({...e,padding:0,display:"flex",flexDirection:"column"})
this.getModalStyle=e=>({width:e.width})
this.handleAlertBlur=e=>{const t={modalLaunchStyle:{border:"none"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.handleAlertFocus=e=>{const t={modalLaunchStyle:{width:this.iframe.offsetWidth-4,border:"2px solid #0374B5"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.onAfterOpen=()=>{this.iframe&&this.iframe.setAttribute("allow",Object(d["a"])())}}componentDidMount(){s()(window).on("externalContentReady",this.onExternalToolCompleted)
s()(window).on("externalContentCancel",this.onExternalToolCompleted)}componentWillUnmount(){s()(window).off("externalContentReady",this.onExternalToolCompleted)
s()(window).off("externalContentCancel",this.onExternalToolCompleted)}render(){const e="before_external_content_info_alert "+this.state.beforeExternalContentAlertClass
const t="after_external_content_info_alert "+this.state.afterExternalContentAlertClass
const o=this.getDimensions()
o.modalLaunchStyle={...o.modalLaunchStyle,...this.state.modalLaunchStyle}
return Object(n["a"])(c["a"],{label:m.t("Launch External Tool"),open:this.props.isOpen,onDismiss:this.props.onRequestClose,onOpen:this.onAfterOpen,title:this.props.title,appElement:this.props.appElement},void 0,l.a.createElement("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,ref:e=>{this.beforeAlert=e}},Object(n["a"])("div",{className:"ic-flash-info"},void 0,u||(u=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))),m.t("The following content is partner provided"))),l.a.createElement("iframe",{src:this.getIframeSrc(),style:o.modalLaunchStyle,title:this.props.title,ref:e=>{this.iframe=e},"data-lti-launch":"true"}),l.a.createElement("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,ref:e=>{this.afterAlert=e}},Object(n["a"])("div",{className:"ic-flash-info"},void 0,p||(p=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))),m.t("The preceding content is partner provided"))))}}_.defaultProps={appElement:document.getElementById("application")}},"/J96":function(e,t,o){"use strict"
var n=o("17x9")
const i=Object(n["shape"])({id:n["string"].isRequired,title:n["string"].isRequired,groupId:n["string"]})
const s=Object(n["shape"])({id:n["string"].isRequired,title:n["string"].isRequired,items:Object(n["arrayOf"])(i)})
Object(n["oneOfType"])([Object(n["shape"])({siblings:Object(n["arrayOf"])(i).isRequired}),Object(n["shape"])({groupsLabel:n["string"].isRequired,groups:Object(n["arrayOf"])(s).isRequired,excludeCurrent:n["bool"]})])},"/oRJ":function(e,t,o){"use strict"
o.d(t,"a",(function(){return n}))
function n(e){const t="about:blank"
try{const o=new URL(e,window.location.origin)
if("javascript:"===o.protocol)return t
return e}catch(e){return t}}},"2gN3":function(e,t,o){var n=o("Kz5y")
var i=n["__core-js_shared__"]
e.exports=i},"2z/i":function(e,t,o){"use strict"
var n=o("HGxv")
var i=o("Z6JD")
const s=Object(n["useScope"])("format_range")
const r=()=>ENV.CONDITIONAL_RELEASE_SERVICE_ENABLED||false
const l=()=>{const e=ENV.CONDITIONAL_RELEASE_ENV&&ENV.CONDITIONAL_RELEASE_ENV.active_rules||[]
return{triggerAssignments:e.reduce((e,t)=>{e[t.trigger_assignment_id]=t
return e},{}),releasedAssignments:e.reduce((e,t)=>{t.scoring_ranges.forEach(o=>{o.assignment_sets.forEach(n=>{n.assignment_set_associations.forEach(n=>{const i=n.assignment_id
e[i]=e[i]||[]
e[i].push({assignment_id:t.trigger_assignment_id,assignment:t.trigger_assignment_model,upper_bound:o.upper_bound,lower_bound:o.lower_bound})})})})
return e},{})}}
let a=l()
const d=e=>a.triggerAssignments.hasOwnProperty(e)
const c=e=>a.releasedAssignments.hasOwnProperty(e)
const u=e=>{const t=a.releasedAssignments[e]||[]
if(t.length>1)return s.t("Multiple")
if(t.length>0){const e=t[0]
return s.t("%{upper} - %{lower}",{upper:Object(i["b"])(e.upper_bound,e.assignment,true),lower:Object(i["b"])(e.lower_bound,e.assignment,false)})}return null}
t["a"]={isEnabled:r,reloadEnv(){a=l()},getItemData(e,t=true){e=e&&e.toString()
return r()?{isCyoeAble:e&&t,isTrigger:e&&t&&d(e),isReleased:c(e),releasedLabel:u(e)}:{}}}},"3Fdi":function(e,t){var o=Function.prototype
var n=o.toString
function i(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}e.exports=i},"3HOH":function(e,t,o){"use strict"
var n=o("RtDj")
var i=o("Y/W1")
var s=o.n(i)
var r=o("zq/q")
var l=o("3Yjv")
var a=o("HGxv")
var d=o("q1tI")
var c=o.n(d)
var u=o("pZ4s")
var p=o("ZbPE")
var m=o("uSnb")
const _=Object(a["useScope"])("modules")
function h(e){return Object(n["a"])(u["a"],{startAt:"medium",vAlign:"middle",rowSpacing:"none",colSpacing:"none"},void 0,Object(n["a"])(u["a"].Row,{vAlign:"middle",rowSpacing:"none"},void 0,Object(n["a"])(u["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(n["a"])(m["a"],{renderTitle:_.t("Duplicating Module")}))),Object(n["a"])(u["a"].Row,{},void 0,Object(n["a"])(u["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(n["a"])(p["a"],{},void 0,_.t("Duplicating Module...")))))}var f=o("i8i4")
var g=o.n(f)
var v=o("ep+9")
var x=o("mX+G")
var b=o.n(x)
const y=Object(a["useScope"])("publishableModuleItem")
class k extends x["Model"]{static initClass(){this.prototype.defaults={module_type:null,course_id:null,module_id:null,published:true,publishable:true,unpublishable:true,module_item_name:null}
this.prototype.urls={generic(){return`${this.baseUrl()}/modules/${this.get("module_id")}/items/${this.get("module_item_id")}`},module(){return`${this.baseUrl()}/modules/${this.get("id")}`}}
this.prototype.toJSONs={generic(){return{module_item:{published:this.get("published")}}},module(){return{module:{published:this.get("published")}}}}
this.prototype.disabledMessages={generic(){return this.get("module_item_name")?y.t("Publishing %{item_name} is disabled",{item_name:this.get("module_item_name")}):y.t("Publishing is disabled for this item")},assignment(){return this.get("module_item_name")?y.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):y.t("Can't unpublish if there are student submissions")},quiz(){return this.get("module_item_name")?y.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):y.t("Can't unpublish if there are student submissions")},discussion_topic(){return this.get("module_item_name")?y.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):y.t("Can't unpublish if there are student submissions")}}}branch(e){const t="lti-quiz"===this.get("module_type")?"quiz":this.get("module_type")
return(this[e][t]||this[e].generic).call(this)}url(){return this.branch("urls")}toJSON(){return this.branch("toJSONs")}disabledMessage(){return this.branch("disabledMessages")}baseUrl(){return"/api/v1/courses/"+this.get("course_id")}publish(){return this.save("published",true)}unpublish(){return this.save("published",false)}}k.initClass()
var C=o("Ophv")
var w=o("SYfm")
const S=b.a.Model.extend({defaults:{is_master_course_master_content:false,is_master_course_child_content:false,restricted_by_master_course:false}})
var O=S
var I=o("d61b")
var E=o("ik22")
var T=o("ouhR")
var M=o.n(T)
var q=o("/oRJ")
const D={}
D.setWindowLocation=function(e){window.location=e}
D.externalUrlLinkClick=function(e,t){e.preventDefault()
this.setWindowLocation(Object(q["a"])(t.attr("data-item-href")))}.bind(D)
var j=D
var A=o("2z/i")
o("lBOK")
var N,L=function(e,t){return function(){return e.apply(t,arguments)}},P=function(e,t){for(var o in t)R.call(t,o)&&(e[o]=t[o])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},R={}.hasOwnProperty
N=Object(a["useScope"])("viewsContextModules")
var U=function(e){P(t,e)
function t(){this.onKeyDown=L(this.onKeyDown,this)
this.error=L(this.error,this)
this.success=L(this.success,this)
this.toggleWorkflowState=L(this.toggleWorkflowState,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("modules")
t.prototype.toggleWorkflowState=function(e){var t,o
e.preventDefault()
this.$context_module=M()(e.target).parents(".context_module")
t=this.$context_module.data("module-url")
this.workflow_state=this.$context_module.data("workflow-state")
o={url:t,type:"PUT",beforeSend:(n=this,function(){return n.$context_module.loadingImage()}),success:this.success,error:this.error}
var n
this.setRequestPublishOptions(o)
return M.a.ajax(o)}
t.prototype.success=function(e){this.$context_module.data("workflow-state",e.context_module.workflow_state)
"unpublished"===e.context_module.workflow_state?this.addUnpublishAttributes():this.addPublishAttributes()
return this.$context_module.loadingImage("remove")}
t.prototype.error=function(e){alert("This module could not be published")
return this.$context_module.loadingImage("remove")}
t.prototype.setRequestPublishOptions=function(e){return"active"===this.workflow_state?e.data="unpublish=1":e.data="publish=1"}
t.prototype.addUnpublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(N.t("context_modules.publish","Publish"))
this.$context_module.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
this.$context_module.find(".draft-text").removeClass("hide")
return this.$context_module.addClass("unpublished_module")}
t.prototype.addPublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(N.t("context_module.unpublish","Unpublish"))
this.$context_module.find(".workflow-state-icon").addClass("unpublish-module-link").removeClass("publish-module-link")
this.$context_module.find(".draft-text").addClass("hide")
return this.$context_module.removeClass("unpublished_module")}
t.prototype.keyCodes={32:"Space",38:"UpArrow",40:"DownArrow"}
t.prototype.moduleSelector="div.context_module"
t.prototype.itemSelector="table.context_module_item"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.$contextModules=M()("#context_modules")
return this.$contextModules.parent().on("keydown",this.onKeyDown)}
t.prototype.onKeyDown=function(e){var t,o
t=M()(e.target)
o="on"+this.keyCodes[e.keyCode]+"Key"
if(this[o]){e.preventDefault()
return this[o].call(this,e,t)}}
t.prototype.getFocusedElement=function(e){var t
t=e.parents(this.itemSelector).first()
this.empty(t)||(e=t)
if(!e.is(this.itemSelector)){t=e.parents(this.moduleSelector).first()
this.empty(t)||(e=t)
e.is(this.moduleSelector)||(e=this.$contextModules)}return e}
t.prototype.onUpArrowKey=function(e,t){var o,n,i
o=this.getFocusedElement(t)
if(o.is(this.itemSelector)){i=o.prev(this.itemSelector);(this.empty(i)||this.$contextModules.data("dragModule"))&&(i=o.parents(this.moduleSelector).first())}else if(o.is(this.moduleSelector))if(this.$contextModules.data("dragItem"))i=this.$contextModules.data("dragItemModule")
else{i=o.prev(this.moduleSelector)
if(this.empty(i))i=this.$contextModules
else if(!this.$contextModules.data("dragModule")){n=i.find(this.itemSelector).last()
this.empty(n)||(i=n)}}if(i&&!this.empty(i))return i.focus()}
t.prototype.onDownArrowKey=function(e,t){var o,n,i
o=this.getFocusedElement(t)
if(o.is(this.itemSelector)){n=o.next(this.itemSelector)
if(this.empty(n)&&!this.$contextModules.data("dragItem")){i=o.parents(this.moduleSelector).first()
n=i.next(this.moduleSelector)}}else if(o.is(this.moduleSelector)){n=o.find(this.itemSelector).first();(this.empty(n)||this.$contextModules.data("dragModule"))&&(n=o.next(this.moduleSelector))}else n=this.$contextModules.find(this.moduleSelector).first()
if(n&&!this.empty(n))return n.focus()}
t.prototype.onSpaceKey=function(e,t){var o,n,i,s
i=this.getFocusedElement(t)
if(o=this.$contextModules.data("dragItem")){if(!i.is(o)){s=this.$contextModules.data("dragItemModule")
i.is(this.itemSelector)&&!this.empty(i.parents(s))?i.after(o):s.find(".items").prepend(o)
modules.updateModuleItemPositions(null,{item:o.parent()})}o.attr("aria-grabbed",false)
this.$contextModules.data("dragItem",null)
this.$contextModules.data("dragItemModule",null)
return o.focus()}if(n=this.$contextModules.data("dragModule")){i.is(this.itemSelector)&&(i=i.parents(this.moduleSelector).first())
if(!i.is(n)){this.empty(i)||i.is(this.$contextModules)?this.$contextModules.prepend(n):i.after(n)
modules.updateModulePositions()}n.attr("aria-grabbed",false)
this.$contextModules.data("dragModule",null)
return n.focus()}if(!i.is(this.$contextModules)){i.attr("aria-grabbed",true)
if(i.is(this.itemSelector)){this.$contextModules.data("dragItem",i)
this.$contextModules.data("dragItemModule",i.parents(this.moduleSelector).first())}else i.is(this.moduleSelector)&&this.$contextModules.data("dragModule",i)
i.blur()
return i.focus()}}
t.prototype.empty=function(e){return 0===e.length}
return t}(b.a.View)
var F=o("KIYd")
var V=o("3O+N")
var z=o.n(V)
o("BGrI")
var $=z.a.default
var G=$.template,W=$.templates=$.templates||{}
var B="/work/canvas-deploy/generated/ui/shared/context-modules/jst/RelockModulesDialog"
W[B]=G((function(e,t,o,n,i){this.compilerInfo=[4,">= 1.0.0"]
o=this.merge(o,e.helpers)
i=i||{}
var s,r,l="",a=o.helperMissing,d=this.escapeExpression
l+="<p>"+d((s=o.t||t&&t.t,r={hash:{i18n_inferred_key:true},data:i},s?s.call(t,"you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",r):a.call(t,"t","you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",r)))+"</p>\n<p>"+d((s=o.t||t&&t.t,r={hash:{i18n_inferred_key:true},data:i},s?s.call(t,"would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",r):a.call(t,"t","would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",r)))+"</p>"
return l}))
var J=W[B]
const H=Object(a["useScope"])("modules")
class Y extends F["a"]{renderIfNeeded(e){if(e.relock_warning){this.module_id=e.id
return this.render().show()}}dialogOptions(){return{id:"relock_modules_dialog",title:H.t("requirements_changed","Requirements Changed"),buttons:[{text:H.t("relock_modules","Re-Lock Modules"),click:()=>this.relock()},{text:H.t("continue","Continue"),class:"btn-primary",click:e=>this.cancel(e)}]}}relock(){const e=`/api/v1/courses/${ENV.COURSE_ID}/modules/${this.module_id}/relock`
return this.dialog.disableWhileLoading(M.a.ajaxJSON(e,"PUT",{},()=>this.close()))}}Y.prototype.template=J
var X=o("QJn8")
var Z=z.a.default
var K=Z.template,Q=Z.templates=Z.templates||{}
var ee="/work/canvas-deploy/generated/ui/shared/context-modules/jst/-vddTooltip"
Q[ee]=K((function(e,t,o,n,i){this.compilerInfo=[4,">= 1.0.0"]
o=this.merge(o,e.helpers)
i=i||{}
var s,r,l="",a="function",d=this.escapeExpression,c=this
function u(e,t){var n,i,s=""
s+='href="'
if(i=o.link_href)n=i.call(e,{hash:{},data:t})
else{i=e&&e.link_href
n=typeof i===a?i.call(e,{hash:{},data:t}):i}s+=d(n)+'"'
return s}function p(e,t){var n,i,s=""
s+='\n      <div class="clearfix">\n        <dt>'
if(i=o.due_for)n=i.call(e,{hash:{},data:t})
else{i=e&&e.due_for
n=typeof i===a?i.call(e,{hash:{},data:t}):i}s+=d(n)+"</dt>\n        <dd>"
if(i=o.due_at)n=i.call(e,{hash:{},data:t})
else{i=e&&e.due_at
n=typeof i===a?i.call(e,{hash:{},data:t}):i}s+=d(n)+"</dd>\n      </div>\n    "
return s}function m(e,t){var n,i,s=""
s+='\n      <div class="clearfix">\n        <dd>'
if(i=o.more_message)n=i.call(e,{hash:{},data:t})
else{i=e&&e.more_message
n=typeof i===a?i.call(e,{hash:{},data:t}):i}s+=d(n)+"</dd>\n      </div>\n    "
return s}l+='<a title class="vdd_tooltip_link"\n  data-tooltip-selector="#vdd_tooltip_'
if(r=o.selector)s=r.call(t,{hash:{},data:i})
else{r=t&&t.selector
s=typeof r===a?r.call(t,{hash:{},data:i}):r}l+=d(s)+'"\n  '
s=o["if"].call(t,t&&t.link_href,{hash:{},inverse:c.noop,fn:c.program(1,u,i),data:i});(s||0===s)&&(l+=s)
l+="\n  >"
if(r=o.link_text)s=r.call(t,{hash:{},data:i})
else{r=t&&t.link_text
s=typeof r===a?r.call(t,{hash:{},data:i}):r}l+=d(s)+'</a>\n\n<div id="vdd_tooltip_'
if(r=o.selector)s=r.call(t,{hash:{},data:i})
else{r=t&&t.selector
s=typeof r===a?r.call(t,{hash:{},data:i}):r}l+=d(s)+'" style="display:none;">\n  <dl class="vdd_tooltip_content dl-horizontal">\n    '
s=o.each.call(t,t&&t.due_dates,{hash:{},inverse:c.noop,fn:c.program(3,p,i),data:i});(s||0===s)&&(l+=s)
l+="\n    "
s=o["if"].call(t,t&&t.more_message,{hash:{},inverse:c.noop,fn:c.program(5,m,i),data:i});(s||0===s)&&(l+=s)
l+="\n  </dl>\n</div>"
return l}))
Z.registerPartial("ui/shared/context-modules/jst/_vddTooltip.handlebars",Q["/work/canvas-deploy/generated/ui/shared/context-modules/jst/-vddTooltip"])
var te=Q[ee]
const oe=Object(a["useScope"])("publishable")
class ne extends b.a.Model{constructor(...e){super(...e)
this.publish=()=>{this.set("published",true)
return this.save()}
this.unpublish=()=>{this.set("published",false)
return this.save()}}initialize(e,t){this._root=t.root
return this.set("unpublishable",true)}disabledMessage(){return oe.t("cant_unpublish","Can't unpublish")}toJSON(){const e={}
e[this._root]=s.a.clone(this.attributes)
return e}}var ie=o("Vovh")
var se=o("gI0r")
const re=(e,t)=>{const o="context_module_content_"+t
e.find("#context_module_content_").attr("id",o)
e.find('[aria-controls="context_module_content_"]').attr("aria-controls",o)}
var le=re
var ae=o("WIG6")
var de=o("jFoo")
var ce=o("mwIZ")
var ue=o.n(ce)
var pe=o("BrAc")
var me=o("uloQ")
o("dhbk")
o("7AEQ")
o("Dhso")
o("ESjL")
o("897F")
o("8JEM")
o("aq8L")
o("qAtv")
o("TvTI")
o("wX3B")
o("bgJ8")
o("r2Yr")
var _e=o("Nuch")
var he=o("QbG7")
var fe=o("ph9R")
var ge=o("R7Yz")
var ve=o("+tcD")
var xe
const be=Object(a["useScope"])("context_modulespublic")
function ye(e,t=500){if(!e||0===e.length)return
M()("html, body").animate({scrollTop:e.offset().top},t)}function ke(e){e.find(".context_module_item.quiz").length||e.find(".cannot-duplicate").length?e.find(".duplicate_module_menu_item").attr("hidden",true):e.find(".duplicate_module_menu_item").removeAttr("hidden")}window.modules={updateTaggedItems(){},currentIndent(e){const t=e.attr("class").split(/\s/)
let o=0
for(let e=0;e<t.length;e++)if(t[e].match(/^indent_/)){const n=parseInt(t[e].substring(7),10)
isNaN(n)||(o=n)}return o},addModule(){const e=M()("#context_module_blank").clone(true).attr("id","context_module_new")
M()("#context_modules").append(e)
const t=modules.sortable_module_options
t.update=modules.updateModuleItemPositions
e.find(".context_module_items").sortable(t)
M()("#context_modules.ui-sortable").sortable("refresh")
M()("#context_modules .context_module .context_module_items.ui-sortable").each((function(){M()(this).sortable("refresh")
M()(this).sortable("option","connectWith",".context_module_items")}))
modules.editModule(e)},updateModulePositions(){const e=[]
M()("#context_modules .context_module").each((function(){e.push(M()(this).attr("id").substring("context_module_".length))}))
const t=ENV.CONTEXT_URL_ROOT+"/modules/reorder"
M()("#context_modules").loadingImage()
M.a.ajaxJSON(t,"POST",{order:e.join(",")},e=>{M()("#context_modules").loadingImage("remove")
for(const t in e){const o=e[t]
M()("#context_module_"+o.context_module.id).triggerHandler("update",o)}},e=>{M()("#context_modules").loadingImage("remove")})},updateModuleItemPositions(e,t){const o=t.item.parents(".context_module")
const n=o.attr("id").substring("context_module_".length)
const i=`${ENV.CONTEXT_URL_ROOT}/modules/${n}/reorder`
const s=[]
o.find(".context_module_items .context_module_item").each((function(){s.push(M()(this).getTemplateData({textValues:["id"]}).id)}))
o.find(".context_module_items.ui-sortable").sortable("disable")
o.disableWhileLoading(M.a.ajaxJSON(i,"POST",{order:s.join(",")},e=>{if(e&&e.context_module&&e.context_module.content_tags)for(const t in e.context_module.content_tags){const n=e.context_module.content_tags[t].content_tag
o.find("#context_module_item_"+n.id).fillTemplateData({data:{position:n.position}})}o.find(".context_module_items.ui-sortable").sortable("enable")},e=>{o.find(".content").loadingImage("remove")
o.find(".content").errorBox(be.t("errors.reorder","Reorder failed, please try again."))}))
M()(".context_module").each((function(){ke(M()(this))}))},updateProgressions(e){if(!ENV.IS_STUDENT){e&&e()
return}const t=M()(".progression_list_url").attr("href")
M()(".context_module_item.progression_requirement:visible").length>0&&M()(".loading_module_progressions_link").show().attr("disabled",true)
M.a.ajaxJSON(t,"GET",{},(function(t){M()(".loading_module_progressions_link").remove()
const o=M()("#current_user_progression_list")
const n=[]
for(const e in t)n.push(t[e])
const i=function(){M()("#context_modules").hasClass("editable")||M()("#context_modules .context_module").each((function(){modules.updateProgressionState(M()(this))}))
e&&e()}
let s=0
var r=function(){const e=n.shift()
if(!e){i()
return}const t=e.context_module_progression
if(t.user_id==window.ENV.current_user_id){let e=o.find(".progression_"+t.context_module_id)
if(0===e.length&&o.length>0){e=o.find(".progression_blank").clone(true)
e.removeClass("progression_blank").addClass("progression_"+t.context_module_id)
o.append(e)}if(e.length>0){e.data("requirements_met",t.requirements_met)
e.data("incomplete_requirements",t.incomplete_requirements)
e.fillTemplateData({data:t})}}s++
if(s>=50){s=0
setTimeout(r,150)}else r()}
r()}),()=>{e&&e()})},updateAssignmentData:e=>M.a.ajaxJSON(ENV.CONTEXT_MODULE_ASSIGNMENT_INFO_URL,"GET",{},t=>{M()(()=>{M.a.each(t,(e,t)=>{const o=M()("#context_module_item_"+e)
const n={}
null!=t.points_possible&&(n.points_possible_display=be.t("points_possible_short","%{points} pts",{points:be.n(t.points_possible)}))
if(ENV.IN_PACED_COURSE&&!ENV.IS_STUDENT)o.find(".due_date_display").remove()
else if(null!=t.todo_date)n.due_date_display=M.a.dateString(t.todo_date)
else if(null!=t.due_date){null!=t.past_due&&o.data("past_due",true)
n.due_date_display=M.a.dateString(t.due_date)}else if(null!=t.has_many_overrides)n.due_date_display=be.t("Multiple Due Dates")
else if(null!=t.vdd_tooltip){t.vdd_tooltip.link_href=o.find("a.title").attr("href")
o.find(".due_date_display").html(te(t.vdd_tooltip))}else o.find(".due_date_display").remove()
o.fillTemplateData({data:n,htmlValues:["points_possible_display"]})
null===t.points_possible&&o.find(".points_possible_display").remove()
if(t.mc_objectives){o.find(".mc_objectives").text(t.mc_objectives)
o.find(".icon-assignment").hide()
o.find("#mc_icon").show()}else o.find(".mc_objectives").remove()})
Object(X["a"])()
e&&e()})},()=>{e&&M()(e)}),loadMasterCourseData(e){ENV.MASTER_COURSE_SETTINGS&&M.a.ajaxJSON(ENV.MASTER_COURSE_SETTINGS.MASTER_COURSE_DATA_URL,"GET",{tag_id:e},e=>{e.tag_restrictions&&M.a.each(e.tag_restrictions,(e,t)=>{const o=M()("#context_module_item_"+e).not(".master_course_content")
o.addClass("master_course_content")
Object.keys(t).some(e=>t[e])&&o.attr("data-master_course_restrictions",JSON.stringify(t))
this.initMasterCourseLockButton(o,t)})})},itemClass:e=>(e.content_type||"").replace(/^[A-Za-z]+::/,"")+"_"+e.content_id,updateAllItemInstances(e){M()(".context_module_item."+modules.itemClass(e)+" .title").each((function(){const t=M()(this)
t.text(e.title)
t.attr("title",e.title)}))},editModule(e){const t=M()("#add_context_module_form")
t.data("current_module",e)
const o=e.getTemplateData({textValues:["name","unlock_at","require_sequential_progress","publish_final_grade","requirement_count"]})
t.fillFormData(o,{object_name:"context_module"})
let n=false
if("context_module_new"==e.attr("id")){n=true
t.attr("action",t.find(".add_context_module_url").attr("href"))
t.find(".completion_entry").hide()
t.attr("method","POST")
t.find(".submit_button").text(be.t("buttons.add","Add Module"))}else{t.attr("action",e.find(".edit_module_link").attr("href"))
t.find(".completion_entry").show()
t.attr("method","PUT")
t.find(".submit_button").text(be.t("buttons.update","Update Module"))}t.find("#unlock_module_at").prop("checked",o.unlock_at).change()
t.find("#require_sequential_progress").attr("checked","true"==o.require_sequential_progress||"1"==o.require_sequential_progress)
t.find("#publish_final_grade").attr("checked","true"==o.publish_final_grade||"1"==o.publish_final_grade)
const i=M()("#context_modules .context_module").length>1&&M()("#context_modules .context_module:first").attr("id")!==e.attr("id")
t.find(".prerequisites_entry").showIf(i)
const s=[]
e.find(".prerequisites .prerequisite_criterion").each((function(){s.push(M()(this).getTemplateData({textValues:["id","name","type"]}))}))
t.find(".prerequisites_list .criteria_list").empty()
for(const e in s){const o=s[e]
t.find(".add_prerequisite_link:first").click()
"context_module"==o.type&&t.find(".prerequisites_list .criteria_list .criterion:last select").val(o.id).trigger("change")}t.find(".completion_entry .criteria_list").empty()
e.find(".content .context_module_item .criterion.defined").each((function(){const e=M()(this).parents(".context_module_item").getTemplateData({textValues:["id","criterion_type","min_score"]})
t.find(".add_completion_criterion_link").click()
t.find(".criteria_list .criterion:last").find(".id").val(e.id||"").change().end().find(".type").val(e.criterion_type||"").change().end().find(".min_score").val(e.min_score||"")}))
const r=0===e.find(".content .context_module_item").length
t.find(".prerequisites_list .criteria_list").showIf(0!=s.length).end().find(".add_prerequisite_link").showIf(i).end().find(".completion_entry .criteria_list").showIf(!r).end().find(".completion_entry .no_items_message").hide().end().find(".add_completion_criterion_link").showIf(!r)
r&&t.find(".completion_entry .no_items_message").show()
0!==e.find(".content .context_module_item .criterion.defined").length?M()(".requirement-count-radio").show():M()(".requirement-count-radio").hide()
const l=e.find(".pill li").data("requirement-count")
1==l?M()("#context_module_requirement_count_1").prop("checked",true).change():M()("#context_module_requirement_count_").prop("checked",true).change()
e.fadeIn("fast",()=>{})
e.addClass("dont_remove")
t.find(".module_name").toggleClass("lonely_entry",n)
const a=M()(".ig-header-admin .al-trigger",e)
const d=window.matchMedia("(min-width: 600px)").matches
const c=d?600:320
t.dialog({autoOpen:false,modal:true,title:n?be.t("titles.add","Add Module"):be.t("titles.edit","Edit Module Settings"),width:c,height:n?400:600,close(){modules.hideEditModule(true)
a.focus()
const e=M()("#context_modules .context_module")
e.length&&M()("#context_modules_sortable_container").removeClass("item-group-container--is-empty")}}).dialog("open")
e.removeClass("dont_remove")},hideEditModule(e){const t=M()("#add_context_module_form").data("current_module")
e&&t&&"context_module_new"==t.attr("id")&&!t.hasClass("dont_remove")&&t.remove()
M()("#add_context_module_form:visible").dialog("close")},addContentTagToEnv(e){ENV.MODULE_FILE_DETAILS[e.id]={content_details:e.content_details,content_id:e.content_id,id:e.id,module_id:e.context_module_id}},addItemToModule(e,t){if(!t)return M()("<div/>")
t.id=t.id||"new"
t.type=t.type||t["item[type]"]||M.a.underscore(t.content_type)
t.title=t.title||t["item[title]"]
t.new_tab=t.new_tab?"1":"0"
t.graded=t.graded?"1":"0"
let o,n="new"!==t.id?M()("#context_module_item_"+t.id):[]
if(n.length){const e=n.find(".ig-admin")
e.length&&e.detach()
o=n.clone(true)
e.length&&o.find(".ig-row").append(e)}else{o=M()("#context_module_item_blank").clone(true).removeAttr("id")
modules.evaluateItemCyoe(o,t)}o.addClass(t.type+"_"+t.id)
o.addClass(t.quiz_lti?"lti-quiz":t.type)
t.is_duplicate_able&&o.addClass("dupeable")
o.attr("aria-label",t.title)
o.find(".title").attr("title",t.title)
o.fillTemplateData({data:t,id:"context_module_item_"+t.id,hrefValues:["id","context_module_id","content_id"]})
for(let e=0;e<10;e++)o.removeClass("indent_"+e)
o.addClass("indent_"+(t.indent||0))
o.addClass(modules.itemClass(t))
let i=null
e.find(".context_module_items").children().each((function(){const e=parseInt(M()(this).getTemplateData({textValues:["position"]}).position,10)
!t.position&&0!==t.position||!e&&0!==e||null==i&&e-t.position>=0&&(i=M()(this))}))
n.length?n.replaceWith(o.show()):i?i.before(o.show()):e.find(".context_module_items").append(o.show())
ke(e)
return o},evaluateItemCyoe(e,t){if(!A["a"].isEnabled())return
e=M()(e)
const o=e.find(".publish-icon")
const n=e.find(".ig-admin")
t=t||{id:o.attr("data-module-item-id"),title:o.attr("data-module-item-name"),assignment_id:o.attr("data-assignment-id"),is_cyoe_able:"true"===o.attr("data-is-cyoeable")}
const i=A["a"].getItemData(t.assignment_id,t.is_cyoe_able)
if(i.isReleased){const e=be.t("Released by Mastery Path: %{path}",{path:i.releasedLabel})
const t=M()('<span class="pill mastery-path-icon" aria-hidden="true" data-tooltip><i class="icon-mastery-path" /></span>').attr("title",e).append(Object(se["a"])(i.releasedLabel))
const o=M()('<span class="screenreader-only">').append(Object(se["a"])(e))
n.prepend(o)
n.prepend(t)}if(i.isCyoeAble){const e=M()('<a class="mastery_paths_link" />').attr("href",ENV.CONTEXT_URL_ROOT+"/modules/items/"+t.id+"/edit_mastery_paths?return_to="+encodeURIComponent(window.location.pathname)).attr("title",be.t("Edit Mastery Paths for %{title}",{title:t.title})).text(be.t("Mastery Paths"))
i.isTrigger&&n.prepend(e.clone())
n.find(".delete_link").parent().before(M()('<li role="presentation" />').append(e.prepend('<i class="icon-mastery-path" /> ')))}},getNextPosition(e){let t=0
e.find(".context_module_items").children().each((function(){const e=parseInt(M()(this).getTemplateData({textValues:["position"]}).position,10)
e>t&&(t=e)}))
return t+1},refreshModuleList(){M()("#module_list").find(".context_module_option").remove()
M()("#context_modules .context_module").each((function(){const e=M()(this)
const t=e.find(".header").getTemplateData({textValues:["name"]})
t.id=e.find(".header").attr("id")
e.find(".name").attr("title",t.name)
const o=M()(document.createElement("option"))
o.val(t.id)
o.attr("role","option").text(t.name).addClass("context_module_"+t.id).addClass("context_module_option")
M()("#module_list").append(o)}))},filterPrerequisites(e,t){const o=modules.prerequisites()
const n=e.attr("id").substring("context_module_".length)
const i=[]
for(const e in t)-1==M.a.inArray(t[e],o[n])&&i.push(t[e])
return i},prerequisites(){const e={to_visit:{},visited:{}}
M()("#context_modules .context_module").each((function(){const t=M()(this).attr("id").substring("context_module_".length)
e[t]=[]
M()(this).find(".prerequisites .criterion").each((function(){const o=M()(this).getTemplateData({textValues:["id"]}).id
if(M()(this).hasClass("context_module_criterion")){e[t].push(o)
e.to_visit[t+"_"+o]=true}}))}))
for(const t in e.to_visit)if(e.to_visit.hasOwnProperty(t)){const o=t.split("_")
if(e.visited[t])continue
e.visited[t]=true
for(const t in e[o[1]]){e[o[0]].push(e[o[1]][t])
e.to_visit[o[0]+"_"+e[o[1]][t]]=true}}delete e.to_visit
delete e.visited
return e},updateProgressionState(e){const t=e.attr("id").substring(15)
const o=M()("#current_user_progression_list .progression_"+t)
const n=o.getTemplateData({textValues:["context_module_id","workflow_state","collapsed","current_position"]})
e=M()("#context_module_"+n.context_module_id)
let i=n.workflow_state
const r=i&&i.charAt(0).toUpperCase()+i.substring(1)
e.addClass(i)
"locked"!=i&&"unlocked"!=i&&e.find(".completion_status i:visible").attr("title",r)
"completed"!=i||e.find(".progression_requirement").length||(i="")
e.fillTemplateData({data:{progression_state:i}})
let l=o.data("requirements_met")
null==l&&(l=[])
let a=o.data("incomplete_requirements")
null==a&&(a=[])
e.find(".context_module_item").each((function(){const e=M()(this)
const t=parseInt(e.getTemplateData({textValues:["position"]}).position,10)
n.current_position&&t&&n.current_position<t&&e.addClass("after_current_position")
const o=e.find(".module-item-status-icon")
const r=e.getTemplateData({textValues:["id"]}).id
const d=s.a.some(l,t=>t.id==r&&e.hasClass(t.type+"_requirement"))
if(d){e.addClass("completed_item")
Ce(o,"icon-check",be.t("Completed"))}else if("completed"==i)e.hasClass("progression_requirement")&&Ce(o,"no-icon",be.t("Not completed"))
else if(null!=e.data("past_due"))Ce(o,"icon-minimize",be.t("This assignment is overdue"))
else{let t=null
for(const e in a)a[e].id==r&&(t=a[e])
t?null!=t.score?Ce(o,"icon-minimize",be.t("You scored a %{score}.",{score:t.score})+" "+we(e)+"."):Ce(o,"icon-info",be.t("Your submission has not been graded yet")):e.hasClass("progression_requirement")&&Ce(o,"icon-mark-as-read",we(e))}}))
"true"==n.collapsed&&e.addClass("collapsed_module")},sortable_module_options:{connectWith:".context_module_items",handle:".move_item_link",helper:"clone",placeholder:"context_module_placeholder",forcePlaceholderSize:true,axis:"y",containment:"#content"},initMasterCourseLockButton(e,t){const o=e.find(".lock-icon")
const n=M()(o).data()||{}
const i=!!("moduleItemId"in n&&ENV.MASTER_COURSE_SETTINGS.IS_MASTER_COURSE)
const s=!!("moduleItemId"in n&&ENV.MASTER_COURSE_SETTINGS.IS_CHILD_COURSE)
const r=!!("moduleItemId"in n&&Object.keys(t).some(e=>t[e]))
const l=new O({is_master_course_master_content:i,is_master_course_child_content:s,restricted_by_master_course:r})
const a={model:l,el:o[0],course_id:ENV.COURSE_ID,content_type:n.moduleType,content_id:n.contentId}
const d=new w["a"](a)
d.render()}}
var Ce=function(e,t,o){const n=M()("<i data-tooltip></i>")
n.attr("class",t).attr("title",o).attr("aria-label",o)
e.empty().append(n)}
var we=function(e){return e.hasClass("must_submit_requirement")?be.t("Must submit the assignment"):e.hasClass("must_mark_done_requirement")?be.t("Must mark as done"):e.hasClass("must_view_requirement")?be.t("Must view the page"):e.hasClass("min_contribute_requirement")?be.t("Must contribute to the page"):e.hasClass("min_score_requirement")?be.t("Must score at least a %{score}",{score:e.getTemplateData({textValues:["min_score"]}).min_score}):be.t("Not yet completed")}
const Se=function(e,t){const o=e.find(".prerequisites")
let n=""
o.empty()
if(t.length>0){for(const e in t){const i=M()("<div />",{class:"prerequisite_criterion "+t[e].type+"_criterion",style:"float: left;"})
const s=M()("<span />",{text:Object(se["a"])(t[e].id),class:"id",style:"display: none;"})
const r=M()("<span />",{text:Object(se["a"])(t[e].type),class:"type",style:"display: none;"})
const l=M()("<span />",{text:Object(se["a"])(t[e].name),class:"name",style:"display: none;"})
i.append(s)
i.append(r)
i.append(l)
o.append(i)
n+=t[e].name+", "}n=n.slice(0,-2)
const e=M()("<div />",{text:Ie(n),class:"prerequisites_message"})
o.append(e)}}
const Oe=function(e,t){M()("div.context_module .prerequisite_criterion .id").each((function(o,n){const i=M()(n)
const s=i.text()
if(s==e){const e=i.closest(".prerequisite_criterion")
e.find(".name").text(t)
const o=i.closest(".prerequisites")
const n=M.a.makeArray(o.find(".prerequisite_criterion .name")).map(e=>M()(e).text()).join(", ")
o.find(".prerequisites_message").text(Ie(n))}}))}
var Ie=function(e){return be.t("Prerequisites: %{list}",{list:e})}
const Ee=function(e,t){const o=e.find(".requirements_message")
if(0!=t){const e=M()('<ul class="pill"><li></li></ul></div>')
o.html(e)
const n=o.find(".pill li")
const i=1===t?be.t("Complete One Item"):be.t("Complete All Items")
n.text(i)
n.data("requirement-count",t)}}
modules.initModuleManagement=function(e){new U({el:M()("#content"),modules:modules})
const t=new Y
const o=M()("#context_module_unlock_at")
let i=""
M()("#unlock_module_at").change((function(){const e=M()(this)
const t=M()(".unlock_module_at_details")
t.showIf(e.attr("checked"))
if(e.attr("checked"))o.val()||o.val(i)
else{i=o.val()
o.val("").triggerHandler("change")}})).triggerHandler("change")
M()(".context_module").bind("update",(e,t)=>{t.context_module.displayed_unlock_at=M.a.datetimeString(t.context_module.unlock_at)
t.context_module.unlock_at=M.a.datetimeString(t.context_module.unlock_at)
const o=M()("#context_module_"+t.context_module.id)
o.attr("aria-label",t.context_module.name)
o.find(".header").fillTemplateData({data:t.context_module,hrefValues:["id"]})
o.find(".header").attr("id",t.context_module.id)
o.find(".footer").fillTemplateData({data:t.context_module,hrefValues:["id"]})
o.find(".unlock_details").showIf(t.context_module.unlock_at&&Date.parse(t.context_module.unlock_at)>new Date)
Se(o,t.context_module.prerequisites)
Oe(t.context_module.id,t.context_module.name)
0===t.context_module.completion_requirements.length?o.find(".requirements_message").empty():Ee(o,t.context_module.requirement_count)
o.find(".context_module_items .context_module_item").removeClass("progression_requirement").removeClass("min_score_requirement").removeClass("max_score_requirement").removeClass("must_view_requirement").removeClass("must_mark_done_requirement").removeClass("must_submit_requirement").removeClass("must_contribute_requirement").find(".criterion").removeClass("defined")
o.find(".ig-row").removeClass("with-completion-requirements")
for(const e in t.context_module.completion_requirements){const n=t.context_module.completion_requirements[e]
n.criterion_type=n.type
const i=o.find("#context_module_item_"+n.id)
i.find(".ig-row").addClass("with-completion-requirements")
i.find(".criterion").fillTemplateData({data:n})
i.find(".completion_requirement").fillTemplateData({data:n})
i.find(".criterion").addClass("defined")
i.find(".module-item-status-icon").show()
i.addClass(n.type+"_requirement").addClass("progression_requirement")}modules.refreshModuleList()})
M()("#add_context_module_form").formSubmit({object_name:"context_module",required:["name"],processData(e){const t=[]
M()(this).find(".prerequisites_list .criteria_list .criterion").each((function(){const e=M()(this).find(".option select").val()
e&&t.push("module_"+e)}))
e["context_module[prerequisites]"]=t.join(",")
e["context_module[completion_requirements][none]"]="none"
const o=M()(this).find(".completion_entry .criteria_list .criterion")
o.each((function(){const t=M()(this).find(".id").val()
e["context_module[completion_requirements]["+t+"][type]"]=M()(this).find(".type").val()
e["context_module[completion_requirements]["+t+"][min_score]"]=M()(this).find(".min_score").val()}))
const n=M()('input[name="context_module[requirement_count]"]:checked').val()
e["context_module[requirement_count]"]=n
return e},beforeSubmit(e){const t=M()(this).data("current_module")
t.loadingImage()
t.find(".header").fillTemplateData({data:e})
t.addClass("dont_remove")
modules.hideEditModule()
t.removeClass("dont_remove")
return t},success(e,o){var i,s
o.loadingImage("remove")
o.attr("id","context_module_"+e.context_module.id)
le(o,e.context_module.id)
o.data("moduleId",e.context_module.id)
o.data("module-url","/courses/"+e.context_module.context_id+"/modules/"+e.context_module.id+"items?include[]=content_details")
o.data("workflow-state",e.context_module.workflow_state)
if("unpublished"==e.context_module.workflow_state){o.find(".workflow-state-action").text("Publish")
o.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
o.addClass("unpublished_module")}M()("#no_context_modules_message").slideUp()
M()("#expand_collapse_all").show()
qe()
const r=o.find(".publish-icon")
if(!r.data("id")){const t=function(t,n){const i=o.find(t)
i.attr(n,i.attr(n).replace("{{ id }}",e.context_module.id))}
t("span.collapse_module_link","href")
t("span.expand_module_link","href")
t(".add_module_item_link","rel")
t(".add_module_item_link","rel")
const n={moduleType:"module",id:e.context_module.id,courseId:e.context_module.context_id,published:"published"==e.context_module.workflow_state,publishable:true}
const i=u(r,n)
b(i.model,i)}t.renderIfNeeded(e.context_module)
o.triggerHandler("update",e)
const l=o.find(".module_dnd")[0]
if(l){const t=document.getElementById("context_modules")
g.a.render(Object(n["a"])(I["a"],{courseId:ENV.course_id,moduleId:e.context_module.id,contextModules:t}),l)}null!==(i=window.ENV)&&void 0!==i&&null!==(s=i.FEATURES)&&void 0!==s&&s.new_math_equation_handling&&fe["a"].isMathMLOnPage()&&(fe["a"].isMathJaxLoaded()?fe["a"].reloadElement("content"):fe["a"].loadMathJax(void 0))},error(e,t){t.loadingImage("remove")}})
M()("#add_context_module_form .add_prerequisite_link").click((function(e){e.preventDefault()
const t=M()(this).parents("#add_context_module_form")
const o=t.data("current_module")
const n=M()("#module_list").clone(true).removeAttr("id")
const i=t.find("#criterion_blank_prereq").clone(true).removeAttr("id")
n.find("."+o.attr("id")).remove()
const s=[]
M()("#context_modules .context_module").each((function(){(M()(this)[0]==o[0]||s.length>0)&&s.push(M()(this).attr("id"))}))
for(const e in s)n.find("."+s[e]).hide()
n.attr("id","module_list_prereq")
i.find(".option").empty().append(n.show())
M()('<label for="module_list_prereq" class="screenreader-only" />').text(be.t("Select prerequisite module")).insertBefore(n)
t.find(".prerequisites_list .criteria_list").append(i).show()
i.show()
n.change(e=>{const t=M()(e.target)
const o=t.val()?t.find("option:selected").text():""
const n=t.closest(".criterion")
const i=n.find(".delete_criterion_link")
i.attr("aria-label",be.t("Delete prerequisite %{title}",{title:o}))})
n.focus()}))
M()("#add_context_module_form .add_completion_criterion_link").click((function(e){e.preventDefault()
const t=M()(this).parents("#add_context_module_form")
const o=t.data("current_module")
const n=M()("#completion_criterion_option").clone(true).removeAttr("id")
const i=n.find("select.id")
const s=t.find("#criterion_blank_req").clone(true).removeAttr("id")
s.find(".prereq_desc").remove()
modules.prerequisites()
const r={}
o.find(".content .context_module_item").not(".context_module_sub_header").each((function(){let e
const t=M()(this).getTemplateData({textValues:["id","type"]})
t.title=M()(this).find(".title").attr("title")
"quiz"===t.type||"lti-quiz"===t.type||M()(this).hasClass("lti-quiz")?e=be.t("optgroup.quizzes","Quizzes"):"assignment"===t.type?e=be.t("optgroup.assignments","Assignments"):"attachment"===t.type?e=be.t("optgroup.files","Files"):"external_url"===t.type?e=be.t("optgroup.external_urls","External URLs"):"context_external_tool"===t.type?e=be.t("optgroup.external_tools","External Tools"):"discussion_topic"===t.type?e=be.t("optgroup.discussion_topics","Discussions"):"wiki_page"===t.type&&(e=be.t("Pages"))
let o=r[e]
if(!o){o=r[e]=M()(document.createElement("optgroup"))
o.attr("label",e)
i.append(o)}const n=t.title
const s=M()(document.createElement("option"))
s.val(t.id).text(n)
o.append(s)}))
s.find(".option").empty().append(n)
n.find(".id").change()
n.slideDown((function(){e.originalEvent&&M()("select:first",M()(this)).focus()}))
t.find(".completion_entry .criteria_list").append(s).show()
s.slideDown()
M()(".requirement-count-radio").show()
M()("#context_module_requirement_count_").change()}))
M()("#completion_criterion_option .id").change((function(){const e=M()(this).parents(".completion_criterion_option")
const t=M()("#context_module_item_"+M()(this).val()).getTemplateData({textValues:["type","graded"]})
e.find(".type option").hide().attr("disabled",true).end().find(".type option.any").show().attr("disabled",false).end().find(".type option."+t.type).show().attr("disabled",false)
"1"==t.graded&&e.find(".type option.graded").show().attr("disabled",false)
e.find(".type").val(e.find(".type option."+t.criterion_type+":first").val())
e.find(".type").change()}))
M()("#completion_criterion_option .type").change((function(){const e=M()(this).parents(".completion_criterion_option")
e.find(".min_score_box").showIf("min_score"==M()(this).val())
const t=e.find(".id").val()
const o=M.a.trim(M()("#context_module_item_"+t+" .points_possible_display").text().split(" ")[0])
if(o.length>0&&"min_score"==M()(this).val()){e.find(".points_possible").text(o)
e.find(".points_possible_parent").show()}else e.find(".points_possible_parent").hide()
const n=e.find(".id option:selected").text()
const i=e.find(".type option:selected").text()
e.closest(".criterion").find(".delete_criterion_link").attr("aria-label",be.t("Delete requirement %{item} (%{type})",{item:n,type:i}))}))
M()("#add_context_module_form .requirement-count-radio .ic-Radio input").change(()=>{if(M()("#context_module_requirement_count_").prop("checked"))M()(".require-sequential").show()
else{M()(".require-sequential").hide()
M()("#require_sequential_progress").prop("checked",false)}})
M()("#add_context_module_form .delete_criterion_link").click((function(e){e.preventDefault()
const t=M()(this).closest(".criteria_list")
const o=M()(this).parents(".completion_entry")
const n=M()(this).closest(".criterion")
const i=n.prev()
const s=i.length?M()(".delete_criterion_link",i):M()(".add_prerequisite_or_requirement_link",M()(this).closest(".form-section"))
n.slideUp((function(){M()(this).remove()
0===t.html().length&&0!==o.length&&M()(".requirement-count-radio").fadeOut("fast")
s.focus()}))}))
M()(".duplicate_module_link").live("click",(function(e){e.preventDefault()
const t=M()(this).attr("href")
const o=M()(this).parents(".context_module")
const i=xe||(xe=Object(n["a"])(h,{}))
const s=M()('<div id="temporary-spinner" class="item-group-condensed"></div>')
s.insertAfter(o)
g.a.render(i,M()("#temporary-spinner")[0])
M.a.screenReaderFlashMessage(be.t("Duplicating Module, this may take some time"))
const r=function(e){e.data.ENV_UPDATE.forEach(e=>{ENV.MODULE_FILE_DETAILS[e.id]=e})
const t=e.data.context_module.id
const i=e.data.context_module.context_id
const r=`/courses/${i}/modules`
pe["a"].get(r).then(e=>{const i=M()(e.data)
const r=i.find("#context_module_"+t)
s.remove()
r.insertAfter(o)
const l=r.find(".module_dnd")[0]
if(l){const e=document.getElementById("context_modules")
g.a.render(Object(n["a"])(I["a"],{courseId:ENV.course_id,moduleId:t,contextModules:e}),l)}r.find(".collapse_module_link").focus()
modules.updateAssignmentData()
M()(".delete_module_link").die()
M()(".duplicate_module_link").die()
M()(".duplicate_item_link").die()
M()(".add_module_link").die()
M()(".edit_module_link").die()
M()("#context_modules").off("addFileToModule")
M()("#add_context_module_form .add_prerequisite_link").off()
M()("#add_context_module_form .add_completion_criterion_link").off()
M()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",De)
modules.initModuleManagement(r)}).catch(Object(me["c"])(be.t("Error rendering duplicated module")))}
pe["a"].post(t,{}).then(r).catch(Object(me["c"])(be.t("Error duplicating module")))}))
M()(".delete_module_link").live("click",(function(e){e.preventDefault()
M()(this).parents(".context_module").confirmDelete({url:M()(this).attr("href"),message:be.t("confirm.delete","Are you sure you want to delete this module?"),cancelled(){M()(".ig-header-admin .al-trigger",M()(this)).focus()},success(e){const t=e.context_module.id
M()(".context_module .prerequisites .criterion").each((function(){const e=M()(this).getTemplateData({textValues:["id","type"]})
"context_module"==e.type&&e.id==t&&M()(this).remove()}))
const o=M()(this).prev()
const n=M()("#content .header-bar .add_module_link")
const i=o.length?M()(".ig-header-admin .al-trigger",o):n
const s=M()(this).find(".module_dnd")[0]
s&&g.a.unmountComponentAtNode(s)
M()(this).slideUp((function(){M()(this).remove()
modules.updateTaggedItems()
i.focus()
const e=M()("#context_modules .context_module")
e.length||M()("#expand_collapse_all").hide()}))
M.a.flashMessage(be.t("Module %{module_name} was successfully deleted.",{module_name:e.context_module.name}))}})}))
M()(".outdent_item_link,.indent_item_link").live("click",(function(e,t,o){e.preventDefault()
const n=M()(t)
const i=n&&n.attr("id")?"#"+n.attr("id"):t&&"."+n.attr("class")
const s=M()(this).closest(".cog-menu-container").children(".al-trigger")
const r=M()(this).hasClass("indent_item_link")
const l=M()(this).parents(".context_module_item")
let a=modules.currentIndent(l)
a=Math.max(Math.min(a+(r?1:-1),5),0)
l.loadingImage({image_size:"small"})
M.a.ajaxJSON(M()(this).attr("href"),"PUT",{"content_tag[indent]":a},e=>{l.loadingImage("remove")
const t=M()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
modules.updateAssignmentData()},e=>{}).done(()=>{i?setTimeout(()=>{const e="."+M()(o).attr("class").split(" ").join(".")
M()(i).find(e).focus()},0):s.focus()})}))
M()(".edit_item_link").live("click",(function(e){e.preventDefault()
const t=M()(this).closest(".cog-menu-container").children(".al-trigger")
const o=M()(this).parents(".context_module_item")
const n=o.getTemplateData({textValues:["url","indent","new_tab"]})
n.title=o.find(".title").attr("title")
n.indent=modules.currentIndent(o)
M()("#edit_item_form").find(".external").showIf(o.hasClass("external_url")||o.hasClass("context_external_tool"))
M()("#edit_item_form").attr("action",M()(this).attr("href"))
M()("#edit_item_form").fillFormData(n,{object_name:"content_tag"})
const i=M()("#edit_item_form #content_tag_title")
const s=o.data().master_course_restrictions
const r=!ue()(ENV,"MASTER_COURSE_SETTINGS.IS_MASTER_COURSE")&&!!ue()(s,"content")
i.attr("disabled",r)
M()("#edit_item_form").dialog({title:be.t("titles.edit_item","Edit Item Details"),close(){M()("#edit_item_form").hideErrors()
t.focus()},minWidth:320}).fixDialogButtons()}))
M()("#edit_item_form .cancel_button").click(e=>{M()("#edit_item_form").dialog("close")})
M()("#edit_item_form").formSubmit({beforeSubmit(e){if(""==e["content_tag[title]"]){M()("#content_tag_title").errorBox(be.t("Title is required"))
return false}M()(this).loadingImage()},success(e){M()(this).loadingImage("remove")
const t=M()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
0!=e.content_tag.content_id&&"ContextExternalTool"!=e.content_tag.content_type&&modules.updateAllItemInstances(e.content_tag)
modules.updateAssignmentData()
M()(this).dialog("close")},error(e){M()(this).loadingImage("remove")
M()(this).formErrors(e)}})
M()(".delete_item_link").live("click",(function(e){e.preventDefault()
const t=M()(this).closest(".cog-menu-container").children(".al-trigger")
const o=M()(this).parents(".context_module_items").children()
const n=M()(this).parents(".context_module")
const i=o.index(M()(this).parents(".context_module_item"))
const s=i-1
let r
if(s>=0){const e=o[s]
r=M()(e).hasClass("context_module_sub_header")?M()(e).find(".cog-menu-container .al-trigger"):M()(e).find(".item_link")}else r=M()(this).closest(".editable_context_module").find("button.al-trigger")
M()(this).parents(".context_module_item").confirmDelete({url:M()(this).attr("href"),message:be.t("confirm.delete_item","Are you sure you want to remove this item from the module?"),success(e){delete ENV.MODULE_FILE_DETAILS[e.content_tag.id]
M()(this).slideUp((function(){M()(this).remove()
modules.updateTaggedItems()
r.focus()
ke(n)}))
M.a.flashMessage(be.t("Module item %{module_item_name} was successfully deleted.",{module_item_name:e.content_tag.title}))},cancelled(){t.focus()}})}))
M()(".move_module_item_link").on("click keyclick",(function(e){e.preventDefault()
const t=M()(this).parents(".context_module_item")[0]
const o=document.querySelectorAll("#context_modules .context_module")
const n=Array.prototype.map.call(o,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const o=e.querySelector(".header > .collapse_module_link > .name").textContent
const n=e.querySelectorAll(".context_module_item")
const i=Array.prototype.map.call(n,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:o,items:i}})
const i={title:be.t("Move Module Item"),items:[{id:t.getAttribute("id").substring("context_module_item_".length),title:t.querySelector(".title").textContent.trim()}],moveOptions:{groupsLabel:be.t("Modules"),groups:n},formatSaveUrl:({groupId:e})=>`${ENV.CONTEXT_URL_ROOT}/modules/${e}/reorder`,onMoveSuccess:({data:e,itemIds:t,groupId:o})=>{const n=t[0]
const i=M()(`#context_module_${o} .ui-sortable`)
i.sortable("disable")
const s=document.querySelector("#context_module_item_"+n)
i[0].appendChild(s)
const r=e.context_module.content_tags.map(e=>e.content_tag.id)
Object(v["c"])(r,i[0],e=>"#context_module_item_"+e)
i.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(v["b"])(i,document.getElementById("not_right_side"))}))
M()(".move_module_link").on("click keyclick",(function(e){e.preventDefault()
const t=M()(this).parents(".context_module")[0]
const o=document.querySelectorAll("#context_modules .context_module")
const n=Array.prototype.map.call(o,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const o=e.querySelector(".header > .collapse_module_link > .name").textContent
return{id:t,title:o}})
const i={title:be.t("Move Module"),items:[{id:t.getAttribute("id").substring("context_module_".length),title:t.querySelector(".header > .collapse_module_link > .name").textContent}],moveOptions:{siblings:n},formatSaveUrl:()=>ENV.CONTEXT_URL_ROOT+"/modules/reorder",onMoveSuccess:e=>{const t=document.querySelector("#context_modules.ui-sortable")
Object(v["c"])(e.data.map(e=>e.context_module.id),t,e=>"#context_module_"+e)
M()(t).sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(v["b"])(i,document.getElementById("not_right_side"))}))
M()(".move_module_contents_link").on("click keyclick",(function(e){e.preventDefault()
const t=M()(this).parents(".context_module")[0]
const o=document.querySelectorAll("#context_modules .context_module")
const n=Array.prototype.map.call(o,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const o=e.querySelector(".header > .collapse_module_link > .name").textContent
const n=e.querySelectorAll(".context_module_item")
const i=Array.prototype.map.call(n,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:o,items:i}})
const i=t.querySelectorAll(".context_module_item")
const s=Array.prototype.map.call(i,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
if(0===s.length)return
s[0].groupId=t.getAttribute("id").substring("context_module_".length)
const r={title:be.t("Move Contents Into"),items:s,moveOptions:{groupsLabel:be.t("Modules"),groups:n,excludeCurrent:true},formatSaveUrl:({groupId:e})=>`${ENV.CONTEXT_URL_ROOT}/modules/${e}/reorder`,onMoveSuccess:({data:e,itemIds:t,groupId:o})=>{const n=M()(`#context_module_${o} .ui-sortable`)
n.sortable("disable")
t.forEach(e=>{const t=document.querySelector("#context_module_item_"+e)
n[0].appendChild(t)})
const i=e.context_module.content_tags.map(e=>e.content_tag.id)
Object(v["c"])(i,n[0],e=>"#context_module_item_"+e)
n.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(v["b"])(r,document.getElementById("not_right_side"))}))
M()(".drag_and_drop_warning").on("focus",e=>{M()(e.currentTarget).removeClass("screenreader-only")})
M()(".drag_and_drop_warning").on("blur",e=>{M()(e.currentTarget).addClass("screenreader-only")})
M()(".edit_module_link").live("click",(function(e){e.preventDefault()
modules.editModule(M()(this).parents(".context_module"))}))
M()(".add_module_link").live("click",e=>{e.preventDefault()
modules.addModule()})
M()("#context_modules").on("addFileToModule",e=>{e.preventDefault()
const t=e.originalEvent.moduleId
const o=e.originalEvent.attachment
const n={"item[id]":o.id,"item[type]":"attachment","item[title]":o.display_name}
s(t,false)(n)})
M()(".add_module_item_link").on("click",(function(e){e.preventDefault()
const t=M()(e.currentTarget)
t.blur()
const o=M()(this).closest(".context_module")
if(o.hasClass("collapsed_module")){o.find(".expand_module_link").triggerHandler("click",()=>{o.find(".add_module_item_link").click()})
return}if(E["a"]&&E["a"].selectContentDialog){const e=M()(this).parents(".context_module").find(".header").attr("id")
const o=M()(this).parents(".context_module").find(".name").attr("title")
const n={for_modules:true,context_module_id:e}
const i=window.matchMedia("(min-width: 500px)").matches
const r=window.matchMedia("(min-width: 770px)").matches
const l=r?770:i?500:320
n.select_button_text=be.t("buttons.add_item","Add Item")
n.holder_name=o
n.height=550
n.width=l
n.dialog_title=be.t("titles.add_item","Add Item to %{module}",{module:o})
n.close=function(){t.focus()}
n.submit=s(e)
E["a"].selectContentDialog(n)}}))
function s(e,t=true){return o=>{if(o["item[assignment_id]"])return window.location.reload()
const n=M()("#context_module_"+e)
let i=modules.getNextPosition(n)
o.content_details=["items"]
o["item[position]"]=i++
let s=modules.addItemToModule(n,o)
n.find(".context_module_items.ui-sortable").sortable("refresh").sortable("disable")
const r=n.find(".add_module_item_link").attr("rel")
n.disableWhileLoading(M.a.ajaxJSON(r,"POST",o,e=>{s.remove()
e.content_tag.type=o["item[type]"]
s=modules.addItemToModule(n,e.content_tag)
modules.addContentTagToEnv(e.content_tag)
n.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")
a(s,e.content_tag)
p(s,e.content_tag)
modules.updateAssignmentData()
s.find(".lock-icon").data({moduleType:e.content_tag.type,contentId:e.content_tag.content_id,moduleItemId:e.content_tag.id})
modules.loadMasterCourseData(e.content_tag.id)}),{onComplete(){t&&n.find(".add_module_item_link").focus()}})}}M()(".duplicate_item_link").live("click",(function(e){e.preventDefault()
const t=M()(this).closest(".context_module")
const o=M()(this).attr("href")
pe["a"].post(o).then(({data:e})=>{const o=modules.addItemToModule(t,e.content_tag)
a(o,e.content_tag)
p(o,e.content_tag)
modules.updateAssignmentData()
o.find(".lock-icon").data({moduleType:e.content_tag.type,contentId:e.content_tag.content_id,moduleItemId:e.content_tag.id})
modules.loadMasterCourseData(e.content_tag.id)
t.find(".context_module_items.ui-sortable").sortable("disable")
e.new_positions.forEach(({content_tag:e})=>{t.find("#context_module_item_"+e.id).fillTemplateData({data:{position:e.position}})})
M()(`#context_module_item_${e.content_tag.id} .item_link`).focus()
t.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")}).catch(Object(me["c"])("Error duplicating item"))}))
M()("#add_module_prerequisite_dialog .cancel_button").click(()=>{M()("#add_module_prerequisite_dialog").dialog("close")})
M()(".delete_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=M()(this).parents(".criterion")
const o=[]
M()(this).parents(".context_module .prerequisites .criterion").each((function(){if(M()(this)[0]!=t[0]){const e=M()(this).getTemplateData({textValues:["id","type"]})
const t="context_module"==e.type?"module":e.type
o.push(t+"_"+e.id)}}))
const n=M()(this).parents(".context_module").find(".edit_module_link").attr("href")
const i={"context_module[prerequisites]":o.join(",")}
t.dim()
M.a.ajaxJSON(n,"PUT",i,e=>{M()("#context_module_"+e.context_module.id).triggerHandler("update",e)})}))
M()("#add_module_prerequisite_dialog .submit_button").click((function(){const e=M()("#add_module_prerequisite_dialog .prerequisite_module_select select").val()
if(!e)return
M()("#add_module_prerequisite_dialog").loadingImage()
const t=[]
t.push("module_"+e)
const o=M()("#context_module_"+M()("#add_module_prerequisite_dialog").getTemplateData({textValues:["context_module_id"]}).context_module_id)
o.find(".prerequisites .criterion").each((function(){t.push("module_"+M()(this).getTemplateData({textValues:["id","name","type"]}).id)}))
const n=o.find(".edit_module_link").attr("href")
const i={"context_module[prerequisites]":t.join(",")}
M.a.ajaxJSON(n,"PUT",i,e=>{M()("#add_module_prerequisite_dialog").loadingImage("remove")
M()("#add_module_prerequisite_dialog").dialog("close")
M()("#context_module_"+e.context_module.id).triggerHandler("update",e)},e=>{M()("#add_module_prerequisite_dialog").loadingImage("remove")
M()("#add_module_prerequisite_dialog").formErrors(e)})}))
M()(".context_module .add_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=M()(this).parents(".context_module").find(".header").getTemplateData({textValues:["name","id"]})
M()("#add_module_prerequisite_dialog").fillTemplateData({data:{module_name:t.name,context_module_id:t.id}})
const o=M()(this).parents(".context_module")
const n=M()("#module_list").clone(true).removeAttr("id")
n.find("."+o.attr("id")).remove()
const i=[]
M()("#context_modules .context_module").each((function(){(M()(this)[0]==o[0]||i.length>0)&&i.push(M()(this).getTemplateData({textValues:["id"]}).id)}))
for(const e in i)n.find(".context_module_"+i[e]).hide()
M()("#add_module_prerequisite_dialog").find(".prerequisite_module_select").empty().append(n.show())
M()("#add_module_prerequisite_dialog").dialog({title:be.t("titles.add_prerequisite","Add Prerequisite to %{module}",{module:t.name}),width:400})}))
M()("#add_context_module_form .cancel_button").click(e=>{modules.hideEditModule(true)})
requestAnimationFrame((function(){const e=[]
M()("#context_modules .context_module_items").each((function(){e.push(M()(this))}))
var t=function(){if(e.length>0){const o=e.shift()
const n=modules.sortable_module_options
const i=M()("#k5-course-header").closest(".ic-Dashboard-tabs").eq(0)
const s=M()("#k5-modules-container")
i.length>0&&s.length>0&&(n.sort=e=>d(e,s,i))
n.update=modules.updateModuleItemPositions
o.sortable(n)
requestAnimationFrame(t)}}
t()
M()("#context_modules").sortable({handle:".reorder_module_link",helper:"clone",axis:"y",update:modules.updateModulePositions})
modules.refreshModuleList()
modules.refreshed=true}))
function a(e,t){const o={moduleType:t.type,id:t.publishable_id,moduleItemName:t.moduleItemName,moduleItemId:t.id,moduleId:t.context_module_id,courseId:t.context_id,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable,content_details:t.content_details,isNew:true}
const n=u(e.find(".publish-icon"),o)
b(n.model,n)}var d=function(e,t,o){const n=null===t||void 0===t?void 0:t.position().top
const i=(null===o||void 0===o?void 0:o.position().top)+o.height()
const s=n<i
if(s&&e.pageY<i+30){const t=window.scrollY-.05*e.clientY
M()("html, body").scrollTop(t)}}
var u=function(e,t){t=t||e.data()
if("attachment"==t.moduleType){let o={}
if(t.isNew){o=t||{}
e.attr("data-module-type","attachment")}else o=ENV.MODULE_FILE_DETAILS[parseInt(t.moduleItemId,10)]
o.content_details=o.content_details||{}
const n=new r["a"]({type:"file",id:o.content_id||o.id,locked:o.content_details.locked,hidden:o.content_details.hidden,unlock_at:o.content_details.unlock_at,lock_at:o.content_details.lock_at,display_name:o.content_details.display_name,thumbnail_url:o.content_details.thumbnail_url,usage_rights:o.content_details.usage_rights})
n.url=function(){return"/api/v1/files/"+this.id}
const i={model:n,togglePublishClassOn:e.parents(".ig-row")[0],userCanEditFilesForContext:ENV.MODULE_FILE_PERMISSIONS.manage_files_edit,usageRightsRequiredForContext:ENV.MODULE_FILE_PERMISSIONS.usage_rights_required,fileName:n.displayName()}
const s=c.a.createElement(l["a"],i)
g.a.render(s,e[0])
return{model:n}}const o=new k({module_type:t.moduleType,content_id:t.contentId,id:t.id,module_id:t.moduleId,module_item_id:t.moduleItemId,module_item_name:t.moduleItemName,course_id:t.courseId,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable})
const n={model:o,title:t.publishTitle,el:e[0]}
const i=new C["a"](n)
const s=e.closest(".ig-row")
t.published&&s.addClass("ig-published")
i.render()
return i}
const p=(e,t)=>{const o=e.find(".module_item_copy_to")
if(0===o.length)return
const n=e.find(".module_item_send_to")
const i=t.content_id
const s=t.type.replace(/^wiki_/,"")
const r="quiz"===s?"quizzes":s+"s"
if(["assignment","discussion_topic","page","quiz"].includes(s)){o.data("select-class",r)
o.data("select-id",i)
n.data("content-type",s)
n.data("content-id",i)}else{o.closest("li").remove()
n.closest("li").remove()}}
const m={}
const _=function(e,t){let o,n,i,s
n=m[Me(e)||Me(t)]
if(n)for(o=0;o<n.length;o++){i=n[o]
s=i.model.parse(e)
if("File"==s.type)i.model.set({locked:!s.published})
else{i.model.set({published:s.published})
i.model.view.render()}}}
const f=function(e){const o=e.publish,n=e.unpublish
e.publish=function(){return o.apply(e,arguments).done(o=>{o.publish_warning&&M.a.flashWarning(be.t("Some module items could not be published"))
t.renderIfNeeded(o)
e.fetch({data:{include:"items"}}).done(t=>{for(let o=0;o<t.items.length;o++)_(t.items[o],e)})})}
e.unpublish=function(){return n.apply(e,arguments).done(()=>{e.fetch({data:{include:"items"}}).done(t=>{for(let o=0;o<t.items.length;o++)_(t.items[o],e)})})}}
const x=function(e){const t=e.publish,o=e.unpublish
e.publish=function(){return t.apply(e,arguments).done(t=>{_(M.a.extend({published:true},t),e)})}
e.unpublish=function(){return o.apply(e,arguments).done(t=>{_(M.a.extend({published:false},t),e)})}}
var b=function(e,t){const o=Me(e)
null===o?f(e):x(e)
m[o]||(m[o]=[])
m[o].push({model:e,view:t})}
const y=e||M()("#context_modules")
y.find(".publish-icon").each((e,t)=>{const o=M()(t)
if(o.data("id")){const e=u(o)
b(e.model,e)}})
M()(".module-publish-link").each((e,t)=>{const o=M()(t)
const n=new ne({published:o.hasClass("published"),id:o.attr("data-id")},{url:o.attr("data-url"),root:"module"})
const i=new ie["a"]({model:n,el:o})
i.render()})}
const Te={page:"wiki_page",discussion:"discussion_topic",external_tool:"context_external_tool",sub_header:"context_module_sub_header"}
function Me(e){if(null===e)return null
let t=e.attributes||e,o=M.a.underscore(t.module_type||t.type),n=t.content_id||t.id
o=Te[o]||o
if(o&&"module"!==o){if("wiki_page"==o){o="wiki_page"
n=t.page_url||t.id}else"context_module_sub_header"!==o&&"external_url"!==o&&"context_external_tool"!=o||(n=t.id)
return o+"_"+n}return null}const qe=function(){let e=false
M()("#context_modules .context_module .content").each((function(){"block"===M()(this).css("display")&&(e=true)}))
M()("#expand_collapse_all").text(e?be.t("Collapse All"):be.t("Expand All"))
M()("#expand_collapse_all").attr("aria-label",e?be.t("Collapse All Modules"):be.t("Expand All Modules"))
M()("#expand_collapse_all").data("expand",!e)
M()("#expand_collapse_all").attr("aria-expanded",e?"true":"false")}
var De=function(e){e.preventDefault()
const t=null
const o=M()(this).hasClass("collapse_module_link")?"1":"0"
const n=M()(this).parents(".context_module")
const i=0===n.find(".content .context_module_items").children().length
const s=function(e){const o=function(){n.find(".collapse_module_link").css("display",n.find(".content:visible").length>0?"inline-block":"none")
n.find(".expand_module_link").css("display",0===n.find(".content:visible").length?"inline-block":"none")
if(n.find(".content:visible").length>0){n.find(".footer .manage_module").css("display","")
n.toggleClass("collapsed_module",false)
n.find(".collapse_module_link").focus()
M.a.screenReaderFlashMessage(be.t("Expanded"))}else{n.find(".footer .manage_module").css("display","")
n.toggleClass("collapsed_module",true)
n.find(".expand_module_link").focus()
M.a.screenReaderFlashMessage(be.t("Collapsed"))}qe()
t&&M.a.isFunction(t)&&t()}
if(e){n.find(".content").show()
o()}else n.find(".content").slideToggle(o)}
i&&n.loadingImage()
const r=M()(this).attr("href")
M.a.ajaxJSON(r,"POST",{collapse:o},e=>{if(i){n.loadingImage("remove")
for(const t in e)modules.addItemToModule(n,e[t].content_tag)
n.find(".context_module_items.ui-sortable").sortable("refresh")
s()
modules.updateProgressionState(n)}},e=>{n.loadingImage("remove")})
"1"!=o&&i||s()}
function je(e){return"none"===e.style.display||e.parentElement.classList.contains("collapsed_module")}modules.updateAssignmentData(()=>{modules.updateProgressions((function(){if(window.location.hash&&!window.location.hash.startsWith("#!"))try{ye(M()(window.location.hash))}catch(e){}else{var e
const t=null===(e=document.querySelector(".context_module"))||void 0===e?void 0:e.querySelector(".content")
if(!t||je(t)){const e=[...document.querySelectorAll(".context_module .content")].find(e=>!je(e))
e&&ye(M()(e).parents(".context_module"))}}}))})
M()(document).ready((function(){M()(".context_module").each((function(){ke(M()(this))}))
if(ENV.IS_STUDENT){M()(".context_module").addClass("student-view")
M()(".context_module_item .ig-row").addClass("student-view")}M()(".external_url_link").click((function(e){j.externalUrlLinkClick(e,M()(this))}))
M()(".datetime_field").datetime_field()
M()(".context_module").live("mouseover",(function(){M()(".context_module_hover").removeClass("context_module_hover")
M()(this).addClass("context_module_hover")}))
M()(".context_module_item").live("mouseover focus",(function(){M()(".context_module_item_hover").removeClass("context_module_item_hover")
M()(this).addClass("context_module_item_hover")}))
M()(".context_module_item").each((e,t)=>{modules.evaluateItemCyoe(t)})
let e=null
const t=function(e){if(e.hasClass("context_module")){M()(".context_module_hover").removeClass("context_module_hover")
M()(".context_module_item_hover").removeClass("context_module_item_hover")
e.addClass("context_module_hover")}else if(e.hasClass("context_module_item")){M()(".context_module_item_hover").removeClass("context_module_item_hover")
M()(".context_module_hover").removeClass("context_module_hover")
e.addClass("context_module_item_hover")
e.parents(".context_module").addClass("context_module_hover")}e.find(":tabbable:first").focus()}
const o=function(o){o=o||{}
let n
if(e){if(e&&e.hasClass("context_module")){n=o.selectWhenModuleFocused&&o.selectWhenModuleFocused.item
n=n.length?n:o.selectWhenModuleFocused&&o.selectWhenModuleFocused.fallbackModule}else if(e&&e.hasClass("context_module_item")){n=o.selectWhenModuleItemFocused&&o.selectWhenModuleItemFocused.item
n=n.length?n:o.selectWhenModuleItemFocused&&o.selectWhenModuleItemFocused.fallbackModule}}else n=M()(".context_module:first")
t(n)
return n}
const i=function(e){const t=e&&e.closest(".context_module_item_hover").length?".context_module_item_hover":".context_module_hover"
return e.closest(t)}
if(!ENV.disable_keyboard_shortcuts){const t=M()(document)
t.keycodes("k up",t=>{const n={selectWhenModuleFocused:{item:e&&e.prev(".context_module").find(".context_module_item:visible:last"),fallbackModule:e&&e.prev(".context_module")},selectWhenModuleItemFocused:{item:e&&e.prev(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module")}}
const i=o(n)
i.length&&(e=i)})
t.keycodes("j down",t=>{const n={selectWhenModuleFocused:{item:e&&e.find(".context_module_item:visible:first"),fallbackModule:e&&e.next(".context_module")},selectWhenModuleItemFocused:{item:e&&e.next(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module").next(".context_module")}}
const i=o(n)
i.length&&(e=i)})
t.keycodes("e d space",t=>{if(!e)return
const o=i(e)
const n=o.hasClass("context_module_item_hover")
if("e"==t.keyString)n?e.find(".edit_item_link:first").click():e.find(".edit_module_link:first").click()
else if("d"==t.keyString)if(n){e.find(".delete_item_link:first").click()
e=e.parents(".context_module")}else{e.find(".delete_module_link:first").click()
e=null}else"space"==t.keyString&&(n?e.find(".move_module_item_link:first").click():e.find(".move_module_link:first").click())
t.preventDefault()})
t.keycodes("n",e=>{M()(".add_module_link:visible:first").click()
e.preventDefault()})
t.keycodes("i o",o=>{if(!e)return
const n=e.attr("id")
"i"==o.keyString?e.find(".indent_item_link:first").trigger("click",[e,document.activeElement]):"o"==o.keyString&&e.find(".outdent_item_link:first").trigger("click",[e,document.activeElement])
t.ajaxStop(()=>{e=M()("#"+n)})})}if(M()("#context_modules").hasClass("editable")){requestAnimationFrame(()=>{modules.initModuleManagement()})
modules.loadMasterCourseData()}M()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",De)
M()(document).fragmentChange((e,t)=>{if("#student_progressions"==t)M()(".module_progressions_link").trigger("click")
else if(!t.startsWith("#!")){const e=M()(t.replace(/module/,"context_module"))
e.hasClass("collapsed_module")&&e.find(".expand_module_link").triggerHandler("click")}})
const s=ENV.COLLAPSED_MODULES
for(const e in s)M()("#context_module_"+s[e]).addClass("collapsed_module")
const r=M()("#context_modules .context_module")
if(!r.length){M()("#no_context_modules_message").show()
M()("#expand_collapse_all").hide()
M()("#context_modules_sortable_container").addClass("item-group-container--is-empty")}r.each((function(){modules.updateProgressionState(M()(this))}))
qe()
M()("#expand_collapse_all").click((function(){const e=M()(this).data("expand")
M()(this).text(e?be.t("Collapse All"):be.t("Expand All"))
M()(this).attr("aria-label",e?be.t("Collapse All Modules"):be.t("Expand All Modules"))
M()(this).data("expand",!e)
M()(this).attr("aria-expanded",e?"true":"false")
M()(".context_module").each((function(){const t=M()(this)
if(e&&0===t.find(".content:visible").length||!e&&t.find(".content:visible").length>0){const o=function(){t.find(".collapse_module_link").css("display",e?"inline-block":"none")
t.find(".expand_module_link").css("display",e?"none":"inline-block")
t.find(".footer .manage_module").css("display","")
t.toggleClass("collapsed_module",e)}
t.find(".content").slideToggle({queue:false,done:o()})}}))
const t=M()(this).data("url")
const o=e?"0":"1"
M.a.ajaxJSON(t,"POST",{collapse:o})}))
function l(e,t,o,i){const s=()=>{var e
l(null)
i.focus()
null!==de["b"]&&void 0!==de["b"]&&null!==(e=de["b"].tray)&&void 0!==e&&e.refreshOnClose&&window.location.reload()}
g.a.render(Object(n["a"])(ae["a"],{tool:e,placement:"module_index_menu",acceptedResourceTypes:["assignment","audio","discussion_topic","document","image","module","quiz","page","video"],targetResourceType:"module",allowItemSelection:o,selectableItems:t,onDismiss:s,open:null!==e}),M()("#external-tool-mount-point")[0])}function a({tool:e,launchType:t,returnFocusTo:o,isOpen:i=true,contextModuleId:s=null}){i&&Object(ge["a"])(()=>{window.location.reload()})
const r=()=>{a({tool:e,launchType:t,returnFocusTo:o,contextModuleId:s,isOpen:false})
o.focus()}
g.a.render(Object(n["a"])(ve["a"],{tool:e,launchType:t,isOpen:i,contextType:"course",contextId:parseInt(ENV.COURSE_ID,10),title:e.name,onRequestClose:r,contextModuleId:s}),M()("#external-tool-mount-point")[0])}function d(e,t,o){return(e||[]).find(e=>e[t]===o.target.dataset.toolId)}function c(e){null!=e&&e.preventDefault()
const t=e.target.dataset.toolLaunchType
const o=t.includes("modal")?"definition_id":"id"
const n=d(ENV.MODULE_TOOLS[t],o,e)
const i=M()(e.target).parents(".context_module")
const s=i.length>0&&i.attr("id").substring("context_module_".length)
if("module_index_menu_modal"===t){a({tool:n,launchType:t,returnFocusTo:M()(".al-trigger")[0]})
return}if("module_menu_modal"===t){a({tool:n,launchType:t,returnFocusTo:M()(".al-trigger")[0],contextModuleId:s})
return}const r=[]
"module_index_menu"==t?r.push({course_id:ENV.COURSE_ID,type:"module"}):"module_group_menu"==t&&r.push({id:s,name:i.find(".name").attr("title")})
l(n,r,"module_index_menu"==t,M()(".al-trigger")[0])}M()(".menu_tray_tool_link").click(c)
Object(de["c"])()
function u(e,t,o){g.a.render(Object(n["a"])(_e["a"],{open:e,sourceCourseId:ENV.COURSE_ID,contentSelection:t,onDismiss:()=>{u(false,t,o)
o.focus()}}),document.getElementById("direct-share-mount-point"))}function p(e,t,o){g.a.render(Object(n["a"])(he["a"],{open:e,sourceCourseId:ENV.COURSE_ID,contentShare:t,onDismiss:()=>{p(false,t,o)
o.focus()}}),document.getElementById("direct-share-mount-point"))}M()(".module_copy_to").live("click",e=>{e.preventDefault()
const t=M()(e.target).closest(".context_module").data("module-id").toString()
const o={modules:[t]}
const n=M()(e.target).closest("ul").prev(".al-trigger")
u(true,o,n)})
M()(".module_send_to").live("click",e=>{e.preventDefault()
const t=M()(e.target).closest(".context_module").data("module-id").toString()
const o={content_type:"module",content_id:t}
const n=M()(e.target).closest("ul").prev(".al-trigger")
p(true,o,n)})
M()(".module_item_copy_to").live("click",e=>{e.preventDefault()
const t=M()(e.target).data("select-id")
const o=M()(e.target).data("select-class")
const n={[o]:[t]}
const i=M()(e.target).closest("ul").prev(".al-trigger")
u(true,n,i)})
M()(".module_item_send_to").live("click",e=>{e.preventDefault()
const t=M()(e.target).data("content-id")
const o=M()(e.target).data("content-type")
const n={content_id:t,content_type:o}
const i=M()(e.target).closest("ul").prev(".al-trigger")
p(true,n,i)})}))
t["a"]=modules},"44Ds":function(e,t,o){var n=o("e4Nc")
var i="Expected a function"
function s(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i)
var o=function(){var n=arguments,i=t?t.apply(this,n):n[0],s=o.cache
if(s.has(i))return s.get(i)
var r=e.apply(this,n)
o.cache=s.set(i,r)||s
return r}
o.cache=new(s.Cache||n)
return o}s.Cache=n
e.exports=s},"4kuk":function(e,t,o){var n=o("SfRM"),i=o("Hvzi"),s=o("u8Dt"),r=o("ekgI"),l=o("JSQU")
function a(e){var t=-1,o=null==e?0:e.length
this.clear()
while(++t<o){var n=e[t]
this.set(n[0],n[1])}}a.prototype.clear=n
a.prototype["delete"]=i
a.prototype.get=s
a.prototype.has=r
a.prototype.set=l
e.exports=a},"4uTw":function(e,t,o){var n=o("Z0cm"),i=o("9ggG"),s=o("GNiM"),r=o("dt0z")
function l(e,t){if(n(e))return e
return i(e,t)?[e]:s(r(e))}e.exports=l},"897F":function(e,t,o){"use strict"
var n=o("ouhR")
var i=o.n(n)
var s=o("Y/W1")
var r=o.n(s)
var l=o("qqwe")
o("ESjL")
i.a.fn.fixDialogButtons=function(){return this.each((function(){const e=i()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let o=i.a.map(t.toArray(),t=>{const o=i()(t)
let n=o.attr("class")||""
const s=o.attr("id")
if(o.is(".dialog_closer")){o.off(".fixdialogbuttons")
o.on("click.fixdialogbuttons",Object(l["a"])(()=>e.dialog("close")))}"submit"===o.prop("type")&&o[0].form&&(n+=" button_type_submit")
return{text:o.text(),"data-text-while-loading":o.data("textWhileLoading"),click:()=>o.click(),class:n,id:s}})
o=r.a.sortBy(o,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",o)}}))}},"9Nap":function(e,t,o){var n=o("/9aa")
var i=1/0
function s(e){if("string"==typeof e||n(e))return e
var t=e+""
return"0"==t&&1/e==-i?"-0":t}e.exports=s},"9ggG":function(e,t,o){var n=o("Z0cm"),i=o("/9aa")
var s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/
function l(e,t){if(n(e))return false
var o=typeof e
if("number"==o||"symbol"==o||"boolean"==o||null==e||i(e))return true
return r.test(e)||!s.test(e)||null!=t&&e in Object(t)}e.exports=l},Cwc5:function(e,t,o){var n=o("NKxu"),i=o("Npjl")
function s(e,t){var o=i(e,t)
return n(o)?o:void 0}e.exports=s},"E/5I":function(e,t,o){"use strict"
o.d(t,"a",(function(){return l}))
var n=o("HGxv")
const i=Object(n["useScope"])("move_positions")
function s(e,t){const o=e.slice()
const n=o.indexOf(t);-1!==n&&o.splice(n,1)
return o}function r(e,t){let o=e.slice()
t.forEach(e=>{o=s(o,e)})
return o}const l={first:{type:"absolute",get label(){return i.t("At the Top")},apply:({items:e,order:t})=>[...e,...r(t,e)]},before:{type:"relative",get label(){return i.t("Before..")},apply:({order:e,items:t,relativeTo:o})=>{const n=r(e,t)
return[...n.slice(0,o),...t,...n.slice(o)]}},after:{type:"relative",get label(){return i.t("After..")},apply:({order:e,items:t,relativeTo:o})=>{const n=r(e,t)
return[...n.slice(0,o+1),...t,...n.slice(o+1)]}},last:{type:"absolute",get label(){return i.t("At the Bottom")},apply:({order:e,items:t})=>[...r(e,t),...t]}}},E2jh:function(e,t,o){var n=o("2gN3")
var i=(s=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""),s?"Symbol(src)_1."+s:"")
var s
function r(e){return!!i&&i in e}e.exports=r},EpBk:function(e,t){function o(e){var t=typeof e
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=o},FdVj:function(e,t,o){"use strict"
var n=o("qJBq")
var i=o.n(n)
var s=o("HGxv")
const r={_parseNumber:i.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=r._parseNumber(e.toString(),{thousands:s["default"].lookup("number.format.delimiter"),decimal:s["default"].lookup("number.format.separator")})
isNaN(t)&&(t=r._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(r.parse(e))}
t["a"]=r},GNiM:function(e,t,o){var n=o("I01J")
var i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var s=/\\(\\)?/g
var r=n((function(e){var t=[]
46===e.charCodeAt(0)&&t.push("")
e.replace(i,(function(e,o,n,i){t.push(n?i.replace(s,"$1"):o||e)}))
return t}))
e.exports=r},H8j4:function(e,t,o){var n=o("QkVE")
function i(e,t){var o=n(this,e),i=o.size
o.set(e,t)
this.size+=o.size==i?0:1
return this}e.exports=i},Hvzi:function(e,t){function o(e){var t=this.has(e)&&delete this.__data__[e]
this.size-=t?1:0
return t}e.exports=o},I01J:function(e,t,o){var n=o("44Ds")
var i=500
function s(e){var t=n(e,(function(e){o.size===i&&o.clear()
return e}))
var o=t.cache
return t}e.exports=s},JHgL:function(e,t,o){var n=o("QkVE")
function i(e){return n(this,e).get(e)}e.exports=i},JSQU:function(e,t,o){var n=o("YESw")
var i="__lodash_hash_undefined__"
function s(e,t){var o=this.__data__
this.size+=this.has(e)?0:1
o[e]=n&&void 0===t?i:t
return this}e.exports=s},KIYd:function(e,t,o){"use strict"
var n=o("HGxv")
var i=o("ouhR")
var s=o.n(i)
var r=o("Y/W1")
var l=o.n(r)
var a=o("mX+G")
var d=o.n(a)
o("ESjL")
var c,u=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var o in t)m.call(t,o)&&(e[o]=t[o])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},m={}.hasOwnProperty
c=Object(n["useScope"])("dialog")
t["a"]=function(e){p(t,e)
function t(){this.cancel=u(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=l.a.extend({},this.defaultOptions(),{buttons:[{text:c.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:c.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},l.a.result(this,"dialogOptions"))
var t
this.dialog=s()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
s()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(d.a.View)},KMkd:function(e,t){function o(){this.__data__=[]
this.size=0}e.exports=o},NKxu:function(e,t,o){var n=o("lSCD"),i=o("E2jh"),s=o("GoyQ"),r=o("3Fdi")
var l=/[\\^$.*+?()[\]{}|]/g
var a=/^\[object .+?Constructor\]$/
var d=Function.prototype,c=Object.prototype
var u=d.toString
var p=c.hasOwnProperty
var m=RegExp("^"+u.call(p).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
function _(e){if(!s(e)||i(e))return false
var t=n(e)?m:a
return t.test(r(e))}e.exports=_},Npjl:function(e,t){function o(e,t){return null==e?void 0:e[t]}e.exports=o},Ophv:function(e,t,o){"use strict"
var n=o("Vovh")
var i=o("Y/W1")
var s=o.n(i)
var r=function(e,t){for(var o in t)l.call(t,o)&&(e[o]=t[o])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},l={}.hasOwnProperty
t["a"]=function(e){r(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.publishClass="publish-icon-publish"
t.prototype.publishedClass="publish-icon-published"
t.prototype.unpublishClass="publish-icon-unpublish"
t.prototype.tagName="span"
t.prototype.className="publish-icon"
t.optionProperty("title")
t.optionProperty("publishText")
t.optionProperty("unpublishText")
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.events=s.a.extend({},n["a"].prototype.events,this.events)}
t.prototype.events={keyclick:"click"}
return t}(n["a"])},QJn8:function(e,t,o){"use strict"
o.d(t,"a",(function(){return s}))
var n=o("ouhR")
var i=o.n(n)
o("XbwQ")
function s(){return i()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=i()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return i()(t).html()}catch(e){}}})}},QkVE:function(e,t,o){var n=o("EpBk")
function i(e,t){var o=e.__data__
return n(t)?o["string"==typeof t?"string":"hash"]:o.map}e.exports=i},R7Yz:function(e,t,o){"use strict"
o.d(t,"b",(function(){return i}))
o.d(t,"a",(function(){return s}))
o.d(t,"c",(function(){return l}))
const n="LtiDeepLinkingResponse"
function i(e,t){return!!(e.origin===t.DEEP_LINKING_POST_MESSAGE_ORIGIN&&e.data&&e.data.subject===n)}const s=e=>{window.removeEventListener("message",r)
window.addEventListener("message",r(e))}
const r=e=>async t=>{if(!i(t,ENV))return
await e(t)}
const l=()=>{window.location.reload()}},SYfm:function(e,t,o){"use strict"
var n=o("HGxv")
var i=o("ouhR")
var s=o.n(i)
var r=o("mX+G")
var l=o.n(r)
var a=o("gI0r")
o("Dhso")
var d,c=function(e,t){for(var o in t)u.call(t,o)&&(e[o]=t[o])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},u={}.hasOwnProperty
d=Object(n["useScope"])("LockButton")
var p=function(e){c(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.lockedClass="btn-locked"
t.prototype.unlockedClass="btn-unlocked"
t.prototype.disabledClass="disabled"
t.optionProperty("lockedText")
t.optionProperty("unlockedText",t.optionProperty("course_id",t.optionProperty("content_id")))
t.optionProperty("content_type")
t.prototype.tagName="button"
t.prototype.className="btn"
t.prototype.events={click:"click",hover:"hover",focus:"focus",blur:"blur"}
t.prototype.els={i:"$icon",".lock-text":"$text"}
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.disabled=!this.isMasterCourseMasterContent()
this.disabledClass=this.disabled?"disabled":""
this.lockedText=this.lockedText||d.t("Locked. Click to unlock.")
return this.unlockedText=this.unlockedText||d.t("Unlocked. Click to lock.")}
t.prototype.setElement=function(){t.__super__.setElement.apply(this,arguments)
return this.$el.attr("data-tooltip","")}
t.prototype.hover=function(e){var t
t=e.type
if(this.disabled)return
if("mouseenter"===t)return this.isLocked()?this.renderWillUnlock():this.renderWillLock()
if("mouseleave"===t)return this.isLocked()?this.renderLocked():this.renderUnlocked()}
t.prototype.focus=function(){return this.focusblur()}
t.prototype.blur=function(){return this.focusblur()}
t.prototype.focusblur=function(){if(this.disabled)return
return this.isLocked()?this.renderLocked():this.renderUnlocked()}
t.prototype.click=function(e){e.preventDefault()
e.stopPropagation()
if(this.disabled)return
return this.isLocked()?this.unlock():this.lock()}
t.prototype.setFocusToElement=function(){return this.$el.focus()}
t.prototype.lock=function(e){this.renderLocking()
return this.setLockState(true)}
t.prototype.unlock=function(e){this.renderUnlocking()
return this.setLockState(false)}
t.prototype.setLockState=function(e){return s.a.ajaxJSON("/api/v1/courses/"+this.course_id+"/blueprint_templates/default/restrict_item","PUT",{content_type:this.content_type,content_id:this.content_id,restricted:e},(t=this,function(o){t.model.set("restricted_by_master_course",e)
t.trigger(e?"lock":"unlock")
t.render()
t.setFocusToElement()
t.closeTooltip()
return null}),function(e){return function(t){return e.setFocusToElement()}}(this))
var t}
t.prototype.isLocked=function(){return this.model.get("restricted_by_master_course")}
t.prototype.isMasterCourseMasterContent=function(){return!!this.model.get("is_master_course_master_content")}
t.prototype.isMasterCourseChildContent=function(){return!!this.model.get("is_master_course_child_content")}
t.prototype.isMasterCourseContent=function(){return this.isMasterCourseMasterContent()||this.isMasterCourseChildContent()}
t.prototype.reset=function(){this.$el.removeClass(this.lockedClass+" "+this.unlockedClass+" "+this.disabledClass)
this.$icon.removeClass("icon-lock icon-unlock icon-unlocked")
this.$el.removeAttr("aria-label")
return this.closeTooltip()}
t.prototype.closeTooltip=function(){return s()(".ui-tooltip").remove()}
t.prototype.render=function(){if(!this.isMasterCourseContent())return
this.$el.attr("role","button")
this.disabled||this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="lock-text screenreader-only"></span>')
this.cacheEls()
return this.isLocked()?this.renderLocked():this.renderUnlocked()}
t.prototype.renderLocked=function(){return this.renderState({hint:d.t("Locked"),label:this.lockedText,buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
t.prototype.renderWillUnlock=function(){return this.renderState({hint:d.t("Unlock"),label:this.lockedText,buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
t.prototype.renderUnlocking=function(){return this.renderState({hint:d.t("Unlocking..."),buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
t.prototype.renderUnlocked=function(){return this.renderState({hint:d.t("Unlocked"),label:this.unlockedText,buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
t.prototype.renderWillLock=function(){return this.renderState({hint:d.t("Lock"),label:this.unlockedText,buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
t.prototype.renderLocking=function(){return this.renderState({hint:d.t("Locking..."),buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
t.prototype.renderState=function(e){this.reset()
this.$el.addClass(e.buttonClass)
this.disabled?this.$el.attr("aria-disabled",true):this.$el.attr("aria-pressed",e.buttonClass===this.lockedClass)
this.$icon.attr("class",e.iconClass)
this.$text.html(""+Object(a["a"])(e.label||e.hint))
return this.$el.attr("title",e.hint)}
return t}(l.a.View)
var m=function(e,t){for(var o in t)_.call(t,o)&&(e[o]=t[o])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},_={}.hasOwnProperty
t["a"]=function(e){m(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.lockClass="lock-icon-lock"
t.prototype.lockedClass="lock-icon-locked"
t.prototype.unlockClass="lock-icon-unlock"
t.prototype.tagName="span"
t.prototype.className="lock-icon"
t.optionProperty("lockText")
t.optionProperty("unlockText")
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.events=Object.assign({},p.prototype.events,this.events)}
t.prototype.events={keyclick:"click"}
return t}(p)},SfRM:function(e,t,o){var n=o("YESw")
function i(){this.__data__=n?n(null):{}
this.size=0}e.exports=i},TnsN:function(e,t,o){"use strict"
var n=o("ouhR")
var i=o.n(n)
var s=o("mX+G")
var r=o.n(s)
var l=o("Y/W1")
var a=o.n(l)
var d,c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var o in t)p.call(t,o)&&(e[o]=t[o])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},p={}.hasOwnProperty,m=[].slice,_=[].indexOf||function(e){for(var t=0,o=this.length;t<o;t++)if(t in this&&this[t]===e)return t
return-1}
d=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){u(t,e)
function t(){this._setStateAfterFetch=c(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var o,n,s,r
null==e&&(e={})
e=a.a.clone(e)
this.loadedAll=false
n="fetching"+d(e.page)+"Page"
this[n]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(s=this.urls)?s[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
r=null
e.dataFilter=(l=this,function(t){l[n]=false
l._setStateAfterFetch(r,e)
return t})
var l
o=e.dfd||i.a.Deferred()
r=t.__super__.fetch.call(this,e).done(function(t){return function(n,i,s){var r
t.trigger("fetch",t,n,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,n,e);(null!=(r=t.urls)?r.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(m.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:o})})):o.resolve(n,i,s)}}(this))
o.abort=r.abort
o.success=o.done
o.error=o.fail
return o}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var o,n,i,s,r,l,a,d,c,u,p,m,h,f
null==this._urlCache&&(this._urlCache=[])
f=(l=t.url,_.call(this._urlCache,l)<0)
f||this._urlCache.push(t.url)
n=!this.atLeastOnePageFetched
p=n||("next"===(a=t.page)||"bottom"===a)&&f
m=n||("prev"===(d=t.page)||"top"===d)&&f
s=this.urls
this.urls=this._parsePageLinks(e)
p&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=s.bottom:delete this.urls.bottom
m&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=s.top:delete this.urls.top
h=null!=(c=this.urls.first)?c:this.urls.next
if(null!=h){r=parseInt(h.match(this.perPageRegex)[1],10);(null!=(o=null!=this.options?this.options:this.options={}).params?o.params:o.params={}).per_page=r}this.urls.last&&(i=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(i[1],10));(null!=(u=this.urls)?u.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,o
t=null!=(o=e.getResponseHeader("link"))?o.split(","):void 0
null==t&&(t=[])
return a.a.reduce(t,(n=this,function(e,t){var o,i
o=t.match(n.nameRegex)[1]
i=t.match(n.linkRegex)[1]
e[o]=i
return e}),{})
var n}
return t}(r.a.Collection)},TvTI:function(e,t,o){"use strict"
var n=o("ouhR")
var i=o.n(n)
var s=o("gI0r")
o("8JEM")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(o,n)=>{t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let n=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const r=this.find("."+t)
var o=e.avoid||""
r.each((function(){const r=i()(this)
if(r.length>0&&0===r.closest(o).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){r.html(i.a.raw(e.data[t].toString()))
if(r.hasClass("user_content")){n=true
r.removeClass("enhanced")
r.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==r[0].tagName.toUpperCase())r.val(e.data[t])
else try{const o=e.data[t].toString()
r.html(Object(s["a"])(o))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,o,n,s=i()(this)
for(const r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
const l=e.hrefValues[r]
if(t=s.attr("href")){const o=i.a.replaceTags(t,l,encodeURIComponent(e.data[l]))
const n=s.text()===s.html()?s.text():null
if(t!==o){s.attr("href",o)
n&&s.text(n)}}(o=s.attr("rel"))&&s.attr("rel",i.a.replaceTags(o,l,e.data[l]));(n=s.attr("name"))&&s.attr("name",i.a.replaceTags(n,l,e.data[l]))}}))
n&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,o={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const s=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=i.a.trim(s.text())
"&nbsp;"===s.html()&&(n="")
1===n.length&&160===n.charCodeAt(0)&&(n="")
o[e]=n})}if(e.dataValues)for(t in e.dataValues){var n=this.data(e.dataValues[t])
n&&(o[e.dataValues[t]]=n)}if(e.htmlValues)for(t in e.htmlValues){const s=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=null
n=s.hasClass("user_content")&&s.data("unenhanced_content_html")?s.data("unenhanced_content_html"):i.a.trim(s.html())
o[e.htmlValues[t]]=n}return o}
i.a.fn.getTemplateValue=function(e,t){const o=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(o)[e]}},Xi7e:function(e,t,o){var n=o("KMkd"),i=o("adU4"),s=o("tMB7"),r=o("+6XX"),l=o("Z8oC")
function a(e){var t=-1,o=null==e?0:e.length
this.clear()
while(++t<o){var n=e[t]
this.set(n[0],n[1])}}a.prototype.clear=n
a.prototype["delete"]=i
a.prototype.get=s
a.prototype.has=r
a.prototype.set=l
e.exports=a},YESw:function(e,t,o){var n=o("Cwc5")
var i=n(Object,"create")
e.exports=i},Z0cm:function(e,t){var o=Array.isArray
e.exports=o},Z6JD:function(e,t,o){"use strict"
o.d(t,"b",(function(){return m}))
o.d(t,"a",(function(){return v}))
var n=o("HGxv")
const i=Object(n["useScope"])("cyoe_assignment_sidebar_grading_types")
const s={points:{get label(){return i.t("points")},key:"points"},percent:{get label(){return i.t("percent")},key:"percent"},letter_grade:{get label(){return i.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return i.t("GPA scale")},key:"gpa_scale"},other:{get label(){return i.t("other")},key:"other"}}
var r=s
var l=o("FdVj")
const a=Object(n["useScope"])("cyoe_assignment_sidebar_score")
const d=e=>{const t=l["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const c=e=>!!e&&!!e.grading_scheme
const u=e=>{const t=e?e.grading_type:r.percent.key
if((t===r.letter_grade.key||t===r.gpa_scale.key)&&!c(e))return r.percent.key
return t}
const p=(e,t)=>{const o=u(t)
return o===r.points.key?h(e,t):o===r.letter_grade.key||o===r.gpa_scale.key?f(e,t):g(e)}
const m=(e,t,o)=>{e||(e=o?"1":"0")
return _(p(e,t),t)}
const _=(e,t)=>{const o=u(t)
return o===r.points.key?a.t("%{score} pts",{score:a.n(e,{precision:2,strip_insignificant_zeros:true})}):o===r.letter_grade.key||o===r.gpa_scale.key?e:a.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const h=(e,t)=>{if(!d(e))return e
if(0===e)return"0"
const o=l["a"].parse(e)
const n=Number(t.points_possible)||100
return parseFloat((o*n).toFixed(2))}
const f=(e,t)=>{if(""===e)return""
const o=l["a"].parse(e)
const n={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const i=l["a"].parse(t.grading_scheme[e])
if(i<=o&&i>n.score||0===i&&i>o){n.score=i
n.letter=e}}return n.letter?n.letter:o}
const g=e=>{if(!d(e))return e
return Math.floor(100*e)}
const v=(e,t)=>{if("string"===typeof e&&t.grading_type!==r.letter_grade.key&&t.grading_type!==r.gpa_scale.key){const o=l["a"].parse(e.replace(/%$/,""))
if(!isNaN(o))return _(o,t)}return e}},Z8oC:function(e,t,o){var n=o("y1pI")
function i(e,t){var o=this.__data__,i=n(o,e)
if(i<0){++this.size
o.push([e,t])}else o[i][1]=t
return this}e.exports=i},ZWtO:function(e,t,o){var n=o("4uTw"),i=o("9Nap")
function s(e,t){t=n(t,e)
var o=0,s=t.length
while(null!=e&&o<s)e=e[i(t[o++])]
return o&&o==s?e:void 0}e.exports=s},aaDL:function(e,t,o){"use strict"
o.d(t,"a",(function(){return f}))
o.d(t,"b",(function(){return g}))
var n=o("RtDj")
var i=o("q1tI")
var s=o.n(i)
o("17x9")
var r=o("HGxv")
var l
const a=e=>s.a.createElement("span",e,l||(l=Object(n["a"])("svg",{width:"15px",height:"57px",viewBox:"0 0 15 57",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},void 0,Object(n["a"])("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},void 0,Object(n["a"])("g",{id:"Alt-Move-Module-To-02",transform:"translate(-1174.000000, -193.000000)",fillRule:"nonzero",fill:"#A5AFB5"},void 0,Object(n["a"])("g",{id:"Group",transform:"translate(1174.000000, 193.000000)"},void 0,Object(n["a"])("path",{d:"M2.08984375,50.4040286 L2.08984375,2.140625 L14.2460937,2.140625 L14.2460937,0.140625 L0.08984375,0.140625 L0.08984375,52.4040286 L12.3117575,52.4040286 L12.3117575,50.4040286 L2.08984375,50.4040286 Z M8.75061079,46.8029894 C8.34904169,46.401618 7.70214858,46.397441 7.29950809,46.7998832 L7.29950809,46.7998832 C6.8996553,47.1995392 6.89963974,47.8474939 7.30261575,48.2502716 L11.1577205,52.1034784 C11.5592896,52.5048499 12.2061828,52.5090268 12.6088232,52.1065846 L12.6088232,52.1065846 C13.008676,51.7069286 13.0086916,51.0589739 12.6057156,50.6561963 L8.75061079,46.8029894 L8.75061079,46.8029894 Z M8.75061079,56.1970106 C8.34904169,56.598382 7.70214858,56.602559 7.29950809,56.2001168 L7.29950809,56.2001168 C6.8996553,55.8004608 6.89963974,55.1525061 7.30261575,54.7497284 L11.1577205,50.8965216 C11.5592896,50.4951501 12.2061828,50.4909732 12.6088232,50.8934154 L12.6088232,50.8934154 C13.008676,51.2930714 13.0086916,51.9410261 12.6057156,52.3438037 L8.75061079,56.1970106 L8.75061079,56.1970106 Z",id:"connector"})))))))
var d=a
var c=o("ZbPE")
var u=o("sTNg")
var p=o("n12J")
var m=o("6SzX")
var _=o("E/5I")
o("/J96")
const h=Object(r["useScope"])("selectPosition")
f.defaultProps={options:[],className:"",selectOneDefault:false,testId:null}
function f({label:e,onChange:t,options:o,className:i,selectOneDefault:s,testId:r}){return Object(n["a"])(p["a"],{margin:"medium 0",display:"block",className:i},void 0,Object(n["a"])(u["a"],{id:"move-select-form",label:Object(n["a"])(m["a"],{},void 0,e)},void 0,Object(n["a"])("select",{"data-testid":r,onChange:t,className:"move-select-form",style:{margin:"0",width:"100%"}},void 0,s&&Object(n["a"])("option",{},void 0,h.t("Select one")),o)))}g.defaultProps={selectedPosition:{type:"absolute"},selectPosition:()=>{},selectSibling:()=>{}}
function g({items:e,siblings:t,selectedPosition:o,selectPosition:i,selectSibling:s}){const r=!!(o&&"relative"===o.type)
function l(){const o=t.filter(t=>{var o
return t.id!==(null===(o=e[0])||void 0===o?void 0:o.id)})
return Object(n["a"])(f,{label:h.t("Item Select"),className:"move-select__sibling",onChange:s,options:o.map((e,t)=>Object(n["a"])("option",{value:t},e.id,e.title)),selectOneDefault:false,testId:"select-sibling"})}function a(){const t=1===e.length?h.t('Place "%{title}"',{title:e[0].title}):h.t("Place")
return Object(n["a"])(c["a"],{weight:"bold"},void 0,t)}return Object(n["a"])("div",{},void 0,a(),Object(n["a"])(f,{label:h.t("Position Select"),className:"move-select__position",onChange:i,options:Object.keys(_["a"]).map(e=>Object(n["a"])("option",{value:e},e,_["a"][e].label)),selectOneDefault:false,testId:"select-position"}),r?Object(n["a"])("div",{},void 0,Object(n["a"])(d,{"aria-hidden":true,style:{position:"absolute",transform:"translate(-15px, -35px)"}}),l(e)):null)}},adU4:function(e,t,o){var n=o("y1pI")
var i=Array.prototype
var s=i.splice
function r(e){var t=this.__data__,o=n(t,e)
if(o<0)return false
var i=t.length-1
o==i?t.pop():s.call(t,o,1);--this.size
return true}e.exports=r},d61b:function(e,t,o){"use strict"
o.d(t,"a",(function(){return S}))
var n=o("RtDj")
var i=o("q1tI")
var s=o.n(i)
o("17x9")
var r=o("HGxv")
var l=o("BrAc")
var a=o("hlSo")
var d=o("QYKH")
function c(e,t){return Promise.all([e,t]).then(([e,t])=>e.concat(t))}function u(e){return Promise.resolve(e.data.map(e=>new d["a"](e)))}function p(e){return l["a"].get(e).then(e=>{var t,o
const n=null===(t=Object(a["a"])(null===(o=e.headers)||void 0===o?void 0:o.link))||void 0===t?void 0:t.next
return n?c(u(e),p(n)):u(e)})}function m(e){return p(`/api/v1/folders/${e}/files?only[]=names`)}function _(e){return l["a"].get(`/api/v1/courses/${e}/folders/root`).then(({data:e})=>e)}var h=o("uloQ")
var f=o("UT5+")
var g=o("agq5")
var v=o("whu9")
var x=o("ZbPE")
var b=o("vavB")
var y=o("e2r+")
var k=o("MAjw")
var C=o("7lHU")
const w=Object(r["useScope"])("modules")
class S extends s.a.Component{constructor(e){super(e)
this.showAlert=()=>{Object(h["b"])({type:"error",message:w.t("Unable to set up drag and drop for modules")})}
this.handleDragEnter=()=>{this.setState({hightlightUpload:true})}
this.handleDragLeave=()=>{this.setState({hightlightUpload:false})}
this.handleDrop=e=>{const{moduleId:t,contextModules:o}=this.props
const{folder:n}=this.state
this.setInteractionOnAll(false)
b["a"].prototype.onUploadPosted=e=>{this.addFile(e)
if(o){const n=new Event("addFileToModule")
n.moduleId=t
n.attachment=e
o.dispatchEvent(n)}}
k["a"].setUploadOptions({alwaysRename:false,alwaysUploadZips:true})
this.setState({hightlightUpload:false,isUploading:true},()=>{k["a"].setFolder(n)
k["a"].setOptionsFromFiles(e,true)})}
this.handleEmptyUpload=()=>{this.setState({isUploading:false})
this.setInteractionOnAll(true)}
this.renameFileMessage=e=>w.t('A file named "%{name}" already exists. Do you want to replace the existing file?',{name:e})
this.lockFileMessage=e=>w.t('A locked file named "%{name}" already exists. Please enter a new name.',{name:e})
this.handleUploadChange=e=>{0===e&&this.setInteractionOnAll(true)
this.setState({isUploading:e>0})}
this.state={hightlightUpload:false,isUploading:false,folder:null,contextType:null,contextId:null,interaction:true}}componentDidMount(){Object.keys(S.folderState).length>0&&this.setFolderState(S.folderState)
0===S.activeDrops.size&&this.fetchRootFolder()
S.activeDrops.add(this)}fetchRootFolder(){return _(this.props.courseId).then(e=>m(e.id).then(t=>{e.files=t
S.folderState={contextId:e.context_id,contextType:e.context_type,folder:e}
S.activeDrops.forEach(e=>{e.setFolderState(S.folderState)})}).catch(this.showAlert)).catch(this.showAlert)}addFile(e){S.folderState.folder.files=[...S.folderState.folder.files,new d["a"](e)]
S.activeDrops.forEach(e=>{e.setFolderState(S.folderState)})}componentWillUnmount(){S.activeDrops.delete(this)}setFolderState(e){this.setState(e)}renderHero(e){const{hightlightUpload:t}=this.state
return Object(n["a"])(v["a"],{size:e,color:t?"brand":"primary"})}renderBillboard(){const{folder:e}=this.state
return Object(n["a"])(g["a"],{heading:e?w.t("Drop files here to add to module"):w.t("Loading..."),headingLevel:"h4",hero:e=>this.renderHero(e),message:Object(n["a"])(x["a"],{size:"small",color:"brand"},void 0,e?w.t("or choose files"):"")})}setInteractionOnAll(e){S.activeDrops.forEach(t=>t.setInteraction(e))}setInteraction(e){this.setState({interaction:e})}renderFileDrop(){const{interaction:e,folder:t}=this.state
return Object(n["a"])(f["a"],{shouldAllowMultiple:true,renderLabel:this.renderBillboard(),onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,interaction:e&&t?"enabled":"disabled"})}renderUploading(){const{folder:e,contextId:t,contextType:o}=this.state
return s.a.createElement(s.a.Fragment,null,Object(n["a"])(C["a"],{visible:false,currentFolder:e,contextId:t,contextType:o,allowSkip:true,alwaysUploadZips:true,onEmptyOrClose:this.handleEmptyUpload,onRenameFileMessage:this.renameFileMessage,onLockFileMessage:this.lockFileMessage}),Object(n["a"])(y["a"],{onUploadChange:this.handleUploadChange}))}render(){const{isUploading:e}=this.state
return e?this.renderUploading():this.renderFileDrop()}}S.defaultProps={contextModules:null}
S.folderState={}
S.activeDrops=new Set},dDTa:function(e,t,o){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},dt0z:function(e,t,o){var n=o("zoYe")
function i(e){return null==e?"":n(e)}e.exports=i},e4Nc:function(e,t,o){var n=o("fGT3"),i=o("k+1r"),s=o("JHgL"),r=o("pSRY"),l=o("H8j4")
function a(e){var t=-1,o=null==e?0:e.length
this.clear()
while(++t<o){var n=e[t]
this.set(n[0],n[1])}}a.prototype.clear=n
a.prototype["delete"]=i
a.prototype.get=s
a.prototype.has=r
a.prototype.set=l
e.exports=a},eUgh:function(e,t){function o(e,t){var o=-1,n=null==e?0:e.length,i=Array(n)
while(++o<n)i[o]=t(e[o],o,e)
return i}e.exports=o},ebwN:function(e,t,o){var n=o("Cwc5"),i=o("Kz5y")
var s=n(i,"Map")
e.exports=s},ekgI:function(e,t,o){var n=o("YESw")
var i=Object.prototype
var s=i.hasOwnProperty
function r(e){var t=this.__data__
return n?void 0!==t[e]:s.call(t,e)}e.exports=r},"ep+9":function(e,t,o){"use strict"
o.d(t,"b",(function(){return S}))
o.d(t,"a",(function(){return O}))
o.d(t,"c",(function(){return I}))
var n=o("q1tI")
var i=o.n(n)
var s=o("i8i4")
var r=o.n(s)
var l=o("RtDj")
var a=o("HGxv")
var d=o("BrAc")
o("17x9")
var c=o("Ci/e")
var u=o("msMH")
var p=o("n12J")
var m=o("Mmr1")
var _=o("uloQ")
o("/J96")
var h=o("E/5I")
var f=o("aaDL")
var g=o("Xx/m")
var v=o("ZbPE")
var x
const b=Object(a["useScope"])("move_select")
class y extends i.a.Component{constructor(e){super(e)
this.selectGroup=e=>{this.setState({selectedGroup:this.props.moveOptions.groups.find(t=>t.id===e.target.value)||null})}
this.selectPosition=e=>{this.setState({selectedPosition:h["a"][e.target.value]||null})}
this.selectSibling=e=>{this.setState({selectedSibling:""===e.target.value?0:Number(e.target.value)})}
this.submitSelection=()=>{const{items:e,moveOptions:t}=this.props
const{selectedGroup:o,selectedPosition:n,selectedSibling:i}=this.state
let s=e.map(({id:e})=>e)
if(n){const r=o?o.items:t.siblings
s=n.apply({items:e.map(({id:e})=>e),order:r.map(({id:e})=>e),relativeTo:i})}this.props.onSelect({groupId:t.groups?o.id:null,itemIds:e.map(({id:e})=>e),order:s})}
this.state={selectedGroup:this.props.moveOptions.groups&&this.getFilteredGroups()[0],selectedPosition:h["a"].first,selectedSibling:0}}hasSelectedPosition(){const{selectedSibling:e,selectedPosition:t}=this.state
const o=t&&"absolute"===t.type
return!!t&&(o||null!==e)}getFilteredGroups(){const{moveOptions:e,items:t}=this.props
let{groups:o}=e
e.excludeCurrent&&t[0].groupId&&(o=o.filter(e=>e.id!==t[0].groupId))
return o}isDoneSelecting(){const{selectedGroup:e}=this.state
return this.props.moveOptions.groups?e&&e.items&&e.items.length?this.hasSelectedPosition():!!e:this.hasSelectedPosition()}renderSelectGroup(){const{selectedGroup:e,selectedPosition:t}=this.state
const{items:o}=this.props
const n=!!(e&&e.items&&e.items.length)
const i=this.getFilteredGroups(this.props)
return Object(l["a"])("div",{},void 0,Object(l["a"])(f["a"],{label:b.t("Group Select"),className:"move-select__group",onChange:this.selectGroup,options:i.map(e=>Object(l["a"])("option",{value:e.id},e.id,e.title)),selectOneDefault:false}),n?Object(l["a"])(f["b"],{items:o,siblings:e.items,selectedPosition:t,selectPosition:this.selectPosition,selectSibling:this.selectSibling}):null)}render(){const{groups:e,siblings:t}=this.props.moveOptions
const{items:o}=this.props
const{selectedPosition:n}=this.state
return Object(l["a"])("div",{className:"move-select"},void 0,this.props.moveOptions.groupsLabel&&Object(l["a"])(v["a"],{weight:"bold"},void 0,this.props.moveOptions.groupsLabel),e?this.renderSelectGroup():Object(l["a"])(f["b"],{items:o,siblings:t,selectedPosition:n,selectPosition:this.selectPosition,selectSibling:this.selectSibling}),Object(l["a"])(p["a"],{textAlign:"end",display:"block"},void 0,x||(x=Object(l["a"])("hr",{"aria-hidden":"true"})),Object(l["a"])(g["a"],{id:"move-item-tray-cancel-button",onClick:this.props.onClose,margin:"0 x-small 0 0"},void 0,b.t("Cancel")),Object(l["a"])(g["a"],{id:"move-item-tray-submit-button",disabled:!this.isDoneSelecting(),type:"submit",color:"primary",onClick:this.submitSelection,margin:"0 x-small 0 0"},void 0,b.t("Move"))))}}const k=Object(a["useScope"])("move_item_tray")
class C extends i.a.Component{constructor(...e){super(...e)
this.state={open:true}
this.onExited=()=>{setTimeout(()=>{const e=this.props.focusOnExit(this.props.items[0])
e&&e.focus()})
this.props.onExited&&this.props.onExited()}
this.onMoveSelect=({order:e,itemId:t,groupId:o,itemIds:n})=>{const i=this.props.formatSaveUrl({itemId:t,groupId:o})
const s=i?d["a"].post(i,this.props.formatSaveData(e)):Promise.resolve({data:e})
s.then(e=>{this.props.onMoveSuccess({data:e.data,groupId:o,itemId:t,itemIds:n})
this.close()}).catch(Object(_["c"])(k.t("Move Item Failed")))}
this.open=()=>{this.setState({open:true})}
this.close=()=>{this.setState({open:false})}}render(){return Object(l["a"])(c["a"],{label:this.props.title,open:this.state.open,onDismiss:this.close,onExited:this.onExited,placement:"end",shouldContainFocus:true},void 0,Object(l["a"])(m["a"],{placement:"start",onClick:this.close,screenReaderLabel:k.t("close move tray")}),Object(l["a"])(u["a"],{margin:"small xx-large",level:"h4",as:"h2"},void 0,this.props.title),Object(l["a"])(p["a"],{display:"block",padding:"medium medium large"},void 0,Object(l["a"])(y,{items:this.props.items,moveOptions:this.props.moveOptions,onSelect:this.onMoveSelect,onClose:this.close})))}}C.defaultProps={get title(){return k.t("Move To")},focusOnExit:()=>null,formatSaveUrl:()=>null,formatSaveData:e=>({order:e.join(",")}),onExited:()=>{},onMoveSuccess:()=>{}}
const w="move_item_tray"
function S(e,t=document.body){let o=document.getElementById(w)
if(!o){o=document.createElement("div")
o.setAttribute("id",w)
t.appendChild(o)}r.a.render(i.a.createElement(C,Object.assign({},e,{ref:e=>e&&e.open()})),o)}const O={collectionToItems:(e,t=(e=>e.models))=>t(e).map(e=>({id:e.attributes.id,title:e.attributes.name||e.attributes.title})),collectionToGroups(e,t,o=(()=>true)){return e.models.filter(o).map(e=>({id:e.attributes.id,title:e.attributes.name||e.attributes.title,items:this.collectionToItems(t(e))}))},reorderInCollection(e,t,o=t.collection){e.forEach((e,t)=>{const n=o.get(e)
n&&n.set("position",t+1)})
o.sort()
o.reset(o.models)},reorderAcrossCollections(e,t,o,n){let i=o.collection.view.parentCollection.get(t).get(n.model)
if(i&&i!==o.collection){o.collection.remove(o)
i.add(o)
n.parent&&o.set(n.parent,t)}else i=o.collection
this.reorderInCollection(e,o,i)},reorderAllItemsIntoNewCollection(e,t,o,n){let i=o.collection.get(t).get(n.model)
if(i&&i!==o.collection){const e=o.get(n.model).models.slice()
e.forEach(e=>{o.get(n.model).remove(e)
i.add(e)})
n.parent&&o.set(n.parent,t)}else i=o.collection
this.reorderInCollection(e,o,i)}}
function I(e,t,o=(e=>"#"+e)){const n=e.reduce((e,n)=>{const i=t.querySelector(o(n))
if(null==i)return e
e[n]=i
t.removeChild(i)
return e},{})
e.forEach(e=>{null!=n[e]&&t.appendChild(n[e])})}},fGT3:function(e,t,o){var n=o("4kuk"),i=o("Xi7e"),s=o("ebwN")
function r(){this.size=0
this.__data__={hash:new n,map:new(s||i),string:new n}}e.exports=r},hlSo:function(e,t,o){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const o=e[0].substring(1,e[0].length-1)
let n=e[1].split("=")
n=n[1]
n=n.substring(1,n.length-1)
t[n]=o})
return t}},"k+1r":function(e,t,o){var n=o("QkVE")
function i(e){var t=n(this,e)["delete"](e)
this.size-=t?1:0
return t}e.exports=i},lBOK:function(e,t,o){"use strict"
var n=o("ouhR")
var i=o.n(n)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const o=this.filter(":first")
let n
if("hide"===e||"remove"===e){o.children(".loading_image").remove()
n=o.data("loading_images")||[]
n.forEach(e=>{e&&e.remove()})
o.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){o.children(".loading_image").remove()
n=o.data("loading_images")||[]
const e=n.pop()
e&&e.remove()
o.data("loading_images",n)
return this}if("register_image"===e&&3===arguments.length){i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
let s=i.a.fn.loadingImg.image_files.normal
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(s=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let r=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)r=o.outerHeight()
else if("middle"===e.vertical)r=o.outerHeight()/2-s.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}let l=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)l=o.outerWidth()-s.width
else if("right!"===e.horizontal){l="ltr"===t?o.outerWidth()+5:-5-(s.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)l=o.outerWidth()/2-s.width/2
else{l=parseInt(e.horizontal,10)
isNaN(l)&&(l=0)}const a=o.zIndex()+1
const d=i()(document.createElement("div")).addClass("loading_image_holder")
const c=i()(document.createElement("img")).attr("src",s.url)
d.append(c)
n=o.data("loading_images")||[]
n.push(d)
o.data("loading_images",n)
if(o.css("position")&&"static"!==o.css("position")){d.css({zIndex:a,position:"absolute",top:r,left:l})
o.append(d)}else{const t=o.offset()
let n=t.top,s=t.left
e.vertical&&(n+=r)
e.horizontal&&(s+=l)
d.css({zIndex:a,position:"absolute",top:n,left:s})
i()("body").append(d)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg},lSCD:function(e,t,o){var n=o("NykK"),i=o("GoyQ")
var s="[object AsyncFunction]",r="[object Function]",l="[object GeneratorFunction]",a="[object Proxy]"
function d(e){if(!i(e))return false
var t=n(e)
return t==r||t==l||t==s||t==a}e.exports=d},ljhN:function(e,t){function o(e,t){return e===t||e!==e&&t!==t}e.exports=o},mwIZ:function(e,t,o){var n=o("ZWtO")
function i(e,t,o){var i=null==e?void 0:n(e,t)
return void 0===i?o:i}e.exports=i},pSRY:function(e,t,o){var n=o("QkVE")
function i(e){return n(this,e).has(e)}e.exports=i},qJBq:function(e,t){(function(){var t,o,n
n=[]
t={}
e.exports=o=function(e,o,i){var s,r,l,a,d,c,u,p,m
null==i&&(i=true)
if("string"===typeof o){if(2!==o.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
m=o[0],s=o[1]}else if(Array.isArray(o)){if(2!==o.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
m=o[0],s=o[1]}else{m=(null!=o?o.thousands:void 0)||(null!=o?o.group:void 0)||t.thousands
s=(null!=o?o.decimal:void 0)||t.decimal}u=""+m+s+i
c=n[u]
if(null==c){l=i?3:1
c=n[u]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+m+"\\d{"+l+",3})+)|\\d*))(?:\\"+s+"(\\d*))?\\s*$")}p=e.match(c)
if(!(null!=p&&3===p.length))return NaN
a=p[1].replace(new RegExp("\\"+m,"g"),"")
r=p[2]
d=parseFloat(a+"."+r)
return d}
e.exports.setOptions=function(e){var o,n
for(o in e){n=e[o]
t[o]=n}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(n){return o(n,e,t)}}
e.exports.factoryReset()}).call(this)},tMB7:function(e,t,o){var n=o("y1pI")
function i(e){var t=this.__data__,o=n(t,e)
return o<0?void 0:t[o][1]}e.exports=i},u8Dt:function(e,t,o){var n=o("YESw")
var i="__lodash_hash_undefined__"
var s=Object.prototype
var r=s.hasOwnProperty
function l(e){var t=this.__data__
if(n){var o=t[e]
return o===i?void 0:o}return r.call(t,e)?t[e]:void 0}e.exports=l},y1pI:function(e,t,o){var n=o("ljhN")
function i(e,t){var o=e.length
while(o--)if(n(e[o][0],t))return o
return-1}e.exports=i},zoYe:function(e,t,o){var n=o("nmnc"),i=o("eUgh"),s=o("Z0cm"),r=o("/9aa")
var l=1/0
var a=n?n.prototype:void 0,d=a?a.toString:void 0
function c(e){if("string"==typeof e)return e
if(s(e))return i(e,c)+""
if(r(e))return d?d.call(e):""
var t=e+""
return"0"==t&&1/e==-l?"-0":t}e.exports=c}}])

//# sourceMappingURL=92-c-df04f01eb4.js.map