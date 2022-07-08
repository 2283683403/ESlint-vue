const getters = {
  token: (state) => state.user.token,
  userEmail: (state) => state.user.userEmail,
  userName: (state) => state.user.userName,
  menu: (state) => state.user.menu
}
export default getters
