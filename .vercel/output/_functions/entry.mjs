import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_NHGmLK9g.mjs';
import { manifest } from './manifest_CC_5W5He.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/alarma.astro.mjs');
const _page2 = () => import('./pages/alarma-de-intrusion.astro.mjs');
const _page3 = () => import('./pages/api/send-email.astro.mjs');
const _page4 = () => import('./pages/cableado-estructurado.astro.mjs');
const _page5 = () => import('./pages/canalizaciones.astro.mjs');
const _page6 = () => import('./pages/cctv.astro.mjs');
const _page7 = () => import('./pages/clientes.astro.mjs');
const _page8 = () => import('./pages/contactos.astro.mjs');
const _page9 = () => import('./pages/control-de-acceso.astro.mjs');
const _page10 = () => import('./pages/gps.astro.mjs');
const _page11 = () => import('./pages/quienes-somos.astro.mjs');
const _page12 = () => import('./pages/redes-inalambricas.astro.mjs');
const _page13 = () => import('./pages/seguridad-electronica.astro.mjs');
const _page14 = () => import('./pages/sistema-audio-megafonia.astro.mjs');
const _page15 = () => import('./pages/soluciones.astro.mjs');
const _page16 = () => import('./pages/telecomunicaciones.astro.mjs');
const _page17 = () => import('./pages/video-vigilancia.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alarma.astro", _page1],
    ["src/pages/alarma-de-intrusion.astro", _page2],
    ["src/pages/api/send-email.ts", _page3],
    ["src/pages/cableado-estructurado.astro", _page4],
    ["src/pages/canalizaciones.astro", _page5],
    ["src/pages/cctv.astro", _page6],
    ["src/pages/clientes.astro", _page7],
    ["src/pages/contactos.astro", _page8],
    ["src/pages/control-de-acceso.astro", _page9],
    ["src/pages/gps.astro", _page10],
    ["src/pages/quienes-somos.astro", _page11],
    ["src/pages/redes-inalambricas.astro", _page12],
    ["src/pages/seguridad-electronica.astro", _page13],
    ["src/pages/sistema-audio-megafonia.astro", _page14],
    ["src/pages/soluciones.astro", _page15],
    ["src/pages/telecomunicaciones.astro", _page16],
    ["src/pages/video-vigilancia.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "62cea18d-e906-496e-89a0-c44e4762c4f7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
