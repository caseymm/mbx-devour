(this["webpackJsonpmbx-devour"]=this["webpackJsonpmbx-devour"]||[]).push([[0],{14:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(5),s=o.n(i),c=(o(11),o(4),o(3)),l=o.n(c),d=o(6),r=o(1);l.a.accessToken="pk.eyJ1IjoiY2FzZXltbWlsZXIiLCJhIjoiY2lpeHY1bnJ1MDAyOHVkbHpucnB1dGRmbyJ9.TzUoCLwyeDoLjh3tkDSD4w";class p extends a.a.PureComponent{constructor(e){super(e),this.state={lng:-98.78320225360663,lat:40.45646421496375,zoom:3.5},this.mapContainer=a.a.createRef()}componentDidMount(){const{lng:e,lat:t,zoom:o}=this.state,n=new l.a.Map({container:this.mapContainer.current,style:"mapbox://styles/caseymmiler/cktf3jdcs2ws819qttibvokom",center:[e,t],zoom:o}),a=window.location.search.slice(1).split("&").map((e=>e.split("="))).reduce(((e,[t,o])=>({...e,[t]:o})),{});console.log(a),async function(){const e=await fetch(a.url),t=await e.json();console.log(t),n.on("load",(()=>{n.addSource("data",{type:"geojson",data:t}),n.addLayer({id:"data",type:"fill",source:"data",layout:{},paint:{"fill-color":`#${a.fill}`,"fill-opacity":parseFloat(a["fill-opacity"])}}),n.addLayer({id:"outline",type:"line",source:"data",layout:{},paint:{"line-color":`#${a.fill}`,"line-width":2}});const e=d.bbox(t);n.fitBounds(e,{padding:100,duration:0})}),(()=>{console.log("loaded");const e=document.createElement("div");e.id="hidden",document.getElementsByClassName("map-container")[0].appendChild(e)})())}()}render(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{ref:this.mapContainer,className:"map-container"})})}}s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))},4:function(e,t,o){}},[[14,1,2]]]);
//# sourceMappingURL=main.ea7544d2.chunk.js.map