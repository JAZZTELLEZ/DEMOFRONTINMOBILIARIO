<template>

    <div class="q-pa-md">

        <div class="row">
            <div class="col-12 q-pa-md">

                <q-table title="Iniciar Tramite" :rows="datos" :filter="filter" :columns="columns" row-key="name">
                    <template v-slot:top-right>
                        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </template>
                    <template v-slot:body-cell-opciones="props">

                        <q-td :props="props">


                            <q-btn icon-right="preview" label="Iniciar Trámite" color="primary" title="Ver detalle"
                                @click="tramiteform" />
                        </q-td>
                    </template>

                </q-table>

            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';

const route = useRouter()
async function tramiteform() {
    route.push({ name: 'tramiteform' })
}

const columns = [
    {
        name: 'tramite',
        required: true,
        label: 'Tramite',
        align: 'left',
        sortable: true,
        field: 'tramite'
    },
    { name: 'opciones', label: 'Acciones' }
]

const datos = [

    {
        tramite: 'ISR 5% POR ENAJENACIÓN DE INMUEBLES'


    }

]



</script>
  