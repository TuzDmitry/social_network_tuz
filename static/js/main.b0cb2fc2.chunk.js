(this.webpackJsonpsocial_network_tuz=this.webpackJsonpsocial_network_tuz||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m}));var a=n(17),r=n(0),o=n.n(r),c=n(38),i=n.n(c),s=n(89),l=function(e){var t=e.meta,n=e.children,a=t.touched&&t.error;return o.a.createElement("div",{className:i.a.formControl+" "+(a?i.a.error:"")},n,a&&o.a.createElement("div",null,t.error))},u=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return o.a.createElement(l,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,e.label),r=Object(a.a)(e,["input","meta","label"]);return o.a.createElement(l,e,o.a.createElement("input",Object.assign({},t,r)),n&&o.a.createElement("label",{htmlFor:e.id},n))},m=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",{className:i.a.wrapperField},o.a.createElement(s.a,Object.assign({placeholder:e,id:t,name:t,label:c,component:n,validate:a},r)))}},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(47),r=n(7),o="social_network/dialogsReducer/ADD-MESSAGE",c={dialogs:[{name:"Dima",id:"1"},{name:"Tanya",id:"2"},{name:"Dasha",id:"3"},{name:"Kolya",id:"4"},{name:"Gora",id:"5"},{name:"Pahsa",id:"6"}],messages:[{id:"1",message:"Hey"},{id:"2",message:"How u?"},{id:"3",message:"Hafanana"}]},i=function(e){return{type:o,textMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:if(t.textMessage)return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{message:t.textMessage,id:Math.floor(100*Math.random())}])});default:return e}}},132:function(e,t,n){e.exports=n.p+"static/media/universalAvatar.c02659f2.jpg"},133:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__1afpq"}},134:function(e,t){e.exports="data:image/gif;base64,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"},136:function(e,t,n){e.exports={profilePictire:"ProfilePicture_profilePictire__1T_DU"}},137:function(e,t,n){e.exports=n.p+"static/media/templateAvatar.b7565f96.png"},139:function(e,t,n){e.exports={posts_block:"MyPosts_posts_block__1_dla",textarea_new_post:"MyPosts_textarea_new_post__xa7-w"}},140:function(e,t,n){e.exports={item:"Post_item__1_qNq"}},141:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAkCAYAAAB2UT9CAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrUlEQVRoge2aP2sUQRjGfznCISIiIiksQpAgaCFqkSqFhVj4AYKFWNkIqSWVX0D8AGIdRCws7BVRC4tgo1UQSVIEsbLQEBKzKfbUYfPO7Lw7szu35zzwwt7u++eZffadub05yEiKKeO46LhuSL2pyudQ7qF8mtQDYNBh0QwBWYDEyAIkxrTjWnWeDYHP/Oqqp52f67iH8tHCWi93QGJkARIjC5AYrjXABducFnPe/C/QVABfHANutVyja7T28BUV0/hWYxaBl8Bvh19IvRDuNn/fHHVjb8JfRcBF4hHww3E9C9CyAL4WWi+Eu82/LQHOuXxTfAs6iJDj5siuR8jVFgbAfWDdN6DtDtgAVoCZiPV2gTllLlvtmB1wlfLGq7qlT1OQaR+VuWy1tTlsmKV+HfyLSXgRu5yagICh5fwBcM8W1NcO8G7xmrF21QF7pvMkdMC4YRO4ALyzXLe+/MZ4IjW5U3XAMJCPpuYy5RPvlbtPAqwCXy0cXtTkWg3kox37vK9vXwR4S9nGC0KOL8BxR55lB++2BPDOPc4CrANblDf4pHH+sRG/A5x35Fi0cN5S8okqgOtvKU22CG0xUm5NvVnjeNM4PgFcGx3/Al5Z4s8Cn4FTlfP7wBXgk4KPduxSjOirUVSL0A4wcQO4M7I5D/9p5Je1Aliq4ShhLKYgLWIJcJFyqjHXgzo8EWoVwEMPjrEwEQKcAb4JcbcdMXcF/wJ4zdF3oCyAA0NgTYgpgJ/AaSFmAXlDaJuja4GWjxa9F+CZ4G/a84r/DPBd8NsDLik4xkKvBXgg+Er2Z29gAHyw+JiLrg/HWGgkQJvWdb2CcrtUc5PaHn9yAiHx0s8JLntD/Q+PWQBPezqKf+/pv428SKcef3ICTeLW+LfZMU+5Jeny38G+6KYef8Y44BBZ6g55ilh+TgAAAABJRU5ErkJggg=="},142:function(e,t,n){e.exports={loginForm:"Login_loginForm__3nJ5_"}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(10),r=n(0),o=n.n(r),c=n(12),i=function(e){return Object(c.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){return t.isAuth?o.a.createElement(e,t):o.a.createElement(a.a,{to:"/login"})}))}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3d7kG",navbar_container:"Navbar_navbar_container__1qFPt",item:"Navbar_item__taLHm",activeLink:"Navbar_activeLink__4DvHK",settings:"Navbar_settings__1McnN"}},173:function(e,t,n){e.exports=n(299)},178:function(e,t,n){},179:function(e,t,n){},26:function(e,t,n){e.exports={user:"User_user__2Oslf",ava:"User_ava__3Rg0I",btn:"User_btn__Ts8bh",userInfo:"User_userInfo__hOEkS",status:"User_status__7h9_i",country:"User_country__3yJit",city:"User_city__24lJm"}},28:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=function(e){return e?void 0:"requred text"},r=function(e){return function(t){return t.length<e?void 0:"Maximum length is ".concat(e)}},o=r(30)},299:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(67),r=n.n(a),o=(n(178),n(0)),c=n.n(o),i=n(31),s=n(32),l=n(35),u=n(33),p=n(36),m=(n(179),n(16)),f=n.n(m),d=n(14),A=n(90),g=n.n(A),h=n(91),E=n.n(h),b=function(e){return c.a.createElement("div",{className:E.a.friend},c.a.createElement("div",{className:E.a.name},e.name),c.a.createElement("img",{src:"https://biography-live.ru/wp-content/uploads/2019/05/gettyimages-886103824_conor-mcgregor.jpg",alt:""}))},v=function(e){var t=e.state.navbarBlock.friends.map((function(e){return c.a.createElement(b,{name:e.name,key:e.id,id:e.id})}));return c.a.createElement("div",{className:g.a.friendsblock},c.a.createElement("div",null,"Friends"),c.a.createElement("div",{className:g.a.container},t))},w=n(12),C=Object(w.b)((function(e){return{state:e}}),(function(e){return{}}))(v),O=C,k=function(e){return c.a.createElement("nav",{className:f.a.nav},c.a.createElement("div",{className:f.a.navbar_container},c.a.createElement("div",{className:f.a.item},c.a.createElement(d.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),c.a.createElement("div",{className:f.a.item},c.a.createElement(d.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),c.a.createElement("div",{className:f.a.item},c.a.createElement(d.b,{to:"/users",activeClassName:f.a.activeLink},"Users")),c.a.createElement("div",{className:f.a.item},c.a.createElement(d.b,{to:"/news",activeClassName:f.a.activeLink},"News")),c.a.createElement("div",{className:f.a.item},c.a.createElement(d.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),c.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.settings)},c.a.createElement(d.b,{to:"/settings",activeClassName:f.a.activeLink},"Settings")),c.a.createElement(O,null)))},S=n(10),_=function(e){return c.a.createElement("div",null,"Our news:Washington Posts")},P=function(e){return c.a.createElement("div",null,"Your Music")},I=function(e){return c.a.createElement("div",null,"Make Settings")},U=n(5),j=n.n(U),y=n(13),N=n(47),B=n(7),R=n(131).create({withCredentials:!0,headers:{"API-KEY":"99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),x={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return R.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return R.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollowUser:function(e){return R.delete("follow/".concat(e)).then((function(e){return e.data}))}},M=function(){return R.get("auth/me")},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return R.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},D=function(){return R.delete("auth/login")},T=function(){return R.get("security/get-captcha-url")},L=function(e){return R.get("profile/"+e)},J=function(e){return R.get("profile/status/".concat(e))},K=function(e){return R.put("profile/status",{status:e})},Q=function(e){var t=new FormData;return t.append("image",e),R.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},q=function(e){return R.put("profile",e)},W=function(e,t,n,a){return e.map((function(e){return t===e[n]?Object(B.a)({},e,{},a):e}))},H="social_network/usersReducer/FOLLOW",G="social_network/usersReducer/UNFOLLOW",z="social_network/usersReducer/SET_USERS",V="social_network/usersReducer/SET_CURRENT_PAGE",Y="social_network/usersReducer/SET_PAGE_SIZE",Z="social_network/usersReducer/SET_TOTAL_USERS_COUNT",X="social_network/usersReducer/TOGGLE_IS_FETCHING",$="social_network/usersReducer/TOGGLE_IS_AWAITING_RESPONSE",ee={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,awaitingResponse:[]},te=function(e){return{type:H,userId:e}},ne=function(e){return{type:G,userId:e}},ae=function(e){return{type:Y,pageSize:e}},re=function(e){return{type:X,isFetching:e}},oe=function(e,t){return{type:$,userId:e,awaitingResponse:t}},ce=function(){return function(){var e=Object(y.a)(j.a.mark((function e(t,n){var a,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0)),a=n().usersPage.currentPage,r=n().usersPage.pageSize,e.next=5,x.getUsers(a,r);case 5:o=e.sent,t((i=o.items,{type:z,users:i})),t((c=o.totalCount,{type:Z,totalcount:c})),t(re(!1));case 9:case"end":return e.stop()}var c,i}),e)})));return function(t,n){return e.apply(this,arguments)}}()},ie=function(){var e=Object(y.a)(j.a.mark((function e(t,n,a,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(oe(n,!0)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(oe(n,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(B.a)({},e,{users:W(e.users,t.userId,"id",{followed:!0})});case G:return Object(B.a)({},e,{users:W(e.users,t.userId,"id",{followed:!1})});case z:return Object(B.a)({},e,{users:t.users});case Z:return Object(B.a)({},e,{totalUsersCount:t.totalcount});case V:return Object(B.a)({},e,{currentPage:t.currentpage});case Y:return Object(B.a)({},e,{pageSize:t.pageSize});case X:return Object(B.a)({},e,{isFetching:t.isFetching});case $:return Object(B.a)({},e,{awaitingResponse:t.awaitingResponse?[].concat(Object(N.a)(e.awaitingResponse),[t.userId]):e.awaitingResponse.filter((function(e){return e!=t.userId}))});default:return e}},le=n(17),ue=n(26),pe=n.n(ue),me=n(132),fe=n.n(me),de=function(e){var t=e.user,n=e.awaitingResponse,a=e.follow,r=e.unfollow;return c.a.createElement("div",{className:pe.a.user},c.a.createElement("div",{className:pe.a.avaAndFollow},c.a.createElement(d.b,{to:"/profile/"+t.id},c.a.createElement("img",{className:pe.a.ava,src:null!=t.photos.small?t.photos.small:fe.a,alt:"photo"})),!t.followed&&c.a.createElement("button",{className:pe.a.btn,disabled:n.some((function(e){return e==t.id})),onClick:function(){return a(t.id)}},"Follow"),t.followed&&c.a.createElement("button",{className:pe.a.btn,disabled:n.some((function(e){return e==t.id})),onClick:function(){return r(t.id)}},"Unfollow")),c.a.createElement("div",{className:pe.a.userInfo},c.a.createElement("div",null,t.name),c.a.createElement("div",{className:pe.a.status},t.status),c.a.createElement("div",{className:pe.a.country},"country: ",t.location?t.location.country:"not defined"),c.a.createElement("div",{className:pe.a.city},"city: ",t.location?t.location.city:"not defined")))},Ae=n(95),ge=n.n(Ae),he=n(56),Ee=n(133),be=n.n(Ee),ve=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,i=e.onPageSizeChanged,s=e.portionSize,l=Math.ceil(t/n),u=[],p=1;p<=l;p++)u.push(p);var m=Math.ceil(l/s),f=Object(o.useState)(1),d=Object(he.a)(f,2),A=d[0],g=d[1],h=(A-1)*s+1,E=A*s;return Object(o.useEffect)((function(){1!==A&&g(m),console.log("leftBorder"+h),console.log("rightBorder"+E),console.log("currentPage"+a),console.log("porsionCount"+m),a>l&&0!==l&&r(l)}),[n]),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{disabled:1===A,onClick:function(){return g(A-1)}},"<---"),u.slice(h-1,E).map((function(e){return c.a.createElement("span",{onClick:function(){return r(e)},className:a===e&&be.a.selectedPage},e)})),c.a.createElement("button",{disabled:A===m,onClick:function(){return g(A+1)}},"...>")),c.a.createElement("select",{autoFocus:!0,value:n,size:1,onChange:function(e){return i(e.currentTarget.value)}},c.a.createElement("option",{value:10},"10"),c.a.createElement("option",{value:30},"30"),c.a.createElement("option",{value:50},"50"),c.a.createElement("option",{value:75},"75"),c.a.createElement("option",{value:100},"100")))},we=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.onPageSizeChanged,i=Object(le.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","onPageSizeChanged"]);return c.a.createElement("div",null,c.a.createElement("div",{className:ge.a.title},"Users"),c.a.createElement("div",{className:ge.a.usersContainer},i.users.map((function(e){return c.a.createElement(de,{user:e,awaitingResponse:i.awaitingResponse,follow:i.follow,unfollow:i.unfollow})}))),c.a.createElement(ve,{totalUsersCount:t,pageSize:n,currentPage:a,portionSize:10,onPageChanged:r,onPageSizeChanged:o}))},Ce=n(134),Oe=n.n(Ce),ke=function(e){return c.a.createElement("img",{src:Oe.a,alt:""})},Se=n(9),_e=n(135),Pe=Object(_e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ie=function(e){return e.usersPage.pageSize},Ue=function(e){return e.usersPage.totalUsersCount},je=function(e){return e.usersPage.currentPage},ye=function(e){return e.usersPage.isFetching},Ne=function(e){return e.usersPage.awaitingResponse},Be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){n.props.getUsersByChangedPage(e)},n.onPageSizeChanged=function(e){n.props.getUsersByChangedPageSize(e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.baseRequestUsers()}},{key:"componentWillUnmount",value:function(){console.log("\u044f \u043e\u0442\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0430\u0441\u044c -i will delete(jsx from DOM)")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(ke,null):null,c.a.createElement(we,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,onPageSizeChanged:this.onPageSizeChanged,currentPage:this.props.currentPage,users:this.props.users,awaitingResponse:this.props.awaitingResponse,follow:this.props.followUser,unfollow:this.props.unfollowUser}))}}]),t}(c.a.Component),Re=Object(Se.d)(Object(w.b)((function(e){return{users:Pe(e),pageSize:Ie(e),totalUsersCount:Ue(e),currentPage:je(e),isFetching:ye(e),awaitingResponse:Ne(e)}}),{followUser:function(e){return function(t){var n=x.followUser.bind(x);ie(t,e,te,n)}},unfollowUser:function(e){return function(t){var n=x.unfollowUser.bind(x);ie(t,e,ne,n)}},baseRequestUsers:ce,getUsersByChangedPage:function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:V,currentpage:e}),n(ce());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsersByChangedPageSize:function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(ae(e)),n(ce());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Be),xe=n(70),Me=n.n(xe),Fe=(n(136),n(57)),De=n.n(Fe),Te=function(e){var t=Object(o.useState)(!1),n=Object(he.a)(t,2),a=n[0],r=n[1],i=Object(o.useState)(e.status),s=Object(he.a)(i,2),l=s[0],u=s[1];Object(o.useEffect)((function(){u(e.status)}),[e.status]);return c.a.createElement("div",{className:Me.a.status},!a&&c.a.createElement("div",{onClick:function(){r(!0)}},l||"here will be status"),a&&c.a.createElement("input",{autoFocus:!0,onBlur:function(){r(!1),e.UpDateProfileStatus(l)},onChange:function(e){var t=e.currentTarget.value;u(t)},type:"text",value:l}))},Le=n(137),Je=n.n(Le),Ke=n(11),Qe=n(128),qe=n(38),We=n.n(qe),He=Object(Qe.a)({form:"profile"})((function(e){var t=e.profile,n=e.error,a=Object(le.a)(e,["profile","error"]);return c.a.createElement("form",{onSubmit:a.handleSubmit},c.a.createElement("button",null,"Save"),n&&c.a.createElement("div",{className:We.a.errorSummary},n),c.a.createElement("div",null,c.a.createElement("b",null,"fullName:"),c.a.createElement("br",null),Object(Ke.c)("name","fullName",Ke.a,[])),c.a.createElement("div",null,c.a.createElement("b",null,"About me:"),c.a.createElement("br",null),Object(Ke.c)("aboutMe","aboutMe",Ke.b,[])),c.a.createElement("div",null,c.a.createElement("b",null,"looking For A Job:"),c.a.createElement("br",null),Object(Ke.c)(null,"lookingForAJob",Ke.a,null,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"Description:"),c.a.createElement("br",null),Object(Ke.c)("decrciption","lookingForAJobDescription",Ke.b,null)),c.a.createElement("div",null,c.a.createElement("h3",null,"My contacts:"),Object.keys(t.contacts).map((function(e){return c.a.createElement("div",{key:e},c.a.createElement("b",null,e,":"),c.a.createElement("br",null),Object(Ke.c)("".concat(e),"contacts.".concat(e),Ke.a,null))}))))})),Ge=function(e){var t=e.profile,n=t.fullName,a=t.aboutMe,r=t.contacts,o=t.lookingForAJob,i=t.lookingForAJobDescription;return c.a.createElement("div",{className:De.a.person_information},e.isOwner&&c.a.createElement("button",{onClick:function(){return e.chanheProfileEditMode(!0)}},"Edit"),c.a.createElement("h2",null,n," ",c.a.createElement("br",null)),c.a.createElement("div",null,c.a.createElement("h3",null,"About me:"),c.a.createElement("span",null,a)),c.a.createElement("div",null,c.a.createElement("h3",null,"My contacts:"),Object.keys(r).map((function(e){return c.a.createElement(ze,{key:e,contactTitle:e,contactValue:r[e]})}))),c.a.createElement("div",null,"Looking for a job- ",c.a.createElement("input",{type:"checkbox",checked:o})),o&&c.a.createElement("div",null,"Description: ",c.a.createElement("div",null,i)))},ze=function(e){var t=e.contactTitle,n=e.contactValue;return c.a.createElement("div",null,c.a.createElement("b",null,t,": "),n)},Ve=function(e){var t=e.profile,n=e.status,a=e.UpDateProfileStatus,r=e.isOwner,o=e.sendPhoto,i=Object(le.a)(e,["profile","status","UpDateProfileStatus","isOwner","sendPhoto"]),s=(t.photo,Object(le.a)(t,["photo"]));return c.a.createElement("div",{className:De.a.profAva},c.a.createElement("div",{className:De.a.photo_block},c.a.createElement("img",{src:t.photos.large||Je.a,className:De.a.mainPhoto,alt:"NO_photo"}),c.a.createElement("div",null,r&&c.a.createElement("input",{type:"file",onChange:function(e){console.log(e.target.files[0]),o(e.target.files[0])}}))),c.a.createElement(Te,{status:n,UpDateProfileStatus:a}),i.editMode?c.a.createElement(He,{profile:s,initialValues:s,onSubmit:function(e){i.saveProfile(e),console.log(e)}}):c.a.createElement(Ge,{isOwner:r,chanheProfileEditMode:i.chanheProfileEditMode,profile:t}))},Ye=n(27),Ze="social_network/profileReducer/ADD-POST",Xe="social_network/profileReducer/DELETE_POST",$e="social_network/profileReducer/SET_USER_PROFILE",et="social_network/profileReducer/SET_PROFILE_STATUS",tt="social_network/profileReducer/UPDATE_PROFILE_STATUS",nt="social_network/profileReducer/SET_PROFILE_PHOTO",at="social_network/profileReducer/CHANGE_PROFILE_EDIT_MODE",rt={profile:null,posts:[{id:"1",message:"This is post1",likesCount:"21"},{id:"2",message:"This is post2",likesCount:"24"},{id:"3",message:"This is post3",likesCount:"4"},{id:"4",message:"This is post4",likesCount:"12"}],status:"",editMode:!1},ot=function(e){return{type:tt,newStatusText:e}},ct=function(e){return{type:at,editMode:e}},it=function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:a=t.sent,n((r=a.data,{type:$e,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze:if(t.textPost){var n={id:Math.floor(100*Math.random()),message:t.textPost,likesCount:0};return Object(B.a)({},e,{posts:[].concat(Object(N.a)(e.posts),[n])})}case Xe:return Object(B.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.id}))});case $e:return Object(B.a)({},e,{profile:t.profile});case at:return Object(B.a)({},e,{editMode:t.editMode});case et:return Object(B.a)({},e,{status:t.statusText});case tt:return Object(B.a)({},e,{status:t.newStatusText});case nt:return Object(B.a)({},e,{profile:Object(B.a)({},e.profile,{photos:t.photos})});default:return e}},lt=n(139),ut=n.n(lt),pt=n(140),mt=n.n(pt),ft=function(e){return c.a.createElement("div",{className:mt.a.item},c.a.createElement("img",{src:"https://i.pinimg.com/736x/8d/a5/48/8da5485220f54aff3bc0c15dbbd7a739.jpg",alt:"fds"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"likes:",e.likes)))},dt=n(89),At=n(28),gt=Object(At.b)(30),ht=Object(Qe.a)({form:"post"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("label",null,"New Post"),c.a.createElement(dt.a,{name:"newPost",component:Ke.b,validate:[At.c,gt],placeholder:"\u041f\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442 \u0437\u0434\u0435\u0441\u044c"}),c.a.createElement("button",null,"Send"))})),Et=function(e){return c.a.createElement(ht,{onSubmit:function(t){e.addPost(t.newPost),console.log(t)}})},bt=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(ft,{message:e.message,likes:e.likesCount})}));return c.a.createElement("div",{className:ut.a.posts_block},c.a.createElement("h2",null,"My Posts"),c.a.createElement("div",{className:"new_post"},c.a.createElement(Et,{addPost:e.addPost})),c.a.createElement("div",{className:"posts"},t))})),vt=Object(w.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){var n=function(e){return{type:Ze,textPost:e}}(t);e(n)}}}))(bt),wt=function(e){return e.profile?c.a.createElement("div",null,c.a.createElement("div",{className:Me.a.flexContainer},c.a.createElement(Ve,{status:e.status,isOwner:e.isOwner,UpDateProfileStatus:e.UpDateProfileStatus,sendPhoto:e.sendPhoto,profile:e.profile,saveProfile:e.saveProfile,chanheProfileEditMode:e.chanheProfileEditMode,editMode:e.editMode}),c.a.createElement(vt,null))):c.a.createElement(ke,null)},Ct=(n(147),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"refreshProps",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getProfileStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProps()}},{key:"componentDidUpdate",value:function(e,t,n){e.match.params.userId!=this.props.match.params.userId&&this.refreshProps()}},{key:"render",value:function(){var e=!!this.props.match.params.userId&&this.props.match.params.userId!=this.props.userId;return c.a.createElement(wt,Object.assign({},this.props,{isOwner:!e,editMode:this.props.editMode,chanheProfileEditMode:this.props.chanheProfileEditMode,saveProfile:this.props.saveProfile}))}}]),t}(c.a.Component)),Ot=Object(Se.d)(Object(w.b)((function(e){return{editMode:e.profilePage.editMode,profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId}}),{getProfile:it,getProfileStatus:function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:200==(a=t.sent).status&&n((r=a.data,{type:et,statusText:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},UpDateProfileStatus:function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e);case 2:0==t.sent.data.resultCode&&n(ot(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},sendPhoto:function(e){return function(){var t=Object(y.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:0==(a=t.sent).data.resultCode&&n((r=a.data.photos,{type:nt,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){e.photos;var t=Object(le.a)(e,["photos"]);return(function(){var e=Object(y.a)(j.a.mark((function e(n,a){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().profilePage.profile.userId,e.next=4,q(Object(B.a)({userId:r},t));case 4:0==(o=e.sent).data.resultCode?(n(ct(!1)),n(it(r))):n(Object(Ye.a)("profile",{_error:o.data.messages[0]}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},chanheProfileEditMode:ct}),S.f)(Ct),kt=n(73),St=n.n(kt),_t=n(141),Pt=n.n(_t),It=function(e){return c.a.createElement("header",{className:St.a.h_wrapper},c.a.createElement("div",{className:St.a.header},c.a.createElement("img",{src:Pt.a,alt:"fdsfd"}),c.a.createElement("div",{className:St.a.loginBlock},e.loginData.isAuth?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.b,{to:"/profile"},e.loginData.userPhotoUrl&&c.a.createElement("img",{src:e.loginData.userPhotoUrl,width:"50px",height:"50px",alt:"No Photo"}),e.loginData.login),c.a.createElement("button",{onClick:e.logoutThunk},"\u0412\u044b\u0439\u0442\u0438")):c.a.createElement(d.b,{to:"/login"},"Login"))))},Ut="social_network/authReducer/SET_USER_DATA",jt="social_network/authReducer/GET_CAPTCHA_URL_SUCCESS",yt="social_network/authReducer/SET_USER_PROFILE_PHOTO",Nt={userId:null,login:null,email:null,isAuth:!1,captchaUrl:null,userPhotoUrl:null},Bt=function(e,t,n,a){return{type:Ut,data:{userId:e,login:t,email:n,isAuth:a}}},Rt=function(e){return{type:jt,captchaUrl:e}},xt=function(){return function(){var e=Object(y.a)(j.a.mark((function e(t){var n,a,r,o,c,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:if(0!==(n=e.sent).data.resultCode){e.next=11;break}return a=n.data.data,r=a.id,o=a.login,c=a.email,e.next=7,L(r);case 7:i=e.sent,s=i.data.photos.small,t({type:yt,photoUrl:s}),t(Bt(r,o,c,!0));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ut:return Object(B.a)({},e,{},t.data);case yt:return Object(B.a)({},e,{userPhotoUrl:t.photoUrl});case jt:return Object(B.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},Ft=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(It,this.props)}}]),t}(c.a.Component),Dt=Object(w.b)((function(e){return{loginData:e.auth}}),{logoutThunk:function(){return function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:0===e.sent.data.resultCode&&t(Bt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ft),Tt=n(142),Lt=n.n(Tt),Jt=Object(Qe.a)({form:"login"})((function(e){return c.a.createElement("form",{className:Lt.a.loginForm,onSubmit:e.handleSubmit},c.a.createElement("div",{style:{boxSizing:"border-box",padding:"15px",color:"white",backgroundColor:"#333",marginBottom:"15px",borderRadius:"5px"}},c.a.createElement("div",null,c.a.createElement("i",null,"\u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:")),c.a.createElement("div",null,"Email: ",c.a.createElement("ins",null,"free@samuraijs.com")),c.a.createElement("div",null,"Password: ",c.a.createElement("ins",null,"free"))),e.captchaUrl&&c.a.createElement("img",{src:e.captchaUrl,alt:""}),e.captchaUrl&&Object(Ke.c)("symbols from image","captcha",Ke.a,[At.c]),Object(Ke.c)("Email","email",Ke.a,[At.c,At.a],{type:"text"}),Object(Ke.c)("Password","password",Ke.a,[At.c,At.a],{type:"text"}),Object(Ke.c)(null,"rememberMe",Ke.a,null,{type:"checkbox"},"Remember me"),e.error&&c.a.createElement("div",{className:We.a.errorSummary},e.error),c.a.createElement("button",null,"Login"))})),Kt=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{loginThunk:function(e,t,n,a){return function(){var r=Object(y.a)(j.a.mark((function r(o){var c,i;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?(o(xt()),o(Rt(null))):10===c.data.resultCode?o(function(){var e=Object(y.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,a=n.data.url,t(Rt(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(Ye.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?c.a.createElement(S.a,{to:"/profile"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(Jt,{onSubmit:function(t){console.log(t),e.loginThunk(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Qt="social_network/appReducer/SET_INITIALIZED_SUCCESS",qt={initialized:!1},Wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qt:return Object(B.a)({},e,{initialized:!0});default:return e}},Ht=n(127),Gt={friends:[{id:"1",name:"Andrey"},{id:"2",name:"Sasha"},{id:"3",name:"Sveta"}]},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt;arguments.length>1&&arguments[1];return e},Vt=n(143),Yt=n(129),Zt=Object(Se.c)({profilePage:st,dialogsPage:Ht.b,usersPage:se,navbarBlock:zt,auth:Mt,app:Wt,form:Yt.a}),Xt=Object(Se.e)(Zt,Object(Se.a)(Vt.a));window.store=Xt;var $t=Xt,en=n(144),tn=function(e){var t=e.title;return c.a.createElement(en.a,null,c.a.createElement("title",null,t||"Conversations Without Borders"))},nn=function(e){var t=e.title,n=Object(le.a)(e,["title"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(tn,{title:t}),n.children)},an=c.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),rn=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.Initializing()}},{key:"render",value:function(){return this.props.initialized?c.a.createElement("div",null,c.a.createElement(Dt,null),c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(k,null),c.a.createElement("div",{className:"app-wrapper-content"},c.a.createElement(o.Suspense,{fallback:c.a.createElement(ke,null)},c.a.createElement(S.b,{path:"/dialogs",render:function(){return c.a.createElement(nn,{title:"DIALOGS"},c.a.createElement(an,null))}})),c.a.createElement(S.b,{path:"/profile/:userId?",render:function(){return c.a.createElement(nn,{title:"PROFILE"},c.a.createElement(Ot,null))}}),c.a.createElement(S.b,{path:"/users",render:function(){return c.a.createElement(nn,{title:"USERS"},c.a.createElement(Re,null))}}),c.a.createElement(S.b,{path:"/news",component:function(){return c.a.createElement(nn,{title:"NEWS"},c.a.createElement(_,null))}}),c.a.createElement(S.b,{path:"/music",component:function(){return c.a.createElement(nn,{title:"MUSIC"},c.a.createElement(P,null))}}),c.a.createElement(S.b,{path:"/settings",component:function(){return c.a.createElement(nn,{title:"SETTINGS"},c.a.createElement(I,null))}}),c.a.createElement(S.b,{path:"/login",component:function(){return c.a.createElement(nn,{title:"LOGIN"},c.a.createElement(Kt,null))}})))):c.a.createElement(ke,null)}}]),t}(c.a.Component),on=Object(Se.d)(S.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{Initializing:function(){return function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(xt());case 2:t({type:Qt});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(rn),cn=function(){return c.a.createElement(d.a,null,c.a.createElement(w.a,{store:$t},c.a.createElement(on,null)))};r.a.render(c.a.createElement(cn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports={formControl:"formsControls_formControl__VlsYn",error:"formsControls_error__shHhq",errorSummary:"formsControls_errorSummary__3GwPp",wrapperField:"formsControls_wrapperField__2dfHu"}},57:function(e,t,n){e.exports={profAva:"ProfileInformation_profAva__2vBQc",photo_block:"ProfileInformation_photo_block__1yfKz",person_information:"ProfileInformation_person_information__1cXq1"}},70:function(e,t,n){e.exports={flexContainer:"Profile_flexContainer__2PF5y",status:"Profile_status__3vnZi"}},73:function(e,t,n){e.exports={h_wrapper:"Header_h_wrapper__24QVp",container:"Header_container__A3zhn",header:"Header_header__38LNE",loginBlock:"Header_loginBlock__11PNE"}},90:function(e,t,n){e.exports={friendsblock:"Friends_friendsblock__2CylY",container:"Friends_container__qrNsg",friend:"Friends_friend__31NoE",name:"Friends_name__3FjSz"}},91:function(e,t,n){e.exports={friend:"Friend_friend__2tIkL",name:"Friend_name__3zx2v"}},95:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__10cni",title:"Users_title__2uMCE"}}},[[173,1,2]]]);
//# sourceMappingURL=main.b0cb2fc2.chunk.js.map