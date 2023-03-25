<script>
export default{
    data: () => ({
        name: '',
        password: '',
        confirmPassword: '',

        registerValid: false,
        nameRules: [
            v => !!v || 'Campo de nombre de usuario es requerido',
            v => (v && v.length >= 5) || 'Su nombre de usuario no válido',
        ],
        passwordRules: [
            v => !!v || 'Su contraseña es requerida',
            v => (v && v.length >= 5) || 'Contraseña no válida',
        ],
    })
}
</script>


<template>
    <v-card
        class="pa-6 rounded-xl"
        elevation
    >
        <h2
            class="text-center primary--text"
        >
            Registrate
        </h2>

        <v-form
            ref="form"
            v-model="registerValid"
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

            <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                variant="underlined"
                label="Confirma tu contraseña"
                placeholder="Confirma tu contraseña"
                clearable
                @click:append="showPassword = !showPassword"
                :rules="passwordRules"
            ></v-text-field>

            <br>

            <v-btn
                block
                color="primary"
                variant="elevated"
            >
                Registrar
            </v-btn>
        </v-form>
    </v-card>
</template>