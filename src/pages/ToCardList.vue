<template>
  <div class="to-card_list flex-box" style="height:100vh;">
    <div class="tabber">
      <div class="tabber-item" @click.stop="handleSwitch(1)" :class="{active: currentTabIndex === 1}">未读</div>
      <div class="tabber-item" @click.stop="handleSwitch(2)" :class="{active: currentTabIndex === 2}">已读</div>
    </div>
    <div v-if="currentTabIndex === 1" class="list" v-infinite-scroll="loadMore">
      <div class="list-item" v-for="item in list" @click="handlePreview(item, 0)">
        <img src="../assets/images/card/envelop.png" alt="">
        <div class="heart">
          <img src="../assets/images/card/heart.png" alt="">
        </div>
        <div class="time">
          {{item.createdAt && item.createdAt.split('T')[0]}}
        </div>
      </div>
    </div>
    <div v-if="currentTabIndex === 2" class="list" v-infinite-scroll="loadMore">
      <div>
      <div class="list-item item-read"  v-for="item in listRead" @click="handlePreview(item, 1)">
        <div class="from">“from {{item.from}}”</div>
        <img src="../assets/images/card/envelop-read.png" alt="">
        <div class="heart">
          <img src="../assets/images/card/heart.png" alt="">
        </div>
        <div class="time">
          {{item.createdAt && item.createdAt.split('T')[0]}}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Cookie from 'js-cookie'

const statusMap = {
  1: '已读贺卡',
  0: '未读贺卡'
}
export default {
  data () {
    return {
      list: [],
      listRead: [],
      currentTabIndex: 1,
      testFont: '56px'
    }
  },
  methods: {
    ...mapActions([
      'getCardList',
      'tagRead'
    ]),
    loadMore () {
      console.log('------loadMore------:')
    },
    handlePreview (item, type) {
      if (type === 0) {
        this.tagRead({
          params: {
            id: item.id,
          },
          recipient: item.recipient,
          token: 9527,//localStorage.getItem('recieveInfo') && JSON.parse(localStorage.getItem('recieveInfo')).code,
        }).then((res) => {
          console.log('给收花人发送短信s-----res:', res)
        })
      }
      localStorage.setItem('wishDetail', JSON.stringify(item))
      this.$router.push(`/detail/1`)
    },
    handleSwitch (type) {
      this.currentTabIndex = type
      if (type === 1) {
        this.getList(0)
      } else if (type === 2) {
        this.getList(1)
      }
    },
    async getList (isRead) {
      const {data} =  await this.getCardList({
        recipient: Cookie.get('recieveInfo') && JSON.parse(Cookie.get('recieveInfo')).phone,
        // localStorage.getItem('recieveInfo') && JSON.parse(localStorage.getItem('recieveInfo')).phone,
        isRead: isRead,
        token: Cookie.get('recieveInfo') && JSON.parse(Cookie.get('recieveInfo')).code
        // 9527,
        //localStorage.getItem('recieveInfo') && JSON.parse(localStorage.getItem('recieveInfo')).code,
      })
      if (isRead === 0) {
        this.list = data
      } else if (isRead === 1) {
        this.listRead = data
      }

      console.log('-----data-----:', data)
    }
  },
  mounted () {
    this.getList(0)
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
    box-sizing: border-box;
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
    // padding-top: 1.2rem;
    padding:0.2rem 0;
    align-items: center;
    flex-direction: column;
    flex:1;
    height: calc( 100vh - .8rem );
    overflow-y: scroll;
    box-sizing: border-box;
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
