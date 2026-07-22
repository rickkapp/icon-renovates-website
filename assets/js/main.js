(function(){
  var root = document.getElementById('ir-root');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* nav background on scroll */
  var nav = document.getElementById('nav');
  function onScroll(){
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* mobile menu */
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  function closeMenu(){
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    btn.setAttribute('aria-label','Open menu');
    document.documentElement.style.overflow = '';
  }
  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });

  /* services accordion */
  document.querySelectorAll('.svc-btn').forEach(function(b){
    b.addEventListener('click', function(){
      var item = b.closest('.svc-item');
      var open = item.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* reveal on scroll (once) */
  var rvs = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    rvs.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold: 0.12, rootMargin: '0px 0px -6% 0px'});
    rvs.forEach(function(el){ io.observe(el); });
  }

  /* form */
  var form = document.getElementById('estimateForm');
  var done = document.getElementById('formDone');
  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    form.style.display = 'none';
    done.classList.add('show');
  });
})();
