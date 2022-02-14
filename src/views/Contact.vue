<template>

    <timeline/>

    <div class="container">

        <div class="content">
            <h1>Contact Us</h1>
            <iframe
                style="width: 100%; height: 930px;"
                src="https://us14.list-manage.com/contact-form?u=00d82a43010f547c0dca8843a&form_id=6ce4c415c69ff9aba7d88881897370c0"
                frameborder="0"
            >
            </iframe>
        </div>

        <sideBar/>

    </div>

    

</template>

<script>
import timeline from '../components/timeline/timeline.vue'
import sideBar from '../components/sidebar/sidebar.vue'

export default {
  components: {timeline, sideBar }
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
</style>