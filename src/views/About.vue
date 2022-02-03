<template>
  
  <div class="about-container">

    <h2 class="title">About World War 2 on this day</h2>

    <div class="content">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MacArthur_Manila.jpg/220px-MacArthur_Manila.jpg" alt="macarthur">
      <p>
        This site has been crafted from a love and respect of history and everything World War 2.
        <br>
        <br>
        Follow along daily as each of the days events are highlighted.
      </p>
    </div>

  </div>

</template>

<style scoped>

.about-container {
  width: 100%;
}

.title {
  text-align: center;
  margin: 20px;
}

.content img {
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 500px) {

  .content img {
    width: 200px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
}



</style>