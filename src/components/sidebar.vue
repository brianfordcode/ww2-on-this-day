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
    <div class="box ad">
        ad
    </div>
    <div class="box pop-days">
        <p>Most Popular Days</p>
    </div>
    <div class="box ad">
        ad
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
        const checkBoundaries = () => {
            window.innerWidth < 800 ? this.showSideBar = false : this.showSideBar = true
        }
        window.addEventListener('resize', checkBoundaries);
        checkBoundaries()
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

.sidebar-container p {
    font-family: 'special elite';
}

.box {
    box-shadow: 0px 0px 33px -20px #000000;
    height: 150px;
    width: 220px;
    margin-left: 20px;
    background-color: white;
}

.box:not(:last-child) {
    margin-bottom: 20px;
}

/* SUBSCRIBE BOX */
.sub {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.sub-content p {
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
/* POPULAR DAYS BOX */
.pop-days {
    height: 250px;
}

.pop-days p {
    text-align: center;
    padding: 20px;
}

/* ADS */

.ad {
    background-color: rgb(180, 180, 180);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

</style>