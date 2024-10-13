<template>

    <iframe
        v-if="event.location && event.location.coordinates"
        style="border:0; margin: 0 auto; height: 210px; width: 90%; "
        loading="lazy"
        allowfullscreen
        :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyAzuMuGU3ynDz4KU87IzdKY_pXzhUyILoQ&q=
        ${event.location.coordinates}&zoom=${event.location.mapZoom ? event.location.mapZoom : 7}&maptype=satellite`"
    >
    </iframe>

</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>