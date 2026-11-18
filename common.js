// Coisas compartilhadas entre os jogos
const J = {
  get(k, d = 0) { try { const v = localStorage.getItem('jg-' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('jg-' + k, JSON.stringify(v)); } catch (e) {} },
  best(id) { return J.get('best-' + id, 0); },
  // salva recorde; retorna true se bateu
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
  // canvas em tela cheia com DPR
  canvas(el) {
    const ctx = el.getContext('2d'); const s = { ctx, W: 0, H: 0 };
    const fit = () => { const d = Math.min(devicePixelRatio || 1, 2); s.W = innerWidth; s.H = innerHeight;
      el.width = s.W * d; el.height = s.H * d; ctx.setTransform(d, 0, 0, d, 0, 0); s.onresize && s.onresize(); };
    addEventListener('resize', fit); fit(); return s;
  },
  // mostra tela final padrão
  over(id, score, extra = '') {
    const rec = J.record(id, score);
    const o = J.$('overlay');
    J.$('big').style.display = 'block';
    J.$('big').textContent = (rec && score > 0 ? '🏆 Novo recorde! ' : '') + score + ' pontos';
    J.$('msg').innerHTML = extra;
    J.$('play').textContent = 'De novo';
    J.$('best').textContent = J.best(id);
    o.classList.remove('hide');
  }
};

// tira o foco dos botões das telas de início/fim (senão Enter/Espaço reiniciam o jogo no teclado)
document.addEventListener('click', e => { const b = e.target.closest('.overlay button'); if (b) setTimeout(() => b.blur(), 0); });

// registra o modo offline (o caminho é relativo à raiz do app)
if ('serviceWorker' in navigator) {
  const root = document.currentScript && document.currentScript.src.replace(/common\.js.*$/, '');
  addEventListener('load', () => navigator.serviceWorker.register(root + 'sw.js').catch(() => {}));
}
