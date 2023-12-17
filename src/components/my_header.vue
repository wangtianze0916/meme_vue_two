<script setup>
import Download from './icons/download.vue';
</script>


<template>
  <div class="mai">
    <div class="note_value1">首页</div>
    <div class="note"></div>
    <div class="note_value1">下载生成结果</div>
    <Download /> <!-- 在这里使用 Download 组件 -->
    <div class="note_value1">社区</div>
    <div class="note_value1">联系我们</div>
    <div class="note_value2">历史记录</div>
    <div class="note_value2">设置</div>
  </div>

</template>


<style scoped>
.mai{
  height: 100%;
  width: 100%;

  display: flex;
  /*justify-content: center;*/
  /*align-content: center;*/

  color: #cbcbcb;
}
.note{
  width: 60%;
  height: 100%;
  margin-top: 2vh;

  font-size: 2vh;

  display: flex;
  justify-content: center;
  align-content: center;
}
.note_value1{
  width: 9%;
  height: 100%;
  margin-top: 2vh;

  font-size: 2vh;

  display: flex;
  justify-content: center;
  align-content: center;
}
.note_value2{
  width: 5%;
  height: 100%;
  margin-top: 2vh;

  font-size: 2vh;

  display: flex;
  justify-content: center;
  align-content: center;
}

</style>