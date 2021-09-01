<template>
  <div class="home">
      <headTop/>
      <current-city/>
      <hot-city :cities="cities"/>
  </div>
</template>

<script>
import headTop from "../../components/headTop.vue"
import currentCity from "../../components/home/currentCity.vue"
import {nanoid} from 'nanoid'
import hotCity from '../../components/home/hotCity.vue'
export default {
    name:"home",
    components:{headTop, currentCity, hotCity, currentCity},
    data(){
      return{
        cities:[
          {id:nanoid(), city:"上海"},
          {id:nanoid(), city:"哈尔滨"},
          {id:nanoid(), city:"南京"},
          {id:nanoid(), city:"广州"},
          {id:nanoid(), city:"厦门"},
          {id:nanoid(), city:"杭州"},
          {id:nanoid(), city:"天津"},
          {id:nanoid(), city:"青岛"},
        ]
      }
    }
}
</script>

<style>

</style>