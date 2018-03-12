<template>
  <div id="app">
    <mt-header fixed title="豆瓣电影"></mt-header>

    <!-- 内容区域 -->
    <router-view>

    </router-view>
    <!-- 底部 -->
    <mt-tabbar  fixed :default-active="activeIndex">
      <mt-tab-item id="in_theaters" default-active>
        <router-link to="/in_theaters">
         <img slot="icon" src="./assets/logo.png" height="200" width="200">
        正在热映
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="coming_soon">
        <router-link to="/coming_soon">
          <img slot="icon" src="./assets/logo.png">
          即将上映
          </router-link>
      </mt-tab-item>
      <mt-tab-item id="top250">
        <router-link to="/top250">
          <img slot="icon" src="./assets/logo.png">
        top250
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
//导入内容组件
import MovieList from './components/MovieList.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex:'1'
    }
  },
  components:{
    MovieList,
  },
}
</script>


