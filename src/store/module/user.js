import { setToken, getToken } from '../../utils/storeage'
export default {
  namespaced: true,
  state: {
    token: getToken('token') || '',
    userEmail: getToken('userEmail') || '',
    userName: getToken('userName') || '',
    menu: getToken('menu') || ''
  },
  mutations: {
    setToken(state, data) {
      state.token = data.token
      state.userEmail = data.userEmail
      state.userName = data.userName
      setToken('token', state.token)
      setToken('userEmail', state.userEmail)
      setToken('userName', state.userName)
    },
    setMenu(state, data) {
      state.menu = data
      setToken('menu', data)
    }
  },
  actions: {
    getUser({ commit }, data) {
      commit('setToken', data)
    },
    layout({ commit }) {
      commit('setToken', '')
      localStorage.removeItem('token')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userName')
    },
    setMenu({ commit }, data) {
      commit('setMenu', data)
    }
  }
}
