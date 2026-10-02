const dict={
 en:{home:'Home',services:'Services',industries:'Industries',about:'About',contact:'Contact'},
 it:{home:'Home',services:'Servizi',industries:'Settori',about:'Chi siamo',contact:'Contatti'}
};
function setLang(lang){localStorage.setItem('interaLang',lang);document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[lang]&&dict[lang][k])el.textContent=dict[lang][k]});document.querySelectorAll('.lang-en').forEach(e=>e.style.fontWeight=lang==='en'?'700':'400');document.querySelectorAll('.lang-it').forEach(e=>e.style.fontWeight=lang==='it'?'700':'400')}
document.addEventListener('DOMContentLoaded',()=>{setLang(localStorage.getItem('interaLang')||'en')});
