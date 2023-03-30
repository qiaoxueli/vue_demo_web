<template>
  <div id="index">
    <div class="register">

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input  v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="new-password"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="regist('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      
    </el-form>

  </div>
</div>


</template>

<style>
@import '../../styles/hello.css'

</style>

<script>
import {register} from '../../api/login'
import {removeToken} from "../../utils/auth"
import router from "../../router/index"

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
      var checkPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不能为空'));
      }else {
              callback();
        }
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
          phone: '',
          age: '',
          email: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
      };

    },

    methods: {
      /* 注册 */
      regist(formName) {
        removeToken();
        this.$refs[formName].validate((valid) => {
          if (valid) {
            register(this.ruleForm.age, this.ruleForm.email).then((response) => {
            const resp = response.data;
            if (response.code === "200") {
           console.log("注册成功")
           router.push({name:'login'});
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

