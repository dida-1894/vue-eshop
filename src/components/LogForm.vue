<template lang="html">
  <div class="from">
    <input type="text" v-model="UserName" placeholder="UserName" name="UserName">
    <p v-if="NameError.ErroStatus">{{NameError.ErroText}}</p>
    <input type="password" placeholder="PassWord" v-model="PassWord" name="PassWord">
    <button type="button" class="btn" @click="OnLogin">提交</button>
    <p>{{errorText}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      UserName: "",
      PassWord: "",
      errorText: ""
    }
  },
  computed: {
    NameError(){
      let ErroText,ErroStatus;
        if (!/^[1][34578][0-9]{9}$/.test(this.UserName)) {
        ErroStatus = true;
        ErroText = "用户名格式错误";
      } else {
        ErroStatus = false;
      }
      if (!this.UserFlag) {
        ErroText = "";
        this.UserFlag = true;
      }
      return {
        ErroText,
        ErroStatus
      }
    },
    PWError(){

    }
  },
  methods: {
    OnLogin(){
      if (this.NameError.ErroStatus) {
        this.errorText = '部分选项未通过'
      } else {
        this.$emit('has-log');
        console.log("tijiao");
      };
    }
  }
}
</script>

<style lang="css">
  .from{
    text-align: center;
  }
  .from input{
    margin: 10px 0px;
    width: 100%;
    border: 1px #e9e9e9 solid;
    border-radius: 3px;
  }
  .btn{
    padding: 10px;
    color: #fff;
    background-color: #298;
    display: block;
    border: 0px;
    border-radius: 3px;
    margin: 0 auto;

  }
</style>
