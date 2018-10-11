import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Index = (resolve) => {
  import ('components/index/index').then((module) => {
    resolve(module)
  })
}
const HelloWorld = (resolve) => {
  import ('components/HelloWorld').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    }
  ]
})
