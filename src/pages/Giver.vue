<template>
  <div class="giver flex-box">
    <div class="layout-top">
    </div>
    <div class="flex-content">
    </div>
    <div class="layout-bottom_bg">
    </div>
    <div class="giver-content">
      <div class="giver-box">
        <div class="add-card_btn add-card" @click="handleJump(1)">
          <span class="chinese">
            已购买鲜花，填写电子贺卡
          </span>
          <span>
            Have bought flowers and filled in e-cards
          </span>
        </div>
        <div class="add-card_btn edit-card" @click="handleJump(2)">
          <span class="chinese">
            修改已有电子贺卡
          </span>
          <span>
            Modify existing e-cards
          </span>
        </div>
      </div>
      <div class="card-help">
        <span>说明：只支持修改收花人未读的贺卡。</span>
        <span>Only modified CARDS that are not read by the recipient</span>
      </div>
    </div>
    <Ercode/>
  </div>
</template>

<script>
import Ercode from '@/components/Ercode.vue';

export default {
  data () {
    return {
     
    }
  },
  components: {
    Ercode
  },
  methods: {
    handleJump (type) {
      if (type === 1) {
        this.$router.push('/add')
      } else if (type === 2) {
        this.$router.push('/list')
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
.giver {
    width: 100%;
    color: #FF6463;
    flex: 1;
    background: #FFE7E7;
    flex-direction: column;
    font-size: 0.24rem;
    display: flex;
    font-size: 0.22rem;
    .giver-content {
      padding: 0 0.74rem 0 0.7rem;
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      top: 1.4rem;
      .giver-box {
        width: 100%;
        .add-card_btn {
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 1.04rem;
          border-radius: 0.52rem;
          padding: 0.26rem 0 0.22rem 0;
          box-sizing: border-box;
          .chinese {
            margin-bottom: 0.1rem;
            font-size: 0.26rem;
          }
        }
        .add-card {
          background: #FF7A7A;
          color: #FFFFFF;
        }
        .edit-card {
          background: #FF7A7A;
          color: #FFFFFF;
          border: 1px solid #FF6463;
          color: #FF6463;
          background: #FFE7E7;
          margin-top: 0.4rem;
        }
      }
      .card-help {
        display: flex;
        flex-direction: column;
        margin-top: 0.25rem;
        line-height: 0.3rem;
      }
    }

}
</style>
