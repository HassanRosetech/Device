import{x as $,r as y,o as a,c as r,a as e,b as l,w as d,m as f,i,y as p,v as g,t as c,_ as w,d as I,F as k,T as U,H as C}from"./BHCayY3x.js";import{g as u}from"./CyZT7gpL.js";import{u as M}from"./CHBcv6HN.js";import{l as q}from"./B0MW8jFb.js";import"./BZABzFC3.js";import"./prAsIpjU.js";import"./Bkge9E1g.js";import"./DmLktNm9.js";import"./DhxlqMuE.js";import"./CZ-_-uzD.js";import"./CcY6dySL.js";import"./BcIfCn5G.js";import"./D-iVd-EU.js";const N={class:"masonary-blog-section section-b-space"},T={class:"container"},V={class:"row g-4 filter-gallery grid"},H={class:"grid-item col-lg-3 col-md-4 col-sm-6 w-100"},j={class:"card masonary-blog"},D=["src"],F=["src"],S={key:1,class:"font-light"},x={class:"image-profile"},z=["src"],E={class:"image-name"},L={__name:"main",setup(h){var n=$(()=>M().data.filter(s=>s.type==="blogMasonary")[0].blogs);return(s,t)=>{const _=y("masonry-wall");return a(),r("section",N,[e("div",T,[l(_,{items:i(n),"ssr-columns":1,"column-width":300,gap:24},{default:d(({item:o})=>[e("div",V,[e("div",H,[e("div",j,[o.type?p("",!0):(a(),r("a",{key:0,href:"javascript:void(0)",onClick:t[0]||(t[0]=f(m=>s.$router.push("/blog/blog_details"),["prevent"]))},[e("img",{src:("getImageUrl"in s?s.getImageUrl:i(u))(o.image),alt:"",class:"card-img-top"},null,8,D)])),e("div",{class:g(["card-body",o.class])},[o.type==="quote"?(a(),r("img",{key:0,src:("getImageUrl"in s?s.getImageUrl:i(u))(o.image),class:"quote-image",alt:""},null,8,F)):p("",!0),e("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=f(m=>s.$router.push("/blog/blog_details"),["prevent"]))},[e("h2",{class:g(["card-title",[{"quote-head":o.type==="quote"}]])},c(o.title),3)]),o.description?(a(),r("p",S,c(o.description),1)):p("",!0),e("div",{class:g(["blog-profile",[{"box-center":o.type==="quote"}]])},[e("div",x,[e("img",{src:("getImageUrl"in s?s.getImageUrl:i(u))(o.profileImage),class:"img-fluid",alt:""},null,8,z)]),e("div",E,[e("h3",null,c(o.author),1),e("h6",null,c(o.date),1)])],2)],2)])])])]),_:1},8,["items"])])])}}},A={components:{layout5:q},head(){return{title:"Blog Masonary"}}};function G(h,n,s,t,_,o){const m=U,v=C,b=L,B=y("layout5");return a(),r(k,null,[l(v,null,{default:d(()=>[l(m,null,{default:d(()=>n[0]||(n[0]=[I("Blog Masonary")])),_:1})]),_:1}),l(B,{pageName:"Blog Listing",parent:"Blog"},{default:d(()=>[l(b)]),_:1})],64)}const to=w(A,[["render",G]]);export{to as default};
