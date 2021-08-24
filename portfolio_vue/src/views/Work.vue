<template>
  <div class="projectRow">
    <div class="projectBlock">
      <router-link to="/Work_ai" style="width: 400px"
        ><center>
          <img
            class="projectImg"
            src="../../images/project_ai.png"
            alt="Project_AI"
          />
          <p>CNN and opencCV for Medical-Assistance</p>
        </center></router-link
      >
    </div>
    <div class="projectBlock">
      <router-link to="/Work_node" class="projectImg"
        ><center>
          <img
            class="projectImg"
            src="../../images/project_node.png"
            alt="Project_AI"
          />
          <p>Web App for Online Food Order</p>
        </center></router-link
      >
    </div>
  </div>
</template>

<style>
.projectImg {
  border-radius: 10px;
  height: 200px;
}
.projectBlock {
  margin-left: 15px;
  width: 400px;
  float: left;
}
.projectRow {
  margin-top: 50px;
}
</style>
