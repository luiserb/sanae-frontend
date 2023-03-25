<script>
export default {
    layout: 'admin',
}
</script>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        icon: 'mdi-doctor',
        text: 'Doctores activos',
        data: '2',
    },
    {
        icon: 'mdi-account',
        text: 'Pacientes activos',
        data: '8',
    },
    {
        icon: 'mdi-calendar',
        text: 'Consultas para hoy',
        data: '3',
    },
    {
        icon: 'mdi-account',
        text: 'Pacientes sin confirmar',
        data: '8',
    },
    {
        icon: 'mdi-book-open-outline',
        text: 'Consultas para esta semana',
        data: '21',
    },
    {
        icon: 'mdi-cash',
        text: 'Ingreso mensual',
        data: 'S/ 10.000',
    }
])
</script>


<template>
<v-row>
    <v-col
        v-for="(item, key) in items"
        :key="key"
        lg="2"
        class="ma-4"
    >
        <v-card
            color="primary"
            class="dashboard__item elevation-12 rounded-lg d-flex flex-column justify-center pt-3 pb-1 text-center white--text"
        >
            <v-icon
                color="white"
            >
                {{ item.icon }}
            </v-icon>
            <div class="text-subtitle-2 mt-1">{{ item.text }}</div>
            <p class="text-subtitle-1">{{ item.data}}</p>
        </v-card>
    </v-col>
</v-row>
</template>


<style lang="scss">
.dashboard__item{
    i{
        font-size: 80px !important;
    }
}
</style>