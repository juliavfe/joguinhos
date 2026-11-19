# Joguinhos — design

**Mundo:** folk aconchegante, em versão clara (fundo creme). Clima de capa de disco folk/indie: verde-pinho escuro, creme e cores desbotadas de capa antiga. Títulos com serifa macia, cantos arredondados, nada de brilho nem degradê.

**Substituiu:** o neon escuro (genérico) e depois a revistinha de passatempo em cores primárias (a Julia achou as cores feias). A Julia escolheu este caminho entre três opções desenhadas.

## Cores (style.css)
- Versão clara (escolhida pela Julia): `--paper` #F1EADB fundo creme · `--paper-2` #E6DDCA superfícies · `--paper-3` #D8CDB6 controles
- `--ink` #1F2B25 verde-pinho (texto) · `--ink-2` #5B6158 texto secundário · `--ouro` #85620F mostarda escura pra texto em destaque
- O verde-pinho continua como cor de botão principal (texto creme), do ícone e das telas "tinta".
- Cores dos jogos (texto sempre em verde-pinho por cima): `--azul` névoa #9DB4C0 · `--amarelo` mostarda #D8B24A · `--vermelho` rosa queimado #C98F8A · `--verde` sálvia #A9BE97 · `tinta` creme
- Respostas: `--certo` #A3C98C · `--errado` #E08577
- Destaque: mostarda em barras e marcações; em texto, `--ouro`, pra ter contraste no fundo claro.

## Tipo
- Títulos e números: Fraunces (variável, `opsz` 144, `SOFT` 100, `WONK` 1, peso 600), algarismos alinhados.
- Texto: Inter Tight 450, 16–18px, entrelinha 1.45.
- As duas fontes estão em `fonts/`, embutidas pra funcionar offline.

## Forma
- Cantos: 20px nos cartões, 14px em botões e opções, 8–11px em casas de jogo.
- Separação por troca de tom, não por linha nem sombra.
- Ícones desenhados em SVG, formas cheias. Sem emoji.
- Botão principal: creme com texto pinho. Nas telas coloridas, pinho com texto creme.
- Barra de abas embaixo, fundo #E6DDCA, aba ativa em verde-pinho.

## Movimento
Curto: apertar afunda (scale .97), cartões e abas entram uma vez. `prefers-reduced-motion` desliga deslocamentos, e o conteúdo nunca depende de animação pra aparecer.
