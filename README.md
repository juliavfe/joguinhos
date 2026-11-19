# Joguinhos

App de joguinhos que funciona offline no celular (PWA). É feito só com HTML, CSS e JavaScript, sem framework e sem build.

**Jogar:** https://juliavfe.github.io/joguinhos/

## Instalar no iPhone
1. Abra o link no **Safari**
2. Toque em **Compartilhar** e depois em **Adicionar à Tela de Início**
3. Pronto: ele vira um app com ícone e funciona sem internet

## Jogos
| Ação | Pensar | Saber |
|---|---|---|
| Órbita, Torre, Pulso | Eco, Fusão (2048), Conta Rápida, Palavra | Quiz (Bíblia, Filmes e Séries, Ciência, Geografia, Brasil), Linha do Tempo |

## Como mexer
- **Adicionar pergunta no Quiz ou evento na Linha do Tempo:** edite `dados.js`, copiando uma linha e trocando o texto.
- **Adicionar um jogo novo:** crie `jogos/nome.html` (use outro jogo como modelo), coloque ele na lista `JOGOS` do `index.html` e no `ARQUIVOS` do `sw.js`.
- **Depois de qualquer mudança:** aumente a `VERSAO` em `sw.js` (ex.: `joguinhos-v2`) pra o celular baixar a atualização. O app atualiza quando você abre ele com internet e depois fecha e abre de novo.

Os recordes ficam salvos no próprio aparelho.

## App das lojas (App Store e Google Play)
A pasta `app/` é o projeto Capacitor que empacota o mesmo app pra iPhone e Android.
Passo a passo completo em `COMO-LANCAR.txt`. Textos, ícone e prints das lojas em `loja/`.
