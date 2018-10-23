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
      <div class="tab-link" @click="aaa">
        <img src="@img/gd.png">
      </div>
    </div>
    <router-link tag="div" class="tab-item" :to="{ name: 'index' }">
      <div class="tab-link">
        <img src="@img/shouye.png">
      </div>
    </router-link>
    <div class="tab-item">
      <div class="tab-link" @click="back">
        <img src="@img/back.png">
      </div>
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
  padding-top: 70px;
  border-top: 2px solid #f5f5f5;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: #828282;
      img{
        height:27px;
      }
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
      width: 110px;
      height: 110px;
      background: #fff;
      border-radius: 100%;
      color: #fff;
      font-size: 70px;
      border-top: 2px solid #ccc;

      .huibtn {
        @include wflex(row,
        center,
        center);
        width: 84px;
        height: 84px;
        background: #ccc;
        border-radius: 100%;
        color: #fff;
        font-size: 70px;
      }
    }
  }
}

</style>
