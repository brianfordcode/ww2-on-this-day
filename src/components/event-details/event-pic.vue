<template>
    <div class="event-pic-container" v-if="event.mainPicture">
        <a :href="event.mainPicture" target="_blank">
        <img
            class="event-picture"
            :src="event.mainPicture"
            :alt="event.mainPicture"
            draggable="false"
        />
       </a>
    </div>
    


</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.event-pic-container {
    width: 90%;
    margin: 0 auto;
    position: relative;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

</style>