<template>
    <div class="event-pic-container" v-if="event.mainPicture">
        <!-- <a :href="event.mainPicture" target="_blank" style="position: absolute; bottom: 0px">Xasdfasdf</a> -->
        <img
            class="event-picture"
            :src="event.mainPicture"
            :alt="event.mainPicture"
            draggable="false"
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
    }
}
</script>

<style scoped>
.event-pic-container {
    /* height: 180px; */
    width: 90%;
    position: relative;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

</style>