import store from './store'
import router from './router'
const goList = ['/login']

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (goList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
