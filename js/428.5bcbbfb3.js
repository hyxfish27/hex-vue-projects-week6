"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[428],{8428:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var s=n(6252),l=n(3577);const a={class:"container"},i=(0,s._)("h3",{class:"h3 text-center mt-4"},"後台產品列表",-1),o={class:"text-end mt-4"},c={class:"table mt-4"},d=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"120"}," 分類 "),(0,s._)("th",null,"產品名稱"),(0,s._)("th",{width:"120"}," 原價 "),(0,s._)("th",{width:"120"}," 售價 "),(0,s._)("th",{width:"100"}," 是否啟用 "),(0,s._)("th",{width:"120"}," 編輯 ")])],-1),u={class:"text-end"},r={class:"text-end"},h=["onClick"],_={key:0,class:"text-success"},p={key:1},b={class:"btn-group"},w=["onClick"],k=["onClick"];function g(t,e,n,g,m,y){return(0,s.wg)(),(0,s.iD)("div",a,[i,(0,s._)("div",o,[(0,s._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>y.openModal("new"))}," 建立新的產品 ")]),(0,s._)("table",c,[d,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,l.zw)(t.category),1),(0,s._)("td",null,(0,l.zw)(t.title),1),(0,s._)("td",u,(0,l.zw)(t.origin_price),1),(0,s._)("td",r,(0,l.zw)(t.price),1),(0,s._)("td",{onClick:e=>t.is_enabled=!t.is_enabled},[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",_,"啟用")):((0,s.wg)(),(0,s.iD)("span",p,"未啟用"))],8,h),(0,s._)("td",null,[(0,s._)("div",b,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>y.openModal("edit",t)}," 編輯 ",8,w),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>y.openModal("delete",t)}," 刪除 ",8,k)])])])))),128))])])])}var m={data(){return{products:[]}},methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/v2/api/hyxfish27/admin/products?page=${t}`;this.$http.get(e).then((t=>{})).catch((t=>{alert(t.data.message)}))},openModal(t,e){alert("後台還沒接好 > <")}},mounted(){this.getProducts()}},y=n(3744);const C=(0,y.Z)(m,[["render",g]]);var v=C}}]);
//# sourceMappingURL=428.5bcbbfb3.js.map