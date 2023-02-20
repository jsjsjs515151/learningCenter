<template>
  <div class="tabs">
    <el-tag
        class="tag"
        v-for="(item,index) in tags"
        :key="item.path"
        :closable="item.name!= 'home'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)"
        size="mini"
        :effect="$route.name === item.name ? 'dark':'plain'">
        {{ item.label }}
  </el-tag>
                <!-- path:"/",
                name:"home",
                label:"首页",
                icon:"s-home",
                url:"Home/Home", -->

  </div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex';
export default {
    data(){
            return{

            }
        },
        computed:{
            ...mapState({
                tags:state => state.tab.tabList
            })
        },
        methods:{
            ...mapMutations(['closeTag']),
            changeMenu(item){
                this.$router.push({name:item.name})
            },
            handleClose(item,index){
                this.closeTag(item)
                const length = this.tags.length 
                if(item.name !==this.$route.name){
                    return
                }
                if(index === length){
                    this.$router.push({name:this.tags[index-1].name})
                }else{
                    this.$router.push({
                        name:this.tags[index].name
                    })
                }
            }
        }


}
</script>

<style lang="less" scoped>
    .tabs{
        display: flex;
        align-items: center;
        height: 40px;
        .tag {
            margin-left: 15px;
            cursor: pointer;   
        }
    }
</style>