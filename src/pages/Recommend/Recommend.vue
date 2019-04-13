<template>
  <div class="recommend-container">
    <ul class="recommend"  v-if="recommendshoplist.length>0 && userInfo.id">
      <ShopList tag="li"
                v-for="(item, index) in recommendshoplist"
                :key="index"
                :item="item"
                :clickCellBtn = 'dealWatchBtnClick'
      />
    </ul>
    <SelectLogin v-else/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopList from '@/components/ShopList/ShopList'
  import BScroll from 'better-scroll'
  import {Indicator,Toast} from 'mint-ui';
  import SelectLogin from '@/pages/Me/Login/SelectLogin'
  import {addGoods2Car} from "@/api/index"

  export default {
    name: "Recommend",
    data() {
      return {
        page: 1,
        count: 10,
        top: 0,
        status: true
      }
    },
    components: {
      ShopList,
      SelectLogin
    },
    mounted() {
      Indicator.open('正在加载数据...');
      // 获取推荐数据列表
      this.$store.dispatch('reqRecommendShopList', {
        page: this.page, count: this.count, callback: () => {
          Indicator.close();
        }
      })
    },
    watch: {
      recommendshoplist() {
        this.$nextTick(() => {
          // 当前页码+1
          this.page += 1;
          // 初始化
          this._initBScroll()
          // 滚动到固定的高度值
          this.listScroll.scrollTo(0, this.top)
        })
      }
    },
    methods: {
      _initBScroll() {
        //1.1初始化
        this.listScroll = new BScroll('.recommend-container', {
          scrollY: true,
          probeType: 3
        })
        // 1.2监听列表的滚动
        this.listScroll.on('touchEnd', (pos) => {
          // 1.2.1 监听下拉动作
          if (pos.y >= 50) {
            console.log('下拉刷新')
          }
          //1.2.2 监听上拉
          if (this.status === true) {
            if (this.listScroll.maxScrollY > pos.y + 30) {
              this.status = false;
              Indicator.open('正在加载数据...');
              // 设置最高值为当前加载最大文档值
              this.top = this.listScroll.maxScrollY - 50
              // 发起数据请求
              this.$store.dispatch('reqRecommendShopList', {
                page: this.page, count: this.count, callback: () => {
                  Indicator.close();
                  this.status = true;
                }
              })
            }
          }
        })
        // 顶部的值
        console.log(this.top)
        // 1.3监听列表滚动结束
        this.listScroll.on('scrollEnd', () => {
          this.listScroll.refresh();
        })
      },
      // 监听商品点击
      async dealWatchBtnClick(goods) {
        // 1. 发送请求
        let result = await addGoods2Car(this.userInfo.id,goods.goods_id,goods.goods_name,goods.thumb_url,goods.price);
        //console.log(result)
        Toast("添加成功")
        this.$store.dispatch('getCartGoods');
      }
    },
    computed: {
      ...mapState(['recommendshoplist','userInfo'])
    }
  }
</script>

<style scoped lang="stylus">
  .recommend-container
    width: 100%
    height: 100%
    background #f5f5f5
    overflow hidden
    .recommend
      padding-bottom 50px
      display flex
      flex-wrap wrap
      background #f5f5f5
</style>
