(function(){"use strict";var t={321:function(t,o,e){var n=e(9242),r=e(3396),i=e(7139);const c=(0,r._)("h1",{class:"main-title"},"Phone Store",-1),s={key:0,class:"order"},u={key:0,class:"order-form"},d={key:0,class:"order-nothing"},a={key:1},l=(0,r._)("h3",{class:"order-title"},"Positions:",-1),p={class:"order-pay"},f={class:"products"};function m(t,o,e,m,h,g){const C=(0,r.up)("cart-icon"),w=(0,r.up)("closeIcon"),v=(0,r.up)("order-actions"),I=(0,r.up)("product");return(0,r.wg)(),(0,r.iD)(r.HY,null,[c,(0,r.Wm)(C,{class:"cart-icon",onClick:o[0]||(o[0]=t=>h.isCartOpened=!h.isCartOpened)}),(0,r.Wm)(n.uT,{name:"fade"},{default:(0,r.w5)((()=>[h.isCartOpened?((0,r.wg)(),(0,r.iD)("div",s,[h.isCartOpened?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(w,{class:"order-close",onClick:o[1]||(o[1]=t=>h.isCartOpened=!h.isCartOpened)}),g.updateCart()&&h.productsInCart.length?((0,r.wg)(),(0,r.iD)("div",a,[l,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.updateCart(),(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id,class:"order-position"},[(0,r.Uk)((0,i.zw)(t.name)+" "+(0,i.zw)(t.cost)+"$ ",1),(0,r.Wm)(v,{id:t.id,count:t.count,name:t.name,cost:parseInt(t.cost),onHandleCartAction:g.handleCartAction},null,8,["id","count","name","cost","onHandleCartAction"])])))),128))]),(0,r._)("button",p,"Pay: "+(0,i.zw)(this.sum)+"$",1)])):((0,r.wg)(),(0,r.iD)("div",d," Nothing to Buy!"))])):(0,r.kq)("",!0)])):(0,r.kq)("",!0)])),_:1}),(0,r._)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.items,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"product-wrapper",key:t.id},[(0,r.Wm)(I,{item:t},null,8,["item"])])))),128))])],64)}var h=e.p+"img/product-item.7fa23546.jpg";const g={class:"product"},C=(0,r._)("div",{class:"product-image-wrapper"},[(0,r._)("img",{src:h,alt:"Product Image"})],-1),w={class:"product-info-wrapper"},v={class:"product-title"},I={class:"product-description"},O={class:"product-cost"};function _(t,o,e,n,c,s){const u=(0,r.up)("order-actions");return(0,r.wg)(),(0,r.iD)("div",g,[C,(0,r._)("div",w,[(0,r._)("h3",v,(0,i.zw)(e.item.productName),1),(0,r._)("p",I,(0,i.zw)(e.item.productDescription),1),(0,r._)("div",O,(0,i.zw)(e.item.productCost)+" $",1),(0,r.Wm)(u,{id:e.item.id,count:e.item.count,name:e.item.productName,cost:parseInt(e.item.productCost)},null,8,["id","count","name","cost"])])])}const S={class:"order-actions"},k={class:"order-counter"};function D(t,o,e,n,c,s){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("button",{class:"order-add",onClick:o[0]||(o[0]=(...t)=>s.removeProduct&&s.removeProduct(...t))}," - "),(0,r._)("div",k,(0,i.zw)(c.counter),1),(0,r._)("button",{class:"order-delete",onClick:o[1]||(o[1]=(...t)=>s.addProduct&&s.addProduct(...t))}," + ")])}e(7658);function N(){return JSON.parse(localStorage.getItem("cart"))}function P({id:t,name:o,cost:e}){const n={id:t,name:o,cost:e,count:null},r=JSON.parse(localStorage.getItem("cart")),i=r.find((t=>t.id===n.id));if(i){i.count+=1;const t=r.indexOf(i);r[t]=i}else n.count=1,r.push(n);localStorage.setItem("cart",JSON.stringify(r))}function b({id:t}){const o=JSON.parse(localStorage.getItem("cart")),e=o.findIndex((o=>o.id===t));o[e].count--,o[e].count<=0&&o.splice(e,1),localStorage.setItem("cart",JSON.stringify(o))}function y(){JSON.parse(localStorage.getItem("cart"))||localStorage.setItem("cart",JSON.stringify([]))}var x={name:"orderActions",props:{count:Number,id:Number,name:String,cost:Number},watch:{count(t){this.counter=t}},data(){return{counter:this.count||0}},methods:{addProduct(){this.counter<99&&(P({id:this.id,name:this.name,cost:this.cost}),this.counter++,this.$emit("handleCartAction"))},removeProduct(){this.counter>0&&(this.counter--,b({id:this.id}),this.$emit("handleCartAction"))}}},M=e(89);const W=(0,M.Z)(x,[["render",D],["__scopeId","data-v-ecd4d7cc"]]);var A=W,z={name:"Product",components:{orderActions:A},props:{item:Object}};const L=(0,M.Z)(z,[["render",_]]);var j=L;function H(){return[{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:1},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:2},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:3},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:4},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:5},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:6},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:7},{productName:"IPhone XS Max",productDescription:"Wonderful solution for wonderful people",productCost:299,id:8}]}const X={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},J=(0,r._)("path",{d:"M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Z=[J];function U(t,o){return(0,r.wg)(),(0,r.iD)("svg",X,Z)}const $={},B=(0,M.Z)($,[["render",U]]);var T=B;const Y={fill:"#000000",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg"},q=(0,r._)("path",{d:"M29.484 0c-.13.004-.252.057-.343.15L17.164 12.13c-.49.47.235 1.197.706.707L29.846.857c.325-.318.1-.857-.363-.857zM12.488 17c-.13.004-.25.058-.34.15L.162 29.14c-.486.467.233 1.186.7.7L12.848 17.85c.325-.313.093-.85-.36-.85zM.5 0a.5.5 0 0 0-.348.86L29.14 29.845a.5.5 0 1 0 .706-.706L.86.152A.5.5 0 0 0 .5 0z"},null,-1),E=[q];function K(t,o){return(0,r.wg)(),(0,r.iD)("svg",Y,E)}const F={},G=(0,M.Z)(F,[["render",K]]);var Q=G,R={name:"App",data(){return{items:[],isCartOpened:!1,productsInCart:[],sum:0}},components:{product:j,orderActions:A,cartIcon:T,closeIcon:Q},methods:{sumUpCost(t){let o=0;this.productsInCart=t;for(const e of t)o+=e.count*e.cost;this.sum=o},updateCart(){const t=N();return this.sumUpCost(t),t},handleCartAction(){const t=N();if(this.sumUpCost(t),this.items.forEach((t=>{t.count=0})),t.length){this.productsInCart=t;const o=t.filter((({id:t})=>this.items.some((({id:o})=>t===o))));for(let t=0;t<this.items.length;t++){const e=o.find((({id:o})=>o===this.items[t].id));e&&(this.items[t].count=e.count)}}}},created(){this.items=H(),y();const t=N();if(t.length){this.productsInCart=t;const o=t.filter((({id:t})=>this.items.some((({id:o})=>t===o))));for(let t=0;t<this.items.length;t++){const e=o.find((({id:o})=>o===this.items[t].id));e&&(this.items[t].count=e.count)}}this.sumUpCost(t)}};const V=(0,M.Z)(R,[["render",m]]);var tt=V;(0,n.ri)(tt).mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,i){if(!n){var c=1/0;for(a=0;a<t.length;a++){n=t[a][0],r=t[a][1],i=t[a][2];for(var s=!0,u=0;u<n.length;u++)(!1&i||c>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(s=!1,i<c&&(c=i));if(s){t.splice(a--,1);var d=r();void 0!==d&&(o=d)}}return o}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[n,r,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,i,c=n[0],s=n[1],u=n[2],d=0;if(c.some((function(o){return 0!==t[o]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(u)var a=u(e)}for(o&&o(n);d<c.length;d++)i=c[d],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(a)},n=self["webpackChunkvue_test_task"]=self["webpackChunkvue_test_task"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(321)}));n=e.O(n)})();
//# sourceMappingURL=app.ffad57ef.js.map