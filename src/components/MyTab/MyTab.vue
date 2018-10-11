<template>
  <div class="my-tab">
    <div class="tab-item">
      <span class="tab-link" @click="aaa">yuan</span>
      
    </div>
    
    <router-link tag="div" class="tab-item" :to="{ name: 'index' }">
      <span class="tab-link">推荐</span>
    </router-link>
    <div class="tab-item">
      <span class="tab-link" @click="back">返回</span>
      
    </div>
    
  </div>
</template>

<script>
export default {
  methods:{
    aaa(){
      console.log(111)
      this.$emit('aaa', true)
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';

.my-tab {
  width:100%;
  position:fixed;
  background:$color-background ;
  bottom:0px;
  display: flex;
  height: 98px;
  line-height: 98px;
  font-size: $font-size-medium;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 5px;
      color: $color-text-l;
    }
    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
