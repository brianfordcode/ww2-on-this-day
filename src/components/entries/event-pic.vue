<template>
    <div class="event-pic-container">
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
    height: 120px;
    width: 150px;
    overflow: hidden;
    transition: .25s ease-in-out;
}

.entries-container:hover .event-pic-container {
    height: 100%;
    width: 350px;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>