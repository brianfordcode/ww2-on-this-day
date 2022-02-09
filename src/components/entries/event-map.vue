<template>
    <iframe
        class="map"
        v-if="event.coordinates"
        style="border:0;"
        loading="lazy"
        allowfullscreen
        :src="`https://www.google.com/maps/embed/v1/view?key=AIzaSyAzuMuGU3ynDz4KU87IzdKY_pXzhUyILoQ&center=${event.coordinates}&zoom=7&maptype=satellite`"
    />
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>

.map {
    width:280px;
    height:230px
}
@media screen and (max-width: 600px) {
    .map {
        width: 100%;
        height:200px;
    }
}

</style>