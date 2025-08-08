// Update left-side section label on scroll using IntersectionObserver
(function() {
  const wrapper = document.querySelector('.snap-wrapper');
  const labelEl = document.getElementById('section-label');
  if (!wrapper || !labelEl) return;

  const sections = document.querySelectorAll('.snap-section');
  const options = { root: wrapper, threshold: 0.6 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lbl = entry.target.getAttribute('data-label') || '';
        labelEl.textContent = lbl.toUpperCase();
        history.replaceState(null, '', '#' + entry.target.id);
      }
    });
  }, options);

  sections.forEach(sec => observer.observe(sec));
})();
