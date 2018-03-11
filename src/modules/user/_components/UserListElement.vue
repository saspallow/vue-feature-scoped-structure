<template>
  <li>
    <span>{{ info.id }} </span>
    <span>{{ info.firstName }} </span>
    <span>{{ info.lastName }}</span>
  </li>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  }
}
</script>
