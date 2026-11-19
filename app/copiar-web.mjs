// Copia o app (que fica na raiz do repositório) pra pasta www, que vai dentro do app nativo.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
const raiz = new URL('../', import.meta.url).pathname, www = new URL('./www/', import.meta.url).pathname;
rmSync(www, { recursive: true, force: true }); mkdirSync(www);
for (const f of ['index.html', 'privacidade.html', 'style.css', 'common.js', 'dados.js', 'biblia.js', 'arte.js', 'manifest.json', 'jogos', 'fonts', 'icons'])
  cpSync(raiz + f, www + f, { recursive: true });
console.log('App copiado pra app/www');
