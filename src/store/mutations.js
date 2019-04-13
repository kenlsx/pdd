import Vue from 'vue';
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOPLIST,
  RECOMMEND_SHOPLIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CAR_GOODS_LIST,
  ADD_GOODS_LIST,
  DOWN_GOODS_LIST,
  SELECT_ALL_GOODS,
  SINGLE_SELECTED,
  DEL_GOODS,
  ADD_CART
} from './mutation-types'

export default {
  // 首页轮播图数据
  [HOME_CASUAL](state, {homecasual}) {
    state.homecasual = homecasual
  },

  // 首页导航数据
  [HOME_NAV](state, {homenav}) {
    state.homenav = homenav
  },

  // 首页商品列表数据
  [HOME_SHOPLIST](state, {homeshoplist}) {
    state.homeshoplist = homeshoplist
  },

  // 推荐商品数据列表
  [RECOMMEND_SHOPLIST](state, {recommendshoplist}) {
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist)
  },

  // 搜索商品列表
  [SEARCH_GOODS](state, {searchgoods}) {
    state.searchgoods = searchgoods
  },

  // 用户信息
  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },

  // 清空用户信息
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  // 提交购物车数据
  [CAR_GOODS_LIST](state, {cargoods}) {
    state.carGoods = cargoods
  },

  // 增加购物车数据
  [ADD_GOODS_LIST](state, {goods}) {
    goods.buy_count++;
  },
  // 减少购物车数据
  [DOWN_GOODS_LIST](state, {goods}) {
    if (goods.buy_count) {
      goods.buy_count--;
      if (goods.buy_count === 0) {
        const index = state.carGoods.indexOf(goods);
        state.carGoods.splice(index, 1);
      }
    }
  },

  //是否选中全部商品
  [SELECT_ALL_GOODS](state, {isSelected}) {
    state.carGoods.forEach((item, i) => {
      if (item.checked) { // 选中
        item.checked = !isSelected;
      } else { // 还属性未存在
        Vue.set(item, 'checked', !isSelected)
      }
    })
  },

  // 单个商品的选中/取消
  [SINGLE_SELECTED](state, {goods}) {
    // 1.1判断是否有选中的属性
    if (goods.checked) {
      goods.checked = !goods.checked;
    } else {
      Vue.set(goods, 'checked', true)
    }
  },

  // 删除单个商品
  [DEL_GOODS](state, {goods}) {
    const index = state.carGoods.indexOf(goods);
    state.carGoods.splice(index, 1);
  },

  // // 加入购物车
  // [ADD_CART](state, {goods}) {
  //   let flag = true;
  //   console.log(goods)
  //   state.carGoods.forEach((item, index) => {
  //     if (item.goods_id === goods.goods_id) {
  //       item.buy_count ++;
  //     } else {
  //       flag = false;
  //       console.log(false)
  //     }
  //   })
  // }
}
