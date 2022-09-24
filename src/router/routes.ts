import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/InicioPage.vue') },
               { path: 'iniciopage', name: 'iniciopage', component: () => import('pages/InicioPage.vue') },
               { path: 'iniciatramite', name: 'iniciatramite', component: () => import('pages/IniciaTramite.vue') },
               { path: 'borradores', name: 'borradores', component: () => import('pages/BorradoresPage.vue') },
               { path: 'tramiteform', name: 'tramiteform', component: () => import('pages/TramiteForm.vue') },
               { path: 'ppago', name: 'ppago', component: () => import('pages/PPago.vue') },
               { path: 'ppagoref', name: 'ppagoref', component: () => import('pages/PPagoRef.vue') },
               { path: 'pfirma', name: 'pfirma', component: () => import('pages/PFirma.vue') },
               { path: 'finalizadopage', name: 'finalizadopage', component: () => import('pages/FinalizadoPage.vue') },
               ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
