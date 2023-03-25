<script>
export default {
    name: 'Doctor',
    layout: 'admin',
}
</script>


<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from '@nuxtjs/composition-api';
import { api } from '@/plugins/api';

const router = useRouter()
const route = useRoute()

const show = ref(true);
const loadData = ref(true);
const item = ref(null);


watch(show, (newValue) => {
    if(!newValue){
        router.push('/doctors')
    }
})


onMounted(async () => {
    await api.get(`doctor/${route.value.params.patient}`)
            .then(resp=>{
                item.value = resp.data;
                loadData.value = false;
            })
    loadData.value = false;
})
</script>


<template>
    <v-dialog
        v-model="show"
        max-width="720px"
        class="elevation-14"
    >
        <v-overlay 
            :value="loadData"
        >
            <v-progress-circular
                indeterminate
                color="primary"
                size="64"
            ></v-progress-circular>
        </v-overlay>
        <v-card
            v-if="!loadData"
        >
            <ViewUser
                v-if="item"
                :item="item"
            />
        </v-card>
    </v-dialog>
</template>