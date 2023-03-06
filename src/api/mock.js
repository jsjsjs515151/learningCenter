import mockjs from "mockjs"
import homeApi from './mockServeData/home'
import user from "./mockServeData/user"
import permission from "./mockServeData/permission"
import good from "./mockServeData/good"
mockjs.mock('/api/home/getData',homeApi.getStatisticalData())

mockjs.mock('/api/user/add','post',user.createUser)

mockjs.mock('/api/user/edit','post',user.updateUser)

mockjs.mock('/api/user/del','post',user.deleteUser)

mockjs.mock(/api\/user\/getUser/,user.getUserList)

mockjs.mock(/api\/permission\/getMenu/,'post',permission.getMenu)


//商品拦截api
mockjs.mock('/api/good/add','post',good.createGood)

mockjs.mock('/api/good/edit','post',good.updateGood)

mockjs.mock('/api/good/del','post',good.deleteGood)

mockjs.mock(/api\/good\/getGood/,good.getGoodList)

