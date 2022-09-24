<template>
    <div class="row">
        <div class="col-12">
            <q-table title="Expediente Catastral" :rows="datos" :filter="filter" :columns="columns" row-key="name">
                <template v-slot:top>
                    <div class="col-3 q-table__title">Agregar Enajenante</div>
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
                        <q-btn size="xs" icon-right="edit" color="primary" title="Editar" class="q-mr-xs" />
                        <q-btn size="xs" icon-right="delete" color="primary" title="Eliminar" class="q-mr-xs" />
                        <q-btn size="xs" icon-right="preview" color="primary" title="Ver detalle" />
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
                <span class="text-h6">Agregar Enajenante</span>
            </q-card-section>
            <q-separator />
            <q-card-section>
                <div class="row">
                    <div class="col-6 q-pa-sm">
                        <span class="text-subtitle1">Seleccione el tipo de persona</span>
                        <div class="q-gutter-sm">
                            <q-radio v-model="userForm.tpersona" val="fisica" label="Física" selected />
                            <q-radio v-model="userForm.tpersona" val="moral" label="Moral" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtCurp" hint="CURP" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
                    </div>
                    <div class="col-6 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtRfc" hint="RFC" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
                    </div>

                </div>
                <div class="row">

                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtNombres" hint="Nombre(s)" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
                    </div>

                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtApaterno" hint="Apellido Paterno" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtAmaterno" hint="Apellido Materno" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>


                </div>
                <div class="row">
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.dtFecNac" mask="date" :rules="['date']"
                            hint="Fecha de nacimiento">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="userForm.dtFecNac">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-select dense outlined v-model="userForm.mDocIdenti" :options="oDocIdenti"
                            label="Documento de Identificación" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Selecciona un Valor']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtFolioDocIdenti"
                            hint="Folio de Documento de Identificación" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtPorEna" hint="Porcentaje que enajena" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                </div>
                <span class="text-subtitle1 q-pa-sm">Datos para determinar el impuesto</span>
                <div class="row">
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtA"
                            hint="a) MONTO DE LA CONTRAPRESTACIÓN, VALOR DEL AVALÚO O INDEMIZACIÓN:" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtB" hint="b) TOTAL DE DEDUCCIONES ACTUALIZADAS:"
                            lazy-rules :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtC" hint="c) GANANCIA GRAVABLE O PÉRDIDA (a - b):"
                            lazy-rules :rules="[ val => val && val.length > 0 || 'El campo no puede estar vacio']" />
                    </div>

                </div>
                <div class="row">

                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtD"
                            hint="d) NÚMERO DE AÑOS TRANSCURRIOS ENTRE LA FECHA DE ADQUISICIÓN Y LA DE ENAJENACIÓN:"
                            lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>

                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtE" hint="e) GANANCIA ACUMULABLE O PÉRDIDA (c / d):"
                            lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtF" hint="f) TARIFA DE LA LISR:" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>


                </div>
                <div class="row">
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtG"
                            hint="g) PAGO PROVISIONAL CONFORME AL ARTICULO 126 LISR (f * d):" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtH"
                            hint="h) MONTO OBTENIDO CONFORME AL ART 127 LISR (c * 5%):" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtI" hint="i) IMPUESTO A PAGAR (g o h):" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                </div>
                <div class="row">

                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtJ" hint="j) MONTO PAGADO:" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>

                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtK" hint="k) CANTIDAD A CARGO (i - j):" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-input dense outlined v-model="userForm.txtL" hint="l) PAGO EN EXCESO (j - i):" lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 q-pa-sm">
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
const oDocIdenti = [
    'INE', 'Pasaporte', 'Cartilla Militar'
]

const userForm = ref({
    tpersona: '',
    txtCurp: '',
    txtRfc: '',
    txtNombres: '',
    txtApaterno: '',
    txtAmaterno: '',
    dtFecNac: '',
    mDocIdenti: '',
    txtFolioDocIdenti: ''
})

const emit = defineEmits(['validacionPersonal'])
async function validaForma() {
    emit('validacionPersonal', 'ok')
}
async function backForma() {
    emit('validacionPersonal', 'back')
}

const columns = [
    {
        name: 'persona',
        required: true,
        label: 'Tipo de persona',
        align: 'left',
        sortable: true,
        field: 'persona'
    },
    { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre', sortable: true },
    { name: 'rfc', align: 'center', label: 'RFC', field: 'rfc', sortable: true },
    { name: 'curp', align: 'center', label: 'CURP', field: 'curp', sortable: true },
    { name: 'venta', align: 'center', label: '% Venta', field: 'venta', sortable: true },
    { name: 'opciones', label: 'Acciones' }
]

const datos = [

    {
        persona: 'Fisica',
        nombre: 'Miguel Hernández Pérez',
        rfc: 'HEPM870928PO1',
        curp: 'HEPM870928HPGOQ2',
        venta: '20'


    },
    {
        persona: 'Moral',
        nombre: 'Compañia Transitaria Méxicana, S.A. de C.V.',
        rfc: 'TME970625543',
        curp: 'N/A',
        venta: '20'
    },
    {
        persona: 'Fisica',
        nombre: 'Miguel Hernández Pérez',
        rfc: 'HEPM870928PO1',
        curp: 'HEPM870928HPGOQ2',
        venta: '20'
    },

]



</script>