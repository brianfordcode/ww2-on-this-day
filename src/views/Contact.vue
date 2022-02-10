<template>
<div class="main-container">
    <!-- EMAILJS -->
<!--   <form @submit.prevent="event => sendEmail(event)">

    <div>
        <label>Name: </label>
        <input type="text" name="user_name" v-model="user_name" required>
    </div>
    
    <div>
        <label>Email: </label>
        <input type="email" name="user_email" v-model="user_email" required>
    </div>
    
    <div>
        <label>Message: </label>
        <textarea name="message" class="text-area" v-model="message" required></textarea>
    </div>
    
    <input class="send-btn" type="submit" value="Send" >
    <div class="success" v-if="success">Message Has Been Sent!</div>

  </form> -->

    <!-- MAILCHIMP CONTACT FORM -->
    <h1>Contact Us</h1>
    <iframe
        style="width: 100%; height: 930px;"
        src="https://us14.list-manage.com/contact-form?u=00d82a43010f547c0dca8843a&form_id=6ce4c415c69ff9aba7d88881897370c0"
        frameborder="0"
    >
    </iframe>


</div>
</template>

<script>
// EMAILJS
// import emailjs from 'emailjs-com';
// import{ init } from '@emailjs/browser';
// init("user_8PTtMq3xl344kHsE2kRkq");

// export default {
//     data() {
//         return {
//             user_name: '',
//             user_email: '',
//             message: '',
//             success: false
//         }
//     },
//   methods: {
//     sendEmail(event) {
//       console.log(event)

//         emailjs.sendForm('service_yceurzu', 'template_qepth8s', event.target, 'user_8PTtMq3xl344kHsE2kRkq')
        
//             .then((result) => {
//                 console.log('SUCCESS!', result.text);
//             }, (error) => {
//                 console.log('FAILED...', error.text);
//             });
//             setTimeout(()=> {
//                 this.user_name = ''
//                 this.user_email = ''
//                 this.message = ''
//                 this.success = true
//             }, 900)
//             }
//   }
// }
</script>

<style scoped>

.main-container {
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: space-around;
    position: relative;
    user-select: none;
}

h1 {
    position: absolute;
    margin-top: 50px;

}

/* EMAILJS
.main-container {
    width: 100%;
    position: relative;
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: min-content;
    height: min-content;
    border: 1px solid black;
    color: black;
}
form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
form div input {
    width: 400px;
    padding: 15px;
    border: 1px solid;
    outline: none;
}
.text-area {
    min-width: 400px;
    max-width: 400px;
    max-height: 200px;
    min-height: 200px;
    outline: none;
    padding: 15px;
    border: 1px solid;
}
.send-btn {
    padding: 10px 30px;
    font-size: 15px;
    border: none;
    color: black;
    cursor: pointer;
    transition: .15s ease-in-out;
    margin-top: 5px;
}
.send-btn:hover {
    transform: scale(1.1);
  }
.success {
    color: black;
    margin: 0 auto;
    padding: 10px;
}
@media screen and (max-width: 700px) {
    form div input {
        width: 200px;
    }
    .text-area {
        min-width: 200px;
        max-width: 200px;
        max-height: 100px;
        min-height: 100px;
    }
} */
</style>