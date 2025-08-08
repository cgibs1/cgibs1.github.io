// Section label for landing page
(function(){
  const wrapper=document.querySelector('.snap-wrapper');
  const labelEl=document.getElementById('section-label');
  if(wrapper && labelEl){
    const sections=document.querySelectorAll('.snap-section');
    const io=new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ labelEl.textContent=(e.target.dataset.label||'').toUpperCase(); history.replaceState(null,'','#'+e.target.id); } });
    },{root:wrapper,threshold:0.6});
    sections.forEach(s=>io.observe(s));
  }
})();

// Simple list renderers for notices/jobs from /data/*.json
async function renderList(targetId, jsonPath){
  try{
    const res = await fetch(jsonPath, {cache:'no-store'});
    const items = await res.json();
    const ul = document.getElementById(targetId);
    if(!Array.isArray(items)||!ul) return;
    ul.innerHTML = items.map(it => `<li><a href="${it.url||'#'}">${it.title}</a><time>${it.date||''}</time></li>`).join('');
  }catch(e){ console.warn('List render failed', e); }
}
