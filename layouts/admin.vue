
<template>
<v-app>
    <Header 
        classAttributes="ml-14"
        color="primary"
        elevation="7"
    />
    <AdminNavigation />
    <v-main>
        <v-container>
            <div class="pa-4">
                <Nuxt />
            </div>
        </v-container>
    </v-main>
</v-app>
</template>