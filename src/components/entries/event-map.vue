<template>
    <iframe
        class="map"
        v-if="event.location"
        style="border:0;"
        loading="lazy"
        allowfullscreen
        :src="`https://www.google.com/maps/embed/v1/view?key=AIzaSyAzuMuGU3ynDz4KU87IzdKY_pXzhUyILoQ&center=
        ${event.location.coordinates}&zoom=${event.location.mapZoom ? event.location.mapZoom : 7}
        &maptype=satellite`"
    />
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

.map {
    width:50%;
    height:200px
}
@media screen and (max-width: 600px) {
    .map {
        width: 100%;
        height:200px;
    }
}

</style>