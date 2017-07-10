<template>
    <div class="container">
        <weather location="London, UK"></weather>
    </div>
</template>

<script>
import Weather from './Weather.vue'

export default {
    components: {
        Weather,
    }
}
</script>