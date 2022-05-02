(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4334],{kfGi:function(e,t,s){"use strict"
s.r(t)
s.d(t,"ToDoSidebar",(function(){return P}))
var a=s("q1tI")
var i=s.n(a)
var r=s("/MKj")
var n=s("17x9")
var o=s("f0Wu")
var l=s.n(o)
var c=s("lxh4")
var m=s("ZbPE")
var d=s("uSnb")
var p=s("n12J")
var u=s("Xx/m")
var h=s("ukBn")
var b=s("R49/")
var v=s("mgUk")
var I=s("Mmr1")
var f=s("8ruJ")
var O=s("Q0Ww")
var g=s("Un/D")
var E=s("dOsU")
var D=s("Kimu")
var L=s("+Gzo")
var T=s("Oak0")
var j=s("VTBJ")
var C=s("1OyB")
var _=s("vuIU")
var k=s("Ji7U")
var w=s("LK+K")
var y=s("hPGw")
var N=i.a.createElement("path",{d:"M1783.68,1468.23529 L1468.23529,1783.68 L1468.23529,1468.23529 L1783.68,1468.23529 Z M1242.35294,1129.41176 L1242.35294,1242.35294 L338.823529,1242.35294 L338.823529,1129.41176 L1242.35294,1129.41176 Z M1581.28941,790.588235 L1581.28941,903.529412 L338.823529,903.529412 L338.823529,790.588235 L1581.28941,790.588235 Z M621.176471,0 C714.578824,0 790.588235,76.0094118 790.588235,169.411765 C790.588235,195.501176 784.150588,219.896471 773.647059,242.032941 L773.647059,242.032941 L999.981176,468.254118 L920.018824,548.216471 L693.797647,321.882353 C671.661176,332.385882 647.265882,338.823529 621.176471,338.823529 C527.774118,338.823529 451.764706,262.814118 451.764706,169.411765 C451.764706,76.0094118 527.774118,0 621.176471,0 Z M1016.47059,225.882353 L1016.47059,338.823529 L1807.05882,338.823529 L1807.05882,1355.29412 L1355.29412,1355.29412 L1355.29412,1807.05882 L112.941176,1807.05882 L112.941176,338.823529 L338.823529,338.823529 L338.823529,225.882353 L5.68434189e-14,225.882353 L5.68434189e-14,1920 L1421.47765,1920 C1466.65412,1920 1509.23294,1902.38118 1541.19529,1870.41882 L1870.41882,1541.30824 C1902.38118,1509.23294 1920,1466.65412 1920,1421.47765 L1920,225.882353 L1016.47059,225.882353 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var R=function(e){Object(k["a"])(s,e)
var t=Object(w["a"])(s)
function s(){Object(C["a"])(this,s)
return t.apply(this,arguments)}Object(_["a"])(s,[{key:"render",value:function(){return i.a.createElement(y["a"],Object.assign({},this.props,{name:"IconNote",viewBox:"0 0 1920 1920",bidirectional:true}),N)}}])
s.displayName="IconNoteLine"
return s}(a["Component"])
R.glyphName="note"
R.variant="Line"
R.propTypes=Object(j["a"])({},y["a"].propTypes)
var S=s("q7ZJ")
const x=e=>{switch(e){case"Assignment":return i.a.createElement(f["a"],{label:Object(h["a"])("Assignment"),className:"ToDoSidebarItem__Icon"})
case"Quiz":return i.a.createElement(O["a"],{label:Object(h["a"])("Quiz"),className:"ToDoSidebarItem__Icon"})
case"Discussion":return i.a.createElement(g["a"],{label:Object(h["a"])("Discussion"),className:"ToDoSidebarItem__Icon"})
case"Announcement":return i.a.createElement(E["a"],{label:Object(h["a"])("Announcement"),className:"ToDoSidebarItem__Icon"})
case"Calendar Event":return i.a.createElement(D["a"],{label:Object(h["a"])("Calendar Event"),className:"ToDoSidebarItem__Icon"})
case"Page":return i.a.createElement(L["a"],{label:Object(h["a"])("Page"),className:"ToDoSidebarItem__Icon"})
case"Peer Review":return i.a.createElement(T["a"],{label:Object(h["a"])("Peer Review"),className:"ToDoSidebarItem__Icon"})
default:return i.a.createElement(R,{label:Object(h["a"])("To Do"),className:"ToDoSidebarItem__Icon"})}}
const Z=(e,t)=>{const s=e.find(e=>e.id===t)
return s?s.shortName:""}
class z extends i.a.Component{constructor(...e){super(...e)
this.handleClick=()=>{this.props.handleDismissClick(this.props.item)}
this.getInformationRow=(e,t)=>{const s=[]
t&&s.push(i.a.createElement(c["a"].Item,{key:"points"},Object(h["a"])("{numPoints} points",{numPoints:t})))
s.push(i.a.createElement(c["a"].Item,{key:"date"},Object(S["c"])(e,this.props.timeZone)))
return s}}focus(){const e=this.linkRef||this.buttonRef
e&&e.focus()}itemTitle(){if("Peer Review"===this.props.item.type)return Object(h["a"])("Peer Review for {itemTitle}",{itemTitle:this.props.item.title})
return this.props.item.title}render(){const e=i.a.createElement(m["a"],{size:"small",lineHeight:"fit"},this.itemTitle())
const t=this.props.item.html_url?i.a.createElement(u["a"],{variant:"link",theme:{mediumPaddingHorizontal:"0",mediumHeight:"normal"},buttonRef:e=>{this.linkRef=e},href:this.props.item.html_url},e):i.a.createElement(m["a"],null,e)
return i.a.createElement("div",{className:"ToDoSidebarItem"},x(this.props.item.type),i.a.createElement("div",{className:"ToDoSidebarItem__Info"},i.a.createElement("div",{className:"ToDoSidebarItem__Title"},t),i.a.createElement(m["a"],{color:"secondary",size:"small",weight:"bold",lineHeight:"fit"},Z(this.props.courses,this.props.item.course_id)),i.a.createElement(c["a"],{variant:"inline",delimiter:"pipe",size:"small"},this.getInformationRow(this.props.item.date,this.props.item.points))),!this.props.isObserving&&i.a.createElement("div",{className:"ToDoSidebarItem__Close"},i.a.createElement(I["a"],{variant:"icon",size:"small",onClick:this.handleClick,buttonRef:e=>{this.buttonRef=e}},Object(h["a"])("Dismiss {itemTitle}",{itemTitle:this.props.item.title}))))}}z.propTypes={item:Object(n["shape"])({title:n["string"],html_url:n["string"],type:n["string"],course_id:n["string"],date:n["object"],points:n["number"]}),courses:Object(n["arrayOf"])(n["object"]).isRequired,handleDismissClick:n["func"].isRequired,timeZone:n["string"],isObserving:n["bool"]}
class P extends a["Component"]{constructor(e){super(e)
this.dismissedItemIndex=null
this.titleFocus=null
this.state={visibleToDos:this.getVisibleItems(e.items)}}componentDidMount(){this.props.sidebarLoadInitialItems(l.a.tz(this.props.timeZone).startOf("day"),this.props.forCourse)}UNSAFE_componentWillReceiveProps(e){const t=this.getVisibleItems(e.items)
this.setState({visibleToDos:t})}componentDidUpdate(){if(null!=this.dismissedItemIndex){const e=this.dismissedItemIndex-1
this.dismissedItemIndex=null
e>=0?this.todoItemComponents[e].focus():this.titleFocus.focus()}}getVisibleItems(e){const t=e=>{if(!e)return false
return!e.completed}
return e.filter(t).slice(0,7)}handleDismissClick(e,t){this.dismissedItemIndex=e
this.props.sidebarCompleteItem(t).catch(()=>{this.dismissedItemIndex=null})}renderShowAll(){if(this.props.changeDashboardView&&this.state.visibleToDos.length>0)return i.a.createElement(p["a"],{as:"div",textAlign:"center"},i.a.createElement(u["a"],{variant:"link",onClick:()=>this.props.changeDashboardView("planner")},Object(h["a"])("Show All")))
return null}renderItems(){this.todoItemComponents=[]
if(0===this.state.visibleToDos.length)return i.a.createElement(m["a"],{size:"small"},Object(h["a"])("Nothing for now"))
return i.a.createElement(c["a"],{id:"planner-todosidebar-item-list",variant:"unstyled"},this.state.visibleToDos.map((e,t)=>i.a.createElement(c["a"].Item,{key:e.uniqueId},i.a.createElement(z,{ref:e=>{this.todoItemComponents[t]=e},item:e,courses:this.props.courses,handleDismissClick:()=>this.handleDismissClick(t,e),locale:this.props.locale,timeZone:this.props.timeZone,isObserving:this.props.isObserving}))))}render(){if(!this.props.loaded)return i.a.createElement("div",{"data-testid":"ToDoSidebar"},i.a.createElement("h2",{className:"todo-list-header"},Object(h["a"])("To Do")),i.a.createElement(p["a"],{as:"div",textAlign:"center"},i.a.createElement(d["a"],{renderTitle:()=>Object(h["a"])("To Do Items Loading"),size:"small"})))
return i.a.createElement("div",{"data-testid":"ToDoSidebar"},i.a.createElement("h2",{className:"todo-list-header"},i.a.createElement("span",{tabIndex:"-1",ref:e=>{this.titleFocus=e}},Object(h["a"])("To Do"))),this.renderItems(),this.renderShowAll())}}P.propTypes={sidebarLoadInitialItems:n["func"].isRequired,sidebarCompleteItem:n["func"].isRequired,items:Object(n["arrayOf"])(n["object"]).isRequired,loaded:n["bool"],courses:Object(n["arrayOf"])(n["object"]).isRequired,timeZone:n["string"],locale:n["string"],changeDashboardView:n["func"],forCourse:n["string"],isObserving:n["bool"]}
P.defaultProps={loaded:false,timeZone:l.a.tz.guess(),locale:"en",forCourse:void 0}
const A=e=>({courses:e.courses,items:e.sidebar.items,loaded:e.sidebar.loaded,isObserving:!!Object(b["f"])(e)})
const q={sidebarLoadInitialItems:v["A"],sidebarCompleteItem:v["z"]}
t["default"]=Object(r["b"])(A,q)(P)}}])

//# sourceMappingURL=4334-c-6098ff0bc7.js.map