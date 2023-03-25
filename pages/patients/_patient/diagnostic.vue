<script>
export default {
    name: 'Diagnostic',
    layout: 'admin',
}
</script>


<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from '@nuxtjs/composition-api';
import { api } from '@/plugins/api';

const router = useRouter()
const route = useRoute()

const show = ref(true);
const loadData = ref(false);
const items = ref([]);

const addNewDiagnostic = ref(false);

const headers = ref([
                        {
                            text: 'Código DX',
                            align: 'start',
                            value: 'codeDX',
                        },
                        {
                            text: 'Diagnóstico',
                            value: 'diagnostic',
                        },
                        {
                            text: 'Tipo',
                            value: 'type',
                        },
                        {
                            text: 'Opciones',
                            value: 'options',
                            sortable: false
                        }
                    ])


function deleteItem(item){
    items.value = items.value.filter(e => e != item)
}

watch(show, (newValue) => {
    if(!newValue){
        router.push('/patients')
    }
})
</script>


<template>
    <v-dialog
        v-model="show"
        max-width="970px"
        class="elevation-14"
    >
        <v-overlay 
            :value="loadData"
        >
            <v-progress-circular
                indeterminate
                color="primary"
                size="64"
            ></v-progress-circular>
        </v-overlay>
        <v-card
            v-if="!loadData"
            class="pa-6"
        >
            <h2
                class="primary--text"
            >
                Diagnósticos
            </h2>

            <v-data-table
                :headers="headers"
                :items="items"
                :loading="loadData"
                loading-text="Cargando pacientes..."
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
                        <v-spacer />

                        <ViewPatientsAddDiagnostic 
                            :items="items"
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
                            >
                                mdi-eye
                            </v-icon>
                        </template>
                        <span>Ver diagnóstico</span>
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
                        <span>Eliminar diagnóstico</span>
                    </v-tooltip>
                </template>

                <template v-slot:no-data>
                    No se encontraron diagnósticos sobre este paciente
                </template>

            </v-data-table>
        </v-card>
    </v-dialog>
</template>