<template>
    <div class="container">
        <!-- 头部 -->
        <div class="goodHead">
            <el-button type="primary"  @click="handlerAdd()">+新增</el-button>
        </div>  
        <el-table
      :data="tableData"
      height="90%"
      style="width: 100%">
            <el-table-column
                prop="name"
                label="商品名"
                width="200">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格"
                width="200">
            </el-table-column>
            <el-table-column
                prop="num"
                label="数量"
                width="200">
            </el-table-column>
            <el-table-column
                label="操作"
                width="200"
                >
                <template slot-scope="scope">
                    <el-button @click="handlerEdit(scope.row)" type="warning">修改</el-button>
                    <el-button @click="handleRemove(scope.row)" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
            <!-- 对话框 -->
            <el-dialog title="新增商品" :visible.sync="dialogFormVisible"  :before-close="handlerOff">
                <el-form :rules="rules" :model="form" ref="form" label-width="80px">
                    <el-form-item label="商品名" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入商品名"></el-input>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input v-model="form.price" autocomplete="off" placeholder="请输入价格"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" prop="num">
                        <el-input v-model="form.num" autocomplete="off" placeholder="请输入数量"></el-input>
                    </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handlerOff">取 消</el-button>
                <el-button type="primary" @click="handlerSub">确 定</el-button>
            </div>
            </el-dialog>
    </div>
</template>

<script>
    import {getGoodList,addGood,editGood,delGood} from '@/api/good';
    export default{
        data(){
            return{
                tableData:[
                ],
                dialogFormVisible:false,
                form:{
                    name:'',
                    price:'',
                    num:'',
                },
                userForm:{
                    name:''
                },
                tableF:false, 
                rules:{
                    name: [
                        {required:true,message:'请输入商品名'}   
                    ],
                    price: [
                        {required:true,message:'请输入价格'}   
                    ],
                    num:[
                        {required:true,message:'请输入数量'}
                    ]
                   
                    
                },
            }
        },
        methods:{
            getList(){
                getGoodList().then(({data}) =>{
                    this.tableData = JSON.parse(JSON.stringify(data.list))
                })
            },
            handlerAdd(){
                this.tableF = false
                this.dialogFormVisible = true
            },
            handlerOff(){
                this.$refs.form.resetFields();
                this.dialogFormVisible=false
            },
            handlerSub(){
               this.$refs.form.validate((valid) => {
                    if (valid) {
                      if(this.tableF){
                       editGood(this.form).then(()=>{
                            this.getList()
                       })
                      }else{
                        addGood(this.form).then(()=>{
                            this.getList()
                        })
                      }
                      this.$refs.form.resetFields();
                      this.dialogFormVisible=false
                    } 
                })
            },
            handlerEdit(row){
                this.tableF=true
                this.dialogFormVisible=true
                this.form = JSON.parse(JSON.stringify(row))     
            },
            handleRemove(row){
                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                let that = this
                                delGood({id:row.id}).then(()=>{
                                    this.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                    that.getList()
                                })
                                
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                    });          
                            });
            }

        },
        mounted(){
            this.getList()
        }
    }
</script>

<style lang="less" scoped>
    .container {
        padding: 0;
        margin: 0;
        height: 80%;
        .goodHead{
            margin-bottom: 20px;
        }
    }
</style>