<template>
  <div class="head-top">
      <span>ele.me</span>
      <div class="log-reg">
      <router-link class="login" :to="{name:'login'}" style="text-decoration:none; color:white">登录</router-link> |
      <router-link class="login" :to="{name:'register'}" style="text-decoration:none; color:white">注册</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'headTop'
}
</script>

<style scoped>
.head-top{
  height: 2.5rem;
  background-color: #3190e8;
  color:#fff;
  line-height: 2.5rem;
}

.head-top span{
  float: left;
  margin: 0 1rem;
}

.log-reg{
  float:right;
  margin: 0 1rem;
}
</style>