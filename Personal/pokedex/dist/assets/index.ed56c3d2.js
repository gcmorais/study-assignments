(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/1"),fetch("https://pokeapi.co/api/v2/pokemon/2"),fetch("https://pokeapi.co/api/v2/pokemon/3"),fetch("https://pokeapi.co/api/v2/pokemon/4"),fetch("https://pokeapi.co/api/v2/pokemon/5"),fetch("https://pokeapi.co/api/v2/pokemon/6"),fetch("https://pokeapi.co/api/v2/pokemon/7"),fetch("https://pokeapi.co/api/v2/pokemon/8"),fetch("https://pokeapi.co/api/v2/pokemon/9"),fetch("https://pokeapi.co/api/v2/pokemon/10")]).then(n=>{console.log(n)});const f=250,p=10;let s=0;function l(n,i){pokeApi.getPokemons(n,i).then((c=[])=>{m.innerHTML+=c.map(t=>`
      <li class="pokemon ${t.type}">
        <span class="number">#${t.number}</span>
        <span class="name">${t.name}</span>

        <div class="detail">
          <ol class="types">
            ${t.types.map(e=>`<li class="type ${e}">${e}</li>`).join("")}
          </ol>
          <img src='${t.photo}' alt='${t.name}'>
        </div>
      </li>`).join("")})}const m=document.querySelector("#pokemonList"),a=document.querySelector("#loadMoreBtn");l(s,p);a.addEventListener("click",()=>{s+=p;const n=s+p;if(n>=f){const i=n-f;l(s,i),a.parentElement.removeChild(a)}else l(s,p)});
