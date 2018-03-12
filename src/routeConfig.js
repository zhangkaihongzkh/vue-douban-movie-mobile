import MovieList from './components/MovieList.vue'
import MovieDetail from './components/MovieDetail.vue'

export default[
  {
    //电影列表详情
    name:'MovieList',
    path:'/:category/:page',
    component:MovieList
  },
  {
    path: '/',
    redirect: '/in_theaters/1'
  },
  {
    path:'/detail/detail/:id',
    component:MovieDetail
  },
  {
    path:'/search',
    component:MovieList
  },

]
