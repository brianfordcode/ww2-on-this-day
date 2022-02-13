<template>

<div class="main-container">
  <div class="content">
      <div
        class="logo-arrow-container"
        style="display: flex; justify-content: space-between; align-items: center; padding: 0 20px;"
      >
        <!-- LOGO -->
        <logo/>
        <!-- OPEN/CLOSE TIMELINE -->
        <img
          :src="arrowIcon"
          alt="arrow-icon"
          v-if="$route.name != 'About' && $route.name != 'Contact'"
          draggable = "false"
          :class="{'down': showTimeline}"
          style="cursor: pointer;"
          @click="showTimeline = !showTimeline"
        />
      </div>
    <!-- MAIN TIMELINE -->
    <div
      class="timeline-container" 
      v-if="$route.name != 'About' && $route.name != 'Contact' && showTimeline"
    >
      <!-- DAYS CONTAINER -->
      <div class="days-arrows">
        <!-- PREV ARROW -->
        <img
          class="direction-arrow"
          :src="arrowIcon"
          draggable = "false"
          style="transform: rotate(90deg); translateX(1px);"
          @click="startDate = getDayOffset(startDate, -numOfDaysInTimeline)"
        />
        <!-- DAYS -->
        <div
          class="days-wrapper"
          v-for="offset in numOfDaysInTimeline"
          :key="offset">
          <div
            class="days-box"
            @click="dayClicked(offset)"
            >
            <p>{{ getDayString(getDayOffset(startDate, offset - 1)) }}</p>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            :src="arrowIcon"
            draggable = "false"
            v-if="(getDayOffset(startDate, offset - 1).getMonth(), getDayOffset(startDate, offset - 1).getDate()) === ($store.state.selectedDate.getMonth() - 1 , $store.state.selectedDate.getDate())"
          />
          </div>
        </div>
        <!-- NEXT ARROW -->
        <img
          class="direction-arrow"
          :src="arrowIcon"
          draggable = "false"
          style="transform: rotate(-90deg); translateX(-1px);"
          @click="startDate = getDayOffset(startDate, numOfDaysInTimeline)"
        />
      </div>
      <!-- YEARS CONTAINER -->
      <div class="year-wrapper">
        <div
          class="year-arrow"
          v-for="year in $store.getters.yearTimeline()"
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
              :src="$store.getters.getPicForBg(year)"
              alt="image"
            />
          </div>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            draggable = "false"
            :src="arrowIcon"
            v-if="year === $store.state.selectedDate.getFullYear()"
          />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import logo from "./logo.vue"

export default {
  data() {
    return {
      startDate: this.$store.state.selectedDate,
      numOfDaysInTimeline: 7,
      showTimeline: true,
      arrowIcon: "https://img.icons8.com/material-rounded/24/000000/give-way.png"
    }
  },
  components: { logo },
  created() {
    // GET BROWSER WIDTH
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    getDayOffset(date, dayOffset) {
      return new Date(date.getYear(),date.getMonth(), date.getDate() + dayOffset)
    },
    yearClicked(clickedYear) {
      this.startDate = new Date(clickedYear, this.startDate.getMonth(), this.startDate.getDate());
      // DISPATCH date selected TO STORE
      this.$store.dispatch('changeDate', new Date(clickedYear, this.$store.state.selectedDate.getMonth(), this.$store.state.selectedDate.getDate()))

      this.$router.push(`/${this.$store.getters.dateForRouter()}`)
    },
    dayClicked(offset) {
      this.$store.dispatch('changeDate', this.getDayOffset(this.startDate, offset - 1), this.$store.state.selectedDate.getFullYear())

      this.$router.push(`/${this.$store.getters.dateForRouter()}`)
    },
    getDayString(date) {
      return date.toLocaleDateString('en-us', {month:"long", day:"numeric"})
    },
    // AMOUNT OF DAYS IN TIMELINE & SHOW/HIDE TIMELINE AND ARROW DEPENDING ON BROWSERWIDTH
    handleResize() {
      let width = window.innerWidth
      width < 1200 ? this.numOfDaysInTimeline = 7 : ''
      width < 800 ? this.numOfDaysInTimeline = 5 : ''
      width < 650 ? this.numOfDaysInTimeline = 3 : ''
      // SHOW/HIDE TIMELINE AND ARROW
      if ( width < 925 ) { this.showTimeline = false }
      else {this.showTimeline = true}
    }
  },
}
</script>

<style scoped>

.main-container {
  box-shadow: 0px 0px 33px -20px #000000;
  user-select: none;
  background-color: white;
  width: 100%;
  z-index: 10000000;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.days-arrows {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
}

.direction-arrow {
  cursor: pointer;
  opacity: 0.5;
}

.direction-arrow:hover {
  opacity: 1;
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

.down {
  transform: rotate(180deg);
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
  padding: 0 5px;
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
  font-size: 26px;
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

.timeline-container {
  display: initial;
}
</style>