<template>
    <div>
        <el-row>
                <el-col :span="8" style="padding-right: 10px;">
                    <el-card class="box-card">
                       <div class="user">
                            <img src="./../assets/image/header.jpg" alt="头像" >
                            <div class="userInfo">
                                <p class="name">Admin</p>
                                <p class="access">超级管理员</p>
                            </div>
                       </div>
                       <div class="loginInfo">
                            <p>上次登录时间：<span>2023-1-1</span></p>
                            <p>上次登录地点：<span>广州</span></p>
                       </div>
                    </el-card>
                    <el-card style="margin-top: 10px;height: 270px;">
                        <el-table
                            :data="tableData"
                            style="width: 100%;
                            height: auto;"
                            size="mini">
                                <el-table-column  class="table-font" v-for="(val,key) in tableLabel" :prop="key" :label="val" :key="key" />
                        </el-table>
                    </el-card>
                </el-col>
                <el-col :span="16">
                    <div class="num">
                        <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex' ,padding:0}">
                            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                            <div class="detail">
                                <p class="price">{{ item.value }}</p>
                                <p class="desc">{{ item.name }}</p>
                            </div>
                        </el-card>
                    </div>
                    <el-card style="height: 180px;">
                        <div ref="echarts1" style="height: 180px;">

                        </div>
                    </el-card>
                    <div class="graph">
                        <el-card>
                            <div ref="echarts2" >

                            </div>
                        </el-card>
                        <el-card>
                            <div  ref="echarts3">

                            </div>
                        </el-card>
                    </div>    
                </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getData} from '@/api';
    import * as echarts from 'echarts';
    export default{
        data(){
            return{
                tableData: [
                  
                ],
                tableLabel: {
                    name: '课程',
                    todayBuy: '今日购买',
                    monthBuy: '本月购买',
                    totalBuy: '总购买', 
                },
                countData: [
                    {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                    },
                    {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                    },
                    {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    },
                    {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                    },
                    {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                    },
                    {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    },
                 ],
                

            }
        },
        mounted(){
            getData().then(({data})=>{
                const {tableData} = data.data
                this.tableData = tableData
                const echarts1= echarts.init(this.$refs.echarts1) 
            
                var echarts1Option = {}

                    const {orderData,userData,videoData} = data.data
                    const xAxis = Object.keys(orderData.data[0])
                    const xAxisData = {
                        data:xAxis
                    }
                    const xAxisDate = {
                        data:orderData.date}
                    echarts1Option.xAxis = xAxisDate
                    echarts1Option.yAxis = { }
                    echarts1Option.legend =xAxisData
                    echarts1Option.series = []
                    xAxis.forEach(key =>{
                        echarts1Option.series.push({
                            name: key,
                            data: orderData.data.map(item => item[key]),
                            type:'line'
                        })
                        
                    })
                    echarts1.setOption(echarts1Option)

                    const echarts2= echarts.init(this.$refs.echarts2)
                    const echarts2Option ={
                    
                            legend: {
                                textStyle: {
                                color:"#333",
                                },
                                data:[
                                {
                                   name:'新增用户',
                                   type: 'bar',
                                   data: userData.map(item=>item.new)
                                },
                                {
                                    name:'活跃用户',
                                    type: 'bar',
                                    data: userData.map(item =>item.active)
                                },
                                ]
                        
                            },
                            grid: {
                                left:"10%",
                            },
                            xAxis: {
                                type:"category",
                                data:userData.map(item => item.date),
                                axisLine: {
                                    lineStyle: {
                                        color: "#17b3a3",
                                    },
                                },
                            },
                            yAxis: [
                                {
                                type: "value",
                                axisLine:{
                                    lineStyle:{
                                        color:"#17b3a3",
                                    },
                                },
                            },
                              
                            
                            ],
                            tooltip: {
                                trigger: "axis",
                            },
                            color: ["#2ec7c9","#b6a2de"],
                            series: [
                                {
                                   name:'新增用户',
                                   type: 'bar',
                                   data: userData.map(item=>item.new)
                                },
                                {
                                    name:'活跃用户',
                                    type: 'bar',
                                    data: userData.map(item =>item.active)
                                },

                            ], 
                    }
                    echarts2.setOption(echarts2Option)
                    const echarts3 = echarts.init(this.$refs.echarts3)
                    echarts3.resize({
                        height:150
                    })
                    const echarts3Option = {
                        tooltip: {
                            trigger: "item",
                        },
                        grid:{
                            left:"20%",
                            top:"-20%"
                        },
                        color: [
                            "#0f78f4",
                            "#dd536b",
                            "#9462e5",
                            "#a6a6a6",
                            "#e1bb22",
                            "#39c362",
                            "#3ed1cf",
                        ],
                        series: [
                            {
                                type:'pie',
                                data:[]
                            }
                        ]
                    }
                    videoData.forEach(value =>{
                        echarts3Option.series[0].data.push({
                            name:value.name,
                            value:value.value
                        })
                    })
                    echarts3.setOption(echarts3Option)
                    


            })

           
        }
    }
</script>

<style lang="less" scoped>

 .el-card__body{
    padding: 10px;
 }
    .user {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        img {
            margin-right: 40px;
            height: 80px;
            width: 80px;
            border-radius: 50%;
            border: 1px solid black;
        }

        .userInfo {
        
        .name {
            font-size: 24px;
            margin-bottom:10px ;
        }
    }
        
}
    .login-info {
        p {
            line-height: 24px;
            font-size: 12px;
            color: #999999;
            span {
                color: #666666;
                margin-right: 60px;
            }
        }
    }
.num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .icon {
        width: 42px;
        height: 42px;
        font-size: 20px;
        color: white;
        text-align: center;
        line-height: 42px;
    }
    .detail {
        display: flex;
        flex-direction:column ;
        justify-content: center;
        margin-left: 15px;
        .price {
            font-size: 16px;
            margin-bottom: 10px;
            line-height: 16px;
            height: 16px;
        }
        .desc {
            font-size: 12px;
            color: #999;
            text-align: center;
        }
    }
    .el-card {
        width: 32%;
        margin-bottom: 10px;
    }
}  
.graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
        width: 48%;
        height: 170px;
        padding: 0;

        div {
            margin: 0;
            height: 170px;
        }
    }
}  


</style>