(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"l",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"k",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"g",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"h",function(){return h}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return _});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",l="PURCHASE_BURGER_START",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDER_SUCCESS",h="FETCH_ORDER_FAIL",m="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(8),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,function(e,t,n){"use strict";var r=n(1),a=n(21),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://burger-order-21bd7.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(8),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/order.json?auth="+t,e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.g});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/order.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;n((t=e,{type:r.h,error:t}))})}},p=n(34),h=n.n(p),m=function(e,t){return{type:r.e,idToken:e,userId:t}},f=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout(function(){t(f())},1e3*e)}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDNcE6kIAq2j4ISbwYdzCj5XIp13neLWRg";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDNcE6kIAq2j4ISbwYdzCj5XIp13neLWRg"),h.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(m(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))}).catch(function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))})}},_=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(f());else{var r=localStorage.getItem("userID");e(m(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}}else e(f())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"j",function(){return _}),n.d(t,"c",function(){return E})},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,function(e,t,n){"use strict";var r=n(34),a=n.n(r).a.create({baseURL:"https://burger-order-21bd7.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(61),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(3),a=n(4),o=n(6),i=n(5),c=n(7),u=n(0),l=n.n(u),s=n(64),d=n.n(s),p=n(9),h=n(32),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(45),i=n.n(o);t.a=function(e){return a.a.createElement("button",{onClick:e.clicked,disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" ")},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(65),i=n.n(o);t.a=function(e){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(3),a=n(4),o=n(6),i=n(5),c=n(7),u=n(0),l=n.n(u),s=n(33),d=n(9);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptors=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptors=t.interceptors.response.use(null,function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptors),t.interceptors.request.eject(this.resInterceptors)}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(s.a,{modalClosed:this.errorConfirmedHandler,show:this.state.error},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,function(e,t,n){"use strict";var r=n(67),a=n(0),o=n.n(a),i=n(63),c=n.n(i),u=n(3),l=n(4),s=n(6),d=n(5),p=n(7),h=n(19),m=n.n(h),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:m.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:m.a.BreadTop},o.a.createElement("div",{className:m.a.Seeds1}),o.a.createElement("div",{className:m.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:m.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:m.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:m.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:m.a.Bacon});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(f,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return o.a.createElement("div",{className:c.a.Burger},o.a.createElement(f,{type:"bread-top"}),t.length>0?t:o.a.createElement("p",null,"Add ingredients"),o.a.createElement(f,{type:"bread-bottom"}))}},function(e,t,n){e.exports={content:"Layout_content__1QeJi"}},function(e,t,n){e.exports=n.p+"static/media/logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spiner_Loader__3G5Ey",load2:"Spiner_load2__mPEFJ"}},,,function(e,t,n){e.exports=n(98)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=(n(73),n(3)),u=n(4),l=n(6),s=n(5),d=n(7),p=n(9),h=n(55),m=n.n(h),f=n(35),g=n.n(f),b=n(56),_=n.n(b),E=n(57),v=n.n(E),O=function(e){return a.a.createElement("div",{className:v.a.Logo},a.a.createElement("img",{src:_.a,alt:"Burger"}))},y=n(58),j=n.n(y),k=n(23),S=n(40),I=n.n(S),w=function(e){return a.a.createElement("li",{className:I.a.NavigationItem},a.a.createElement(k.b,{activeClassName:I.a.active,to:e.link,exact:e.exact},e.children))},C=function(e){return a.a.createElement("ul",{className:j.a.NavigationItems},a.a.createElement(w,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(w,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(w,{link:"/logout"},"Logout"):a.a.createElement(w,{link:"/auth"},"Authentication"))},B=n(60),N=n.n(B),T=function(e){return a.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},D=function(e){return a.a.createElement("header",{className:g.a.Toolbar},a.a.createElement(T,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:g.a.Logo},a.a.createElement(O,null)),a.a.createElement("nav",{className:g.a.DesktopOnly},a.a.createElement(C,{isAuthenticated:e.isAuth})))},A=n(24),L=n.n(A),R=n(32),x=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),a.a.createElement(p.a,null,a.a.createElement(R.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:L.a.Logo},a.a.createElement(O,null)),a.a.createElement("nav",null,a.a.createElement(C,{isAuthenticated:e.isAuth}))))},H=n(17),P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerTohhleHandler=function(){n.setState(function(e){return{showSideDrawer:!n.state.showSideDrawer}})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,null,a.a.createElement(D,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerTohhleHandler}),a.a.createElement(x,{isAuth:this.props.isAuthenticated,closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),a.a.createElement("main",{className:m.a.content},this.props.children))}}]),t}(r.Component),U=Object(H.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(P),M=n(8),z=n(54),F=n(44),q=n.n(F),G=n(28),X=n.n(G),Y=function(e){return a.a.createElement("div",{className:X.a.BuildControl},a.a.createElement("div",{className:X.a.Label},e.label),a.a.createElement("button",{className:X.a.Less,onClick:e.deleted,disabled:e.disable},"Less"),a.a.createElement("button",{className:X.a.More,onClick:e.added},"More"))},W=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],J=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",e.price.toFixed(2)),W.map(function(t){return a.a.createElement(Y,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},deleted:function(){return e.ingredientDeleted(t.type)},disable:e.disabled[t.type]})}),a.a.createElement("button",{disabled:!e.purchasable,className:q.a.OrderButton,onClick:e.ordered},e.isAuth?"ORDER NOW!":"Signup"))},K=n(33),$=n(36),V=function(e){var t=Object.keys(e.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return a.a.createElement(p.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,"Continue to checkout?"),a.a.createElement($.a,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancel"),a.a.createElement($.a,{btnType:"Success",clicked:e.purchaseContinued},"Continue"))},Q=n(46),Z=n(47),ee=n(18),te=n(21),ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(M.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(Q.a,null);return this.props.ings&&(r=a.a.createElement(p.a,null,a.a.createElement(z.a,{ingredients:this.props.ings}),a.a.createElement(J,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(V,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(p.a,null,a.a.createElement(K.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),re=Object(H.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ee.a(t))},onIngredientRemoved:function(t){return e(ee.i(t))},onInitIngredients:function(){return e(ee.e())},onInitPurchase:function(){return e(ee.h())},onSetAuthRedirectPath:function(t){return e(ee.j(t))}}})(Object(Z.a)(ne,te.a)),ae=n(20),oe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(ae.a,{to:"/"})}}]),t}(r.Component),ie=Object(H.b)(null,function(e){return{onLogout:function(){return e(ee.f())}}})(oe),ce=function(e){return function(t){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},ue=ce(function(){return n.e(3).then(n.bind(null,106))}),le=ce(function(){return n.e(5).then(n.bind(null,107))}),se=ce(function(){return n.e(4).then(n.bind(null,105))}),de=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(ae.d,null,a.a.createElement(ae.b,{path:"/auth",component:se}),a.a.createElement(ae.b,{path:"/",exact:!0,component:re}),a.a.createElement(ae.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(ae.d,null,a.a.createElement(ae.b,{path:"/checkout",component:ue}),a.a.createElement(ae.b,{path:"/orders",component:le}),a.a.createElement(ae.b,{path:"/logout",component:ie}),a.a.createElement(ae.b,{path:"/auth",component:se}),a.a.createElement(ae.b,{path:"/",exact:!0,component:re}),a.a.createElement(ae.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(U,null,e))}}]),t}(r.Component),pe=Object(ae.g)(Object(H.b)(function(e){return{isAuthenticated:null!=e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ee.c())}}})(de));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(22),me=n(66),fe=n(25),ge=n(1),be=n(11),_e={ingredients:null,totalPrice:4,error:!1,building:!1},Ee={salad:.5,cheese:.4,meat:1.3,bacon:.7},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.a:return function(e,t){var n=Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(be.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(be.b)(e,r)}(e,t);case ge.n:return function(e,t){var n=Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(be.b)(e.ingredients,n),totalPrice:e.totalPrice+Ee[t.ingredientName],building:!0};return Object(be.b)(e,r)}(e,t);case ge.p:return function(e,t){return Object(be.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})}(e,t);case ge.f:return function(e,t){return Object(be.b)(e,{error:!0})}(e);default:return e}},Oe={orders:[],loading:!1,purchased:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.m:return Object(M.a)({},e,{purchased:!1});case ge.k:return Object(M.a)({},e,{loading:!0});case ge.l:var n=Object(M.a)({},t.orderData,{id:t.orderId});return Object(M.a)({},e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case ge.j:return Object(M.a)({},e,{loading:!1});case ge.g:return Object(M.a)({},e,{loading:!0});case ge.i:return Object(M.a)({},e,{orders:t.orders,loading:!1});case ge.f:return Object(M.a)({},e,{loading:!1});default:return e}},je={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.d:return function(e,t){return Object(be.b)(e,{error:null,loading:!0})}(e);case ge.e:return function(e,t){return Object(be.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case ge.b:return function(e,t){return Object(be.b)(e,{error:t.error,loading:!1})}(e,t);case ge.c:return function(e,t){return Object(be.b)(e,{token:null,userId:null})}(e);case ge.o:return function(e,t){return Object(be.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,Ie=Object(he.c)({burgerBuilder:ve,order:ye,auth:ke}),we=Object(he.e)(Ie,Se(Object(he.a)(me.a))),Ce=a.a.createElement(H.a,{store:we},a.a.createElement(k.a,null,a.a.createElement(pe,null)));i.a.render(Ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[68,1,2]]]);
//# sourceMappingURL=main.8c6f6c99.chunk.js.map