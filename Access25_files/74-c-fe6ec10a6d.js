(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[74],{"+w22":function(e,t,n){"use strict"
n.r(t)
n.d(t,"enhanceUserContent",(function(){return I}))
n.d(t,"formatTimeAgoTitle",(function(){return O}))
n.d(t,"formatTimeAgoDate",(function(){return N}))
n.d(t,"default",(function(){return Q}))
var i=n("Fxmq")
var a=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("Y/W1")
var l=n.n(s)
n("3H9/")
var c=n("gI0r")
var d=n("qqwe")
var u=n("Ce78J")
var h=n("i8i4")
var m=n.n(h)
var f=n("q1tI")
var g=n.n(f)
var p=n("8t0o")
n("ik22")
n("ESjL")
function _(e){e=(e||"").split(":")[0]
const t=e.split("."),n=t.length
return(n>1?[t[n-2],t[n-1]]:t).join("")}const b=_(window.location.hostname)
r.a.expr[":"].external=function(e){const t=r()(e).attr("href")
return!!(t&&t.length&&!t.match(/^(mailto\:|javascript\:)/)&&e.hostname&&_(e.hostname)!=b)}
window.equella={ready(e){r()(document).triggerHandler("equella_ready",e)},cancel(){r()(document).triggerHandler("equella_cancel")}}
r()(document).bind("equella_ready",(function(e,t){r()("#equella_dialog").triggerHandler("equella_ready",t)})).bind("equella_cancel",(function(){r()("#equella_dialog").dialog("close")}))
window.external_tool_dialog={ready(e){const t=jQuery.Event("selection")
t.contentItems=e
r()("#resource_selection_dialog:visible").triggerHandler(t)
r()("#homework_selection_dialog:visible").triggerHandler(t)},cancel(){r()("#external_tool_button_dialog").dialog("close")
r()("#resource_selection_dialog").dialog("close")
r()("#homework_selection_dialog:visible").dialog("close")}}
window.jsonFlickrApi=function(e){r()("#instructure_image_search").triggerHandler("search_results",e)}
n("oa+I")
n("dhbk")
n("CsJK")
var v=n("M+ds")
n("7AEQ")
n("Dhso")
n("8JEM")
n("aq8L")
n("qAtv")
n("lBOK")
n("r2Yr")
n("TvTI")
n("897F")
n("bbn0")
n("wX3B")
n("XKWA")
n("gNnW")
n("bgJ8")
n("UEsX")
const w=Object(a["useScope"])("instructure_js")
let y=0
function x(){return"preview_"+ ++y}function k(){const e=r()(this)
const t=e.attr("href")
const n=r.a.youTubeID(t||"")
if(n&&!e.hasClass("inline_disabled")){const i=r()(`\n      <a\n        href="${Object(c["a"])(t)}"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/${Object(c["a"])(n)}/2.jpg)"\n          alt="${Object(c["a"])(e.data("preview-alt")||"")}"\n        />\n      </a>\n    `)
i.click(Object(d["a"])((function(){const e=r()(`\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/${Object(c["a"])(n)}?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ${Object(c["a"])(w.t("links.minimize_youtube_video","Minimize Video"))}\n          </a>\n        </span>\n      `)
e.find(".hide_youtube_embed_link").click(Object(d["a"])(()=>{e.remove()
i.show()
Object(v["a"])("hide_embedded_content","hide_you_tube")}))
r()(this).after(e).hide()})))
Object(v["a"])("show_embedded_content","show_you_tube")
e.addClass("youtubed").after(i)}}Object(v["a"])("Route",window.location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/")
const E=".dialog, .draggable, .resizable, .sortable, .tabs"
function C(e){try{return new URL(e)}catch(e){}}function T(){const e=document.createElement("div")
const t=g.a.createElement(p["a"],{elementRef:e=>{r()(".user_content a:has(img)").each((function(){r()(this).addClass(e.className)}))}},g.a.createElement("img"))
m.a.render(t,e)}function I(e){if(ENV.SKIP_ENHANCING_USER_CONTENT)return
r()("#content")
const t=e===I.ANY_VISIBILITY?"":":visible"
r()(".user_content:not(.enhanced)"+t).addClass("unenhanced")
r()(".user_content.unenhanced"+t).each((function(){const e=r()(this)
e.find("img").each((e,t)=>{/hidden=1$/.test(t.getAttribute("src"))&&t.setAttribute("alt",w.t("This image is currently unavailable"))})
e.data("unenhanced_content_html",e.html())})).find(".enhanceable_content").show().filter(E).ifExists(e=>{const t="Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: "+E+".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
console.error(t,e)}).end().filter(".dialog").each((function(){const e=r()(this)
e.hide()
e.closest(".user_content").find("a[href='#"+e.attr("id")+"']").click(t=>{t.preventDefault()
e.dialog()})})).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".tabs").each((function(){r()(this).tabs()})).end().end().find("a:not(.not_external, .external):external").each((function(){const e=Object(c["a"])(w.t("titles.external_link","Links to an external site."))
r()(this).not(":has(img)").addClass("external").html("<span>"+r()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="'+r.a.raw(e)+'"/>').append('<span class="screenreader-only">&nbsp;('+r.a.raw(e)+")</span>")})).end()
T()
r()("a.instructure_file_link, a.instructure_scribd_file").each((function(){const e=r()(this)
const t=C(e[0].href)
if(!t)return
const n=t.pathname.match(/(?:\/(courses|groups|users)\/(\d+))?\/files\/(\d+)/)
if(!n)return
let i,a
if(r.a.trim(e.text())){const n=this.textContent
const o=r()("<span class='instructure_file_holder link_holder instructure_file_link_holder'/>")
const s=t.searchParams
s.delete("wrap")
s.append("download_frd","1")
const l=`${t.origin}${t.pathname.replace(/(?:\/(download|preview))?$/,"/download")}?${s}`
i=r()(`<a class="file_download_btn" role="button" download style="margin-inline-start: 5px; text-decoration: none;" href="${Object(c["a"])(l)}">\n            <img style="width:16px; height:16px" src="/images/svg-icons/svg_icon_download.svg" alt="" role="presentation"/>\n            <span class="screenreader-only">\n              ${Object(c["a"])(w.t("Download %{filename}",{filename:n}))}\n            </span>\n          </a>`)
e.hasClass("instructure_scribd_file")&&(e.hasClass("inline_disabled")?e.addClass("preview_in_overlay"):e.addClass("file_preview_link"))
e.removeClass("instructure_file_link")
e.removeClass("instructure_scribd_file").before(o).appendTo(o)
o.append(a)
o.append(i)}}))
r()(".instructure_file_link_holder").find("a.file_preview_link, a.scribd_file_preview_link").each((function(){const e=r()(this)
if(e.siblings(".preview_container").length)return
const t=x()
e.attr("aria-expanded","false")
e.attr("aria-controls",t)
const n=r()('<div role="region" class="preview_container" />').attr("id",t).css("display","none")
e.parent().append(n)
e.hasClass("auto_open")&&e.click()}))
r()(".user_content.unenhanced a,.user_content.unenhanced+div.answers a").find("img.media_comment_thumbnail").each((function(){r()(this).closest("a").addClass("instructure_inline_media_comment")})).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",true).end().not(".youtubed").each(k)
r()(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced")
setTimeout(()=>{r()(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)
document.querySelectorAll('.user_content iframe[sandbox="allow-scripts allow-forms allow-same-origin"]').forEach(e=>{e.removeAttribute("sandbox")
const t=e.src
e.src=t})}I.ANY_VISIBILITY={}
function O(e){const t=r.a.fudgeDateForProfileTimezone(e)
return t.toString("MMM d, yyyy h:mmtt")}function N(e){"string"===typeof e&&(e=Date.parse(e))
const t=new Date-e
if(t<864e5){if(t<36e5){if(t<6e4)return w.t("#time.less_than_a_minute_ago","less than a minute ago")
{const e=parseInt(t/6e4,10)
return w.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:e})}}{const e=parseInt(t/36e5,10)
return w.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:e})}}return O(e)}function S(){if(window._earlyClick){document.removeEventListener("click",window._earlyClick)
window._earlyClick.clicks&&setTimeout((function(){r.a.each(l.a.uniq(window._earlyClick.clicks),(function(){const e=r.a.Event("click")
e.preventDefault()
r()(this).trigger(e)}))}),1)}}function A(){const e=r()("#breadcrumbs")
if(e.length){let t
let n=false
const i=40.5
let a
const o=()=>{a&&(window.cancelIdleCallback||window.cancelAnimationFrame)(a)
a=(window.requestIdleCallback||window.requestAnimationFrame)(()=>{let a=500
t=t||e.find(".ellipsible")
t.ifExists(()=>{t.css("maxWidth","")
for(let o=0;e.height()>i&&o<20;o++){if(!n){n=true
t.addClass("ellipsis")}t.css("maxWidth",a-=20)}})})}
o()
r()(window).resize(o)}}function j(){i["a"].prototype.bindOpenKeys.call({$el:r()("#keyboard_navigation")})}function R(){r()("#switched_role_type").ifExists((function(){const e=r()(this).attr("class")
const t=r()("<img/>")
let n=null
switch(r()(this).data("role")){case"TeacherEnrollment":n=w.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.")
break
case"StudentEnrollment":n=w.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")
break
case"TaEnrollment":n=w.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.")
break
case"ObserverEnrollment":n=w.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.")
break
case"DesignerEnrollment":n=w.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.")
break
default:n=w.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}t.attr("src","/images/warning.png").attr("title",n).css({paddingRight:2,width:12,height:12})
r()("#crumb_"+e).find("a").prepend(t)}))}function z(){r()("a.show_quoted_text_link").live("click",(function(e){const t=r()(this).parents(".quoted_text_holder").children(".quoted_text")
if(t.length>0){e.preventDefault()
t.show()
r()(this).hide()}}))}function q(){r()("a.equella_content_link").live("click",(function(e){e.preventDefault()
let t=r()("#equella_preview_dialog")
if(!t.length){t=r()("<div/>")
t.attr("id","equella_preview_dialog").hide()
t.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+Object(c["a"])(w.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>")
t.find("h2").text(r()(this).attr("title")||r()(this).text()||w.t("titles.equella_content_preview","Equella Content Preview"))
const e=t.find("iframe")
setTimeout(()=>{e.css("background","#fff")},2500)
r()("body").append(t)
t.dialog({autoOpen:false,width:"auto",resizable:false,title:w.t("titles.equella_content_preview","Equella Content Preview"),close(){t.find("iframe").attr("src","about:blank")}})}t.find(".original_link").attr("href",r()(this).attr("href"))
t.dialog("close").dialog("open")
t.find("iframe").attr("src",r()(this).attr("href"))}))}function L(){r()(".dialog_opener[aria-controls]:not(.user_content *)").live("click",(function(e){const t=this
r()("#"+r()(this).attr("aria-controls")).ifExists(n=>{e.preventDefault()
if(!n.data("dialog")){n.dialog(r.a.extend({autoOpen:false,modal:true},r()(t).data("dialogOpts")))
n.fixDialogButtons()}n.dialog("open")})}))}function D(){r()("a.file_preview_link, a.scribd_file_preview_link").live("click",(function(e){if(e.ctrlKey||e.altKey||e.metaKey||e.shiftKey)return
e.preventDefault()
const t=r()(this)
if("true"===t.attr("aria-expanded")){t.parent().find(".hide_file_preview_link").click()
return}t.loadingImage({image_size:"small",horizontal:"right!"})
t.attr("aria-expanded","true")
r.a.ajaxJSON(t.attr("href").replace(/\/(download|preview)/,"").replace(/wrap=1&?/,"").replace(/[?&]$/,""),"GET",{},n=>{const i=n&&n.attachment
t.loadingImage("remove")
if(i&&(r.a.isPreviewable(i.content_type,"google")||i.canvadoc_session_url)){const n=r()(`[id="${t.attr("aria-controls")}"]`)
n.css("display","block").loadDocPreview({canvadoc_session_url:i.canvadoc_session_url,mimeType:i.content_type,public_url:i.public_url,attachment_preview_processing:"pending_upload"===i.workflow_state||"processing"===i.workflow_state})
const a=r()('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+Object(c["a"])(w.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(e=>{e.preventDefault()
t.attr("aria-expanded","false")
t.show()
t.focus()
n.html("").css("display","none")
Object(v["a"])("hide_embedded_content","hide_file_preview")})
n.prepend(a)
Object.prototype.hasOwnProperty.call(e,"originalEvent")&&a.focus()
Object(v["a"])("show_embedded_content","show_file_preview")}},()=>{t.loadingImage("remove").hide()})}))
r()("a.preview_in_overlay").live("click",e=>{var t,i
let a=null
e.target.href?a=e.target:null!==(t=e.currentTarget)&&void 0!==t&&t.href&&(a=e.currentTarget)
const o=null===(i=a)||void 0===i?void 0:i.href.match(/\/files\/(\d+)/)
if(o){if(e.ctrlKey||e.altKey||e.metaKey||e.shiftKey)return
e.preventDefault()
const t=new URL(a.href)
const i=null===t||void 0===t?void 0:t.searchParams.get("verifier")
const s=o[1]
Promise.all([n.e(6),n.e(25),n.e(47),n.e(126),n.e(4133)]).then(n.bind(null,"xTOM")).then(e=>{e.showFilePreview(s,i)}).catch(e=>{r.a.flashError(w.t("Something went wrong loading the file previewer."))})}})}function H(){let e
r.a.subscribe("userContent/change",()=>{clearTimeout(e)
e=setTimeout(I,50)})
r()(document).bind("user_content_change",I)}function B(){r()(()=>{setInterval(I,15e3)
setTimeout(I,15)})}function F(){r()(".show_sub_messages_link").click((function(e){e.preventDefault()
r()(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message")
r()(this).parents(".communication_sub_message").remove()}))}function P(){r()(".communication_message .add_entry_link").click((function(e){e.preventDefault()
const t=r()(this).parents(".communication_message")
const n=t.find(".reply_message").hide()
const i=t.find(".communication_sub_message.blank").clone(true).removeClass("blank")
n.before(i.show())
const a=l.a.uniqueId("textarea_")
i.find("textarea.rich_text").attr("id",a)
r()(document).triggerHandler("richTextStart",r()("#"+a))
i.find("textarea:first").focus().select()}))}function M(){r()(document).bind("richTextStart",(e,t)=>{if(!t||0===t.length)return
t=r()(t)
if(!t||0===t.length)return
u["a"].loadNewEditor(t,{focus:true})}).bind("richTextEnd",(e,t)=>{if(!t||0===t.length)return
t=r()(t)
if(!t||0===t.length)return
u["a"].destroyRCE(t)})}function V(){r()(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit(e){r()(this).find("button").attr("disabled",true)
r()(this).find(".submit_button").text(w.t("status.posting_message","Posting Message..."))
r()(this).loadingImage()},success(e){r()(this).loadingImage("remove")
const t=r()(this).parents(".communication_sub_message")
if(r()(this).hasClass("submission_comment_form")){const n=r()(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id
let i=null
for(const t in e){const a=e[t].submission
a.user_id==n&&(i=a)}if(i){const e=i.submission_comments[i.submission_comments.length-1].submission_comment
e.post_date=r.a.datetimeString(e.created_at)
e.message=e.formatted_body||e.comment
t.fillTemplateData({data:e,htmlValues:["message"]})}}else{const n=e.discussion_entry
n.post_date=r.a.datetimeString(n.created_at)
t.find(".content > .message_html").val(n.message)
t.fillTemplateData({data:n,htmlValues:["message"]})}t.find(".message").show()
t.find(".user_content").removeClass("enhanced")
t.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show()
r()(document).triggerHandler("richTextEnd",r()(this).find("textarea.rich_text"))
r()(document).triggerHandler("user_content_change")
r()(this).remove()
window.location.href.match(/dashboard/)&&Object(v["a"])("dashboard_comment","create")},error(e){r()(this).loadingImage("remove")
r()(this).find("button").attr("disabled",false)
r()(this).find(".submit_button").text(w.t("errors.posting_message_failed","Post Failed, Try Again"))
r()(this).formErrors(e)}})}function W(){r()(".communication_sub_message form .cancel_button").click((function(){const e=r()(this).parents(".communication_sub_message")
const t=r()(this).parents(".communication_message")
r()(document).triggerHandler("richTextEnd",e.find("textarea.rich_text"))
e.remove()
t.find(".reply_message").show()}))}function U(){r()(".communication_message,.communication_sub_message").bind("focusin mouseenter",(function(){r()(this).addClass("communication_message_hover")})).bind("focusout mouseleave",(function(){r()(this).removeClass("communication_message_hover")}))}function $(){let e=[]
function t(){e=[...document.querySelectorAll(".time_ago_date")].filter(r.a.expr.filters.visible)
n()}function n(){const i=e.shift()
if(i){const e=r()(i),t=e.data("parsed_date")||Date.parse(e.data("timestamp")||"")
if(t){e.data("timestamp",t.toISOString())
e.data("parsed_date",t)
e.text(N(t))
e.attr("title",O(t))}setTimeout(n,1)}else setTimeout(t,6e4)}setTimeout(t,100)}function J(){const e=r()("#sequence_footer")
if(e.length){const t=r()(e[0])
Promise.all([n.e(14),n.e(189)]).then(n.bind(null,"fY8A")).then(()=>{t.moduleSequenceFooter({courseID:t.attr("data-course-id"),assetType:t.attr("data-asset-type"),assetID:t.attr("data-asset-id")})})}}function K(){r()("#right-side").delegate(".more_link","click",(function(e){const t=r()(this)
const n=t.parents("ul").children(":hidden").show()
t.closest("li").remove()
0===e.screenX&&n.first().find(":tabbable:first").focus()
return false}))}function G(){r()("#right-side").on("click",".disable-todo-item-link",(function(e){e.preventDefault()
const t=r()(this).parents("li, div.topic_message").last()
const n=r()(this).closest(".to-do-list > li").prev()
const i=n.find(".disable-todo-item-link").length&&n.find(".disable-todo-item-link")||r()(".todo-list-header")
const a=r()(this).data("api-href")
const o=r()(this).data("flash-message")
function s(e){t.confirmDelete({url:e,noMessage:true,success(){o&&r.a.flashMessage(o)
r()(this).slideUp((function(){r()(this).remove()
i.focus()}))}})}s(a)}))}function Y(){setTimeout((function(){const e=document.getElementById("content")
if(!e)return
const t=e.querySelectorAll(`a[href*="//"]:not([href*="${window.location.hostname}"])`)
for(let e=0;e<t.length;e++){const n=r()(t[e])
if(n.hasClass("external"))continue
const i=n.not(".open_in_a_new_tab").not(":has(img)").not(".not_external").not(".exclude_external_icon")
if(i.length){const e=w.t("titles.external_link","Links to an external site.")
const t=r()('<span class="ui-icon ui-icon-extlink ui-icon-inline"/>').attr("title",e)
t.append(r()('<span class="screenreader-only"/>').text(e))
i.addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+n.html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append(t)}}}),100)}function Q(){S()
A()
j()
R()
z()
q()
L()
D()
H()
B()
F()
P()
M()
V()
W()
U()
$()
J()
K()
G()
Y()}},"/oRJ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){const t="about:blank"
try{const n=new URL(e,window.location.origin)
if("javascript:"===n.protocol)return t
return e}catch(e){return t}}},"65NJ":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("w2hD")
a.a.fn.scrollToVisible=function(e){const t={}
const n=a()(e)
if(0===n.length)return
let i=n.offset(),o=n.outerWidth(),r=n.outerHeight(),s=i.top,l=s+r,c=i.left,d=c+o,u="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),m=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{e=a()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){m=a()(window).height()
a()("#wizard_box:visible").length>0&&(m-=a()("#wizard_box:visible").height())
f=a()(window).width()
s-=u
c-=h
l-=u
d-=h}s<0||m<r&&l>m?t.scrollTop=s+u:l>m&&(t.scrollTop=l+u-m+20)
c<0?t.scrollLeft=c+h:d>f&&(t.scrollLeft=d+h-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"897F":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var o=n("Y/W1")
var r=n.n(o)
var s=n("qqwe")
n("ESjL")
a.a.fn.fixDialogButtons=function(){return this.each((function(){const e=a()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=a.a.map(t.toArray(),t=>{const n=a()(t)
let i=n.attr("class")||""
const o=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(s["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(i+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:i,id:o}})
n=r.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},BrAc:function(e,t,n){"use strict"
var i=n("vDqi")
var a=n.n(i)
a.a.defaults.xsrfCookieName="_csrf_token"
a.a.defaults.xsrfHeaderName="X-CSRF-Token"
const o=a.a.defaults.headers.common.Accept
a.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+o
a.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=a.a},Ce78J:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
var o=n("Y/W1")
var r=n.n(o)
var s=n("JiFB")
var l=n("ik22")
function c(e,t,n){const i={...n}
e.forEach(e=>{const a=t[e]
const o=n[e]
Array.isArray(a)&&Array.isArray(o)&&(i[e]=[...new Set(a.concat(o))])})
return i}function d(e,t,n,i,a){const o=new s["a"](a,l["a"],e,t)
const r={...o.defaultConfig()}
return{...r,...c(n.optionsToMerge||[],r,n.tinyOptions)}}var u=d
var h=n("FNQM")
const m={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const f={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const g={wrapEditor(e){const t={...m,...e}
return Object.assign(e,t)},wrapSidebar(e){const t={...f,...e}
return Object.assign(e,t)}}
var p=g
var _=n("eVns")
var b=n("stQK")
var v=n("TiZd")
const w={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const i=this.getTargetTextarea(e)
const a=this.getRenderingTarget(i,t.getRenderingTarget)
const o=this.createRCEProps(i,t)
this.loadRCE(e=>{e.renderIntoDiv(a,o,e=>{e.tinymceOn("init",()=>n(i,p.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([n.e(6),n.e(7),n.e(8),n.e(10),n.e(11),n.e(12),n.e(15),n.e(17),n.e(19),n.e(20),n.e(23),n.e(28),n.e(41),n.e(3744)]).then(n.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(h["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===a()(e).get(0).type?a()(e).get(0):a()(e).find("textarea").get(0),getRenderingTarget(e,t){let n
n="undefined"===typeof t?a()(e).parent().get(0):t(e)
a()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=r.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return r.a.pick(n,t)},createRCEProps(e,t){var n,i
const a=e.offsetWidth
const o=e.offsetHeight||400
o&&(t.tinyOptions={height:o,...t.tinyOptions||{}})
const r=ENV.LOCALE
const s=Object.keys(b["a"]).map(e=>({id:e,label:b["a"][e]})).sort((e,t)=>e.id===r?-1:t.id===r?1:e.label.localeCompare(t.label,r))
const l={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:u.bind(null,a,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(_["a"])(),languages:s,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||l,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(i=window.ENV)||void 0===i?void 0:i.url_for_high_contrast_tinymce_editor_css,use_rce_buttons_and_icons:Object(v["b"])(v["a"].ButtonsAndIcons,window.ENV)}}}
var y=w
var x=n("eodz")
function k(e,t,n){e.css("display","none")
const i=t.onFocus
t.onFocus=(...e)=>{i instanceof Function&&i(...e)}
y.loadOnTarget(e,t,(t,i)=>{const o=A(e)
const r=N(a()(t))
r.data("remoteEditor",i)
o.trigger(x["a"],i)
n&&n(i)})}function E(e){const t=A(e)
const n=t.attr("id")
const i="tinymce-parent-of-"+n
if(t.parent().attr("id")!==i)return t.wrap(`<div id='${i}' style='visibility: hidden'></div>`)}function C(){a()(".mce-resizehandle").attr("aria-hidden",true)}let T=0
function I(){return"random_editor_id_"+T++}function O(e){const t=a()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",I())}function N(e){const t=A(e)
const n=t.attr("id")
if(!n||""==n)return t
const i=a()("#"+n)
if(i.length<=0)return t
return i}const S={preloadRemoteModule:(e=(()=>{}))=>y.preload(e),loadNewEditor(e,t={},n){let i=A(e)
if(i.length<=0)return
O(i)
t=a.a.extend({},t)
const o=e=>{t.focus&&this.activateRCE(i)
n&&n(e)}
i=this.freshNode(i)
if(t.manageParent){delete t.manageParent
E(i)}k(i,t,o)
C()},callOnRCE(e,t,...n){let i=A(e)
i=this.freshNode(i)
return Object(x["d"])(i,t,...n)},destroyRCE(e){let t=A(e)
t=this.freshNode(t)
Object(x["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=A(e)
t=this.freshNode(t)
Object(x["c"])(t)},freshNode:N,ensureID:O,node2jquery:A}
function A(e){return e&&e.length?e:a()(e)}t["a"]=S},CsJK:function(e,t,n){"use strict"
var i=n("ik22")
var a=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
n("Y/W1")
var s=n("gI0r")
n("dhbk")
var l=n("M+ds")
n("8JEM")
n("lBOK")
var c=n("/oRJ")
const d=Object(a["useScope"])("jquery_doc_previews")
const u={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
r.a.isPreviewable=function(e,t){return u[e]&&(!t||!i["a"]["disable"+r.a.capitalize(t)+"Previews"]&&u[e][{scribd:0,google:1}[t]])}
r.a.fn.loadDocPreview=function(e){return this.each((function(){const t=r()(this),n=r.a.extend({width:"100%",height:"400px"},t.data(),e)
function a(e){if(n.attachment_view_inline_ping_url){r.a.ajaxJSON(n.attachment_view_inline_ping_url,"POST",{},()=>{},()=>{})
Object(l["a"])("Doc Previews",e,JSON.stringify(n,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(n.crocodoc_session_url){const e=Object(c["a"])(n.crocodoc_session_url)
var o=r()("<iframe/>",{src:e,width:n.width,height:n.height,allowfullscreen:"1",id:n.id})
o.appendTo(t)
o.load(()=>{a("crocodoc")
r.a.isFunction(n.ready)&&n.ready()})}else if(n.canvadoc_session_url){const e=r()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
e.appendTo(t)
const i=void 0!==n.iframe_min_height?n.iframe_min_height:"800px"
const s=Object(c["a"])(n.canvadoc_session_url)
o=r()("<iframe/>",{src:s,width:n.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":i},id:n.id})
o.appendTo(e)
o.load(()=>{a("canvadocs")
r.a.isFunction(n.ready)&&n.ready()})}else if(!i["a"].disableGooglePreviews&&(!n.mimetype||r.a.isPreviewable(n.mimetype,"google"))&&n.attachment_id||n.public_url){const e=function(){const e="//docs.google.com/viewer?"+r.a.param({embedded:true,url:n.public_url})
n.ajax_valid&&!n.ajax_valid()||r()('<iframe src="'+Object(s["a"])(e)+'" height="'+n.height+'" width="100%" />').appendTo(t).load(()=>{a("google")
r.a.isFunction(n.ready)&&n.ready()})}
if(n.public_url)e()
else if(n.attachment_id){let i=`/api/v1/files/${n.attachment_id}/public_url.json`
n.submission_id&&(i+="?"+r.a.param({submission_id:n.submission_id}))
if(n.verifier)i+=`${n.submission_id?"&":"?"}verifier=${n.verifier}`
else{const e=window.location.search.match(/verifier=([^&]+)(?:&|$)/)
const t=e&&e[1]
t&&(i+=`${n.submission_id?"&":"?"}verifier=${t}`)}t.loadingImage()
r.a.ajaxJSON(i,"GET",{},i=>{t.loadingImage("remove")
if(i&&i.public_url){r.a.extend(n,i)
e()}})}}else n.attachment_preview_processing?t.html("<p>"+Object(s["a"])(d.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(s["a"])(d.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>")}))}},ErZx:function(e,t,n){"use strict"
const i={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=i},FNQM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("RtDj")
var a=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
n("gI0r")
const s=Object(a["useScope"])("ExternalToolsPlugin")
const l=ENV.MAX_MRU_LTI_TOOLS||5
var c={buttonConfig(e,t){const n={title:e.name,classes:"widget btn instructure_external_tool_button"}
n.id=e.id
n.onAction=()=>{t.execCommand("instructureExternalButton"+e.id)
this.updateMRUList(e.id)
this.showHideButtons(t)}
n.description=e.description
n.favorite=e.favorite
n.image=e.icon_url
return n},showHideButtons(e){const t=s.t("Apps")
const n=e.$(e.editorContainer.querySelector(`.tox-tbtn--select[aria-label="${t}"]`))
const i=e.$(e.editorContainer.querySelector(`.tox-tbtn[aria-label="${t}"]`))
n.attr("aria-hidden","false")
i.attr("aria-hidden","true")},updateMRUList(e){let t
try{var n
t=JSON.parse((null===(n=window.localStorage)||void 0===n?void 0:n.getItem("ltimru"))||"[]")}catch(e){console.log("Found bad LTI MRU data",e.message)}finally{Array.isArray(t)||(t=[])}try{if(!t.includes(e)){var i
t.unshift(e)
t.splice(l,t.length)
null===(i=window.localStorage)||void 0===i||i.setItem("ltimru",JSON.stringify(t))}}catch(e){console.log("Cannot save LTI MRU list",e.message)}}}
var d=n("dDTa")
n("q1tI")
var u=n("i8i4")
var h=n.n(u)
const m=Object(a["useScope"])("ExternalToolsPlugin")
const f={init(e,t,a){if(!a||!a.editorButtons||!a.editorButtons.length)return
let o={open:(...e)=>setTimeout(()=>o.open(...e),50)}
Promise.all([n.e(6),n.e(7),n.e(8),n.e(11),n.e(18),n.e(24),n.e(44),n.e(4143)]).then(n.bind(null,"PrO8")).then(({default:t})=>{const n=document.createElement("div")
document.body.appendChild(n)
h.a.render(Object(i["a"])(t,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(d["a"])(),resourceSelectionUrl:r()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),n,(function(){o=this}))})
const s=[]
for(let t=0;a.editorButtons&&t<a.editorButtons.length;t++){const n=a.editorButtons[t]
const i=()=>o.open(n)
s.push(c.buttonConfig(n,e))
e.addCommand("instructureExternalButton"+n.id,i)}if(s.length){_(e,s)
b(e,s)
p(e,s)}}}
function g(e,t){if(!t.iconSVG&&t.image){const e=document.createElement("svg")
e.setAttribute("viewBox","0 0 16 16")
e.setAttribute("version","1.1")
e.setAttribute("xmlns","http://www.w3.org/2000/svg")
const n=document.createElement("image")
n.setAttribute("xlink:href",t.image)
n.style.width="100%"
n.style.height="100%"
e.appendChild(n)
t.iconSVG=e.outerHTML
t.icon="lti_tool_"+t.id}t.iconSVG&&e.ui.registry.addIcon(t.icon,t.iconSVG)}function p(e,t){t.length&&e.ui.registry.addNestedMenuItem("lti_tools_menuitem",{text:m.t("Apps"),icon:"lti",getSubmenuItems:()=>v(e,t)})}function _(e,t){t.forEach(t=>{if(!t.favorite)return
g(e,t)
e.ui.registry.addButton("instructure_external_button_"+t.id,{onAction:t.onAction,tooltip:t.title,icon:t.icon,title:t.title})})}function b(e,t){const n=m.t("Apps")
e.ui.registry.addMenuButton("lti_mru_button",{tooltip:n,icon:"lti",fetch(n){n(v(e,t))},onSetup(t){c.showHideButtons(e)}})}function v(e,t){const n=[]
try{const i=JSON.parse(window.localStorage.getItem("ltimru"))
if(i&&Array.isArray(i)&&i.length){const a=t.filter(e=>i.includes(e.id))
a.forEach(t=>{g(e,t)
t.menuItem||(t.menuItem={type:"menuitem",text:t.title,icon:t.icon,onAction:t.onAction})
n.push(t.menuItem)})
n.sort((e,t)=>e.text.localeCompare(t.text))}}catch(e){console.log("Failed building mru menu",e.message)}finally{n.push({type:"menuitem",text:m.t("View All"),onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)}})}return n}var w=f
var y=n("ik22")
var x=n("uloQ")
const k=Object(a["useScope"])("loadEventListeners")
function E(e={}){const t=["equationCB","equellaCB","externalToolCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",({detail:t})=>{Promise.all([n.e(2),n.e(14),n.e(4166)]).then(n.bind(null,"dIBj")).then(({default:n})=>{const i=new n(t.ed)
e.equationCB(i)}).catch(Object(x["c"])(k.t("Something went wrong loading the equation editor")))})
document.addEventListener("tinyRCE/initEquella",t=>{Promise.all([n.e(2),n.e(4282)]).then(n.bind(null,"IOhY")).then(({default:n})=>{n(t.detail.ed)
e.equellaCB()}).catch(Object(x["c"])(k.t("Something went wrong loading Equella")))})
document.addEventListener("tinyRCE/initExternalTools",t=>{w.init(t.detail.ed,t.detail.url,y["a"])
e.externalToolCB()})}},Fxmq:function(e,t,n){"use strict"
var i=n("HGxv")
var a=n("mX+G")
var o=n("ouhR")
var r=n.n(o)
n("ESjL")
var s,l=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
s=Object(i["useScope"])("KeyboardNavDialog")
t["a"]=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.el="#keyboard_navigation"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.bindOpenKeys
return this}
t.prototype.render=function(e){this.$el.html(e)
return this}
t.prototype.bindOpenKeys=function(){var e
e=null
return r()(document).keydown((t=this,function(n){var i
i=191===n.keyCode&&n.shiftKey
if(i&&!r()(n.target).is(":input")&&!ENV.disable_keyboard_shortcuts){n.preventDefault()
if(!t.$el.is(":visible")){e=document.activeElement
return t.$el.dialog({title:s.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",close:function(){r()("li",this).attr("tabindex","")
if(e)return r()(e).focus()}})}t.$el.dialog("close")
if(e)return r()(e).focus()}}))
var t}
return t}(a["View"])},JiFB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("uYtQ")
var a=n("ErZx")
class o{constructor(e,t,n,i){this.baseURL=e.baseURL
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=n
this.idAttribute=i}defaultConfig(){var e
return{...a["a"],body_class:null!==(e=window.ENV.FEATURES)&&void 0!==e&&e.canvas_k6_theme||window.ENV.K5_SUBJECT_COURSE||window.ENV.K5_HOMEROOM_COURSE?"elementary-theme":"default-theme",selector:"#"+this.idAttribute,directionality:Object(i["b"])(),plugins:["instructure_equation"],content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,style_formats:[{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}],init_instance_callback:e=>{$("#tinymce-parent-of-"+e.id).css("visibility","visible")},show_media_upload:!!INST.kalturaSettings&&!INST.kalturaSettings.hide_rte_button}}}},TiZd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
n.d(t,"b",(function(){return a}))
let i;(function(e){e[e["ButtonsAndIcons"]=0]="ButtonsAndIcons"})(i||(i={}))
function a(e,t){switch(e){case i.ButtonsAndIcons:return o(t)
default:return false}}function o(e){var t,n
return!!(e.RICH_CONTENT_CAN_UPLOAD_FILES&&e.RICH_CONTENT_CAN_EDIT_FILES&&null!==(t=window.ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.buttons_and_icons_root_account)}},XKWA:function(e,t,n){const i=n("ouhR")
var a,o,r,s=i({})
i.subscribe=a=function(e,t){if(i.isPlainObject(e))return i.each(e,(function(e,t){a(e,t)}))
function n(){return t.apply(this,Array.prototype.slice.call(arguments,1))}n.guid=t.guid=t.guid||i.guid++
s.bind(e,n)}
i.unsubscribe=o=function(){s.unbind.apply(s,arguments)}
i.publish=r=function(){s.trigger.apply(s,arguments)}
e.exports={subscribe:a,unsubscribe:o,publish:r}},aq8L:function(e,t,n){"use strict"
var i=n("HGxv")
var a=n("ouhR")
var o=n.n(a)
var r=n("gI0r")
var s=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const l=Object(i["useScope"])("instructure_misc_plugins")
o.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(r["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(r["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(n))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const a=function(){if(!i){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(s["a"])()
o.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,a,r)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,n,i,a,r):o.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const r=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=o()(e.message).dialog(o.a.extend({},{modal:true,close:a,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:r,click(){i=true
o()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}a()}
o.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let r=false
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){const e=o.a._checkFragments.fragmentList[t]
e.doc[0]==a[0]&&(r=true)}r||o.a._checkFragments.fragmentList.push({doc:a,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{i&&i.length>0?a.triggerHandler("document_fragment_change",i):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
o.a._checkFragments.fragmentList[t]=n}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const a=this.height()
const r=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:r+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),n=o()(this),i=o()("#wrapper"),a=o()("#main"),r=o()("#not_right_side"),s=o()(window),l=o()(this).add(t.alsoResize)
function c(){l.height(0)
const e=s.height()-(i.offset().top+i.outerHeight())+(a.height()-r.height()),c=Math.max(400,e)
l.height(c)
o.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),n="",i=o()(this),a=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),r=function(){setTimeout(()=>{if(n===(n=i.val()))return
a.text(n)
const o=a.width(),r=o+e.comfortZone>=t?o+e.comfortZone:t,s=i.width(),l=r<s&&r>=t||r>t&&r<e.maxWidth
l&&i.width(r)})}
a.insertAfter(i)
o()(this).bind("keyup keydown blur update change",r)}))
return this}
o.a},dDTa:function(e,t,n){"use strict"
const i=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=i},eVns:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("BrAc")
function a(e){let t=e
let n=null
return e=>{null===n&&(n=i["a"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{n=null
t=e.data.token
return t}))
"function"===typeof e&&n.then(e)
return n}}var o=n("s9Pr")
function r(){var e
if(!ENV.context_asset_string)return null
let[t,n]=Object(o["a"])(ENV.context_asset_string,false)
const i=ENV.current_user_id
const r={contextType:t,contextId:n,userId:i}
const s=ENV.RICH_CONTENT_CAN_UPLOAD_FILES
if(!s||"account"===t){n=i
t="user"}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:r,contextType:t,contextId:n,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:a(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,canvasUrl:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN,features:{buttons_and_icons_cropper:null===(e=ENV.FEATURES)||void 0===e?void 0:e.buttons_and_icons_cropper}}}},lBOK:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
a.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const n=this.filter(":first")
let i
if("hide"===e||"remove"===e){n.children(".loading_image").remove()
i=n.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
n.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){n.children(".loading_image").remove()
i=n.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
n.data("loading_images",i)
return this}if("register_image"===e&&3===arguments.length){a.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=a.a.extend({},a.a.fn.loadingImg.defaults,e)
let o=a.a.fn.loadingImg.image_files.normal
e.image_size&&a.a.fn.loadingImg.image_files[e.image_size]&&(o=a.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let r=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)r=n.outerHeight()
else if("middle"===e.vertical)r=n.outerHeight()/2-o.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}let s=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)s=n.outerWidth()-o.width
else if("right!"===e.horizontal){s="ltr"===t?n.outerWidth()+5:-5-(o.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)s=n.outerWidth()/2-o.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}const l=n.zIndex()+1
const c=a()(document.createElement("div")).addClass("loading_image_holder")
const d=a()(document.createElement("img")).attr("src",o.url)
c.append(d)
i=n.data("loading_images")||[]
i.push(c)
n.data("loading_images",i)
if(n.css("position")&&"static"!==n.css("position")){c.css({zIndex:l,position:"absolute",top:r,left:s})
n.append(c)}else{const t=n.offset()
let i=t.top,o=t.left
e.vertical&&(i+=r)
e.horizontal&&(o+=s)
c.css({zIndex:l,position:"absolute",top:i,left:o})
a()("body").append(c)}return a()(this)}
a.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
a.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
a.a.fn.loadingImage=a.a.fn.loadingImg},stQK:function(e,t,n){"use strict"
var i=n("HGxv")
const a=Object(i["useScope"])("closedCaptionLanguages")
const o={get af(){return a.t("Afrikaans")},get sq(){return a.t("Albanian")},get ar(){return a.t("Arabic")},get be(){return a.t("Belarusian")},get bg(){return a.t("Bulgarian")},get ca(){return a.t("Catalan")},get zh(){return a.t("Chinese")},get hr(){return a.t("Croatian")},get cs(){return a.t("Czech")},get da(){return a.t("Danish")},get nl(){return a.t("Dutch")},get en(){return a.t("English")},get et(){return a.t("Estonian")},get fl(){return a.t("Filipino")},get fi(){return a.t("Finnish")},get fr(){return a.t("French")},get gl(){return a.t("Galician")},get de(){return a.t("German")},get el(){return a.t("Greek")},get ht(){return a.t("Haitian Creole")},get hi(){return a.t("Hindi")},get hu(){return a.t("Hungarian")},get is(){return a.t("Icelandic")},get id(){return a.t("Indonesian")},get ga(){return a.t("Irish")},get it(){return a.t("Italian")},get ja(){return a.t("Japanese")},get ko(){return a.t("Korean")},get lv(){return a.t("Latvian")},get lt(){return a.t("Lithuanian")},get mk(){return a.t("Macedonian")},get ms(){return a.t("Malay")},get mt(){return a.t("Maltese")},get no(){return a.t("Norwegian")},get fa(){return a.t("Persian")},get pl(){return a.t("Polish")},get pt(){return a.t("Portuguese")},get ro(){return a.t("Romanian")},get ru(){return a.t("Russian")},get sr(){return a.t("Serbian")},get sk(){return a.t("Slovak")},get sl(){return a.t("Slovenian")},get es(){return a.t("Spanish")},get sw(){return a.t("Swahili")},get sv(){return a.t("Swedish")},get tl(){return a.t("Tagalog")},get th(){return a.t("Thai")},get tr(){return a.t("Turkish")},get uk(){return a.t("Ukrainian")},get vi(){return a.t("Vietnamese")},get cy(){return a.t("Welsh")},get yi(){return a.t("Yiddish")},get"en-CA"(){return a.t("English (Canada)")},get"en-AU"(){return a.t("English (Australia)")},get"en-GB"(){return a.t("English (United Kingdom)")},get"fr-CA"(){return a.t("French (Canada)")},get he(){return a.t("Hebrew")},get hy(){return a.t("Armenian")},get mi(){return a.t("Māori (New Zealand)")},get nb(){return a.t("Norwegian Bokmål")},get nn(){return a.t("Norwegian Nynorsk")},get"zh-Hans"(){return a.t("Chinese Simplified")},get"zh-Hant"(){return a.t("Chinese Traditional")}}
t["a"]=o}}])

//# sourceMappingURL=74-c-fe6ec10a6d.js.map