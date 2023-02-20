(function(){var e={3371:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{inline:"",rules:e.rules,model:e.form}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"账号",prop:"username"}},[t("el-input",{attrs:{type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)},o=[],r=(n(7658),n(1955)),s=n(586),i={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{onSubmit(){this.$refs.form.validate((e=>{e&&(0,s.r7)(this.form).then((e=>{let{data:t}=e;2e4===t.code?(r.Z.set("token",t.data.token),this.$store.commit("setMenu",t.data.menu),this.$store.commit("addMenu",this.$router),this.$router.push("/home")):this.$message.error(t.data.message)}))}))}}},u=i,l=n(1001),c=(0,l.Z)(u,a,o,!1,null,"1420b3fc",null),d=c.exports},1736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("CommonAside")],1),t("el-container",[t("el-header",[t("CommonHeader")],1),t("CommonTag"),t("el-main",[t("router-view")],1)],1)],1)],1)},o=[],r=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"后台管理系统"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.name,attrs:{index:n.name+""},on:{click:function(t){return e.clickMenu(n)}}},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.label,attrs:{index:n.label+""}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),e._l(n.children,(function(n){return t("el-menu-item-group",{key:n.path},[t("el-menu-item",{attrs:{index:n.path+""},on:{click:function(t){return e.clickMenu(n)}}},[e._v(e._s(n.label))])],1)}))],2)}))],2)},s=[],i=(n(7658),n(1955)),u={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$route.path===e.path||"/home"===this.$router.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectTab",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(i.Z.get("menu"))||this.$store.state.tab.menu}}},l=u,c=n(1001),d=(0,c.Z)(l,r,s,!1,null,"dee95360",null),m=d.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-content"},[t("div",{staticClass:"l-content"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(n){return t("el-breadcrumb-item",{key:n.path,attrs:{to:{path:n.path}}},[e._v(e._s(n.label))])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:n(6632),alt:"头像",title:"头像"}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"cancel"}},[e._v("退出")])],1)],1)],1)])},p=[],h=n(629),g={data(){return{}},methods:{handleMenu(){this.$store.commit("collapeMenu")},handleClick(e){"cancel"===e&&(i.Z.remove("token"),i.Z.remove("menu"),this.$store.commit("removeTab"),this.$router.push("/login"))}},computed:{...(0,h.rn)({tags:e=>e.tab.tabList})}},v=g,b=(0,c.Z)(v,f,p,!1,null,"0886aa6e",null),y=b.exports,k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(n,a){return t("el-tag",{key:n.path,staticClass:"tag",attrs:{closable:"home"!=n.name,size:"mini",effect:e.$route.name===n.name?"dark":"plain"},on:{click:function(t){return e.changeMenu(n)},close:function(t){return e.handleClose(n,a)}}},[e._v(" "+e._s(n.label)+" ")])})),1)},w=[],C={data(){return{}},computed:{...(0,h.rn)({tags:e=>e.tab.tabList})},methods:{...(0,h.OI)(["closeTag"]),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){this.closeTag(e);const n=this.tags.length;e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},_=C,x=(0,c.Z)(_,k,w,!1,null,"bf587f06",null),O=x.exports,M={data(){return{}},components:{CommonAside:m,CommonHeader:y,CommonTag:O}},$=M,S=(0,c.Z)($,a,o,!1,null,"cc5f6d6c",null),T=S.exports},586:function(e,t,n){"use strict";n.d(t,{cn:function(){return u},ti:function(){return l},uz:function(){return c},Yu:function(){return s},r7:function(){return d},PR:function(){return i}});var a=n(8433);const o=a.Z.create({baseURL:"/api",timeout:1e4});a.Z.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.Z.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var r=o;const s=()=>r.get("/home/getData"),i=e=>r.get("/user/getUser",e),u=e=>r.post("/user/add",e),l=e=>r.post("/user/del",e),c=e=>r.post("/user/edit",e),d=e=>r.post("/permission/getMenu",e)},898:function(e,t,n){"use strict";n.r(t);var a=n(5623),o=n.n(a);n(7658);let r=[];var s={getStatisticalData:()=>{for(let e=0;e<7;e++)r.push(o().mock({"苹果":o().Random.float(100,8e3,0,0),vivo:o().Random.float(100,8e3,0,0),oppo:o().Random.float(100,8e3,0,0),"魅族":o().Random.float(100,8e3,0,0),"三星":o().Random.float(100,8e3,0,0),"小米":o().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["2019-10-01","2019-10-02","2019-10-03","2019-10-04","2019-10-05","2019-10-06","2019-10-07"],data:r},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};n(541);function i(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let u=[];const l=200;for(let m=0;m<l;m++)u.push(o().mock({id:o().Random.guid(),name:o().Random.cname(),addr:o().mock("@county(true)"),"age|18-60":1,birth:o().Random.date(),sex:o().Random.integer(0,1)}));var c={getUserList:e=>{const{name:t,page:n=1,limit:a=20}=i(e.url);console.log("name:"+t,"page:"+n,"分页大小limit:"+a);const o=u.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=o.filter(((e,t)=>t<a*n&&t>=a*(n-1)));return{code:2e4,count:o.length,list:r}},createUser:e=>{const{name:t,addr:n,age:a,birth:r,sex:s}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),u.unshift({id:o().Random.guid(),name:t,addr:n,age:a,birth:r,sex:s}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(u=u.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=i(e.url);return t=t.split(","),u=u.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:n,addr:a,age:o,birth:r,sex:s}=JSON.parse(e.body),i=parseInt(s);return u.some((e=>{if(e.id===t)return e.name=n,e.addr=a,e.age=o,e.birth=r,e.sex=i,!0})),{code:2e4,data:{message:"编辑成功"}}}},d={getMenu:e=>{const{username:t,password:n}=JSON.parse(e.body);return"admin"===t&&"admin"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:o().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===n?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:o().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};o().mock("/api/home/getData",s.getStatisticalData()),o().mock("/api/user/add","post",c.createUser),o().mock("/api/user/edit","post",c.updateUser),o().mock("/api/user/del","post",c.deleteUser),o().mock(/api\/user\/getUser/,c.getUserList),o().mock(/api\/permission\/getMenu/,"post",d.getMenu)},7220:function(e,t,n){"use strict";var a=n(247),o=n.n(a),r=n(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u={name:"App"},l=u,c=n(1001),d=(0,c.Z)(l,s,i,!1,null,null,null),m=d.exports,f=n(8345),p=n(1736),h=n(3371);r["default"].use(f.ZP);const g=[{path:"/",component:p["default"],name:"Main",redirect:"/home",children:[]},{path:"/Login",component:h["default"],name:"login"}],v=new f.ZP({routes:g});var b=v,y=n(629),k=(n(7658),n(1955)),w={state:{isCollapse:!1,tabList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],menu:[]},mutations:{collapeMenu(e){e.isCollapse=!e.isCollapse},selectTab(e,t){if("home"!==t.name){const n=e.tabList.findIndex((e=>e.name===t.name));-1===n&&e.tabList.push(t)}},removeTab(e){e.tabList=[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}]},closeTag(e,t){console.log(t);const n=e.tabList.findIndex((e=>e.name===t.name));e.tabList.splice(n,1)},setMenu(e,t){e.menu=t,k.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!k.Z.get("menu"))return;const a=JSON.parse(k.Z.get("menu"));e.menu=a;const o=[];a.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>n(8652)(`./${e.url}`),e))),o.push(...e.children)):(e.component=()=>n(8652)(`./${e.url}`),o.push(e))})),o.forEach((e=>{t.addRoute("Main",e)}))}}};r["default"].use(y.ZP);var C=new y.ZP.Store({modules:{tab:w}});n(898),r["default"].config.productionTip=!1,r["default"].use(b),r["default"].use(o()),b.beforeEach(((e,t,n)=>{const a=k.Z.get("token");a||"login"===e.name?a&&"login"===e.name?n({name:"home"}):n():n({name:"login"})})),new r["default"]({router:b,store:C,render:e=>e(m),created(){C.commit("addMenu",b)}}).$mount("#app")},8652:function(e,t,n){var a={"./Home":[1612,612],"./Home.vue":[1612,612],"./Login":[3371],"./Login.vue":[3371],"./Main":[1736],"./Main.vue":[1736],"./Mall":[3767,767],"./Mall.vue":[3767,767],"./PageOne":[4435,435],"./PageOne.vue":[4435,435],"./PageTwo":[2877,877],"./PageTwo.vue":[2877,877],"./User":[3821,821],"./User.vue":[3821,821]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id=8652,e.exports=o},6632:function(e,t,n){"use strict";e.exports=n.p+"assets/img/header.c43c9d87.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,u=0;u<a.length;u++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"assets/js/"+e+"."+{435:"704321e2",612:"c7215e88",767:"60d62693",821:"01fd7fa6",877:"cfea260c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"assets/css/"+e+"."+{612:"220abf1b",821:"1c7eacb7"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-app:";n.l=function(a,o,r,s){if(e[a])e[a].push(o);else{var i,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=a),e[a]=[o];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=s,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){o=s[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var s=n.miniCssF(a),i=n.p+s;if(t(s,i))return o();e(a,i,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={612:1,821:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var s=n.p+n.u(t),i=new Error,u=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,o[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,s=a[0],i=a[1],u=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var c=u(n)}for(t&&t(a);l<s.length;l++)r=s[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7220)}));a=n.O(a)})();