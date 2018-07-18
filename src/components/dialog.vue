<template lang="html">
  <div class="warp">
    <div class="cover" @click="CloseDialog" ></div>
    <div class="d-content">
      <p class="close" @click="CloseDialog"> X </p>
      <hr>
      <slot>empty</slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    CloseDialog() {
      this.$emit('on-close');
    }
  }
}
</script>

<style lang="css" scoped>
  .cover{
    position: fixed;
    width: 100%;
    min-height: 100%;
    background-color: #000;
    opacity: .3;
    filter: alpha(opacity:30);
    left: 0;
    top: 0;
  }
  .d-content{
    width: 300px;
    padding: 20px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -250px;
    background-color: #fff;
    border-radius: 5px;
  }
  .close{
    text-align: right;
    cursor: pointer;
  }
  hr{
    width: 100%;
    height: 1px;
    color: #111;
  }
</style>
