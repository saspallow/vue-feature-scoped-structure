const fetchUsersInfo = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: '10001',
        firstName: 'John',
        lastName: 'Wick'
      },
      {
        id: '10002',
        firstName: 'Tony',
        lastName: 'Stark'
      }
    ])
  }, 500)
})

export default {
  fetchUsersInfo
}
