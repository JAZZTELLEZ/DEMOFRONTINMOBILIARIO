<template>

    <div class="row">
        <span class="text-h6">CÁLCULO DEL ISR CONFORME AL 126 LISR O COMPROBANTE DE LA EXENCIÓN</span>
        <div class="col-12 item-center">
            <q-uploader url="http://localhost:9000/upload" />
        </div>
    </div>
    <div class="row">
        <div class="col-12  q-pa-sm">
            <q-btn @click="validaForma" label="continuar" color="primary" class="q-mr-sm" />
            <q-btn @click="backForma" label="atras" class="q-mr-sm" />
            <q-btn label="guardar borrador" />
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['validacionDocumentacion'])
async function validaForma() {
    emit('validacionDocumentacion', 'ok')
}
async function backForma() {
    emit('validacionDocumentacion', 'back')
}


</script>