<template>
  <div class="my-tab">
    <div class="fabu">
      <div class="fabubtn">
        <div class="huibtn">
          +
        </div>
      </div>
    </div>
    <div class="tab-item">
      <span class="tab-link" @click="aaa">yuan</span>
    </div>
    <router-link tag="div" class="tab-item" :to="{ name: 'index' }">
      <span class="tab-link">首页</span>
    </router-link>
    <div class="tab-item">
      <span class="tab-link" @click="back">返回</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    aaa() {
      console.log(111)
      this.$emit('aaa', true)
    },
    back() {
      console.log(111)
      this.$router.go(-1)
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';

.my-tab {
  width: 100%;
  position: fixed;
  background: #fff;
  bottom: 0px;
  display: flex;
  line-height: 98px;
  font-size: $font-size-medium;
  padding-top: 50px;
  border-top: 2px solid #f5f5f5;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: #828282;
    }
  }

  .fabu {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);

    .fabubtn {
      @include wflex(row,
      center,
      center);
      width: 120px;
      height: 120px;
      background: #fff;
      border-radius: 100%;
      color: #fff;
      font-size: 70px;
      border-top: 2px solid #ccc;

      .huibtn {
        @include wflex(row,
        center,
        center);
        width: 100px;
        height: 100px;
        background: #ccc;
        border-radius: 100%;
        color: #fff;
        font-size: 70px;
      }
    }
  }
}

</style>
