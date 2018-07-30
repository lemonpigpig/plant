<template>
  <div class="to-card_list flex-box">
    <div class="tabber">
      <div class="tabber-item" @click.stop="handleSwitch(1)" :class="{active: currentTabIndex === 1}">未读</div>
      <div class="tabber-item" @click.stop="handleSwitch(2)" :class="{active: currentTabIndex === 2}">已读</div>
    </div>
    <div class="list">
      <div class="list-item" v-for="item in list" v-if="currentTabIndex === 1">
        <img src="../assets/images/card/envelop.png" alt="">
        <div class="heart">
          <img src="../assets/images/card/heart.png" alt="">
        </div>
        <div class="time">
          2018.07.12
        </div>
      </div>
      <div class="list-item item-read"  v-for="item in listRead" v-if="currentTabIndex === 2">
        <div class="from">“from 小宝贝”</div>
        <img src="../assets/images/card/envelop-read.png" alt="">
        <div class="heart">
          <img src="../assets/images/card/heart.png" alt="">
        </div>
        <div class="time">
          2018.07.12
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5],
      listRead: [],
      currentTabIndex: 1
    }
  },
  methods: {
    handleSwitch (type) {
      this.currentTabIndex = type
      if (type === 1) {
        this.list = [1, 2, 3, 4, 5]
      } else if (type === 2) {
        this.listRead = [1, 2]
      }
    }
  },
  mounted () {
  },
  watch: {
  
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout.scss'; /*引入公共样式*/
.to-card_list {
  overflow: scroll;
  .tabber {
    display: flex;
    background: #ffffff;
    font-size: .32rem;
    justify-content: space-around;
    padding: .18rem 0 .28rem 0;
    // position: fixed;
    width: 100%;
    z-index: 999;
    .tabber-item {
      background: #ffffff;
      flex: 1;
    }
    &-item {
      color: #333333;
      &.active {
        color: #FF7A7A;
      }
    }
  }
  .list {
    display: flex;
    margin-top: 1.2rem;
    align-items: center;
    flex-direction: column;
    .list-item {
      width: 6.86rem;
      height: 3.6rem;
      margin-bottom: .2rem;
      position: relative;
      .heart {
        width: .4rem;
        height: .54rem;
        position: absolute;
        right: .38rem;
        bottom: .35rem;
      }
      .time {
        position: absolute;
        color: #666666;
        font-size: .26rem;
        right: .78rem;
        bottom: .35rem;
      }
      &.item-read {
        height: 4.26rem;
        justify-content: center;
        .from {
          color: #7D8169;
          font-size: .27rem;
          position: absolute;
          top: 1.35rem;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}

</style>
