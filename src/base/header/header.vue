<template>
  <div class="header">
    {{title}}
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: '捎四方'
    },


  },
  methods: {

  }
}

</script>
<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';

.header {
  @include wflex(row,
  center,
  center);
  width: 100%;
  height: 100px;
  background: $color-bg-theme;
  color: $color-theme;
  font-size:30px;
}

</style>
