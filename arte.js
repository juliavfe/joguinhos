// Arte de cada jogo, desenhada a partir do próprio jogo. viewBox 100x100.
const ARTE = (() => {
  const P = '#1F2B25', P2 = '#2A3830', P3 = '#384840', CR = '#F1EADB', MO = '#D8B24A', RO = '#C98F8A', NE = '#9DB4C0', SA = '#A9BE97';
  const F = 'font-family="Fraunces, Georgia, serif" font-weight="600"';
  const wrap = (bg, body) => `<svg viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect x="-80" y="-40" width="260" height="180" fill="${bg}"/>${body}</svg>`;
  const star = (x, y, r, c) => { let d = ''; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4 - Math.PI / 2, rr = i % 2 ? r * .42 : r; d += (i ? 'L' : 'M') + (x + Math.cos(a) * rr).toFixed(1) + ' ' + (y + Math.sin(a) * rr).toFixed(1); } return `<path d="${d}Z" fill="${c}"/>`; };
  return {
    orbita: () => wrap(P2,
      `<circle cx="50" cy="52" r="41" fill="none" stroke="${CR}" stroke-width="1.6" opacity=".9"/>
       <circle cx="50" cy="52" r="28" fill="none" stroke="${P3}" stroke-width="1.6"/>
       <circle cx="50" cy="52" r="16" fill="${NE}"/><circle cx="45" cy="48" r="3.4" fill="${P2}" opacity=".55"/><circle cx="55" cy="57" r="5" fill="${P2}" opacity=".45"/>
       ${star(78, 26, 6, MO)}${star(24, 74, 4.2, MO)}
       <path d="M27 31l5-3 4 2 1 5-4 3-5-1z" fill="${RO}"/>
       <circle cx="85" cy="70" r="5" fill="${CR}"/><path d="M85 70 A41 41 0 0 1 73 84" fill="none" stroke="${CR}" stroke-width="3" stroke-linecap="round" opacity=".35"/>`),
    torre: () => wrap(MO,
      `<rect x="-80" y="86" width="260" height="60" fill="${P}" opacity=".9"/>
       <rect x="18" y="72" width="62" height="13" rx="3" fill="${P}"/>
       <rect x="24" y="58" width="54" height="13" rx="3" fill="${CR}"/>
       <rect x="24" y="44" width="48" height="13" rx="3" fill="${RO}"/>
       <rect x="30" y="30" width="42" height="13" rx="3" fill="${P}"/>
       <rect x="46" y="10" width="42" height="13" rx="3" fill="${CR}"/>
       <path d="M67 26v2M67 31v2" stroke="${P}" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>`),
    pulso: () => wrap(RO,
      `<circle cx="50" cy="50" r="31" fill="none" stroke="${P}" stroke-width="11" opacity=".18"/>
       <path d="M74.3 31.2 A31 31 0 0 1 80.5 56.5" fill="none" stroke="${CR}" stroke-width="11"/>
       <path d="M50 50 L86 38" stroke="${P}" stroke-width="4" stroke-linecap="round"/>
       <circle cx="50" cy="50" r="5" fill="${P}"/>
       `),
    palavra: () => {
      const t = (x, y, ch, bg, fg, stroke) => `<rect x="${x}" y="${y}" width="17" height="17" rx="3.5" fill="${bg}" ${stroke ? `stroke="${P}" stroke-width="1.6"` : ''}/><text x="${x + 8.5}" y="${y + 12.8}" text-anchor="middle" ${F} font-size="12" fill="${fg}">${ch}</text>`;
      const r1 = [['T', P3, CR], ['E', MO, P], ['R', P3, CR], ['R', P3, CR], ['A', SA, P]];
      const r2 = [['C', SA, P], ['E', SA, P], ['R', SA, P], ['T', SA, P], ['O', SA, P]];
      return wrap(CR, r1.map((c, i) => t(5 + i * 18.4, 22, ...c)).join('') + r2.map((c, i) => t(5 + i * 18.4, 42, ...c)).join('') +
        [0, 1, 2, 3, 4].map(i => `<rect x="${5 + i * 18.4}" y="62" width="17" height="17" rx="3.5" fill="none" stroke="${P}" stroke-opacity=".25" stroke-width="1.4"/>`).join(''));
    },
    eco: () => wrap(P2,
      `<rect x="14" y="14" width="34" height="34" rx="8" fill="${MO}"/>
       <rect x="52" y="14" width="34" height="34" rx="8" fill="${RO}" opacity=".4"/>
       <rect x="14" y="52" width="34" height="34" rx="8" fill="${NE}" opacity=".4"/>
       <rect x="52" y="52" width="34" height="34" rx="8" fill="${SA}" opacity=".4"/>
       <circle cx="31" cy="31" r="20" fill="none" stroke="${MO}" stroke-width="1.5" opacity=".5"/>`),
    fusao: () => {
      const v = [['2', CR], ['', P3], ['4', '#E6DCC0'], ['8', '#E9C96E'], ['', P3], ['16', MO], ['32', '#DDA69F'], ['', P3], ['64', RO]];
      return wrap(NE, `<rect x="8" y="8" width="84" height="84" rx="9" fill="${P}" opacity=".9"/>` + v.map(([n, c], i) => {
        const x = 13 + (i % 3) * 25.3, y = 13 + Math.floor(i / 3) * 25.3;
        return `<rect x="${x}" y="${y}" width="23" height="23" rx="4.5" fill="${c}"/>${n ? `<text x="${x + 11.5}" y="${y + 16}" text-anchor="middle" ${F} font-size="${n.length > 1 ? 11 : 13}" fill="${P}">${n}</text>` : ''}`;
      }).join(''));
    },
    conta: () => wrap(SA,
      `<text x="50" y="52" text-anchor="middle" ${F} font-size="36" fill="${P}">7×8</text>
       <rect x="16" y="64" width="31" height="20" rx="5" fill="${P}" opacity=".14"/><rect x="53" y="64" width="31" height="20" rx="5" fill="${P}"/>
       <text x="31.5" y="78.5" text-anchor="middle" ${F} font-size="13" fill="${P}" opacity=".7">54</text>
       <text x="68.5" y="78.5" text-anchor="middle" ${F} font-size="13" fill="${CR}">56</text>
       <rect x="16" y="16" width="68" height="3.5" rx="1.75" fill="${P}" opacity=".18"/><rect x="16" y="16" width="44" height="3.5" rx="1.75" fill="${P}"/>`),
    quiz: () => wrap(P,
      [6, 10, 14, 19, 25, 32, 40, 50].map((h, i) => `<rect x="${10 + i * 10.2}" y="${86 - h}" width="7.6" height="${h}" rx="2" fill="${i === 7 ? MO : CR}" opacity="${i === 7 ? 1 : .18 + i * .09}"/>`).join('') +
      `
       <circle cx="89.4" cy="16" r="6" fill="${MO}" opacity=".25"/>`),
    corrida: () => {
      const car = (x, y, c, a) => `<g transform="translate(${x} ${y}) rotate(${a})"><rect x="-7" y="-11" width="4" height="6" rx="1" fill="#111"/><rect x="3" y="-11" width="4" height="6" rx="1" fill="#111"/><rect x="-7.5" y="5" width="4.5" height="6.5" rx="1" fill="#111"/><rect x="3" y="5" width="4.5" height="6.5" rx="1" fill="#111"/><rect x="-8" y="-16" width="16" height="3.2" fill="${c}"/><path d="M-2 -15 H2 L4.5 -3 L5.5 9 H-5.5 L-4.5 -3Z" fill="${c}"/><rect x="-7.5" y="10.5" width="15" height="4" fill="${c}"/><ellipse cx="0" cy="-1.5" rx="2" ry="3" fill="${P}"/></g>`;
      return wrap('#2F4A35',
        `<path d="M-10 118 C 20 70, 70 80, 62 40 S 70 -5, 110 -20" fill="none" stroke="${CR}" stroke-width="46" stroke-dasharray="7 7"/>
         <path d="M-10 118 C 20 70, 70 80, 62 40 S 70 -5, 110 -20" fill="none" stroke="#E2554A" stroke-width="46" stroke-dasharray="7 7" stroke-dashoffset="7"/>
         <path d="M-10 118 C 20 70, 70 80, 62 40 S 70 -5, 110 -20" fill="none" stroke="#3B423E" stroke-width="38"/>
         ${car(66, 26, NE, 18)}${car(50, 66, MO, -8)}`);
    },
    festa: () => wrap(P2,
      `<path d="M50 50 L50 10 A40 40 0 0 1 90 50Z" fill="${NE}"/><path d="M50 50 L90 50 A40 40 0 0 1 50 90Z" fill="${SA}"/>
       <path d="M50 50 L50 90 A40 40 0 0 1 10 50Z" fill="${RO}"/><path d="M50 50 L10 50 A40 40 0 0 1 50 10Z" fill="${MO}"/>
       <circle cx="50" cy="50" r="9" fill="${P2}"/><circle cx="30" cy="30" r="4.5" fill="${P}"/><circle cx="70" cy="30" r="4.5" fill="${P}"/><circle cx="30" cy="70" r="4.5" fill="${P}"/><circle cx="70" cy="70" r="4.5" fill="${P}"/>`),
    stop: () => wrap(MO,
      `<rect x="12" y="12" width="76" height="76" rx="8" fill="${CR}"/>
       <rect x="18" y="31" width="30" height="13" rx="2" fill="${MO}" transform="rotate(-4 33 37)"/>
       <text x="33" y="45" text-anchor="middle" ${F} font-size="38" fill="${P}">A</text>
       <rect x="56" y="22" width="24" height="4" rx="2" fill="${P}" opacity=".85"/><rect x="56" y="31" width="17" height="4" rx="2" fill="${P}" opacity=".35"/>
       <rect x="56" y="40" width="21" height="4" rx="2" fill="${P}" opacity=".35"/>
       ${[58, 68, 78].map((y, i) => `<rect x="20" y="${y}" width="15" height="4" rx="2" fill="${P}" opacity=".35"/><rect x="40" y="${y}" width="${[30, 22, 36][i]}" height="4" rx="2" fill="${P}" opacity=".85"/>`).join('')}`),
    linha: () => wrap(RO,
      `<path d="M8 52 H92" stroke="${P}" stroke-width="2.4" stroke-linecap="round"/>
       ${[[16, '1500', 1], [38, '1822', 0], [62, '1889', 1], [84, '1969', 0]].map(([x, y, up]) =>
         `<circle cx="${x}" cy="52" r="5.5" fill="${up ? P : CR}"/><text x="${x}" y="${up ? 38 : 74}" text-anchor="middle" ${F} font-size="11.5" fill="${P}">${y}</text>`).join('')}`),
  };
})();
