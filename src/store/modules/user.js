import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// 状态
const state = {
  token: getToken() // 设置token为共享状态
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
  }
}
const actions = {
  async login(context, data) {
    // 调用api接口
    const result = await login(data) // 拿到token
    console.log(result)
    // axios默认加了一层data
    // 如果为true 表示登陆成功
    context.commit('setToken', result) // 设置token
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
