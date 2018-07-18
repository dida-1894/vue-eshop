<template lang="html">
    <div class="search-box">
      <input type="text" placeholder="搜索" name="" value="">
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .search-box{
    width: calc(100% - 20px);
    padding: 10px;
    background-color: #f9f2f2;
  }
  .search-box input{
    text-align: center;
    border: 0px;
    border-radius: 3px;
    width: 100%;
    height: 30px;
  }
</style>
