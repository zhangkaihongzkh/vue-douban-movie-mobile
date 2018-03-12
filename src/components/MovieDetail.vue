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
        })
        //console.log(id);
        console.log();
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
</style>
