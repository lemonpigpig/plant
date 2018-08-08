<template>
  <!-- <div class="card-detail content-box">
    <div class="detail-box">
      <div class="layout-butterfly">
        <img src="https://h5.boqiicdn.com/shop-min/butterfly.png" alt="">
      </div>
      <div class="layout-title">
        To：{{detail.title}}
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
          From：{{detail.signature ? detail.signature : '神秘人'}}
        </div>
        <div class="layout-line">
          <img src="../assets/images/card/lang-line.png" alt="">
        </div>
        <div class="layout-time">
          {{getFormatDate(detail.createdAt)}}
        </div>
      </div>
      <div class="flower-bottom_left">
         <img src="https://api-dev.boqiicdn.com/f5JhliPT%E5%9B%BE%E5%B1%821%403x.png" alt="">
      </div>
      <div class="flower-right_top">
        <img src="https://h5.boqiicdn.com/shop-min/flower-right_top.png" alt="">
      </div>
    </div>
  
  </div> -->
  <Detail/>
</template>

<script>
import { tool } from '@/utils'
import Detail from '@/components/ui/Detail'

export default {
  data () {
    return {
    //   content: '',
    //   detail: {
    //     title: '',
    //     from: '',
    //     createdAt: ''
    //   },
    //   status: null
    }
  },
  components: {
    Detail
  },
  methods: {
    // getFormatDate (str) {
    //   return tool.getFormatDate(str)
    // },
    // handleEdit () {
    //   this.$router.push(`/add`)
    // }
  },
  mounted () {
    // this.content = localStorage.getItem('wishDetail') && JSON.parse(localStorage.getItem('wishDetail')).message
    // this.detail = localStorage.getItem('wishDetail') && JSON.parse(localStorage.getItem('wishDetail'))
  }
}
</script>

<style lang="scss" scoped>

.card-detail {
  padding: 0 .32rem 0 .32rem;
  box-sizing: border-box;
  display: flex;
  .layout-bottom_from {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    // width: 1.96rem;
    float: right;
    margin-top: 1.5rem;
    margin-bottom: .6rem;
    position: relative;
    right: .8rem;
  }
  .layout-line {
    // position: absolute;
    right: .82rem;
    bottom: 1.78rem;
    width: 1.96rem;
    height: .18rem;
  }
  .layout-from {
    color: #333333;
    font-weight: bold;
    font-size: 0.3rem;
    // position: absolute;
    // right: .78rem;
    // bottom: 2.05rem;
  }
  .layout-butterfly2 {
    width: .66rem;
    height: .7rem;
    position: absolute;
    bottom: .9rem;
    right: -.5rem;
  }
  .flower-right_top {
    position: absolute;
    top: 0;
    right: 0;
    height: 2.56rem;
    width: 2.76rem;
  }
  // overflow: hidden;
  .detail-box {
    background: #FFFFFF;
    position: relative;
    width: 100%;
    height: 11.1rem;
    margin-top: .34rem;
    overflow: scroll;
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
   
    .layout-time {
      color: #333333;
      font-size: .22rem;
      text-align: center;
      margin-top: .22rem;
      // position: absolute;
      // right: 1.28rem;
      // bottom: 1.38rem;
    }
    .detail-content {
      padding: 0 .62rem;
      margin-top: .58rem;
      color: #333333;
      font-size: .24rem;
      text-align: left;
      .content-item {
        position: relative;
        // height: .50rem;
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
    position: fixed;
    bottom: -40px;
  }
}
</style>
