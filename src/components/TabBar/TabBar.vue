<template>
  <div class="bottom-tab">
    <span class="tab-item" @click="switchTo('/home')">
        <img :src="$route.path.includes('/home') ? tabBarImgUrl[0].selected : tabBarImgUrl[0].normal" alt="">
        <span :class="{on: $route.path.includes('/home')}">首页</span>
      </span>
    <span class="tab-item" @click="switchTo('/recommend')">
        <img :src="$route.path.includes('/recommend') ? tabBarImgUrl[1].selected : tabBarImgUrl[1].normal" alt="">
        <span :class="{on: $route.path.includes('/recommend')}">推荐</span>
      </span>
    <span class="tab-item" @click="switchTo('/search')">
        <img :src="$route.path.includes('/search') ? tabBarImgUrl[2].selected : tabBarImgUrl[2].normal" alt="">
        <span :class="{on: $route.path.includes('/search')}">搜索</span>
      </span>
    <span class="tab-item" @click="switchTo('/chat')">
        <img :src="$route.path.includes('/chat') ? tabBarImgUrl[3].selected : tabBarImgUrl[3].normal" alt="">
        <span :class="{on: $route.path.includes('/chat')}">购物车</span>
      </span>
    <span class="tab-item" @click="switchTo('/mine')">
        <img :src="$route.path.includes('/mine') ? tabBarImgUrl[4].selected : tabBarImgUrl[4].normal" alt="">
        <span :class="{on: $route.path.includes('/mine')}">我的</span>
      </span>
   <!-- <router-link class="tab-item" to="/home">首页</router-link>
    <router-link class="tab-item" to="recommend">推荐</router-link>
    <router-link class="tab-item" to="search">搜索</router-link>
    <router-link class="tab-item" to="chat">聊天</router-link>
    <router-link class="tab-item" to="mine">我的</router-link>-->
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data () {
      return {
          tabBarImgUrl: [
            { normal: require('./../../../static/img/icon_home.png'),
              selected: require('./../../../static/img/icon_home_selected.png')},
            { normal: require('./../../../static/img/icon_intro.png'),
              selected: require('./../../../static/img/icon_intro_selected.png')},
            { normal: require('./../../../static/img/icon_search.png'),
              selected: require('./../../../static/img/icon_search_selected.png')},
            { normal: require('./../../../static/img/icon_chat.png'),
              selected: require('./../../../static/img/icon_chat_selected.png')},
            { normal: require('./../../../static/img/icon_mine.png'),
              selected: require('./../../../static/img/icon_mine_selected.png')},
          ]
      }
    },
    methods: {
      switchTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .bottom-tab
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    background #fff
    z-index 999
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 14px
      color #666
      img
        width 35%
        margin-bottom 2px
      .on
        color red
</style>
