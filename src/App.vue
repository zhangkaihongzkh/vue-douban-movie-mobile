<template>
  <div id="app">
    <mt-header fixed title="豆瓣电影"></mt-header>

    <!-- 内容区域 -->
    <router-view>

    </router-view>
    <!-- 底部 -->
    <mt-tabbar  fixed >
      <mt-tab-item id="in_theaters"  >

        <router-link to="/in_theaters/1">
        <mt-button type="primary" v-bind:class="['is-plain']">正在热映</mt-button>

        </router-link>
      </mt-tab-item>
      <mt-tab-item id="coming_soon" >

        <router-link to="/coming_soon/1">
          <mt-button type="primary" v-bind:class="['is-plain']">即将上映</mt-button>
          </router-link>
      </mt-tab-item>
      <mt-tab-item id="top250"  >

        <router-link to="/top250/1">
          <mt-button type="primary" v-bind:class="['is-plain']">top250</mt-button>

        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
//导入内容组件
import MovieList from './components/MovieList.vue'
//导入电影详情组件
import MovieDetail from './components/MovieDetail.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed:{
    bottomBtn(){
      return{
        bottomBtn:true,
      }
    },
  },
  components:{
    //详情页面
    MovieDetail,
    //电影列表页面
    MovieList,
  },
}
</script>

<style>
body,html{padding: 0;margin: 0;font-size:16px;}
/*
加载按钮样式
 */
.loading{
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background-color: rgba(0,0,0,0.4);
}



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


