<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Patients',
    layout: 'admin',
})
</script>


<script setup>
import {ref, onMounted } from 'vue';
import { useRoute, useRouter } from '@nuxtjs/composition-api';
import { api } from '@/plugins/api';

const route = useRoute()
const router = useRouter()


const headers = ref([
                        {
                            text: 'Número de historia clínica',
                            align: 'start',
                            value: 'medicalHistoryNumber',
                        },
                        {
                            text: 'DNI',
                            value: 'DNI',
                        },
                        {
                            text: 'Nombre',
                            value: 'firstName',
                        },
                        {
                            text: 'Apellidos',
                            value: 'lastName',
                        },
                        {
                            text: 'Opciones',
                            value: 'options',
                            sortable: false
                        }
                    ])

const query = ref('');
const items = ref([]);
const loadData = ref(true);

const deleteMessage = ref(false);
const addUserMessage = ref(false);


function toItem(item){
    router.push(`doctors/${item.id}`);
}

async function deleteItem(item){
    await api.delete(`persons/${item.id}`)
            .then(resp=>{
                items.value = items.value.filter(e => e != item)
                deleteMessage.value = true;
            })
}

function saveData(dataArray, item){
    dataArray.push({
                        id: item._id,
                        medicalHistoryNumber: item.medical_history_number,
                        DNI: item.person.document_number,
                        firstName: item.person.names,
                        lastName: `${item.person.first_surname} ${item.person.second_surname}`,
                    })
}


onMounted(async () => {
    await api.get('doctors')
            .then(resp=> {
                if(resp.data){
                    console.log('paj')
                    let data = resp.data.doctors
                    if(data.length >= 1){
                        data.forEach(patient => {
                            saveData(items.value, patient)
                        })
                    }
                }
            })
    
    loadData.value = false;
})
</script>


<template>
<div>
    <h1
        class="primary--text my-5"
    >
        Doctores
    </h1>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="query"
        :loading="loadData"
        loading-text="Cargando lista de doctores..."
        :footer-props="{
                            'pageText': '{0}-{1} de {2}',
                            'items-per-page-text':'Paginación'
                        }"
    >
        <template
            v-slot:top
        >
            <v-toolbar
                flat
            >
                <v-row>
                    <v-col
                        lg="5"
                    >
                        <v-text-field
                            v-model="query"
                            append-icon="mdi-magnify"
                            label="Buscar"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-spacer />

                <AddUser 
                    :items="items"
                    :alert="addUserMessage"
                    type="doctor"
                />

            </v-toolbar>
        </template>

        <template
            v-slot:item.options="{ item }"
        >
            <v-tooltip 
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        small
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                        @click="toItem(item)"
                    >
                        mdi-eye
                    </v-icon>
                </template>
                <span>Ver doctor</span>
            </v-tooltip>

            <v-tooltip 
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        small
                        class="mr-2"
                        v-bind="attrs"
                        v-on="on"
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
                <span>Eliminar doctor</span>
            </v-tooltip>
        </template>

        <template v-slot:no-data>
            No hay datos sobre doctores
        </template>

    </v-data-table>

    
    <div
        v-if="route.fullPath != '/patients' "
    >
        <nuxt-child/>
    </div>


    <v-snackbar
        color="primary"
        v-model="addUserMessage"
        timeout="5000"
        class="text-center"
    >
        Paciente agregado con éxito
    </v-snackbar>
    <v-snackbar
        color="error"
        v-model="deleteMessage"
        timeout="5000"
        class="text-center"
    >
        Elemento eleminado con éxito
    </v-snackbar>
</div>
</template>