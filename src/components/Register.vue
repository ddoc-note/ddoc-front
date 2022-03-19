<template>
  <div class="form-wrapper">
    <el-form :model="form" size="large" class="form">
      <h2>用户注册</h2>
      <p style="color: #ff8d8d">{{form.msg}}</p>
      <el-form-item>
        <el-input v-model="form.account" type="input" placeholder="请输入登陆账户"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.nickName" type="input" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item>
        <el-button class="register" type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {reactive, ref} from 'vue';
  import axios from 'axios';
  import {useRouter} from 'vue-router';

  export default {
    name: 'Register',
    setup() {
      const router = useRouter();

      let form = reactive({
        account: '',
        nickName: '',
        password: '',
        msg: '',
      });

      function register() {
        axios.post(`/api/user/${form.account}/${form.nickName}/${form.password}`).then(
            response => {
              if (response.data.result === 'SUCCESS') {
                router.push('/');
              }
              if (response.data.result === 'FAILED') {
                form.msg = response.data.message;
              }
            },
            error => {
              form.msg = error.message;
            }
        );
      }

      return {
        form,
        register
      };
    }
  };
</script>

<style scoped>
  .form-wrapper {
    height: 100%;
    width: 100%;
    background-color: #ececec;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 30px;
  }

  .form {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 10px;
    margin: 0 auto;
    width: 25%;
    min-width: 300px;
    padding: 30px 30px 15px 30px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.9);
  }

  .register {
    width: 100%;
    border-radius: 4px;
  }
</style>