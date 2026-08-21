// ASF ORGANIZATION — сайт билдери v2: кинематик бош саҳифа + алоҳида каталог (RU+UZ)
import fs from 'fs';
import path from 'path';
import { BRAND, CONTACTS, CATS, PRODUCTS, CALC, I18N, V2, FLEET, MEDIA } from './data.mjs';

const OUT = path.join(import.meta.dirname, 'dist');
const KAT = path.join(import.meta.dirname, '..', 'asf-katalog');
const MED = path.join(import.meta.dirname, 'media');

const SV = {
  phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.6 2z"/></svg>',
  tg: '<svg viewBox="0 0 24 24"><path d="M22 3 2 10.5l6.5 2.2M22 3l-3.5 17-8-7.3M22 3 10.5 12.7m-2 5.8v-6l2-.8"/></svg>',
  dl: '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  arr: '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
};

const cell = (c, L) => (typeof c === 'object' && c !== null ? c[L] : c);

// pre — активларга нисбий йўл; home — бош саҳифага йўл
const CTX = {
  home: { ru: { pre: '', home: '', cat: 'catalog/', lang: 'uz/' }, uz: { pre: '../', home: '', cat: 'catalog/', lang: '../' } },
  cat: { ru: { pre: '../', home: '../', cat: '', lang: '../uz/catalog/' }, uz: { pre: '../../', home: '../', cat: '', lang: '../../catalog/' } },
};

const shell = (L, t, x, title, desc, body, extraHead = '') => `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${x.pre}assets/m1.jpg">
<meta property="og:type" content="website">
<meta name="theme-color" content="#010e20">
<link rel="icon" href="${x.pre}assets/asf-logo.jpg">
<link rel="stylesheet" href="${x.pre}fonts.css">
<link rel="stylesheet" href="${x.pre}site.css">
${extraHead}
</head>
<body>
${body}
<script src="${x.pre}app.js"></script>
</body>
</html>`;

const bgVideo = (x, video, poster, cls = 'bgv') => `
  <video class="${cls}" autoplay muted loop playsinline preload="metadata" poster="${x.pre}${poster}">
    <source src="${x.pre}${video}" type="video/mp4">
  </video>`;

const header = (L, t, v, x, kind) => `
<header>
  <div class="wrap hd-in">
    <a class="hd-logo" href="${x.home || './'}"><img src="${x.pre}assets/asf-logo.jpg" alt="ASF"><b>ASF <i>ORGANIZATION</i></b></a>
    <nav>
      ${kind === 'home' ? `
      <a href="${x.cat}">${t.nav.products}</a>
      <a href="#fleet">${L === 'ru' ? 'Техника' : 'Texnika'}</a>
      <a href="#about">${t.nav.about}</a>
      <a href="#contacts">${t.nav.contacts}</a>` : `
      <a href="${x.home}">${v.backHome}</a>
      <a href="#products">${t.nav.products}</a>
      <a href="#calc">${t.nav.calc}</a>
      <a href="#contacts">${t.nav.contacts}</a>`}
    </nav>
    <a class="hd-phone" href="tel:${CONTACTS.phone1raw}">${CONTACTS.phone1}</a>
    <div class="lang"><span>${t.selfLabel}</span><a href="${x.lang}">${t.otherLabel}</a></div>
    <button id="burger" aria-label="menu"><i></i><i></i><i></i></button>
  </div>
</header>
<div id="mnav">
  ${kind === 'home' ? `
  <a href="${x.cat}">${t.nav.products}</a>
  <a href="#fleet">${L === 'ru' ? 'Техника' : 'Texnika'}</a>
  <a href="#about">${t.nav.about}</a>
  <a href="#contacts">${t.nav.contacts}</a>` : `
  <a href="${x.home}">${v.backHome}</a>
  <a href="#products">${t.nav.products}</a>
  <a href="#calc">${t.nav.calc}</a>
  <a href="#contacts">${t.nav.contacts}</a>`}
  <a href="tel:${CONTACTS.phone1raw}">${CONTACTS.phone1}</a>
</div>`;

const contacts = (L, t, x) => `
<section class="contacts" id="contacts">
  <div class="wrap">
    <div class="sec-head rv">
      <div><div class="kicker">${t.contactsKicker}</div><h2 class="h2">${t.contactsTitle}</h2></div>
      <div class="sec-num">@</div>
    </div>
    <div class="cont-g rv">
      <div class="cont-l">
        <div class="crow"><b>${t.cPhone} 1</b><a href="tel:${CONTACTS.phone1raw}">${CONTACTS.phone1}</a></div>
        <div class="crow"><b>${t.cPhone} 2</b><a href="tel:${CONTACTS.phone2raw}">${CONTACTS.phone2}</a></div>
        <div class="crow"><b>${t.cMail}</b><a class="sm" href="mailto:${CONTACTS.email}">${CONTACTS.email}</a></div>
        <div class="crow"><b>${t.cAddr}</b><span class="sm">${CONTACTS.address[L]}</span>
          <a class="cont-map" href="${CONTACTS.maps}" target="_blank" rel="noopener">${SV.pin}${t.cMap} ↗</a></div>
        <div class="crow"><b>${t.cHours}</b><span class="sm">${CONTACTS.hours[L]}</span></div>
      </div>
      <div class="cont-r">
        <h3>${t.quoteT}</h3>
        <a class="btn btn-amber" href="tel:${CONTACTS.phone1raw}">${SV.phone}${CONTACTS.phone1}</a>
        <a class="btn btn-ghost" href="${CONTACTS.telegram}" target="_blank" rel="noopener">${SV.tg}${t.ctaTg}</a>
        <a class="btn btn-ghost" href="mailto:${CONTACTS.email}">✉&nbsp;&nbsp;E-mail</a>
      </div>
    </div>
  </div>
</section>`;

const footer = (L, t, v, x, pdf) => `
<footer>
  <div class="wrap">
    <div class="ft-g">
      <div class="ft-brand">
        <a class="hd-logo" href="${x.home || './'}"><img src="${x.pre}assets/asf-logo.jpg" alt="ASF"><b>ASF <i>ORGANIZATION</i></b></a>
        <p>${t.footRights}</p>
        <div class="ft-slogan">«${t.slogan}»</div>
      </div>
      <div class="ft-col"><b>${t.footNav}</b>
        <a href="${x.cat || '#products'}">${t.nav.products}</a>
        <a href="${x.home}#fleet">${L === 'ru' ? 'Техника' : 'Texnika'}</a>
        <a href="${x.home}#about">${t.nav.about}</a>
        <a href="#contacts">${t.nav.contacts}</a>
      </div>
      <div class="ft-col"><b>${t.footDocs}</b>
        <a href="${pdf}" download>${t.footPdf}</a>
        <a href="tel:${CONTACTS.phone1raw}">${CONTACTS.phone1}</a>
        <a href="tel:${CONTACTS.phone2raw}">${CONTACTS.phone2}</a>
        <a href="mailto:${CONTACTS.email}">${CONTACTS.email}</a>
      </div>
    </div>
    <div class="ft-bot"><span>© 2026 ASF ORGANIZATION</span><span>UZBEKISTAN · NAVOIY</span></div>
  </div>
</footer>
<div class="mob-bar">
  <a class="mob-call" href="tel:${CONTACTS.phone1raw}">${SV.phone}${t.mobCall}</a>
  <a class="mob-tg" href="${CONTACTS.telegram}" target="_blank" rel="noopener">${SV.tg}${t.mobTg}</a>
</div>`;

// ═════════ БОШ САҲИФА (кино) ═════════
const homePage = (L) => {
  const t = I18N[L], v = V2[L], x = CTX.home[L];
  const pdf = `${x.pre}assets/ASF-Katalog-2026.pdf`;

  const jsonld = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: 'ASF ORGANIZATION', description: t.metaDesc,
    telephone: CONTACTS.phone1raw, email: CONTACTS.email,
    address: { '@type': 'PostalAddress', addressRegion: L === 'ru' ? 'Навоийская область' : 'Navoiy viloyati', addressLocality: L === 'ru' ? 'Карманинский район' : 'Karmana tumani', streetAddress: L === 'ru' ? 'Гулобод МФЙ, ул. Ташкент, 22' : "Gulobod MFY, Toshkent ko'chasi, 22", addressCountry: 'UZ' },
    openingHours: 'Mo-Su 09:00-22:00',
  });

  const intro = `
<div id="intro">
  <div class="in-top mono">ASF ORGANIZATION · MMXXVI</div>
  <div class="emb">
    <svg class="emb-frame" viewBox="0 0 400 220" preserveAspectRatio="none"><rect x="2" y="2" width="396" height="216" rx="10" pathLength="400" vector-effect="non-scaling-stroke"/></svg>
    <div class="emb-glow"></div>
    <div class="emb-l">
      <span class="eA">A</span><span class="eS">S</span><span class="eF">F</span>
    </div>
  </div>
  <div class="in-word">ORGANIZATION</div>
  <div class="in-slogan">«${t.slogan}»</div>
  <div class="in-bar"><i></i></div>
</div>`;

  const hero = `
<section class="hero" id="top">
  <div class="hero-bg">${bgVideo(x, MEDIA.heroVideo, MEDIA.heroPoster)}</div>
  <div class="hero-grad"></div>
  <div class="hero-ghost">ASF</div>
  <div class="hero-tag hh hh1">${v.heroTag}</div>
  <div class="wrap">
    <div class="kicker hh hh1">${t.heroKicker}</div>
    <h1><span class="l1" data-split="ASF"></span><span class="l2" data-split="ORGANIZATION"></span></h1>
    <div class="hero-slogan hh hh2">${t.slogan}</div>
    <p class="hero-sub hh hh3">${t.heroSub}</p>
    <div class="hero-cta hh hh4">
      <a class="btn btn-amber" href="${x.cat}">${SV.arr}${v.openCatalog}</a>
      <a class="btn btn-ghost" href="tel:${CONTACTS.phone1raw}">${SV.phone}${t.ctaCall}</a>
    </div>
    <div class="hero-geo hh hh5">${CONTACTS.geo[L]}</div>
  </div>
  <div class="scroll-cue"><span>${t.scrollDown}</span><i></i></div>
</section>`;

  const manifesto = `
<section class="mani">
  <div class="mani-bg"><img src="${x.pre}${MEDIA.manifestoBg}" alt="" loading="lazy"></div>
  <div class="mani-in wrap">
    ${v.manifesto.map((m, i) => `<div class="mani-l rv rv-d${i}"><span>${m}</span></div>`).join('')}
    <p class="mani-sub rv rv-d3">${v.manifestoSub}</p>
  </div>
</section>`;

  const films = v.films.map((f, i) => `
<section class="film" id="film${i + 1}">
  ${bgVideo(x, MEDIA.films[i].video, MEDIA.films[i].poster)}
  <div class="film-shade"></div>
  <h2 class="film-title">${f.t}</h2>
  <div class="film-info">
    <div class="film-k mono">${f.k}</div>
    <div class="film-s">${f.s}</div>
    <p>${f.d}</p>
    <a class="btn btn-ghost" href="${f.href}">${SV.arr}${f.cta}</a>
  </div>
  <div class="film-num mono">0${i + 1} / 03</div>
</section>`).join('');

  const fleet = `
<section class="fleetsec" id="fleet">
  <div class="grid-bg"></div>
  <div class="wrap">
    <div class="sec-head rv">
      <div><div class="kicker">${v.fleetKicker}</div><h2 class="h2">${v.fleetTitle}</h2></div>
      <div class="sec-num">0${FLEET.length}</div>
    </div>
    <p class="hero-sub rv" style="margin-bottom:34px;max-width:600px">${v.fleetSub}</p>
  </div>
  <div class="fleet-row" id="fleetrow">
    ${FLEET.map((f, i) => `
    <article class="fcard rv rv-d${i % 3}">
      <div class="fc-img"><img src="${x.pre}${f.img}" alt="${f.name[L]}" loading="lazy"><div class="fc-n">0${i + 1}</div></div>
      <div class="fc-body">
        <h3>${f.name[L]}</h3>
        <p>${f.d[L]}</p>
        <a class="fc-cta" href="tel:${CONTACTS.phone1raw}">${SV.phone}<span>${v.fleetCta}</span></a>
      </div>
    </article>`).join('')}
  </div>
</section>`;

  const stats = `
<section class="stats"><div class="wrap"><div class="stats-g">
  ${t.stats.map((s, i) => `<div class="stat rv rv-d${i}">
    <div class="stat-v" ${s.v ? `data-count="${s.v}" data-suf="${s.suf}"` : ''}>${s.v ? '0' : s.txt}${s.v && s.suf ? `<s>${s.suf}</s>` : ''}</div>
    <div class="stat-k">${s.k}</div>
  </div>`).join('')}
</div></div></section>`;

  const about = `
<section class="about" id="about">
  <div class="grid-bg"></div>
  <div class="wrap about-g">
    <div class="about-txt rv">
      <div class="kicker">${t.aboutKicker}</div>
      <h2 class="h2">${t.aboutTitle}</h2>
      <p>${t.aboutText}</p>
      <p style="margin-top:-14px">${v.aboutMore}</p>
      <a class="btn btn-ghost" href="${pdf}" download>${SV.dl}${t.footPdf}</a>
    </div>
    <div class="about-img rv rv-d2"><img src="${x.pre}${MEDIA.aboutImg}" alt="ASF" loading="lazy"><div class="tag">${CONTACTS.geo[L]}</div></div>
  </div>
</section>`;

  const body = `
${intro}
<div id="glow"></div>
${header(L, t, v, x, 'home')}
${hero}
${manifesto}
${films}
${fleet}
${stats}
${about}
${contacts(L, t, x)}
${footer(L, t, v, x, pdf)}`;

  return shell(L, t, x, t.title, t.metaDesc, body, `<script type="application/ld+json">${jsonld}</script>`);
};

// ═════════ КАТАЛОГ САҲИФАСИ ═════════
const catalogPage = (L) => {
  const t = I18N[L], v = V2[L], x = CTX.cat[L];
  const pdf = `${x.pre}assets/ASF-Katalog-2026.pdf`;
  const calcJson = JSON.stringify(CALC.map(c => ({
    name: c.name[L],
    sizes: L === 'ru' ? c.sizes : c.sizes.map(([s, w]) => [s.replace(/мм/g, 'mm'), w]),
  })));
  const units = L === 'ru' ? `{kg:'кг',t:'т'}` : `{kg:'kg',t:'t'}`;
  const title = `${v.openCatalog} — ASF ORGANIZATION`;

  const catHero = `
<section class="cat-hero">
  <div class="grid-bg"></div>
  <div class="wrap">
    <a class="cat-back mono" href="${x.home}">${SV.back}${v.backHome}</a>
    <div class="kicker">${v.catKicker}</div>
    <h1 class="h2 cat-h1">${t.productsTitle}</h1>
    <p class="hero-sub" style="margin:18px 0 26px">${v.catHint}</p>
    <div class="hero-cta">
      <a class="btn btn-amber" href="${pdf}" download>${SV.dl}${t.ctaPdf}</a>
      <a class="btn btn-ghost" href="#calc">${SV.arr}${t.nav.calc}</a>
    </div>
  </div>
</section>
<div class="marq" aria-hidden="true"><div class="marq-in">${(t.marquee.concat(t.marquee)).map(m => `<b>${m}</b>`).join('')}</div></div>`;

  const cards = PRODUCTS.map((p, i) => `
  <article class="pcard rv rv-d${i % 3}" data-p="${p.n}" data-cat="${p.cat}">
    <div class="pc-img"><img src="${x.pre}${p.img}" alt="${p.title[L]}" loading="lazy"><div class="pc-n">${p.n}</div><div class="pc-cat">${CATS[p.cat][L]}</div></div>
    <div class="pc-body">
      <h3 class="pc-t">${p.title[L]}</h3>
      <div class="pc-s">${p.sub[L]}</div>
      <span class="pc-more">${t.more} ${SV.arr}</span>
      <div class="pc-ico">${p.icon}</div>
    </div>
  </article>`).join('');

  const products = `
<section class="products" id="products">
  <div class="wrap">
    <div class="filters rv">
      <button class="act" data-f="all">${t.filterAll}</button>
      ${Object.keys(CATS).map(k => `<button data-f="${k}">${CATS[k][L]}</button>`).join('')}
    </div>
    <div class="pgrid">${cards}</div>
  </div>
</section>`;

  const modals = PRODUCTS.map(p => `
  <div class="md-box" data-p="${p.n}" style="display:none">
    <button class="md-close" aria-label="close">✕</button>
    <div class="md-hero"><img src="${x.pre}${p.img}" alt=""><div class="n">${p.n}</div></div>
    <div class="md-body">
      <div class="md-kick">${CATS[p.cat][L]} · ${p.tbl.note ? cell(p.tbl.note, L) : ''}</div>
      <h3 class="md-t">${p.title[L]}</h3>
      <div class="md-s">${p.sub[L]}</div>
      <p class="md-d">${p.desc[L]}</p>
      <div class="md-specs">${p.specs[L].map(([k, vv, u]) => `<div class="md-spec"><b>${k}</b><i>${vv}${u ? `<s>${u}</s>` : ''}</i></div>`).join('')}</div>
      <div class="md-cols">
        <div><div class="md-ct">${t.propsT}</div><ul class="md-props">${p.props[L].map(xx => `<li>${xx}</li>`).join('')}</ul></div>
        <div><div class="md-ct">${t.appsT}</div><div class="md-chips">${p.apps[L].map(xx => `<span>${xx}</span>`).join('')}</div></div>
      </div>
      <div class="md-ct">${t.tblT}</div>
      <div class="md-tblwrap"><table class="md-tbl">
        <thead><tr>${p.tbl.head[L].map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${p.tbl.rows.map(r => `<tr>${r.map(c => `<td>${cell(c, L)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>
      <div class="md-note">${p.tbl.note ? cell(p.tbl.note, L) : ''}</div>
      <div class="md-price">
        <div><h4>${t.priceTitle}</h4><p>${t.priceNote}</p></div>
        <div>
          <a class="btn btn-amber" href="tel:${CONTACTS.phone1raw}">${SV.phone}${t.ctaCall}</a>
          <a class="btn btn-ghost" href="${CONTACTS.telegram}" target="_blank" rel="noopener">${SV.tg}Telegram</a>
        </div>
      </div>
    </div>
  </div>`).join('');

  const calc = `
<section class="calc" id="calc">
  <div class="wrap">
    <div class="sec-head rv">
      <div><div class="kicker">${t.calcKicker}</div><h2 class="h2">${t.calcTitle.replace('⇄', '<em>⇄</em>')}</h2></div>
      <div class="sec-num">T⇄M</div>
    </div>
    <p class="hero-sub rv" style="margin-bottom:34px;max-width:640px">${t.calcSub}</p>
    <div class="calc-box rv">
      <div class="calc-l">
        <div class="fld"><label>${t.calcProduct}</label><select id="c-prod">${CALC.map(c => `<option>${c.name[L]}</option>`).join('')}</select></div>
        <div class="fld"><label>${t.calcSize}</label><select id="c-size"></select></div>
        <div class="calc-io">
          <div class="fld" style="margin:0"><label>${t.calcTons}</label><input id="c-tons" type="number" min="0" step="0.5" value="1" inputmode="decimal"></div>
          <div class="swap">⇄</div>
          <div class="fld" style="margin:0"><label>${t.calcMeters}</label><input id="c-mets" type="number" min="0" step="10" inputmode="decimal"></div>
        </div>
        <div class="calc-kgm" id="c-kgm" data-label="${t.calcPerM}"></div>
      </div>
      <div class="calc-r">
        <div class="calc-res-k">${t.calcMeters}</div>
        <div class="calc-res" id="c-res" data-unit="${L === 'ru' ? 'м' : 'm'}"></div>
        <div class="calc-res2" id="c-res2"></div>
        <a class="btn btn-amber calc-cta" href="tel:${CONTACTS.phone1raw}">${SV.phone}${t.calcCta}</a>
        <div class="calc-note">${t.calcNote}</div>
      </div>
    </div>
  </div>
</section>`;

  const how = `
<section class="how">
  <div class="wrap">
    <div class="sec-head rv">
      <div><div class="kicker">${t.howKicker}</div><h2 class="h2">${t.howTitle}</h2></div>
      <div class="sec-num">04</div>
    </div>
    <div class="steps">
      ${t.steps.map(([h, d], i) => `<div class="step rv rv-d${i}"><div class="step-n">0${i + 1}</div><div class="step-t">${h}</div><div class="step-d">${d}</div></div>`).join('')}
    </div>
  </div>
</section>`;

  const partner = `
<section class="partner" id="partner">
  <div class="wrap">
    <div class="sec-head rv">
      <div><div class="kicker">${t.partnerKicker}</div><h2 class="h2">${t.partnerTitle}</h2></div>
      <div class="sec-num">A—Z</div>
    </div>
    <div class="part-g">
      ${t.pcards.map(([h, d], i) => `<div class="pc2 rv rv-d${i % 2}"><h3>${h}</h3><p>${d}</p></div>`).join('')}
    </div>
    <div class="quote rv">
      <h3>${t.quoteT}</h3>
      <p>${t.quoteD}</p>
      <a class="phone" href="tel:${CONTACTS.phone1raw}">${CONTACTS.phone1}</a>
    </div>
  </div>
</section>`;

  const body = `
<div id="glow"></div>
${header(L, t, v, x, 'cat')}
${catHero}
${products}
<div id="modal">${modals}</div>
${calc}
${how}
${partner}
${contacts(L, t, x)}
${footer(L, t, v, x, pdf)}
<script>window.__CALC=${calcJson};window.__U=${units}</script>`;

  return shell(L, t, x, title, t.metaDesc, body);
};

// ═════════ dist йиғиш ═════════
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'catalog'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'uz', 'catalog'), { recursive: true });

for (const f of ['cover.jpg', 'p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg', 'p7.jpg', 'p9.jpg', 'p10.jpg']) {
  fs.copyFileSync(path.join(KAT, 'imgs', f), path.join(OUT, 'assets', f));
}
fs.copyFileSync(path.join(KAT, 'asf-logo.jpg'), path.join(OUT, 'assets', 'asf-logo.jpg'));
fs.copyFileSync(path.join(KAT, 'ASF-katalog.pdf'), path.join(OUT, 'assets', 'ASF-Katalog-2026.pdf'));
fs.cpSync(path.join(KAT, 'fonts'), path.join(OUT, 'fonts'), { recursive: true });
fs.copyFileSync(path.join(KAT, 'fonts.css'), path.join(OUT, 'fonts.css'));
// генерацияланган медиа (media/ → dist/assets/)
if (fs.existsSync(MED)) {
  for (const f of fs.readdirSync(MED)) fs.copyFileSync(path.join(MED, f), path.join(OUT, 'assets', f));
}
fs.copyFileSync(path.join(import.meta.dirname, 'site.css'), path.join(OUT, 'site.css'));
fs.copyFileSync(path.join(import.meta.dirname, 'app.js'), path.join(OUT, 'app.js'));

fs.writeFileSync(path.join(OUT, 'index.html'), homePage('ru'), 'utf8');
fs.writeFileSync(path.join(OUT, 'uz', 'index.html'), homePage('uz'), 'utf8');
fs.writeFileSync(path.join(OUT, 'catalog', 'index.html'), catalogPage('ru'), 'utf8');
fs.writeFileSync(path.join(OUT, 'uz', 'catalog', 'index.html'), catalogPage('uz'), 'utf8');

console.log('✔ dist v2 тайёр:', OUT);
