<template>
    <div class="header-content">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <el-breadcrumb   separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
            <span class="el-dropdown-link">
                <img class="user" src="./../assets/image/header.jpg" alt="头像" title="头像">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item command="cancel">退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Cookies from 'js-cookie';
    export default {
        data(){
            return{

            }
        },
        methods :{
            handleMenu(){
                this.$store.commit('collapeMenu')
            },
            handleClick(command){
                if(command === 'cancel'){
                    Cookies.remove('token')
                    Cookies.remove('menu')
                    this.$store.commit('removeTab')
                    this.$router.push('/login')
                }
            },
        },
        computed:{
            ...mapState({
                tags:state => state.tab.tabList
            })
        }
    }
</script>
<style lang="less" scoped>
    .header-content{
        background-color: #333;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // .text{
        //     color:white;
        //     font-size: 14px;
        //     margin-left: 20px;
        // }
        .l-content  {
            display: flex;
            align-items: center;
            /deep/.el-breadcrumb__item {
                &:first-child{
                    margin-left: 20px;
                }
                .el-breadcrumb__inner {
                    font-weight:normal;
                    &.is-link {
                        color: #666;
                    }
                }
                &:last-child{
                    .el-breadcrumb__inner {
                        color: white;
                    }
                }
            }
        }
        .r-content {
            .user{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
           
        }
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
  }
  .el-icon-arrow-down {
        font-size: 12px;
    }
</style>