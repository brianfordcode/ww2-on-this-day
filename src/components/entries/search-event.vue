<template>
    <a
        class="search-link-btn"
        :href="`https://www.google.com/search?q=${ event.keywords ? event.keywords.join(' ') : event.text }`"
        rel="search"
        target="_blank"
    >
        <img
            style="height: 20px; width: 20px;"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="google-logo"
        >
        <p>Search This Event</p>
    </a>
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
.search-link-btn {
    border: 1px solid rgba(0,0,0,0.75);
    padding: 2px 5px 2px 2px;
    height: min-content;
    width: max-content;
    margin: 10px 0;
    text-decoration: none;
    color: black;
    display: none;
    align-items: center;
    transition: .25s ease-in-out;
}

.entries-container:hover .search-link-btn {
    display: flex;
}

.search-link-btn:hover {
    color: white;
    background-color: rgba(0,0,0,0.75);
}

</style>