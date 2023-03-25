<script>
export default{
    layout: 'default',
    components: {
        [process.client && 'VideoBackground']: () => import('vue-responsive-video-background-player')
    },
    data: () => ({
        index: 0
    })
}
</script>

<template>
<ClientOnly>
    <video-background
        src="video/background.mp4"
        overlay="linear-gradient(0deg, rgba(0, 0, 0, .9), rgba(0, 0, 0, .4))" 
        style="height: 100vh;"
    >
        <Header 
            elevation="0"
            color="transparent"
        />
        <v-main 
            class="mt-12"
        >
            <v-container
                class="mt-4"
            >
                <v-row
                    justify="center"
                    align="center"
                >
                    <v-col
                        lg="4"
                    >
                        <Login 
                            v-if="index == 0"
                        />
                        <Register 
                            v-else                        
                        />


                    </v-col>
                </v-row>
                
                <br>

                <div
                    class="text-center white--text"
                >
                    <span v-if="index == 0">¿No tienes una cuenta? <strong @click="index = 1">Registrate ahora</strong></span>
                    <span v-else>¿Ya tienes una cuenta? <strong @click="index = 0">Inicia sesión ahora</strong></span>
                </div>
                
            </v-container>
        </v-main>
    </video-background>
</ClientOnly>
</template>