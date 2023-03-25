<script>
export default{
    name: 'Meeting',
    layout: 'admin',
}
</script>


<script setup>
import { ref, watch, onMounted } from 'vue';

const calendar = ref(null);
const calendarValue = ref(null);
const types = ref([
                    {
                        text: 'Mes',
                        value: 'month'
                    },
                    {
                        text: 'Semana',
                        value: 'week'
                    },
                    {
                        text: 'Día',
                        value: 'day'
                    }
                ])
const month = ref(null);
const type = ref('month');
const events = ref([]);

function weekdayFormat(day){
    if(day.weekday == 1){
        return 'Lunes'
    }else if(day.weekday == 2){
        return 'Martes'
    }else if(day.weekday == 3){
        return 'Miercoles'
    }else if(day.weekday == 4){
        return 'Jueves'
    }else if(day.weekday == 5){
        return 'Viernes'
    }else if(day.weekday == 6){
        return 'Sábado'
    }else if(day.weekday == 0){
        return 'Domingo'
    }
}

async function prev(){
    await calendar.value.prev();
    month.value = calendar.value.title;
}

async function next(){
    await calendar.value.next();
    month.value = calendar.value.title;

}

function getEventColor(event){
    return envent.color
}

function rnd(a, b){
    return Math.floor((b - a + 1) * Math.random()) + a
}

function getEvents ({ start, end }) {
    const colors = ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1']
    const names = ['Rodrigo', 'Marcelo', 'José', 'Miguel', 'Camila', 'Alejandra', 'Ernesto', 'Maria']
    let eventsData = []
    const min = new Date(`${start.date}T00:00:00`)
    const max = new Date(`${end.date}T23:59:59`)
    const days = (max.getTime() - min.getTime()) / 86400000
    const eventCount = rnd(days, days + 20)
    for (let i = 0; i < eventCount; i++) {
        const allDay = rnd(0, 3) === 0
        const firstTimestamp = rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)
        eventsData.push({
            name: names[rnd(0, names.length - 1)],
                start: first,
                end: second,
                color: colors[rnd(0, colors.length - 1)],
                timed: !allDay,
            })
    }
    events.value = eventsData
}

onMounted(() => {
    if(calendar){
        month.value = calendar.value.title;
    }
})
</script>


<template>
<div>
    <h1
        class="primary--text my-5"
    >
        Citas 
    </h1>

    <div class="mt-2">
        <v-sheet
            class="d-flex justify-space-between my-4"
        >  
            <div class="d-flex align-center">
                <v-btn
                    v-if="calendar"
                    icon
                    @click="prev"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                    v-if="calendar"
                    icon
                    @click="next"
                >
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            
                <v-select
                    v-model="type"
                    :items="types"
                    dense
                    outlined
                    hide-details
                    class="ma-2"
                    label="Vista del calendario"
                ></v-select>

                <h3
                   v-if="calendar" 
                   class="primary--text ml-6 text-h6"
                >
                    {{ month }}
                </h3>

            </div>
                
            <AddSchedule />

            </v-row>
        </v-sheet>
        <v-sheet
            height="600"
        >
            <v-calendar
                ref="calendar"
                v-model="calendarValue"
                :type="type"
                :weekdays="[1,2,3,4,5,6,0]"
                :weekday-format="weekdayFormat"
                @change="getEvents"
                :events="events"
            ></v-calendar>
        </v-sheet>
    </div>
</div>
</template>