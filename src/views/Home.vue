<template>
  <div style="width: 100%">
    <div class="card centerLeft shadow p-3 mb-5">
      <img class="profileImg" src="../../images/profile.jpg" alt="Photo" />
      <div style="padding: 30px">
        <h5 class="card-text">Harry Huang</h5>
        <p>Software Engineer</p>
      </div>
    </div>
    <div class="centerRight">
      <h2>Hello World</h2>
      <p>
        This is my webpage <br />
        Using Flask & Vue <br />
      </p>
      <strong>Find more below links</strong> <br />
      <router-link to="/resume" class="btn btn-outline-secondary btn-sm btnSid"
        >Resume</router-link
      ><br />
      <router-link to="/work" class="btn btn-outline-secondary btn-sm btnSid"
        >Projects</router-link
      ><br />
      <router-link to="/contact" class="btn btn-outline-secondary btn-sm btnSid"
        >Contact</router-link
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
.profileImg {
  margin: 15px auto;
  border-radius: 50%;
  width: 65%;
}

.centerLeft {
  margin-top: 100px;
  margin-left: 30%;
  float: left;
  width: 15rem;
  height: 20rem;
  border: 3px solid none;
  border-radius: 10%;
  background-color: #f8f8f8;
}
.centerRight {
  margin-top: 100px;
  margin-right: 30%;
  float: right;
  padding: 15px;
}
.btnSid {
  margin: 10px;
  width: 150px;
}
</style>
