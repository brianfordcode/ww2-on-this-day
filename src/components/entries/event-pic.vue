<template>
    <div class="event-pic-container">
        <img
            class="event-picture"
            :src="event.mainPicture"
            :alt="event.mainPicture"
            v-if="event.mainPicture"
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
@media screen and (max-width: 650px) {
    .event-pic-container {
        padding-bottom: 10px;
        width: 100%;
        height: 175px;
        transition: .25s ease-in-out;
    }
    .entries-container:hover .event-pic-container{
        width: 100%;
        height: 175px;
    }
    .entries-container:hover .event-pic-container:hover {
        height: 300px;
    }
}

</style>