<script setup>
import {ref} from "vue";

const imgSrc = ref()
function uploadImage(e) {
  //上传图片并预览
  let file = e.target.files[0]; //获取第一个文件
  let img = new FileReader();
  img.readAsDataURL(file);
  console.log("img:",img)
  img.onload = ({ target }) => {
    this.imgSrc = target.result; //将img转化为二进制数据
    console.log("target:",target)
  };
}
</script>

<template>
  <input class="input_image left" type="file" @change="uploadImage($event)" accept="image/png" />
  <img class="show_input_image left" :src="imgSrc" />
</template>

<style scoped>
.show_input_image {
  position: absolute;
  left: 10px;
  width: 130px;
  height: 130px;
}
.input_image {
  position: relative;
  width: 130px;
  height: 130px;
  background-color: blue;
  z-index: 999;
  opacity: 0;
}
</style>