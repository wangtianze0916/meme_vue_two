<script setup>

import {inject, ref} from "vue";
import SelectImg from "@/components/selectImg.vue";

const $http = inject("$axios")
const $queryString = inject("$qs")

const imageInfo = ref({})
const image = ref("")
const prompt = ref("")
const steps = ref("10")
const img_flag = ref(false)
const wait_flag = ref(false)

const frame1Flag = ref(false)
const frame1Src = ref()
function uploadImage1(e) {
  //上传图片并预览
  let file = e.target.files[0]; //获取第一个文件
  let img = new FileReader();
  img.readAsDataURL(file);
  console.log("img:",img)
  img.onload = ({ target }) => {
    frame1Src.value = target.result; //将img转化为二进制数据
    console.log("target:",target)
  };
  console.log(frame1Src.value)
  frame1Flag.value = true;
}
const frame2Flag = ref(false)
const frame2Src = ref()
function uploadImage2(e) {
  //上传图片并预览
  let file = e.target.files[0]; //获取第一个文件
  let img = new FileReader();
  img.readAsDataURL(file);
  console.log("img:",img)
  img.onload = ({ target }) => {
    frame2Src.value = target.result; //将img转化为二进制数据
    console.log("target:",target)
  };
  frame2Flag.value = true;
}
const cannyFlag = ref(false)
const cannySrc = ref()
function uploadImage3(e) {
  //上传图片并预览
  let file = e.target.files[0]; //获取第一个文件
  let img = new FileReader();
  img.readAsDataURL(file);
  console.log("img:",img)
  img.onload = ({ target }) => {
    cannySrc.value = target.result; //将img转化为二进制数据
    console.log("target:",target)
  };
  cannyFlag.value = true;
}
//大创
// function run() {
//   img_flag.value = false
//   wait_flag.value = true
//   $http.post("http://10.103.67.215:9526/api/user/run",
//       $queryString.stringify({
//         prompt:prompt.value,
//         steps:steps.value
//       })
//       //@Parameter将对象转换为 JSON 字符串  @RequestBody则不用
//   ).then(
//       res => {
//         imageInfo.value = res.data
//         // console.log(imageInfo.value)
//         if (imageInfo.value.code === 200){
//           image.value = "data:image/jpg;base64," + imageInfo.value.result
//           // this.image=imageInfo.value.result
//         }else{
//           image.value=null
//         }
//         // alert(res)
//         console.log(image.value)
//         wait_flag.value = false
//         img_flag.value = true
//       }
//   ).error(
//       res => {
//         alert('false')
//       }
//   );
// }

//新技术
function run() {
  img_flag.value = false
  wait_flag.value = true
  $http.post("http://10.103.238.81:9526/api/user/inter",
      $queryString.stringify({
        frame1:frame1Src.value,
        frame2:frame2Src.value,
        canny:cannySrc.value
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
        wait_flag.value = false
        img_flag.value = true
      }
  ).error(
      res => {
        alert('false')
      }
  );
}

</script>

<template>
  <div>
    <div class="headMain">
<!--      <input class="promoteIn" type="text" placeholder="Input prompt here!"  >-->
      <textarea class="promoteIn" placeholder="Input prompt here!" v-model="prompt"></textarea>
      <button class="runI" @click="run">启动</button>
    </div>
    <div class="bottomMain">
      <div class="outputS">
        <div class="config">

          <div class="iImgIn">
            <a class="a-upload">
              <input type="file" @change="uploadImage1($event)" accept="image/png" >&nbsp; Select your first frame!
            </a>
            <img  :src="frame1Src"  alt="frame1" v-show="frame1Flag"/>
          </div>
          <div class="iImgIn">
            <a class="a-upload">
              <input type="file" @change="uploadImage2($event)" accept="image/png" >&nbsp; Select your second frame!
            </a>
            <img  :src="frame2Src"  alt="frame1" v-show="frame2Flag"/>
          </div>
          <div class="iImgIn">
            <a class="a-upload">
              <input type="file" @change="uploadImage3($event)" accept="image/png" >&nbsp; Select your canny!
            </a>
            <img  :src="cannySrc"  alt="frame1" v-show="cannyFlag"/>
          </div>


<!--          <SelectImg></SelectImg>-->

        </div>
        <div class="outshow">
          <div v-show="wait_flag" style="font-style: italic;font-size: 2vh">Please wait a mount</div>
          <img :src="image" alt="11" class="out_picture" v-show="img_flag">
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.headMain{
  width: 98vw;
  height: 12vh;

  margin-top: 1vh;
  display: flex;
  justify-content: center;
  align-content: center;

  /*border: white solid 2px;*/
}
.bottomMain{

  display: flex;
  justify-content: center;
  align-content: center;

}
.promoteIn{
  width: 80%;
  height: 100%;

  background: #012238;
  border: 0.2vh solid #404142;
  border-radius: 0.8vh;

  color: #c9c9c9;
  font-size: 2vh;
  /*font-weight: 600;*/
  font-family: Arial;
  /*text-align: left;*/

  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;

}

.outputS{
  width: 96vw;
  height: 74vh;

  display: flex;

  margin-top: 1vh;
  /*border: white solid 2px;*/
}
.config{
  height: 100%;
  width: 18%;

  background: #012238;
  border: 0.2vh solid #404142;
  border-radius: 0.8vh;
}
.outshow{
  height: 100%;
  width: 82%;

  display: flex;
  justify-content: center;

  margin-left: 6px ;

  background: #012238;
  border: 0.2vh solid #404142;
  border-radius: 0.8vh;
}
.out_picture{
  height: 97%;
  margin-top: 1vh;
}
.runI{
  width: 18%;
  height: 100%;

  margin-left: 5px;

  color: white;
  font-size: 2vh;

  background: #cc6300;
  border: 0.2vh solid #404142;
  border-radius: 0.8vh;
}
.runI:hover{
  background: #e06a00;
}

.iImgIn{
  width: 95%;
  height: 29%;
  margin-bottom: 3%;
}
/*a  upload */
.a-upload {
  width: 95%;
  height: 13%;
  margin-left: 2.5%;
  margin-top: 2vh;
  line-height: 20px;
  position: relative;
  cursor: pointer;
  color: #adadad;
  background: #00151f;
  /*border: 1px solid #ddd;*/
  border-radius: 4px;
  overflow: hidden;
  display: inline-block;
  *display: inline;
  *zoom: 1
}
.a-upload  input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer
}
.a-upload:hover {
  color: #d9d9d9;
  background: #001b28;
  border-color: #ccc;
  text-decoration: none
}
.iImgIn img{
  width: 80%;
  height: 80%;

  margin-left: 5%;
  border-radius: 0.8vh;
  border: #001b28 2px solid;
}
</style>