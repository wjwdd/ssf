<template>
  <div>
    <div class="amap-page-container">
      <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom" :events="events" class="amap-demo">
        <el-amap-marker :position="marker.position"></el-amap-marker>
      </el-amap>
    </div>
    <div class="sdsd">{{dizhi}}</div>
  </div>
</template>
<style>
.amap-page-container {
  width: 100%;
  height: 100vh;
}

.sdsd {
  position: fixed;
  bottom: 100px;
  z-index: 1000;
}

</style>
<script>
import { $geocode_regeo } from 'common/js/axous.js'
// NPM 方式
// import { AMapManager } from 'vue-amap';
// CDN 方式
// let amapManager = new VueAMap.AMapManager();
export default {
  data: function() {
    return {
      // amapManager,
      dizhi:'',
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        dragend: (o) => {
          console.log(this.$refs.map.$$getCenter())
          this.marker.position = this.$refs.map.$$getCenter()
          $geocode_regeo(this.marker.position.join(',')).then((res) => {
            console.log(res)
            this.dizhi = res.data.regeocode.formatted_address
          })
        },
        'zoomchange': () => {},
        'click': (e) => {
          alert('map clicked');
        }
      },
      marker: {
        position: [121.59996, 31.197646],

      }


    };
  },
  created() {

  },
  computed: {

  },
  methods: {
    getMap() {
      // amap vue component
      console.log(amapManager._componentMap);
      // gaode map instance
      console.log(amapManager._map);
    }
  }
};

</script>
