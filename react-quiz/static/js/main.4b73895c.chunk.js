(window["webpackJsonpreact-quiz-demo"]=window["webpackJsonpreact-quiz-demo"]||[]).push([[0],{16:function(t,e,n){t.exports=n(27)},21:function(t,e,n){},22:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(8),r=n.n(i),o=(n(21),n(9)),c=n(10),u=n(14),l=n(11),m=n(13),h=(n(22),n(29)),v=n(28),w=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={list:[{question:"C\xe2u 1: Vi\u1ec7t Nam c\xf3 bao nhi\xeau t\u1ec9nh th\xe0nh?",answer:["A: 64","B: 63","C: 62","D: 61"],correct:"B: 63"},{question:"C\xe2u 2: C\u1eadu V\xe0ng c\xf3 m\u1ea5y ch\xe2n?",answer:["A: 4","B: 3","C: 2","D: 1"],correct:"A: 4"},{question:"C\xe2u 3: 2 con v\u1ecbt \u0111i tr\u01b0\u1edbc 2 con v\u1ecbt, 2 con v\u1ecbt \u0111i sau 2 con v\u1ecbt, 2 con v\u1ecbt \u0111i gi\u1eefa 2 con v\u1ecbt. H\u1ecfi c\xf3 m\u1ea5y con v\u1ecbt?",answer:["A: 3","B: 4","C: 5","D: 6"],correct:"B: 4"},{question:"C\xe2u 4: 9 \u2013 6 - 1; 27 \u2013 1 - 2; 6 - 3 - ... ?",answer:["A: 3","B: 4","C: 5","D: 6"],correct:"A: 3"},{question:"C\xe2u 5: 1 + 2 + 3 + ..... + 99 = ?",answer:["A: 4850","B: 4580","C: 4950","D: 4590"],correct:"C: 4950"}],numberquestion:"",totalcorrect:0,status:["exit","exit","exit","exit"],isAnswered:!1,listCorect:["C\xe2u 1: 63 T\u1ec9nh","C\xe2u 2: 4 Ch\xe2n","C\xe2u 3: 4 Con v\u1ecbt","C\xe2u 4: S\u1ed1 3","C\xe2u 5: T\u1ed5ng = 4950"],showAnswer:!1,progress:0,timeout:null,interval:null,minute:0,second:15},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"checkAnswer",value:function(t,e,n,s,a){if(!s){var i=this.state.list[e].correct,r=this.state.status.slice();r=["exit","exit","exit","exit"],i===t?(n+=1,r[a]+=" exit1"):(e+=1,r[a]+=" exit2"),this.setState({isAnswered:!0,totalcorrect:n,status:r})}}},{key:"nextQuestion",value:function(t,e){var n=this.state.status.slice();n=["exit","exit","exit","exit"],t<=4?t+=1:t=5,this.setState({isAnswered:!1,numberquestion:t,status:n})}},{key:"showAnswer",value:function(){this.setState({showAnswer:!0})}},{key:"backHome",value:function(t){clearTimeout(this.state.timeout),clearInterval(this.state.interval),this.setState({numberquestion:"",showAnswer:!1})}},{key:"startQuiz",value:function(t,e,n,s,a){var i=this;e=0,n=15,a=setInterval((function(){0===n?(e-=1,n=0):n>0&&(n-=1),i.setState({minute:e,second:n})}),1e3),s=setTimeout((function(){i.setState({numberquestion:5,status:["exit","exit","exit","exit"]}),clearInterval(a)}),15e3),this.setState({numberquestion:0,minute:e,second:n,timeout:s,interval:a})}},{key:"resetQuiz",value:function(t,e,n,s,a,i,r){var o=this;t=0,n=["exit","exit","exit","exit"],clearTimeout(this.state.timeout),clearInterval(this.state.interval),s=0,a=15,r=setInterval((function(){0===a?(s-=1,a=0):a>0&&(a-=1),o.setState({minute:s,second:a})}),1e3),i=setTimeout((function(){o.setState({numberquestion:t=5,status:["exit","exit","exit","exit"]}),clearInterval(r)}),15e3),this.setState({numberquestion:t,totalcorrect:0,status:n,showAnswer:!1,minute:s,second:a,isAnswered:!1,timeout:i,interval:r})}},{key:"render",value:function(){var t=this,e=this.state.numberquestion,n=this.state.totalcorrect,s=this.state.status,i=this.state.isAnswered,r=this.state.showAnswer,o=this.state.minute,c=this.state.second,u=this.state.timeout,l=this.state.interval;if(""===e)return a.a.createElement("div",{className:"start"},a.a.createElement("h1",null,"Welcome to My Quiz ?!"),a.a.createElement("h4",null,"In 15 seconds"),a.a.createElement(h.a,{color:"primary",size:"lg",onClick:function(){return t.startQuiz(e,u,l)}},"Let's Go"));if(e<=4&&e>=0){var m=this.state.list[e].question,w=this.state.list[e].answer.map((function(r,o){return a.a.createElement("li",{key:o},a.a.createElement("h3",{className:s[o],onClick:function(){return t.checkAnswer(r,e,n,i,o)}},a.a.createElement("p",null,r)))}));return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("h1",null,"Quiz"),a.a.createElement("ul",null,a.a.createElement("h2",null,m)),w,a.a.createElement("p",{className:"countdown"},o<10?"0"+o:o,":",c<10?"0"+c:c),i&&a.a.createElement(h.a,{className:"btn",color:"success",onClick:function(){return t.nextQuestion(e,i)}},"Ti\u1ebfp theo")))}var d=this.state.listCorect.map((function(t,e){return a.a.createElement(v.a,{key:e},t)}));return a.a.createElement("div",{className:"finish"},a.a.createElement("h1",null,"Ho\xe0n Th\xe0nh !!!"),a.a.createElement("h6",null,"B\u1ea1n \u0111\xe3 \u0111\xfang ",n," / 5 c\xe2u"),a.a.createElement(h.a,{color:"success",className:"btn",onClick:function(){return t.resetQuiz(e,n,s,u,l)}},"L\xe0m l\u1ea1i")," ",a.a.createElement(h.a,{color:"primary",className:"btn",onClick:function(){return t.showAnswer()}},"Xem \u0111\xe1p \xe1n")," ",a.a.createElement(h.a,{color:"danger",onClick:function(){return t.backHome(e,o,c)}},"Homepage"),r&&a.a.createElement("div",null,d))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.4b73895c.chunk.js.map