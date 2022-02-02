<template>

<div
    class="sidebar-container"
    v-if="showSideBar"
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
            showSideBar: true,
        }
    },
    created() {
        // GET BROWSER WIDTH
        window.addEventListener('resize', () => {
            window.innerWidth < 800 ? this.showSideBar = false : this.showSideBar = true
            }
        );
    },
    methods: {
        handleResize() {
            if (window.innerWidth > 800) {
                this.showSideBar = false
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
    margin-bottom: 20px;
    margin-left: 20px;
}

</style>