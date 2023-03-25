<script setup>
const props = defineProps(['classAttributes', 'color'])
</script>


<template>
    <v-app-bar
        app
        elevation="0"
        :color="props.color"
    >
        <v-toolbar-title
            :class="props.classAttributes"
        >
            <v-img
                height="125px"
                width="125px"
                contain
                src="/img/sanae-logo.png"
            >
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="primary"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-toolbar-title>
    </v-app-bar>
</template>