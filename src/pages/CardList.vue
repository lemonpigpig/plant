<template>
  <div class="card-list flex-box">
    <div class="card-list_content">
      <div class="content-item" v-for="item in list">
        <div class="content-title">
          To：小宝贝
        </div>
        <div class="content-short">
          关于你，我有太多东西关于你。清醒的时候放不下矜持，不敢说我喜欢你，只有在某个夜晚...
        </div>
        <div class="time">
          2018.07.12
        </div>
        <div class="status-icon read">
          收花人已读
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
   
  },
  mounted () {
  },
  watch: {
  
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout.scss'; /*引入公共样式*/

.card-list {
  background: #FFE7E7;
  padding: 0 .32rem;
  box-sizing: border-box;
  text-align: left;
  overflow: scroll;
  padding: .6rem 0.32rem;
  .content-item {
    height: 2.16rem;
    background: #fff;
    color: #333333;
    position: relative;
    padding: .3rem .34rem .24rem .34rem;
    border-radius:.20rem;
    box-sizing: border-box;
    margin-bottom: .2rem;
    .content-title {
      font-size: .3rem;
    }
    .content-short {
      margin-top: .24rem;
      line-height: .44rem;
    }
    .time {
      text-align: right;
    }
    .status-icon {
      position: absolute;
      width: 1.26rem;
      height: .3rem;
      // background-size: 100% 100%;
      // color: #fff;
      font-size: .2rem;
      text-align: right;
      line-height: .3rem;
      top: .3rem;
      right: 0;
      padding: .02rem .08rem .02rem .22rem;
      &.read{
        color: #FF6463;
        background: url('../assets/images/card/read.png');
        background-size: 100% 100%;
      }
      &.not-read {
        color: #FFFFFF;
        background: url('../assets/images/card/not-read.png');
        background-size: 100% 100%;
      }
    }

  }
}
</style>
