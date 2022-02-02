<template>

<div
    class="sidebar-container"
    v-if="showSideBar"
>
    <div class="sub box">
        <div class="sub-content">
            <p>Sign up for the daily email:</p>
            <input type="text" placeholder="Email">
        </div>
        
    </div>
    <div class="box">
        adsense
    </div>
    <div class="box">
        most popular days
    </div>
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
    width: 220px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.sub {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(255, 255, 255);
    text-align: center;
}

.sub-content p {
    font-family: 'special elite';
    width: 60%;
    margin: 0 auto;
}

.sub-content input {
    border: 1px solid black;
    margin-top: 15px;
    width: 70%;
    padding: 5px;
    outline: none;
}

</style>