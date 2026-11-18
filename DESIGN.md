# Joguinhos — design

**Mundo:** folk aconchegante. Clima de capa de disco folk/indie: verde-pinho escuro, creme e cores desbotadas de capa antiga. Títulos com serifa macia, cantos arredondados, nada de brilho nem degradê.

**Substituiu:** o neon escuro (genérico) e depois a revistinha de passatempo em cores primárias (a Julia achou as cores feias). A Julia escolheu este caminho entre três opções desenhadas.

## Cores (style.css)
- `--paper` #1F2B25 fundo verde-pinho · `--paper-2` #2A3830 superfícies · `--paper-3` #384840 controles
- `--ink` #F1EADB creme (texto) · `--ink-2` #B7B9A8 texto secundário
- Cores dos jogos (texto sempre em verde-pinho por cima): `--azul` névoa #9DB4C0 · `--amarelo` mostarda #D8B24A · `--vermelho` rosa queimado #C98F8A · `--verde` sálvia #A9BE97 · `tinta` creme
- Respostas: `--certo` #A3C98C · `--errado` #E08577
- Destaque (tempo, valor do prêmio, foco): mostarda.

## Tipo
- Títulos e números: Fraunces (variável, `opsz` 144, `SOFT` 100, `WONK` 1, peso 600), algarismos alinhados.
- Texto: Inter Tight 450, 16–18px, entrelinha 1.45.
- As duas fontes estão em `fonts/`, embutidas pra funcionar offline.

## Forma
- Cantos: 20px nos cartões, 14px em botões e opções, 8–11px em casas de jogo.
- Separação por troca de tom, não por linha nem sombra.
- Ícones desenhados em SVG, formas cheias. Sem emoji.
- Botão principal: creme com texto pinho. Nas telas coloridas, pinho com texto creme.
- Barra de abas embaixo, fundo #18221D, aba ativa em creme.

## Movimento
Curto: apertar afunda (scale .97), cartões e abas entram uma vez. `prefers-reduced-motion` desliga deslocamentos, e o conteúdo nunca depende de animação pra aparecer.
