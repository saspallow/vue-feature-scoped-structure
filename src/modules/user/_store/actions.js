import api from '../_api'

const getUsersInfo = (context) => {
  api.fetchUsersInfo
    .then((response) => {
      context.commit('USERSINFO_UPDATED', response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default {
  getUsersInfo
}
