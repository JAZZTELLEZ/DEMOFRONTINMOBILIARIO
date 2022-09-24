<template>

    <div class="q-pa-md">
        <span class="text-h6 q-pa-sm">Trámites Finalizados</span>
        <div class="row">
            <div class="col-12 q-pa-md">
                <q-table title="Pendientes de Pago" :rows="datos" :filter="filter" :columns="columns" row-key="name">
                    <template v-slot:top-right>
                        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </template>
                    <template v-slot:body-cell-opciones="props">

                        <q-td :props="props">

                            <q-btn icon-right="feed" color="primary" title="Formatos" class="q-mr-sm" />
                            <q-btn icon-right="preview" color="primary" title="Ver detalle"
                                @click="showDialog = true" />
                        </q-td>
                    </template>

                </q-table>

            </div>
        </div>
    </div>

    <q-dialog v-model="showDialog">
        <q-card style="max-width: 60%;width:1000px;">
            <q-card-section>
                <span>Detalle Declaración</span>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="row">

                </div>
                <q-field label="FECHA ESCRITURA:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">28/09/1987</div>
                    </template>
                </q-field>
                <q-field label="FECHA VENCIMIENTO:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">28/10/2022</div>
                    </template>
                </q-field>
                <q-field label="MONTO OBTENIDO CONFORME AL ARTICULO 127 LISR:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">2,000,000.00</div>
                    </template>
                </q-field>
                <q-field label="PAGO PROVISIONAL CONFOTME AL ARTICULO 126 LISR:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="IMPUESTO A CARGO:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="FACTOR DE ACTUALIZACIÓN:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="INPC MES MAS ANTIGUO:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">122.04</div>
                    </template>
                </q-field>
                <q-field label="INPC MES MAS RECIENTE:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">122.04</div>
                    </template>
                </q-field>
                <q-field label="ACTUALIZACIONES:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="IMPUESTO A CARGO ACTUALIZADO:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="PORCENTAJE DE RECARGOS:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">4.41</div>
                    </template>
                </q-field>
                <q-field label="RECARGOS:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="REDONDEO:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
                <q-field label="TOTAL A PAGAR:" stack-label dense>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0">0.00</div>
                    </template>
                </q-field>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false)
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
  