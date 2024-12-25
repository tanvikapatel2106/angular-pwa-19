
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 14551, hash: '36bb211a3b73cc87b197ba6d00d55de41f5632964a21c1924b82e095a292a3e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8125, hash: 'd10429c436f018d52a2b13e478af67dda068234b5891b736bdafb180d341e553', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GFFMF7BD.css': {size: 7396, hash: '5qIQoneFbWs', text: () => import('./assets-chunks/styles-GFFMF7BD_css.mjs').then(m => m.default)}
  },
};
