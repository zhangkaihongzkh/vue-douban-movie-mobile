import MovieList from './components/MovieList.vue'

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
  }
]
