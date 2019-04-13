<template>
  <div class="me-setting">
    <div>
      <MeCommonCell left-icon="itlike-2" left-title="免密支付"/>
      <MeCommonCell left-icon="itlike-3" left-title="免拼单支付" :clickCell="dealCellClick"/>
      <MeCommonCell left-icon="itlike-1" left-title="消息接收设置" right-title="接受" right-title-color="#02c6dc"/>
    </div>
    <div style="margin-top: 10px;">
      <MeCommonCell left-icon="itlike-5" left-title="免密支付" :clickCell="dealCellClick"/>
      <MeCommonCell left-icon="itlike-4" left-title="免拼单支付"/>
    </div>
    <div style="margin-top: 10px;">
      <MeCommonCell left-icon="itlike-1" left-title="免拼单支付"/>
    </div>
    <div class="logout" @click="dealLogout">退出登陆</div>
  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell'
  import {Toast, MessageBox} from 'mint-ui'
  import {mapActions} from 'vuex'
  export default {
    name: "MeSetting",
    components: {
      MeCommonCell
    },
    methods: {
      ...mapActions(['Logout']),
      dealCellClick(props) {
        Toast('点击了' + props)
      },
      dealLogout () {
        MessageBox.confirm('确定退出登陆吗？').then(action => {
          if (action === 'confirm') {
            // 退出登陆
            let result = this.Logout({})
            // 回到主界面
            this.$router.replace('home')
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .logout
    display: flex
    align-items: center
    justify-content center
    width 100%
    height 44px
    margin-top 10px
    background #fff
</style>
