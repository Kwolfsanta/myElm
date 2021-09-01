<template>
  <div class="hot-city">
      <h4>热门城市</h4>
      <ul>
          <li v-for="c in cities" :key=c.id>{{c.city}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        cities:{
            type:Array,
            required:true
        }
    },
    mounted(){
        console.log(this.cities);
    }
}
</script>

<style scoped>
h4{
    border-bottom:1px solid #ccc;
    font-size: 0.85rem;
    height: 2rem;
    line-height: 2rem;
    text-align: left;
    padding-left:1rem;
    color:#555;
    font-weight: 400;
}
.hot-city{
    margin-top:2rem;
    border-top: 1px solid #ccc;
    box-sizing:border-box;
    background-color: #fff;
    font-size: 0.9rem;
    color:#319eee;
}
ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between
}
li{
    /* float: left; */  
    /* border:1px solid #aaa; */
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    /* border-top:1px solid #aaa; */
    width: 25%;
    height: 2.5rem;
    line-height: 2.5rem;
    box-sizing:border-box;
}
        li:nth-of-type(4n){
            border-right: none;
        }
</style>