<template>
    <div class="ww-days">
        <ul>
            <li v-for="(day, key) in days" class="ww-day"><a href="#" @click="extractDaysForecast(key)">{{ day }}</a></li>
        </ul>
    </div>
</template>

<script>
import moment from 'moment'
import weatherStore from '../stores/weather.js'

export default {
    data() {
        return {
            days: [],
            weather: weatherStore,
        }
    },
    mounted() {
        this.getDays()
    },
    methods: {
        getDays() {
            this.days.push(this.dayName())
            for (let i = 0; i <= 3; i++) {
                this.days.push(this.dayName(i + 1))
            }
        },
        dayName(offset = 0) {
            return moment().add(offset, 'days').format('dddd')
        },
        extractDaysForecast(day) {
            this.weather.extractDaysForecast(day)
        }
    }
}
</script>