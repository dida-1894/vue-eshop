<template lang="html">
  <div class="" @add-to-car="GotToCar(op)">
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: " i am shopingCart "
    }
  },
  methods: {
    GotToCar(op){
      console.log(op);
    }
  },
  mounted(){
    // this.GotToCar(op);
  }
}
</script>

<style lang="css">
</style>
