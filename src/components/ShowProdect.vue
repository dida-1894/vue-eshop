<template lang="html">
  <div class="">
      <div class="p-warp" v-for="item in product">
        <div class="p-title">
          <img :src="item.tinyImg" alt="">
          <div class="p-name">  {{item.proName}}   </div>
        </div>
        <div class="p-item" v-for="li in item.items">
          <router-link :to="{ path: `/detail/${li.id}` }" tag='div' >
            <div class="p-i-pic">
              <img :src="li.src" alt="">
            </div>
            <div class="p-i-name">
              {{li.name}}
            </div>
            <div class="p-i-price">
              ${{li.price}}
            </div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Array,
      default: "失败了"
    }
  },
  mounted() {
    // console.log(this.product);
  },
  methods: {
    ToParam(param){
      console.log("ShowProdect");
      this.$router.push({
        param:{
          product:param
        }
      })
    },
    std(opt) {
      console.log(opt);
      this.$router.push({
        params: {
          product: opt
        }
      })
    }
  }
}
</script>

<style lang="css">
  .p-title{
    text-align: center;
  }
  .p-warp{
    width: 100%;
    overflow: hidden;
  }
  .p-title img{
    width: 20px;
    height: 20px;
  }
  .p-name{
    margin: 20px;
    display: inline-block;
    color: #3f3e3e;
  }
  .p-item{
    width: 33.33%;
    float: left;
    text-align: center;
  }
  .p-item .p-i-pic{
    width: 90%;
    height: 120px;
    overflow: hidden;
    margin: 0 auto;
  }
  .p-i-name{
    color: #aaa;
    padding: 4px 0px;
  }
  .p-i-price{
    color: #ed7676;
    padding: 10px 0px 5px;
  }
  .p-i-pic img{
    width: 100%;
    height: auto;
  }
</style>
