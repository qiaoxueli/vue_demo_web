<template>
  <div id="index">
  <div class="login register">

  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <h3 class="loginTitle">
       登录
     </h3>
  <el-form-item label="用户名" prop="name">
    <el-input  v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="new-password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <el-button @click="gotolink()">注册账号</el-button>
    
  </el-form-item>
</el-form>
</div>
</div>


</template>

<style>
@import '../styles/hello.css'

</style>

<script>
import {login} from '../api/login'
import {setToken,removeToken} from "../utils/auth"
import router from "../router/index"



export default {
    data() {

      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
              callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };

    },

    methods: {
      gotolink() {
        router.push({name:'register'});
      },
      /* 登录 */
      submitForm(formName) {
        removeToken();
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm.name)
            login(this.ruleForm.name, this.ruleForm.pass).then((response) => {
            const resp = response.data;
            if (response.code === "200") {
              setToken(resp)
           console.log("success???")
            } else {
              this.$message({
                message: resp.message,
                type: "warning",
              });
            }
          });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

