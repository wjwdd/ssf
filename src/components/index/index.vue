<template>
  <div class="hello">
   <!--  <Header></Header>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :plugin="plugin" :zooms="zooms" :vid="'amap-vue'">
        <el-amap-info-window v-if="loaded" :position="window.position">
          <div class="widcon">
            <div class="left">
              <yd-icon name="location" size=".5rem" color="#e5c48c"></yd-icon>
              <div>
                位置
              </div>
            </div>
            <div class="right">
              我在这上车
            </div>
          </div>
        </el-amap-info-window>
      </el-amap>
    </div>
    <div class="indexcon">
      起点终点
      <div class="qzdian">
        <div class="qidian">
          <div class="yuandian">
          </div>
          <div class="dizhi">
            山东省青岛市看见看见看见
          </div>
        </div>
        <div class="qidian">
          <div class="yuandian">
          </div>
          <div class="dizhi">
            山东省青岛市看见看见看见
          </div>
        </div>
      </div> -->
      <!-- 起点终点 -->
     <!--  <div class="fourway">
      </div>
      <cube-upload action="http://ssf.hasaigei.com/api.php/member/headimgurl" :simultaneous-uploads="1" @files-added="filesAdded" fileName="name" :headers="headers" />
    </div> -->
    <div @click='login'>sdsd</div>
    <div @click='login1'>sddddddddddddd</div>
  </div>
</template>
<script>
import Header from '@/base/header/header'
import { $login, $savetell, $savepass, $register, $sendcode,$ajaxcheckdriver } from '@/common/js/axous.js'
export default {
  components: {
    Header
  },
  name: 'HelloWorld',
  data() {
    let self = this;
    return {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // center: [121.59996, 31.197646],
      zooms: [13, 19],
      lng: 0,
      lat: 0,
      loaded: false,

      window: {
        position: [121.59996, 31.197646],
      },
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                console.log(result)
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.window.position = [self.lng, self.lat];
                self.$nextTick();
              }
            });
          }
        }
      }],
      show3: false
    }
  },
  mounted() {
    console.log(this.$md5('123456'))

  },
  methods: {
    login(){
      $login(15064281195,123456).then(res=>{

      })
    },
    login1(){
      $ajaxcheckdriver().then(res=>{

      })
    },
    tzym() {
      this.$router.push({
        name: 'helloWorld'
      })
    },
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';
.hello{
  // display:none;
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}

.widcon {
  @include wflex(row,
  center,
  center);

  .left {
    @include wflex(column,
    center,
    center);
    color: $color-theme;
    padding-right: 30px;
    border-right: 1px solid #ccc;
  }

  .right {
    padding-left: 30px;
    color: #000;
  }
}

.indexcon {
  width: 96%;
  margin: 2%;

  position: absolute;
  top: 400px;

  .qzdian {
    background: #fff;
    padding: 20px;

    .qidian {
      padding: 20px;
      @include wflex(row,
      flex-start,
      center);

      .yuandian {
        width: 15px;
        height: 15px;
        background: #f00;
        border-radius: 100%;
        margin-right: 20px;
      }

      .dizhi {}
    }
  }

  .fourway {
    padding: 40px;
    background: #fff;
    margin-top: 20px;
  }
}

</style>
