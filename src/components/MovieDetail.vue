<template>
 <div>
    <div v-bind:class="['filmDetailInfo']">
      <p v-bind:class="['itemTltle','itemText']"><span v-bind:class="['itemTextInfo']">{{filmDetail.title}} </span> <mt-badge type="primary" size="small" v-bind:class="['mark']">{{filmDetail.rating.average}}</mt-badge></p>
      <div v-bind:class="['infoIMG']">
        <img :src="filmDetail.images.medium"  alt="">
      </div>
      <p v-bind:class="['itemText']">简介：<span v-bind:class="['itemTextInfo']">{{filmDetail.summary}} </span></p>
      <p v-bind:class="['itemText']">原名：<span v-bind:class="['itemTextInfo']">{{filmDetail.original_title}} </span></p>
      <p v-bind:class="['itemText']">年代：<span v-bind:class="['itemTextInfo']">{{filmDetail.year}} </span></p>
      <p v-bind:class="['itemText']">导演：<span v-bind:class="['itemTextInfo']" v-for="people in filmDetail.directors">{{people.name}} </span></p>
      <p v-bind:class="['itemText']">类型：<span v-bind:class="['itemTextInfo']">{{filmDetail.genres.join('、 ')}}</span></p>
      <p v-bind:class="['itemText']">演员：<span v-bind:class="['itemTextInfo']" v-for="people in filmDetail.casts">{{people.name}}、 </span></p>
      <p v-bind:class="['itemTltle','itemText']"><span v-bind:class="['itemTextInfo']">领衔主演 </span></p>
      <div v-for="person in filmDetail.casts" v-bind:class="['peopleInfo']">
        <p v-bind:class="['itemText']"><span v-bind:class="['itemTextInfo']">{{person.name}} </span></p>
      </div>
    </div>

    <!-- 加载样式loading -->
    <div class="shadow" v-show="loading">
      <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
      </div>
    </div>
 </div>
</template>

<script>
  export default{
    name:'MovieDetail',
    mounted(){
      this.fetchData()
    },
    watch:{
      '$route': 'fetchData'
    },
    data(){
      return{
        loading:true,
        title:'213123',
        filmDetail:{},//电影详情
      }
    },

    methods:{
      fetchData(){
        var id = this.$route.params.id;
        var _this = this;
        var tmpURL = 'https://api.douban.com/v2/movie/subject/'+id;
        this.$http.jsonp(tmpURL).then(function(res){

          _this.filmDetail = res.data;
          console.log(_this.filmDetail);
           _this.loading = false;
        });
        //console.log(id);
        //console.log();
        _this.loading = true;
      }
    }
  }
</script>

<style scoped>
.itemBox{
  text-align: center;
}
.peopleInfo{


}
.peopleInfo img{
  width: 100%;
}
.infoIMG img{
  width: 100%
}
.filmDetailInfo{
  padding:2.5rem 0.5rem 4rem 0.5rem;
}
.itemText{
  margin: 0.5rem 0;
  color: #111;
  font-weight: bold;

}
.itemTextInfo{
  font-weight: normal;
}
.itemTltle{
  font-size: 1.5rem
}
.mark{

  float: right;
  height: 1.1rem;
  text-align: center;
  line-height: 1.1rem;
  border-radius: 60%;
  vertical-align: middle;
}
/*按钮样式*/

.sk-cube-grid {
  width: 40px;
  height: 40px;
  margin: 100px auto;
}

.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: #10a0ea;
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}
.sk-cube-grid .sk-cube1 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s; }
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
          animation-delay: 0s; }
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  }
}
.shadow{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background-color: rgba(0,0,0,0.4);
}

</style>
