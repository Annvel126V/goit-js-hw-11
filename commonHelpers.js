import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(s){return fetch(`https://pixabay.com/api?key=45110935-91aa782eb5f23a60393d7a38c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{iziToast.error({position:"topRight",message:`${r}`})})}function u(s){const o=new l(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),i=document.querySelector(".gallery-list");let r=s.hits.map(e=>`<div class="image-frame">
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
  </div>`).join("");i.insertAdjacentHTML("afterbegin",r),o.refresh()}function m(){const s=document.querySelector(".gallery-list");s.innerHTML=""}const f=document.querySelector(".gallery-form"),p=document.querySelector(".input-for-gallery"),a=document.querySelector(".loader");f.addEventListener("submit",g);function g(s){m(),s.preventDefault(),a.classList.remove("hiden");let o=p.value.trim();d(`${o}`).then(i=>{if(i.total===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hiden");return}if(o===""){c.error({position:"topRight",message:"Please fill the input"}),a.classList.add("hiden");return}else u(i);a.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
