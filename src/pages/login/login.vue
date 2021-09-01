<template>
  <div class="login">
      <button @click="goBack">返回</button>
      你好，这里是login页面
  </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>