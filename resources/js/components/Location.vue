<template>
    <div class="ww-location">
        <input v-model="location" type="text" name="location" placeholder="Location...">&nbsp;<button @click="changeLocation" class="btn btn-default">Go</button>&nbsp;<button @click="changeLocation" class="btn btn-default"><i class="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
</template>

<script>
import weatherStore from '../stores/weather'

export default {
    data() {
        return {
            location: '',
            weather: weatherStore,
        }
    },
    methods: {
        changeLocation() {
            this.weather.getFiveDay(this.location).then(() => {
                this.weather.extractDaysForecast()
            })
        }
    }
}
</script>