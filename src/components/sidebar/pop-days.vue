<template>
    <div class="box pop-days">
        <p class="title">Most Popular Days</p>
        <!-- <ul
            class="days-list"
            v-for="day in $store.state.popDays"
            :key="day"
        >
            <li>{{ day }}</li>
        </ul> -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pop-days {
    width: 100%;
    height: min-content;
    padding-bottom: 20px;
    position: relative;
}

.title{
    text-align: center;
    padding: 20px 0 10px 0;
    font-family: 'special elite';
}

.days-list {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
}

</style>