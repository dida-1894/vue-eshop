<template lang="html">
<div class="">
  <!-- <p>{{proNum}}</p> -->
  <!-- <p>{{product}}</p> -->
  <div class="dte-img">
    <img :src="product.src" alt="">
  </div>
  <h1 class="dte-name">{{product.name}}</h1>
  <div class="dte-price"> $ {{product.price}}</div>
  <div class="det-bottom">
    <ul>
      <li class="one">联系客服</li>
      <li class="one">收藏</li>
      <li class="det-bot-btn" @click="AddSCar">加入购物车</li>
      <li class="det-bot-btn">立即购买</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return{
      product: {}
    }
  },
  computed: {
    proNum(){
      return this.$route.params.product
    },
    pro(){
    }
  },
  methods: {
    AddSCar(){
      console.log(this.proNum);
      this.$emit('add-to-car',this.proNum)
    }
  },
  mounted() {
    this.$axios.get('api/items')
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if(this.proNum == res.data[i].id){
          this.product = res.data[i];
        }
      }
      console.log(this.product);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style lang="css" scoped>
.det-bottom{
  position: fixed;
  bottom: 0px;
  z-index: 99;
  width: 100%;
}
.det-bottom ul{
  overflow: hidden;
  height: 50px;
  width: 100%;
}
.det-bottom ul li{
  float: left;
}
.one{
  width: 20%;
  color: #ccc;
  font-size: 12px;
  /* padding: 0px 10px; */
  text-align: center;
  height: 100%;
  background-color: #fff;
  line-height: 6;
}
.det-bot-btn{
  width: 30%;
  text-align: center;
  padding: 17px 0px;
  font-weight: bold;
  background-color: #298;
  color: #fff;
}
.dte-img{
  width: 100%;
  height: 200px;
  overflow:hidden;
}
.dte-img img{
  width: 100%;
  height: auto;
}
.dte-name{
  padding: 10px 5px;
  font-size: 18px;
  font-weight: bold;
}
.dte-price{
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bolder;
  color: #298;
}
</style>
