<script setup>
import {ref} from "vue";

defineProps(
    {
      mainIf:{
        type:Boolean,
        required:true
      },
      tryIf:{
        type:Boolean,
        required:true
      }
    }
)

const emits = defineEmits(['TransMsg'])
function tryIt(){
  emits('TransMsg')
}


const Uname = ref("Jason")
const Uid = ref("3100667451")
const UInfo = ref(" A student from Yunnan. contribute #57")
</script>

<template>
<div class="mainp">
  <div class="mainInfo">
    <div style="display: flex;justify-content: center;align-content: center">
      <div class="uPicture"></div>
    </div>
    <div style="display: flex;justify-content: center;align-content: center">
      <div class="uInfo2">{{Uname}}</div>
    </div>
    <div style="display: flex;justify-content: center;align-content: center">
      <div style="font-size: 1.4vw">----------------------------</div>
    </div>
    <div style="display: flex;justify-content: center;align-content: center">
      <div class="uInfo2">{{Uid}}</div>
    </div>
    <div style="display: flex;justify-content: center;align-content: center">
      <div style="font-size: 1.4vw">----------------------------</div>
    </div>
    <div style="display: flex;justify-content: center;align-content: center">
      <div class="uInfo1">{{UInfo}}</div>
    </div>

  </div>
  <div class="runInfo1">
    <div style="display: flex;justify-content: center;align-content: center;">
      <i style="color:white;margin-left: 1.5vw;margin-top: 1.4vw" class="fa fa-telegram fa-3x"></i>
      <div style="margin-left: 1.5vw;margin-top: 1.3vw;color: white;font-size: 1.2vw">try to draw your meme</div>
    </div>
    <button @click="tryIt()" class="try">Try now</button>
  </div>
  <div class="runInfo2">
    <div style="display: flex;justify-content: center;align-content: center;">
      <i style="margin-left: 1.5vw;margin-top: 1vw;color: white" class="fa fa-github fa-3x"></i>
      <div style="margin-left: 1.5vw;margin-top: 1.3vw;color: white;font-size: 1.2vw">Open in GitHub&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</div>
    </div>
  </div>
  <div class="runInfo3">
    <div style="font-size: 3vw;font-weight: 700;">Adapting to the times, AI assisted creation.</div>
    <div style="font-weight: 600;margin-left: 22vw">Don't be on the same track as AI, let AI become your tool.</div>
  </div>
  <div class="runInfo4">-------------- &nbsp; &nbsp; &nbsp;&nbsp; © 2023 Meme-Create&nbsp; &nbsp; &nbsp; &nbsp; --------------</div>
</div>

</template>

<style scoped>
.mainp{
  width: 90vw;
  height: 67vh;
  /*border: #f2f2f2 2px solid ;*/

  background-image: url("src/assets/未标题-5.png");
  background-size: 100% 100%;
  /*background-repeat: no-repeat;*/

  /*border: #f2f2f2 1px solid;*/
  border-radius: 0 0 1vw 1vw;

  /*display: flex;*/
  /*justify-content: center;*/
  /*align-content: center;*/

  position: relative;
}
.mainInfo{
  width: 20vw;
  height: 74vh;
  /*border: #f2f2f2 2px solid;*/
  border-radius: 0.5vw 0.5vw 0.5vw 0.5vw;

  background: #073250;
  box-shadow: 0vw -9px 1px -4px #05283f ;

  position: absolute;
  left: 10vw;
  top: 10vh;
}
.runInfo1{
  width: 20vw;
  height: 20vh;
  /*border: #f2f2f2 2px solid;*/
  border-radius: 0.5vw 0.5vw 0.5vw 0.5vw;

  background: #00243b;
  box-shadow: 0vw -9px 1px -4px #012238;

  position: absolute;
  left: 36vw;
  top: 54vh;
}
.runInfo2{
  width: 20vw;
  height: 20vh;
  /*border: #f2f2f2 2px solid;*/
  border-radius: 0.5vw 0.5vw 0.5vw 0.5vw;

  background: #00243b;
  box-shadow: 0vw -9px 1px -4px #011f33;

  position: absolute;
  left: 60vw;
  top: 54vh;
}
.runInfo3{
  width: 50vw;
  height: 20vh;
  /*border: #f2f2f2 2px solid;*/
  border-radius: 0.5vw 0.5vw 0.5vw 0.5vw;

  color: #f2f2f2;

  position: absolute;
  left: 36vw;
  top: 25vh;
}
.runInfo4{
  width: 90vw;
  height: 5vh;
  /*border: #f2f2f2 2px solid;*/

  color: #afafaf;
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 0;
  top: 86vh;
}
.try{
  width:12vw;
  margin-left: 5.9vw;
  margin-top: 2vh;
  font-size: 1.8vw;
  font-weight: 700;
  border-radius: 1vw;
  border: #f2f2f2 solid 1px;

  display: flex;
  align-content: center;
  justify-content: center;
}
.uPicture{
  width: 7vw;
  height: 7vw;

  margin-top: 4vh;
  margin-bottom: 0.4vw;

  border: white 1px solid;
  border-radius: 50%;

  background-image: url("src/assets/未标题-2.png");
  background-size: 100% 100%;
}
.uInfo1{
  color: #b2b2b2;
  font-size: 1.7vw;
  font-weight: 600;
  margin-left: 1.2vw;
  margin-top: 1vw;
}
.uInfo2{
  color: #ffffff;
  font-size: 1.7vw;
  font-weight: 600;
}
</style>