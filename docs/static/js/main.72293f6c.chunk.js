(this["webpackJsonptw-thrall-map"]=this["webpackJsonptw-thrall-map"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o,c=n(1),a=n.n(c),i=n(8),l=n.n(i),s=(n(22),n(23),n(13)),r=n(14),d=n(17),j=n(16),h=(n(24),n(25),n(4)),u=n(37),f=n(38),b=n(39),m=n(2),O=(n(26),n(0)),p=function(e){return Object(O.jsxs)("div",{className:"thrall-header",onClick:function(){return e.onSelect(e.thrall)},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"thrall-header-name",children:e.thrall.name}),Object(O.jsx)("div",{className:"thrall-header-type",children:e.thrall.type})]}),Object(O.jsx)("div",{style:{marginLeft:"auto",marginRight:"16px"},children:Object(O.jsx)("span",{className:"material-icons",style:{fontSize:"20pt"},children:e.icon})})]})},g=function(e){return Object(O.jsx)(p,{onSelect:e.onSelect,thrall:e.thrall,icon:"chevron_right"})};!function(e){e.ALCHEMIST="ALCHEMIST",e.BLACKSMITH="BLACKSMITH",e.ARMORER="ARMORER",e.CARPENTER="CARPENTER",e.TASKMASTER="TASKMASTER",e.GROOMER="GROOMER",e.SMELTER="SMELTER  "}(o||(o={}));n(28),n(29);var v=function(e){return Object(O.jsx)("div",{onClick:function(){return e.onSelectLocation(e.location)},className:"thrall-detail-single-location",children:Object(O.jsxs)("div",{className:"display-in-row display-in-center ",children:[Object(O.jsx)("div",{style:{marginRight:"16px"},children:Object(O.jsx)("img",{alt:"icon camp",src:"/tw-map/fc_assets/icon_camp.png"})}),Object(O.jsxs)("div",{style:{marginRight:"auto"},children:[Object(O.jsx)("div",{style:{fontSize:"14pt"},children:e.location.location}),Object(O.jsxs)("div",{style:{fontSize:"11pt"},children:["Spawns at the ",e.location.spawnSpot," spot."]}),Object(O.jsx)("div",{style:{fontSize:"9pt"},children:e.location.spawnSpotDetail}),Object(O.jsxs)("div",{style:{fontSize:"9pt"},children:["Coordiantes: ",e.location.x," / ",e.location.y," / ",e.location.z]})]})]})})},x=function(e){var t;return Object(O.jsx)("div",{className:"thrall-location-list-container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"thrall-location-list-header",children:"Locations"}),Object(O.jsx)("div",{className:"thrall-location-list-subheader",children:"Click a location to jump to it"}),Object(O.jsx)("div",{className:"thrall-details-locations",children:null===(t=e.thrall)||void 0===t?void 0:t.locations.map((function(t,n){return Object(O.jsx)(v,{onSelectLocation:e.onSelectLocation,location:t},n)}))})]})})},S=function(e){var t,n=e.focused?"thrall-details-sliding-in":"thrall-details-sliding-out";return Object(O.jsx)("div",{className:"thrall-details-container "+n,children:Object(O.jsxs)("div",{className:"thrall-details",children:[Object(O.jsx)(p,{thrall:e.thrall||{locations:[],name:"",type:o.ALCHEMIST,id:"ada"},icon:"chevron_left",onSelect:e.onDeSelect}),Object(O.jsx)("div",{className:"thrall-location-description",children:null===(t=e.thrall)||void 0===t?void 0:t.locationDescription}),Object(O.jsx)(x,{thrall:e.thrall,onSelectLocation:e.onSelectLocation})]})})},C=(n(30),function(e){var t=e.selectedThrallFocused?"thrall-list-sliding-out":"thrall-list-sliding-in";return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(S,{focused:e.selectedThrallFocused,onSelectLocation:e.onSelectLocation,thrall:e.selectedThrall,onDeSelect:e.onDeselectThrall}),Object(O.jsx)("div",{className:"thrall-list "+t,children:e.thralls.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(t){return Object(O.jsx)(g,{onSelect:e.onSelectThrall,thrall:t},t.id)}))})]})});function y(e){return{lat:-1*e.y,lng:e.x}}var N=n(34);function T(e){var t=Object(N.a)();if(e.location&&!e.location.preventPan){var n=e.location.zoom?e.location.zoom:t.getZoom(),o=e.location.center?e.location.center:t.getCenter();t.flyTo(o,n)}return null}var w=n(35),k=n(36),L=Object(m.icon)({iconUrl:"/tw-map/fc_assets/icon_camp.png",iconSize:[24,24],tooltipAnchor:[0,12]});function R(e){Object(N.a)().getZoom();if(!e.focused)return[];var t=e.thrall;return t?t.locations.map((function(e){return function(e,t,n){return Object(O.jsx)(w.a,{icon:L,position:t,children:Object(O.jsx)(k.a,{direction:"bottom",children:e.name})},t.lat+"_"+t.lng)}(t,y(e))})):Object(O.jsx)(a.a.Fragment,{})}function z(e){var t=Object(N.b)({click:function(e){console.log(e.latlng)},zoom:function(n){e.onZoomCenterChange({zoom:t.getZoom(),center:t.getCenter(),preventPan:!0}),console.log(n.target._zoom)},drag:function(){t.panInsideBounds(e.mapBounds,{animate:!1}),e.onZoomCenterChange({zoom:t.getZoom(),center:t.getCenter(),preventPan:!0})},locationfound:function(e){console.log("location found:",e)}});return null}n(31);var _=function(e){return e.open?Object(O.jsx)("div",{className:"dialog-container",onClick:e.onClose,children:Object(O.jsxs)("div",{className:"dialog",onClick:function(e){"A"!==e.target.tagName&&e.preventDefault(),e.stopPropagation()},children:[Object(O.jsx)("div",{className:"dialog-header",children:"Information"}),Object(O.jsx)("div",{className:"dialog-subheader",children:"About"}),Object(O.jsxs)("div",{children:["This map contains information about the thralls added by the\xa0",Object(O.jsx)("a",{target:"_blank",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1326031593",rel:"noreferrer",children:"Thrall Wars Dungeon Mod"}),".",Object(O.jsx)("br",{}),"Check out the mod page for more information!",Object(O.jsx)("br",{}),"You can find the source code over on ",Object(O.jsx)("a",{target:"_blank",href:"https://github.com/Nia292/tw-map",rel:"noreferrer",children:"GitHub"}),"."]}),Object(O.jsx)("div",{className:"dialog-subheader",children:"Privacy"}),Object(O.jsxs)("div",{children:["This site does not track your information. ",Object(O.jsx)("br",{}),"This site does not use cookies. ",Object(O.jsx)("br",{}),"This site does not store data on your local device aside from normal browser caching. ",Object(O.jsx)("br",{}),"Site provided by\xa0",Object(O.jsx)("a",{target:"_blank",href:"https://pages.github.com/",rel:"noreferrer",children:"GitHub pages"}),". Check out\xa0",Object(O.jsx)("a",{target:"_blank",href:"https://docs.github.com/en/github/site-policy/github-privacy-statement",rel:"noreferrer",children:"GitHub's privacy statement"}),"\xa0to find out what data GitHub collects."]}),Object(O.jsx)("div",{className:"dialog-subheader",children:"Contributing"}),Object(O.jsx)("div",{children:"This map is far from completed. Head over to GitHub to find out how to contribute data!"}),Object(O.jsx)("div",{className:"dialog-subheader",children:"More"}),Object(O.jsxs)("div",{children:["There is also the ",Object(O.jsx)("a",{target:"_blank",href:"https://nia292.github.io/tw-dice-calc/index.html",rel:"noreferrer",children:"TW Dice Calculator"})," to plan your RP characters!"]}),Object(O.jsx)("div",{className:"dialog-subheader",children:"Credits"}),Object(O.jsx)("div",{children:"Japata for helping me with the locations and general thrall information. \ud83d\udc0d"})]})}):Object(O.jsx)(a.a.Fragment,{})},M=n(9),E=n(5),A=(n(32),function(e){function t(t,n){if(""!==t){var o=Number.parseInt(t,10);e.onOffsetChange(Object(E.a)(Object(E.a)({},e.offset),{},Object(M.a)({},n,o)))}}return e.open?Object(O.jsx)("div",{className:"dialog-container",onClick:e.onClose,children:Object(O.jsxs)("div",{className:"dialog",onClick:function(e){"A"!==e.target.tagName&&e.preventDefault(),e.stopPropagation()},children:[Object(O.jsx)("div",{className:"dialog-header",children:"Settings"}),Object(O.jsx)("div",{className:"dialog-subheader",children:"Map Offsets"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Used to correct initial reading errors."}),Object(O.jsxs)("div",{className:"settings-input",children:[Object(O.jsx)("label",{htmlFor:"offset-top",children:"Offset Top"}),Object(O.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetTop")},value:e.offset.offsetTop})]}),Object(O.jsxs)("div",{className:"settings-input",children:[Object(O.jsx)("label",{htmlFor:"offset-top",children:"Offset Bottom"}),Object(O.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetBot")},value:e.offset.offsetBot})]}),Object(O.jsxs)("div",{className:"settings-input",children:[Object(O.jsx)("label",{htmlFor:"offset-top",children:"Offset Left"}),Object(O.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetLeft")},value:e.offset.offsetLeft})]}),Object(O.jsxs)("div",{className:"settings-input",children:[Object(O.jsx)("label",{htmlFor:"offset-top",children:"Offset Right"}),Object(O.jsx)("input",{id:"offset-top",type:"number",onChange:function(e){return t(e.target.value,"offsetRight")},value:e.offset.offsetRight})]})]})]})}):Object(O.jsx)(a.a.Fragment,{})}),B={lat:0,lng:0};function D(e){var t=Object(c.useState)(void 0),n=Object(h.a)(t,2),o=n[0],a=n[1],i=Object(c.useState)(!1),l=Object(h.a)(i,2),s=l[0],r=l[1],d=Object(c.useState)(void 0),j=Object(h.a)(d,2),p=j[0],g=j[1],v=Object(c.useState)(!1),x=Object(h.a)(v,2),S=x[0],N=x[1],w=Object(c.useState)(!1),k=Object(h.a)(w,2),L=k[0],M=k[1],E=Object(c.useState)(!1),D=Object(h.a)(E,2),F=D[0],H=D[1],P=Object(c.useState)({offsetTop:-2600,offsetBot:500,offsetLeft:250,offsetRight:0}),I=Object(h.a)(P,2),Z=I[0],G=I[1];var q=(null===p||void 0===p?void 0:p.center)?p.center:B,K=(null===p||void 0===p?void 0:p.zoom)?p.zoom:-8.7,J=function(e,t,n,o,c){var a=new m.LatLng(e-c.offsetBot,t-c.offsetLeft),i=new m.LatLng(n-c.offsetTop,o-c.offsetRight);return new m.LatLngBounds(a,i)}(-369398,-342934,444603,475140,Z);return Object(O.jsxs)("div",{className:"thrall-map-wrapper",children:[Object(O.jsx)("div",{id:"info-button",className:"display-in-center",onClick:function(){return N(!0)},children:Object(O.jsx)("span",{className:"material-icons",style:{fontSize:"18pt"},children:"help_outline"})}),Object(O.jsx)("div",{id:"settings-button",className:"display-in-center",onClick:function(){return M(!0)},children:Object(O.jsx)("span",{className:"material-icons",style:{fontSize:"18pt"},children:"settings"})}),Object(O.jsxs)("div",{id:"hq-checkbox-wrapper",className:"display-in-center",children:[Object(O.jsx)("input",{id:"hq-checkbox",type:"checkbox",checked:F,onClick:function(e){var t=e.target;H(t.checked)}}),Object(O.jsx)("label",{htmlFor:"hq-checkbox",children:"HQ Map (11mb)"})]}),Object(O.jsx)(_,{open:S,onClose:function(){return N(!1)}}),Object(O.jsx)(A,{open:L,offset:Z,onOffsetChange:G,onClose:function(){return M(!1)}}),Object(O.jsxs)(u.a,{center:q,style:{height:"100vh",width:"calc(100vw - var(--sidebar-width))"},minZoom:-8.7,maxZoom:-4,zoomSnap:.1,zoomDelta:.1,crs:m.CRS.Simple,maxBounds:J,zoomControl:!1,zoom:K,children:[Object(O.jsx)(f.a,{}),!F&&Object(O.jsx)(b.a,{url:"/tw-map/fc_assets/full_map_low_quality.jpg",bounds:J}),F&&Object(O.jsx)(b.a,{url:"/tw-map/fc_assets/full_map_hq.jpg",bounds:J}),Object(O.jsx)(z,{mapBounds:J,onZoomCenterChange:g}),Object(O.jsx)(T,{location:p}),Object(O.jsx)(R,{thrall:o,focused:s})]}),Object(O.jsx)("div",{className:"sidebar-right",children:Object(O.jsx)(C,{thralls:e.data,onSelectLocation:function(e){g({center:y(e),zoom:-7})},selectedThrallFocused:s,selectedThrall:o,onDeselectThrall:function(){r(!1),g({zoom:-8.7,center:B})},onSelectThrall:function(e){var t=function(e){if(e.length<=0)return null;if(e.length<=1)return y(e[0]);if(e.length<=2){var t=e.map((function(e){return y(e)}));return new m.Polyline(t).getBounds().getCenter()}var n=e.map((function(e){return y(e)}));return new m.Polygon(n).getBounds().getCenter()}(e.locations);t&&g({zoom:-8,center:t}),a(e),r(!0)}})})]})}var F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={data:[]},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(window.location.href+"/data.json").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(D,{data:this.state.data})})}}]),n}(a.a.Component);l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.72293f6c.chunk.js.map