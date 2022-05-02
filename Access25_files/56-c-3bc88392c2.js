(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[56],{"+ayY":function(e,n,t){"use strict"
t.d(n,"a",(function(){return p}))
var r=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("hPGw")
var u=d.a.createElement("path",{d:"M960,0 C1490.19336,0 1920,429.80664 1920,960 C1920,1490.19336 1490.19336,1920 960,1920 C429.80664,1920 0,1490.19336 0,960 C0,429.80664 429.80664,0 960,0 Z M960,101.052632 C485.616468,101.052632 101.052632,485.616468 101.052632,960 C101.052632,1434.38353 485.616468,1818.94737 960,1818.94737 C1434.38353,1818.94737 1818.94737,1434.38353 1818.94737,960 C1818.94737,485.616468 1434.38353,101.052632 960,101.052632 Z M950.679927,1322.54386 C870.655911,1322.54386 805.551855,1387.64792 805.551855,1467.67193 C805.551855,1547.69595 870.655911,1612.8 950.679927,1612.8 C1030.70394,1612.8 1095.808,1547.69595 1095.808,1467.67193 C1095.808,1387.64792 1030.70394,1322.54386 950.679927,1322.54386 Z M1143.46512,353.684211 L757.894737,353.684211 L851.795993,1205.0114 L1049.56386,1205.0114 L1143.46512,353.684211 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(s["a"],Object.assign({},this.props,{name:"IconWarning",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconWarningLine"
return t}(c["Component"])
p.glyphName="warning"
p.variant="Line"
p.propTypes=Object(r["a"])({},s["a"].propTypes)},"/TnQ":function(e,n,t){"use strict"
var r=t("ANjH").compose
n.__esModule=true
n.composeWithDevTools=function(){if(0===arguments.length)return
if("object"===typeof arguments[0])return r
return r.apply(null,arguments)}
n.devToolsEnhancer=function(){return function(e){return e}}},"08kA":function(e,n,t){"use strict"
var r=t("s4NR"),a=t("CxY0"),i=t("U6jy")
function o(e){return e&&e.rel}function l(e,n){function t(t){e[t]=i(n,{rel:t})}n.rel.split(/\s+/).forEach(t)
return e}function c(e,n){var t=n.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
t&&(e[t[1]]=t[2])
return e}function d(e){try{var n=e.match(/<?([^>]*)>(.*)/),t=n[1],o=n[2].split(";"),l=a.parse(t),d=r.parse(l.query)
o.shift()
var s=o.reduce(c,{})
s=i(d,s)
s.url=t
return s}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(d).filter(o).reduce(l,{})}},"2zZe":function(e,n,t){"use strict"
t.d(n,"a",(function(){return B}))
var r=t("Ff2n")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("17x9")
var u=t.n(s)
var p=t("cClk")
var g=t("dpqJ")
var h=t("sTNg")
var f=t("UCAh")
var v=t("oXx0")
var b=t("4Awi")
var m=t("E+IV")
var M=t("jtGx")
var O=t("tCl5")
var y=t("BTe1")
var C=t("Oioo")
var _=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return null}}])
t.displayName="Option"
return t}(c["Component"])
_.propTypes={id:u.a.string.isRequired,value:u.a.string.isRequired,isDisabled:u.a.bool,renderBeforeLabel:u.a.oneOfType([u.a.node,u.a.func]),renderAfterLabel:u.a.oneOfType([u.a.node,u.a.func]),children:u.a.string}
_.defaultProps={isDisabled:false,renderBeforeLabel:void 0,renderAfterLabel:void 0,children:null}
var L=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return null}}])
t.displayName="Group"
return t}(c["Component"])
L.propTypes={renderLabel:u.a.oneOfType([u.a.node,u.a.func]).isRequired,children:g["a"].oneOf([_])}
L.defaultProps={children:null}
var k,j,x,w
var B=(k=Object(v["a"])(),k(j=(w=x=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(e){var r
Object(a["a"])(this,t)
r=n.call(this,e)
r._emptyOptionId=Object(y["a"])("Select-EmptyOption")
r.handleRef=function(e){r._select=e}
r.handleBlur=function(e){r.setState({highlightedOptionId:null})
r.props.onBlur(e)}
r.handleShowOptions=function(e){r.setState({isShowingOptions:true})
r.props.onShowOptions(e)}
r.handleHideOptions=function(e){r.setState((function(e){var n=r.getOption("id",e.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:n?n.props.children:""}}))
r.props.onHideOptions(e)}
r.handleHighlightOption=function(e,n){var t=n.id
if(t===r._emptyOptionId)return
var a=r.getOption("id",t)
var i=a.props.children
var o="keydown"===e.type?i:r.state.inputValue
r.setState({highlightedOptionId:t,inputValue:o})}
r.handleSelectOption=function(e,n){var t=n.id
if(t===r._emptyOptionId){r.setState({isShowingOptions:false})
return}var a=r.getOption("id",t)
var i=a&&a.props.value
r.isControlled?r.setState({isShowingOptions:false}):r.setState((function(e){return{isShowingOptions:false,selectedOptionId:t,inputValue:a?a.props.children:e.inputValue}}))
a&&r.props.onChange(e,{value:i,id:t})
r.props.onHideOptions(e)}
var i=r.getInitialOption(e)
r.state={inputValue:i?i.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:i?i.props.id:null}
return r}Object(i["a"])(t,[{key:"focus",value:function(){this._select&&this._select.focus()}},{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value){var n=this.getOption("value",this.props.value)
"undefined"===typeof this.props.value&&(n=this.getOption("value",e.value))
this.setState({inputValue:n?n.props.children:"",selectedOptionId:n?n.props.id:""})}}},{key:"getInitialOption",value:function(e){var n=e.value,t=e.defaultValue
var r=n||t
if("string"===typeof r)return this.getOption("value",r)
return this.getOptionByIndex(0)}},{key:"getOptionLabelById",value:function(e){var n=this.getOption("id",e)
return n?n.props.children:""}},{key:"getOptionByIndex",value:function(e){var n=c["Children"].toArray(this.props.children)
var t=null
for(var r=0;r<n.length;r++){var a=n[r]
Object(b["a"])(a,[_])?t=a:Object(b["a"])(a,[L])&&(t=c["Children"].toArray(a.props.children)[0])
if(t)break}return t}},{key:"getOption",value:function(e,n){var t=c["Children"].toArray(this.props.children)
var r=null
for(var a=0;a<t.length;++a){var i=t[a]
if(Object(b["a"])(i,[_]))i.props[e]===n&&(r=i)
else if(Object(b["a"])(i,[L])){var o=c["Children"].toArray(i.props.children)
for(var l=0;l<o.length;++l){var d=o[l]
if(d.props[e]===n){r=d
break}}}if(r)break}return r}},{key:"renderChildren",value:function(){var e=this
var n=c["Children"].toArray(this.props.children)
n=c["Children"].map(n,(function(n){if(Object(b["a"])(n,[_]))return e.renderOption(n)
if(Object(b["a"])(n,[L]))return e.renderGroup(n)
return null})).filter((function(e){return!!e}))
if(0===n.length)return this.renderEmptyOption()
return n}},{key:"renderEmptyOption",value:function(){return d.a.createElement(C["a"].Option,{id:this._emptyOptionId,isHighlighted:false,isSelected:false},Object(m["a"])(this.props.renderEmptyOption))}},{key:"renderOption",value:function(e){var n=e.props,t=n.id,a=n.value,i=n.children,o=n.renderBeforeLabel,l=n.renderAfterLabel,c=Object(r["a"])(n,["id","value","children","renderBeforeLabel","renderAfterLabel"])
return d.a.createElement(C["a"].Option,Object.assign({id:t,value:a,key:e.key||t,isHighlighted:t===this.state.highlightedOptionId,isSelected:t===this.state.selectedOptionId,isDisabled:e.props.isDisabled,renderBeforeLabel:o,renderAfterLabel:l},Object(M["b"])(c)),i)}},{key:"renderGroup",value:function(e){var n=this
var t=e.props,a=t.id,i=t.renderLabel,o=t.children,l=Object(r["a"])(t,["id","renderLabel","children"])
return d.a.createElement(C["a"].Group,Object.assign({renderLabel:i,key:e.key||a},Object(M["b"])(l)),c["Children"].map(o,(function(e){return n.renderOption(e)})))}},{key:"render",value:function(){var e=this.props,n=e.renderLabel,t=(e.value,e.defaultValue,e.id),a=e.size,i=e.assistiveText,o=e.placeholder,l=(e.interaction,e.isRequired),c=e.isInline,s=e.width,u=e.optionsMaxWidth,p=e.visibleOptionsCount,g=e.messages,h=e.placement,f=e.constrain,v=e.mountNode,b=e.inputRef,m=e.listRef,O=(e.renderEmptyOption,e.renderBeforeInput),y=e.renderAfterInput,_=e.onFocus,L=(e.onBlur,e.onShowOptions,e.onHideOptions,e.children),k=Object(r["a"])(e,["renderLabel","value","defaultValue","id","size","assistiveText","placeholder","interaction","isRequired","isInline","width","optionsMaxWidth","visibleOptionsCount","messages","placement","constrain","mountNode","inputRef","listRef","renderEmptyOption","renderBeforeInput","renderAfterInput","onFocus","onBlur","onShowOptions","onHideOptions","children"])
return d.a.createElement(C["a"],Object.assign({renderLabel:n,inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,id:t,size:a,assistiveText:i,placeholder:o,interaction:this.interaction,isRequired:l,isInline:c,width:s,optionsMaxWidth:u,visibleOptionsCount:p,messages:g,placement:h,constrain:f,mountNode:v,ref:this.handleRef,inputRef:b,listRef:m,renderBeforeInput:O,renderAfterInput:y,onFocus:_,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},Object(M["b"])(k)),this.renderChildren(L))}},{key:"focused",get:function(){return this._select&&this._select.focused}},{key:"id",get:function(){return this._select&&this._select.id}},{key:"isControlled",get:function(){return"undefined"!==typeof this.props.value}},{key:"interaction",get:function(){return Object(O["a"])({props:this.props})}}])
t.displayName="SimpleSelect"
return t}(c["Component"]),x.Option=_,x.Group=L,x.propTypes={renderLabel:u.a.oneOfType([u.a.node,u.a.func]).isRequired,value:Object(p["a"])(u.a.string,"onChange"),defaultValue:u.a.string,id:u.a.string,size:u.a.oneOf(["small","medium","large"]),assistiveText:u.a.string,placeholder:u.a.string,interaction:u.a.oneOf(["enabled","disabled","readonly"]),isRequired:u.a.bool,isInline:u.a.bool,width:u.a.string,optionsMaxWidth:u.a.string,visibleOptionsCount:u.a.number,messages:u.a.arrayOf(h["d"].message),placement:f["a"].placement,constrain:f["a"].constrain,mountNode:f["a"].mountNode,onChange:u.a.func,onFocus:u.a.func,onBlur:u.a.func,onShowOptions:u.a.func,onHideOptions:u.a.func,inputRef:u.a.func,listRef:u.a.func,renderEmptyOption:u.a.oneOfType([u.a.node,u.a.func]),renderBeforeInput:u.a.oneOfType([u.a.node,u.a.func]),renderAfterInput:u.a.oneOfType([u.a.node,u.a.func]),children:g["a"].oneOf([L,_])},x.defaultProps={value:void 0,defaultValue:void 0,id:void 0,size:"medium",assistiveText:void 0,placeholder:null,interaction:void 0,isRequired:false,isInline:false,width:void 0,optionsMaxWidth:void 0,visibleOptionsCount:8,messages:void 0,placement:"bottom stretch",mountNode:void 0,constrain:"window",onChange:function(e,n){},onFocus:function(e){},onBlur:function(e){},onShowOptions:function(e){},onHideOptions:function(e){},inputRef:function(e){},listRef:function(e){},renderEmptyOption:"---",renderBeforeInput:null,renderAfterInput:null,children:null},w))||j)},"5nFh":function(e,n,t){"use strict"
t.d(n,"a",(function(){return f}))
var r=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t("17x9")
var s=t.n(d)
var u=t("cClk")
var p=t("BTe1")
var g=t("9yTY")
var h=function(e){var n=e.expanded
return{expanded:!n}}
var f=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(e){var r
Object(a["a"])(this,t)
r=n.call(this)
r.handleToggle=function(e){r.isControlled()||r.setState(h)
r.props.onToggle(e,!r.expanded)}
r.state={expanded:r.isControlled(e)?e.expanded:!!e.defaultExpanded}
r._contentId=Object(p["a"])("Expandable__content")
return r}Object(i["a"])(t,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"render",value:function(){var e=this
var n=this.props,t=n.children,a=n.render,i=void 0===a?t:a
return"function"===typeof i?i({expanded:this.expanded,getToggleProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(r["a"])({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(g["a"])(e.handleToggle,n.onClick)},n)},getDetailsProps:function(n){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"boolean"===typeof e.expanded&&e.expanded!==n.expanded?{expanded:e.expanded}:null}}])
t.displayName="Expandable"
return t}(c["Component"])
f.propTypes={expanded:Object(u["a"])(s.a.bool,"onToggle","defaultExpanded"),defaultExpanded:s.a.bool,onToggle:s.a.func,children:s.a.func,render:s.a.func}
f.defaultProps={defaultExpanded:false,onToggle:function(e,n){},expanded:void 0,children:null,render:void 0}},"8ruJ":function(e,n,t){"use strict"
t.d(n,"a",(function(){return p}))
var r=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("hPGw")
var u=d.a.createElement("path",{d:"M1468.2137,0 L1468.2137,564.697578 L1355.27419,564.697578 L1355.27419,112.939516 L112.939516,112.939516 L112.939516,1807.03225 L1355.27419,1807.03225 L1355.27419,1581.15322 L1468.2137,1581.15322 L1468.2137,1919.97177 L2.5243549e-29,1919.97177 L2.5243549e-29,0 L1468.2137,0 Z M1597.64239,581.310981 C1619.77853,559.174836 1655.46742,559.174836 1677.60356,581.310981 L1677.60356,581.310981 L1903.4826,807.190012 C1925.5058,829.213217 1925.5058,864.902104 1903.4826,887.038249 L1903.4826,887.038249 L1225.8455,1564.67534 C1215.22919,1575.17872 1200.88587,1581.16451 1185.86491,1581.16451 L1185.86491,1581.16451 L959.985883,1581.16451 C928.814576,1581.16451 903.516125,1555.86606 903.516125,1524.69475 L903.516125,1524.69475 L903.516125,1298.81572 C903.516125,1283.79477 909.501919,1269.45145 920.005294,1258.94807 L920.005294,1258.94807 Z M1442.35055,896.29929 L1016.45564,1322.1942 L1016.45564,1468.225 L1162.48643,1468.225 L1588.38135,1042.33008 L1442.35055,896.29929 Z M677.637094,1242.34597 L677.637094,1355.28548 L338.818547,1355.28548 L338.818547,1242.34597 L677.637094,1242.34597 Z M903.516125,1016.46693 L903.516125,1129.40645 L338.818547,1129.40645 L338.818547,1016.46693 L903.516125,1016.46693 Z M1637.62298,701.026867 L1522.19879,816.451052 L1668.22958,962.481846 L1783.65377,847.057661 L1637.62298,701.026867 Z M1129.39516,338.829841 L1129.39516,790.587903 L338.818547,790.587903 L338.818547,338.829841 L1129.39516,338.829841 Z M1016.45564,451.769356 L451.758062,451.769356 L451.758062,677.648388 L1016.45564,677.648388 L1016.45564,451.769356 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(s["a"],Object.assign({},this.props,{name:"IconAssignment",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconAssignmentLine"
return t}(c["Component"])
p.glyphName="assignment"
p.variant="Line"
p.propTypes=Object(r["a"])({},s["a"].propTypes)},"CO+y":function(e,n,t){"use strict"
t.d(n,"a",(function(){return h}))
var r=t("Ff2n")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("17x9")
var u=t.n(s)
var p=t("KgFQ")
var g=t("jtGx")
var h=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var e=this.props,n=e.children,a=Object(r["a"])(e,["children"])
var i=Object(p["a"])(t,this.props)
return d.a.createElement(i,Object.assign({},Object(g["b"])(a),{"aria-hidden":"true"}),n)}}])
t.displayName="PresentationContent"
return t}(c["Component"])
h.propTypes={as:u.a.elementType,children:u.a.node}
h.defaultProps={as:"span",children:null}},KIj7:function(e,n,t){"use strict"
t.d(n,"a",(function(){return J}))
var r=t("rePB")
var a=t("VTBJ")
var i=t("1OyB")
var o=t("vuIU")
var l=t("Ji7U")
var c=t("LK+K")
var d=t("q1tI")
var s=t.n(d)
var u=t("17x9")
var p=t.n(u)
var g=t("TSYQ")
var h=t.n(g)
var f=t("Xx/m")
var v=t("rf+m")
var b=t("y2yB")
var m=t("5nFh")
var M=t("J2CL")
var O=t("cClk")
var y=t("jtGx")
var C=t("/UXv")
var _=t("oXx0")
function L(e){var n=e.colors,t=e.spacing,r=e.borders,a=e.typography
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,lineHeight:a.lineHeight,textColor:n.textDarkest,fontSizeSmall:a.fontSizeSmall,fontSizeMedium:a.fontSizeMedium,fontSizeLarge:a.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:t.xxSmall,iconColor:n.textDarkest,togglePadding:t.xxSmall,toggleBorderRadius:r.radiusMedium,toggleBorderWidth:r.widthMedium,toggleBorderStyle:r.style,toggleFocusBorderColor:n.borderBrand,filledBackgroundColor:n.backgroundLight,filledBorderWidth:r.widthSmall,filledBorderStyle:r.style,filledBorderColor:n.borderMedium,filledBorderRadius:r.radiusMedium,filledPadding:t.small}}L["canvas"]=function(e){return{toggleFocusBorderColor:e["ic-brand-primary"],iconColor:e["ic-brand-font-color-dark"],textColor:e["ic-brand-font-color-dark"]}}
var k,j,x,w,B
var I={componentId:"MlJlv",template:function(e){return"\n\n.MlJlv_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(e.textColor||"inherit",";cursor:pointer;font-family:").concat(e.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(e.toggleBorderWidth||"inherit"," ").concat(e.toggleBorderStyle||"inherit"," ").concat(e.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(e.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(e.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(e.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(e.textColor||"inherit",";padding-top:").concat(e.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var J=(k=Object(_["a"])(),j=Object(M["j"])(L,I),k(x=j(x=(B=w=function(e){Object(l["a"])(t,e)
var n=Object(c["a"])(t)
function t(){var e
Object(i["a"])(this,t)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
e=n.call.apply(n,[this].concat(a))
e.shouldAnimateContent=false
e.getButtonRef=function(n){return e._button=n}
return e}Object(o["a"])(t,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(e){var n=this.props,t=n.summary,r=n.iconPosition
return s.a.createElement("span",{className:I.summary},"start"===r&&this.renderIcon(e),s.a.createElement("span",{className:I.summaryText},t),"end"===r&&this.renderIcon(e))}},{key:"renderToggle",value:function(e,n){var i=this.props,o=i.variant,l=i.fluidWidth
var c=Object(a["a"])({},Object(y["a"])(this.props,t.propTypes),{},e,{children:this.renderSummary()})
var d=this.renderSummary(n)
return"filled"===o?s.a.createElement(f["a"],Object.assign({},c,{display:"block",textAlign:"start",elementRef:this.getButtonRef}),d):c.href?s.a.createElement("a",Object.assign({},c,{className:h()(I.toggle,I[o],Object(r["a"])({},I.fluidWidth,l)),ref:this.getButtonRef}),d):s.a.createElement("button",Object.assign({},c,{type:"button",className:h()(I.toggle,I[o],Object(r["a"])({},I.fluidWidth,l)),ref:this.getButtonRef}),d)}},{key:"renderIcon",value:function(e){var n
var t=this.props.iconPosition
var a=e?this.props.iconExpanded:this.props.icon
return this.props.children?s.a.createElement("span",{className:h()(I.icon,(n={},Object(r["a"])(n,I.iconStart,"start"===t),Object(r["a"])(n,I.iconEnd,"end"===t),n))},s.a.createElement(a,null)):null}},{key:"renderDetails",value:function(e,n){var t
var a=this.props,i=a.children,o=a.size,l=a.iconPosition,c=a.fluidWidth
return s.a.createElement("div",Object.assign({},n,{className:h()(I.details,(t={},Object(r["a"])(t,I[o],o),Object(r["a"])(t,I.hiddenDetails,!e),Object(r["a"])(t,I.expandedDetails,e),Object(r["a"])(t,I.indentDetails,"start"===l&&!c),t))}),i&&e&&this.renderContent())}},{key:"renderContent",value:function(){return s.a.createElement("div",{className:h()(Object(r["a"])({},I.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var e,n=this
var t=this.props,a=t.variant,i=t.iconPosition,o=t.fluidWidth
var l="end"===i&&("filled"===a||o)
var c=(e={},Object(r["a"])(e,I.root,true),Object(r["a"])(e,I[this.props.size],true),Object(r["a"])(e,I.positionIconAtEnd,l),e)
return s.a.createElement(m["a"],Object(y["c"])(this.props,m["a"].propTypes),(function(e){var t=e.expanded,r=e.getToggleProps,a=e.getDetailsProps
return s.a.createElement("div",{className:h()(c)},n.renderToggle(r(),t),n.renderDetails(t,a()))}))}},{key:"focused",get:function(){return Object(C["a"])(this._button)}}])
t.displayName="ToggleDetails"
return t}(d["Component"]),w.propTypes={variant:p.a.oneOf(["default","filled"]),summary:p.a.node.isRequired,expanded:Object(O["a"])(p.a.bool,"onToggle","defaultExpanded"),defaultExpanded:p.a.bool,onToggle:p.a.func,icon:p.a.func,iconExpanded:p.a.func,iconPosition:p.a.oneOf(["start","end"]),fluidWidth:p.a.bool,children:p.a.node,size:p.a.oneOf(["small","medium","large"])},w.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:v["a"],iconExpanded:b["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(e,n){},children:null,expanded:void 0},B))||x)||x)},Q0Ww:function(e,n,t){"use strict"
t.d(n,"a",(function(){return p}))
var r=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("hPGw")
var u=d.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},d.a.createElement("path",{d:"M746.255375,1466.76417 L826.739372,1547.47616 L577.99138,1796.11015 L497.507383,1715.51216 L746.255375,1466.76417 Z M580.35118,1300.92837 L660.949178,1381.52637 L329.323189,1713.15236 L248.725192,1632.55436 L580.35118,1300.92837 Z M414.503986,1135.20658 L495.101983,1215.80457 L80.5979973,1630.30856 L0,1549.71056 L414.503986,1135.20658 Z M1119.32036,264.600006 C1475.79835,-91.8779816 1844.58834,86.3040124 1848.35034,88.1280123 L1848.35034,88.1280123 L1865.45034,96.564012 L1873.88634,113.664011 C1875.71034,117.312011 2053.89233,486.101999 1697.30034,842.693987 L1697.30034,842.693987 L1550.69635,989.297982 L1548.07435,1655.17196 L1325.43235,1877.81395 L993.806366,1546.30196 L415.712386,968.207982 L84.0863971,636.467994 L306.72839,413.826001 L972.602367,411.318001 Z M1436.24035,1103.75398 L1074.40436,1465.70397 L1325.43235,1716.61796 L1434.30235,1607.74796 L1436.24035,1103.75398 Z M1779.26634,182.406009 C1710.18234,156.41401 1457.90035,87.1020124 1199.91836,345.198004 L1199.91836,345.198004 L576.90838,968.207982 L993.806366,1385.10597 L1616.70235,762.095989 C1873.65834,505.139998 1804.68834,250.920007 1779.26634,182.406009 Z M858.146371,525.773997 L354.152388,527.597997 L245.282392,636.467994 L496.310383,887.609985 L858.146371,525.773997 Z"}),d.a.createElement("path",{d:"M1534.98715,372.558003 C1483.91515,371.190003 1403.31715,385.326002 1321.69316,466.949999 L1281.22316,507.305998 L1454.61715,680.585992 L1494.97315,640.343994 C1577.16715,558.035996 1591.87315,479.033999 1589.82115,427.164001 L1587.65515,374.610003 L1534.98715,372.558003 Z"}))
var p=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(s["a"],Object.assign({},this.props,{name:"IconQuiz",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconQuizLine"
return t}(c["Component"])
p.glyphName="quiz"
p.variant="Line"
p.propTypes=Object(r["a"])({},s["a"].propTypes)},U6jy:function(e,n){e.exports=r
var t=Object.prototype.hasOwnProperty
function r(){var e={}
for(var n=0;n<arguments.length;n++){var r=arguments[n]
for(var a in r)t.call(r,a)&&(e[a]=r[a])}return e}},"Un/D":function(e,n,t){"use strict"
t.d(n,"a",(function(){return p}))
var r=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("hPGw")
var u=d.a.createElement("path",{d:"M677.647059,16 L677.647059,354.936471 L790.588235,354.936471 L790.588235,129.054118 L1807.05882,129.054118 L1807.05882,919.529412 L1581.06353,919.529412 L1581.06353,1179.29412 L1321.41176,919.529412 L1242.24,919.529412 L1242.24,467.877647 L677.647059,467.877647 L0,467.877647 L0,1484.34824 L338.710588,1484.34824 L338.710588,1903.24706 L756.705882,1484.34824 L1242.24,1484.34824 L1242.24,1032.47059 L1274.99294,1032.47059 L1694.11765,1451.59529 L1694.11765,1032.47059 L1920,1032.47059 L1920,16 L677.647059,16 Z M338.789647,919.563294 L903.495529,919.563294 L903.495529,806.622118 L338.789647,806.622118 L338.789647,919.563294 Z M338.789647,1145.44565 L677.726118,1145.44565 L677.726118,1032.39153 L338.789647,1032.39153 L338.789647,1145.44565 Z M112.941176,580.705882 L1129.41176,580.705882 L1129.41176,1371.40706 L710.4,1371.40706 L451.651765,1631.05882 L451.651765,1371.40706 L112.941176,1371.40706 L112.941176,580.705882 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(s["a"],Object.assign({},this.props,{name:"IconDiscussion",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconDiscussionLine"
return t}(c["Component"])
p.glyphName="discussion"
p.variant="Line"
p.propTypes=Object(r["a"])({},s["a"].propTypes)},Zgll:function(e,n,t){"use strict"
t.d(n,"a",(function(){return _}))
var r=t("Ff2n")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("17x9")
var u=t.n(s)
var p=t("oXx0")
var g=t("J2CL")
var h=t("jtGx")
var f=t("6SzX")
var v=t("C6Zt")
var b=t("tPrY")
var m,M,O,y,C
var _=(m=Object(p["a"])(),M=Object(g["j"])(b["a"]),m(O=M(O=(C=y=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){var e
Object(a["a"])(this,t)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
e=n.call.apply(n,[this].concat(i))
e._baseButton=null
return e}Object(i["a"])(t,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var n=this.props,t=n.children,a=n.renderIcon,i=n.screenReaderLabel,o=n.type,l=n.size,c=n.elementRef,s=n.as,u=n.interaction,p=n.color,g=n.focusColor,b=n.shape,m=n.withBackground,M=n.withBorder,O=n.margin,y=n.cursor,C=n.href,_=Object(r["a"])(n,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var L=this.theme
return d.a.createElement(v["a"],Object.assign({},Object(h["b"])(_),{type:o,size:l,elementRef:c,as:s,interaction:u,color:p,focusColor:g,shape:b,withBackground:m,withBorder:M,margin:O,cursor:y,href:C,renderIcon:t||a,theme:L,ref:function(n){e._baseButton=n}}),d.a.createElement(f["a"],null,i))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
t.displayName="IconButton"
return t}(c["Component"]),y.propTypes={children:u.a.oneOfType([u.a.node,u.a.func]),renderIcon:u.a.oneOfType([u.a.node,u.a.func]),screenReaderLabel:u.a.string.isRequired,type:u.a.oneOf(["button","submit","reset"]),size:u.a.oneOf(["small","medium","large"]),elementRef:u.a.func,as:u.a.elementType,interaction:u.a.oneOf(["enabled","disabled","readonly"]),color:u.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:u.a.oneOf(["info","inverse"]),shape:u.a.oneOf(["rectangle","circle"]),withBackground:u.a.bool,withBorder:u.a.bool,margin:g["c"].spacing,cursor:u.a.string,href:u.a.string},y.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},C))||O)||O)},dKDz:function(e,n,t){"use strict"
var r=/["'&<>]/
e.exports=a
function a(e){var n=""+e
var t=r.exec(n)
if(!t)return n
var a
var i=""
var o=0
var l=0
for(o=t.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:a="&quot;"
break
case 38:a="&amp;"
break
case 39:a="&#39;"
break
case 60:a="&lt;"
break
case 62:a="&gt;"
break
default:continue}l!==o&&(i+=n.substring(l,o))
l=o+1
i+=a}return l!==o?i+n.substring(l,o):i}},etQE:function(e,n,t){"use strict"
t.d(n,"f",(function(){return a}))
t.d(n,"d",(function(){return i}))
t.d(n,"a",(function(){return o}))
t.d(n,"b",(function(){return l}))
t.d(n,"c",(function(){return c}))
t.d(n,"e",(function(){return d}))
var r=t("FOCd")
function a(e){return window.prefetched_xhrs&&window.prefetched_xhrs[e]}function i(e){if(window.prefetched_xhrs){const n=window.prefetched_xhrs[e]
delete window.prefetched_xhrs[e]
return n}return}function o(e,n="json"){if(!e)return
return e.then(c).then(e=>e.clone()[n]().then(n=>({data:n,headers:{link:e.headers.get("Link")}})))}function l(e){if(!e)return
return e.then(c).then(e=>e.clone().json())}function c(e){if(e.status<400)return e
{const n=new Error(e.statusText)
n.response=e
throw n}}const d={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json","X-Requested-With":"XMLHttpRequest","X-CSRF-Token":Object(r["a"])("_csrf_token")}}},uNh2:function(e,n,t){"use strict"
t.d(n,"a",(function(){return I}))
var r=t("rePB")
var a=t("Ff2n")
var i=t("1OyB")
var o=t("vuIU")
var l=t("Ji7U")
var c=t("LK+K")
var d=t("q1tI")
var s=t.n(d)
var u=t("17x9")
var p=t.n(u)
var g=t("TSYQ")
var h=t.n(g)
var f=t("n12J")
var v=t("J2CL")
var b=t("nAyT")
var m=t("E+IV")
var M=t("jtGx")
var O=t("oXx0")
var y=t("6RTY")
function C(e){var n=e.colors,t=e.borders,r=e.typography
return{background:n.backgroundLightest,borderWidthSmall:t.widthSmall,borderWidthMedium:t.widthMedium,borderColor:n.borderMedium,boxShadowColor:Object(y["a"])(n.backgroundDarkest,12),boxShadowBlur:"1rem",fontFamily:r.fontFamily,fontWeight:r.fontWeightBold,color:n.brand,colorShamrock:n.shamrock,colorBarney:n.barney,colorCrimson:n.crimson,colorFire:n.fire,colorLicorice:n.licorice,colorAsh:n.ash}}var _,L,k,j,x,w
var B={componentId:"elMgC",template:function(e){return"\n\n.elMgC_bGBk{background-clip:content-box;background-color:".concat(e.background||"inherit",";background-position:50%;background-repeat:no-repeat;background-size:cover;box-sizing:border-box;height:2.5em;line-height:0;overflow:hidden;text-align:center}\n\n[dir=ltr] .elMgC_bGBk,[dir=rtl] .elMgC_bGBk{text-align:center}\n\n.elMgC_bGBk.elMgC_uUeq{font-size:inherit}\n\n.elMgC_bGBk.elMgC_uUeq,.elMgC_bGBk.elMgC_UKsG{border-width:").concat(e.borderWidthSmall||"inherit","}\n\n.elMgC_bGBk.elMgC_UKsG{font-size:0.5rem}\n\n.elMgC_bGBk.elMgC_dfBC{font-size:0.75rem}\n\n.elMgC_bGBk.elMgC_doqw,.elMgC_bGBk.elMgC_dfBC{border-width:").concat(e.borderWidthSmall||"inherit","}\n\n.elMgC_bGBk.elMgC_doqw{font-size:1rem}\n\n.elMgC_bGBk.elMgC_ycrn{font-size:1.25rem}\n\n.elMgC_bGBk.elMgC_cMDj,.elMgC_bGBk.elMgC_ycrn{border-width:").concat(e.borderWidthMedium||"inherit","}\n\n.elMgC_bGBk.elMgC_cMDj{font-size:1.5rem}\n\n.elMgC_bGBk.elMgC_eoMd{font-size:1.75rem}\n\n.elMgC_bGBk.elMgC_eoMd,.elMgC_bGBk.elMgC_fdca{border-width:").concat(e.borderWidthMedium||"inherit","}\n\n.elMgC_bGBk.elMgC_fdca{font-size:2rem}\n\n.elMgC_bGBk.elMgC_cHTY{border:0;box-shadow:inset 0 0 ").concat(e.boxShadowBlur||"inherit"," 0 ").concat(e.boxShadowColor||"inherit","}\n\n.elMgC_bGBk:not(.elMgC_cHTY){border-color:").concat(e.borderColor||"inherit",";border-style:solid}\n\n.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA{background-clip:border-box;border:0;padding:0}\n\n.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_uUeq,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_doqw,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_dfBC,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_UKsG{padding:").concat(e.borderWidthSmall||"inherit","}\n\n.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_cMDj,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_ycrn,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_eoMd,.elMgC_bGBk:not(.elMgC_cHTY).elMgC_fKgA.elMgC_fdca{padding:").concat(e.borderWidthMedium||"inherit","}\n\n.elMgC_eYKj{font-family:").concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";letter-spacing:0.0313em;line-height:2.375em}\n\n.elMgC_ddES{color:").concat(e.color||"inherit","}\n\n.elMgC_ekuM{color:").concat(e.colorShamrock||"inherit","}\n\n.elMgC_bXnN{color:").concat(e.colorBarney||"inherit","}\n\n.elMgC_byip{color:").concat(e.colorCrimson||"inherit","}\n\n.elMgC_dKVo{color:").concat(e.colorFire||"inherit","}\n\n.elMgC_eaOe{color:").concat(e.colorLicorice||"inherit","}\n\n.elMgC_fuVp{color:").concat(e.colorAsh||"inherit","}\n\n.elMgC_fKgA{color:").concat(e.background||"inherit","}\n\n.elMgC_fKgA.elMgC_ddES{background-color:").concat(e.color||"inherit","}\n\n.elMgC_fKgA.elMgC_ekuM{background-color:").concat(e.colorShamrock||"inherit","}\n\n.elMgC_fKgA.elMgC_bXnN{background-color:").concat(e.colorBarney||"inherit","}\n\n.elMgC_fKgA.elMgC_byip{background-color:").concat(e.colorCrimson||"inherit","}\n\n.elMgC_fKgA.elMgC_dKVo{background-color:").concat(e.colorFire||"inherit","}\n\n.elMgC_fKgA.elMgC_eaOe{background-color:").concat(e.colorLicorice||"inherit","}\n\n.elMgC_fKgA.elMgC_fuVp{background-color:").concat(e.colorAsh||"inherit","}\n\n.elMgC_MrJH{display:none}\n\n.elMgC_cJVF{border-radius:100%;overflow:hidden;position:relative;width:2.5em}\n\n.elMgC_bRWf{width:3em}\n\n.elMgC_eoCh{align-items:center;display:flex;height:100%;justify-content:center;width:100%}\n\n.elMgC_eoCh svg{fill:currentColor;height:1em;width:1em}")},root:"elMgC_bGBk",auto:"elMgC_uUeq","xx-small":"elMgC_UKsG","x-small":"elMgC_dfBC",small:"elMgC_doqw",medium:"elMgC_ycrn",large:"elMgC_cMDj","x-large":"elMgC_eoMd","xx-large":"elMgC_fdca",loaded:"elMgC_cHTY",hasInverseColor:"elMgC_fKgA",initials:"elMgC_eYKj",default:"elMgC_ddES",shamrock:"elMgC_ekuM",barney:"elMgC_bXnN",crimson:"elMgC_byip",fire:"elMgC_dKVo",licorice:"elMgC_eaOe",ash:"elMgC_fuVp",loadImage:"elMgC_MrJH",circle:"elMgC_cJVF",rectangle:"elMgC_bRWf",iconSVG:"elMgC_eoCh"}
var I=(_=Object(O["a"])(),L=Object(b["a"])("8.0.0",{inline:"display",variant:"shape"}),k=Object(v["j"])(C,B),_(j=L(j=k(j=(w=x=function(e){Object(l["a"])(t,e)
var n=Object(c["a"])(t)
function t(){var e
Object(i["a"])(this,t)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
e=n.call.apply(n,[this].concat(a))
e.state={loaded:false}
e.handleImageLoaded=function(n){e.setState({loaded:true})
e.props.onImageLoaded(n)}
return e}Object(o["a"])(t,[{key:"componentDidUpdate",value:function(){this.state.loaded&&!this.props.src&&this.setState({loaded:false})}},{key:"makeInitialsFromName",value:function(){var e=this.props.name
if(!e||"string"!==typeof e)return
e=e.trim()
if(0===e.length)return
if(e.match(/\s+/)){var n=e.split(/\s+/)
return(n[0][0]+n[n.length-1][0]).toUpperCase()}return e[0].toUpperCase()}},{key:"renderLoadImage",value:function(){return s.a.createElement("img",{src:this.props.src,className:B.loadImage,alt:this.props.alt,onLoad:this.handleImageLoaded,"aria-hidden":"true"})}},{key:"renderInitials",value:function(){return s.a.createElement("span",{className:B.initials,"aria-hidden":"true"},this.makeInitialsFromName())}},{key:"renderContent",value:function(){var e=this.props.renderIcon
if(!e)return this.renderInitials()
return s.a.createElement("span",{className:B.iconSVG},Object(m["a"])(e))}},{key:"render",value:function(){var e
var n=this.props,t=(n.onImageLoaded,Object(a["a"])(n,["onImageLoaded"]))
var i=this.state.loaded
return s.a.createElement(f["a"],Object.assign({},Object(M["b"])(t),{style:{backgroundImage:i?"url('".concat(this.props.src,"')"):void 0},className:h()((e={},Object(r["a"])(e,B.root,true),Object(r["a"])(e,B[this.props.size],true),Object(r["a"])(e,B[this.props.variant||this.props.shape],true),Object(r["a"])(e,B[this.props.color],true),Object(r["a"])(e,B.loaded,i),Object(r["a"])(e,B.hasInverseColor,this.props.hasInverseColor),e)),"aria-label":this.props.alt?this.props.alt:null,role:this.props.alt?"img":null,as:this.props.as,elementRef:this.props.elementRef,margin:this.props.margin,display:"block"===this.props.display||false===this.props.inline?"block":"inline-block"}),this.renderLoadImage(),!i&&this.renderContent())}}])
t.displayName="Avatar"
return t}(d["Component"]),x.propTypes={name:p.a.string.isRequired,src:p.a.string,alt:p.a.string,size:p.a.oneOf(["auto","xx-small","x-small","small","medium","large","x-large","xx-large"]),color:p.a.oneOf(["default","shamrock","barney","crimson","fire","licorice","ash"]),hasInverseColor:p.a.bool,shape:p.a.oneOf(["circle","rectangle"]),margin:v["c"].spacing,display:p.a.oneOf(["inline-block","block"]),onImageLoaded:p.a.func,as:p.a.elementType,elementRef:p.a.func,renderIcon:p.a.oneOfType([p.a.node,p.a.func]),inline:p.a.bool,variant:p.a.oneOf(["circle","rectangle"])},x.defaultProps={src:void 0,alt:void 0,margin:void 0,elementRef:void 0,size:"medium",color:"default",hasInverseColor:false,shape:"circle",display:"inline-block",onImageLoaded:function(e){},renderIcon:null},w))||j)||j)||j)},y2yB:function(e,n,t){"use strict"
t.d(n,"a",(function(){return p}))
var r=t("VTBJ")
var a=t("1OyB")
var i=t("vuIU")
var o=t("Ji7U")
var l=t("LK+K")
var c=t("q1tI")
var d=t.n(c)
var s=t("hPGw")
var u=d.a.createElement("path",{d:"M568.129648 0.0124561278L392 176.142104 1175.86412 960.130789 392 1743.87035 568.129648 1920 1528.24798 960.130789z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"matrix(0 1 1 0 .067 -.067)"})
var p=function(e){Object(o["a"])(t,e)
var n=Object(l["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(s["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconArrowOpenDownSolid"
return t}(c["Component"])
p.glyphName="arrow-open-down"
p.variant="Solid"
p.propTypes=Object(r["a"])({},s["a"].propTypes)}}])

//# sourceMappingURL=56-c-3bc88392c2.js.map