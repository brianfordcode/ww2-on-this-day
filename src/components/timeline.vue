<template>

<div class="main-container">

  <div class="content">

    <router-link to="/">
      <div class="logo">
        <img
          src="../assets/m1-garand.png"
          alt="m1-garand"
          style="height: 20px; width: auto; padding-right: 5px;"
        />
        <h2>World War 2 on this day</h2>
      </div>
    </router-link>
    
    <div
      class="timeline-container" 
      v-if="this.$route.name === 'Home'"
    >
      <!-- DAYS -->
      <div class="days-arrows">
        <!-- PREV ARROW -->
        <img
          src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
          style="transform: rotate(90deg) translateX(5px); cursor: pointer;"
          @click="startDay = getDayOffset(startDay, -this.numOfDaysInTimeline)"
        />

        <div
          class="days-wrapper"
          v-for="offset in this.numOfDaysInTimeline"
          :key="offset">
          <div
            class="days-box"
            @click="daySelected = getDayOffset(startDay, offset - 1), yearClicked(this.yearSelected)"
            >
            <p>{{ getDayString(getDayOffset(startDay, offset - 1)) }}</p>
          <img
            class="arrow"
            src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
            v-if="getDayOffset(startDay, offset - 1).getTime() === daySelected.getTime()"
          />
          </div>
        </div>

        <!-- NEXT ARROW -->
        <img
          src="https://img.icons8.com/material-rounded/24/000000/give-way.png"
          style="transform: rotate(-90deg) translateX(-5px); cursor: pointer;"
          @click="startDay = getDayOffset(startDay, this.numOfDaysInTimeline)"
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
            @click="yearClicked(year)"
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
            v-if="year == yearSelected"
          />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
  data() {
    return {
      years: [],
      yearSelected: null,
      daySelected: null,
      startDay: null,
      numOfDaysInTimeline: 7
    }
  },
  created() {
    // GET STARTING YEAR
    const startYear = this.$store.state.start
    const endYear = this.$store.state.end
    //MAKE YEAR ARRAY
    for (let i = startYear ; i <= endYear; i++) { this.years.push(i) }
    this.yearSelected = startYear

    // GET CURRENT DAY IN LONG FORM
    this.startDay = new Date(startYear, new Date().getMonth())

    // GET CURRENT DAY IN MONTH / DAY FORM AND SET AS DAY SELECTED
    this.daySelected = this.startDay

    // GET BROWSER WIDTH
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

  },
  destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
  methods: {
    getDayOffset(date, dayOffset) {
      return new Date(date.getYear(),date.getMonth(), date.getDate() + dayOffset)
    },
    yearClicked(x) {
        this.yearSelected = x
        this.startDay = new Date(x, this.startDay.getMonth(), this.startDay.getDate());
        this.daySelected = new Date(x, this.daySelected.getMonth(), this.daySelected.getDate());

        this.$store.dispatch('changeDate', this.daySelected)
    },
    getDayString(date) {
      return date.toLocaleDateString('en-us', {month:"long", day:"numeric"})
    },
    // AMOUNT OF DAYS IN TIMELINE DEPENDING ON BROWSERWIDTH
    handleResize() {
      if (window.innerWidth > 1200) {
        this.numOfDaysInTimeline = 7
      }
      if (window.innerWidth < 800) {
        this.numOfDaysInTimeline = 5
      }
      if (window.innerWidth < 650) {
        this.numOfDaysInTimeline = 3
      }
      if (window.innerWidth < 391) {
        this.numOfDaysInTimeline = 2
      }
    }
  },

}
</script>

<style scoped>

.main-container {
  box-shadow: 0px 0px 33px -20px #000000;
  user-select: none;
  /* font-family: 'special elite' */
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content a, .logo {
  text-decoration: none;
  color: black;
  padding: 10px 0;
  font-family: 'special elite';
  display: flex;
}

.days-arrows {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.days-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
}

.days-box p {
  background-color: rgba(0,0,0,0.75);
  text-align: center;
  color: white;
  padding: 2px 0;
  cursor: pointer;
  width: 100px;
}

.year-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  flex-wrap: wrap;
}

.year-arrow {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 82px;
  padding: 0 10px;
}

.year-box {
  display: flex;
  justify-content: space-around;
  align-items:center;
  height: 60px;
  width: 120px;
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