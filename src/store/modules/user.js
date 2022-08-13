import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
// import { userInfo } from 'os'
// 状态
const state = {
  token: getToken(), // 设置token为共享状态
  userInfo: {} // 这里定义一个空对象
}
const mutations = {
  setToken(state, token) {
    state.token = token // 将数据设置给vuex
    // 同步给缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 将vuex的数据置空
    removeToken() // 同步到缓存
  },
  setUserInfo(state, result) {
    // 更新一个对象
    state.userInfo = result // 这样是响应式
    // state.userInfo = { ...result } // 这样也是浅拷贝  属于浅拷贝
    // state.userInfo['username'] = result // 这样才不是响应式
  },
  removeUserInfo(state, result) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    // 调用api接口

    const result = await login(data) // 拿到token
    // console.log(result)
    // axios默认加了一层data
    // 如果为true 表示登陆成功
    context.commit('setToken', result) // 设置token
    setTimeStamp() // 设置当前的时间戳
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    // 获取用户的详情 用户的详情数据
    const baseInfo = await getUserDetailById(result.userId)
    // eslint-disable-next-line no-unused-vars
    const baseResult = { ...result, ...baseInfo } // 将两个接口合并
    context.commit('setUserInfo', baseResult) // 提交到mutations
    return result // 这里为什么要return那？ 这里是给我们后期做权限的时候 留下的伏笔
  },
  // 登出操作
  logout(context) {
    // 删除token
    context.commit('removeToken')
    // 删除用户资料
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
