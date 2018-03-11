<template>
  <ul>
    <UserListElement :info="userInfo" v-for="userInfo in usersInfo" :key="userInfo.id"></UserListElement>
  </ul>
</template>

<script>
import UserListElement from './UserListElement'

export default {
  components: {
    UserListElement
  },
  props: {
    usersInfo: {
      type: Array
    }
  }
}
</script>
