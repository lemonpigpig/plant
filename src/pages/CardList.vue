<template>
  <div class="card-list flex-box">
    <div class="card-list_content" v-infinite-scroll="loadMore">
      <div class="content-item" v-for="(item, index) in list" @click="handlePreview(item)" :key="index">
        <div class="content-title">
          To：{{item.to}}({{item.recipient}})
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
import Cookie from 'js-cookie'
import { tool } from '@/utils'


export default {
  data () {
    return {
      list: [],
      metadata: {}
    }
  },
  methods: {
   ...mapActions([
      'getCardList'
    ]),
    handlePreview (item) {
      localStorage.setItem('wishDetail', JSON.stringify(item))
      this.$router.push(`/editPreview?status=${item.status}`)
    },
    loadMore () {
      let params = {
        giver: Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')).phone,
        token: Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')).code,
      }
      if (this.metadata.minid) {
        params.minid = this.metadata.minid
        params.limit = 10
      }
      this.getList(params)
      console.log('------loadMore------:')
    },
    async getList (params) {
      const {status, data, metadata} = await this.getCardList(params)
      console.log('status,d ata:', status, data)
      if (status === 0) {
        this.metadata = metadata
        if (data && data.length > 0) {
          this.list = data.map(item => Object.assign({}, item, {
            status: item.readAt ? 1 : 0,
            phone: item.recipient,
            time: tool.getFormatTime(item.createdAt),
            // item.createdAt && `${item.createdAt.split('T')[0]} ${item.createdAt.split('T')[1] && item.createdAt.split('T')[1].split('.')[0]}`,
            to: item.title,
          }))
        }
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
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      word-wrap: break-word;
    }
    .time {
      text-align: right;
      margin-top: .1rem;
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
