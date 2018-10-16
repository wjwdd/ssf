<template>
  <div id="app">
    
    <transition  name="slide" mode="out-in">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <my-tab @aaa="aaa"></my-tab>
    <yd-popup v-model="show3"  position="left" width="60%">
        <yd-button type="danger" style="margin: 30px;" @click.native="show3 = false">Close Left Popup</yd-button>
    </yd-popup>
  </div>
</template>

<script>
import MyTab from './components/MyTab/MyTab'
export default {
  components: {
    MyTab,
    
  },
  name: 'app',
  data(){
    return {
      show3:false
    }
  },
  methods:{
    aaa(e){
      console.log(e)
      this.show3=true
    }
  }
}
</script>

<style>
#app {
  width:100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   color:$color-theme;
}

/*.slide-enter-active, .slide-leave-active {
 transition: opacity .3s;
}
.slide-enter, .slide-leave-to {
  
  opacity: 0;
}*/
.router-view{
  padding-top:$headerheight;
  padding-bottom:$headerheight;

}
</style>
