import{a as r}from"./axios-aba6f0e0.js";import{r as l,o as u,a as c,b as d,f as t,t as e,e as _}from"./index-3fb3ff2d.js";const m={class:"bg-gray card p-5"},h=t("h1",null,"Quotes API",-1),p={key:0},v={class:"mx-auto pt-3"},b={class:"card"},f={class:"card-header text-capitalize"},q={class:"card-body"},k={class:"blockquote mb-0"},y={id:"quote"},x={class:"blockquote-footer",id:"author"},g={class:"card-footer"},B={class:"text-muted",id:"date"},G={__name:"RandomQuotes",setup(Q){const o=l(""),i={method:"GET",url:"https://api.quotable.io/random"},s=async()=>{r.request(i).then(function(a){o.value=a.data})};return u(async()=>{await s()}),(a,n)=>(c(),d("main",m,[h,o.value?(c(),d("section",p,[t("div",v,[t("div",b,[t("div",f,e(o.value.tags.join(", ")),1),t("div",q,[t("blockquote",k,[t("p",y,e(o.value.content),1),t("footer",x,e(o.value.author),1)])]),t("div",g,[t("small",B,e(o.value.dateAdded),1)])])]),t("button",{onClick:n[0]||(n[0]=A=>s()),class:"btn btn-primary mt-3"}," Get random quote ")])):_("",!0)]))}};export{G as default};
