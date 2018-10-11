
<template>
  <transition name="slide">
    <div class="my-singer-detail">
    <h1>{{ msg }}</h1>
  </div>
  </transition>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';
.my-singer-detail {
  width:100%;
  height:100%;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: $headerheight;
  background:$color-background ;
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
