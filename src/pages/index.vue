<template lang="html">
  <div>
    <slide-show :slides="slides"></slide-show>
    <search-box></search-box>
    <div class="product">
      <show-product :product = "product"></show-product>
    </div>
  </div>
</template>

<script>
import SlideShow from "../components/SlideShow"
import SearchBox from "../components/SearchBox"
import ShowProduct from '../components/ShowProdect'
export default {
  components: {
    SlideShow,
    SearchBox,
    ShowProduct
  },
  data() {
    return {
      product: [],
      slides: [
        {
          src: require("../assets/slide1.jpg"),
          herf: '#'
        },
        {
          src: require("../assets/slide2.jpg"),
          herf: '#'
        },
        {
          src: require("../assets/slide3.jpg"),
          herf: '#'
        },
        {
          src: require("../assets/slide4.jpg"),
          herf: '#'
        }
      ]
    }
  },
  mounted(){
    this.$axios.get('api/product')
    .then((res) => {
      console.log(res.data.product);
      this.product = res.data.product;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style lang="css">
</style>
