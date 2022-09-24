<template>
    <div class="row">
        <div class="col-12">
            <q-table title="Expediente Catastral" :rows="datos" :filter="filter" :columns="columns" row-key="name">
                <template v-slot:top>
                    <div class="col-3 q-table__title">Expediente Catastral</div>
                    <q-btn label="Agregar" color="primary" @click="showDialog = true" icon-right="create_new_folder" />
                </template>
                <template v-slot:top-right>
                    <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                </template>
                <template v-slot:body-cell-opciones="props">

                    <q-td :props="props">
                        <q-btn icon-right="delete" color="primary" title="Eliminar" class="q-mr-sm" />
                        <q-btn icon-right="preview" color="primary" title="Ver detalle" />
                    </q-td>
                </template>

            </q-table>
        </div>
    </div>
    <div class="row">
        <div class="col-12 q-pa-sm">
            <q-btn @click="validaForma" label="continuar" color="primary" class="q-mr-sm" />
            <q-btn @click="backForma" label="atras" class="q-mr-sm" />
            <q-btn label="guardar borrador" />
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
                    <div class="col-4 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtFolio" hint="Folio del aviso de enajenación"
                            lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtNoCtaCatastral" hint="No. Cta. Catastral"
                            lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtCP" hint="Codigo Postal" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>

                </div>
                <div class="row">
                    <div class="col-4 q-pa-md">
                        <q-select dense outlined v-model="userForm.mEstado" :options="oEstado" label="Estado" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-md">
                        <q-select dense outlined v-model="userForm.mMunicipio" :options="oMunicipio"
                            label="Municipio" />
                    </div>
                    <div class="col-4 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtColonia" hint="Colonia" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-4 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtLocalidad" hint="Localidad" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtCalle" hint="Calle" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-2 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtExt" hint="No. Ext" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-2 q-pa-md">
                        <q-input dense outlined v-model="userForm.txtInt" hint="No. Int" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 item-right">
                        <q-btn label="Guardar" color="primary" class="q-mr-sm" />
                        <q-btn label="Cancelar" />
                    </div>
                </div>

            </q-card-section>
        </q-card>
    </q-dialog>



</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false)

const userForm = ref({
    txtFolio: '',
    txtNoCtaCatastral: '',
    txtCP: '',
    mEstado: '',
    mMunicipio: '',
    txtColonia: '',
    txtLocalidad: '',
    txtCalle: '',
    txtExt: '',
    txtInt: '',
})
const oEstado = [
    'Estado1', 'Estado2', 'Estado3', 'Estado4'
]

const oMunicipio = [
    'Municipio1', 'Municipio2', 'Municipio3', 'Municipio4'
]

const emit = defineEmits(['validacionExpediente'])
async function validaForma() {
    emit('validacionExpediente', 'ok')
}
async function backForma() {
    emit('validacionExpediente', 'back')
}

const columns = [
    {
        name: 'expediente',
        required: true,
        label: 'Expediente Catastral',
        align: 'left',
        sortable: true,
        field: 'tramite'
    },
    { name: 'direccion', align: 'center', label: 'Dirección', field: 'direccion', sortable: true },

    { name: 'opciones', label: 'Acciones' }
]

const datos = [

    {
        tramite: '5Q5S8D4S5A5',
        direccion: 'Municipio: MEXICALI, Estado: BAJA CALIFORNIA, C.P.:21000',


    },
    {
        tramite: '5Q5S8D4S5A5',
        direccion: 'Municipio: MEXICALI, Estado: BAJA CALIFORNIA, C.P.:21000',
    },
    {
        tramite: '5Q5S8D4S5A5',
        direccion: 'Municipio: MEXICALI, Estado: BAJA CALIFORNIA, C.P.:21000',
    },

]



</script>