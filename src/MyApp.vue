<script setup>
import My_header from "@/components/my_header.vue";
import MainPicture from "@/components/mainPicture.vue";
import {inject, ref} from "vue";
import Try_ from "@/components/try_.vue";
const $http = inject("$axios")
const $queryString = inject("$qs")

const mainIf = ref(true)
const tryIf = ref(false)
const imageInfo = ref({})
const image = ref("")
const prompt = ref("a girl")
const steps = ref("10")

function goto(){
  mainIf.value = !mainIf.value
  tryIf.value = !tryIf.value
}
function f() {
  // testIf.value = !testIf.value;
  $http.post("http://localhost:9526/api/user/run",
      $queryString.stringify({
            prompt:prompt.value,
            steps:steps.value
          })
      //@Parameter将对象转换为 JSON 字符串  @RequestBody则不用
  ).then(
      res => {
        imageInfo.value = res.data
        // console.log(imageInfo.value)
        if (imageInfo.value.code === 200){
          image.value = "data:image/jpg;base64," + imageInfo.value.result
          // this.image=imageInfo.value.result
        }else{
          image.value=null
        }
        // alert(res)
        console.log(image.value)
      }
  ).error(
      res => {
        alert('false')
      }
  );
}
</script>

<template>
  <div class="base">
    <header class="head">
      <my_header></my_header>
<!--      <button @click="f">Click me</button>-->
<!--      <img :src="image" alt="11">-->

    </header>

    <main class="main">
      <main-picture v-if="mainIf" @TransMsg="goto()"></main-picture>
      <try_ v-if="tryIf"></try_>
    </main>
  </div>
</template>

<style scoped>
.base{
  height: 100vh;
  width: 100vw;
  /*border: white 2px solid;*/
}
.head{
  height: 3.5vw;
  width: 100vw;
  background: #00253c;

  border-radius: 0 0 0.7vw 0.7vw;
  box-shadow: 0 0 4px 4px #000e21;

}
.main{
  width: 100%;


  display: flex;
  align-content: center;
  justify-content: center;

}
</style>
