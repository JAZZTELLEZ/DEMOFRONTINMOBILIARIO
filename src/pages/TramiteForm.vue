<template>
  <div class="q-pa-md">

    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Datos del inmueble" icon="las la-building" :done="step > 1">
        <DatosInmuebleComponent @validacionInmueble="validaInmueble"></DatosInmuebleComponent>
      </q-step>

      <q-step :name="2" title="Expediente Catastral" icon="las la-folder" :done="step > 2">
        <ExpedienteCatasComponent @validacionExpediente="validaExpediente"></ExpedienteCatasComponent>
      </q-step>


      <q-step :name="3" title="Datos Catastrales" icon="add_comment" :done="step > 3">
        <DatosImpuestoComponent @validacionImpuesto="validaImpuesto"></DatosImpuestoComponent>
      </q-step>

      <q-step :name="4" title="Agregar Enajenante" icon="assignment" :done="step > 4">
        <DatosPersonalesComponent @validacionPersonal="validaPersonal"></DatosPersonalesComponent>
      </q-step>

      <q-step :name="5" title="Documentación" icon="add_comment" :done="step > 5">
        <DocumentacionComponent @validacionDocumentacion="validaDocumentacion"></DocumentacionComponent>
      </q-step>
      <q-step :name="6" title="Datos del valuador" icon="add_comment">
        <DatosValuadorComponent @validacionValuador="validaValuador"></DatosValuadorComponent>
      </q-step>
      <q-step :name="7" title="Solicitante" icon="add_comment">
        <DatosValuadorComponent @validacionValuador="validaValuador"></DatosValuadorComponent>
      </q-step>
      <q-step :name="8" title="Finalizar" icon="add_comment">
        <DatosValuadorComponent @validacionValuador="validaValuador"></DatosValuadorComponent>
      </q-step>
    </q-stepper>


  </div>
</template>

<script setup lang="ts">


import { ref } from 'vue';
import DatosInmuebleComponent from '../components/Tramite/DatosInmuebleComponent.vue';
import ExpedienteCatasComponent from 'src/components/Tramite/ExpedienteCatasComponent.vue';
import DatosPersonalesComponent from 'src/components/Tramite/DatosPersonalesComponent.vue';
import DatosImpuestoComponent from 'src/components/Tramite/DatosImpuestoComponent.vue';
import DocumentacionComponent from 'src/components/Tramite/DocumentacionComponent.vue';
import DatosValuadorComponent from 'src/components/Tramite/DatosValuadorComponent.vue';

const step = ref(1)

async function validaInmueble(data) {
  if (data == 'ok') {
    step.value = 2
  }

}

async function validaExpediente(data) {
  if (data == 'ok') {
    step.value = 3
  }
  if (data == 'back') {
    step.value = 1
  }

}
async function validaPersonal(data) {
  if (data == 'ok') {
    step.value = 5
  }
  if (data == 'back') {
    step.value = 3
  }

}
async function validaImpuesto(data) {
  if (data == 'ok') {
    step.value = 4
  }
  if (data == 'back') {
    step.value = 2
  }

}
async function validaDocumentacion(data) {
  if (data == 'ok') {
    step.value = 6
  }
  if (data == 'back') {
    step.value = 4
  }

}
async function validaValuador(data) {
  if (data == 'ok') {

  }
  if (data == 'back') {
    step.value = 5
  }

}
</script>
