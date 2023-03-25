<script setup>
import { ref } from 'vue';
import { useRouter } from '@nuxtjs/composition-api';
import { userState } from '@/store/user.js';
import { api } from '@/plugins/api'

const router = useRouter()
const userStore = userState()

const name = ref('41603747');
const password = ref('123456');

const form = ref(null);
const showPassword = ref(false);
const loginValid = ref(false);

const nameRules = ref([
                        v => !!v || 'Campo de nombre de usuario es requerido',
                        v => (v && v.length >= 5) || 'Su nombre de usuario no válido',
                    ])
const passwordRules = ref([
                            v => !!v || 'Su contraseña es requerida',
                            v => (v && v.length >= 5) || 'Contraseña no válida',
                        ])


async function validationForm(){
    let valid = await form.value.validate()
    if(valid){
        try{
            await api.post('auth/login/', {'name': name.value, 'password': password.value})
                        .then(resp=>{
                            let token = resp.data.token;
                            userStore.setToken(token)
                            localStorage.setItem('token', token)
                            api.defaults.headers.common['x-token'] = token
                            router.push('/home')
                        })
        }catch(e){
            console.log(e)
        }
    }
}
</script>


<template>
    <v-card
        class="pa-6 rounded-xl"
        elevation="15"
    >
        <h2
            class="text-center primary--text"
        >
            Iniciar sesión
        </h2>
        
        <v-form
            ref="form"
            v-model="loginValid"
        >
             <v-text-field
                v-model="name"
                class="mb-2"
                clearable
                label="Nombre de usuario"
                variant="underlined"
                :rules="nameRules"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                variant="underlined"
                label="Contraseña"
                placeholder="Ingresa tu contraseña"
                clearable
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
            ></v-text-field>

            <br>

            <v-btn
                block
                color="primary"
                variant="elevated"
                @click="validationForm"
            >
                Iniciar sesión
            </v-btn>
        </v-form>
    </v-card>
</template>