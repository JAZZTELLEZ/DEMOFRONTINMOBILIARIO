<template>

    <div class="q-pa-md">
        <div class="row">
            <div class="col-8 q-pa-sm">
                <q-table title="Pendientes de Firmar" :rows="datos" :filter="filter" :columns="columns" row-key="name">
                    <template v-slot:top-right>
                        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </template>
                    <template v-slot:body-cell-opciones="props">

                        <q-td :props="props">

                            <q-btn icon-right="draw" color="primary" title="Quitar Firma" class="q-mr-sm" />
                            <q-btn icon-right="preview" color="primary" title="Ver detalle" />
                        </q-td>
                    </template>

                </q-table>

            </div>
            <div class="col-4 q-pa-sm">
                <q-card>
                    <q-card-section>
                        <span class="text-h6">Firmar Documentos</span>
                    </q-card-section>
                    <q-separator></q-separator>
                    <q-card-section>
                        <q-form>
                            <div class="row">
                                <div class="col-12 q-pa-sm">
                                    <q-file filled bottom-slots v-model="model" label="Archivo CER" counter>
                                        <template v-slot:prepend>
                                            <q-icon name="cloud_upload" @click.stop.prevent />
                                        </template>
                                        <template v-slot:append>
                                            <q-icon name="close" @click.stop.prevent="model = null"
                                                class="cursor-pointer" />
                                        </template>

                                        <template v-slot:hint>
                                            Archivo CER
                                        </template>
                                    </q-file>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 q-pa-sm">
                                    <q-file filled bottom-slots v-model="model" label="Archivo KEY" counter>
                                        <template v-slot:prepend>
                                            <q-icon name="cloud_upload" @click.stop.prevent />
                                        </template>
                                        <template v-slot:append>
                                            <q-icon name="close" @click.stop.prevent="model = null"
                                                class="cursor-pointer" />
                                        </template>

                                        <template v-slot:hint>
                                            Archivo KEY
                                        </template>
                                    </q-file>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 q-pa-sm">
                                    <q-input filled v-model="txtFolioDocIdenti" hint="Contraseña" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'La contraseña no puede quedar en blanco']" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 q-pa-sm">
                                    <q-btn label="Firmar" color="primary" />
                                </div>
                            </div>

                        </q-form>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>




</template>
  
<script setup lang="ts">


import { ref } from 'vue';
const filter = ref('')
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
  