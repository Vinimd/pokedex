(()=>{"use strict";function e(){const e=document.querySelector(".pokemon-name-info"),t=document.querySelector(".pokemon-image"),n=document.querySelector(".error"),o=document.querySelector(".display");e&&o.removeChild(e),t&&o.removeChild(t),n&&o.removeChild(n)}function t(t){const n=document.querySelector(".display"),o=document.querySelector('[data-button="next"]');t&&fetch(t).then((e=>e.json())).then((t=>{e();const r=function(e){const t=document.createElement("div");return t.setAttribute("class","pokemon-name-info"),t.innerText=`Nº${e.id}:${e.name}`,t}(t);n.insertBefore(r,o);const c=function(e){const t=document.createElement("div");return t.setAttribute("class","pokemon-type"),t.innerText="Type:",e.types.forEach((e=>{t.innerHTML+=` <span class = '${e.type.name} type'>${e.type.name}</span>`})),t}(t);r.append(c);const a=function(e){const t=document.createElement("div");return t.setAttribute("class","status"),t.innerHTML=`<span>Height : ${e.height/10} m</span><span>weight : ${e.weight/10} Kg</span>`,t}(t);c.append(a);const s=function(e){const t=document.createElement("div");return t.setAttribute("class","pokemon-image"),t.innerHTML=`<img class='image' src = ${e.sprites.front_default}>`,t}(t);n.insertBefore(s,r)})).catch((()=>{e();const t=document.createElement("div");t.setAttribute("class","error"),t.innerHTML="<span><strong>Pokemon Não Encontrado</strong></span>",n.insertBefore(t,o)}))}let n=0,o=1;function r(){const r=document.querySelector('[data-button="next"]'),c=document.querySelector("[data-search-micro]"),a=document.querySelector(".display"),s=document.querySelector("#pokemon-name"),i=function(){const r=window.SpeechRecognition||window.webkitSpeechRecognition,c=void 0!==r?new r:null;return c?(c.lang="pt_BR",c.onstart=()=>u=!0,c.onend=()=>u=!1,c.onerror=e=>console.log(`Error:${e}`),c.onresult=r=>{d=r.results[0][0].transcript,function(r){const c=r.includes("tipo")||r.includes("próximo")||r.includes("anterior"),a=document.querySelector(".search-type");c?(r.includes("normal")?o=1:r.includes("lutador")?o=2:r.includes("voador")?o=3:r.includes("venenoso")?o=4:r.includes("terra")?o=5:r.includes("pedra")?o=6:r.includes("inseto")?o=7:r.includes("fantasma")?o=8:r.includes("metal")?o=9:r.includes("fogo")?o=10:r.includes("água")?o=11:r.includes("grama")?o=12:r.includes("elétrico")?o=13:r.includes("psíquico")?o=14:r.includes("gelo")?o=15:r.includes("dragão")?o=16:r.includes("Sombrio")?o=17:r.includes("fada")&&(o=18),function(o,r){const c=document.querySelector(".display"),s=document.querySelector('[data-button="next"]'),i=document.querySelector(".type-term"),u=`https://pokeapi.co/api/v2/type/${r}`;console.log(u),fetch(u).then((e=>e.json())).then((e=>{a.id!=e.name&&(n=0,a.id=e.name),n<e.pokemon.length-1&&o.includes("próximo")?n++:n>0&&o.includes("anterior")?n--:n==e.pokemon.length-1&&o.includes("próximo")?n=0:0==n&&o.includes("anterior")&&(n=e.pokemon.length-1),i&&a.removeChild(i);const r=document.createElement("div");r.setAttribute("class","type-term"),r.innerText=e.name,a.append(r),t(e.pokemon[n].pokemon.url)})).catch((()=>{e();const t=document.createElement("div");t.setAttribute("class","error"),t.innerHTML="<span><strong>Tipo Não Encontrado</strong></span>",c.insertBefore(t,s)}))}(r,o)):t(`https://pokeapi.co/api/v2/pokemon/${r.toLocaleLowerCase()}`)}(d)},c):null}();let u=!1,d="";function l(){e(),function(){const e=document.createElement("div");e.setAttribute("class","recording"),e.innerText="Gravando.....",a.insertBefore(e,r)}(),i.start()}function p(){!function(){const e=document.querySelector(".recording");e&&a.removeChild(e)}(),i.stop()}window.addEventListener("keyup",(e=>{i&&" "===e.key&&u&&p()})),window.addEventListener("keydown",(e=>{const t=" "==e.key,n=e.target===s;i&&(!t||n||u||l())})),c.addEventListener("touchstart",(e=>{e.preventDefault(),i&&(u?p():l())}))}window.onload=function(){!function(){const e=document.querySelectorAll("[data-button]"),n=document.querySelector("[data-search]"),o=document.querySelector(".search-type");let r=0;function c(e){const n=document.querySelector(".type-term");n&&o.removeChild(n),r<384&&"next"===e.target.dataset.button?r++:r>1&&"previous"===e.target.dataset.button?r--:384===r&&"next"===e.target.dataset.button?r=1:1!==r&&0!==r||"previous"!==e.target.dataset.button||(r=384),t(`https://pokeapi.co/api/v2/pokemon/${r}`)}e.forEach((e=>{e.addEventListener("click",c)})),n.addEventListener("click",(function(e){e.preventDefault(),t(`https://pokeapi.co/api/v2/pokemon/${e.target.parentElement.elements[0].value.toLocaleLowerCase()}`)}))}(),function(){const n=document.querySelectorAll("[data-serach-type]"),o=document.querySelector(".search-type");let r=0,c=0;function a(a){[n[2],n[3]].forEach((e=>{e.hasAttribute("disabled")&&(e.disabled=!1)})),r<18&&"next-type"===a.target.dataset.serachType?r++:r>1&&"previous-type"===a.target.dataset.serachType?r--:18===r&&"next-type"===a.target.dataset.serachType?r=1:1!==r&&0!==r||"previous-type"!==a.target.dataset.serachType||(r=18),function(n,r){const a=document.querySelector(".display"),s=document.querySelector('[data-button="next"]'),i=document.querySelector(".type-term");fetch(`https://pokeapi.co/api/v2/type/${r}`).then((e=>e.json())).then((e=>{o.id!=e.name&&(c=0,o.id=e.name),c<e.pokemon.length-1&&"next"==n.target.dataset.serachType?c++:c>0&&"previous"==n.target.dataset.serachType?c--:c===e.pokemon.length-1&&"next"==n.target.dataset.serachType?c=0:0===c&&"previous"===n.target.dataset.serachType&&(c=e.pokemon.length-1),i&&o.removeChild(i);const r=document.createElement("div");r.setAttribute("class","type-term"),r.innerText=e.name,o.append(r),t(e.pokemon[c].pokemon.url)})).catch((()=>{e();const t=document.createElement("div");t.setAttribute("class","error"),t.innerHTML="<span><strong>Tipo Não Encontrado</strong></span>",a.insertBefore(t,s)}))}(a,r)}n.forEach((e=>{e.addEventListener("click",a)}))}(),function(){const e=document.querySelector('[data-modal ="open"]'),t=document.querySelector('[data-modal ="close"]'),n=document.querySelector('[data-modal ="container"]');function o(e){e.preventDefault(),n.classList.toggle("ativo")}e&&t&&n&&(t.addEventListener("click",o),e.addEventListener("click",o))}(),r()}})();