
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 14551, hash: '00905574832b71f6149e8e7b15c22d3c00036358aa3fb5a871827e5917be1222', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8125, hash: '995ed469a855b5b2c197f74301ccc7fe3bf6e35c7bd8512b264e5168f9fa5710', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GFFMF7BD.css': {size: 7396, hash: '5qIQoneFbWs', text: () => import('./assets-chunks/styles-GFFMF7BD_css.mjs').then(m => m.default)}
  },
};
