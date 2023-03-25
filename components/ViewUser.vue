<script setup>
import { ref } from 'vue';

const props = defineProps(['item'])

const edit = ref(false);
</script>


<template>
<v-container>
    <div class="d-flex justify-end">
        <v-btn
            class="mx-2"
            fab
            small
            dark
            color="red darken-4"
        >
            <v-icon dark>
                mdi-delete
            </v-icon>
        </v-btn>

        <v-btn
            class="mx-2"
            fab
            small
            dark
            color="primary"
        >
            <v-icon dark>
                mdi-pencil
            </v-icon>
        </v-btn>
    </div>

    <v-row
        class="my-4"
    >
        <v-col
            lg="2"
        >
            <v-avatar
                v-if="props.item.patient.file"
            >
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                >
            </v-avatar>
            <v-avatar 
                color="primary"
                v-else
            >
                <span 
                    class="white--text text-h5"
                >{{ props.item.patient.person.names.slice(0, 1) + props.item.patient.person.first_surname.slice(0, 1) }}</span>
            </v-avatar>
        </v-col>
        <v-col>
            <h1
                class="text-h6 primary--text font-weight-bold"
            >
                {{ props.item.patient.person.names}} {{ props.item.patient.person.first_surname }} {{ props.item.patient.person.second_surname }}
            </h1>
        </v-col>
    </v-row>
    
    <v-card-text>
        <v-row>
            <v-col
                lg="4"
            >
                <v-text-field
                    v-model="props.item.patient.person.document_type"
                    label="Tipo de documento"
                    readonly
                >
                </v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="props.item.patient.person.document_number"
                    label="Número de documento"
                    readonly
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="props.item.patient.relative_name"
                    label="Pariente"
                    readonly
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="props.item.patient.relative_phone"
                    label="Número de telefóno (pariente)"
                    readonly
                ></v-text-field>
            </v-col>
        </v-row>
    </v-card-text>
</v-container>
</template>