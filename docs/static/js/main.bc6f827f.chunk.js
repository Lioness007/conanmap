(this["webpackJsonptw-thrall-map"]=this["webpackJsonptw-thrall-map"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a,o=n(1),i=n.n(o),c=n(10),s=n.n(c),r=(n(25),n(26),n(15)),l=n(16),d=n(20),u=n(19),h=(n(27),n(28),n(3)),j=n(53),f=n(54),m=n(55),b=n(2),p=(n(29),n(0)),O=function(e){return Object(p.jsxs)("div",{className:"thrall-header",onClick:function(){return e.onSelect(e.thrall)},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"thrall-header-name",children:e.thrall.name}),Object(p.jsx)("div",{className:"thrall-header-type",children:e.thrall.type})]}),Object(p.jsx)("div",{style:{marginLeft:"auto",marginRight:"16px"},children:Object(p.jsx)("span",{className:"material-icons",style:{fontSize:"20pt"},children:e.icon})})]})},g=function(e){return Object(p.jsx)(O,{onSelect:e.onSelect,thrall:e.thrall,icon:"chevron_right"})};!function(e){e.ALCHEMIST="ALCHEMIST",e.BLACKSMITH="BLACKSMITH",e.ARMORER="ARMORER",e.CARPENTER="CARPENTER",e.TASKMASTER="TASKMASTER",e.GROOMER="GROOMER",e.SMELTER="SMELTER  "}(a||(a={}));n(31),n(32);var x=function(e){return Object(p.jsx)("div",{onClick:function(){return e.onSelectLocation(e.location)},className:"thrall-detail-single-location",children:Object(p.jsxs)("div",{className:"display-in-row display-in-center ",children:[Object(p.jsx)("div",{style:{marginRight:"16px"},children:Object(p.jsx)("img",{alt:"icon camp",src:"/tw-map/fc_assets/icon_camp.png"})}),Object(p.jsxs)("div",{style:{marginRight:"auto"},children:[Object(p.jsx)("div",{style:{fontSize:"14pt"},children:e.location.location}),Object(p.jsxs)("div",{style:{fontSize:"11pt"},children:["Spawns at the ",e.location.spawnSpot," spot."]}),Object(p.jsx)("div",{style:{fontSize:"9pt"},children:e.location.spawnSpotDetail}),Object(p.jsxs)("div",{style:{fontSize:"9pt"},children:["Coordiantes: ",e.location.x," / ",e.location.y," / ",e.location.z]})]})]})})},v=function(e){var t;return Object(p.jsx)("div",{className:"thrall-location-list-container",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"thrall-location-list-header",children:"Locations"}),Object(p.jsx)("div",{className:"thrall-location-list-subheader",children:"Click a location to jump to it"}),Object(p.jsx)("div",{className:"thrall-details-locations",children:null===(t=e.thrall)||void 0===t?void 0:t.locations.map((function(t,n){return Object(p.jsx)(x,{onSelectLocation:e.onSelectLocation,location:t},n)}))})]})})},S=function(e){var t,n=e.focused?"thrall-details-sliding-in":"thrall-details-sliding-out";return Object(p.jsx)("div",{className:"thrall-details-container "+n,children:Object(p.jsxs)("div",{className:"thrall-details",children:[Object(p.jsx)(O,{thrall:e.thrall||{locations:[],name:"",type:a.ALCHEMIST,id:"ada"},icon:"chevron_left",onSelect:e.onDeSelect}),Object(p.jsx)("div",{className:"thrall-location-description",children:null===(t=e.thrall)||void 0===t?void 0:t.locationDescription}),Object(p.jsx)(v,{thrall:e.thrall,onSelectLocation:e.onSelectLocation})]})})},w=(n(33),function(e){var t=e.selectedThrallFocused?"thrall-list-sliding-out":"thrall-list-sliding-in";return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(S,{focused:e.selectedThrallFocused,onSelectLocation:e.onSelectLocation,thrall:e.selectedThrall,onDeSelect:e.onDeselectThrall}),Object(p.jsx)("div",{className:"thrall-list "+t,children:e.thralls.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(t){return Object(p.jsx)(g,{onSelect:e.onSelectThrall,thrall:t},t.id)}))})]})});function C(e){return{lat:-1*e.y,lng:e.x}}var y=n(50);function N(e){var t=Object(y.a)();if(e.location&&!e.location.preventPan){var n=e.location.zoom?e.location.zoom:t.getZoom(),a=e.location.center?e.location.center:t.getCenter();t.flyTo(a,n)}return null}var T=n(51),L=n(52),R=Object(b.icon)({iconUrl:"/tw-map/fc_assets/icon_camp.png",iconSize:[24,24],tooltipAnchor:[0,12]});function k(e){if(!e.focused)return Object(p.jsx)(i.a.Fragment,{});var t=e.thrall;return t?t.locations.map((function(e){return function(e,t){return Object(p.jsx)(T.a,{icon:R,position:t,children:Object(p.jsx)(L.a,{direction:"bottom",children:e.name})},t.lat+"_"+t.lng)}(t,C(e))})):Object(p.jsx)(i.a.Fragment,{})}function M(e){var t=Object(y.b)({zoom:function(){console.log(t.getZoom()),e.onZoomCenterChange({zoom:t.getZoom(),center:t.getCenter(),preventPan:!0})},click:function(e){console.log(e.latlng.lat,e.latlng.lng)},drag:function(){t.panInsideBounds(e.mapBounds,{animate:!1}),e.onZoomCenterChange({zoom:t.getZoom(),center:t.getCenter(),preventPan:!0})}});return null}n(34);var z=function(e){return e.open?Object(p.jsx)("div",{className:"dialog-container",onClick:e.onClose,children:Object(p.jsxs)("div",{className:"dialog",onClick:function(e){"A"!==e.target.tagName&&e.preventDefault(),e.stopPropagation()},children:[Object(p.jsx)("div",{className:"dialog-header",children:"Information"}),Object(p.jsx)("div",{className:"dialog-subheader",children:"About"}),Object(p.jsxs)("div",{children:["This map contains information about the thralls added by the\xa0",Object(p.jsx)("a",{target:"_blank",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1326031593",rel:"noreferrer",children:"Thrall Wars Dungeon Mod"}),".",Object(p.jsx)("br",{}),"Check out the mod page for more information!",Object(p.jsx)("br",{}),"You can find the source code over on ",Object(p.jsx)("a",{target:"_blank",href:"https://github.com/Nia292/tw-map",rel:"noreferrer",children:"GitHub"}),"."]}),Object(p.jsx)("div",{className:"dialog-subheader",children:"Privacy"}),Object(p.jsxs)("div",{children:["This site does not track your information. ",Object(p.jsx)("br",{}),"This site does not use cookies. ",Object(p.jsx)("br",{}),"This site does not store data on your local device aside from normal browser caching. ",Object(p.jsx)("br",{}),"Site provided by\xa0",Object(p.jsx)("a",{target:"_blank",href:"https://pages.github.com/",rel:"noreferrer",children:"GitHub pages"}),". Check out\xa0",Object(p.jsx)("a",{target:"_blank",href:"https://docs.github.com/en/github/site-policy/github-privacy-statement",rel:"noreferrer",children:"GitHub's privacy statement"}),"\xa0to find out what data GitHub collects."]}),Object(p.jsx)("div",{className:"dialog-subheader",children:"Contributing"}),Object(p.jsx)("div",{children:"This map is far from completed. Head over to GitHub to find out how to contribute data!"}),Object(p.jsx)("div",{className:"dialog-subheader",children:"More"}),Object(p.jsxs)("div",{children:["There is also the ",Object(p.jsx)("a",{target:"_blank",href:"https://nia292.github.io/tw-dice-calc/index.html",rel:"noreferrer",children:"TW Dice Calculator"})," to plan your RP characters!"]}),Object(p.jsx)("div",{className:"dialog-subheader",children:"Credits"}),Object(p.jsxs)("div",{children:["Funcom for Conan Exiles and the map!",Object(p.jsx)("br",{}),"Savage Wilds mod for the Savage Wilds map! ",Object(p.jsx)("br",{}),"Japata for helping me with the locations and general thrall information. \ud83d\udc0d"]}),Object(p.jsx)("div",{className:"dialog-subheader",children:"Contributors"}),Object(p.jsx)("div",{className:"display-in-column",children:e.contributors.map((function(e){return Object(p.jsx)("div",{children:e},e)}))})]})}):Object(p.jsx)(i.a.Fragment,{})},_=n(11),E=n(5),A=(n(35),function(e){function t(t,n){if(""!==t){var a=Number.parseInt(t,10);e.onOffsetChange(Object(E.a)(Object(E.a)({},e.offset),{},Object(_.a)({},n,a)))}}return e.open?Object(p.jsx)("div",{className:"dialog-container",onClick:e.onClose,children:Object(p.jsxs)("div",{className:"dialog",onClick:function(e){"A"!==e.target.tagName&&e.preventDefault(),e.stopPropagation()},children:[Object(p.jsx)("div",{className:"dialog-header",children:"Settings"}),Object(p.jsx)("div",{className:"dialog-subheader",children:"Map Offsets"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Used to correct initial reading errors."}),Object(p.jsxs)("div",{className:"settings-input",children:[Object(p.jsx)("label",{htmlFor:"offset-top",children:"Offset Top"}),Object(p.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetTop")},value:e.offset.offsetTop})]}),Object(p.jsxs)("div",{className:"settings-input",children:[Object(p.jsx)("label",{htmlFor:"offset-top",children:"Offset Bottom"}),Object(p.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetBot")},value:e.offset.offsetBot})]}),Object(p.jsxs)("div",{className:"settings-input",children:[Object(p.jsx)("label",{htmlFor:"offset-top",children:"Offset Left"}),Object(p.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetLeft")},value:e.offset.offsetLeft})]}),Object(p.jsxs)("div",{className:"settings-input",children:[Object(p.jsx)("label",{htmlFor:"offset-top",children:"Offset Right"}),Object(p.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetRight")},value:e.offset.offsetRight})]})]})]})}):Object(p.jsx)(i.a.Fragment,{})});function F(e,t,n){var a=e.find((function(e){return function(e,t){var n=Math.abs(e.x-t.x),a=Math.abs(e.y-t.y);return n<=.005&&a<=.005}(e,t)}));a?a.names.push(n.name):e.push({x:t.x,y:t.y,z:t.z,names:[n.name]})}var B=Object(b.icon)({iconUrl:"/tw-map/fc_assets/icon_camp.png",iconSize:[24,24],tooltipAnchor:[0,12]});function Z(e){if(e.focused)return Object(p.jsx)(i.a.Fragment,{});var t=function(e){var t=[];return e.forEach((function(e){e.locations.forEach((function(n){return F(t,n,e)}))})),t}(e.thralls).map((function(e){return function(e){var t=C(e);return Object(p.jsx)(T.a,{icon:B,position:t,children:Object(p.jsx)(L.a,{direction:"bottom",children:Object(p.jsx)("div",{className:"display-in-column",children:e.names.map((function(e){return Object(p.jsx)("div",{children:e},e)}))})})},t.lat+"_"+t.lng)}(e)}));return Object(p.jsx)(i.a.Fragment,{children:t})}var H=n(18),q=n.n(H),P=(n(48),function(e){switch(e){case"CUSTOM_LOOT":return"Custom Loot";case"MINE":return"Mined";case"THRALL_CRAFT":return"Thrall-Made";case"TW_MERCHANT":return"Faction Merchant";case"BOSS_LOOT":return"TW Boss Loot"}}),D=function(e){var t=Object(o.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)([]),s=Object(h.a)(c,2),r=s[0],l=s[1],d={onChange:function(e,t){return i(t.newValue)},value:a,className:"map-item-search-input",placeholder:"Item Search"};return Object(p.jsx)(q.a,{suggestions:r,getSuggestionValue:function(e){return e.name},inputProps:d,onSuggestionsFetchRequested:function(t){return function(t){var n=e.items.filter((function(e){return e.name.toLowerCase().startsWith(t.toLowerCase())}));l(n)}(t.value)},onSuggestionsClearRequested:function(){return l([])},onSuggestionSelected:function(t,n){return a=n.suggestion,void(e.itemSelect&&e.itemSelect(a));var a},renderSuggestion:function(e){return Object(p.jsxs)("div",{className:"single-suggestion",children:[Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{className:"single-suggestion-source",children:(t=e.source,t.map(P).join(", "))})]});var t}})},I={lat:0,lng:0};function W(e){var t=Object(o.useState)(void 0),n=Object(h.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(!1),s=Object(h.a)(c,2),r=s[0],l=s[1],d=Object(o.useState)(void 0),u=Object(h.a)(d,2),O=u[0],g=u[1],x=Object(o.useState)(!1),v=Object(h.a)(x,2),S=v[0],y=v[1],T=Object(o.useState)(!1),L=Object(h.a)(T,2),R=L[0],_=L[1],E=Object(o.useState)(!1),F=Object(h.a)(E,2),B=F[0],H=F[1],q=Object(o.useState)({offsetTop:0,offsetBot:0,offsetLeft:0,offsetRight:0}),P=Object(h.a)(q,2),W=P[0],G=P[1],U=Object(o.useState)(void 0),K=Object(h.a)(U,2),J=(K[0],K[1]);var V,Q=(null===O||void 0===O?void 0:O.center)?O.center:I,Y=(null===O||void 0===O?void 0:O.zoom)?O.zoom:-8.7,X=function(e,t,n,a,o){var i=new b.LatLng(e-o.offsetBot,t-o.offsetLeft),c=new b.LatLng(n-o.offsetTop,a-o.offsetRight);return new b.LatLngBounds(i,c)}(e.south,e.west,e.north,e.east,W);return Object(p.jsxs)("div",{className:"thrall-map-wrapper",children:[Object(p.jsx)("div",{id:"item-search",children:Object(p.jsx)(D,{items:e.items,itemSelect:J})}),Object(p.jsx)("div",{id:"info-button",className:"display-in-center",onClick:function(){return y(!0)},children:Object(p.jsx)("span",{className:"material-icons",style:{fontSize:"18pt"},children:"help_outline"})}),Object(p.jsx)("div",{id:"settings-button",className:"display-in-center",onClick:function(){return _(!0)},children:Object(p.jsx)("span",{className:"material-icons",style:{fontSize:"18pt"},children:"settings"})}),Object(p.jsxs)("div",{id:"hq-checkbox-wrapper",className:"display-in-center",children:[Object(p.jsx)("input",{id:"hq-checkbox",type:"checkbox",checked:B,onChange:function(e){var t=e.target;H(t.checked)}}),Object(p.jsx)("label",{htmlFor:"hq-checkbox",children:"HQ Map (11mb)"})]}),Object(p.jsxs)("div",{id:"map-link",className:"display-in-center",children:["Switch to\xa0",Object(p.jsx)("a",{rel:"noreferrer",href:(V=e.mapType,"exiled-lands"===V?"/tw-map?map=savage-wilds":"/tw-map?map=exiled-lands"),children:function(e){return"exiled-lands"===e?"Savage Wilds":"Exiled Lands"}(e.mapType)})]}),Object(p.jsx)(z,{open:S,onClose:function(){return y(!1)},contributors:e.contributors}),Object(p.jsx)(A,{open:R,offset:W,onOffsetChange:G,onClose:function(){return _(!1)}}),Object(p.jsxs)(j.a,{center:Q,style:{height:"100vh",width:"calc(100vw - var(--sidebar-width))"},minZoom:e.minZoom,maxZoom:e.maxZoom,zoomSnap:.1,zoomDelta:.1,crs:b.CRS.Simple,bounds:X,maxBounds:X,zoomControl:!1,zoom:Y,children:[Object(p.jsx)(f.a,{}),!B&&Object(p.jsx)(m.a,{url:"/tw-map"+e.mapLq,bounds:X}),B&&Object(p.jsx)(m.a,{url:"/tw-map"+e.mapHq,bounds:X}),Object(p.jsx)(M,{mapBounds:X,onZoomCenterChange:g}),Object(p.jsx)(N,{location:O}),Object(p.jsx)(k,{thrall:a,focused:r}),Object(p.jsx)(Z,{thralls:e.data,focused:r})]}),Object(p.jsx)("div",{className:"sidebar-right",children:Object(p.jsx)(w,{thralls:e.data,onSelectLocation:function(e){g({center:C(e),zoom:-7})},selectedThrallFocused:r,selectedThrall:a,onDeselectThrall:function(){l(!1),g({zoom:-8.7,center:I})},onSelectThrall:function(e){var t=function(e){if(e.length<=0)return null;if(e.length<=1)return C(e[0]);if(e.length<=2){var t=e.map((function(e){return C(e)}));return new b.Polyline(t).getBounds().getCenter()}var n=e.map((function(e){return C(e)}));return new b.Polygon(n).getBounds().getCenter()}(e.locations);t&&g({zoom:-8,center:t}),i(e),l(!0)}})})]})}function G(){var e=new URLSearchParams(window.location.search).get("map");if(e&&"savage-wilds"===e)return"savage-wilds";if(e&&"exiled-lands"===e)return"exiled-lands";if(!e){var t=window.location.protocol+"//"+window.location.host+window.location.pathname+"?map=exiled-lands";window.history.pushState({path:t},"",t)}return"exiled-lands"}var U=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={loaded:!1,data:{data:[],map_hq:"",map_lq:"",minZoom:-12,maxZoom:-4,bounds:{east:0,north:0,south:0,west:0},items:[]}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(function(){var e=G();return console.log("/tw-map"),"exiled-lands"===e?"/tw-map/data.json":"/tw-map/data_sw.json"}()).then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loaded:!0})}))}},{key:"render",value:function(){if(!this.state.loaded)return Object(p.jsx)("div",{children:"Map Loading..."});var e=this.state.data.bounds;return Object(p.jsx)("div",{children:Object(p.jsx)(W,{data:this.state.data.data,mapType:G(),minZoom:this.state.data.minZoom,maxZoom:this.state.data.maxZoom,mapHq:this.state.data.map_hq,mapLq:this.state.data.map_lq,north:e.north,west:e.west,east:e.east,south:e.south,contributors:this.state.data.contributors||[],items:this.state.data.items})})}}]),n}(i.a.Component);s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.bc6f827f.chunk.js.map