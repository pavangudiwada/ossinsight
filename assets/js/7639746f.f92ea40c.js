"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2374,486],{6068:(e,t,n)=>{n.d(t,{vz:()=>r,A3:()=>Z,if:()=>v,uc:()=>c,y:()=>C});var a=n(67294),o=n(60338);function r(e){let{seriesName:t="Count",data:n,loading:r=!1,clear:l=!1,size:i,n:c,deps:s=[],categoryIndex:u,valueIndex:d,type:m="repo"}=e;i="lang"===m?48:i;const g=(0,a.useMemo)((()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:(l?0:8)+("owner"===m?24:0),top:l?0:16,bottom:l?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:n.map((e=>e[u])),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){switch(m){case"repo":default:return e;case"owner":case"lang":return`${e} {${e.replace(/[+-[\]]/g,"_")}|}`}},rich:(()=>{switch(m){case"owner":return n.reduce(((e,t)=>{var n;return e[String(t[u]).replace(/[-[\]]/g,"_")]={backgroundColor:{image:(n=`${t[u]}`,n.includes("[bot]")?"https://github.com/github.png":`https://github.com/${n}.png`)},width:24,height:24},e}),{});case"lang":return n.reduce(((e,t)=>(e[String(t[u]).replace(/\+/g,"_")]={backgroundColor:{image:`/img/lang/${t[u]}.png`},width:48,height:48},e)),{})}})()}},series:[{name:t,data:n.map((e=>e[d])),type:"bar",barWidth:l?i/2:i}]})),[n,...s,u,d,i,l]),h=(0,a.useMemo)((()=>r?400:Math.max(Math.min(c,n.length),5)*(i*(l?1:1.5))),[i,r,l]),p=(0,a.useMemo)((()=>({click:e=>{("repo"===m&&"name"in e||"owner"===m&&"name"in e)&&window.open(`https://github.com/${e.name}`)}})),[]);return a.createElement(o.ZP,{height:h,showLoading:r,option:g,notMerge:!1,lazyUpdate:!0,style:{marginBottom:16,borderRadius:"var(--ifm-global-radius)"},onEvents:p})}var l=n(55673),i=n(61802);function c(e){let{seriesName:t,loading:n,data:r,compareData:c,categoryIndex:s,valueIndex:u,deps:d=[]}=e;const m=function(e){return(0,a.useMemo)((()=>({type:"pie",radius:["35%","65%"],avoidLabelOverlap:!1,itemStyle:{borderColor:e?"#1e1e1f":"#ffffff",borderWidth:0},label:{show:!1,position:"center",formatter:"{b}: {d}%"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold",formatter:"{b}\n\n{c}"}},labelLine:{show:!1}})),[e])}((0,l.e)()),g=(0,a.useMemo)((()=>{const e=[],n={...m,name:t,data:r.map((e=>{const t=e[s];return{value:e[u],name:t}}))};if(e.push(n),(0,i.nf)(c)){n.center=["25%","55%"];const a={...m,name:t,center:["65%","55%"],data:c.map((e=>{const t=e[s];return{value:e[u],name:t}}))};e.push(a)}return e}),[m,r,c,...d,s,u]),h=(0,a.useMemo)((()=>({tooltip:Object.assign({trigger:"item"}),legend:{type:"scroll",orient:"vertical",right:"20px",top:20,bottom:20,x:"right",formatter:"{name}"},series:g,grid:{left:16,top:16,bottom:16,right:16,containLabel:!0}})),[g]);return a.createElement(o.ZP,{aspectRatio:16/9,showLoading:n,option:h,notMerge:!1,lazyUpdate:!0})}var s=n(91262),u=n(58316),d=n(53442),m=n(62097),g=n(61225),h=n(61953),p=n(55343),f=n(31538);const E=[];for(let A=-12;A<=13;A++)E.push(A);const y=["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],b=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];function v(e){let{loading:t,data:n,xAxisColumnName:r,yAxisColumnName:l,valueColumnName:i,deps:c}=e;const v=(0,m.Z)(),x=(0,g.Z)(v.breakpoints.down("sm")),[w,S]=(0,a.useState)(0),Z=(0,a.useCallback)((e=>{S(e.target.value)}),[S]),{data:I,min:C,max:A}=(0,a.useMemo)((()=>{let e=Number.MAX_VALUE,t=Number.MIN_VALUE;const a=n.map((n=>{const a=Number(n[i]);return a>t&&(t=a),a<e&&(e=a),[(n[r]+w+24)%24,n[l],a]}));return{data:a,min:e,max:t}}),[n,w,x]),k=(0,a.useMemo)((()=>({tooltip:{show:!0},grid:x?{top:"0",bottom:"0",left:"0",right:"0",containLabel:!0}:{top:"0",bottom:"16%",left:"0",right:"0",containLabel:!0},xAxis:{type:"category",data:y,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},inverse:!1},yAxis:{type:"category",data:b,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold",rotate:0,fontSize:x?8:void 0},position:"top"},visualMap:{show:!x,min:C,max:A,orient:x?void 0:"horizontal",left:"center",bottom:0},series:{type:"heatmap",data:I,label:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}})),[I,x,...c]);return a.createElement(s.Z,null,(()=>a.createElement(h.Z,null,a.createElement(h.Z,{sx:{minWidth:120,mb:1}},a.createElement(p.Z,{size:"small"},a.createElement(u.Z,{id:"zone-select-label"},"Timezone (UTC)"),a.createElement(d.Z,{labelId:"zone-select-label",id:"zone-select",value:w,label:"Timezone (UTC)",onChange:Z,sx:{minWidth:120},variant:"standard"},E.map((e=>a.createElement(f.Z,{key:e,value:e},e>0?`+${e}`:e)))))),a.createElement(o.ZP,{aspectRatio:2.4,showLoading:t,option:k,notMerge:!1,lazyUpdate:!0}))))}var x=n(14850),w=n(34673),S=n(91655);function Z(e){let{sql:t,children:n}=e;return a.createElement(a.Fragment,null,a.createElement(w.Z,{summary:a.createElement("summary",null,"Click here to expand SQL")},(e=>{let t;return t=e?a.createElement(x.Z,{className:"language-sql"},e):a.createElement(h.Z,{sx:{pt:.5}},a.createElement(S.Z,{width:"80%"}),a.createElement(S.Z,{width:"50%"}),a.createElement(S.Z,{width:"70%"})),t})(t)),n)}var I=n(30454);function C(e){void 0===e&&(e=!0);const t="#E9EAEE",n="#2c2c2c",a="#3c3c3c",o=function(){return{axisLine:{lineStyle:{color:a}},axisTick:{lineStyle:{color:a}},axisLabel:{color:"#ccc"},splitLine:{lineStyle:{type:"dashed",color:"#2c2c2c",width:.5}},splitArea:{areaStyle:{color:t}},axisPointer:{label:{backgroundColor:n}},nameTextStyle:{fontStyle:"italic",color:"gray"}}},r=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],l={color:r,backgroundColor:"rgba(24, 25, 26)",tooltip:{backgroundColor:n,textStyle:{color:t},borderWidth:0,shadowBlur:8,shadowColor:"rgba(0, 0, 0, 0.618)",shadowOffsetX:0,shadowOffsetY:0,axisPointer:{lineStyle:{color:t},crossStyle:{color:t}},renderMode:"html"},grid:{containLabel:!0},legend:{textStyle:{color:t}},textStyle:{color:t},title:{left:"center",top:8,textStyle:{color:t,fontSize:14,align:"center"}},toolbox:{iconStyle:{borderColor:t}},dataZoom:{textStyle:{color:t}},timeline:{lineStyle:{color:t},itemStyle:{color:r[1]},label:{color:t},controlStyle:{color:t,borderColor:t}},timeAxis:o(),logAxis:o(),valueAxis:o(),categoryAxis:o(),line:{symbol:"circle"},graph:{color:r},gauge:{title:{textStyle:{color:t}}},candlestick:{itemStyle:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}},visualMap:{textStyle:{color:t}}};l.categoryAxis.splitLine.show=!1,(0,I.aW)("dark",l)}},74601:(e,t,n)=>{n.d(t,{O:()=>l,S:()=>r});var a=n(61802);let o;function r(e){o=e}function l(){if((0,a.Rw)(o))throw new Error("out of analyze chart context!");return o}},37031:(e,t,n)=>{n.d(t,{dC:()=>o,gx:()=>u,pW:()=>r,up:()=>c,wN:()=>l,yv:()=>i});var a=n(26667);const o="original",r="comparing";function l(e,t){return s(o,e,t)}function i(e,t){return s(r,e,t)}function c(e){return(0,a.XK)((t=>{let{datasetId:n,data:a}=t;return[s(n,a,e)]}))}function s(e,t,n){var a;const o=(null==t||null==(a=t.data)?void 0:a.data)??[];return{id:e,source:null!=n?n(o):o}}function u(e,t,n){return void 0===e&&(e=o),void 0===n&&(n=void 0),{id:e,source:t,dimensions:n}}},75559:(e,t,n)=>{n.d(t,{pW:()=>o.pW,n4:()=>C,Kb:()=>r,rs:()=>i,AH:()=>v,yv:()=>o.yv,vy:()=>M,gx:()=>o.gx,bh:()=>S,Sd:()=>c,BZ:()=>A,CI:()=>F,j3:()=>L,jv:()=>l,JJ:()=>x,wN:()=>o.wN,e5:()=>s,up:()=>o.up,BE:()=>I,TN:()=>N,wq:()=>G,P6:()=>a,E7:()=>b,Gn:()=>T,Mm:()=>P});var a={};n.r(a),n.d(a,{adjustAxis:()=>$,aggregate:()=>k.m_,debugPrintOption:()=>k.bR,min:()=>k.VV,simple:()=>k.lC,template:()=>k.XK});var o=n(37031);function r(e,t,n){return void 0===n&&(n={}),{name:String(t),datasetId:o.dC,...n,type:"bar",encode:{x:e,y:t,...n.encode}}}function l(e,t,n){return void 0===n&&(n={}),{name:String(t),datasetId:o.dC,showSymbol:!1,...n,type:"line",encode:{x:e,y:t,...n.encode}}}function i(e,t,n){return void 0===n&&(n={}),{datasetId:o.dC,...n,type:"boxplot",encode:{x:e,y:t,tooltip:t,...n.encode}}}function c(e,t,n,a){return void 0===a&&(a={}),{datasetId:o.dC,emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},...a,type:"heatmap",encode:{x:e,y:t,value:n,...a.encode}}}function s(e,t,n,a){void 0===a&&(a={});const o={coordinateSystem:"geo",encode:{lng:1,lat:2,value:3,tooltip:[0,3],itemId:0},symbolSize:e=>1+64*Math.sqrt(e[3]/n),...a};return[{type:"effectScatter",datasetId:`${e}_top_${t}`,...o},{type:"scatter",datasetId:`${e}_rest`,...o}]}var u=n(9996),d=n.n(u),m=n(31486),g=n.n(m),h=n(74601);function p(){const{isSmall:e}=(0,h.O)();return e}var f=n(30120),E=n(61802);function y(e,t){return t.includes(e)?e:void 0}function b(e,t){void 0===t&&(t={});const n=p();return d()(t,{id:e,type:"value",axisLabel:{formatter:e=>g()(e),margin:8},splitNumber:n?3:void 0,axisPointer:{label:{precision:0}},nameTextStyle:{opacity:n?0:1,align:y(t.position??"left",["left","right"])}})}function v(e,t){return void 0===t&&(t={}),d()(t,{id:e,type:"category",nameTextStyle:{align:y(t.position??"left",["left","right"])}})}function x(e,t){void 0===t&&(t={});const n=p();return d()(t,{id:e,type:"log",nameTextStyle:{opacity:n?0:1,align:y(t.position??"left",["left","right"])},splitNumber:n?3:void 0,axisLabel:{margin:8}})}const w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=e=>{const t=new Date(e);return`${w[t.getMonth()]} ${t.getFullYear()}`},Z=new Date;function I(e,t,n){return void 0===t&&(t={}),void 0===n&&(n="event_month"),d()(t,{id:e,type:"time",axisPointer:{label:{formatter:e=>{let{value:t}=e;return S(t)}}},min:(0,E.N6)(n)?!0===n?void 0:f.ou.fromISO(k.VV(n)).minus({month:1}).toJSDate():new Date(2011,0,1,0,0,0,0),max:f.ou.fromJSDate(new Date(Z.getFullYear(),Z.getMonth(),1,0,0,0,0)).plus({month:1}).toJSDate(),minInterval:24192e5})}function C(e,t){return void 0===t&&(t={}),{...t,show:!0,trigger:"axis",axisPointer:{...t.axisPointer,type:e}}}function A(e){return void 0===e&&(e={}),{renderMode:"html",...e,show:!0,trigger:"item"}}var k=n(26667);function N(e,t){void 0===t&&(t={});const{context:n,isSmall:a,comparingRepoName:o}=(0,h.O)();if(a)return;if((0,E.N6)(n.layout)||!o)return e?[{...t,text:e}]:[];const{layout:r,layoutTop:l,layoutSubGridHeight:i,layoutGap:c}=n;return"top-bottom"===r?(0,k.XK)(((e,t)=>{let{name:n}=e;return{text:n,textStyle:{fontWeight:"normal",color:"gray"},left:"center",top:l+(i+c)*t-24}})).concat(e?[{...t,text:e}]:[]):(0,k.XK)(((e,t)=>{let{name:n}=e;return{text:n,textStyle:{fontWeight:"normal",color:"gray"},left:25+50*t+"%",top:8}})).concat(e?{...t,text:e}:[])}function M(e){return void 0===e&&(e=void 0),p()?{show:!1}:{show:!0,left:8,right:8,realtime:!0,xAxisId:(0,k.XK)((e=>{let{id:t}=e;return t})),...e}}function P(){return{roam:!1,map:"world",silent:!0,zoom:1.7,top:"35%",projection:{project:e=>[e[0]/180*Math.PI,-Math.log(Math.tan((Math.PI/2+e[1]/180*Math.PI)/2))],unproject:e=>[180*e[0]/Math.PI,360/Math.PI*Math.atan(Math.exp(e[1]))-90]},itemStyle:{color:"#ccc",borderWidth:1,borderColor:"#ccc"}}}function L(e){return void 0===e&&(e={}),p()?{left:"center",padding:[0,32],top:0,type:"scroll",...e,orient:"horizontal"}:{left:8,top:8,...e,show:!0}}function T(e,t){return{show:!p(),min:0,max:t,orient:"horizontal",left:"center",bottom:8}}function R(e,t){void 0===t&&(t={});const n=p();return{top:n?32:64,bottom:n?8:48,left:n?0:8,right:n?0:8,...t,id:e}}function G(){const{context:e,height:t,isSmall:n,comparingRepoName:a}=(0,h.O)();if(a){const a=32,o=n?32:64,r=n?8:48,l=(t-o-r-a)/2,i=r+l+a,c=o+l+a;return e.layout="top-bottom",e.layoutTop=o,e.layoutSubGridHeight=l,e.layoutGap=a,[R("main",{top:o,bottom:i}),R("vs",{top:c,bottom:r})]}return R("main")}function F(){const{context:e,comparingRepoName:t}=(0,h.O)();return t?(e.layout="left-right",[R("main",{left:"8",right:"52%",top:"64",bottom:"48"}),R("vs",{left:"52%",right:"8",top:"64",bottom:"48"})]):R("main")}var D=n(51252);function $(e,t){if(0===e.length)return t.map((()=>({min:0,max:0})));const n=t.map((t=>function(e,t){if(0!==e.length)return e.reduce(((e,n)=>{const a=[...e];for(const o of t){const e=n[o];a[0]=Math.min(e,a[0]),a[1]=Math.max(e,a[1])}return a}),[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER])}(e,t))),a=n.reduce(((e,t)=>e||(0,E.nf)(t)&&t[1]>=0),!1),o=n.reduce(((e,t)=>e||(0,E.nf)(t)&&t[0]<=0),!1);if(!a||!o)return t.map((()=>({min:0,max:0})));let r=1/0;const l=[];for(const i of n)if((0,E.nf)(i)){const[e,t]=i;l.push(r);const n=Math.min(Math.abs(r-1));Math.max(t/-e-1)<n&&(r=t/-e)}else l.push(void 0);return n.map((e=>{if(e){const[t,n]=e;return{min:(0,D.r)(Math.min(t,-n/r)),max:(0,D.r)(Math.max(n,-t*r))}}return{min:0,max:0}}))}},26667:(e,t,n)=>{n.d(t,{VV:()=>s,XK:()=>l,bR:()=>u,lC:()=>i,m_:()=>c});var a=n(74601),o=n(37031),r=n(61802);function l(e){const{repoName:t,comparingRepoName:n,repoInfo:r,comparingRepoInfo:l,data:i,compareData:c,context:s}=(0,a.O)();let u=[];return u=u.concat(e({id:"main",datasetId:o.dC,repoInfo:r,data:i,name:t,context:s},0)),n&&(u=u.concat(e({id:"vs",datasetId:o.pW,repoInfo:l,data:c,name:n,context:s},1))),u}function i(e,t){const{comparingRepoName:n}=(0,a.O)();return n?t:e}function c(e){const{data:t,repoName:n,compareData:o,comparingRepoName:l}=(0,a.O)(),i=[],c=[];return(0,r.nf)(t)&&(i.push(t),c.push(n)),(0,r.nf)(o)&&(i.push(o),c.push(l)),e(i,c)}function s(e){const t=c((t=>t.flatMap((t=>{var n,a,o;return(null==(n=t.data)||null==(a=n.data)||null==(o=a[0])?void 0:o[e])??[]}))));return t.length>=2?t[0]<t[1]?t[0]:t[1]:1===t.length?t[0]:void 0}function u(){const{context:e}=(0,a.O)();e.DEBUG_PRINT_OPTION=!0}},51252:(e,t,n)=>{function a(e){if(0===e)return 0;const t=Math.sign(e),n=Math.abs(e);let a=1;for(;n>a;)a*=10;return a/=20,(Math.floor(n/a)+1)*a*t}n.d(t,{r:()=>a})},4882:(e,t,n)=>{n.d(t,{P:()=>c,c:()=>s});var a=n(67294),o=n(68971),r=n(8100),l=n(26432),i=n(90031);function c(e){const[t,n]=(0,a.useState)(e),[o,r]=(0,a.useState)(!1),[i,c]=(0,a.useState)(),s=(0,l.Z)((function(e,t){void 0===t&&(t=!1),t&&n(void 0),r(!0),c(void 0),e.then(n,c).finally((()=>{r(!1)}))})),u=(0,l.Z)((()=>{n(void 0),r(!1),c(i)}));return{data:t,loading:o,error:i,setAsyncData:s,clearState:u}}function s(e,t,n){void 0===n&&(n=!1);const{isAuthenticated:c,login:s,getAccessTokenSilently:u}=(0,i.g)(),d=(0,o.Pd)(),[m,g]=(0,a.useState)(!1),[h,p]=(0,a.useState)(),[f,E]=(0,a.useState)(),y=(0,a.useRef)(e),b=(0,a.useRef)(t),v=(0,a.useRef)(!1);(0,a.useEffect)((()=>{y.current=e,b.current=t,g(!1),p(void 0),E(void 0),v.current=!1}),[t,(0,r.wE)([e])]);const x=(0,l.Z)((async()=>{if(n&&!c)return void await s();if(v.current)return;const e=await u();g(!0),E(void 0),p(void 0),v.current=!0,b.current({...y.current,accessToken:e}).then(d(E)).catch(d(p)).finally(d((()=>{g(!1),v.current=!1})))})),w=(0,l.Z)((()=>{E(void 0),g(!1),p(void 0)})),S=(0,l.Z)((e=>{E(e),g(!1),p(void 0)}));return{data:f,loading:m,error:h,run:x,clear:w,setData:S}}},2108:(e,t,n)=>{n.d(t,{ON:()=>l,Rc:()=>i,ZP:()=>r,io:()=>c});var a=n(67294),o=n(61802);const r="undefined"==typeof window?function(e,t){let{defaultValue:n}=t;return[...(0,a.useState)(n)]}:function(e,t,n){let{defaultValue:r,deserialize:l,serialize:i}=t;void 0===n&&(n=!1);const c=(0,a.useMemo)((()=>{const t=new URLSearchParams(location.search).get(e);return(0,o.nf)(t)?l(t):r}),[]),[s,u]=(0,a.useState)(c),d=(0,a.useRef)(!0),m=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{d.current=!1}),[]),(0,a.useEffect)((()=>{if(m.current)return void(m.current=!1);const t=i(s),a=new URLSearchParams(location.search);if((0,o.Rw)(t)){if(!a.has(e))return;a.delete(e)}else{if(a.get(e)===t)return;a.set(e,t)}const r=a.toString(),l=r?`?${r}`:"",c=location.hash?`${location.hash}`:"",u=location.pathname+l+c;n?window.history.pushState(null,"",u):window.history.replaceState(null,"",u)}),[s]),(0,a.useEffect)((()=>{const t=()=>{m.current=!0;const t=new URLSearchParams(location.search).get(e);d.current=!0,(0,o.nf)(t)?u(l(t)):u(r),setTimeout((()=>{d.current=!1}),0)};return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)}),[]),[s,u]};function l(e){return{defaultValue:e,serialize:e=>e,deserialize:e=>e}}function i(e){return{defaultValue:e,serialize:e=>(0,o.GC)(e)?e:void 0,deserialize:e=>(0,o.GC)(e)?e:void 0}}function c(e){return void 0===e&&(e="true"),{defaultValue:()=>!1,serialize:t=>(0,o.N6)(t)?e:void 0,deserialize:t=>Boolean(t===e)}}},74446:(e,t,n)=>{n.d(t,{b:()=>i,$:()=>l});const a=JSON.parse('[{"code":"MQ","lat":14.60426,"long":-61.06697},{"code":"GH","lat":5.56454,"long":-0.22571},{"code":"HN","lat":14.97503281,"long":-86.26477051},{"code":"LB","lat":33.92541122,"long":35.89972687},{"code":"RW","lat":-1.94496,"long":30.06205},{"code":"FM","lat":6.91664,"long":158.14997},{"code":"MK","lat":41.60045624,"long":21.70089531},{"code":"TZ","lat":-6.18124,"long":35.74816},{"code":"MR","lat":20.25899506,"long":-10.3644371},{"code":"GN","lat":10.7226226,"long":-10.7083587},{"code":"BY","lat":53.89769,"long":27.54942},{"code":"IS","lat":64.92856598,"long":-18.96170044},{"code":"GF","lat":4.938,"long":-52.33505},{"code":"UZ","lat":41.31644,"long":69.29486},{"code":"GP","lat":15.99285,"long":-61.72753},{"code":"US","lat":38.89206,"long":-77.01991},{"code":"BG","lat":42.69649,"long":23.32601},{"code":"LK","lat":6.93197,"long":79.85775},{"code":"FR","lat":48.85689,"long":2.35085},{"code":"PS","lat":31.8261625,"long":35.2282841},{"code":"ML","lat":12.65225,"long":-7.9817},{"code":"WS","lat":-13.66897297,"long":-172.32202148},{"code":"FK","lat":-51.72731018,"long":-61.26863861},{"code":"LR","lat":6.31033,"long":-10.80674},{"code":"BW","lat":-22.18675232,"long":23.81494141},{"code":"TC","lat":21.44449997,"long":-71.14230347},{"code":"MM","lat":16.96751,"long":96.1631},{"code":"TJ","lat":38.57415,"long":68.78651},{"code":"MX","lat":19.43268,"long":-99.13421},{"code":"SE","lat":59.33279,"long":18.06449},{"code":"SA","lat":24.69497,"long":46.72413},{"code":"IN","lat":28.63243,"long":77.21879},{"code":"BV","lat":-54.4342041,"long":3.41025114},{"code":"TH","lat":13.75396,"long":100.50224},{"code":"EE","lat":59.44269,"long":24.7532},{"code":"HU","lat":47.49814,"long":19.04055},{"code":"GS","lat":-54.27415,"long":-36.51122},{"code":"TN","lat":36.80007,"long":10.18706},{"code":"AE","lat":24.48818,"long":54.35495},{"code":"VG","lat":18.4235363,"long":-64.62605286},{"code":"GI","lat":36.13584137,"long":-5.34924889},{"code":"NG","lat":9.06146,"long":7.50064},{"code":"GU","lat":13.42112923,"long":144.73971558},{"code":"MO","lat":22.19204,"long":113.55126},{"code":"BD","lat":23.93072701,"long":89.01164246},{"code":"TF","lat":-49.31373,"long":69.48754},{"code":"FO","lat":62.01017,"long":-6.77306},{"code":"MT","lat":35.93336487,"long":14.3810339},{"code":"PH","lat":14.58226,"long":120.9748},{"code":"XK","lat":42.66544,"long":21.16532},{"code":"KE","lat":-1.28579,"long":36.82003},{"code":"PN","lat":-24.37211418,"long":-128.31124878},{"code":"CA","lat":45.42042,"long":-75.69243},{"code":"LT","lat":55.33871841,"long":23.870924},{"code":"PF","lat":-17.53726,"long":-149.56603},{"code":"WF","lat":-13.29961205,"long":-176.17012024},{"code":"CR","lat":9.90958,"long":-84.05406},{"code":"TW","lat":25.03841,"long":121.5637},{"code":"SB","lat":-10.81599998,"long":166},{"code":"PY","lat":-25.3,"long":-57.63},{"code":"RS","lat":44.81507,"long":20.46048},{"code":"DJ","lat":11.60047,"long":43.15083},{"code":"ZW","lat":-19.00028038,"long":29.86876106},{"code":"AM","lat":40.17397,"long":44.50275},{"code":"UY","lat":-34.90556,"long":-56.18525},{"code":"SL","lat":8.61643982,"long":-13.19550037},{"code":"NF","lat":-29.0402,"long":167.95754},{"code":"OM","lat":20.56662178,"long":56.1579628},{"code":"CK","lat":-21.22330666,"long":-159.74055481},{"code":"RU","lat":55.75654,"long":37.61492},{"code":"AL","lat":41.11113358,"long":20.02745247},{"code":"TG","lat":8.51322651,"long":0.98009753},{"code":"KR","lat":37.55796,"long":127.50469},{"code":"AR","lat":-34.60903,"long":-58.37322},{"code":"VN","lat":21.02828,"long":105.85388},{"code":"BI","lat":-3.38227,"long":29.36358},{"code":"PW","lat":7.44190073,"long":134.54205322},{"code":"SM","lat":43.93813324,"long":12.46339321},{"code":"SK","lat":48.1464,"long":17.10688},{"code":"NP","lat":27.71202,"long":85.31295},{"code":"CM","lat":3.86177,"long":11.51875},{"code":"GD","lat":12.17886639,"long":-61.64693069},{"code":"AQ","lat":-80.46613,"long":21.34609},{"code":"KM","lat":-11.70379,"long":43.25519},{"code":"SR","lat":4.21692896,"long":-55.88921738},{"code":"UG","lat":0.31569,"long":32.57811},{"code":"ER","lat":15.39719963,"long":39.08718872},{"code":"BS","lat":25.04659,"long":-77.3766},{"code":"CL","lat":-33.44599,"long":-70.66706},{"code":"BZ","lat":17.22529221,"long":-88.66973877},{"code":"PG","lat":-9.46707,"long":147.19603},{"code":"NZ","lat":-46.16393,"long":169.87507},{"code":"GW","lat":12.11586285,"long":-14.74813652},{"code":"DZ","lat":28.21364594,"long":2.65472817},{"code":"LA","lat":17.96216,"long":102.61163},{"code":"CO","lat":4.60688,"long":-74.07184},{"code":"NU","lat":-19.03806496,"long":-169.83024597},{"code":"CX","lat":-10.49029064,"long":105.63275146},{"code":"VU","lat":-16.37668419,"long":167.5625},{"code":"VI","lat":17.75262451,"long":-64.73542023},{"code":"GG","lat":49.45633,"long":-2.57923},{"code":"NI","lat":12.13932,"long":-86.26096},{"code":"SX","lat":18.03039,"long":-63.04478},{"code":"ME","lat":42.43806,"long":19.26555},{"code":"BN","lat":4.88068,"long":114.92227},{"code":"GY","lat":6.8084,"long":-58.16138},{"code":"MA","lat":34.02199,"long":-6.83762},{"code":"BF","lat":12.37153,"long":-1.51992},{"code":"AO","lat":-8.81602,"long":13.23192},{"code":"TD","lat":15.36765289,"long":18.66758156},{"code":"AT","lat":47.06798,"long":15.48663},{"code":"TV","lat":-8.52047,"long":179.19958},{"code":"AX","lat":60.1785247,"long":19.9156105},{"code":"NC","lat":-21.31782341,"long":165.29858398},{"code":"JP","lat":35.68992615,"long":139.6917572},{"code":"BJ","lat":9.62411213,"long":2.33773875},{"code":"SO","lat":9.8333333,"long":49.1666667},{"code":"ET","lat":9.03314,"long":38.75008},{"code":"VC","lat":13.21725178,"long":-61.19344711},{"code":"BH","lat":26.23269,"long":50.57811},{"code":"ST","lat":0.27555528,"long":6.63162804},{"code":"ID","lat":-6.17476,"long":106.82707},{"code":"SY","lat":33.50198,"long":36.29805},{"code":"SN","lat":14.36251163,"long":-14.53164387},{"code":"MV","lat":4.18588495,"long":73.53071594},{"code":"DM","lat":15.39910603,"long":-61.33945847},{"code":"IE","lat":53.3441,"long":-6.26749},{"code":"MD","lat":47.0242,"long":28.83183},{"code":"BT","lat":27.45759,"long":89.62302},{"code":"KP","lat":39.02138,"long":125.75275},{"code":"AF","lat":34.52184,"long":69.18067},{"code":"BO","lat":-16.71305466,"long":-64.66664886},{"code":"SH","lat":-15.92763,"long":-5.71556},{"code":"SJ","lat":71.04893494,"long":-8.19574738},{"code":"AN","lat":12.18907833,"long":-68.25680542},{"code":"ZA","lat":-25.74602,"long":28.18712},{"code":"NL","lat":52.37317,"long":4.89066},{"code":"NR","lat":-0.5316065,"long":166.93640137},{"code":"RO","lat":44.43558,"long":26.10222},{"code":"KN","lat":17.2444725,"long":-62.64318466},{"code":"LV","lat":56.94625,"long":24.10425},{"code":"YT","lat":-12.79636002,"long":45.14227295},{"code":"CH","lat":46.948,"long":7.44813},{"code":"JO","lat":31.27576256,"long":36.82838821},{"code":"KH","lat":12.57042313,"long":104.81391144},{"code":"CF","lat":6.57412338,"long":20.48692322},{"code":"UA","lat":50.44773,"long":30.54272},{"code":"DK","lat":55.67576,"long":12.56902},{"code":"CN","lat":39.93084,"long":116.38634},{"code":"PE","lat":-12.05798,"long":-77.03713},{"code":"PA","lat":8.9673,"long":-79.5339},{"code":"AZ","lat":40.143105,"long":47.576927},{"code":"AS","lat":-14.30065,"long":-170.71812},{"code":"SI","lat":46.12023926,"long":14.82066441},{"code":"BQ","lat":12.14887,"long":-68.27369},{"code":"CC","lat":-12.1409,"long":96.82352},{"code":"SZ","lat":-26.32608,"long":31.14608},{"code":"JM","lat":18.14344406,"long":-77.34654999},{"code":"AU","lat":-35.28078,"long":149.1314},{"code":"SS","lat":4.84364,"long":31.60336},{"code":"GE","lat":41.69363,"long":44.80162},{"code":"BR","lat":-18.45639,"long":-44.67345},{"code":"AI","lat":18.1954947,"long":-63.0750234},{"code":"ES","lat":40.41669,"long":-3.70035},{"code":"GA","lat":-0.8999695,"long":11.6899699},{"code":"MY","lat":2.5490005,"long":102.96261597},{"code":"BL","lat":17.89502,"long":-62.84932},{"code":"KI","lat":-2.81631565,"long":-171.66738892},{"code":"SC","lat":-4.62354,"long":55.45249},{"code":"MG","lat":-18.90848,"long":47.53751},{"code":"CZ","lat":50.08781,"long":14.42046},{"code":"EC","lat":-0.21495,"long":-78.5132},{"code":"DO","lat":18.47202,"long":-69.90203},{"code":"NO","lat":59.91382,"long":10.73874},{"code":"BB","lat":13.1127,"long":-59.61357},{"code":"BM","lat":32.30266953,"long":-64.7516861},{"code":"CU","lat":23.12814,"long":-82.38972},{"code":"MW","lat":-13.99572,"long":33.75982},{"code":"CI","lat":6.82147,"long":-5.27985},{"code":"KZ","lat":51.1776,"long":71.433},{"code":"LY","lat":32.89222,"long":13.17308},{"code":"FJ","lat":-17.65816116,"long":178.14726257},{"code":"CD","lat":-4.32153,"long":15.31185},{"code":"PT","lat":38.70701,"long":-9.13564},{"code":"GM","lat":13.44026566,"long":-15.49088478},{"code":"JE","lat":49.22850418,"long":-2.12289286},{"code":"HM","lat":-53.08010864,"long":73.56218719},{"code":"GL","lat":74.34954834,"long":-41.08988953},{"code":"YE","lat":15.88838768,"long":47.48988724},{"code":"MP","lat":15.18883,"long":145.7535},{"code":"CV","lat":15.18300247,"long":-23.70345116},{"code":"GB","lat":51.50015,"long":-0.12624},{"code":"RE","lat":-21.14629936,"long":55.63124847},{"code":"TO","lat":-21.37624,"long":-174.93218},{"code":"AD","lat":42.50753,"long":1.52182},{"code":"HK","lat":22.28215,"long":114.15688},{"code":"TT","lat":10.65782,"long":-61.51671},{"code":"MF","lat":18.04222488,"long":-63.06623459},{"code":"SV","lat":13.67163658,"long":-88.8636322},{"code":"GR","lat":37.97534,"long":23.73615},{"code":"BA","lat":44.16825485,"long":17.78524971},{"code":"MN","lat":47.92287,"long":106.92327},{"code":"BE","lat":50.84554,"long":4.35571},{"code":"IT","lat":41.89056,"long":12.49427},{"code":"SD","lat":16.08578491,"long":30.0873909},{"code":"IO","lat":-7.26162,"long":72.37777},{"code":"MH","lat":7.12052,"long":171.36576},{"code":"GQ","lat":1.533126,"long":10.37258148},{"code":"HR","lat":45.81491,"long":15.97851},{"code":"LU","lat":49.77788162,"long":6.09474611},{"code":"MC","lat":43.73251,"long":7.41904},{"code":"IL","lat":31.78902,"long":35.20108},{"code":"QA","lat":25.41362572,"long":51.26026535},{"code":"TM","lat":39.2012825,"long":59.0822525},{"code":"SG","lat":1.28944,"long":103.84998},{"code":"AW","lat":12.50652313,"long":-69.96931458},{"code":"PR","lat":18.22452,"long":-66.47963},{"code":"CY","lat":35.17025,"long":33.3587},{"code":"ZM","lat":-13.45884514,"long":27.78809738},{"code":"EG","lat":26.75610352,"long":29.86229706},{"code":"LI","lat":47.14104,"long":9.52145},{"code":"VA","lat":41.90397,"long":12.45755},{"code":"NE","lat":11.96142101,"long":2.53115416},{"code":"PK","lat":33.72,"long":73.06},{"code":"KY","lat":19.30025,"long":-81.376},{"code":"LS","lat":-29.58175278,"long":28.24661255},{"code":"FI","lat":60.16981,"long":24.93813},{"code":"VE","lat":10.50278,"long":-66.91905},{"code":"DE","lat":52.52343,"long":13.41144},{"code":"AG","lat":17.09273911,"long":-61.81040955},{"code":"IM","lat":54.22814,"long":-4.53814},{"code":"NA","lat":-22.56522,"long":17.0843},{"code":"TL","lat":-8.80478668,"long":126.07902527},{"code":"LC","lat":14.01159,"long":-60.98823},{"code":"MU","lat":-20.22040939,"long":57.58937836},{"code":"GT","lat":14.64198,"long":-90.51324},{"code":"PM","lat":46.90594482,"long":-56.336586},{"code":"CW","lat":12.12161,"long":-68.94942},{"code":"TR","lat":39.89652,"long":32.86197},{"code":"KG","lat":42.88442,"long":74.57662},{"code":"IQ","lat":33.04458618,"long":43.77495575},{"code":"UM","lat":6.41093,"long":-162.46546},{"code":"TK","lat":-8.97920799,"long":-172.20170593},{"code":"MZ","lat":-25.97325,"long":32.57203},{"code":"HT","lat":18.54639,"long":-72.34279},{"code":"CG","lat":-4.2739,"long":15.28151},{"code":"MS","lat":16.70611,"long":-62.21337},{"code":"PL","lat":52.23498,"long":21.00849},{"code":"KW","lat":29.36857,"long":47.97283},{"code":"IR","lat":35.6864,"long":51.43286}]'),o=JSON.parse('{"AF":"Afghanistan","AX":"\xc5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia (Plurinational State of)","BQ":"Bonaire, Sint Eustatius and Saba","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo (Democratic Republic of the)","CK":"Cook Islands","CR":"Costa Rica","CI":"C\xf4te d\'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Cura\xe7ao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and McDonald Islands","VA":"Holy See","HN":"Honduras","HK":"Hong Kong (China)","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran (Islamic Republic of)","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea (Democratic People\'s Republic of)","KR":"Korea (Republic of)","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao (China)","MK":"Macedonia (the former Yugoslav Republic of)","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia (Federated States of)","MD":"Moldova (Republic of)","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestina, State of","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"R\xe9union","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","BL":"Saint Barth\xe9lemy","SH":"Saint Helena, Ascension and Tristan da Cunha","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","MF":"Saint Martin (French part)","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan, Province of China","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States of America","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela (Bolivarian Republic of)","VN":"Viet Nam","VG":"Virgin Islands (British)","VI":"Virgin Islands (U.S.)","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}'),r=a.reduce(((e,t)=>{let{code:n,long:a,lat:o}=t;return e[n]={long:a,lat:o},e}),{}),l=e=>o[e],i=e=>r[e]},68666:(e,t,n)=>{n.r(t),n.d(t,{default:()=>za});var a=n(88242),o=n(67294),r=n(39731),l=n(20486),i=n(84191);let c;async function s(e,t,n){let{satisfied:a,feedbackContent:o=""}=t;return await i.po.post(`/explorer/questions/${e}/feedback`,{satisfied:a,feedbackContent:""},{withCredentials:!0,oToken:n}),a}!function(e){e.New="new",e.AnswerGenerating="answer_generating",e.SQLValidating="sql_validating",e.Waiting="waiting",e.Running="running",e.Success="success",e.Summarizing="summarizing",e.Error="error",e.Cancel="cancel"}(c||(c={}));var u=n(22638),d=n(61802);async function m(e){return await new Promise((t=>setTimeout(t,e)))}var g=n(90031);let h;!function(e){e[e.NONE=0]="NONE",e[e.LOADING=1]="LOADING",e[e.LOAD_FAILED=2]="LOAD_FAILED",e[e.CREATING=3]="CREATING",e[e.CREATED=4]="CREATED",e[e.GENERATING_SQL=5]="GENERATING_SQL",e[e.CREATE_FAILED=6]="CREATE_FAILED",e[e.GENERATE_SQL_FAILED=7]="GENERATE_SQL_FAILED",e[e.QUEUEING=8]="QUEUEING",e[e.EXECUTING=9]="EXECUTING",e[e.EXECUTE_FAILED=10]="EXECUTE_FAILED",e[e.VISUALIZE_FAILED=11]="VISUALIZE_FAILED",e[e.UNKNOWN_ERROR=12]="UNKNOWN_ERROR",e[e.SUMMARIZING=13]="SUMMARIZING",e[e.READY=14]="READY"}(h||(h={}));const p=new Set([h.NONE,h.READY,h.SUMMARIZING,h.UNKNOWN_ERROR,h.GENERATE_SQL_FAILED,h.VISUALIZE_FAILED,h.CREATE_FAILED,h.LOAD_FAILED,h.EXECUTE_FAILED]);function f(e,t){switch(e.status){case c.New:return h.CREATED;case c.AnswerGenerating:case c.SQLValidating:return h.GENERATING_SQL;case c.Waiting:return h.QUEUEING;case c.Running:return h.EXECUTING;case c.Summarizing:return h.SUMMARIZING;case c.Success:return(0,d.nf)(e.chart)?h.READY:h.VISUALIZE_FAILED;case c.Error:return(0,d.nf)(e.error)?t(e.error):t("Empty error message"),(0,d.X0)(e.querySQL)?h.GENERATE_SQL_FAILED:(0,d.X0)(e.result)?h.EXECUTE_FAILED:(0,d.X0)(e.chart)?h.VISUALIZE_FAILED:h.UNKNOWN_ERROR;case c.Cancel:return(0,d.nf)(e.error)?t(e.error):t("Execution was cancelled"),h.EXECUTE_FAILED}}function E(e){let{pollInterval:t=2e3}=e;const[n,a]=(0,o.useState)(h.NONE),[r,l]=(0,o.useState)(),[c,s]=(0,o.useState)(!1),[p,E]=(0,o.useState)(),y=(0,o.useRef)(),{isLoading:b,user:v,getAccessTokenSilently:x,login:w}=(0,g.g)(),S=(0,u.Z)((async function(e,t){if(y.current!==e||!t&&!c){y.current=e;try{t&&(E(void 0),l(void 0),a(h.LOADING)),s(!0);const n=await async function(e){return await i.po.get(`/explorer/questions/${e}`)}(e);y.current=n.id,a(f(n,E)),l(n)}catch(n){return a(h.LOAD_FAILED),E(n),await Promise.reject(n)}finally{s(!1)}}})),Z=(0,u.Z)((e=>{S(e,!0)})),I=(0,u.Z)((e=>{!async function(e){try{if(!b&&!v)return await w();E(void 0),l(void 0),s(!0),a(h.CREATING);const t=await x(),n=await async function(e,t){const{accessToken:n}=t;return await i.po.post("/explorer/questions/",{question:e},{withCredentials:!0,oToken:n})}(e,{accessToken:t});await m(600),y.current=n.id,a(f(n,E)),l(n)}catch(t){return a(h.CREATE_FAILED),E(t),await Promise.reject(t)}finally{s(!1)}}(e)})),C=(0,u.Z)((()=>{a(h.NONE),l(void 0),s(!1),E(void 0),y.current=void 0}));return(0,o.useEffect)((()=>{switch((0,d.z0)(t)&&t<1e3&&(t=1e3),n){case h.CREATED:case h.GENERATING_SQL:case h.EXECUTING:case h.QUEUEING:case h.SUMMARIZING:{const e=setTimeout((()=>{(0,d.GC)(y.current)&&S(y.current,!1)}),t);return()=>{clearTimeout(e)}}}}),[n,c,t]),{phase:n,question:r,loading:c,error:p,load:Z,create:I,reset:C}}const y=(0,o.createContext)({phase:h.NONE,question:void 0,loading:!1,error:void 0,load(){},create(){},reset(){}});function b(){return(0,o.useContext)(y)}y.displayName="QuestionManagementContext";var v=n(2108),x=n(61953),w=n(81719),S=n(26432);const Z=(0,o.createContext)({search:"",handleSelect(){},handleSelectId(){},showTips(){}});function I(){return(0,o.useContext)(Z)}function C(){return o.createElement(A,null,o.createElement(N,null),o.createElement(M,null))}const A=(0,w.ZP)("div",{name:"Decorators-Container"})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 200vh;
  pointer-events: none;
  overflow: hidden;
`,k=(0,w.ZP)("div")`
  display: block;
  position: absolute;
  background-position: left top;
  background-repeat: no-repeat;
`,N=(0,w.ZP)(k)`
  background-image: url('/img/ellipse-2.svg');
  left: 41px;
  top: 81px;
  right: 0;
  width: 696px;
  height: 696px;
  background-size: 696px 696px;
  overflow: hidden;
`,M=(0,w.ZP)(k)`
  background-image: url('/img/ellipse-2.svg');
  top: 241px;
  right: 0;
  width: 961px;
  height: 1072px;
  background-size: 961px 1072px;
  overflow: hidden;
`;var P=n(36336),L=n(98885),T=n(93580);const R=400;function G(e){let{children:t,header:n,side:a,footer:r,showFooter:l,showSide:i,showHeader:c}=e;const s=(0,o.useRef)(null),u=(0,o.useRef)(null),d=(0,o.useRef)(null),m=(0,T.Z)(s),g=(0,o.useMemo)((()=>(null==m?void 0:m.height)??0),[null==m?void 0:m.height]);return o.createElement(F,{maxWidth:"xl"},o.createElement(L.ZP,{nodeRef:s,in:c,timeout:R},(e=>o.createElement(o.Fragment,null,o.createElement($,{ref:s,className:`Header-${e}`,height:g},n),o.createElement(D,{className:`Body-header-${e}`,headerHeight:g},o.createElement(L.ZP,{nodeRef:u,in:i,timeout:R},(e=>o.createElement(q,{ref:u,className:`Main-side-${e}`},t))),o.createElement(L.ZP,{nodeRef:d,in:i,timeout:R,unmountOnExit:!0},(e=>o.createElement(B,{ref:d,className:`Side-${e}`},a))))))),o.createElement(z,null,l&&r))}const F=(0,w.ZP)(P.Z,{name:"Layout-Root"})`
  padding-top: 64px;

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    padding-top: 16px;
  }

  min-height: calc(100vh - 92px);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,D=(0,w.ZP)("div",{name:"Layout-Body",shouldForwardProp:e=>"headerHeight"!==e})`
  --explore-layout-side-width: ${250}px;

  ${e=>{let{theme:t}=e;return t.breakpoints.up("lg")}} {
    --explore-layout-side-width: ${275}px;
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("xl")}} {
    --explore-layout-side-width: ${300}px;
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
    padding-right: var(--explore-layout-side-width);
  }

  position: relative;
  margin: 0 auto;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.breakpoints.up("xl")}} {
    max-width: ${e=>{let{theme:t}=e;return`calc(${t.breakpoints.values.lg}px + var(--explore-layout-side-width))`}};
  }

  transform: translate3d(0, -${e=>{let{headerHeight:t}=e;return t+32+40}}px, 0);
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("transform",{duration:R})}};

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    transform: translate3d(0, -${e=>{let{headerHeight:t}=e;return t+32-8}}px, 0);
  }

  ${O("Body-header",!0)} {
    opacity: 1;
    transform: initial;
  }
`,$=(0,w.ZP)("div",{name:"Layout-Header",shouldForwardProp:e=>"height"!==e})`
  opacity: 0.1;
  transform: translate3d(0, -${e=>{let{height:t}=e;return t+32+40}}px, 0);
  margin-bottom: ${32}px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["transform","opacity"],{duration:R})}};

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    transform: translate3d(0, -${e=>{let{height:t}=e;return t+32}}px, 0);
  }

  ${O("Header",!0)} {
    opacity: 1;
    transform: initial;
  }
`,q=(0,w.ZP)("div",{name:"Layout-Main"})`
  width: 100%;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["transform","opacity"],{duration:R})}};

  ${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
    transform: translateX(calc(var(--explore-layout-side-width) / 2));
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
    max-width: calc(100%);
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.up("xl")}} {
    max-width: ${e=>{let{theme:t}=e;return t.breakpoints.values.lg}}px;
  }

  ${O("Main-side",!0)} {
    transform: initial;
  }
`,B=(0,w.ZP)("div",{name:"Layout-Side"})`
  position: absolute;
  right: 0;
  top: 0;
  width: var(--explore-layout-side-width);
  height: 100%;
  opacity: 0;
  transform: translateX(calc(var(--explore-layout-side-width) / 2));
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["transform","opacity"],{duration:R})}};
  padding: 0 24px;
  box-sizing: border-box;

  ${O("Side",!0)} {
    display: block;
    transform: initial;
    opacity: 1;
  }

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    display: none !important;
  }
`,z=(0,w.ZP)("div",{name:"Layout-Footer"})`
  position: relative;
  display: flex;
  align-self: stretch;
  flex: 1;
  min-height: 160px;
  align-items: center;
  justify-content: center;
`;function O(e,t){return t?`&.${e}-entering, &.${e}-entered`:`&.${e}-exiting, &.${e}-exited`}var U,_,H;function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}const W=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",Q({width:43,height:24,viewBox:"0 0 43 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,U||(U=o.createElement("rect",{x:.25,y:.25,width:42.5,height:23.5,rx:11.75,stroke:"url(#a)",strokeWidth:.5})),_||(_=o.createElement("path",{d:"M10.057 16V7.273h3.051c.608 0 1.11.105 1.504.315.395.207.69.487.882.84.194.349.29.737.29 1.163 0 .375-.067.685-.2.929-.13.244-.304.437-.52.58a2.364 2.364 0 0 1-.695.315v.085c.267.017.536.11.806.281.27.17.495.415.677.733.182.318.273.708.273 1.168 0 .437-.1.83-.298 1.18-.2.35-.513.627-.942.831-.429.205-.987.307-1.675.307h-3.153Zm1.057-.938h2.096c.69 0 1.18-.133 1.47-.4.293-.27.44-.597.44-.98 0-.296-.076-.568-.226-.818a1.635 1.635 0 0 0-.644-.606c-.278-.153-.608-.23-.989-.23h-2.147v3.034Zm0-3.954h1.96c.318 0 .605-.063.86-.188.26-.124.464-.3.614-.528.154-.227.23-.494.23-.801 0-.384-.133-.709-.4-.976-.267-.27-.69-.405-1.27-.405h-1.994v2.898Zm9.355 5.028c-.63 0-1.174-.139-1.632-.417a2.803 2.803 0 0 1-1.052-1.176c-.244-.506-.367-1.094-.367-1.765 0-.67.123-1.261.367-1.772.247-.514.59-.915 1.031-1.202.443-.29.96-.435 1.551-.435.341 0 .678.057 1.01.17.332.114.635.3.908.555.273.253.49.588.652 1.005.162.418.243.932.243 1.543v.426h-5.046v-.87h4.023c0-.369-.074-.698-.222-.988a1.67 1.67 0 0 0-.622-.686 1.742 1.742 0 0 0-.946-.251c-.4 0-.747.1-1.04.298-.29.196-.512.452-.669.767a2.253 2.253 0 0 0-.234 1.014v.58c0 .494.085.913.256 1.257.173.34.413.6.72.78a2.11 2.11 0 0 0 1.07.264c.264 0 .502-.037.715-.11.216-.077.402-.191.559-.342.156-.153.277-.344.362-.57l.971.272c-.102.33-.274.62-.515.87-.242.246-.54.44-.895.579a3.318 3.318 0 0 1-1.198.204Zm7.087-6.681v.852h-3.392v-.852h3.392Zm-2.403-1.569h1.005v6.239c0 .284.042.497.124.64a.64.64 0 0 0 .324.28c.133.046.274.069.422.069.11 0 .201-.006.272-.017l.17-.034.205.903a2.046 2.046 0 0 1-.285.077 2.102 2.102 0 0 1-.465.042c-.284 0-.562-.06-.835-.183a1.66 1.66 0 0 1-.673-.558c-.176-.25-.264-.566-.264-.946V7.886Zm5.842 8.267c-.415 0-.791-.078-1.13-.234a1.938 1.938 0 0 1-.805-.686c-.198-.301-.298-.665-.298-1.091 0-.375.074-.679.222-.912.147-.236.345-.42.592-.554.247-.133.52-.233.818-.298.301-.068.604-.122.908-.162.398-.051.72-.09.967-.115.25-.029.432-.075.546-.14.116-.066.174-.18.174-.342v-.034c0-.42-.115-.747-.345-.98-.227-.233-.572-.35-1.035-.35-.48 0-.857.106-1.13.316-.272.21-.464.435-.575.673l-.954-.34c.17-.398.397-.708.681-.93.287-.224.6-.38.938-.468.34-.091.676-.137 1.006-.137.21 0 .451.026.724.077.276.048.541.15.797.303.258.153.473.384.643.694.17.31.256.725.256 1.245V16h-1.006v-.886h-.05a1.77 1.77 0 0 1-.342.456c-.159.162-.37.3-.635.413-.264.114-.586.17-.967.17Zm.153-.903c.398 0 .733-.078 1.006-.234a1.595 1.595 0 0 0 .835-1.385v-.92c-.042.05-.136.097-.28.14-.143.04-.308.075-.495.106a22.444 22.444 0 0 1-.963.128 3.84 3.84 0 0 0-.733.166 1.263 1.263 0 0 0-.546.337c-.136.148-.204.35-.204.605 0 .35.129.614.387.793.262.176.593.264.993.264Z",fill:"url(#b)"})),H||(H=o.createElement("defs",null,o.createElement("linearGradient",{id:"a",x1:0,y1:24,x2:45.606,y2:24,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#5667FF"}),o.createElement("stop",{offset:1,stopColor:"#A168FF"})),o.createElement("linearGradient",{id:"b",x1:9,y1:17,x2:37.636,y2:17,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#5667FF"}),o.createElement("stop",{offset:1,stopColor:"#A168FF"})))))},V=(0,w.ZP)("b",{shouldForwardProp:e=>"color"!==e})`
  color: ${e=>{let{color:t}=e;return t}};
`,K=o.createElement(o.Fragment,null,"Explore ",o.createElement(V,{color:"#9197D0"},"5 billion")," GitHub data with no SQL or plotting skills. Unleash your ",o.createElement(V,{color:"#5C6AE0"},"imagination")," and discover new ",o.createElement(V,{color:"#7D71C7"},"insights")," NOW!");function Y(){return o.createElement(J,null,o.createElement(X,null,o.createElement(ee,null,"Data Explorer"),o.createElement(j,null)),o.createElement(te,null,K))}const j=(0,w.ZP)(W)`
  margin-left: 8px;
`,J=(0,w.ZP)("div",{shouldForwardProp:e=>"display"!==e})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`,X=(0,w.ZP)("h1")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`,ee=(0,w.ZP)("span")`
`,te=(0,w.ZP)("p")`
  color: #7C7C7C;
  margin: 0;
`;var ne=n(80562),ae=n(75345),oe=n(9144),re=n(95537),le=n(63871),ie=n(89022),ce=n(88100);function se(e){let{value:t,onChange:n,onAction:a,onClear:r,disableInput:l=!1,disableAction:i=!1,disableClear:c=!1,clearState:s}=e;const u=(0,o.useRef)(null),{isLoading:d,isAuthenticated:m}=(0,ce.D3)(),g=(0,S.Z)((e=>{n(e.target.value)})),h=(0,S.Z)((e=>{"Enter"===e.key&&(i||null==a||a())}));return o.createElement(o.Fragment,null,o.createElement(ue,{fullWidth:!0,disabled:d&&!m||l,ref:u,value:t,onChange:g,onKeyDown:h,placeholder:"Type any question here, or choose one below",endAdornment:o.createElement(oe.Z,{direction:"row",gap:1},!i&&o.createElement(de,{color:"inherit",onClick:a,disabled:i},o.createElement(le.Z,null)),o.createElement(de,{color:"stop"===s?"error":"inherit",onClick:r,disabled:c},"stop"===s?o.createElement(ie.Z,null):o.createElement(re.Z,null)))}))}const ue=(0,w.ZP)(ae.ZP)`
  background-color: #eaeaea;
  color: #3c3c3c;
  border-radius: 6px;
  font-size: 20px;
  padding: 14px;
  line-height: 1;

  &.Mui-disabled {
    color: rgb(60, 60, 60, 0.7);
    
    & > input {
      -webkit-text-fill-color: unset;
    }
  }
`,de=(0,w.ZP)(ne.Z)`
  &.Mui-disabled {
    color: rgb(60, 60, 60, 0.3);
  }
`;function me(e){const{marginTop:t,marginBottom:n}=getComputedStyle(e);return e.offsetHeight+parseFloat(t)+parseFloat(n)}function ge(e){let{state:t,transitionDelay:n=0,transitionDuration:a=400,offset:r=120,direction:l="up",revert:i=!1,children:c}=e;const s=(0,o.useRef)(null),u=(0,o.useRef)(null),[m,g]=(0,o.useState)();(0,o.useEffect)((()=>{if(2!==c.length)throw new Error("SwitchLayout should have exactly two children");if((0,d.Rw)(c[0].key)||(0,d.Rw)(c[1].key))throw new Error("SwitchLayout's children must have keys")}),[]);const h=(0,S.Z)((()=>{(0,d.nf)(s.current)&&g(me(s.current))})),p=(0,S.Z)((()=>{(0,d.nf)(u.current)&&g(me(u.current))})),f=(0,S.Z)((()=>{g(void 0)})),E=(0,S.Z)((()=>{(0,d.nf)(u.current)&&g(me(u.current))})),y=(0,S.Z)((()=>{(0,d.nf)(s.current)&&g(me(s.current))})),b=(0,S.Z)((()=>{g(void 0)})),v=n+a;return o.createElement(he,{offset:r,style:{height:m},duration:a,delay:n},o.createElement(L.ZP,{key:c[0].key,in:t===c[0].key,timeout:v,unmountOnExit:!0,onExit:h,onExiting:p,onExited:f},(e=>o.createElement(pe,{ref:s,className:`SwitchItem-${l} SwitchItem-${e}`,duration:a,delay:n,offset:r},c[0]))),o.createElement(L.ZP,{key:c[1].key,in:t===c[1].key,timeout:v,unmountOnExit:!0,onExit:E,onExiting:y,onExited:b},(e=>o.createElement(pe,{ref:u,className:`SwitchItem-${i?"up"===l?"down":"up":l} SwitchItem-${e}`,duration:a,delay:n,offset:r},c[1]))))}const he=(0,w.ZP)("div",{name:"SwitchLayoutContainer",shouldForwardProp:e=>!["duration","delay","offset"].includes(String(e))})`
  position: relative;
  transition: ${e=>{let{theme:t,duration:n,delay:a}=e;return t.transitions.create("height",{duration:n,delay:a})}};
`,pe=(0,w.ZP)("div",{name:"SwitchItem",shouldForwardProp:e=>!["offset","duration","delay"].includes(String(e))})`
  transition: ${e=>{let{theme:t,duration:n,delay:a}=e;return t.transitions.create(["opacity","transform"],{duration:n,delay:a})}};
  opacity: 0;
  padding: 0.1px;

  &.SwitchItem-exiting, &.SwitchItem-entering {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &.SwitchItem-enter, &.SwitchItem-exiting, &.SwitchItem-exited {
    opacity: 0;
  }

  &.SwitchItem-up {
    &.SwitchItem-enter {
      transform: translate3d(0, ${e=>{let{offset:t}=e;return t}}px, 0);
    }

    &.SwitchItem-exiting, &.SwitchItem-exited {
      transform: translate3d(0, -${e=>{let{offset:t}=e;return t}}px, 0);
    }
  }

  &.SwitchItem-down {
    &.SwitchItem-enter {
      transform: translate3d(0, -${e=>{let{offset:t}=e;return t}}px, 0);
    }

    &.SwitchItem-exiting, &.SwitchItem-exited {
      transform: translate3d(0, ${e=>{let{offset:t}=e;return t}}px, 0);
    }
  }

  &.SwitchItem-exit, &.SwitchItem-entering, &.SwitchItem-entered {
    opacity: 1;
    transform: initial;
  }
`;function fe(e){let{align:t="left",sx:n}=e;return o.createElement(Ee,{align:t,sx:n},"Powered by ",o.createElement("a",{href:"https://www.pingcap.com/tidb-cloud/?utm_source=ossinsight&utm_medium=referral&utm_campaign=dataexplore",target:"_blank",rel:"noopener noreferrer"},"TiDB Cloud"))}const Ee=(0,w.ZP)("div",{shouldForwardProp:e=>"align"!==e})`
  text-align: ${e=>{let{align:t}=e;return t}};
  font-size: 16px;
  color: #C1C1C1;

  > a {
    color: #C1C1C1 !important;
    text-decoration: underline;
  }
`;var ye=n(14850),be=n(74065),ve=n(47028),xe=n(21945),we=n(70795),Se=n(70918),Ze=n(70983),Ie=n(96812),Ce=n(6571),Ae=n(47135),ke=n(19604),Ne=n(29630);function Me(e,t){void 0===t&&(t={});const n=new URL(`https://github.com/${e}/issues/new`);return Object.entries(t).forEach((e=>{let[t,a]=e;n.searchParams.set(t,a)})),n.toString()}var Pe=n(54566),Le=n(21039),Te=n(23147),Re=n(79072),Ge=n(91655),Fe=n(50522),De=n(39960);const $e=(0,w.ZP)("div",{name:"Highlight-Background"})`
  position: relative;
  background: linear-gradient(116.45deg, #595FEC 0%, rgba(200, 182, 252, 0.2) 96.73%);
  padding: 1px;
  border-radius: 7px;
  width: 100%;
`,qe=(0,w.ZP)(Fe.Z,{name:"Highlight-Content"})`
  display: block;
  font-size: 14px;
  line-height: 1.25;
  background-color: rgba(44, 44, 44, 0.8);
  border-radius: 6px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("background-color")}};
  padding: 18px;
  text-align: left;
  width: 100%;
  height: 100%;
  vertical-align: top;

  &:hover {
    background-color: rgba(44, 44, 44, 0.5);
  }
`,Be=(0,w.ZP)($e,{name:"HighlightButton-Background"})`
  display: inline-block;
  border-radius: 17px;
  max-width: max-content;
  color: white !important;
  text-decoration: none !important;
`;(0,w.ZP)(qe,{name:"HighlightButton-Content"})`
  display: flex;
  border-radius: 16px;
  align-items: center;
  padding: 8px;
  max-width: max-content;
`,Be.withComponent(Fe.Z),Be.withComponent(De.Z);function ze(e){let{question:t,questionId:n,variant:a="card",prefix:r,disabled:l}=e;const{handleSelect:i,handleSelectId:c}=(0,o.useContext)(Z),s=(0,S.Z)((()=>{(0,d.GC)(n)?c(n):"string"==typeof t&&i(t)}));switch(a){case"recommended-card":return o.createElement($e,null,o.createElement(qe,{onClick:s,disabled:l},t),o.createElement(Ue,null,"\u2728"));case"card":return o.createElement(qe,{onClick:s,disabled:l},t);default:return o.createElement(Oe,{disableRipple:!0,disableTouchRipple:!0,onClick:s,disabled:l},r,t)}}const Oe=(0,w.ZP)(Fe.Z,{name:"QuestionCard-Link"})`
  display: block;
  text-align: left;
  padding: 8px 0;
  font-size: 14px;
  line-height: 1.5;
  color: #c1c1c1;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("color")}};

  &:hover {
    color: white;
  }
`,Ue=(0,w.ZP)("span")`
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: 12px;
`;var _e=n(8100);function He(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=n;return t}function Qe(e,t){if(0!==e.length&&(1!==e.length||!(0,d.nf)(t)||0!==t))for(;;){const n=Math.floor((Math.random()-1e-5)*e.length);if(n!==t)return e[n]}}function We(e,t){const{data:n,isValidating:a,mutate:r}=(0,_e.ZP)([e,t,"data-explorer-recommend-question"],{fetcher:async(e,t)=>await async function(e,t){return await i.po.get("/explorer/questions/recommend",{params:{aiGenerated:e,n:t}})}(e,t),shouldRetryOnError:!1,revalidateIfStale:!1,revalidateOnReconnect:!1,revalidateOnFocus:!1});return{data:n,loading:a,reload:(0,o.useMemo)((()=>()=>{r(void 0,{revalidate:!0}).catch(console.error)}),[])}}function Ve(e){let{variant:t,disabled:n,questions:a,n:r,questionPrefix:l}=e;const i=0===a.length?(()=>{const e=e=>o.createElement(ze,{key:e,variant:t,question:"text"===t?o.createElement(Ge.Z,{width:"230px"}):o.createElement(o.Fragment,null,o.createElement(Ge.Z,{width:"100%"}),o.createElement(Ge.Z,{width:"61%"})),disabled:!0});return"text"===t?He(r).map(e):He(r).map((t=>o.createElement(Re.ZP,{item:!0,xs:12,md:4,key:t,display:"flex",alignItems:"stretch",justifyContent:"stretch"},e(t))))})():(()=>{const e=(e,a)=>o.createElement(ze,{key:a,variant:t,question:e.title,questionId:e.questionId,prefix:l,disabled:n});return"text"===t?a.map(e):a.map(((t,n)=>o.createElement(Re.ZP,{item:!0,xs:12,md:4,key:t.hash,display:"flex",alignItems:"stretch",justifyContent:"stretch"},e(t,n))))})();return"text"===t?o.createElement(x.Z,null,i):o.createElement(Re.ZP,{container:!0,spacing:2},i)}function Ke(e){let{aiGenerated:t=!1,n:n,disabled:a=!1,title:r,questionPrefix:l,variant:i}=e;const{data:c=[],reload:s,loading:u}=We(t,n);return o.createElement(o.Fragment,null,o.createElement(x.Z,{mb:.5},(null==r?void 0:r(s,u))??null),o.createElement(Ve,{n:n,questions:c,disabled:a,questionPrefix:l,variant:i??(t?"recommended-card":"card")}))}function Ye(e){let{severity:t,sx:n,children:a,createIssueUrl:r=(()=>Me("pingcap/ossinsight")),showSuggestions:l}=e;const i=(0,S.Z)((()=>{var e;null==(e=document.getElementById("data-explorer-faq"))||e.scrollIntoView({behavior:"smooth"})})),c=(0,S.Z)((()=>{window.open(r(),"_blank")}));return o.createElement(o.Fragment,null,o.createElement(je,{sx:n,variant:"outlined",severity:t},o.createElement(Ne.Z,{variant:"body1"},a),o.createElement(oe.Z,{direction:"row",spacing:2,mt:2},o.createElement(Xe,{onClick:i},o.createElement(Le.Z,{fontSize:"inherit",sx:{mr:.5}}),o.createElement("span",null,"See faq")),o.createElement(Xe,{onClick:c},o.createElement(Te.Z,{fontSize:"inherit",sx:{mr:.5}}),o.createElement("span",null,"Feedback")))),l&&o.createElement(Je,null,o.createElement(Ke,{title:(e,t)=>o.createElement(x.Z,{component:"p",m:0,mt:3,height:"40px"},"\ud83d\udc40 How about try other questions? ",o.createElement(ne.Z,{onClick:e,disabled:t},o.createElement(Pe.Z,null))),n:4,variant:"text",questionPrefix:"> "})))}const je=(0,w.ZP)(ke.Z)`
  background: #18191A;
  border-color: transparent;

  a {
    color: currentColor !important;
    text-decoration: underline !important;
  }
`,Je=(0,w.ZP)("div")`
  margin-top: 16px;
`,Xe=(0,w.ZP)("button")`
  appearance: none;
  border: 1px solid #7c7c7c;
  border-radius: 6px;
  outline: none;
  background: none;
  color: #fff;
  opacity: 0.5;
  font-size: inherit;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["opacity"])}};

  &:hover, &:focus {
    opacity: 0.7;
  }
  
  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;var et=n(36782);function tt(e){return()=>{var t;null==(t=document.getElementById(e))||t.scrollIntoView({behavior:"smooth"})}}function nt(e){void 0===e&&(e="");try{return(0,et.WU)(e,{language:"mysql"})}catch{return e}}function at(){const{question:e}=b(),t=(0,o.useMemo)((()=>()=>Me("pingcap/ossinsight",{title:`Empty result from question ${(null==e?void 0:e.id)??""}`,labels:"area/data-explorer",body:`\nHi, The result of [question](https://ossinsight.io/explore/?id=${(null==e?void 0:e.id)??""}) is empty\nThe title is: **${(null==e?void 0:e.title)??""}**\n\nGenerated SQL is:\n\`\`\`mysql\n${nt(null==e?void 0:e.querySQL)}\n\`\`\` \n      `})),[e]);return o.createElement(Ye,{severity:"info",createIssueUrl:t,showSuggestions:!0},"Oops! Your query yielded no results. Try our ",o.createElement("a",{href:"javascript:void(0)",onClick:tt("faq-optimize-sql")},"tips")," for crafting effective queries and give it another go.")}function ot(e){let{severity:t,title:n,prompt:a,sx:r,error:l,showSuggestions:i,children:c}=e;const{question:s}=b();return o.createElement(Ye,{severity:t,sx:r,createIssueUrl:()=>Me("pingcap/ossinsight",{title:`${n} for question ${(null==s?void 0:s.id)??""}`,body:`\n${a} [question](https://ossinsight.io/explore?id=${(null==s?void 0:s.id)??""})\n\n## Question title\n**${(null==s?void 0:s.title)??""}**\n\n## Error message\n${l}\n${(0,d.nf)(null==s?void 0:s.querySQL)?`\n## Generated SQL\n\`\`\`mysql\n${nt(null==s?void 0:s.querySQL)}\n\`\`\`\n`:""}\n${(0,d.nf)(null==s?void 0:s.chart)?`\n## Chart info\n\`\`\`json\n${JSON.stringify(null==s?void 0:s.chart,void 0,2)}\n\`\`\`\n`:""}\n`,labels:"area/data-explorer,type/bug"}),showSuggestions:i&&!(0,Ae.X_)(l,429)},c)}var rt=n(70917);function lt(e){let{animated:t=!0}=e;return o.createElement(ct,{className:t?"animated":"",size:16})}const it=rt.F4`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -6px, 0);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: ease-out;
  }
`,ct=(0,w.ZP)("span")`
  width: ${e=>{let{size:t}=e;return t??24}}px;
  height: ${e=>{let{size:t}=e;return t??24}}px;
  display: inline-block;
  background: url("/img/bot.png") no-repeat center center;
  background-size: contain;

  &.animated {
    animation: ${it} 0.8s infinite;
  }
`;const st=(0,n(1588).Z)("RippleDot",["root","info","success","error","warning","active"]);var ut=n(86010);function dt(e){let{active:t=!0,color:n="info",size:a=8}=e;return o.createElement(gt,{size:a,className:(0,ut.Z)({[st.root]:!0,[st.active]:t,[st[n]]:!0})})}const mt=rt.F4`
  0% {
    opacity: 1;
    transform: initial;
  }
  100% {
    opacity: 0;
    transform: scale3d(2, 2, 0);
    transform-origin: center center;
    animation-timing-function: ease-in;
  }
`,gt=(0,w.ZP)("span",{name:"RippleDot",shouldForwardProp:e=>"size"!==e})`
  display: inline-block;
  position: relative;
  width: ${e=>{let{size:t}=e;return t}}px;
  height: ${e=>{let{size:t}=e;return t}}px;
  border-radius: 50%;

  &.${st.error} {
    background-color: ${e=>{let{theme:t}=e;return t.palette.error.main}};
    &:before {
      background-color: ${e=>{let{theme:t}=e;return t.palette.error.main}};
    }
  }

  &.${st.success} {
    background-color: ${e=>{let{theme:t}=e;return t.palette.success.main}};
    &:before {
      background-color: ${e=>{let{theme:t}=e;return t.palette.success.main}};
    }
  }

  &.${st.info} {
    background-color: ${e=>{let{theme:t}=e;return t.palette.info.main}};
    &:before {
      background-color: ${e=>{let{theme:t}=e;return t.palette.info.main}};
    }
  }

  &.${st.warning} {
    background-color: ${e=>{let{theme:t}=e;return t.palette.warning.main}};
    &:before {
      background-color: ${e=>{let{theme:t}=e;return t.palette.warning.main}};
    }
  }

  &.${st.active}:before {
    animation-play-state: running;
  }
  
  &:before {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    content: ' ';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: ${mt} 1.2s infinite;
    animation-play-state: paused;
  }
`;function ht(e){let{status:t,title:n,defaultExpanded:a,extra:r,error:l,errorWithChildren:i=!1,errorMessage:c,children:s,errorPrompt:u,errorTitle:m,icon:g="default"}=e;const[h,p]=(0,o.useState)(!1);(0,o.useEffect)((()=>{switch(t){case"loading":p(!1);break;case"error":p(!0)}}),[t]);const f=(0,S.Z)(((e,t)=>{E||p(t)})),E=!0===a,y=(0,d.N6)(r)&&"success"===t;return o.createElement(pt,{className:"pending"===t?"pending":(0,d.Rw)(l)?t:"error",elevation:1},o.createElement(ft,{expanded:!!E||h,defaultExpanded:a,elevation:0,onChange:f},o.createElement(Et,{alwaysOpen:E,expandIcon:(0,d.X0)(a)&&"success"===t&&o.createElement(Ce.Z,null),disabled:"loading"===t},o.createElement(yt,null,"loading"===t?"bot"===g?o.createElement(lt,null):o.createElement(dt,{size:12}):"success"===t&&(0,d.Rw)(l)?o.createElement(Ze.Z,{color:"success",fontSize:"inherit"}):o.createElement(Ie.Z,{color:"disabled",fontSize:"inherit"}),o.createElement(vt,null,n),y&&o.createElement(o.Fragment,null,o.createElement(xt,null),o.createElement(bt,null,"auto"===r?h?"Hide":"Show":r)))),o.createElement(ve.Z,null,i?(0,d.Rw)(l)?s:o.createElement(o.Fragment,null,o.createElement(ot,{title:m,prompt:u,error:(0,Ae.e$)(l),severity:"error",sx:{mb:1},showSuggestions:!0},c),s):(0,d.Rw)(l)?s:o.createElement(ot,{title:m,prompt:u,error:(0,Ae.e$)(l),severity:"error",sx:{mb:1},showSuggestions:!0},c))))}const pt=(0,w.ZP)(Se.Z)`
  background: linear-gradient(116.45deg, rgba(89, 95, 236, 0.5) 0%, rgba(200, 182, 252, 0.1) 96.73%);
  padding: 1px;
  border-radius: 6px;
  margin-top: 12px;

  transform: translateY(20px);
  opacity: 0;
  transition: all .5s ease;

  &:before {
    display: none;
  }

  &.loading {
    transform: initial;
    opacity: 1;
  }

  &.success {
    transform: initial;
    opacity: 1;
  }

  &.error {
    transform: initial;
    opacity: 1;
  }

  &.pending {
    transform: translateY(20px);
    opacity: 0;
  }

`,ft=(0,w.ZP)(be.Z)`
  border: none;
  background: rgb(36, 35, 43);
  border-radius: 5px !important;
  padding: 4px 8px;
`,Et=(0,w.ZP)(xe.Z,{shouldForwardProp:e=>"alwaysOpen"!==e})`
  &.${we.Z.content} {
    margin-top: 4px;
    margin-bottom: 4px;
  }

  &.${we.Z.disabled} {
    opacity: 1;
  }

  ${e=>{let{alwaysOpen:t}=e;return t?"cursor: default !important;":""}}
`,yt=(0,w.ZP)("h2")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
`,bt=(0,w.ZP)("span")`
  color: #d7d7d7;
  font-weight: normal;
`,vt=(0,w.ZP)("span")`
  margin-left: 8px;
`,xt=(0,w.ZP)("span")`
  flex: 1;
`;var wt=n(18629);function St(e){let{content:t,avgInterval:n=80,maxDiff:a=50,maxContinuous:r=1}=e;const[l,i,c]=function(e){const[t,n]=(0,o.useState)(e),a=(0,o.useRef)(t);return(0,o.useEffect)((()=>{a.current=t}),[t]),[t,n,a]}(0),[s,u]=(0,o.useState)(!0);return(0,o.useEffect)((()=>{let e;i(0);const o=He(r).map((e=>e+1));return u(!1),function r(){e=setTimeout((()=>{c.current>=t.length?(clearTimeout(e),u(!0)):(i((e=>{const n=e+(Qe(o)??1);return t.substring(e,n).includes(" ")?e+1:n})),r())}),n+(.5-Math.random())*a)}(),()=>{clearTimeout(e)}}),[t]),o.createElement(o.Fragment,null,t.slice(0,l),t.length!==l,!s&&o.createElement(It,null))}const Zt=rt.F4`
  to {
    visibility: hidden;
  }
`,It=(0,w.ZP)("span")`
  display: inline-block;
  width: 1px;
  height: 1em;
  vertical-align: text-bottom;
  background-color: currentColor;
  animation: ${Zt} 1s steps(2, start) infinite;
`;function Ct(){var e;const{question:t,error:n,phase:a}=b(),r=(0,o.useMemo)((()=>{try{if((0,d.nf)(t))return(0,et.WU)(t.querySQL,{language:"mysql"});var e;if(function(e){if((0,Ae.IZ)(e)&&(0,d.nf)(e.response)&&(0,d.nf)(e.response.data))return"string"==typeof e.response.data.message&&"string"==typeof e.response.data.querySQL;return!1}(n))return(0,et.WU)((null==(e=n.response)?void 0:e.data.querySQL)??"",{language:"mysql"})}catch(a){return(null==t?void 0:t.querySQL)??""}}),[t,n]),l=(0,o.useMemo)((()=>{switch(a){case h.NONE:return"pending";case h.LOADING:case h.CREATING:case h.GENERATING_SQL:return"loading";case h.GENERATE_SQL_FAILED:case h.LOAD_FAILED:case h.CREATE_FAILED:return"error";default:return"success"}}),[a]),i=(0,o.useMemo)((()=>{switch(a){case h.NONE:return"";case h.LOADING:return"Loading question...";case h.CREATING:return"Generating SQL...";case h.GENERATING_SQL:return o.createElement(kt,null);case h.LOAD_FAILED:return"Question not found";case h.GENERATE_SQL_FAILED:case h.CREATE_FAILED:return"Failed to generate SQL";default:return"Generated SQL"}}),[a]),c=(0,o.useMemo)((()=>{if("error"===l)return n}),[l,n]),s=a===h.CREATED||a===h.GENERATING_SQL;return o.createElement(ht,{status:l,title:i,icon:s?"bot":"default",extra:"auto",error:c,errorWithChildren:!0,errorTitle:"Failed to generate SQL",errorPrompt:"Hi, it's failed to generate SQL for",errorMessage:(0,Ae.IZ)(c)&&429===(null==(e=c.response)?void 0:e.status)?o.createElement(o.Fragment,null,"Wow, you're a natural explorer! But it's a little tough to keep up!",o.createElement("br",null),"Take a break and try again in ",Nt(c),".",o.createElement("br",null),"Check out the ",o.createElement(De.Z,{to:"/blog/chat2query-tutorials",target:"_blank"},"tutorial"),", if you want to try AI-generated SQL in any other dataset ",o.createElement("b",null,"within 5 minutes"),"."):o.createElement(o.Fragment,null,"Whoops! No SQL query is generated. Check out ",o.createElement("a",{href:"javascript:void(0)",onClick:tt("faq-failed-to-generate-sql")},"potential reasons")," and try again later.")},(0,d.N6)(r)&&o.createElement(ye.Z,{language:"sql"},r))}const At=[["Great question!","Interesting question!","Awesome question!","You asked a winner!"],["Thinking...","Brain busting!","Creating SQL..."],["Tough, but still trying...","Hard, but persevering.","Tough, but forging ahead...","Challenging, but still striving...","Struggling, but pushing on..."],["Mastering the art of turning words into SQL magic\u2026","Gaining knowledge from your input...","Learning from your question...","Getting smarter with your input..."],["Making every effort!","Working my hardest","Trying my best...","Striving for greatness...","Trying my best..."],["Almost there\u2026","Almost done...","Just a second!"]];function kt(){const e=(0,o.useRef)({group:0}),[t,n]=(0,o.useState)((()=>Qe(At[0])));return(0,wt.Z)((()=>{let{group:t}=e.current;t<5?t+=1:t=4,n(Qe(At[t])),e.current.group=t}),3e3),(0,d.nf)(t)?o.createElement(St,{content:t}):o.createElement(o.Fragment,null,"Generating SQL...")}function Nt(e){const t=(0,Ae.PY)(e);if((0,d.nf)(null==t?void 0:t.waitMinutes))return`${null==t?void 0:t.waitMinutes} minutes`;const n=(0,Ae.e$)(e).match(/please wait (.+)\./);return(0,d.nf)(n)?n[1]:"30 minutes"}var Mt=n(87462),Pt=n(36804),Lt=n(88784);function Tt(e){let{children:t}=e;return o.createElement(Lt.Z,{title:o.createElement(x.Z,{p:1,fontSize:14},t)},o.createElement(ne.Z,null,o.createElement(Pt.Z,{fontSize:"inherit"})))}var Rt=n(78385),Gt=n(87054),Ft=n(85390),Dt=n(44373),$t=n(4316),qt=n(95764),Bt=n(85753),zt=n(98628),Ot=n(4882),Ut=n(71406);function _t(){const{showTips:e}=I(),{question:t}=b(),{loading:n,setAsyncData:a}=(0,Ot.P)(void 0),r=(0,Ut.Gb)(),{isAuthenticated:l}=(0,ce.D3)(),{data:c,mutate:u}=(0,_e.ZP)(l&&(0,d.nf)(t)?[t.id,"question-feedback"]:void 0,{fetcher:async e=>await r().then((async t=>await async function(e,t){return await i.po.get(`/explorer/questions/${e}/feedback`,{oToken:t})}(e,t))).then((e=>(0,d.uW)(e)?Boolean(e[0].satisfied):void 0)),errorRetryCount:0}),m=(0,S.Z)((()=>{(0,d.Rw)(t)||(a(r().then((async e=>await s(t.id,{satisfied:!0},e).finally((()=>{u(!0)}))))),e())})),g=(0,S.Z)((()=>{(0,d.Rw)(t)||a(r().then((async e=>await s(t.id,{satisfied:!1},e).finally((()=>{u(!0)})))))}));return o.createElement(Ht,null,o.createElement(Qt,null,o.createElement(Wt,{disabled:!0===c||n,onClick:m},!0===c?o.createElement(Bt.Z,{color:"primary",fontSize:"inherit"}):o.createElement(zt.Z,{fontSize:"inherit"})),o.createElement(Dt.Z,{orientation:"vertical",flexItem:!0,sx:{my:.5}}),o.createElement(Wt,{disabled:!1===c||n,onClick:g},!1===c?o.createElement($t.Z,{color:"primary",fontSize:"inherit"}):o.createElement(qt.Z,{fontSize:"inherit"}))))}const Ht=(0,w.ZP)("div")`
  position: absolute;
  pointer-events: none;
  right: 8px;
  bottom: 8px;
`,Qt=(0,w.ZP)("div")`
  display: inline-flex;
  pointer-events: auto;
  height: 32px;
  width: 65px;
  min-width: 65px;
  border-radius: 16px;
  background: #333333;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("opacity")}};
  
  &:hover {
    opacity: 1;
  }
`,Wt=(0,w.ZP)("button")`
  width: 28px;
  height: 28px;
  appearance: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 20px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create("color")}};

  &:not(:disabled) {
    cursor: pointer;
  }
`;function Vt(e){let{title:t,data:n,columns:a,fields:r}=e;const l=(0,o.useMemo)((()=>(0,d.uW)(a)?a.map((e=>({name:e}))):(0,d.nf)(r)?r:n.length>0?Object.keys(n[0]).map((e=>({name:e}))):[{name:""}]),[n,a,r]);return o.createElement(Kt,null,o.createElement(Yt,{className:"clearTable"},o.createElement("thead",null,(0,d.GC)(t)&&o.createElement("tr",null,o.createElement("th",{colSpan:l.length,align:"center"},t)),o.createElement("tr",null,l.map((e=>{let{name:t}=e;return o.createElement("th",{key:t},t)})))),o.createElement("tbody",null,n.map(((e,t)=>o.createElement("tr",{key:t},l.map((t=>{let{name:n}=t;return o.createElement("td",{key:n},e[n])}))))))))}const Kt=(0,w.ZP)("div")`
  overflow: scroll;
`,Yt=(0,w.ZP)("table")`
  font-size: 12px;
  display: table;
  min-width: 100%;
`;var jt=n(66284);function Jt(e){return/date|time|year|month/.test(e)}function Xt(e){return"number"==typeof e?e>=1970&&e<2100:Xt(Number(e))}function en(e,t){return e.map((e=>{let n=e[t];return Xt(n)&&(n=new Date(String(n))),{...e,[t]:n}}))}function tn(e,t){return(0,d.YN)(t,(e=>!(0,d.Rw)(e)&&(e instanceof Array?e.length>0&&(0,d.YN)(e,d.GC):(0,d.GC)(e))))?e.filter((e=>(0,d.YN)(t,(e=>t=>"string"==typeof t?(0,d.nf)(e[t]):(0,d.YN)(t,(t=>(0,d.nf)(e[t]))))(e)))):[]}var nn=n(85214),an=n(81284),on=n(19594),rn=n(95309),ln=n(61702),cn=n(44731);function sn(e){let{name:t}=e;const n=(0,o.useMemo)((()=>/\[bot]/i.test(t)?"/img/github-bot-icon.svg":`https://github.com/${t}.png`),[t]);return o.createElement(cn.Z,{src:n})}var un=n(49837),dn=n(91359),mn=n(45344);var gn=n(74446),hn=n(75559),pn=n(40172);const fn=(0,w.ZP)("div")`
  height: 100%;
`;function En(e){let{title:t}=e;const{question:n}=b(),a=(0,o.useMemo)((()=>()=>{var e,a,o,r;return Me("pingcap/ossinsight",{title:`${t} in question ${(null==n?void 0:n.id)??""}`,labels:"area/data-explorer,type/bug",assignee:"Mini256",body:`\nHi, ${t} in [question](https://ossinsight.io/explore/?id=${(null==n?void 0:n.id)??""})\n      \n## Chart info:\n\`\`\`json\n${JSON.stringify(null==n?void 0:n.chart,void 0,2)}\n\`\`\`\n\n## Result info:\n\`\`\`json\n// Fields\n${JSON.stringify(null==n||null==(e=n.result)?void 0:e.fields,void 0,2)}\n\n// First result (Totally ${(null==n||null==(a=n.result)?void 0:a.rows.length)??0} rows)\n${JSON.stringify(null==n||null==(o=n.result)||null==(r=o.rows)?void 0:r[0],void 0,2)}\n\`\`\`\n      `})}),[n]);return o.createElement(Ye,{severity:"warning",sx:{mb:2},createIssueUrl:a},t)}(0,n(6068).y)();const yn={LineChart:{Chart:function(e){let{chartName:t,title:n,x:a,y:r,data:l}=e;const i=(0,o.useMemo)((()=>{const e=Jt(a);l=e?en(l,a):l;const t=function(e){return"string"==typeof e?{type:"line",datasetId:"raw",name:e,encode:{x:a,y:e},itemStyle:{opacity:0}}:e.map(t)};return{dataset:{id:"raw",source:l},backgroundColor:"rgb(36, 35, 43)",grid:{top:64,left:8,right:8,bottom:8},tooltip:{trigger:"axis"},legend:{left:"center",top:28},series:t(r),title:{text:n},xAxis:{type:e?"time":"category"},yAxis:{type:"value"},animationDuration:2e3}}),[t,n,a,r,l]);return o.createElement(jt.Z,{theme:"dark",style:{height:400},opts:{height:400},option:i})},requiredFields:["x","y"]},BarChart:{Chart:function(e){let{chartName:t,title:n,x:a,y:r,data:l}=e;const{options:i,height:c}=(0,o.useMemo)((()=>{const e=Jt(a);l=e?en(l,a):l;const t=!e,o=function(e){return"string"==typeof e?{type:"bar",name:e,datasetId:"raw",encode:{x:t?e:a,y:t?a:e}}:e.map(o)};return{options:{dataset:{id:"raw",source:l},backgroundColor:"rgb(36, 35, 43)",grid:{top:64,left:8,right:8,bottom:8},tooltip:{},legend:{left:"center",top:28},series:o(r),title:{text:n},[t?"yAxis":"xAxis"]:{type:e?"time":"category",inverse:t},[t?"xAxis":"yAxis"]:{type:"value",position:t?"top":void 0},animationDuration:2e3},height:Math.max(t?40*l.length:400,400)}}),[t,n,a,r,l]);return o.createElement(jt.Z,{theme:"dark",style:{height:c},opts:{height:c},option:i})},requiredFields:["x","y"]},PieChart:{Chart:function(e){let{chartName:t,title:n,value:a,label:r,data:l}=e;const i=(0,o.useMemo)((()=>({backgroundColor:"rgb(36, 35, 43)",dataset:{id:"raw",source:l},grid:{top:64,left:8,right:8,bottom:8},tooltip:{},legend:{left:8,top:8,height:"90%",type:"scroll",orient:"vertical"},series:{type:"pie",top:36,name:r,datasetId:"raw",encode:{itemName:r,value:a}},title:{text:n}})),[t,n,a,r,l]);return o.createElement(jt.Z,{theme:"dark",style:{height:400},opts:{height:400},option:i})},requiredFields:["value","label"]},PersonalCard:{Chart:function(e){let{chartName:t,title:n,user_login:a,data:r}=e;return o.createElement(nn.Z,null,r.map(((e,t)=>o.createElement(an.ZP,{key:t},o.createElement(rn.Z,{component:"a",href:`https://github.com/${e[a]}`,target:"_blank"},o.createElement(on.Z,null,o.createElement(sn,{name:e[a]})),o.createElement(ln.Z,null,e[a]))))))},requiredFields:["user_login"]},RepoCard:{Chart:function(e){let{chartName:t,title:n,repo_name:a,data:r}=e;return o.createElement(nn.Z,null,r.map(((e,t)=>o.createElement(an.ZP,{key:t},o.createElement(rn.Z,{component:"a",href:`https://github.com/${e[a]}`,target:"_blank"},o.createElement(on.Z,null,o.createElement(sn,{name:e[a].split("/")[0]})),o.createElement(ln.Z,null,e[a]))))))},requiredFields:["repo_name"]},Table:{Chart:Vt,requiredFields:[]},NumberCard:{Chart:function(e){let{chartName:t,title:n,label:a,value:r,data:l}=e;if(1===l.length&&1===l.length&&(0,d.Rw)(l[0][a])){const e=l[0][r];return o.createElement(un.Z,null,o.createElement(dn.Z,{sx:{textAlign:"center",fontSize:36}},o.createElement(Ne.Z,{sx:{opacity:.4},fontSize:22,mt:2,mb:0,color:"text.secondary",gutterBottom:!0,align:"center"},l[0][a]??n),(0,d.z0)(e)?o.createElement(mn.Z,{value:l[0][r],hasComma:!0,duration:800,size:36}):String(e)))}return(0,d.N6)(a)?o.createElement(o.Fragment,null,o.createElement(Ne.Z,{variant:"h4"},n),o.createElement(Re.ZP,{container:!0,spacing:1,mt:1},l.map(((e,t)=>o.createElement(Re.ZP,{key:t,item:!0,xs:12,sm:4,md:3,lg:2},o.createElement(un.Z,{sx:{p:2}},o.createElement(Ne.Z,{variant:"subtitle1"},e[a]),o.createElement(Ne.Z,{variant:"body2",color:"#7c7c7c"},e[r]))))))):o.createElement(nn.Z,null,l.map(((e,t)=>o.createElement(an.ZP,{key:t},o.createElement(un.Z,{sx:{p:4}},o.createElement(ln.Z,{primary:n,secondary:`${e[r]}`}))))))},requiredFields:["value"],optionalFields:["label"]},MapChart:{Chart:function(e){let{chartName:t,title:n,country_code:a,value:r,data:l}=e;const[i,c]=(0,o.useState)(null),s=(0,o.useRef)(null),u=(0,o.useMemo)((()=>function(e,t,n){return e.map((e=>{const a=(0,gn.$)(e[t]),{long:o,lat:r}=(0,gn.b)(e[t])??{};return[a,o,r,e[n]]})).filter((e=>{let[t]=e;return(0,d.GC)(t)})).sort(((e,t)=>Math.sign(t[3]-e[3])))}(l,a,r)),[l,a,r]),m=(0,o.useMemo)((()=>{var e,t;const a=(null==(e=u[0])?void 0:e[3])??0;return{backgroundColor:"rgb(36, 35, 43)",geo:(0,hn.Mm)(),dataset:[{id:"top1",source:u.slice(0,1)},{id:"rest",source:u.slice(1)}],title:{text:n},legend:{show:!0,left:8,top:24,orient:"vertical"},series:[{type:"effectScatter",datasetId:"top1",coordinateSystem:"geo",name:`Top 1 (${null==(t=u[0])?void 0:t[0]})`,encode:{lng:1,lat:2,value:3,itemId:0},symbolSize:e=>1+64*Math.sqrt(e[3]/a)},{type:"scatter",datasetId:"rest",coordinateSystem:"geo",name:"Rest",encode:{lng:1,lat:2,value:3,itemId:0},symbolSize:e=>1+64*Math.sqrt(e[3]/a)}],tooltip:{formatter:e=>`<b>${r}</b><br/>${e.marker} <b>${e.value[0]}</b> ${e.value[3]}`},animationDuration:2e3}}),[t,n,r,u]);return(0,o.useEffect)((()=>{if((0,d.Rw)(i))return;const e=new ResizeObserver((e=>{var t,n;let[a]=e;null==(t=s.current)||null==(n=t.getEchartsInstance())||n.resize({height:a.contentRect.height})}));return e.observe(i),()=>{e.disconnect()}}),[i]),o.createElement(pn.ZP,{ratio:4/3,style:{maxWidth:600,margin:"auto"}},o.createElement(fn,{ref:c},o.createElement(jt.Z,{theme:"dark",opts:{height:(null==i?void 0:i.clientHeight)??"auto"},option:m,ref:s})))},requiredFields:["country_code","value"]}};function bn(e){let{onPrepared:t,onExit:n,...a}=e;const{config:r,fields:l}=(0,o.useMemo)((()=>{const e=yn[a.chartName];return{config:e,fields:((null==e?void 0:e.requiredFields)??[]).map((e=>a[e]))}}),[(0,_e.wE)(a)]),i=tn(a.data,l);let c,s;return(0,d.Rw)(r)&&(c=o.createElement(En,{title:`AI has generated an unknown chart type '${a.chartName}'`})),0===a.data.length?c=o.createElement(at,null):i.length>0?(0,d.nf)(r)&&(s=(0,o.createElement)(r.Chart,{...a,data:i})):c=o.createElement(En,{title:"AI has generated invalid chart info"}),(0,o.useEffect)((()=>(0!==a.data.length&&0===i.length?null==t||t(!0):null==t||t(!1),()=>{null==n||n()})),[i.length,a.data.length,t,n]),o.createElement(o.Fragment,null,c,s)}var vn=n(91693),xn=n(96942),wn=n(45670),Sn=n(55050),Zn=n(89747),In=n(76743);function Cn(e){let{loading:t=!1,children:n}=e;return o.createElement(An,{elevation:0},o.createElement(dn.Z,null,o.createElement(Ne.Z,{variant:"h4",display:"flex",alignItems:"center",fontSize:16,fontFamily:"monospace"},o.createElement(kn,null),o.createElement(Nn,null,"Insight robot:")),o.createElement(Ne.Z,{variant:"body1",fontSize:14,fontFamily:"monospace",mt:2,whiteSpace:"pre-wrap"},t?o.createElement(Ge.Z,{variant:"text",width:"61%"}):n)))}const An=(0,w.ZP)(un.Z)`
  background: linear-gradient(116.45deg, rgba(89, 95, 236, 0.25) 0%, rgba(200, 182, 252, 0.05) 96.73%);
  border: 0;
  margin-bottom: 16px;
`,kn=(0,w.ZP)("span")`
  display: inline-block;
  background: url("/img/bot.png") no-repeat center center;
  background-size: contain;
  width: 24px;
  height: 24px;
`,Nn=(0,w.ZP)("span")`
  margin-left: 12px;
`;var Mn=n(21972),Pn=n(46895),Ln=n(78667),Tn=n(49185),Rn=n(87385),Gn=n(37332),Fn=n(70431),Dn=n(44276),$n=n(1969);function qn(e){let{url:t,title:n,summary:a,hashtags:r}=e;const{showTips:l}=I(),i=(0,u.Z)((e=>{l(),window.open(e,"_blank")}));return o.createElement(On,null,o.createElement(Mn.Z,{ariaLabel:"share",sx:{display:"inline-block",position:"absolute",right:0,top:0,[`.${Ln.Z.actions}`]:{width:64,display:"flex",flexDirection:"column",alignItems:"flex-end"}},icon:o.createElement("span",null,"Share",o.createElement(Tn.Z,{fontSize:"inherit"})),FabProps:Bn},o.createElement(Pn.Z,{sx:{overflow:"hidden"},icon:o.createElement(Rn.Z,null),FabProps:zn,onClick:(0,S.Z)((()=>i((0,$n.PE)(t,{title:n,hashtags:r}))))}),o.createElement(Pn.Z,{sx:{overflow:"hidden"},icon:o.createElement(Gn.Z,null),FabProps:zn,onClick:(0,S.Z)((()=>i((0,$n.BE)(t,{title:n,summary:a}))))}),o.createElement(Pn.Z,{sx:{overflow:"hidden"},icon:o.createElement(Fn.Z,null),FabProps:zn,onClick:(0,S.Z)((()=>i((0,$n.$Z)(t,{title:n}))))}),o.createElement(Pn.Z,{sx:{overflow:"hidden"},icon:o.createElement(Dn.Z,null),FabProps:zn,onClick:(0,S.Z)((()=>i((0,$n.OA)(t,{title:n}))))})))}const Bn={color:"inherit",disableRipple:!0,sx:{fontFamily:"var(--ifm-heading-font-family)",textTransform:"unset",fontSize:16,fontWeight:"normal",width:68,height:32,minHeight:32,background:"none",boxShadow:"none !important",pr:.5,"> span":{display:"inline-flex",gap:.5,alignItems:"center"},"&:hover, &:active":{background:"none"}}},zn={sx:{width:32,height:32,minHeight:32,borderRadius:16,mx:0,overflow:"hidden"}},On=(0,w.ZP)("div")`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 32px;
  line-height: 32px;
`;function Un(){var e,t,n;const{question:a,error:r,phase:l}=b(),{search:i}=I(),[s,u]=(0,o.useState)(null),m=null==a||null==(e=a.result)?void 0:e.rows,g=(0,o.useMemo)((()=>{switch(l){case h.CREATED:case h.QUEUEING:case h.EXECUTING:return"loading";case h.EXECUTE_FAILED:case h.VISUALIZE_FAILED:case h.UNKNOWN_ERROR:return"error";case h.READY:case h.SUMMARIZING:return"success";default:return"pending"}}),[l]),p=(0,o.useMemo)((()=>{var e;switch(l){case h.CREATED:return"Pending...";case h.QUEUEING:return`${(null==a?void 0:a.queuePreceding)??NaN} requests ahead`;case h.EXECUTING:return"Running SQL...";case h.EXECUTE_FAILED:return"Failed to execute SQL";case h.UNKNOWN_ERROR:return"Unknown error";case h.VISUALIZE_FAILED:case h.READY:case h.SUMMARIZING:return o.createElement(o.Fragment,null,`${(null==a||null==(e=a.result)?void 0:e.rows.length)??"NaN"} rows in ${(null==a?void 0:a.spent)??"NaN"} seconds`,function(e){if((0,d.nf)(e)&&!(0,d.yD)(e.engines))return o.createElement(o.Fragment,null,". Running on",o.createElement(Hn,null,e.engines.map(_n).join(", ")),o.createElement(Tt,null,"All queries run on ",o.createElement("b",null,"ONE")," TiDB service. The TiDB SQL optimizer decides which engine to use for executing queries:",o.createElement("ul",null,o.createElement("li",null,"Complex and heavy OLAP queries are executed by the columnar engine."),o.createElement("li",null,"Low-latency high-concurrency OLTP queries are executed by the row-based engine."))));return null}(a));default:return"pending"}}),[a,l]),{url:f,title:E,hashtags:y}=(0,o.useMemo)((()=>{var e;if((0,d.Rw)(a))return{url:"https://ossinsight.io/explore",title:"Data Explorer",hashtags:[]};let t;const n=`${i} | OSSInsight Data Explorer`,o=function(){const e=new Set,t=[];for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return a.forEach((n=>{for(const a of n)e.has(a)||(e.add(a),t.push(a))})),t}((null==(e=a.answerSummary)?void 0:e.hashtags)??[],["OpenSource","OpenAI","TiDBCloud"]);return t="undefined"==typeof location?(0,d.GC)(a.id)?`https://ossinsight.io/explore?id=${a.id}`:"https://ossinsight.io/explore":location.href,{url:t,title:n,hashtags:o}}),[a,i]),v=(0,o.useMemo)((()=>{if("error"===g)return r}),[g,r]),x=(0,o.useMemo)((()=>{if(l===h.VISUALIZE_FAILED)return r}),[l,r]),w=(0,o.useMemo)((()=>(0,d.nf)(a)&&(0,d.nf)(a.answerSummary)?(0,d.uW)(a.answerSummary.hashtags)?`${a.answerSummary.content}\n${a.answerSummary.hashtags.map((e=>`#${e}`)).join(" ")}`:a.answerSummary.content:""),[null==a?void 0:a.answerSummary]);return o.createElement(ht,{status:g,title:p,extra:o.createElement(ea,null,o.createElement("span",{ref:u}),o.createElement(qn,{url:f,title:E,summary:null==a||null==(t=a.answerSummary)?void 0:t.content,hashtags:y})),error:v,defaultExpanded:!0,errorTitle:"Failed to execute question",errorPrompt:"Hi, it's failed to execute",errorMessage:(0,Ae.e$)(v)},((0,d.nf)(null==a?void 0:a.answerSummary)||(null==a?void 0:a.status)===c.Summarizing)&&o.createElement(Cn,{loading:(null==a?void 0:a.status)===c.Summarizing},o.createElement(St,{content:w,maxContinuous:2,avgInterval:40})),l===h.QUEUEING&&o.createElement(Yn,{source:0===(null==a?void 0:a.queuePreceding)?Vn:Wn,interval:5e3}),l===h.EXECUTING&&o.createElement(Yn,{source:Kn,interval:3e3}),o.createElement(Qn,{chartData:(null==a?void 0:a.chart)??void 0,chartError:x,result:m,fields:null==a||null==(n=a.result)?void 0:n.fields,controlsContainer:s}))}function _n(e){switch(e){case"tiflash":return"columnar storage";case"tikv":return"row storage";default:return e}}const Hn=(0,w.ZP)("span")`
  color: #5667FF;
  border: 1px solid #5667FF80;
  border-radius: 2px;
  padding: 4px 8px;
  margin: 0 4px;
`;function Qn(e){let{chartData:t,chartError:n,fields:a,result:r,controlsContainer:l}=e;const[i,c]=(0,o.useState)("visualization"),s=(0,o.useRef)("visualization"),u=(0,o.useMemo)((()=>e=>()=>{var t;null==(t=document.getElementById(e))||t.scrollIntoView({behavior:"smooth"})}),[]);(0,o.useEffect)((()=>{c(s.current)}),[t]);const m=(e,t)=>{(0,d.GC)(t)&&c(t)},g=(0,S.Z)((e=>{s.current=e?"raw":"visualization"})),h=(0,S.Z)((()=>{s.current="visualization"}));return(0,o.useMemo)((()=>{const e=(0,Ae.e$)(n),c=function(t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),o.createElement(ot,{title:"Unable to generate chart",prompt:"Hi, it's failed to generate chart for",error:e,severity:"warning",sx:t?{mb:2}:void 0,showSuggestions:n})};if((0,d.Rw)(r))return(0,d.nf)(n)?c(!1,!0):null;const s=()=>o.createElement(Ne.Z,{component:"div",variant:"body2",color:"#D1D1D1",mt:2},"\ud83e\udd14 Not exactly what you're looking for?",o.createElement("ul",null,o.createElement("li",null,"AI can write SQL effectively, but remember that it's still a work in progress with limitations."),o.createElement("li",null,"Clear and specific language will help the AI understand your needs. Check out ",o.createElement("a",{href:"javascript:void(0)",onClick:u("data-explorer-faq")},"FAQ")," for more tips."),o.createElement("li",null,"GitHub data is not your focus? Explore any other dataset with our capabilities."))),p=()=>o.createElement(o.Fragment,null,o.createElement(na,null,o.createElement(Vt,{chartName:"Table",title:"",data:r,fields:a}),o.createElement(_t,null)),s());if((0,d.Rw)(t))return(0,d.nf)(n)?o.createElement(o.Fragment,null,c(!0),p()):null;const f=()=>o.createElement(o.Fragment,null,o.createElement(na,null,o.createElement(bn,(0,Mt.Z)({},t,{data:r,fields:a,onPrepared:g,onExit:h})),o.createElement(_t,null)),s());return(0,d.nf)(n)?o.createElement(o.Fragment,null,c(!0),p()):"Table"===t.chartName?f():o.createElement(o.Fragment,null,o.createElement(Rt.Z,{container:l},o.createElement(Xn,{className:"chart-controls"},o.createElement(Ft.Z,{size:"small",value:i,onChange:m,exclusive:!0,color:"primary"},o.createElement(Gt.Z,{value:"visualization",size:"small",sx:{padding:"5px"}},o.createElement(vn.Z,{fontSize:"small"})),o.createElement(Gt.Z,{value:"raw",size:"small",sx:{padding:"5px"}},o.createElement(xn.Z,{fontSize:"small"}))))),o.createElement(wn.ZP,{value:i},o.createElement(ta,{value:"visualization"},f()),o.createElement(ta,{value:"raw"},p())))}),[i,t,n,r,a])}const Wn=["So many people are just as curious as you are.","Do you know how many types of events on GitHub? - 17 types!","GitHub generates over 4 million new events each day. We synchronize with them in real time and insert updates in milliseconds.","In 2022, 95% of the top 20 most active developers on GitHub are bots.","Python has been the most used back-end programming language for years on GitHub."],Vn=["Almost there! Can't wait to see your result!"],Kn=["GitHub has an incredible 5+ billion rows of event data waiting for you to explore.","Perhaps AI generates a complex SQL.","Are you curious about the complex SQL query generated by AI? Click [Show] in the upper right corner to check it.","Do you know that you can click [Show] in the upper right corner to check the SQL query AI generated for you?"],Yn=e=>{let{source:t,interval:n}=e;const[a,r]=(0,o.useState)(0);return(0,wt.Z)((()=>{r((e=>(e+1)%t.length))}),n),o.createElement(Zn.Z,{component:jn},o.createElement(lt,{animated:!1}),o.createElement(In.Z,{key:a,timeout:400,classNames:"item"},o.createElement(Jn,null,t[a])))},jn=(0,w.ZP)("span")`
  position: relative;
  display: block;
  min-height: 42px;
  min-width: 1px;
`,Jn=(0,w.ZP)("span")`
  display: inline-block;
  width: max-content;
  padding-left: 8px;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["opacity","transform"],{duration:400})}};

  &.item-enter {
    opacity: 0;
    transform: translate3d(-10%, 0, 0) scale(0.85);
  }

  &.item-enter-active {
    position: absolute;
    opacity: 1;
    transform: none;
  }

  &.item-exit {
    opacity: 1;
    transform: none;
  }

  &.item-exit-active {
    position: absolute;
    opacity: 0;
    transform: translate3d(10%, 0, 0) scale(0.85);
  }
`,Xn=(0,w.ZP)("div")`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0;
  transition: opacity .2s ease;
  margin-right: 12px;
  padding-right: 12px;
  border-right: 1px solid #3c3c3c;
`,ea=(0,w.ZP)("span")`
  display: inline-flex;
  align-items: center;
`,ta=(0,w.ZP)(Sn.Z)`
  padding: 0;
`,na=(0,w.ZP)("div")`
  position: relative;
`;function aa(e){let{search:t}=e;const{phase:n}=b();return o.createElement(o.Fragment,null,o.createElement(Ct,null),o.createElement(Un,null),n===h.READY&&o.createElement(fe,{sx:{mt:2}}))}function oa(e){let{title:t="\ud83d\udca1 Popular questions"}=e;return o.createElement(o.Fragment,null,o.createElement(Ke,{title:(e,n)=>o.createElement(x.Z,{height:"40px"},t," ",o.createElement(ne.Z,{onClick:e,disabled:n},o.createElement(Pe.Z,null))),n:6}))}var ra=n(41796),la=n(44044),ia=n(60641),ca=n(64421),sa=n(98948),ua=n(61225);function da(e){let{startColor:t="#794BC5",stopColor:n="#3D44FF",steps:a,sx:r}=e;const l=(0,ua.Z)((e=>e.breakpoints.down("md"))),i=(0,o.useMemo)((()=>{const e=(0,ra.tB)(t).values,o=(0,ra.tB)(n).values;return He(a.length+1).map((t=>function(e,t,n){let[a,o,r]=e,[l,i,c]=t;const s=1-n;return(0,ra.wy)({type:"rgb",values:[a*s+l*n,o*s+i*n,r*s+c*n]})}(e,o,t/a.length)))}),[t,n,a.length]);return o.createElement(o.Fragment,null,o.createElement("svg",{width:"0",height:"0"},o.createElement("defs",null,a.map(((e,t)=>o.createElement("linearGradient",{id:`explore-step-gradient-${t}`,key:t,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o.createElement("stop",{offset:"0%",style:{stopColor:i[t],stopOpacity:1}}),o.createElement("stop",{offset:"100%",style:{stopColor:i[t+1],stopOpacity:1}})))))),o.createElement(sa.Z,{sx:r,orientation:l?"vertical":"horizontal"},a.map(((e,t)=>o.createElement(la.Z,{key:e,completed:!1,active:!0},o.createElement(ma,{fill:`explore-step-gradient-${t}`},e))))))}const ma=(0,w.ZP)(ca.Z,{shouldForwardProp:e=>"fill"!==e})`
  .${ia.Z.root}.${ia.Z.active} {
    fill: url(#${e=>{let{fill:t}=e;return t}}); // ${e=>{let{color:t}=e;return t}};
  }
`;var ga=n(64232);function ha(){return o.createElement(P.Z,{component:"section",maxWidth:"md",id:"data-explorer-faq",sx:{py:8}},o.createElement(Ne.Z,{variant:"h2",textAlign:"center"},"FAQ"),pa.map(((e,t)=>{let{q:n,a:a,id:r}=e;return o.createElement(fa,{key:t,id:r},o.createElement(Ea,null,n),o.createElement(ya,null,a))})),o.createElement(Ne.Z,{variant:"body1",textAlign:"center",color:"#929292",fontSize:16,mt:8},"Still having trouble? Contact us, we're happy to help! ",wa," ",Sa))}const pa=[{q:"How it works",a:o.createElement(da,{steps:["Input your question","Translate the question into SQL","Visualize and output results"]})},{q:"What are the limitations of Data Explorer?",a:o.createElement(o.Fragment,null,o.createElement("ol",null,o.createElement("li",null,"AI is still a work in progress with limitations",o.createElement("br",null),"Its limitations include:",o.createElement("ul",null,o.createElement("li",null,"A lack of context and knowledge of the specific database structure"),o.createElement("li",null,"A lack of domain knowledgestructure"),o.createElement("li",null,"Inability to produce the most efficient SQL statement for large and complex queries"),o.createElement("li",null,"Sometimes service instability")),o.createElement("br",null),"To help AI understand your query intention, please use clear, specific phrases in your question. Check out our question optimization ",o.createElement("a",null,"tips"),". We're constantly working on improving and optimizing it, so any feedback you have is greatly appreciated. Thanks for using!"),o.createElement("br",null),o.createElement("li",null,"The dataset itself is a limitation for our tool"),"All the data we use on this website is sourced from GH Archive, a non-profit project that records and archives all GitHub event data since 2011 (public data only). If a question falls outside of the scope of the available data, it may be difficult for our tool to provide a satisfactory answer."))},{id:"faq-failed-to-generate-sql",q:"Why did it fail to generate an SQL query?",a:o.createElement(o.Fragment,null,"Potential reasons:",o.createElement("ul",null,o.createElement("li",null,"The AI was unable to understand or misunderstood your question, resulting in an inability to generate SQL. To know more about AI's limitations, you can check out the previous question."),o.createElement("li",null,"Network issues."),o.createElement("li",null,"You had excessive requests. Note that you can ask ",o.createElement("b",null,"up to 15 questions per hour"),".")),o.createElement("br",null),"The potential solution is phrase your question which is related GitHub with short, specific words, then try again. And we strongly recommend you use our query templates near the search box to start your exploring.")},{id:"faq-optimize-sql",q:"The query result is not satisfactory. How can I optimize my question?",a:o.createElement(o.Fragment,null,"We use AI to translate your question to SQL. But it's still a work in progress with limitations.",o.createElement("br",null),"To help AI understand your query intention and get a desirable query result, you can rephrase your question using clear, specific phrases related to GitHub. We recommend:",o.createElement("ul",null,o.createElement("li",null,'Using a GitHub login account instead of a nickname. For example, change "Linus" to "torvalds." '),o.createElement("li",null,'Using a GitHub repository\'s full name. For example, change "react" to "facebook/react."'),o.createElement("li",null,'Using GitHub terms. For example, to find Python projects with the most forks in 2022, change your query "The most popular Python projects 2022" to "Python projects with the most forks in 2022."')),o.createElement("br",null),"You can also get inspiration from the suggested queries near the search box.")},{q:"Why did it fail to generate a chart?",a:o.createElement(o.Fragment,null,"Potential reasons:",o.createElement("ul",null,o.createElement("li",null,"The SQL query was incorrect or could not be generated, so the answer could not be found in the database, and the chart could not be generated."),o.createElement("li",null,"The answer was found, but the AI did not choose the correct chart template, so the chart could not be generated."),o.createElement("li",null,"The SQL query was correct, but no answer was found, so the chart could not be displayed.")))},{q:"Can I use the AI-powered feature with my own dataset?",a:o.createElement(o.Fragment,null,"Yes! Even if you're not a GitHub expert, you can still play around with any dataset at ",o.createElement("b",null,"NO COST"),". Just keep in mind that we take privacy seriously. Our model only needs access to your database schema, not any actual data about your customers.")},{q:"What technology is Data Explorer built on?",a:o.createElement(o.Fragment,null,"Its major technologies include:",o.createElement("ul",null,o.createElement("li",null,"Data source: GH Archive and GitHub event API",o.createElement("br",null),"GH Archive collects and archives all GitHub data since 2011 and updates it hourly. ",o.createElement("b",null,"By combining the GH Archive data and the GitHub event API, we can gain streaming, real-time data updates.")),o.createElement("li",null,"One database for all workloads:  ",o.createElement(De.Z,{href:"https://www.pingcap.com/tidb-cloud/?utm_source=ossinsight&utm_medium=referral",target:"_blank",rel:"noopener"}," TiDB Cloud"),o.createElement("br",null),"Facing continuously growing large-volume data (currently 5+ billion GitHub events), we need a database that can:",o.createElement("ul",null,o.createElement("li",null,"Store massive data"),o.createElement("li",null,"Handle complex analytical queries"),o.createElement("li",null,"Serve online traffic")),o.createElement(De.Z,{href:"https://docs.pingcap.com/tidb/stable/overview/?utm_source=ossinsight&utm_medium=referral",target:"_blank",rel:"noopener"}," TiDB ")," is an ideal solution. TiDB Cloud is its fully managed cloud Database as a Service. It lets users launch TiDB in seconds and offers the pay-as-you-go pricing model. Therefore, we choose TiDB Cloud as our backend database."),o.createElement("li",null,"AI engine: OpenAI"),"To enable users without SQL knowledge to query with this tool, ",o.createElement("b",null,"we use OpenAI to translate the natural language to SQL.")))}],fa=(0,w.ZP)("div")`
  scroll-margin: 100px;
  &:not(:first-of-type) {
    margin-top: 48px;
  }
`,Ea=(0,w.ZP)("h3")`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`,ya=(0,w.ZP)("div")`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #C1C1C1;
  margin: 0;
`,ba=(0,w.ZP)("a")`
  display: inline-flex;
  vertical-align: text-bottom;
  width: 24px;
  height: 24px;
  text-decoration: none !important;
  align-items: center;
  justify-content: center;
  transition: ${e=>{let{theme:t}=e;return t.transitions.create(["color","background-color"])}};
  margin-left: 8px;
`,va=(0,w.ZP)(ba)`
  color: #eaeaea !important;

  &:hover {
    color: white;
  }
`,xa=(0,w.ZP)(ba)`
  font-size: 18px;
  color: #1D9BF0 !important;
  border-radius: 50%;
  background-color: #eaeaea;

  &:hover {
    background-color: white;
  }
`,wa=o.createElement(va,{href:"https://github.com/pingcap/ossinsight/issues",target:"_blank"},o.createElement(Te.Z,null)),Sa=o.createElement(xa,{href:"https://twitter.com/OSSInsight",target:"_blank"},o.createElement(ga.Z,{fontSize:"inherit"}));var Za=n(77331);function Ia(){const{question:e}=b(),[t,n]=(0,o.useState)(!1);(0,o.useEffect)((()=>{n(!1)}),[null==e?void 0:e.id]);const a=(0,u.Z)((e=>()=>{e(),n(!0)}));return o.createElement(Ca,null,o.createElement(Ke,{variant:"text",n:4,title:(e,t)=>o.createElement(Ne.Z,{variant:"h3",mb:0,fontSize:16},"\ud83d\udca1 Get inspired",o.createElement(ne.Z,{onClick:a(e),disabled:t},o.createElement(Pe.Z,{fontSize:"inherit"})))}),t&&o.createElement(o.Fragment,null,o.createElement(Dt.Z,{orientation:"horizontal",sx:{my:2}}),o.createElement(x.Z,null,o.createElement(Aa,{to:"/blog/chat2query-tutorials"},"Get hands-on with your data ",o.createElement(Za.Z,{color:"inherit"})))))}const Ca=(0,w.ZP)("div")`
  position: sticky;
  top: 92px;
`,Aa=(0,w.ZP)(De.Z)`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  background: linear-gradient(90deg, #BAC1FD 0%, #DAC4FF 106.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  &, &:hover, &:visited, &:active {
    color: #DAC4FF;
  }
`;var ka=n(5299),Na=n(63675),Ma=n(30120),Pa=n(25425),La=n(7449);const Ta=(0,o.forwardRef)((function(e,t){const[n,a]=(0,o.useState)(!1),[r,l]=(0,Na.Z)("ossinsight.explore.tips-history",{serializer:e=>JSON.stringify(e.map((e=>e.toJSON()))),deserializer:e=>{try{const t=JSON.parse(e);return t instanceof Array?t.map((e=>Ma.ou.fromISO(e))).filter((e=>e.diffNow("days").days<30)):[]}catch{return[]}},defaultValue:[]}),i=(0,u.Z)((()=>{r.length<2&&(a(!0),l((e=>(null==e?void 0:e.concat(Ma.ou.now()))??[Ma.ou.now()])))})),c=(0,S.Z)((()=>{a(!1)}));return(0,La.h)(t,{show:i}),o.createElement(Rt.Z,null,o.createElement(Pa.Z,{direction:"left",in:n},o.createElement(Ra,null,o.createElement(Ga,null),o.createElement(Fa,null),o.createElement(Da,null,o.createElement(dn.Z,null,"Glad you enjoy the exploration \ud83d\ude03 Check out our ",o.createElement(De.Z,{to:"/blog/chat2query-tutorials",target:"_blank"},"tutorial"),", if you want to try AI-generated SQL for any other dataset."),o.createElement($a,{size:"small",onClick:c},o.createElement(re.Z,null))))))})),Ra=(0,w.ZP)("div")`
  position: fixed;
  top: 50vh;
  right: 16px;
  display: flex;
  flex-direction: row-reverse;

  ${e=>{let{theme:t}=e;return t.breakpoints.down("md")}} {
    flex-direction: column;
    align-items: flex-end;
  }
`,Ga=(0,w.ZP)("div")`
  background: url("/img/bot.png") no-repeat center center;
  background-size: contain;
  width: 32px;
  height: 32px;
`,Fa=(0,w.ZP)("div")`
  width: 16px;
  height: 16px;
`,Da=(0,w.ZP)(un.Z)`
  background: #333333;
  max-width: 300px;
  position: relative;

  a {
    color: white;
    text-decoration: underline;
  }
`,$a=(0,w.ZP)(ne.Z)`
  position: absolute;
  right: 8px;
  top: 8px;
`;function qa(){var e;const{question:t,loading:n,load:a,error:r,phase:l,reset:i,create:c}=E({pollInterval:2e3}),[s,u]=(0,v.ZP)("id",(0,v.Rc)(),!0),[m,g]=(0,o.useState)(""),f=(0,o.useRef)(null),b=!p.has(l),w=b||(0,d.oM)(m),I=(0,d.Rw)(null==t?void 0:t.id)&&!n&&l!==h.CREATE_FAILED,A=((null==t||null==(e=t.result)?void 0:e.rows.length)??0)>0;(0,o.useEffect)((()=>{(0,d.nf)(t)&&g(t.title)}),[null==t?void 0:t.title]),(0,o.useEffect)((()=>{(0,d.nf)(s)?a(s):N()}),[s]),(0,o.useEffect)((()=>{(0,d.nf)(null==t?void 0:t.id)&&u(null==t?void 0:t.id)}),[n,null==t?void 0:t.id]);const k=(0,S.Z)((()=>{b||c(m)})),N=(0,S.Z)((()=>{i(),g(""),u(void 0)})),M=(0,S.Z)((e=>{g(e),c(e)})),P=(0,S.Z)(((e,t)=>{s!==e&&(g(t??""),a(e))})),L=(0,S.Z)((()=>{var e;null==(e=f.current)||e.show()})),T=!I&&(l===h.READY||l===h.SUMMARIZING)&&A;return o.createElement(y.Provider,{value:{phase:l,question:t,loading:n,error:r,create:c,load:a,reset:i}},o.createElement(Z.Provider,{value:{search:m,handleSelect:M,handleSelectId:P,showTips:L}},o.createElement(C,null),o.createElement(G,{showSide:T,showHeader:I,showFooter:I,header:o.createElement(Y,null),side:o.createElement(Ia,null),footer:o.createElement(x.Z,{mt:2},o.createElement(fe,{align:"center"}),o.createElement(Ba,{to:"/blog/chat2query-tutorials",target:"_blank"},"\ud83e\uddd0 GitHub data is just the beginning. Uncover hidden insights in any data!",o.createElement(ka.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom",ml:.5}})))},o.createElement(se,{value:m,onChange:g,onAction:k,disableInput:b,disableClear:""===m,disableAction:w,onClear:N,clearState:b?"stop":void 0}),o.createElement(ge,{state:I?"recommend":"execution",direction:I?"down":"up"},o.createElement(x.Z,{key:"execution",sx:{mt:1.5}},o.createElement(aa,{search:m})),o.createElement(x.Z,{key:"recommend",sx:{mt:4}},o.createElement(oa,null)))),o.createElement(ha,null),o.createElement(Ta,{ref:f})))}const Ba=(0,w.ZP)(De.Z)`
  display: block;
  text-align: center;
  color: white !important;
  text-decoration: none !important;
  margin-top: 20px;
  font-size: 16px;
`;function za(){const[e]=(0,r.h9)("explore-data");return e?o.createElement(a.Z,{title:"Data Explorer: Discover insights in GitHub event data with AI-generated SQL",description:"Simply ask your question in natural language and Data Explore will generate SQL, query the data, and present the results visually.",keywords:"GitHub data, text to SQL, query tool, Data Explorer, GPT-3, AI-generated SQL",image:"/img/data-thumbnail.png"},o.createElement(qa,null)):o.createElement(l.default,null)}},8106:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010),r=n(95999);const l={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function i(e){let{code:t,className:n}=e;const[i,c]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),u=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),c(!0),s.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":i?(0,r.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,r.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,r.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,l.copyButton,i&&l.copyButtonCopied),onClick:u},a.createElement("span",{className:l.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:l.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:l.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),o=n(87512),r=n(67294),l=n(61802),i=n(61953);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:u,footer:d=!0,...m}=e;return(0,r.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),r.createElement(o.Z,(0,a.Z)({},m,{customFooter:d,header:n,sideWidth:s,side:s&&(0,l.nf)(u)?r.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},r.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},r.createElement(u,null))):void 0}),r.createElement("div",{hidden:!0,style:{height:72}}),r.createElement("div",{style:{paddingLeft:s,paddingRight:s}},r.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(67294),o=n(95999),r=n(1944),l=n(87512),i=n(16550),c=n(29630),s=n(70754);function u(){const e=(0,i.k6)(),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{var t,a;let{pathname:o,search:r,hash:l}=window.location;r=null==(t=r)?void 0:t.replace(/^\?/,""),l=null==(a=l)?void 0:a.replace(/^#/,"");const[i,...c]=o.split("/");if("analyze"===i){if(c.length>=1&&c.length<=2)return void e.replace({pathname:o,search:r,hash:l});if(0===c.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:r,hash:l})}n(!0)}),[]),a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"}),a.createElement(l.Z,{disableAuth:!0},t?a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(c.Z,{variant:"body1",fontSize:24},"Loading... \xa0",a.createElement(s.Z,{sx:{display:"inline-block"},size:24})))))))}},7449:(e,t,n)=>{function a(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}n.d(t,{h:()=>a})},1969:(e,t,n)=>{n.d(t,{$Z:()=>l,BE:()=>r,OA:()=>i,PE:()=>o});var a=n(86459);function o(e,t){let{title:n,via:o,hashtags:r=[],related:l=[]}=t;return"https://twitter.com/share"+(0,a.Z)({url:e,text:n,via:o,hashtags:r.length>0?r.join(","):void 0,related:l.length>0?l.join(","):void 0})}function r(e,t){let{title:n,summary:o,source:r}=t;return"https://linkedin.com/shareArticle"+(0,a.Z)({url:e,mini:"true",title:n,summary:o,source:r})}function l(e,t){let{title:n}=t;return"https://www.reddit.com/submit"+(0,a.Z)({url:e,title:n})}function i(e,t){let{title:n}=t;return"https://telegram.me/share/url"+(0,a.Z)({url:e,text:n})}}}]);