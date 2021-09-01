<template>
  <div class="current-city">
      <div class="text">
          <span class="cur-city">当前定位城市：</span>
          <span class="tip-city">定位不准时，请在城市列表中选择</span>
      </div>
      <div class="actual-city">深圳</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.current-city{
    background-color: #fff;
}
.text,.actual-city{
    border-bottom:1px solid #ccc;
    height:2rem;
    line-height: 2rem;
}
.cur-city{
    float:left;
    padding-left:1rem;
    font-size: 0.7rem;
}
.tip-city{
    float: right;
    font-size: 0.6rem;
    font-weight: 500;
    color:#555;
    padding-right:1rem;
}
.actual-city{
    color:#3190e8;
    text-align: left;
    padding-left:1rem;
}
</style>