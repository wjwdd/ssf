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
    <!--  <social-sharing url="https://vuejs.org/" inline-template>
  <div>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="linkedin">
        <i class="fa fa-linkedin"></i> LinkedIn
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network> 
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</social-sharing> -->
    <div @click='login'>sdsd</div>
    <div class="sss" @click='login1'>sddddddddddddd</div>
    <div @click='showDateSegmentPicker'>sddddssssssssddddddddd</div>
    <!-- <div id="container"></div>  -->
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>
<script>
import 'common/js/plusShare.js'
import Header from '@/base/header/header'
import { $alipay, $login, $savetell, $savepass, $register, $sendcode, $ajaxcheckdriver, $driverrelese, $passengerrelese } from '@/common/js/axous.js'
const dateSegmentData = [{
    is: 'cube-date-picker',
    title: '入学时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  },
  {
    is: 'cube-date-picker',
    title: '毕业时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 11, 31)
  }
]
const cadada = [{
  is: 'cube-date-picker',
  title: 'Time Picker',
  min: [0, 0],
  max: [23, 59],
  value: new Date(),
  startColumn: 'hour',
  columnCount: 2,
  format: { hour: 'hh', minute: 'mm' }
}, {
  is: 'cube-date-picker',
  title: 'Time Picker1',
  min: [0, 0],
  max: [23, 59],
  value: new Date(),
  startColumn: 'hour',
  columnCount: 2,
  format: { hour: 'hh', minute: 'mm' }
}]
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


    //     var map = new AMap.Map('container');
    // AMap.plugin('AMap.Driving', function() {
    //   var driving = new AMap.Driving({
    //     // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
    //     policy: AMap.DrivingPolicy.LEAST_TIME
    //   })

    //   var startLngLat = [116.379028, 39.865042]
    //   var endLngLat = [116.427281, 39.903719]

    //   driving.search(startLngLat, endLngLat, function (status, result) {
    //     // 未出错时，result即是对应的路线规划方案
    //   })
    // })
    console.log(this.mTokm(12312313))
    let data = {
      beginaddress: 1,
      overaddress: 1,
      begintime: 1,
      backtime: 1,
      beizhu: 1,
      zuowei: 1,
      price: 1,
      juli: 1,
      fabutype: 1,
      type: 1,
      tell: 1
    }
    // $driverrelese(data).then(res => {
    //   console.log(res)
    // })
    $passengerrelese(data).then(res => {
      console.log(res)
    })
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: cadada,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        console.log(selectedVals)
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        console.log(selectedValue)
      }
    })
    let begin = '116.379028,39.865042'
    let back = '116.427281,39.903719'
    this.guihualuxian(begin, back)
  },
  methods: {

    guihualuxian(a, b) {
      let arra = a.split(',')
      let arrb = b.split(',')
      let begin = new AMap.LngLat(arra[0], arra[1])
      let back = new AMap.LngLat(arrb[0], arrb[1])
      let map = new AMap.Map("container");
      AMap.plugin(['AMap.ToolBar', 'AMap.Driving'], function() { //异步同时加载多个插件

        //构造路线导航类
        var driving = new AMap.Driving({
          map: map,
          // panel: "panel"
        });
        // 根据起终点经纬度规划驾车导航路线
        driving.search(begin, back, function(status, result) {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          if (status === 'complete') {
            // log.success('绘制驾车路线完成')
          } else {
            // log.error('获取驾车数据失败：' + result)
          }
        });
      });
    },
    showDateSegmentPicker() {
      this.dateSegmentPicker.show()
    },
    sdsd() {
      //分享内容，开发者可自定义
      var message = {
        title: "plusShare示例", //应用名字
        content: "plusShare基于HTML5+的share模块，开发者只需调用一个API，即可调起微信好友、微信朋友圈、系统更多分享功能",
        href: "https://mp.weixin.qq.com/s/pTB1wDjzutXOhZeuTigiDA", //分享出去后，点击跳转地址
        thumbs: ["http://img-cdn-qiniu.dcloud.net.cn/icon3.png"] //分享缩略图
      }
      //调起分享
      window.plusShare(message, function(res) {
        //分享回调函数
        if (res) {
          plus.nativeUI.toast("分享成功");
        } else {
          plus.nativeUI.toast("分享失败");
        }
      })
    },
    mTokm(x) {
      return Math.floor((x / 1000) * 100) / 100
    },
    login() {
      $login(15064281195, 123456).then(res => {

      })
    },
    login1() {
      $alipay().then(res => {
        const div = document.createElement('div');
        div.innerHTML = (res.data);
        document.body.appendChild(div);
        document.forms.alipaysubmit.submit();
      })
      // window.location.href="http://ssf.hasaigei.com/aliwap/wappay/pay.php"
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
    },

  }
}

</script>
<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mymixin.scss';

.sss {
  width: 100px;
  height: 100px;
  background: #ccc;
}

#container {
  width: 100%;
  height: 100vh;
}

.hello {
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
