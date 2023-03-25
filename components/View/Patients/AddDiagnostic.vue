<script setup>
import { ref } from 'vue';

const props = defineProps(['items'])

const showDialog = ref(false);
const types = ref(['Definitivo', 'Presuntivo', 'Repetitivo']);
const date = ref({});

function save(){
    props.items.push(date.value);
    date.value = {};
    showDialog.value = false;
}
</script>

<template>
<v-dialog
    v-model="showDialog"
    max-width="700px"
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

    <v-card
        class="pa-6"
    >
        <h2
            class="primary--text"
        >
            Agregar diagnóstico
        </h2>
        
        <v-row
            class="mt-4"
        >
            <v-col>
                <v-text-field
                    label="Código DX"
                    v-model="date.codeDX"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-select
                    :items="types"
                    label="Tipo"
                    v-model="date.type"
                ></v-select>
            </v-col>
        </v-row>
        
        <div>
            <v-textarea
                label="Descripción del diagnóstico"
                v-model="date.diagnostic"
                no-resize
                counter
            ></v-textarea>
        </div>

        <v-card-actions
            class="justify-center"
        >
            <v-btn
                class="mr-4"
                color="primary"
                @click="save"
            >
                Guardar
            </v-btn>
            <v-btn
                class="ml-5"
                color="error"
            >
                Cancelar
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>