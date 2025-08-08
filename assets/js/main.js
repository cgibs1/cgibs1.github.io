(function(){
  const wrap=document.querySelector('.snap-wrapper');
  const lab=document.getElementById('section-label');
  if(!wrap||!lab) return;
  const secs=document.querySelectorAll('.snap-section');
  const io=new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){ lab.textContent=(e.target.dataset.label||'').toUpperCase(); history.replaceState(null,'','#'+e.target.id); } });
  },{root:wrap,threshold:0.6});
  secs.forEach(s=>io.observe(s));
})();
