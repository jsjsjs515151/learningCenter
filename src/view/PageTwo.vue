<template>
    <div style="display: flex; justify-content: center; align-items: center;">
        <el-card class="box-card">
            <div v-for="o in items " :key="o" class="item">
                <p><span>{{ o.item }}</span>:{{ o.value }}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                items:[
                    {item:'名称',value:'袁先生'},
                    {item:'学校',value:'广东交通职业技术学院'},
                    {item:'专业',value:'软件技术'},
                    {item:'权限',value:'超级管理员'},
                ],
            }
        }
    }
</script>

<style lang="less" scoped>
    .box-card{
        width: 400px;
        height: 300px;
        line-height: 40px;
       & span{
            font-weight: 600;
            font-size: 1.2;
        }
        .item{
            text-align: center;
           
        }
       
    }
</style>