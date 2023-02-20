<template>
        <el-form inline ref="form" class="login-container" :rules="rules" :model="form">
            <h3 class="login_title">系统登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" type="text"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
            
        </el-form>
        
</template>

<script>
import Cookie from 'js-cookie'
import {getMenu} from './../api/index'
export default {
      data(){
        return{
          form:{
            username:'',
            password:'',
          },
          rules:{
            username:[
              {required:true, trigger:'blur',message:'请输入用户名'}
            ],
            password:[
              {required:true, trigger:'blur',message:'请输入密码'}
            ]
          }
        }
      },
      methods:{
          onSubmit(){
           
            this.$refs.form.validate(valid =>{
              if(valid) {
                getMenu(this.form).then(({data})=>{
                  if(data.code === 20000){
                    Cookie.set('token',data.data.token)
                      this.$store.commit('setMenu',data.data.menu)
                      this.$store.commit('addMenu',this.$router)
                      this.$router.push('/home')
                  }else{
                    this.$message.error(data.data.message)
                  }
                })
              }
            })
            
          }
      }
}
</script>

<style lang="less" scoped>

.login-container {
  h3 {
    text-align: center;
    margin: 0  0  20px 0;
  }
  width: 350px;
  border: 1px solid white;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.5)  ;
  box-sizing: border-box;
  .el-button {
    margin-left:6.5rem ;
  }
}
</style>

