<template>
  <div v-bind:class="['listContent']">
   <!-- 搜索功能 -->
    <!-- <div v-bind:class="['searchArea']">

         <form @submit.prevent="search" >
          <input type="text" name="" placeholder="Search..." v-bind:class="['searchInput']" v-model="searchInput">
        </form>
    </div> -->
    <div v-bind:class="['listTitle']" >{{title}} </div>
    <div  v-bind:class="['contentList','clearfix']" v-for="item in subjects">
      <a :href="'#/detail/detail/'+item.id" v-bind:class="['linkBtn']">
        <div v-bind:class="['itemLeft']">
          <img :src="item.images.medium"  alt="">
        </div>
        <div v-bind:class="['itemRight']">
          <div v-bind:class="['itemBox']">
            <p v-bind:class="['itemTitle']">{{item.title}}<mt-badge type="primary" size="small" v-bind:class="['mark']">{{item.rating.average}}</mt-badge></p>
            <p v-bind:class="['itemText']">原名：<span v-bind:class="['itemTextInfo']">{{item.original_title}} </span></p>
            <p v-bind:class="['itemText']">年代：<span v-bind:class="['itemTextInfo']">{{item.year}} </span></p>
            <p v-bind:class="['itemText']">导演：<span v-bind:class="['itemTextInfo']" v-for="people in item.directors">{{people.name}} </span></p>
            <p v-bind:class="['itemText']">类型：<span v-bind:class="['itemTextInfo']">{{item.genres.join('、 ')}}</span></p>
            <p v-bind:class="['itemText']">演员：<span v-bind:class="['itemTextInfo']" v-for="people in item.casts">{{people.name}}、 </span></p>
          </div>
        </div>
      </a>
    </div>


    <div v-bind:class="['btnGroup']">
      <p>共：{{totalNum}}条记录，当前第：{{currentPage}}页，共：{{totalPage}}页</p>
      <mt-button type="primary" size="small" v-bind:class="['is-plain']" @click.native="go(currentPage-1)"><</mt-button>
      <mt-button type="primary" size="small" v-bind:class="['is-plain']" @click.native="go(currentPage+1)">></mt-button>
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
export default {

  name: 'MovieList',
  mounted(){
    this.fetchData();
    //window.scrollTo(0,0);
    // this.$router.beforeEach(function() {
    //     window.scrollTo(0, 0)
    // });
    //页面置顶
    // this.menu();
  },
  //监听路由变化
  watch:{
    '$route': 'fetchData'
  },

  data () {
    return {
      type:'',              //用于判断当前所处位置
      loading:true, //用于判断是否获取到的数据
      subjects:{},  //列表总数
      totalNum:0,  //请求到的数据总数
      title:'Loading', //请求到的标题
      totalPage:0,  //总共的页数
      currentPage:0, //当前的页数
      count:9,      //默认请求的页数
      page:0,//当前的页面数
      start:0,
      searchInput:'' ,  //搜索输入的内容
    }
  },
  methods:{
    //更新数据
    fetchData(){
      //alert(1);
      var _this = this;
      var currentCategory = _this.$route.params.category;
      var page = parseInt(this.$route.params.page);
      var start = (page - 1) * this.count;
      var count = this.count;
      var reqURL = ''
      reqURL = 'https://api.douban.com/v2/movie/'+currentCategory;
         this.$http.jsonp(reqURL,{
          params:{
            start:start,
            count:count,
            city:'广州',
          }
        }).then(function(res){

          //console.log( res.data);
          _this.type = _this.$route.params.category; //修改当前所处的类型 in_threats  ..
          //console.log(_this.type);
          _this.subjects = res.data.subjects;//获取到的列表数
          _this.title = res.data.title;     //标题
          _this.totalNum = res.data.total  //请求到的个数、
          _this.totalPage = Math.ceil(_this.totalNum/_this.count);
           _this.page = parseInt(_this.$route.params.page);
           _this.currentPage = _this.page;
          console.log(_this.currentPage );
          _this.loading = false;
          //console.log(_this.totalNum);
          //console.log(_this.totalPage);
        });

       _this.loading = true;
    },
    //页面跳转
    go(page){
      //alert(page);
      var _this = this;
      var page = parseInt(page);
      //console.log(typeof page)
      //获取当前路由信息
      var currentCategory = _this.$route.params.category;
      //console.log(currentCategory);

      //_this.$router.replace({parmas:{page:page}});
      //_this.$router.push({path:'/'+currentCategory+'/{{page}}'});

      if(page >=1 && page <= this.totalPage){
         _this.$router.push({params:{page:page}});

        // if(currentCategory == 'in_theaters'){
        //    _this.$router.push({name:'MovieList',params:{page:page}});
        // }else if(currentCategory == 'coming_soon'){
        //    _this.$router.push({name:'MovieList',params:{page:page}})
        // }else if(currentCategory == 'top250'){
        //    _this.$router.push({name:'MovieList',params:{page:page}})
        // }


        //alert(1);
        //_this.$route
        // _this.$route.push({name:'Hot',params:{pageNum:page}});
      }
    },
    //页面跳转时置顶
    menu() {
      window.scrollTo(0,0);
    },
    //搜索功能
    search(){
      var _this = this;
      //alert(_this.searchInput);
      // 获取到表单输入内容

      var tmpUrl = '/search?q='+this.searchInput;
      //重置内容
      console.log(tmpUrl);
      this.searchInput = '';
      //console.log(tmpUrl)
      _this.$router.go({path:tmpUrl});
    }
  },


}
</script>

<style scoped>
/*搜索按钮*/
.searchArea{
  padding-top: 2.5rem;
}
.searchInput{
  width: 94.5%;
  margin: 0 auto;
  padding: 0.5rem;

  border:0.06rem solid #26a2ff;
}
/*内容区域*/
.listContent{
  padding:0.5rem 0 0.5rem 0;
}
.linkBtn{
  text-decoration: none;
  display: inline-block;
  width: 100%;
}
.contentList{
  display: inline-block;
  text-decoration: none;
}
.contentList{
  width: 95%;
  padding: 0.5rem 0.6rem;
  border-bottom: 0.06rem solid #aaa;

}

.listTitle{
  padding-left: 0.6rem;
  padding-bottom: 0.6rem;
  font-size: 1.5rem;
  border-bottom: 0.06rem solid #aaa;
}

.itemLeft{
  float: left;
  width: 9rem;
}
.itemLeft img{
  width: 100%;
}
.itemRight{
  padding-left:9.5rem;
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
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #111;
}
.mark{
  float: right;
  height: 1.1rem;
  text-align: center;
  line-height: 1.1rem;
  border-radius: 60%;
}
.itemText{
  font-size: 0.8rem;
  color: #111;
  margin: 0.5rem 0;
  /*word-break: break-all; word-wrap:break-word;*/
   display: -webkit-box;
   font-weight: bold;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp:2;
}
.itemTextInfo{
  color:#111;
   flex-wrap: wrap;
   font-weight: normal;
}
.btnGroup{
  text-align: center;
  margin: 1.5rem auto 4.5rem auto;
}
.btnGroup button{
  margin: 0 1rem;
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


