<template>
    <div class="sub box">
        <div class="sub-content">
            <p>Sign up for the daily email:</p>
            <input type="text" placeholder="Email">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sub {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 150px;
}

.sub-content p {
    width: 60%;
    margin: 0 auto;
    font-family: 'special elite';
}

.sub-content input {
    border: 1px solid black;
    margin-top: 15px;
    width: 70%;
    padding: 5px;
    outline: none;
}
</style>