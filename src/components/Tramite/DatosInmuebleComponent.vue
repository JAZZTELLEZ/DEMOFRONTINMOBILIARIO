<template>

    <div class="row">
        <span class="text-h6">Información sobre el tramite</span>
        <div class="col-12 q-pa-sm">
            <q-radio v-model="userForm.tramite" val="normal" label="Normal" />
            <q-radio v-model="userForm.tramite" val="complementaria" label="Complementaria" />
            <q-radio v-model="userForm.tramite" val="cero" label="Declarar en cero" />
            <q-radio v-model="userForm.tramite" val="fiscal" label="Corrección fiscal" />
        </div>
    </div>
    <div class="row">
        <div class="col-6 q-pa-md">
            <q-input dense ref="escrituraRef" outlined v-model="userForm.escritura" hint="Escritura" lazy-rules
                :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']" />
        </div>
        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.fecEscritura" mask="date"
                :rules="['date' || 'La fecha es obligatoria']" hint="Fecha de escritura o minuta">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="userForm.fecEscritura">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>
    </div>
    <div class="row">
        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.fecAdqui" mask="date"
                :rules="['date' || 'La fecha es obligatoria']" hint="Fecha de adquisición">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date dense v-model="userForm.fecAdqui">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>
        <div class="col-6 q-pa-md">
            <q-input dense outlined v-model="userForm.fecConst" mask="date" :rules="['date']"
                hint="Fecha de construcción">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="userForm.fecConst">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>
    </div>
    <div class="row">
        <div class="col-12 q-pa-sm">
            <q-btn label="continuar" @click="validaForma" color="primary" class="q-mr-sm" />
            <q-btn label="guardar borrador" />
        </div>
    </div>





</template>

<script setup lang="ts">

import { ref } from 'vue';

const userForm = ref({
    tramite: '',
    escritura: '',
    fecEscritura: '',
    fecAdqui: '',
    fecConst: ''

})


const emit = defineEmits(['validacionInmueble'])
async function validaForma() {
    emit('validacionInmueble', 'ok')
}





</script>