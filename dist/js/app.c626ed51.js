(function(e){function t(t){for(var a,c,r=t[0],o=t[1],l=t[2],h=0,m=[];h<r.length;h++)c=r[h],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},s={app:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20b2":function(e,t,n){e.exports=n.p+"media/ribbit.6f703b4c.mp3"},2763:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("5f5b"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-container",{attrs:{fluid:""}},[n("NavBar"),n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("HenchmenList",{attrs:{henchmen:e.henchmen},on:{"clicked-frog":e.setClickedID,"clicked-nudge-all":e.nudgeAll,"clicked-clear-all":e.clearAll}})],1),n("b-col",{attrs:{sm:"9"}},[n("ChatLog",{attrs:{"henchman-ID":this.clickedID,"henchmen-messages":e.henchmen[this.clickedID].messages},on:{"clicked-clear-convo":e.clearConvo}})],1)],1),n("b-row",{staticClass:"mt-2",attrs:{"align-h":"end"}},[n("b-col",{attrs:{sm:"9"}},[n("ChatBar",{ref:"chatBar",attrs:{message:this.message,"max-length":this.maxLength},on:{"on-submit-message":e.handleSubmit,"clicked-emoji":e.handleSubmit}})],1)],1)],1)],1)},c=[],r=(n("fb6a"),n("accc"),n("0d03"),n("ac1f"),n("466d"),n("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{staticClass:"mb-4 pl-0 pr-0",attrs:{id:"nav-bar"}},[a("b-nav-text",[a("h6",[e._v("Frog Bother Chat")])]),a("b-navbar-brand",{staticClass:"ml-auto mr-0"},[a("h4",[a("img",{staticClass:"mr-3",attrs:{width:"27",height:"27",src:n("aca4")}}),e._v("Vito Croakleone")])])],1)}),o=[],l={name:"nav-bar"},u=l,h=(n("d764"),n("2877")),m=Object(h["a"])(u,r,o,!1,null,"0ad974ab",null),d=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"henchmen-list"}},[e._m(0),a("b-list-group",{attrs:{flush:""}},[e._l(e.henchmen,(function(t,s){return a("b-list-group-item",{key:t.name,class:{active:e.activeFrog===s},attrs:{href:"#"},on:{click:function(t){return e.getFrogID(s)}}},[a("img",{staticStyle:{"margin-right":"2vh"},attrs:{width:"26",height:"26",src:n("7a0d")}}),e._v(e._s(t.name)+" ")])})),a("label",{staticClass:"mt-4"},[a("h6",[e._v("Chat Options:")])]),a("b-button",{staticClass:"mt-1 mb-2",on:{click:function(t){return e.nudgeAll()}}},[e._v("Nudge All Froggos")]),a("b-button",{staticClass:"mt-1",on:{click:function(t){return e.clearAll()}}},[e._v("Clear All Convos")])],2)],1)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("h6",[e._v("Henchmen List:")])])}],p={name:"henchmen-list",props:{henchmen:{type:Array}},data:function(){return{activeFrog:0}},methods:{getFrogID:function(e){this.activeFrog=e,this.$emit("clicked-frog",e)},nudgeAll:function(){this.$emit("clicked-nudge-all")},clearAll:function(){this.$emit("clicked-clear-all")}}},b=p,v=(n("cdfc"),Object(h["a"])(b,f,g,!1,null,"7cb48418",null)),_=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"chat-box"}},[e._m(0),n("b-button",{staticClass:"ml-2",attrs:{pill:"",size:"sm"},on:{click:function(t){return e.clearConvo()}}},[e._v(" Clear ")]),n("div",{attrs:{id:"chat-log"}},[n("b-list-group",{attrs:{flush:""}},e._l(e.henchmenMessages,(function(t,a){return n("b-list-group-item",{key:t},[n("i",[e._v(e._s(e.henchmenMessages[a].timestamp))]),n("br"),n("strong",[e._v("Vito Croakleone: ")]),e._v(" "+e._s(e.henchmenMessages[a].message)+" ")])})),1)],1)],1)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("h6",[e._v("Chat Log:")])])}],C=(n("a9e3"),{name:"chat-log",props:{henchmanID:Number,henchmenMessages:Array},methods:{clearConvo:function(){this.$emit("clicked-clear-convo")}}}),S=C,x=(n("bc10"),Object(h["a"])(S,y,k,!1,null,"dba8ee52",null)),O=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"chat-bar"}},[e._m(0),e._l(e.emojiList,(function(t){return n("div",{key:t,staticClass:"emoji"},[n("div",{staticClass:"noSelect",on:{click:function(n){return e.addEmoji(t)}}},[e._v(e._s(t))])])})),n("b-form",{attrs:{inline:""},on:{submit:function(t){return t.preventDefault(),e.handleSubmit(e.event)}}},[n("b-input",{ref:"input",staticStyle:{width:"87%"},attrs:{id:"message-input",autofocus:"true",maxlength:e.maxLength},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("b-badge",{staticClass:"ml-2 mr-2",attrs:{variant:"light"},domProps:{textContent:e._s(e.maxLength-e.message.length)}}),n("b-button",{staticClass:"ml-0",attrs:{id:"message-input-btn",type:"submit"}},[e._v("Ribbit")])],1)],2)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("h6",[e._v("Emojis: ")])])}],D={name:"chat-bar",props:{message:String,maxLength:Number},data:function(){return{emojiList:["🐸","🚬","🐴","🔫","🐟","🤵","👥","😤","😠"]}},methods:{handleSubmit:function(){this.$emit("on-submit-message",this.message,event)},addEmoji:function(e){this.$emit("clicked-emoji",e,event)}}},I=D,$=(n("5e01"),Object(h["a"])(I,j,w,!1,null,"3d202aa6",null)),A=$.exports,E=n("c8ed"),F=n("20b2"),L=n.n(F),B=n("e20d"),N=n.n(B),M={name:"app",components:{NavBar:d,HenchmenList:_,ChatLog:O,ChatBar:A},data:function(){return{maxLength:100,clickedID:0,message:"",timestamp:"",henchmen:[]}},created:function(){if(null==localStorage.getItem("henchmenData"))this.henchmen=E.data,localStorage.setItem("henchmenData",JSON.stringify(E.data));else{this.henchmen=E.data;var e=localStorage.getItem("henchmenData"),t=JSON.parse(e);this.henchmen=t}},updated:function(){this.scroll(),this.$refs.chatBar.$refs.input.focus()},methods:{setClickedID:function(e){this.clickedID=e},handleSubmit:function(e,t){var n=this.checkWhitespace(e);if(this.message=e,""==this.message||n)this.message="",t.target.reset();else{var a=new Audio(L.a);a.play();var s=/<[^>]*>/g;s.test(this.message)&&(this.message=this.message.replace(s,"")+" **String censored due to malicious input**"),this.henchmen[this.clickedID].messages.push({timestamp:(new Date).toISOString().slice(0,10),message:this.message}),this.saveFile(),this.message="",t.target.reset(),this.scrollToBottom()}},nudgeAll:function(){var e=new Audio(N.a);e.play();for(var t=0;t<this.henchmen.length;t++)this.henchmen[t].messages.push({timestamp:(new Date).toISOString().slice(0,10),message:"**!! NUDGE !!**"});this.saveFile(),this.scrollToBottom()},clearAll:function(){localStorage.clear();for(var e=0;e<this.henchmen.length;e++)this.henchmen[e].messages=[];this.saveFile()},clearConvo:function(){this.henchmen[this.clickedID].messages=[],this.saveFile()},checkWhitespace:function(e){return null!==e.match(/^\s+/)},scroll:function(){document.getElementById("chat-log").scrollTop=document.getElementById("chat-log").scrollHeight},saveFile:function(){var e=JSON.stringify(this.henchmen);localStorage.setItem("henchmenData",e)}}},P=M,J=(n("8109"),Object(h["a"])(P,i,c,!1,null,"3cc84c5e",null)),T=J.exports;n("f9e3"),n("2dd8");a["default"].use(s["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(T)}}).$mount("#app")},"5e01":function(e,t,n){"use strict";var a=n("2763"),s=n.n(a);s.a},"7a0d":function(e,t,n){e.exports=n.p+"img/froggo-displayimg.abd85040.png"},8109:function(e,t,n){"use strict";var a=n("c4bf"),s=n.n(a);s.a},"914b":function(e,t,n){},"97a1":function(e,t,n){},aca4:function(e,t,n){e.exports=n.p+"img/vito-displayimg.a68f4d96.png"},bc10:function(e,t,n){"use strict";var a=n("914b"),s=n.n(a);s.a},c4bf:function(e,t,n){},c8ed:function(e){e.exports=JSON.parse('{"data":[{"id":0,"name":"Sonny","messages":[]},{"id":1,"name":"Fredo","messages":[]},{"id":2,"name":"Michael","messages":[]},{"id":3,"name":"Jenny","messages":[]}]}')},cdfc:function(e,t,n){"use strict";var a=n("97a1"),s=n.n(a);s.a},d48c:function(e,t,n){},d764:function(e,t,n){"use strict";var a=n("d48c"),s=n.n(a);s.a},e20d:function(e,t,n){e.exports=n.p+"media/nudge.6498d0e4.mp3"}});
//# sourceMappingURL=app.c626ed51.js.map