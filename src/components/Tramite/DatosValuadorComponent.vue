<template>


    <div class="row">
        <div class="col-4 q-pa-sm">
            <span class="text-h6">¿Cuenta con Avalúo?</span>
            <div class="q-gutter-sm">
                <q-radio v-model="userForm.Avaluo" val="si" label="Si" selected />
                <q-radio v-model="userForm.Avaluo" val="no" label="No" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtNombres" hint="Nombre(s)" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtApaterno" hint="Apellido Paterno" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>

    </div>
    <div class="row">

        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtAmaterno" hint="Apellido Materno" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>

        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtRfc" hint="RFC" lazy-rules
                :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
        </div>
    </div>
    <div class="row">
        <div class="col-4 q-pa-sm">
            <span class="text-h6">Avalúo de:</span>
            <div class="q-gutter-sm">
                <q-radio v-model="userForm.Tavaluo" val="terreno" label="Terreno" selected />
                <q-radio v-model="userForm.Tavaluo" val="terconst" label="Terreno y Construcción" />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtMejorasT" hint="Valor de mejoras actuales al 100% (terreno)"
                lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtMejorasC"
                hint="Valor de mejoras actuales al 100% (construcción)" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>

    </div>
    <div class="row">
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtMtsT" hint="Metros Cuadrados del terreno" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtMtsC" hint="Metros cuadrados de construcción" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>

    </div>
    <div class="row">
        <div class="col-6 q-pa-sm">
            <q-input dense outlined v-model="userForm.txtValorCosto"
                hint="Valor costo de la adquisición construcción 100%" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-6 q-pa-sm">
            <q-select dense outlined v-model="userForm.mTipoConst" :options="oTipoConst" label="Tipo de Construcción" />
        </div>
    </div>
    <div class="row">
        <div class="col-12  q-pa-sm">
            <q-btn @click="validaForma" label="terminar" color="primary" class="q-mr-sm" />
            <q-btn @click="backForma" label="atras" class="q-mr-sm" />
            <q-btn label="guardar borrador" />
        </div>
    </div>



</template>

<script setup lang="ts">
import { ref } from 'vue';


const userForm = ref({
    Avaluo: '',
    txtNombres: '',
    txtApaterno: '',
    txtAmaterno: '',
    txtRfc: '',
    Tavaluo: '',
    txtMejorasT: '',
    txtMejorasC: '',
    txtMtsT: '',
    txtMtsC: '',
    txtValorCosto: '',
    mTipoConst: ''
})

const oTipoConst = [
    'HABITACIONAL', 'COMERCIAL', 'INDUSTRIAL', 'OTROS'
]
const emit = defineEmits(['validacionValuador'])
async function validaForma() {
    emit('validacionValuador', 'ok')
}
async function backForma() {
    emit('validacionValuador', 'back')
}

</script>