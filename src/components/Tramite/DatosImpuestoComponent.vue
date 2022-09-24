<template>
    <div class="row">
        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.txtValCat" hint="Valor Catastral" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.txtValOperEsc" hint="Porcentaje que Enajena" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
    </div>
    <div class="row">

        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.txtIngExternos" hint="Valor de Operación de la Escritura"
                lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
        </div>
        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.txtPorVenta" hint="Ingresos Exentos" lazy-rules
                :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
        </div>
    </div>
    <div class="row">
        <div class="col-12 q-pa-sm">
            <q-btn @click="validaForma" label="continuar" color="primary" class="q-mr-sm" />
            <q-btn @click="backForma" label="atras" class="q-mr-sm" />
            <q-btn label="guardar borrador" />
        </div>
    </div>


</template>

<script setup lang="ts">
import { ref } from 'vue';

const userForm = ref({
    txtValCat: '',
    txtPorEna: '',
    txtValOperEsc: '',
    txtIngExternos: ''
})

const emit = defineEmits(['validacionImpuesto'])
async function validaForma() {
    emit('validacionImpuesto', 'ok')
}
async function backForma() {
    emit('validacionImpuesto', 'back')
}




</script>