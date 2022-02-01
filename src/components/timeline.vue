<template>


<div class="main-container">

  <div class="content">

    <div class="logo" style="padding: 10px 0;">
      <h2>World War 2 on this day</h2>
    </div>
    
    <div class="timeline-container">

      <!-- DAYS -->
      <div class="days-arrows" style="display: flex; align-items: center; cursor: pointer;">
        <!-- PREV ARROW -->
        <img
          src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
          style="transform: rotate(90deg)"
        />

        <div class="days-wrapper">
          <div
            class="days-box"
            v-for="day in dates"
            :key="day"
          >
            <p>{{ day }}</p>
          </div>
        </div>

        <!-- NEXT ARROW -->
        <img
          src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
          style="transform: rotate(-90deg)"
        />
      </div>

      <!-- YEARS -->
      <div class="year-wrapper">
        <div
          class="year-arrow"
          v-for="year in years"
          :key="year"
        >
          <div
            class="year-box"
            @click="getYear(year)"
          >
            <p>{{ year }}</p>
            <img
              draggable="false"
              class="bg"
              src="https://picsum.photos/300/200"
              alt="image"
            />
          </div>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
            v-if="year === yearSelected"
          />
        </div>
          
      </div>


    </div>

  </div>


</div>





</template>

<script>

    // ARRAY OF MONTHS
    // const months = Array.from({length: 12}, (item, i) => {
    //   return new Date(0, i).toLocaleString('en-US', {month: 'long'})
    // });

export default {
  data() {
    return {
      years: [],
      dates: [],
      yearSelected: 1939,
    }
  },
  mounted() {

    //MAKE YEAR ARRAY
    for (let i = /*START */1939 ; i <= /*END*/1945; i++) { this.years.push(i) }


    // MAKE ARRAY OF DATES
    const getDateArray = function(start, end) {
        var arr = new Array();
        var dt = new Date(start);
        while (dt <= end) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    }

    const startDate = new Date(39, 0, 1); //YY-MM-DD
    const endDate = new Date(39, 11, 31); //YY-MM-DD

    const dateArr = getDateArray(startDate, endDate);

    const newArray = []

    // FORMAT DATES INTO MONTH / DAY
    for (const date of dateArr) {
      const formattedDate = date.toLocaleDateString('en-us', {month:"long", day:"numeric"})

      newArray.push(formattedDate)

    }

    this.dates = newArray
    // console.log(newArray)

    // // SPLIT ARRAY INTO CHUNKS OF 7
    // function splitIntoChunk(arr, chunk) {

    //     while(arr.length > 0) {

    //         let tempArray;
    //         tempArray = arr.splice(0, chunk);
    //         console.log(tempArray);
    //     }
    // }

    // splitIntoChunk(newArray, 7)



  },
  methods: {
    getYear(x) {
        this.yearSelected = x
    }
  }

}
</script>

<style scoped>

.main-container {
  box-shadow: 0px 0px 33px -20px #000000;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.timeline-container {
  /* display: none; */
}

.days-wrapper {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.days-box p {
  background-color: rgba(0,0,0,0.75);
  color: white;
  padding: 5px;
  /* margin: 0 15px; */
  cursor: pointer;
  width: max-content;
  text-align: center;
}

.year-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.year-arrow {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.year-box {
  display: flex;
  justify-content: space-around;
  align-items:center;
  height: 75px;
  width: 125px;
  user-select: none;
}

.year-box p {
  background-color: rgba(0,0,0,0.75);
  font-size: 30px;
  position: absolute;
  color: white;
  padding: 0 3px;
}

.year-box .bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
  margin-top: 2px;
}

</style>