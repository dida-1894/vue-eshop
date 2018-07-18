<template lang="html">
  <div>
    <div class="user-intro">
      <div class="aver">
        <img :src="User.aver" v-if="IsLog" alt="">
      </div>
      <div class="identity" v-if="!IsLog">
        <button type="button" name="button" @click="ShowLog">登陆</button>
        <button type="button" name="button" @click="ShowReg">注册</button>
      </div>
      <div v-if="IsLog" class="user">
        <p>{{User.UserName}}</p>
        <br>
        <p>{{User.UserId}}</p>
      </div>
    </div>
    <my-dialog v-if="RegDialog" @on-close="CloseReg">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog v-if="LogDialog" @on-close="CloseLog">
      <log-form @has-log="Login"></log-form>
    </my-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import Dialog from '../components/dialog'
import RegForm from "../components/RegForm"
import LogForm from "../components/LogForm"
export default {
  components: {
    MyDialog: Dialog,
    RegForm,
    LogForm
  },
  data() {
    return {
      RegDialog: false,
      LogDialog: false,
      IsLog: false,
      User:{
        "UserName": "Alison",
        "UserId": 13879935351,
        "aver": require("../assets/aver.jpg")
      }
    }
  },
  methods: {
    ShowLog(){
      this.LogDialog = true
    },
    ShowReg(){
      return this.RegDialog = true
    },
    CloseLog(){
      this.LogDialog = false
    },
    CloseReg() {
      this.RegDialog = false
    },
    Login() {
      this.IsLog = true;
      console.log(this.IsLog);
      this.CloseLog();
    },
  },
  mounted() {
    console.log("909");
  }
}
</script>

<style lang="css" scoped>
  .user-intro{
    /* width: 100%; */
    height: 200px;
    background-image: url(../assets/user-bg.jpg);
    /* background-position: center; */
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 1px;
  }
  .aver{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px #fff solid;
    margin: 50px 20px 0px 50px;
    display: inline-block;
    float: left;
    overflow: hidden;
    background-color: #e9e9e9;
  }
  .aver img{
    width: 100%;
    height: auto;
  }
  .identity{
    display: inline-block;
    margin-top: 90px;
    float: left;
  }
  .identity button{
    padding: 5px 10px;
    margin: -10px 10px;
    background-color: rgba(255, 0, 0, 0);
    border: 2px #fff solid;
    color: #fff;
    font-weight: 400;
    border-radius: 3px;
  }
  .user{
    margin-top: 70px;
    font-weight: 400;
    color: #fff;
  }
</style>
