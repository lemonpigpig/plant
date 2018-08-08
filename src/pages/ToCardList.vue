<template>
  <div class="to-card_list flex-box" style="height:100vh;">
    <div class="tabber">
      <div class="tabber-item" @click.stop="handleSwitch(1)" :class="{active: currentTabIndex === 1}">未读</div>
      <div class="tabber-item" @click.stop="handleSwitch(2)" :class="{active: currentTabIndex === 2}">已读</div>
    </div>
    <div class="list" v-infinite-scroll="loadMore">
      <div  v-if="currentTabIndex === 1">
        <div class="list-item" v-for="item in list" @click="handlePreview(item, 0)">
          <img src="https://h5.boqiicdn.com/shop-min/envelop.png" alt="">
          <div class="heart">
            <img src="../assets/images/card/heart.png" alt="">
          </div>
          <div class="time">
            {{getFormatDate(item.createdAt)}}
          </div>
        </div>
      </div>
    
       <div v-if="currentTabIndex === 2">
        <div class="list-item item-read"  v-for="item in listRead" @click="handlePreview(item, 1)">
          <div class="from">“from {{item.signature ? item.signature : '神秘人'}}”</div>
          <img src="https://h5.boqiicdn.com/shop-min/envelop-read.png" alt="">
          <div class="heart">
            <img src="../assets/images/card/heart.png" alt="">
          </div>
          <div class="time read-time">
            {{getFormatDate(item.createdAt)}}
            <!-- {{item.createdAt && item.createdAt.split('T')[0]}} -->
          </div>
        </div>
      </div>
    </div>
    <div class="submit-btn preview-btn" @click="handleExchange">
      <span>
        切换账号
      </span>
      <span>
        Exchange
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Cookie from 'js-cookie'
import { tool } from '@/utils'

const statusMap = {
  1: '已读贺卡',
  0: '未读贺卡'
}
export default {
  data () {
    return {
      list: [],
      listRead: [],
      currentTabIndex: 0,
      metadata: {},
      paging: false,
      isLoading: false,
      isLoading1: false
    }
  },
  methods: {
    ...mapActions([
      'getCardList',
      'tagRead'
    ]),
    getFormatDate (str) {
      return tool.getFormatDate(str)
    },
    handleExchange () {
      this.$router.push('/login/1?exchange=1')
    },
    loadMore () {
      const tab = localStorage.getItem('tabCurrent')
      this.getList(Number(tab) - 1 || 0)
    },
    handlePreview (item, type) {
      if (type === 0) {
        this.tagRead({
          params: {
            id: item.id,
          },
          recipient: item.recipient,
          token: Cookie.get('recieveInfo') && JSON.parse(Cookie.get('recieveInfo')).code
        }).then((res) => {
          console.log('给收花人发送短信s-----res:', res)
        })
      }
      localStorage.setItem('wishDetail', JSON.stringify(item))
      this.$router.push(`/editPreview?tab=${this.currentTabIndex}&status=1`)
    },
    handleSwitch (type) {
      localStorage.setItem('tabCurrent', type)
      // this.$router.replace({
      //   name: this.$route.name,
      //   query: 
      // })
      this.currentTabIndex = type
      this.metadata = {}
      this.paging = true
      this.handleRest()
      if (type === 1) {
        this.getList(0)
      } else if (type === 2) {
        this.getList(1)
      }
    },
    handleRest () {
      this.list = []
      this.listRead = []
    },
    throttle (isRead, value) {
      if (isRead === 0) {
        this.isLoading = value;
      } else if (isRead === 1) {
        this.isLoading1 = value;
      }
    },
    async getList (isRead) {
      if( isRead === 0 && this.isLoading ) return;
      if( isRead === 1 && this.isLoading1 ) return;
      let params = {
        recipient: Cookie.get('recieveInfo') && JSON.parse(Cookie.get('recieveInfo')).phone,
        isRead: isRead,
        token: Cookie.get('recieveInfo') && JSON.parse(Cookie.get('recieveInfo')).code
      }
      if (this.metadata.minid) {
        params.minid = this.metadata.minid
        params.limit = 10
      }
      this.throttle(isRead, true)
      const {data, metadata, status} =  await this.getCardList(params)
      
      if (status === 0) {
        this.throttle(isRead, false)
        this.metadata = metadata
        if (isRead === 0 && data && data.length > 0) {
          this.list = [...this.list, ...data]
        } else if (isRead === 1 && data && data.length > 0) {
          // this.listRead = data
          this.listRead = [...this.listRead, ...data]
        }
      }
    },
    initTab () {
      // this.paging = false
      const tab = localStorage.getItem('tabCurrent')
      this.currentTabIndex = Number(tab) || 1
      // this.getList(Number(tab) - 1 || 0)
    }
  },
  mounted () {
    this.initTab()
    // const tab = localStorage.getItem('tabCurrent')
    // this.currentTabIndex = Number(tab) || 1
  },
  watch: {
  
  }
}
</script>

<style lang="scss" scoped>
.to-card_list {
  overflow: scroll;
  .submit-btn {
    width: 6.72rem;
    margin-left: auto;
    margin-right: auto
  }
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
    height: calc( 100vh - 2.2rem );
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
        &.read-time {
          bottom: .5rem;
        }
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
