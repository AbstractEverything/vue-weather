<template>
    <div class="ww-day">
        <h4>Monday</h4>
        <span class="ww-weather-icon"><i class="wi wi-night-sleet"></i></span>
        <span class="ww-weather-wind">wind</span>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        forecast: {
            required: true,
            type: Object,
        }
    }
}
</script>