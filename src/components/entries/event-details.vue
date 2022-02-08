<template>
    <div class="event-details">
        <!-- EVENT DATE -->
        <p style="font-size: 12px; color: rgba(0,0,0,0.75); margin-bottom: 3px;">{{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}</p>
        <!-- EVENT TITLE -->
        <p class="event-title">{{event.title}}</p>
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

.event-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 80%;
    margin-left: 10px;
}

@media screen and (max-width: 600px) {
    .event-details {
        margin-left: 0;
        width: 100%;
    }
}
</style>