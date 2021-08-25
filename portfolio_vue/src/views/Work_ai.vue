<template>
  <div class="block">
    <h2>Project - AI Assistance System for Medical service</h2>
    <div class="subBlock">
      <h3 class="subject">Introduction</h3>
      <p class="content">
        利用機器視覺與深度學習對X-ray片進行分析，進而輔助醫師進行病症診斷；
        聊天機器人及線上資訊服務系統，提供民眾方便快速地取得正確的醫療資訊與診療結果，
        透過人臉辨識提供病患隱私安全性的登入系統。
      </p>
      <h3 class="subject">X-Ray Diagnose</h3>
      <h4>Tools</h4>
      <center>
        <img src="../../images/tools.jpg" alt="Tools" class="centerImg" />
      </center>
      <h4>Dataset</h4>
      <center>
        <img src="../../images/dataset.png" alt="Dataset" class="centerImg" />
      </center>
      <h4>Data Preprocessing</h4>
      <center>
        <img
          src="../../images/datapreprocess.png"
          alt="Data Preprocessing"
          class="centerImg"
        />
      </center>
      <h4>Model Structure</h4>
      <center>
        <img
          src="../../images/model.png"
          alt="Model Structure"
          class="centerImg"
        />
      </center>
      <h4>Optimizer: SGD</h4>
      <center>
        <img
          src="../../images/sgd.jpg"
          alt="Optimizer: SGD"
          class="centerImg"
        />
      </center>
      <h4>Result: Grad-Cam</h4>
      <center>
      <img src="../../images/gradcam.jpg" alt="Result: Grad-Cam" />
      </center>
      <h4>Optimizer: Scikit-learn</h4>
      <center>
      <img
        src="../../images/result.jpg"
        alt="Optimizer: Scikit-learn"
        class="centerImg"
      />
      </center>
      <h3 class="subject">Facial Recognition</h3>
      <h4>Structure</h4>
      <center>
      <img
        src="../../images/facestructure.jpg"
        alt="Structure"
        class="centerImg"
      />
      </center>
      <h4>Data Preprocessing</h4>
      <center>
      <img
        src="../../images/facedataset.png"
        alt="Data Preprocessing"
        class="centerImg"
      />
      </center>
      <h4>Feature Extraction</h4>
      <center>
      <img
        src="../../images/faceextract.png"
        alt="Feature Extraction"
        class="centerImg"
      />
      </center>
      <p class="content">
        將特徵轉乘128維向量後存入 descriptors.npy (以 numpy array
        存檔)，並將使用者ID以list的形式存入
        candidate.txt，當使用者登入時會讀取兩個檔案進行特徵比對並取得使用者ID。
      </p>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fcfcfc;
}
.block {
  margin: 20px auto;
  width: 1200px;
}
.subBlock {
  margin: 30px auto;
  width: 1000px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 30px;
}
.centerImg {
  margin: 20px;
}
.subject {
  color: rgb(36, 36, 36);
}
.content {
  margin: 20px auto;
  width: 90%;
}
</style>
