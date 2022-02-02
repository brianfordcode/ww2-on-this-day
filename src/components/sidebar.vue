<template>

<div
    class="sidebar-container"
    v-if="showTimeline"
>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>


</template>

<script>
export default {
    data() {
        return {
            showTimeline: true,
        }
    },
    created() {
        // GET BROWSER WIDTH
        window.addEventListener('resize', () => {
            if (window.innerWidth < 800) {
                this.showTimeline = false
            } else {
                this.showTimeline = true
            }
        });
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            console.log(window.innerWidth)
            if (window.innerWidth > 800) {
                this.showTimeline = false
            }
        }
    }
}
</script>

<style scoped>

.sidebar-container {
    display: flex;
    flex-direction: column;
}

.box {
    box-shadow: 0px 0px 33px -20px #000000;
    background-color: rgb(206, 206, 206);
    height: 150px;
    width: 200px;
    /* border: 1px solid black; */
    margin-bottom: 20px;
    margin-left: 20px;
}

</style>