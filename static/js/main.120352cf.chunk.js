(this["webpackJsonpmbx-devour"]=this["webpackJsonpmbx-devour"]||[]).push([[0],{14:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),i=o(5),s=o.n(i),c=(o(11),o(4),o(3)),l=o.n(c),r=o(6),d=o(1);l.a.accessToken="pk.eyJ1IjoiY2FzZXltbWlsZXIiLCJhIjoiY2lpeHY1bnJ1MDAyOHVkbHpucnB1dGRmbyJ9.TzUoCLwyeDoLjh3tkDSD4w";class p extends n.a.PureComponent{constructor(t){super(t),this.state={lng:-98.78320225360663,lat:40.45646421496375,zoom:3.5},this.mapContainer=n.a.createRef()}componentDidMount(){const{lng:t,lat:e,zoom:o}=this.state,a=new l.a.Map({container:this.mapContainer.current,style:"mapbox://styles/caseymmiler/cktf3jdcs2ws819qttibvokom",center:[t,e],zoom:o}),n=window.location.search.slice(1).split("&").map((t=>t.split("="))).reduce(((t,[e,o])=>({...t,[e]:o})),{});console.log(n),async function(){const t=await fetch(n.url),e=await t.json();a.on("load",(()=>{a.addSource("data",{type:"geojson",data:e}),a.addLayer({id:"data",type:"fill",source:"data",layout:{},paint:{"fill-color":`#${n.fill}`,"fill-opacity":parseFloat(n["fill-opacity"])}}),a.addLayer({id:"outline",type:"line",source:"data",layout:{},paint:{"line-color":`#${n.fill}`,"line-width":2}});const t=r.bbox(e);a.fitBounds(t,{padding:100,duration:0})}))}()}render(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{ref:this.mapContainer,className:"map-container"})})}}s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},4:function(t,e,o){}},[[14,1,2]]]);
//# sourceMappingURL=main.120352cf.chunk.js.map