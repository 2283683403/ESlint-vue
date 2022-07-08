import request from '../utils/request'

// 登录
const login = (data) => {
  return request({ url: '/users/login', method: 'post', data })
}
// 菜单栏
const menu = (data) => {
  return request({ url: '/menu/list', method: 'get', data })
}

export default {
  login,
  menu
}
