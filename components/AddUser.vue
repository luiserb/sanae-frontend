<script setup>
import { ref, computed } from 'vue';

import { api } from '@/plugins/api';

import jsonDepartaments from '@/assets/json/regions.json';
import jsonProvinces from '@/assets/json/provinces.json';
import jsonDistricts from '@/assets/json/districts.json';

const props = defineProps(['items', 'type', 'alert'])

const showDialogAddUser = ref(false);
const form = ref(null);
const formValid = ref(false);

const data = ref({});
const genders = ref(['Masculino', 'Femenino']);
const typeDocument = ref(['DNI', 'Carnet de extranjeria', 'Pasaporte']);

const allDepartaments = computed(() => {
    let dataDepartaments = []
    jsonDepartaments.map((item) => {
        dataDepartaments.push({
                                    text: item.name,
                                    value: item.id
                                })
    })
    return dataDepartaments
})

const allProvinces = computed(() => {
    if(data.value.department){
        let dataProvinces = []
        jsonProvinces.map((item) => {
            if(item.department_id == data.value.department){
                dataProvinces.push({
                                        text: item.name,
                                        value: item.id
                                    })
            }
        })
        return dataProvinces
    }else{
        return []
    }
})

const allDistrict = computed(() => {
    if(data.value.department && data.value.province){
        let dataDistrict = []
        jsonDistricts.map((item) => {
            if(item.department_id == data.value.department && item.province_id == data.value.province){
                dataDistrict.push({
                                        text: item.name,
                                        value: item.id
                                    })
            }
        })
        return dataDistrict
    }else{
        return []
    }
})


const firstNameRules = ref([
                                v => !!v || 'Campo de nombre es requerido',
                                v => (v && v.length >= 3) || 'Tu nombre completo es requerido',
                            ])
const lastNameRules = ref([
                            v => !!v || 'Campo de apellidos es requerido',
                            v => (v && v.length >= 5) || 'Tu apellido completo es requerido',
                        ])
const noBlank = ref([
                        v => !!v || 'Este campo es requerido'
                    ])
const emailRules = ref([
                            v => !!v || 'Campo de correo electrónico es requerido',
                            v => /.+@.+\..+/.test(v) || 'Correo eléctronico inválido',
                        ])
const phoneRules = ref([
                            v => !!v || 'El número teléfonico es requerido',
                            v => Number.isInteger(Number(v)) || "Número de teléfono no valido"
                        ])

const relativeItems = ref(['Madre', 'Padre', 'Hijo(a)', 'Pareja'])

function close(){
    data.value = {};
    showDialogAddUser.value = false;
}

async function validationForm(){
    let valid = await form.value.validate();
    if(valid){
        if(props.type == 'patient'){
            data.value.type_of_person = 'PATIENT'        
        }
        await api.post('persons', data.value)
            .then(resp=>{
                props.items.push({
                    id: resp.data.personDB._id,
                    medicalHistoryNumber: resp.data.patient.medical_history_number,
                    DNI: resp.data.personDB.document_number,
                    firstName: resp.data.personDB.names,
                    lastName: `${resp.data.personDB.first_surname} ${resp.data.personDB.second_surname}`
                })
                data.value = {};
                showDialogAddUser.value = false;
                alert.value = true;
            })
    }
} 
</script>


<template>
<v-dialog
    v-model="showDialogAddUser"
    max-width="720px"
    class="elevation-14"
>
    <template
        v-slot:activator="{on, attrs}"
    >
        <v-btn
            fab
            dark
            v-on="on"
            v-bind="attrs"
            color="primary"
        >
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>
    </template>
    <v-card>
        <h3
            class="text-center primary--text pt-4"
        >
            Agregar
        </h3>

        <v-form
            ref="form"
            v-model="formValid"
        >
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="data.names"
                            :rules="firstNameRules"
                            label="Nombre"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.first_surname"
                            :rules="lastNameRules"
                            label="Primer Apellido"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.second_surname"
                            :rules="lastNameRules"
                            label="Segundo Apellido"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                        lg="4"
                    >
                        <v-select
                            v-model="data.document_type"
                            :items="typeDocument"
                            label="Tipo de documento"
                            :rules="noBlank"
                        >
                        </v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.document_number"
                            :rules="noBlank"
                            label="Número de documento"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-select
                            v-model="data.gender"
                            :items="genders"
                            label="Género"
                            :rules="noBlank"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.email"
                            :rules="emailRules"
                            label="Correo electrónico"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.phone"
                            :rules="phoneRules"
                            label="Número telefónico"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-select
                            v-model="data.department"
                            :items="allDepartaments"
                            label="Departamento"
                            :rules="noBlank"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="data.province"
                            :items="allProvinces"
                            label="Provincia"
                            :rules="noBlank"
                            no-data-text="Seleccione un departamento para encontrar opciones"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="data.district"
                            :items="allDistrict"
                            label="Distrito"
                            :rules="noBlank"
                            no-data-text="Seleccione una provincia para encontrar opciones"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea
                            v-model="data.address"
                            :rules="noBlank"
                            no-resize
                            label="Dirección"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
                
                <v-row
                    v-if="props.type == 'patient'"
                >
                    <v-col
                        lg="3"
                    >
                        <v-select
                            v-model="data.relative"
                            :items="relativeItems"
                            label="Tipo de pariente"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.relative_name"
                            label="Pariente"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.relative_phone"
                            label="Número de telefóno (pariente)"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row
                    v-else-if="props.type == 'doctor' "
                >
                    <v-col>
                        <v-text-field
                            v-model="data.specialty"
                            label="Especialidad"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="data.relative_phone"
                            label="Número de colegio"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions
                class="justify-center"
            >
                <v-btn
                    @click="validationForm"
                    class="mr-4"
                    color="primary"
                >
                    Guardar
                </v-btn>
                <v-btn
                    @click="close"
                    class="ml-5"
                    color="error"
                >
                    Cancelar
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</v-dialog>
</template>