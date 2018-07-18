<template lang="html">
  <div class="footer">
    <ul>
        <li v-for="item in items" class="item">
          <router-link :to="{ path: `${item.getRoute}`, name: '', params: {} }" class="Taga" active-class="active">
            <div class="icon" :class="'icon-' + item.id"></div>
            <div class="name">
              {{item.name}}
            </div>
        </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "../assets/logo.png",
          id:"index",
          getRoute: "/",
          name: "商场"
        },
        {
          image: "../assets/logo.png",
          id:"sort",
          getRoute: "sort",
          name: "分类"
        },
        {
          image: "../assets/logo.png",
          id:"shopingcart",
          getRoute:"shopingcart",
          name: "购物车"
        },
        {
          image: "../assets/logo.png",
          id:"mine",
          getRoute: "mine",
          name: "我"
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  ul{
    width: 100%;
    list-style-type: none;
    padding: 5px 0px;
    background-color: #ede6e6;
    overflow: auto;
  }
  .item{
    width: 25%;
    float: left;
    text-align: center;
    color: #298;
  }
  .Taga{
    text-decoration: none;
    color: #298;
  }
  .icon{
    width: 20px;
    height: 20px;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto;
  }
  .on{
    background-color: #872;
    color: #fff;
  }
  .icon-index{
    background-image: url(../assets/logo.png);
  }
  .icon-sort{
    background-image: url(../assets/logo.png);
  }
  .icon-shopingcart{
    background-image: url(../assets/logo.png);
  }
  .icon-mine{
    background-image: url(../assets/logo.png);
  }
</style>
