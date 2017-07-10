<template>
    <div class="ww-container">
        <location></location>
        <days></days>
        <div class="ww-forecast">
            <table class="tabular">
                <tr>
                    <th>Conditions</th>
                    <th>Max</th>
                    <th>Min</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                <forecast
                    v-if="weather.state.forecast.selectedDay.length > 0"
                    v-for="forecast in weather.state.forecast.selectedDay"
                    :forecast="forecast"
                    :key="forecast.dt">
                </forecast>
            </table>
        </div>
    </div>
</template>

<script>
import Location from './Location.vue'
import Days from './Days.vue'
import Forecast from './Forecast.vue'
import weatherStore from '../stores/weather'

export default {
    props: {
        location: {
            required: true,
            type: String,
            default: 'London, UK',
        }
    },
    components: {
        Location,
        Days,
        Forecast,
    },
    data() {
        return {
            weather: weatherStore,
        }
    },
    mounted() {
        this.weather.getFiveDay(this.location).then(() => {
            this.weather.extractDaysForecast()
        })
    }
}
</script>