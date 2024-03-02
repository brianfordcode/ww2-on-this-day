<template>
    <div class="event-pic-container" v-if="event.mainPicture">
        <img
            class="event-picture"
            :src="event.mainPicture"
            :alt="event.mainPicture"
        />
    </div>
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
.event-pic-container {
    height: 170px;
    width: 90%;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>