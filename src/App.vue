<template>
  <div id="app">
    <mt-header fixed title="豆瓣电影"></mt-header>

    <!-- 内容区域 -->
    <router-view>

    </router-view>
    <!-- 底部 -->
    <mt-tabbar  fixed :default-active="activeIndex">
      <mt-tab-item id="in_theaters" v-bind:class="['bottomBtn','active']">
        <img slot="icon" src="./assets/logo.png" >
        <router-link to="/in_theaters/1">

        正在热映
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="coming_soon"  v-bind:class="['bottomBtn']">
        <img slot="icon" src="./assets/logo.png">
        <router-link to="/coming_soon/1">
          <img slot="icon" src="./assets/logo.png">
          即将上映
          </router-link>
      </mt-tab-item>
      <mt-tab-item id="top250"  v-bind:class="['bottomBtn']">
        <img slot="icon" src="./assets/logo.png">
        <router-link to="/top250/1">

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

<style>
body,html{padding: 0;margin: 0;font-size:16px;}
</style>

<style scoped>
.bottomBtn a{
  color:#111;
  text-decoration: none;
}
.bottomBtn.active a{
    color:#26a2ff;
}
</style>


