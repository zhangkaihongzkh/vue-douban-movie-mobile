<template>
  <div>
    <mt-spinner type="snake"></mt-spinner>
    <div v-bind:class="['listTitle']">{{title}}</div>
    <div v-bind:class="['contentList','clearfix']" v-for="item in subjects">
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
    </div>


    <div v-bind:class="['btnGroup']">
      <mt-button type="primary" size="small" v-bind:class="['is-plain']" @click.native="go(currentPage-1)"><</mt-button>
      <mt-button type="primary" size="small" v-bind:class="['is-plain']" @click.native="go(currentPage+1)">></mt-button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'MovieList',
  mounted(){
    this.fetchData();
  },
  //监听路由变化
  watch:{
    '$route': 'fetchData'
  },
  data () {
    return {
      //获取到的数据

      subjects:{},  //列表总数
      totalNum:0,  //请求到的数据总数
      title:'Loading', //请求到的标题
      totalPage:0,  //总共的页数
      currentPage:0, //当前的页数
      count:9,      //默认请求的页数
      page:this.$route.params.page,//当前的页面数

    }
  },
  methods:{
    //更新数据
    fetchData(){
      //alert(1);
      var _this = this;
      var currentCategory = _this.$route.params.category;
      this.$http.jsonp('https://api.douban.com/v2/movie/'+currentCategory,{
        params:{
          start:_this.count*(_this.page-1),
          count:_this.count,
          city:'广州',
        }
      }).then(function(res){

        //console.log( res.data);
        _this.subjects = res.data.subjects;//获取到的列表数
        _this.title = res.data.title;     //标题
        _this.totalNum = res.data.total  //请求到的个数、
        _this.totalPage = Math.ceil(_this.totalNum/_this.count);
        _this.page = _this.$route.params.page;
        _this.currentPage = parseInt(_this.$route.params.page);
        //console.log(_this.totalNum);
        //console.log(_this.totalPage);
      })
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
      _this.$router.push({params:{page:page}});
      if(page >=1 && page <= this.pageTotal){


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
  },


}
</script>

<style scoped>
.contentList{
  padding: 0.5rem 0.6rem;
  border-bottom: 0.06rem solid #aaa;

}

.listTitle{
  padding-left: 0.6rem;
  padding-bottom: 0.6rem;
  margin-top: 3rem;
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
.btnGroup button{
  margin: 0 1rem;
}
</style>


