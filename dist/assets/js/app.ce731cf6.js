(function(){var e={3371:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{inline:"",rules:e.rules,model:e.form}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"账号",prop:"username"}},[t("el-input",{attrs:{type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)},a=[],r=(n(7658),n(1955)),i=n(7877),s={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{onSubmit(){this.$refs.form.validate((e=>{e&&(0,i.r7)(this.form).then((e=>{let{data:t}=e;2e4===t.code?(r.Z.set("token",t.data.token),this.$store.commit("setMenu",t.data.menu),this.$store.commit("addMenu",this.$router),this.$router.push("/home")):this.$message.error(t.data.message)}))}))}}},u=s,l=n(1001),c=(0,l.Z)(u,o,a,!1,null,"1420b3fc",null),d=c.exports},1736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var o=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("CommonAside")],1),t("el-container",[t("el-header",[t("CommonHeader")],1),t("CommonTag"),t("el-main",[t("router-view")],1)],1)],1)],1)},a=[],r=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"后台管理系统"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.name,attrs:{index:n.name+""},on:{click:function(t){return e.clickMenu(n)}}},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.label,attrs:{index:n.label+""}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),e._l(n.children,(function(n){return t("el-menu-item-group",{key:n.path},[t("el-menu-item",{attrs:{index:n.path+""},on:{click:function(t){return e.clickMenu(n)}}},[e._v(e._s(n.label))])],1)}))],2)}))],2)},i=[],s=(n(7658),n(1955)),u={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$route.path===e.path||"/home"===this.$router.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectTab",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(s.Z.get("menu"))||this.$store.state.tab.menu}}},l=u,c=n(1001),d=(0,c.Z)(l,r,i,!1,null,"dee95360",null),m=d.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-content"},[t("div",{staticClass:"l-content"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(n){return t("el-breadcrumb-item",{key:n.path,attrs:{to:{path:n.path}}},[e._v(e._s(n.label))])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:n(6632),alt:"头像",title:"头像"}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"cancel"}},[e._v("退出")])],1)],1)],1)])},f=[],h=n(629),g={data(){return{}},methods:{handleMenu(){this.$store.commit("collapeMenu")},handleClick(e){"cancel"===e&&(s.Z.remove("token"),s.Z.remove("menu"),this.$store.commit("removeTab"),this.$router.push("/login"))}},computed:{...(0,h.rn)({tags:e=>e.tab.tabList})}},v=g,b=(0,c.Z)(v,p,f,!1,null,"0886aa6e",null),y=b.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(n,o){return t("el-tag",{key:n.path,staticClass:"tag",attrs:{closable:"home"!=n.name,size:"mini",effect:e.$route.name===n.name?"dark":"plain"},on:{click:function(t){return e.changeMenu(n)},close:function(t){return e.handleClose(n,o)}}},[e._v(" "+e._s(n.label)+" ")])})),1)},C=[],w={data(){return{}},computed:{...(0,h.rn)({tags:e=>e.tab.tabList})},methods:{...(0,h.OI)(["closeTag"]),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){this.closeTag(e);const n=this.tags.length;e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},_=w,O=(0,c.Z)(_,k,C,!1,null,"bf587f06",null),x=O.exports,M={data(){return{}},components:{CommonAside:m,CommonHeader:y,CommonTag:x}},S=M,Z=(0,c.Z)(S,o,a,!1,null,"cc5f6d6c",null),$=Z.exports},7877:function(e,t,n){"use strict";n.d(t,{PR:function(){return r},Yu:function(){return a},cn:function(){return i},r7:function(){return l},ti:function(){return s},uz:function(){return u}});var o=n(4471);const a=()=>o.Z.get("/home/getData"),r=e=>o.Z.get("/user/getUser",e),i=e=>o.Z.post("/user/add",e),s=e=>o.Z.post("/user/del",e),u=e=>o.Z.post("/user/edit",e),l=e=>o.Z.post("/permission/getMenu",e)},5079:function(e,t,n){"use strict";n.r(t);var o=n(5623),a=n.n(o);n(7658);let r=[];var i={getStatisticalData:()=>{for(let e=0;e<7;e++)r.push(a().mock({"苹果":a().Random.float(100,8e3,0,0),vivo:a().Random.float(100,8e3,0,0),oppo:a().Random.float(100,8e3,0,0),"魅族":a().Random.float(100,8e3,0,0),"三星":a().Random.float(100,8e3,0,0),"小米":a().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["2019-10-01","2019-10-02","2019-10-03","2019-10-04","2019-10-05","2019-10-06","2019-10-07"],data:r},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};n(541);function s(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let u=[];const l=200;for(let h=0;h<l;h++)u.push(a().mock({id:a().Random.guid(),name:a().Random.cname(),addr:a().mock("@county(true)"),"age|18-60":1,birth:a().Random.date(),sex:a().Random.integer(0,1)}));var c={getUserList:e=>{const{name:t,page:n=1,limit:o=20}=s(e.url);console.log("name:"+t,"page:"+n,"分页大小limit:"+o);const a=u.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=a.filter(((e,t)=>t<o*n&&t>=o*(n-1)));return{code:2e4,count:a.length,list:r}},createUser:e=>{const{name:t,addr:n,age:o,birth:r,sex:i}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),u.unshift({id:a().Random.guid(),name:t,addr:n,age:o,birth:r,sex:i}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(u=u.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=s(e.url);return t=t.split(","),u=u.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:n,addr:o,age:a,birth:r,sex:i}=JSON.parse(e.body),s=parseInt(i);return u.some((e=>{if(e.id===t)return e.name=n,e.addr=o,e.age=a,e.birth=r,e.sex=s,!0})),{code:2e4,data:{message:"编辑成功"}}}},d={getMenu:e=>{const{username:t,password:n}=JSON.parse(e.body);return"admin"===t&&"admin"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"个人中心",icon:"location",children:[{path:"/page1",name:"page1",label:"修改密码",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"个人信息",icon:"setting",url:"PageTwo.vue"}]}],token:a().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:a().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};function m(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let p=[{id:1,name:"小米",price:"2399",num:"99"},{id:2,name:"苹果",price:"9899",num:"99"},{id:3,name:"vivo",price:"2399",num:"99"},{id:4,name:"oppo",price:"1999",num:"99"},{id:5,name:"三星",price:"4399",num:"99"},{id:6,name:"魅族",price:"1399",num:"99"}];var f={getGoodList:e=>{const{name:t,page:n=1,limit:o=20}=m(e.url);console.log("name:"+t,"page:"+n,"分页大小limit:"+o);const a=p.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=a.filter(((e,t)=>t<o*n&&t>=o*(n-1)));return{code:2e4,count:a.length,list:r}},createGood:e=>{const{name:t,price:n,num:o}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),p.unshift({id:a().Random.guid(),name:t,price:n,num:o}),{code:2e4,data:{message:"添加成功"}}},deleteGood:e=>{const{id:t}=JSON.parse(e.body);return t?(p=p.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=m(e.url);return t=t.split(","),p=p.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateGood:e=>{const{id:t,name:n,price:o,num:a}=JSON.parse(e.body);return p.some((e=>{if(e.id===t)return e.name=n,e.price=o,e.num=a,!0})),{code:2e4,data:{message:"编辑成功"}}}};a().mock("/api/home/getData",i.getStatisticalData()),a().mock("/api/user/add","post",c.createUser),a().mock("/api/user/edit","post",c.updateUser),a().mock("/api/user/del","post",c.deleteUser),a().mock(/api\/user\/getUser/,c.getUserList),a().mock(/api\/permission\/getMenu/,"post",d.getMenu),a().mock("/api/good/add","post",f.createGood),a().mock("/api/good/edit","post",f.updateGood),a().mock("/api/good/del","post",f.deleteGood),a().mock(/api\/good\/getGood/,f.getGoodList)},7220:function(e,t,n){"use strict";var o=n(247),a=n.n(o),r=n(144),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],u={name:"App"},l=u,c=n(1001),d=(0,c.Z)(l,i,s,!1,null,null,null),m=d.exports,p=n(8345),f=n(1736),h=n(3371);r["default"].use(p.ZP);const g=[{path:"/",component:f["default"],name:"Main",redirect:"/home",children:[]},{path:"/Login",component:h["default"],name:"login"}],v=new p.ZP({routes:g});var b=v,y=n(629),k=(n(7658),n(1955)),C={state:{isCollapse:!1,tabList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],menu:[]},mutations:{collapeMenu(e){e.isCollapse=!e.isCollapse},selectTab(e,t){if("home"!==t.name){const n=e.tabList.findIndex((e=>e.name===t.name));-1===n&&e.tabList.push(t)}},removeTab(e){e.tabList=[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}]},closeTag(e,t){console.log(t);const n=e.tabList.findIndex((e=>e.name===t.name));e.tabList.splice(n,1)},setMenu(e,t){e.menu=t,k.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!k.Z.get("menu"))return;const o=JSON.parse(k.Z.get("menu"));e.menu=o;const a=[];o.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>n(8652)(`./${e.url}`),e))),a.push(...e.children)):(e.component=()=>n(8652)(`./${e.url}`),a.push(e))})),a.forEach((e=>{t.addRoute("Main",e)}))}}};r["default"].use(y.ZP);var w=new y.ZP.Store({modules:{tab:C}});n(5079),r["default"].config.productionTip=!1,r["default"].use(b),r["default"].use(a()),b.beforeEach(((e,t,n)=>{const o=k.Z.get("token");o||"login"===e.name?o&&"login"===e.name?n({name:"home"}):n():n({name:"login"})})),new r["default"]({router:b,store:w,render:e=>e(m),created(){w.commit("addMenu",b)}}).$mount("#app")},4471:function(e,t,n){"use strict";var o=n(8433);const a=o.Z.create({baseURL:"/api",timeout:1e4});o.Z.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.Z.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t["Z"]=a},8652:function(e,t,n){var o={"./Home":[1612,612],"./Home.vue":[1612,612],"./Login":[3371],"./Login.vue":[3371],"./Main":[1736],"./Main.vue":[1736],"./Mall":[3193,193],"./Mall.vue":[3193,193],"./PageOne":[8453,453],"./PageOne.vue":[8453,453],"./PageTwo":[8658,658],"./PageTwo.vue":[8658,658],"./User":[1938,938],"./User.vue":[1938,938]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=8652,e.exports=a},6632:function(e,t,n){"use strict";e.exports=n.p+"assets/img/header.c43c9d87.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"assets/js/"+e+"."+{193:"046df3a7",453:"0046ceec",612:"3946187c",658:"d268ad4c",938:"c25e5c7b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"assets/css/"+e+"."+{193:"16a46493",453:"6cbad307",612:"220abf1b",658:"17207c5c",938:"d26df91c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-app:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode.removeChild(r),a(u)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={193:1,453:1,612:1,658:1,938:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7220)}));o=n.O(o)})();