<template>
  <div class="register">
    <button @click="goBack">返回</button>
    你好，这里是注册页面
  </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
};
</script>

<style>
</style>