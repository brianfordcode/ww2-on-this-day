<template>

<div class="all-media-container">
    <!-- BOOKS -->
    <div class="media-container">
        <div
            class="books media-wrapper"
            v-for="book in event.books"
            :key="book"
        >
            <a :href="book.mediaLink.link" target="_blank">
                <img
                    v-if="book.title"
                    class="media"
                    :src="book.picture"
                    :alt="book.title"
                >
            </a>
        </div>
    </div>
    <!-- MOVIES -->
    <div class="media-container">
        <div
            class="movies media-wrapper"
            v-for="movie in event.movies"
            :key="movie"
        >
            <a :href="movie.mediaLink.link" target="_blank">
                <img
                    v-if="movie.title"
                    class="media"
                    :src="movie.picture"
                    :alt="movie.title"
                >
            </a>
        </div>
    </div>
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

.media-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.media-container:last-child .media-wrapper:hover {
    transform-origin: bottom left;
}
.media-container:first-child .media-wrapper:hover {
    transform-origin: top left;
}
.media-wrapper {
    width: 70px;
    height: 100px;
    position: relative;
    overflow: hidden;
}
.media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media screen and (max-width: 1000px) {
    .media-wrapper {
        width: 60px;
        height: 90px;
    }
}
@media screen and (max-width: 600px) {
    .all-media-container {
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 393px) {
    .media-wrapper {
        width: 50px;
        height: 80px;
    }
}

</style>