<template>
  <transition name="fade">
    <div v-show="showRes"
      class="alert alert-dismissible fade show"
      :style="{background: color=status ? 'LightGreen' : 'LightYellow'}"
      role="alert">
      <strong>{{ result }}</strong>
      <button @click=onClick()
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>
  </transition>
  <div class="shadow p-3 mb-5 contactTable">
    <h1>Message...</h1>
    <form @submit="onSubmit">
      <div class="mb-3">
        <div style="float: left; width: 48%">
          <label for="FirstName" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            v-model="fName"
            id="FirstName" />
        </div>
        <div style="float: right; width: 48%">
          <label for="LastName" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            v-model="lName"
            id="LastName" />
        </div>
      </div>
      <div class="mb-3">
        <label for="userEmail" class="form-label">Email Address</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          id="userEmail"
          aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          v-model="content"
          id="message"
          rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
// import flashMessage from '../components/flashMessage.vue';

export default {
  name: 'messageForm',
  data() {
    return {
      fName: '',
      lName: '',
      email: '',
      content: '',
      result: '',
      time: 2,
      timer: null,
      showRes: false,
      status: false,
    };
  },
  methods: {
    sendMessage(newMessage) {
      const path = 'https://harrywebapp.herokuapp.com/message';
      axios.post(path, newMessage).then((response) => {
        this.result = response.data.message;
        this.status = response.status;
        this.fName = '';
        this.lName = '';
        this.email = '';
        this.content = '';
      })
        .catch((error) => {
          console.log(error);
          this.result = 'Oops, 500 internal connection error';
        });
      this.showRes = !this.showRes;
      this.timer = setInterval(this.counter, 1000);
    },
    counter() {
      this.time -= 1;
      if (this.time === 0) {
        this.showRes = !this.showRes;
        clearInterval(this.timer);
        this.time = 2;
      }
    },
    onSubmit(e) {
      e.preventDefault();

      if (!this.lName) {
        alert('Please enter your last name');
        return;
      }
      if (!this.fName) {
        alert('Please enter your first name');
        return;
      }
      if (!this.content) {
        alert('Let me know what you are thinking');
        return;
      }

      const newMessage = {
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        content: this.content,
      };
      this.sendMessage(newMessage);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style>
.fade-leave-active,
.fade-enter-active,
.fade-move {
  transition: opacity 1s;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
.contactTable {
  margin: 50px auto;
  width: 500px;
  border-radius: 10px;
  background-color: #f8f8f8;
}
input {
  width: 80%;
}
</style>
