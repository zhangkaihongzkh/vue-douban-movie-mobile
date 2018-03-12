<template>
  <div>
    <div v-bind:class="['listTitle']">我是标题</div>
    <div v-bind:class="['contentList','clearfix']">
      <div v-bind:class="['itemLeft']">
        <img src="../assets/logo.png"  alt="">
      </div>
      <div v-bind:class="['itemRight']">
        <div v-bind:class="['itemBox']">
          <p v-bind:class="['itemTitle']">电影名称 <mt-badge type="primary" size="small" v-bind:class="['mark']">30</mt-badge></p>
          <p v-bind:class="['itemText']">原名：<span v-bind:class="['itemTextInfo']">asdasdasdaasdasdasdsdasdasdsaasdasdasdasdasdasasd </span></p>
          <p v-bind:class="['itemText']">导演：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
          <p v-bind:class="['itemText']">类型：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
          <p v-bind:class="['itemText']">演员：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
        </div>
      </div>
    </div>
    <div v-bind:class="['contentList','clearfix']">
      <div v-bind:class="['itemLeft']">
        <img src="../assets/logo.png"  alt="">
      </div>
      <div v-bind:class="['itemRight']">
        <div v-bind:class="['itemBox']">
          <p v-bind:class="['itemTitle']">电影名称</p>
          <p v-bind:class="['itemText']">原名：<span v-bind:class="['itemTextInfo']">asdasdasdaasdasdasdsdasdasdsaasdasdasdasdasdasasd </span></p>
          <p v-bind:class="['itemText']">导演：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
          <p v-bind:class="['itemText']">类型：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
          <p v-bind:class="['itemText']">演员：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
        </div>
      </div>
    </div>
    <div v-bind:class="['contentList','clearfix']">
      <div v-bind:class="['itemLeft']">
        <img src="../assets/logo.png"  alt="">
      </div>
      <div v-bind:class="['itemRight']">
        <div v-bind:class="['itemBox']">
          <p v-bind:class="['itemTitle']">电影名称</p>
          <p v-bind:class="['itemText']">原名：<span v-bind:class="['itemTextInfo']">asdasdasdaasdasdasdsdasdasdsaasdasdasdasdasdasasd </span></p>
          <p v-bind:class="['itemText']">导演：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
          <p v-bind:class="['itemText']">类型：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
          <p v-bind:class="['itemText']">演员：<span v-bind:class="['itemTextInfo']">asdasd </span></p>
        </div>
      </div>
    </div>

    <div v-bind:class="['btnGroup']">
      <mt-button type="primary" size="small" ><</mt-button>
      <mt-button type="primary" size="small">></mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.contentList{
  padding: 0.5rem 0.6rem;
  border-bottom: 0.06rem solid #000;

}

.listTitle{
  padding-left: 0.6rem;
  padding-bottom: 0.6rem;
  margin-top: 3rem;
  font-size: 2rem;
  border-bottom: 0.06rem solid #000;
}

.itemLeft{
  float: left;
}
.itemLeft img{
  width: 10rem;
}
.itemRight{
  padding-left:11rem;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}

.clearfix:after {
  clear: both;
}
/*选项具体样式*/
.itemTitle{
  font-size: 1.3rem;
  margin: 0.5rem 0;
}
.mark{
  float: right;
  height: 1.3rem;
  text-align: center;

  height: 1.3rem;
  border-radius: 60%;
}
.itemText{
  color: #aaa;
  margin: 0.5rem 0;
  /*word-break: break-all; word-wrap:break-word;*/
   display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp:2;
}
.itemTextInfo{
  color:#111;
   flex-wrap: wrap;
}
.btnGroup{
  text-align: center;
  margin: 1.5rem auto 4.5rem auto;
}
</style>


