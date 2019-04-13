<template>
  <div class="me">
    <div v-if="userInfo.id">
      <MeTop/>
    </div>
    <SelectLogin v-else/>
  </div>
</template>

<script>
  import SelectLogin from './Login/SelectLogin'
  import MeTop from './MeTop'
  import {mapState} from 'vuex'
  export default {
    name: "Me",
    components: {
      SelectLogin,
      MeTop
    },
    computed: {
      ...mapState(['userInfo'])
    }
  }
</script>

<style scoped lang="stylus">
  div
    width: 100%
    height: 100%
</style>
