<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from '@nuxtjs/composition-api';
import { api } from '@/plugins/api';
import { userState } from '@/store/user';

const userStore = userState()
const router = useRouter()

const paths = ref([
                        {
                            name: 'Inicio',
                            icon: 'mdi-home',
                            path: '/home'
                        },
                        {
                            name: 'Citas',
                            icon: 'mdi-account-clock',
                            path: '/meeting'
                        },
                        {
                            name: 'Programación de turnos',
                            icon: 'mdi-account-group-outline',
                            path: '/calendary'
                        },
                        {
                            name: 'Doctores',
                            icon: 'mdi-doctor',
                            path: '/doctors'
                        },
                        {
                            name: 'Pacientes',
                            icon: 'mdi-account',
                            path: '/patients'
                        }
                    ])

function logoutButton(){
    userStore.removeToken();
    api.defaults.headers.common["x-token"] = "";
    localStorage.removeItem("token");
    router.push('/')
}
</script>

<template>
<v-navigation-drawer
    permanent
    expand-on-hover
    fixed
    color="primary"
    
>
    <v-list
        dense
        nav
        class="mt-16"
    >
        <v-list-item
            dark
            v-for="(path, key) in paths"
            :key="key"
            :to="path.path"
            color="white"
            link
            class="mt-4"
        >
            <v-list-item-icon
            >
                <v-icon>{{ path.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>
                    {{ path.name }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

    <template v-slot:append>
        <v-list
            dense
            nav
        >
                <v-list-item
                    dark
                    @click="logoutButton"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Cerrar sesión
                        </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
        </v-list>
    </template>
</v-navigation-drawer>
</template>