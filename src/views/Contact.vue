<!-- <template>

    <img
        class="logo"
        @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
        src="/ww2-on-this-day-logo.png"
        alt="logo"
    />

    <div class="container">

        <div class="content">
            <h1>Contact Us</h1>
        </div>

    </div>

    

</template>

<script>

export default {
}
</script>

<style scoped>

.container {
    display: flex;
    /* user-select: none; */
    max-width: 1200px;
    margin: 0 auto;
}

iframe {
     margin: 25px auto;
}

.content {
    width: 100%;
    position: relative;
}

h1 {
    position: absolute;
    text-align: center;
    width: 100%;
    margin-top: 3%;
}
</style> -->


<template>

    <VueDatePicker 
        v-model="date"
        :year-range="[1939, 1945]"
        month-name-format="long"
        :enable-time-picker="false"
        model-type="yyyy-MM-dd"
        input-class-name="dp-custom-input"
        menu-class-name="dp-custom-menu"
    >
    </VueDatePicker>

  </template>
  
  <script>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { ref } from 'vue';

  const date = ref((new Date(1939, new Date().getMonth(), new Date().getDate())));
  
  
  export default {
    components: { VueDatePicker },
    data() {
      return {
        date: null,
      };
    },
    watch: {
        date(val) {
            console.log(val)
        }
    },
    created(){
        // console.log(new Date(1939, new Date().getMonth(), new Date().getDate()))
    },
    methods: {
        getTodaysDate() {
            return this.$store.getters.dateForRouter()
        }
    }
    // computed: {
    //     date() {
    //         return this.$store.getters.dateForRouter()
    //     }
    // }
  }
  </script>


<style>

.dp-custom-input {
    background: transparent;
    border: none;
    border: 1px solid;
    border-radius: 0;
}

.dp-custom-menu {
    font-family: 'Courier New', Courier, monospace;
    --dp-font-family: 'Courier New', Courier, monospace;
}

:root {
    --dp-font-family: 'Courier New', Courier, monospace;
    --dp-font-size: 16px;
    /* --dp-cell-size: 45px; */
}

</style>