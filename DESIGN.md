# Joguinhos — design

**Mundo:** revistinha de passatempo de banca (tipo Coquetel). Papel de jornal, tinta preta e as cores de impressão chapadas: amarelo, vermelho, azul. Nada brilha, nada tem degradê, nada flutua. Parece impresso.

**Substituiu:** o visual neon escuro com brilhos, degradês, vidro e emoji (descartado por parecer genérico).

## Cores (style.css)
- `--paper` #ECECE7 fundo · `--paper-2` #DEDED7 superfícies e casas vazias
- `--ink` #16130F texto e traço · `--ink-2` #4D483F texto secundário
- `--amarelo` #FFC824 (texto em tinta) · `--vermelho` #D2311F · `--azul` #2350D2 · `--verde` #0E8A4F (texto em papel)
- Cada jogo tem uma cor própria; a cor de destaque aparece no bloco do jogo e no botão de ação.

## Tipo
Uma família só: Bricolage Grotesque (variável, embutida em `fonts/`).
- Título: peso 800, largura 75 (condensada), opsz 96, entrelinha 0.9, espaçamento -0.02em.
- Texto: peso 450, 16–18px, entrelinha 1.45.
- Números em `tabular-nums`.

## Forma
- Cantos retos. Blocos de cor chapada em tamanhos diferentes (mosaico), nunca uma fileira de cards iguais.
- Separação por troca de tom ou de cor, não por linha nem sombra. Grades de jogo (Palavra, Fusão) usam casas preenchidas.
- Ícones desenhados em SVG, formas cheias em tinta. Sem emoji.
- Botão principal: retângulo chapado em tinta, texto em papel.

## Movimento
Curto e seco: apertar afunda o bloco (scale .97), cartas entram uma vez. `prefers-reduced-motion` desliga o deslocamento.
