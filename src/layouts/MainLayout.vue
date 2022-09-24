<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />


        <q-btn flat label="Iniciar Trámite" />
        <q-btn flat label="buscar" icon="las la-search" />
        <q-space />


        <q-btn flat icon="las la-edit" class="q-mr-xs">
          <q-badge color="red" floating>4</q-badge>
          <q-menu v-model="showing">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup @click="Firma">
                <q-item-section>
                  <div class="row">
                    <div class="col-4">
                      <q-icon name="las la-signature" />
                    </div>
                    <div class="col-4">
                      Firmas
                    </div>
                    <div class="col-4">
                      <q-badge color="red" align="middle">4</q-badge>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="PP">
                <q-item-section>
                  <div class="row">
                    <div class="col-4">
                      <q-icon name="las la-cash-register" />
                    </div>
                    <div class="col-4">
                      Pagos Pendientes
                    </div>
                    <div class="col-4">
                      <q-badge color="red" align="middle">5</q-badge>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup @click="PPR">
                <q-item-section>
                  <div class="row">
                    <div class="col-4">
                      <q-icon name="las la-cash-register" />
                    </div>
                    <div class="col-4">
                      Pagos Pendientes con Referencia
                    </div>
                    <div class="col-4">
                      <q-badge color="red" align="middle">5</q-badge>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="Borrador">
                <q-item-section>
                  <div class="row">
                    <div class="col-4">
                      <q-icon name="las la-cash-register" />
                    </div>
                    <div class="col-4">
                      Borradores
                    </div>
                    <div class="col-4">
                      <q-badge color="red" align="middle">5</q-badge>
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-separator dark vertical inset />
        <q-btn flat icon="las la-sign-out-alt" label="Salir" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-pink-8 text-white">
      <q-list>
        <q-item-label header>
          <q-img src="../assets/images/logobc.png" />
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

import { useRouter } from 'vue-router';

const route = useRouter()
async function PPR() {
  route.push({ name: 'ppagoref' })
}

async function Firma() {
  route.push({ name: 'pfirma' })
}

async function PP() {
  route.push({ name: 'ppago' })
}

async function Borrador() {
  route.push({ name: 'borradores' })
}



const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Iniciar Trámite',

    icon: 'las la-folder-plus',
    link: 'iniciatramite'
  },
  {
    title: 'Inicio',

    icon: 'las la-home',
    link: 'iniciopage'
  },
  {
    title: 'Borradores',

    icon: 'las la-file',
    link: 'borradores'
  },
  {
    title: 'Pendientes de Pago',

    icon: 'las la-money-bill-wave',
    link: 'ppago'
  },
  {
    title: 'Pendientes de Pago con Referencia',

    icon: 'las la-money-check-alt',
    link: 'ppagoref'
  },
  {
    title: 'Pendientes de Firmar',

    icon: 'las la-file-signature',
    link: 'pfirma'
  },
  {
    title: 'Finalizado',

    icon: 'las la-check-circle',
    link: 'finalizadopage'
  }
];

const leftDrawerOpen = ref(false)

const showing = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
