<template>

<div class="all-media-container">
    <!-- BOOKS -->
    <div class="media-container" v-if="event.books">
        <img
            v-if="event.books[0]"
            src="https://img.icons8.com/external-flat-icons-inmotus-design/50/000000/external-books-reading-flat-icons-inmotus-design.png"
            draggable="false"
        />
        <div
            class="books media-wrapper"
            v-for="book in event.books"
            :key="book"
        >
            <a :href="book.link" target="_blank">
                <img
                    class="media"
                    :src="book.picture"
                    :alt="book.title"
                >
            </a>
        </div>
    </div>
    <!-- MOVIES -->
    <div class="media-container" v-if="event.movies">
        <img
            v-if="event.movies[0]"
            src="https://img.icons8.com/ios-filled/50/000000/clapperboard.png"
            draggable="false"
        />
        <div
            class="movies media-wrapper"
            v-for="movies in event.movies"
            :key="movies"
        >
            <a :href="movies.link" target="_blank">
                <img
                    class="media"
                    :src="movies.picture"
                    :alt="movies.title"
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
    transition: .25s ease-in-out;
    margin: 5px 5px 0 5px;
    overflow: hidden;
}
.media-wrapper:hover {
    transform: scale(2);
    z-index: 2;
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
    .media-wrapper:hover {
        transform: scale(2);
        z-index: 2;
    }
}

@media screen and (max-width: 393px) {
    .media-wrapper {
        width: 50px;
        height: 80px;
    }
    .media-wrapper:hover {
        transform: scale(1);
    }
}

</style>