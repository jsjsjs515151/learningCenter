<template>
<div>
    <el-container>
        <el-aside width="auto">
            <!-- <h2>后台管理系统</h2> -->
            <CommonAside/>
        </el-aside>
        <el-container>
        <el-header>
            <CommonHeader />
        </el-header>
        <CommonTag/>
        <el-main>
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container>
</div>



</template>

<script>
import CommonAside from './../components/CommonAside.vue';
import CommonHeader from './../components/CommonHeader.vue';
import CommonTag from './../components/CommonTag.vue';
    export default {
        data(){
            return{}
        },
        components:{
            CommonAside,
            CommonHeader,
            CommonTag,
        }
    }
</script>
<style lang="less" scoped>
// * {
//     margin: 0;
//     padding: 0;
// }
.el-header{
    background-color: #333;
    height: 60px;
    padding: 0 20px;
}
</style>