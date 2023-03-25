<script setup> 
import { ref } from 'vue';

const showDialog = ref(false);
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
    <v-card>
        
    </v-card>
</v-dialog>
</template>