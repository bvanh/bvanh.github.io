(this["webpackJsonpapp-admin"]=this["webpackJsonpapp-admin"]||[]).push([[0],{229:function(e,t,a){e.exports=a(476)},234:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i);a(234),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(124);var c=a(90),o=(a(237),a(223)),s=(a(164),a(36)),m=(a(100),a(5)),u=a(50),d=a(51),h=a(54),g=a(52),p=a(53),f=(a(101),a(41)),E=(a(477),a(224)),b=(a(60),a(20)),v=(a(126),a(59)),y=(a(479),a(210)),w=(a(252),a(209)),C=a(226),k=a(39),O=a.n(k),j=a(254).initializeApp({apiKey:"AIzaSyCxB0ESzcpgJmaEFg6VFeSqC_U4mEhRHuo",authDomain:"hotel-demo-data.firebaseapp.com",databaseURL:"https://hotel-demo-data.firebaseio.com",projectId:"hotel-demo-data",storageBucket:"hotel-demo-data.appspot.com",messagingSenderId:"201819256761",appId:"1:201819256761:web:42d45b39395e4d6d14a868",measurementId:"G-7JTQ6H0HVC"}),x=(j.firestore(),j.storage(),j.auth(),a(31)),I=f.a.Content,S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleDelete=function(e){a.db.collection("documents").doc(e).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));var t=Object(C.a)(a.state.data);a.setState({data:t.filter((function(t){return t.id!==e}))})},a.db=O.a.firestore(),a.columns=[{title:"Avatar",dataIndex:"src",key:"avatar",render:function(e){return r.a.createElement("img",{className:"avatar",src:e,alt:"anh demo"})}},{title:"Name",dataIndex:"ten",key:"name"},{title:"Location",dataIndex:"vitri",key:"localtion"},{title:"Price",dataIndex:"gia",key:"price",render:function(e){return r.a.createElement("span",null,e.toLocaleString()," vn\u0111")}},{title:"Rate",dataIndex:"danhgia",key:"rating"},{title:"Action",key:"action",render:function(e,t){return a.state.data.length>=1?r.a.createElement("span",null,r.a.createElement(x.b,{to:"/products/".concat(t.id)},"Edit"),r.a.createElement(w.a,{type:"vertical"}),r.a.createElement(y.a,{title:"Sure to delete?",onConfirm:function(){return a.handleDelete(t.id)}},r.a.createElement("a",null,"Delete"))):null}}],a.state={data:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.db.collection("documents").get().then((function(t){var a=t.docs.map((function(e){return e.data()}));t.docs;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.columns.map((function(e){return e}));return r.a.createElement(I,{style:{margin:"0 16px"}},r.a.createElement(v.a,{style:{margin:"16px 0"}},r.a.createElement(v.a.Item,null,"Danh s\xe1ch hotel")),r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},r.a.createElement(x.b,{to:"/create-products"},r.a.createElement(b.a,{style:{margin:"8px 0"},type:"primary"},"Th\xeam m\u1edbi")),r.a.createElement(E.a,{rowKey:function(e){return e.id},columns:e,dataSource:this.state.data})))}}]),t}(r.a.Component),N=(a(156),a(88)),D=(a(154),a(35)),R=a(87),T=(a(193),a(98)),L=a(65),P=f.a.Content,q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).creatProducts=function(){var e=a.state,t=e.ten,n=e.vitri,r=e.gia,i=e.danhgia,l=e.img;a.storage.ref("images/".concat(l.name)).put(l).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){a.storage.ref("images").child(l.name).getDownloadURL().then((function(e){a.db.collection("documents").add({ten:t,vitri:n,gia:Number(r),danhgia:Number(i),src:e}).then((function(l){a.db.collection("documents").doc(l.id).set({ten:t,vitri:n,gia:Number(r),danhgia:Number(i),src:e,id:l.id}),a.setState({ten:"",gia:0,danhgia:0,vitri:"",img:null}),console.log("Document written with ID: ",l.id)})).catch((function(e){console.error("Error writing document: ",e)}))})),T.a.success({content:"T\u1ea1o s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng !",onOk:function(){}})}))},a.storage=O.a.storage(),a.db=O.a.firestore(),a.handleChange=a.handleChange.bind(Object(L.a)(a)),a.addImg=a.addImg.bind(Object(L.a)(a)),a.state={ten:"",gia:0,danhgia:0,vitri:"",img:null,showbtn:!0},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"addImg",value:function(e){var t=this.state,a=(t.ten,t.gia,t.danhgia,t.vitri);if(e.target.files[0],""!==a){var n=e.target.files[0];this.setState({img:n,showbtn:!1}),console.log(n)}}},{key:"render",value:function(){var e=this.state,t=e.showbtn,a=e.ten,n=e.gia,i=e.danhgia,l=e.vitri;e.img;return r.a.createElement(P,{style:{margin:"0 16px"}},r.a.createElement(v.a,{style:{margin:"16px 0"}},r.a.createElement(v.a.Item,null,"Th\xeam m\u1edbi")),r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},r.a.createElement(N.a,{className:"addproduct"},"T\xean",r.a.createElement(D.a,{placeholder:"Nh\u1eadp t\xean hotel",name:"ten",value:a,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"V\u1ecb tr\xed",r.a.createElement(D.a,{placeholder:"Nh\u1eadp v\u1ecb tr\xed hotel",name:"vitri",value:l,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"\u0110\xe1nh gi\xe1",r.a.createElement(D.a,{placeholder:"Nh\u1eadp \u0111\xe1nh gi\xe1 hotel",name:"danhgia",value:i,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"Gi\xe1",r.a.createElement(D.a,{placeholder:"Nh\u1eadp gi\xe1 hotel",name:"gia",value:n,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("div",null,"Th\xeam \u1ea3nh",r.a.createElement("br",null),r.a.createElement("input",{type:"file",onChange:this.addImg}),r.a.createElement("br",null)),r.a.createElement(x.b,{to:"/products"},r.a.createElement(b.a,{type:"danger",style:{margin:"0 8px"}},"Back")),r.a.createElement(b.a,{type:"primary",htmlType:"submit",onClick:this.creatProducts,disabled:t},"Submit"))))}}]),t}(r.a.Component),A=(a(478),a(225)),H=a(163),U=a.n(H),V=a(220),B=f.a.Content;function F(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}var W=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleCancel=function(){return a.setState({previewVisible:!1})},a.handleChange=function(e){var t=e.fileList,n=e.file;a.setState({fileList:t,img:n.originFileObj})},a.handlePreview=function(){var e=Object(V.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,F(t.originFileObj);case 3:t.preview=e.sent;case 4:a.setState({previewImage:t.url||t.preview,previewVisible:!0,img:t.originFileObj});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.editData=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.updateProducts=function(){var e=a.state,t=e.ten,n=e.vitri,r=e.gia,i=e.danhgia,l=e.img,c=e.previewImage,o=e.id;null===l?a.db.collection("documents").doc(o).set({ten:t,vitri:n,gia:Number(r),danhgia:Number(i),src:c,id:o}).then((function(){T.a.success({content:"C\u1eadp nh\u1eadt s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng !",onOk:function(){}}),console.log("Document successfully update!")})).catch((function(e){console.error("Error writing document: ",e)})):a.storage.ref("images/".concat(l.name)).put(l).on("state_changed",(function(){a.storage.ref("images").child(l.name).getDownloadURL().then((function(e){a.db.collection("documents").doc(o).set({ten:t,vitri:n,gia:Number(r),danhgia:Number(i),src:e,id:o}).then((function(){console.log("Document successfully update!")})).catch((function(e){console.error("Error writing document: ",e)}))}))}))},a.storage=O.a.storage(),a.db=O.a.firestore(),a.state={id:a.props.match.params.id,datadetail:"",previewVisible:!1,previewImage:"",fileList:[{uid:"1",name:"",status:"done",url:""}],ten:"",gia:0,danhgia:0,vitri:"",img:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.db.collection("documents").doc(this.state.id).get().then((function(t){var a=t.data();e.setState({img:null,ten:a.ten,gia:a.gia,danhgia:a.danhgia,vitri:a.vitri,previewImage:a.src,fileList:[{uid:"1",name:a.ten,status:"done",url:a.src}]}),console.log(a)}))}},{key:"render",value:function(){var e=this.state,t=e.ten,a=e.danhgia,n=e.gia,i=e.vitri,l=e.previewVisible,c=e.previewImage,o=e.fileList,s=r.a.createElement("div",null,r.a.createElement(m.a,{type:"plus"}),r.a.createElement("div",{className:"ant-upload-text"},"Upload"));return r.a.createElement(B,{style:{margin:"0 16px"}},r.a.createElement(v.a,{style:{margin:"16px 0"}},r.a.createElement(v.a.Item,null,"Th\xf4ng tin")),r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},r.a.createElement(N.a,{className:"addproduct"},"T\xean",r.a.createElement(D.a,{placeholder:"Nh\u1eadp t\xean hotel",name:"ten",value:t,onChange:this.editData,required:!0}),r.a.createElement("br",null),"V\u1ecb tr\xed",r.a.createElement(D.a,{placeholder:"Nh\u1eadp v\u1ecb tr\xed hotel",name:"vitri",value:i,onChange:this.editData,required:!0}),r.a.createElement("br",null),"\u0110\xe1nh gi\xe1",r.a.createElement(D.a,{placeholder:"Nh\u1eadp \u0111\xe1nh gi\xe1 hotel",name:"danhgia",value:a,onChange:this.editData,required:!0}),r.a.createElement("br",null),"Gi\xe1",r.a.createElement(D.a,{placeholder:"Nh\u1eadp gi\xe1 hotel",name:"gia",value:n,onChange:this.editData,required:!0}),r.a.createElement("br",null),r.a.createElement("div",null,"Th\xeam \u1ea3nh",r.a.createElement("br",null),r.a.createElement("div",{className:"clearfix"},r.a.createElement(A.a,{listType:"picture-card",fileList:o,onPreview:this.handlePreview,onChange:this.handleChange},o.length>=1?null:s),r.a.createElement(T.a,{visible:l,footer:null,onCancel:this.handleCancel},r.a.createElement("img",{alt:"example",style:{width:"100%"},src:c}))),r.a.createElement("br",null)),r.a.createElement(x.b,{to:"/"},r.a.createElement(b.a,{type:"danger",style:{margin:"0 8px"}},"Back")),r.a.createElement(b.a,{type:"primary",htmlType:"submit",onClick:this.updateProducts},"Update"))))}}]),t}(r.a.Component),z=(a(474),a(227)),J=(a(165),a(122));function M(e){return r.a.createElement(z.a,{icon:r.a.createElement(m.a,{type:"smile",theme:"twoTone"}),title:"Hello, Welcome Here!",extra:r.a.createElement(J.a,{size:"large"}),style:{height:"78vh"}})}a(125);var G=a(64),K=a(69),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).register=function(e){e.preventDefault(),a.auth.createUserWithEmailAndPassword(a.state.email,a.state.password).then((function(){a.setState({isRegister:!1})})).catch((function(e){console.log(e)}))},a.onRegister=function(){a.setState({isRegister:!1})},a.offRegister=function(){a.setState({isRegister:!0})},a.auth=O.a.auth(),a.login=a.login.bind(Object(L.a)(a)),a.handleChange=a.handleChange.bind(Object(L.a)(a)),a.state={email:"",password:"",redirect:!1,isRegister:!0},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){var t=this;e.preventDefault(),this.auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((function(){t.setState({redirect:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.isRegister;return!0===this.state.redirect?r.a.createElement(K.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(D.a,{placeholder:"Enter your email",prefix:r.a.createElement(m.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),suffix:r.a.createElement(G.a,{title:"Extra information"},r.a.createElement(m.a,{type:"info-circle",style:{color:"rgba(0,0,0,.45)"}})),name:"email",onChange:this.handleChange,required:!0}),r.a.createElement(D.a.Password,{prefix:r.a.createElement(m.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",name:"password",placeholder:"Password",onChange:this.handleChange,required:!0}),e?r.a.createElement("div",null,r.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:this.login},"Log in"),"Or ",r.a.createElement("a",{onClick:this.onRegister},"register now!")):r.a.createElement("div",null,r.a.createElement(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:this.register},"Register"),r.a.createElement(m.a,{type:"arrow-left",style:{color:"blue"}})," ",r.a.createElement("a",{onClick:this.offRegister},"Back"))))}}]),t}(r.a.Component),Q=f.a.Header,$=f.a.Footer,X=f.a.Sider,Y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).logout=function(){a.auth.signOut().then((function(){return a.setState({redirect:!1})}))},a.auth=O.a.auth(),a.state={user:null,redirect:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.auth.onAuthStateChanged((function(t){t?(e.setState({redirect:!0,user:t.email}),console.log(t)):e.setState({redirect:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.user;return 0==t.redirect?r.a.createElement(x.a,null,r.a.createElement(K.b,{path:"/",component:_})):r.a.createElement(f.a,{style:{minHeight:"100vh"}},r.a.createElement(x.a,null,r.a.createElement(X,{breakpoint:"md",collapsedWidth:"0"},r.a.createElement("div",{className:"logo"},"Admin"),r.a.createElement(s.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(s.a.Item,{key:"8"},r.a.createElement(x.b,{to:"/",style:{color:"rgba(255, 255, 255, 0.65)"}},r.a.createElement(m.a,{type:"home",theme:"filled"}),r.a.createElement("span",null,"Home"))),r.a.createElement(s.a.Item,{key:"9"},r.a.createElement("span",null,r.a.createElement(x.b,{to:"/products",style:{color:"rgba(255, 255, 255, 0.65)"}},r.a.createElement(m.a,{type:"area-chart"}),"Products"))),r.a.createElement(s.a.Item,{key:"7"},r.a.createElement(m.a,{type:"idcard",theme:"filled"}),r.a.createElement("span",null,"Users")))),r.a.createElement(f.a,null,r.a.createElement(Q,{style:{background:"#fff",padding:0}},r.a.createElement(c.a,{overlay:function(){return r.a.createElement(s.a,null,r.a.createElement(s.a.Item,{key:"0",onClick:e.logout},r.a.createElement(x.b,{to:"/"},"Log out")))},trigger:["click"]},r.a.createElement("a",{className:"ant-dropdown-link",href:"#",style:{float:"right",margin:"0 2rem"}},r.a.createElement(o.a,{style:{backgroundColor:"#87d068",margin:"0 5px"},icon:"user"}),r.a.createElement("span",null,a),r.a.createElement(m.a,{type:"down",style:{padding:"0 2px"}})))),r.a.createElement(K.b,{exact:!0,path:"/",component:M}),r.a.createElement(K.b,{exact:!0,path:"/products",component:S}),r.a.createElement(K.b,{exact:!0,path:"/create-products",component:q}),r.a.createElement(K.b,{path:"/products/:id",component:W}),r.a.createElement($,{style:{textAlign:"center"}},"Tamdaoweb-Admin \xa92019 Created by Me"))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[229,1,2]]]);
//# sourceMappingURL=main.0fc69a5d.chunk.js.map