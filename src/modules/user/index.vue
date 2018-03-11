<template>
  <UserList :usersInfo="usersInfo"></UserList>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './_store'
import UserList from './_components/UserList'

export default {
  name: 'UserInfoModule',
  components: {
    UserList
  },
  computed: {
    ...mapGetters({
      usersInfo: '$_user/usersInfo'
    })
  },
  created () {
    this.$store.registerModule('$_user', store)
  },
  mounted () {
    this.$store.dispatch('$_user/getUsersInfo')
  }
}
</script>
