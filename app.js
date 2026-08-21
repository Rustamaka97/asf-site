// ASF ORGANIZATION — сайт интерактивлари
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ————— кириш-саҳна: санагич 00→100 + ҳарф-маска + парда —————
  $$('[data-split]').forEach(el => {
    el.innerHTML = [...el.dataset.split].map((c, i) => `<span class="ch" style="--i:${i}">${c}</span>`).join('');
  });
  const intro = $('#intro');
  let introDone = false;
  const endIntro = () => {
    if (introDone) return; introDone = true;
    document.body.classList.add('introdone');
    requestAnimationFrame(() => document.body.classList.add('herogo'));
    setTimeout(() => { if (intro) intro.style.display = 'none'; document.body.style.overflow = ''; }, 1150);
  };
  if (intro) {
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => intro.classList.add('go'));
    setTimeout(endIntro, reduced ? 250 : 2750);
    intro.addEventListener('click', endIntro);
    setTimeout(endIntro, 5000); // страховка
  } else document.body.classList.add('herogo');

  // ————— header scroll —————
  const header = $('header');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ————— мобил меню —————
  const burger = $('#burger'), mnav = $('#mnav');
  if (burger) burger.addEventListener('click', () => {
    document.body.classList.toggle('mopen');
    mnav.classList.toggle('open');
  });
  $$('#mnav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('mopen'); mnav.classList.remove('open');
  }));

  // ————— reveal —————
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px' });
  $$('.rv').forEach(el => io.observe(el));

  // ————— count-up stats —————
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, target = +el.dataset.count, suf = el.dataset.suf || '';
    if (reduced || !target) { el.firstChild.textContent = target || el.textContent; return; }
    const t0 = performance.now(), dur = 1400;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1), ease = 1 - Math.pow(1 - p, 3);
      el.firstChild.textContent = Math.round(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.5 });
  $$('[data-count]').forEach(el => cio.observe(el));

  // ————— hero parallax —————
  const heroBg = $('.hero-bg img');
  if (heroBg && !reduced) addEventListener('scroll', () => {
    const y = scrollY;
    if (y < innerHeight * 1.2) heroBg.style.transform = `translateY(${y * 0.25}px)`;
  }, { passive: true });

  // ————— филтр —————
  $$('.filters button').forEach(b => b.addEventListener('click', () => {
    $$('.filters button').forEach(x => x.classList.remove('act'));
    b.classList.add('act');
    const f = b.dataset.f;
    $$('.pcard').forEach(c => c.classList.toggle('hide', f !== 'all' && c.dataset.cat !== f));
  }));

  // ————— модал (фақат каталог саҳифасида бор) —————
  const modal = $('#modal');
  if (modal) {
    const openModal = id => {
      $$('.md-box', modal).forEach(m => m.style.display = m.dataset.p === id ? '' : 'none');
      modal.classList.add('open');
      modal.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    };
    const closeModal = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
    $$('.pcard').forEach(c => c.addEventListener('click', () => openModal(c.dataset.p)));
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    $$('.md-close', modal).forEach(b => b.addEventListener('click', closeModal));
    addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  // ————— калькулятор —————
  const CALC = window.__CALC || [];
  const U = window.__U || { kg: 'кг', t: 'т' };
  const selP = $('#c-prod'), selS = $('#c-size'), inT = $('#c-tons'), inM = $('#c-mets');
  const kgmEl = $('#c-kgm'), resEl = $('#c-res'), res2El = $('#c-res2');
  const fmt = (n, d = 1) => n.toLocaleString('ru-RU', { maximumFractionDigits: d });
  let kgm = 0;

  const fillSizes = () => {
    const p = CALC[selP.selectedIndex];
    selS.innerHTML = p.sizes.map(s => `<option>${s[0]}</option>`).join('');
    pick();
  };
  const pick = () => {
    kgm = CALC[selP.selectedIndex].sizes[selS.selectedIndex][1];
    kgmEl.innerHTML = `${kgmEl.dataset.label}: <b>${kgm} ${U.kg}</b>`;
    fromTons();
  };
  const fromTons = () => {
    const t = parseFloat(inT.value) || 0;
    const m = t * 1000 / kgm;
    inM.value = m ? +m.toFixed(1) : '';
    render(t, m);
  };
  const fromMeters = () => {
    const m = parseFloat(inM.value) || 0;
    const t = m * kgm / 1000;
    inT.value = t ? +t.toFixed(3) : '';
    render(t, m);
  };
  const render = (t, m) => {
    resEl.innerHTML = `${fmt(m, 1)}<s>${resEl.dataset.unit}</s>`;
    res2El.textContent = `${CALC[selP.selectedIndex].sizes[selS.selectedIndex][0]} · ${fmt(t, 3)} ${U.t} = ${fmt(t * 1000, 0)} ${U.kg}`;
  };
  if (selP) {
    selP.addEventListener('change', fillSizes);
    selS.addEventListener('change', pick);
    inT.addEventListener('input', fromTons);
    inM.addEventListener('input', fromMeters);
    fillSizes();
  }

  // ————— фон видеолар: экрандан чиқса пауза (батарея/трафик) —————
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { v.play().catch(() => {}); }
    else v.pause();
  }), { threshold: 0.08 });
  $$('video.bgv').forEach(v => vio.observe(v));

  // ————— cursor glow —————
  const glow = $('#glow');
  if (glow && !reduced && matchMedia('(hover:hover)').matches) {
    addEventListener('mousemove', e => {
      glow.classList.add('on');
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }
})();
