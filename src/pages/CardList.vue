<template>
  <div class="card-list flex-box">
    <div class="card-list_content">
      <div class="content-item" v-for="(item, index) in list" @click="handlePreview(item)" :key="index">
        <div class="content-title">
          To：{{item.to}}
        </div>
        <div class="content-short">
          {{item.message}}
        </div>
        <div class="time">
          {{item.time}}
        </div>
        <div class="status-icon" :class="[item.status === 1 ? 'read' : 'not-read']">
          {{
            item.status === 1 ? '收花人已读' : '收花人未读'
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
   ...mapActions([
      'getCardList'
    ]),
    handlePreview (item) {
      localStorage.setItem('wishDetail', JSON.stringify(item))
      this.$router.push(`/detail/0`)
    }
  },
  mounted () {
    this.getCardList({
      giver: '18516555321',
      token: 9527,//localStorage.getItem('giverInfo') && JSON.parse(localStorage.getItem('giverInfo')).code,
    }).then((res) => {
      this.list = res.data.map(item => Object.assign({}, item, {
        status: item.readAt ? 1 : 0,
        phone: item.recipient,
        createdAt: item.createdAt && item.createdAt.split('T')[0],
        to: item.title,
      }))
    })
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
      height: .8rem;
      overflow: hidden;
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
