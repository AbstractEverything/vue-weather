<template>
    <tr>
        <td><i :class="getWeatherIcon()"></i></td>
        <td>{{ forecast.main.temp_max }}</td>
        <td>{{ forecast.main.temp_min }}</td>
        <td>{{ forecast.main.pressure }}</td>
        <td>{{ forecast.main.humidity }}</td>
    </tr>
</template>

<script>
import iconTranslator from '../services/iconTranslator'

export default {
    props: {
        forecast: {
            required: true,
            type: Object,
        }
    },
    mounted() {
        this.getWeatherIcon()
    },
    methods: {
        getWeatherIcon() {
            return iconTranslator(this.forecast.weather[0].id)
        }
    }
}
</script>