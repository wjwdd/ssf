<template>
  
  <div class="hello">
     <cube-button @click="tzym">跳转页面</cube-button>
    <yd-button size="large" type="danger" @click.native="show3 = true">左侧弹出</yd-button>
    <yd-popup v-model="show3" position="left" width="60%">
            <yd-button type="danger" style="margin: 30px;" @click.native="show3 = false">Close Left Popup</yd-button>
        </yd-popup>
   <cube-button @click="showDateSegmentPicker">StartDate - EndDate</cube-button>
    <cube-button @click="showToast">show toast</cube-button>
    <cube-upload
     
  :action="action"
  :simultaneous-uploads="1"
  @files-added="filesAdded"
  @file-success="filesSuccess"
  @file-removed="fileRemove" />
  <cube-button @click="showAlert">Dialog - type</cube-button>
   <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
  
</template>

<script>
  const dateSegmentData = [
  {
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      action:{
        target:'http://yxrjapi.dongdukeji.com/index.php?m=Api&c=Qita&a=img_upload',
        fileName:'img'
      },
      show3:false
    }
  },
  mounted () {
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectedDates, selectedVals, selectedTexts) => {
        this.$createDialog({
          type: 'warn',
          content: `Selected Items: <br/> - 入学时间: ${selectedTexts[0].join('')} <br/> - 毕业时间: ${selectedTexts[1].join('')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          })
        }
      }
    })
  },
  methods: {
    showDateSegmentPicker() {
      this.dateSegmentPicker.show()
    },
    showToast () {
      this.$createToast({
        txt: this.toastTxt
      }).show()
    },
    filesAdded(files) {
      console.log(files)
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
    filesSuccess(e){
      console.log(e)
    },
    fileRemove(e){
      console.log(e)
    },
     showAlert() {
      this.$createDialog({
        type: 'alert',
        title: '我是标',
        content: '我是内容',
        icon: 'cubeic-alert'
      }).show()
    },
    tzym(){
      this.$router.push({
          name: 'helloWorld'
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amap-wrapper {
  width: 500px;
  height: 500px;
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
