// GitHub Pages solo sirve archivos: sin esto, /contact o /blog/x responden 404
// (aunque se vean bien gracias a 404.html). Copiamos index.html a una carpeta
// por cada ruta para que todas respondan 200.
//
// - Rutas estáticas: se leen de src/router/routes.ts (las que no tienen ':' ni '*').
// - Entradas del blog: una por cada título de src/posts/posts.json.
// - 404.html: copia de index.html para cualquier URL desconocida.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist', 'spa');
const indexHtml = join(dist, 'index.html');

const routesSource = readFileSync(join(root, 'src', 'router', 'routes.ts'), 'utf8');
const staticRoutes = [...routesSource.matchAll(/path:\s*'([^']*)'/g)]
  .map(([, path]) => path.replace(/^\/+|\/+$/g, ''))
  .filter((path) => path && !path.includes(':') && !path.includes('*'));

const posts = JSON.parse(readFileSync(join(root, 'src', 'posts', 'posts.json'), 'utf8'));
const postRoutes = posts.map((post) => `blog/${post.title}`);

const routes = [...new Set([...staticRoutes, ...postRoutes])];

for (const route of routes) {
  const target = join(dist, ...route.split('/'), 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(indexHtml, target);
}
copyFileSync(indexHtml, join(dist, '404.html'));

console.log(`index.html copiado a ${routes.length} rutas: ${routes.join(', ')} (+ 404.html)`);
