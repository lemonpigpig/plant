<template>
  <div class="card-detail content-box">
    <div class="detail-box">
      <div class="layout-butterfly">
        <img src="https://h5.boqiicdn.com/shop-min/butterfly.png" alt="">
      </div>
      <div class="layout-title">
        To：尊敬的顾客
      </div>
      <div class="layout-line_big">
        <img src="../assets/images/card/lang-line_big.png" alt="">
      </div>
      <div class="detail-content">
        <div v-for="(item, index) in rowsArr" class="content-item">
          {{item}}
        </div>
      </div>

      <div class="layout-bottom_from">
        <div class="layout-butterfly2">
          <img src="https://h5.boqiicdn.com/shop-min/butterfly-type2.png" alt="">
        </div>
        <div class="layout-from">
          From：波奇四季鲜花店
        </div>
        <div class="layout-line">
          <img src="../assets/images/card/lang-line.png" alt="">
        </div>
        <div class="layout-time">
          {{currentDate}}
        </div>

      </div>

      <div class="reciever-left">
        <img src="https://api-dev.boqiicdn.com/Ff9zQCpWlayout-left.png" alt="">
      </div>
      <div class="reciever-top_right">
        <img src="https://api-dev.boqiicdn.com/lIQvKJkBlayout-right_top.png" alt="">
      </div>
      <div class="reciever-left_bottom">
        <img src="https://api-dev.boqiicdn.com/ztwFb4julayout-left_bottom.png" alt="">
      </div>
      <div class="reciever-right_bottom">
        <img src="https://api-dev.boqiicdn.com/IteoH1ihlayout-right_bottom.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { tool } from '@/utils'

export default {
  data () {
    return {
      currentDate: null,
      content: '收到这束花，说明您身边的人在关心您祝福您。这一束鲜花，蕴含着设计师的创意，花艺师的努力和配送员的辛勤，希望您能喜欢。今后的岁月里，希望能继续得到您的支持，我们将继续为您提供真诚的服务。愿您天天开心，向您表示衷心的感谢和美好的祝福！'
    }
  },
  computed: {
    rowsArr() {
      let rows = Math.ceil((this.content.length+2)/20)
      let start = 0
      let rowsArr = []
      for (var i=0; i<rows; i++) {
        if (i === 0) {
          rowsArr.push(this.content.substring(start, 18))
          start = 18
        } else {
          rowsArr.push(this.content.substring(start, start+20))
          start = start+20
        }
      }
      return rowsArr
    }
  },
  methods: {
   
  },
  mounted () {
    this.currentDate = tool.getNowFormatDate()
  },
  watch: {
  
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout.scss'; /*引入公共样式*/

.card-detail {
  padding: 0 .32rem 0 .32rem;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  height: 100vh;
  .layout-butterfly2 {
    width: .66rem;
    height: .7rem;
    position: absolute;
    bottom: .9rem;
    right: -.5rem;
  }
  .layout-bottom_from {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    // width: 1.96rem;
    float: right;
    margin-top: .8rem;
    position: relative;
    right: .8rem;
  }
  .reciever-top_right {
    position: absolute;
    top: -.3rem;
    right: 0;
    width: 2.06rem;
  }
  .reciever-left {
    position: absolute;
    bottom: 1.7rem;
    left: 0;
    width: 2.06rem;
  }
  .reciever-left_bottom {
    position: absolute;
    bottom: -.6rem;
    left: -.32rem;
    width: 1.5rem;
  }
  .reciever-right_bottom {
    position: absolute;
    bottom: -.6rem;
    right: -.32rem;
    width: 3.2rem;
  }
  // overflow: hidden;
  .detail-box {
    background: #FFFFFF;
    position: relative;
    width: 100%;
    height: 9.8rem;
    margin-top: .34rem;
    .layout-butterfly {
      width: .78rem;
      height: .96rem;
      position: absolute;
      top: .45rem;
      left: .08rem;
    }
    .layout-title {
      padding-top: 1.4rem;
      margin-left: .62rem;
      color: #333333;
      font-size: .3rem;
      line-height: .22rem;
      text-align: left;
      font-weight: bold;
    }
    .layout-line_big {
      position: absolute;
      left: .52rem;
      top: 1.75rem;
      width: 2.06rem;
      height: .22rem;
    }
    .layout-line {
      right: .82rem;
      bottom: 1.78rem;
      width: 3rem;
      height: .18rem;
    }
    .layout-from {
      color: #333333;
      font-weight: bold;
      font-size: 0.3rem;    font-weight: bold;
      font-size: 0.3rem;
    }
    .layout-time {
      color: #333333;
      font-size: .22rem;
      text-align: center;
      margin-top: .22rem;
    }
    .detail-content {
      padding: 0 .62rem;
      margin-top: .58rem;
      color: #333333;
      font-size: .24rem;
      text-align: left;
      .content-item {
        position: relative;
        height: .50rem;
        margin-bottom: 0.2rem;
        &:first-child {
          text-indent: .5rem;
        }
        &:after {
          position: absolute;
          content: '';
          left: 0;
          bottom: 0px;
          right: 0px;
          height: 1px;
          background: #FFE7E7;
        }
        letter-spacing: .02rem;
      }
    }
  }
  .edit-btn {
    border-radius:.46rem;
    width: 6.72rem;
    margin-top: .4rem;
    margin-bottom: .86rem;
  }
}
</style>
