(this["webpackJsonphistogram-chart"]=this["webpackJsonphistogram-chart"]||[]).push([[0],{82:function(t,e,a){t.exports=a(92)},87:function(t,e,a){},88:function(t,e,a){},90:function(t,e,a){},91:function(t,e,a){},92:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(21),l=a.n(c);a(87),a(88);var s=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Histogram Component (React and D3)"))};var o=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"To learn more, check out the ",r.a.createElement("a",{href:"https://github.com/bbatjargal/histogram-chart",target:"blank"},"Histogram Component"),"."))},i=a(6),u=a(22),h=a(23),d=a(1),p=a(24),m=(a(90),a(91),10),f=55,b=70,g=10,x=800-b-g,v=500-m-f,E="Values",w="Keys",j=function(){function t(e,a){Object(u.a)(this,t),a.width&&(x=a.width-b-g),a.height&&(v=a.height-b-g),a.xlabel&&(w=a.xlabel),a.ylabel&&(E=a.ylabel);var n=d.g(e).append("svg").attr("width",x+b+g).attr("height",v+m+f).append("g").attr("transform","translate(".concat(b,", ").concat(m,")")),r=Object.entries(a.data),c=d.f().domain([.95*d.d(r,(function(t){return t[1]})),d.c(r,(function(t){return t[1]}))]).range([v,0]),l=d.e().domain(r.map((function(t){return t[0]}))).range([0,x]).padding(.4),s=d.a(l);n.append("g").attr("transform","translate(0, ".concat(v,")")).attr("class","text-axis").call(s);var o=d.b(c);n.append("g").attr("class","text-axis").call(o),n.append("text").attr("class","chart-label").attr("x",x/2).attr("y",v+50).attr("text-anchor","middle").text(w),n.append("text").attr("class","chart-label").attr("x",-v/2).attr("y",-50).attr("text-anchor","middle").attr("transform","rotate(-90)").text(E);var i=Object(p.a)().attr("class","d3-tip").html((function(t){var e=t.srcElement.__data__;return'<span class="tooltip-text">'.concat(e[0],':</span> <span class="tooltip-text">').concat(e[1],"</span>")}));n.call(i),n.selectAll("rect").data(r).enter().append("rect").attr("class","bar").attr("x",(function(t,e){return l(t[0])})).attr("y",(function(t){return c(t[1])})).attr("width",l.bandwidth).attr("height",(function(t){return v-c(t[1])})).attr("fill","steelblue").on("mouseover",i.show).on("mouseout",i.hide).on("click",(function(){d.g(this).classed("bar-selected",!d.g(this).classed("bar-selected"))}))}return Object(h.a)(t,[{key:"update",value:function(){}}]),t}(),y=function(t){var e=Object(n.useRef)(null),a=Object(n.useState)(null),c=Object(i.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){l?l.update():s(new j(e.current,t))}),[l,t]),r.a.createElement("div",{className:"chart-area",ref:e})},O={apples:100,oranges:50,pears:150,banana:75};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(y,{data:O,ylabel:"Counts",xlabel:"Fruits",width:"800",height:"500"}),r.a.createElement(o,null))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.7dfc9077.chunk.js.map