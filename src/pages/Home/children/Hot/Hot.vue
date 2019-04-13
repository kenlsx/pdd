<template>
  <div class="hot">
    <!--1.轮播图-->
    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index">
          <img :src="casual.imgurl" alt="" width="100%">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--2.中间导航 -->
    <HotNav/>
    <!--3.广告位-->
    <div class="hot-ad">
      <img src="./../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
    </div>
    <!--4.商品列表-->
    <HotShopList/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HotNav from './HotNav'
  import HotShopList from './HotShopList'

  import {
    mapState
  } from 'vuex'
  export default {
    name: "Hot",
    components: {
      HotNav,
      HotShopList
    },
    mounted() {
      // 1. 获取首页的轮播图
      this.$store.dispatch('reqHomeCasual',() => {
        this.$nextTick(() => {
          // 创建swiper实例
          new Swiper ('.swiper-container', {
            loop: true,
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      })
      // 2. 获取首页nav
      this.$store.dispatch('reqHomeNav')
      // 3. 获取首页商品列表数据
      this.$store.dispatch('reqShopList')
    },
    computed: {
      ...mapState(['homecasual'])
    },
    // 深度监视
  /*  watch: {
      homecasual() {
        this.$nextTick(() => {
          // 创建swiper实例
          new Swiper ('.swiper-container', {
            loop: true,
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }*/
  }
</script>

<style scoped lang="stylus">
  .hot
    padding-top 34px
    width 100%
    background #f5f5f5
    .hot-ad
      margin 8px 0
      padding 5px
      background #fff
</style>
