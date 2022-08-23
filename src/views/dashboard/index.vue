<template>
  <div class="dashboard-container">
    <div class="app-container">name: {{ name }}</div>
    <uploadexcel />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',

  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scope>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
