// Coisas compartilhadas entre os jogos
const J = {
  // cores de impressão (as mesmas do style.css)
  C: { paper: '#1F2B25', paper2: '#2A3830', paper3: '#384840', ink: '#F1EADB', ink2: '#B7B9A8', pinho: '#1F2B25',
       amarelo: '#D8B24A', vermelho: '#C98F8A', azul: '#9DB4C0', verde: '#A9BE97', certo: '#A3C98C', errado: '#E08577' },
  FONT: '"Fraunces", Georgia, serif',
  get(k, d = 0) { try { const v = localStorage.getItem('jg-' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('jg-' + k, JSON.stringify(v)); } catch (e) {} },
  best(id) { return J.get('best-' + id, 0); },
  record(id, score) { if (score > J.best(id)) { J.set('best-' + id, score); return true; } return false; },
  muted() { return J.get('mute', false); },
  _ac: null,
  beep(f, d = .08, type = 'sine', v = .07) {
    if (J.muted()) return;
    try {
      if (!J._ac) J._ac = new (window.AudioContext || window.webkitAudioContext)();
      if (J._ac.state === 'suspended') J._ac.resume();
      const ac = J._ac, o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.value = f; g.gain.value = v;
      g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + d);
      o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + d);
    } catch (e) {}
  },
  good() { J.beep(660, .1, 'triangle'); setTimeout(() => J.beep(880, .12, 'triangle'), 70); },
  bad() { J.beep(160, .3, 'sawtooth', .08); },
  shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; },
  $(id) { return document.getElementById(id); },
  canvas(el) {
    const ctx = el.getContext('2d'); const s = { ctx, W: 0, H: 0 };
    const fit = () => { const d = Math.min(devicePixelRatio || 1, 2); s.W = el.clientWidth || innerWidth; s.H = el.clientHeight || innerHeight;
      el.width = s.W * d; el.height = s.H * d; ctx.setTransform(d, 0, 0, d, 0, 0); s.onresize && s.onresize(); };
    addEventListener('resize', fit); addEventListener('orientationchange', () => setTimeout(fit, 300)); fit(); return s;
  },
  // tela final padrão
  over(id, score, extra = '') {
    const rec = J.record(id, score) && score > 0;
    J.$('big').style.display = 'block';
    J.$('big').textContent = score + (score === 1 ? ' ponto' : ' pontos') + (rec ? ' — recorde novo!' : '');
    J.$('msg').innerHTML = extra;
    const r = document.querySelector('.overlay .rules'); if (r) r.style.display = 'none';
    J.$('play').textContent = 'Jogar de novo';
    J.$('best').textContent = J.best(id);
    J.$('overlay').classList.remove('hide');
  },
  // ícones desenhados (formas cheias em tinta), viewBox 48
  ICON: {
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square"/></svg>',
    som: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h4l5-4v14l-5-4H3z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
    mudo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h4l5-4v14l-5-4H3z" fill="currentColor"/><path d="m16 9 6 6m0-6-6 6" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
    orbita: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="10" fill="currentColor"/><circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" stroke-width="3.5"/><circle cx="37.5" cy="10.5" r="5" fill="currentColor"/></svg>',
    torre: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="36" width="30" height="8" fill="currentColor"/><rect x="11" y="25" width="28" height="8" fill="currentColor"/><rect x="9" y="14" width="24" height="8" fill="currentColor"/><rect x="17" y="3" width="20" height="8" fill="currentColor"/></svg>',
    pulso: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" stroke-width="7" stroke-dasharray="70 37" transform="rotate(30 24 24)"/><path d="M24 24 40 9" stroke="currentColor" stroke-width="4.5" stroke-linecap="square"/></svg>',
    eco: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="4" width="18" height="18" fill="currentColor"/><rect x="26" y="4" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3.5"/><rect x="4" y="26" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3.5"/><rect x="26" y="26" width="18" height="18" fill="currentColor"/></svg>',
    fusao: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="4" width="17" height="17" fill="currentColor"/><rect x="4" y="27" width="17" height="17" fill="currentColor"/><rect x="27" y="4" width="17" height="40" fill="currentColor"/></svg>',
    conta: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 4v18M4 13h18" stroke="currentColor" stroke-width="5"/><path d="m29 6 13 13m0-13L29 19" stroke="currentColor" stroke-width="5"/><path d="M4 35h18" stroke="currentColor" stroke-width="5"/><circle cx="13" cy="28" r="3" fill="currentColor"/><circle cx="13" cy="42" r="3" fill="currentColor"/><path d="M27 31h17M27 40h17" stroke="currentColor" stroke-width="5"/></svg>',
    palavra: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="2" y="15" width="13" height="18" fill="currentColor"/><rect x="17.5" y="15" width="13" height="18" fill="none" stroke="currentColor" stroke-width="3"/><rect x="33" y="15" width="13" height="18" fill="currentColor"/></svg>',
    quiz: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 16a9 9 0 1 1 13 8c-3 1.6-4 3.4-4 6.5V33" fill="none" stroke="currentColor" stroke-width="6"/><rect x="21" y="38" width="6" height="6" fill="currentColor"/></svg>',
    musica: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4h11v11.5a3.5 3.5 0 1 1-2-3.15V8h-7v9.5a3.5 3.5 0 1 1-2-3.15z" fill="currentColor"/></svg>',
    linha: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M2 24h44" stroke="currentColor" stroke-width="3.5"/><rect x="5" y="17" width="10" height="14" fill="currentColor"/><rect x="19" y="10" width="10" height="28" fill="currentColor"/><rect x="33" y="17" width="10" height="14" fill="currentColor"/></svg>',
  },
};

// o jogo está aberto por cima da tela inicial (pra música não parar)?
J.EMB = (() => { try { return window.parent !== window && window.parent.location.origin === location.origin; } catch (e) { return false; } })();

// troca a seta de texto pelo ícone e coloca um "voltar" também na tela de início/fim
document.addEventListener('DOMContentLoaded', () => {
  const o = J.$('overlay');
  if (o && !o.querySelector('.back')) {
    const a = document.createElement('a'); a.className = 'back'; a.href = '../index.html'; o.prepend(a);
  }
  document.querySelectorAll('a.back').forEach(a => {
    a.innerHTML = J.ICON.back; a.setAttribute('aria-label', 'Voltar pros jogos');
    if (J.EMB) a.addEventListener('click', e => { e.preventDefault(); window.parent.postMessage('jg-fechar', location.origin); });
  });
});

// tira o foco dos botões das telas de início/fim (senão Enter/Espaço reiniciam o jogo no teclado)
document.addEventListener('click', e => { const b = e.target.closest('.overlay button'); if (b) setTimeout(() => b.blur(), 0); });

// modo offline
if ('serviceWorker' in navigator) {
  const root = document.currentScript && document.currentScript.src.replace(/common\.js.*$/, '');
  addEventListener('load', () => navigator.serviceWorker.register(root + 'sw.js').catch(() => {}));
}
