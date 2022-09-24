<template>
  <div class="q-pa-md">
    <span class="text-h4">Inicio</span>
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-table title="Borradores" :rows="datos" :columns="columns" :filter="filBorrar" row-key="name">
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filBorrar" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-opciones="props">

            <q-td :props="props">

              <q-btn icon-right="edit" color="primary" title="Modificar" class="q-mr-sm" />
              <q-btn icon-right="preview" color="primary" title="Ver detalle" />
            </q-td>
          </template>

        </q-table>
      </div>
      <div class="col-6 q-pa-md">
        <q-table title="Pendientes de pago" :rows="datos" :columns="columns" :filter="filPagar" row-key="name">
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filPagar" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-opciones="props">

            <q-td :props="props">

              <q-btn icon-right="edit" color="primary" title="Modificar" class="q-mr-sm" />
              <q-btn icon-right="preview" color="primary" title="Ver detalle" />
            </q-td>
          </template>

        </q-table>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">

import { ref } from 'vue';

const filBorrar = ref('')
const filPagar = ref('')

const columns = [
  {
    name: 'tramite',
    required: true,
    label: 'Tramite',
    align: 'left',
    sortable: true,
    field: 'tramite'
  },
  { name: 'fecha', align: 'center', label: 'Fecha', field: 'fecha', sortable: true },
  { name: 'total', label: 'Total', field: 'total', sortable: true },
  { name: 'opciones', label: 'Acciones' }
]

const datos = [

  {
    tramite: 'Normal',
    fecha: '21/09/2022',
    total: 55.5

  },
  {
    tramite: 'Normal',
    fecha: '19/09/2022',
    total: 6.0
  },
  {
    tramite: 'Normal',
    fecha: '01/09/2022',
    total: 6.0
  },

]
</script>
