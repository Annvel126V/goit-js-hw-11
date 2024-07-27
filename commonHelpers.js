import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){const r="https://pixabay.com/api/",s="45110935-91aa782eb5f23a60393d7a38c",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u(o){const r=new l(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),s=document.querySelector(".gallery-list");let i=o.hits.map(e=>`<div class="image-frame">
  <a href="${e.largeImageURL}">
  <img class="image" src="${e.webformatURL}" alt="${e.tags}" /></a>
  <div class ="text-gallery">
  <div class="text-block">
  <h5>likes</h5>
  <p>${e.likes}</p>
  </div>
  <div class="text-block">
  <h5>views</h5>
  <p>${e.views}</p>
  </div>
  <div class="text-block">
  <h5>comments</h5>
  <p>${e.comments}</p>
  </div>
  <div class="text-block">
  <h5>downloads</h5>
  <p>${e.downloads}</p>
  </div>
  </div>
  </div>`).join("");s.insertAdjacentHTML("afterbegin",i),r.refresh()}function m(){const o=document.querySelector(".gallery-list");o.innerHTML=""}const f=document.querySelector(".gallery-form"),p=document.querySelector(".input-for-gallery"),a=document.querySelector(".loader");f.addEventListener("submit",h);function h(o){m(),o.preventDefault(),a.classList.remove("hiden");let r=p.value.trim();d(`${r}`).then(s=>{if(s.total===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"}),a.classList.add("hiden");return}if(r===""){c.error({position:"topRight",message:"Please fill the input"}),a.classList.add("hiden");return}else u(s);a.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
