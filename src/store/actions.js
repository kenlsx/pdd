// 引入获取数据方法
import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  getLogout,
  getCartGoods,
} from '../api'

// 引入统一常量
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
  // 1. 获取首页轮播图
  async reqHomeCasual({commit}, callback) {
    const result = await getHomeCasual()
    //console.log(result)
    commit(HOME_CASUAL, {homecasual: result.message.data})
    callback && callback()
  },
  // 2.获取首页导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav()
    commit(HOME_NAV, {homenav: result.message.data})
  },

  // 3. 获取首页商品数据
  async reqShopList({commit}) {
    const result = await getHomeShopList()
    commit(HOME_SHOPLIST, {homeshoplist: result.message.goods_list})
  },
  // 4. 获取推荐商品数据
  async reqRecommendShopList({commit}, params) {
    console.log(params)
    const result = await getRecommendShopList(params)
    commit(RECOMMEND_SHOPLIST, {recommendshoplist: result.message})
    params.callback && params.callback()
  },

  // 5. 获取搜索商品数据
  async reqSearchGoods({commit}) {
    const result = await getSearchGoods()
    commit(SEARCH_GOODS, {searchgoods: result.message.data})
  },

  // 6.同步用户的数据
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo})
  },

  // 7.异步获取用户信息
  async getUserInfo({commit}) {
    const result = await getUserInfo()
    console.log(result)
    if (result.success_code === 200) {
      commit(USER_INFO, {userInfo: result.message})
    }
  },
  // 8.退出登陆
  async Logout({commit}) {
    const result = await getLogout()
    console.log(result)
    if (result.success_code === 200){
      commit(RESET_USER_INFO)
    }
  },
  //9.请求购物车数据
  async getCartGoods({commit}) {
    const result = await getCartGoods()
    if (result.success_code === 200) {
      commit(CAR_GOODS_LIST, {cargoods: result.message})
    }
  },
  // 10.单个商品的增加/减少
  updateGoodsCount({commit}, {goods, isAdd}) {
    if (isAdd) { // 增加
      commit(ADD_GOODS_LIST, {goods})
    } else { // 减少
      commit(DOWN_GOODS_LIST, {goods})
    }
  },

  // 11.是否选中所有的商品
  selectAll({commit}, isSelected) {
    commit(SELECT_ALL_GOODS, {isSelected})
  },

  // 12.单个商品的选中
  sinSelected({commit}, {goods}) {
    commit(SINGLE_SELECTED, {goods})
  },
  // 13.单个商品的删除
  delGoods({commit}, {goods}) {
    commit(DEL_GOODS, {goods})
  },

  // 14.加入购物车数据
  addCart({commit}, {goods}) {
    commit(ADD_CART, {goods})
  }
}
