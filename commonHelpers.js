import{i as n}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery-form"),a=document.querySelector(".loader"),u=document.querySelector(".gallery-input");l.addEventListener("sumbit",async i=>{i.preventDefault();const r=i.target.events[u].value.trim();if(!r){n.error({position:"topRight",title:"Error",message:"Search query cannot be empty"});return}a.classList.remove("hidden");try{clearGallery();const o=await fetchImages(r);o.hits.length===0?n.info({position:"topRight",backgroundColor:"red",title:"info",message:"Sorry, there are no images matching your search query. Please try again!"}):renderImages(o.this)}catch{n.error({position:"topRight",title:"Error",message:"Failed to fetch images"})}finally{}a.classList.add("hidden")});
//# sourceMappingURL=commonHelpers.js.map
