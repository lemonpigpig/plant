<template>
  <div class="add-card flex-box">
    <div class="add-left_top">
      <img src="../assets/images/add/add-left_top.png" alt="">
    </div>
    <div class="add-right_bottom">
      <img src="../assets/images/add/add-right_bottom.png" alt="">
    </div>
    <div class="form-lists">
      <div class="form-item">
        <div class="item-icon phone-icon">
          <img src="../assets/images/login/phone-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input"
          @focus="focus('isShowPhonePlace')"
          @blur="blur('isShowPhonePlace', 'phone')" 
          v-model="phone">
          <div class="placeholder-help" v-if="isShowPhonePlace">
            <template>
              <div>收花人手机号码*</div>
              <div class="eg-help">Recipient's tel</div>
            </template>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-icon captcha-icon">
          <img src="../assets/images/login/captcha-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input"
          @focus="focus('isShowTitlePlace')"
          @blur="blur('isShowTitlePlace', 'title')"
          v-model="title">
          <div class="placeholder-help" v-if="isShowTitlePlace">
            <template>
              <div>称呼*</div>
              <div class="eg-help">To</div>
            </template>
          </div>
        </div>
      </div>
      <div class="form-radio">
        <div class="form-radio_item custom-msg" @click="handleRadio(1)">
          <div class="self-radio" :class="[activeRadio === 1 ? 'self-radio-radio_checked' : 'self-radio-checked_not']"></div>
          <div class="help">
            <span>自定义留言</span>
            <span>customize</span>
          </div>
        </div>
        <div class="form-radio_item template-msg" @click="handleRadio(2)">
          <div class="self-radio" :class="[activeRadio === 2 ? 'self-radio-radio_checked' : 'self-radio-checked_not']"></div>
          <div class="help">
            <span>使用留言模版</span>
            <span>select template</span>
          </div>
        </div>
      </div>
      <div class="form-item textarea-item">
        <div class="item-icon certificate-icon">
          <img src="../assets/images/login/certificate-icon.png" alt="">
        </div>
        <div class="item-content item-content-textarea">
          <textarea name="ddddd" id="" cols="30" rows="10" class="item-input item-textarea"
          maxlength="200" 
          @focus="focus('isShowMsgPlace')"
          @blur="blur('isShowMsgPlace', 'msg')"
          v-model="msg"></textarea>
          <div class="placeholder-help" v-if="isShowMsgPlace">
            <div>
              <div>留言*<span>(不超过200字)</span></div>
              <div class="eg-help">Leave a message</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-item" style="background: #FFE7E7;">
        <div class="item-icon certificate-icon">
          <img src="../assets/images/login/certificate-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input"
          @focus="focus('isShowFromPlace')"
          @blur="blur('isShowFromPlace', 'signature')"
          v-model="signature">
          <div class="placeholder-help">
            <div v-if="isShowFromPlace">
              <div>落款<span>(不填写默认为匿名)</span></div>
              <div class="eg-help">From</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <div class="submit-btn" @click="handleSubmit">
          <span>
            提交
          </span>
          <span>
            Submit
          </span>
        </div>
        <div class="submit-btn preview-btn" @click="handlePreiw">
          <span>
            预览
          </span>
          <span>
            Preview
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Cookie from 'js-cookie'

export default {
  data () {
    return {
      activeRadio: 1,
      phone: '',
      title: '',
      signature: '',
      msg: '',
      isShowPhonePlace: true,
      isShowTitlePlace: true,
      isShowFromPlace: true,
      isShowMsgPlace: true,
      from: 1,
      type: 0
    }
  },
  methods: {
    ...mapActions([
      'addCard'
    ]),
    handleRadio (type) {
      this.activeRadio = type
      if (type === 2) {
        this.storeTempDeatil()
        this.$router.push('/wishTemplate')
      }
    },
    focus (type) {
      console.log('focus:', type)
      this.$set(this, type, false)
    },
    blur (type, value) {
      if (!this[value]) {
        console.log("type:", type, this[value])
        this.$set(this, type, true)
      }
    },
    handleInput () {
      let value = this.$refs.sendContent.innerHTML
      if(!value || value.length < 1) {
        this.isShowMsgPlace = true
      } else {
        this.isShowMsgPlace = false
      }
    },
    handleSubmit () {
      const submitData = {
        giver: Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')).phone,
        recipient: this.phone,
        token: Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')).code,
        title: this.title,
        message: this.msg,
        signature: this.signature,
        from: this.signature
      }
      console.log('------submitData----:', submitData)
      this.addCard(submitData).then(res => {
        this.$message('添加成功')
        this.$router.push('/giver')
        // sessionStorage.removeItem('templateInfo')
        localStorage.removeItem('wishDetail')
      })
     
    },
    handleUpdate (detail) {
      this.phone = detail.phone
      this.title = detail.title
      this.signature = detail.signature
      this.msg = detail.message
    },
    storeTempDeatil () {
      const wishDetail = {
        from: this.signature,
        message: this.msg,
        phone: this.phone,
        recipient: this.phone,
        signature: this.signature,
        title: this.title
      }
      localStorage.setItem('wishDetail', JSON.stringify(wishDetail))
    },
    handlePreiw () {
      this.storeTempDeatil()
      this.$router.push('/detail/0')
    }
  },
  mounted () {
    // this.msg = sessionStorage.getItem('templateInfo') && JSON.parse(sessionStorage.getItem('templateInfo')).content
    this.type = this.$route.query.type
    const wishDetail = localStorage.getItem('wishDetail') && JSON.parse(localStorage.getItem('wishDetail'))
    wishDetail && this.handleUpdate(wishDetail)
    console.log('---type:----, this.$router.query.type', this.$route.query.type)
    // console.log('----templateInfo-----:', sessionStorage.getItem('templateInfo'))
  },
  watch: {
    phone (newVal, oldVal) {
      if (!newVal) {
        this.isShowPhonePlace = true
      } else {
        this.isShowPhonePlace = false
      }
    },
    title (newVal, oldVal) {
      if (!newVal) {
        this.isShowTitlePlace = true
      } else {
        this.isShowTitlePlace = false
      }
    },
    msg (newVal, oldVal) {
      console.log('-----msg--:', newVal)
      if (!newVal) {
        this.isShowMsgPlace = true
      } else {
        this.isShowMsgPlace = false
      }
    },
    signature (newVal, oldVal) {
      if (!newVal) {
        this.isShowFromPlace = true
      } else {
        this.isShowFromPlace = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout.scss'; /*引入公共样式*/
@import '../assets/css/style.scss'; /*引入公共样式*/;

.add-card {
   .form-lists {
      top: 0.6rem;
    .form-item {
      margin-top: 0.64rem;
      &.textarea-item {
        // align-items: flex-start;
        &:after {
          bottom: 0
        }
      }
      &:first-child {
        margin-top: 0;
      }
      .item-content {
        background: transparent;
        &.item-content-textarea {
          height: auto;
          .placeholder-help {
            position: absolute;
            top: 18px;
          }
        }
        .item-textarea {
          // width: 5.32rem;
          // min-height: 0.48rem;
          // max-height: 1.68rem;
          height: 1rem;
          border: none;
          outline: none;
          position: static;
          // height: 200px;
        }
      }
    }
    .btn-box {
      margin-top: 1rem;
      .preview-btn {
        margin-top: 0.4rem;
        border: 1px solid #FF7A7A;
        background: transparent;
        color: #FF6463;
      }
    }
    .form-radio {
      margin-top: 0.64rem;
      display: flex;
      .form-radio_item {
        display: flex;
        align-items: flex-start;
        &.template-msg {
          margin-left: 0.58rem;
        }
        .help {
          display: flex;
          flex-direction: column;
          margin-left: 0.22rem;
        }
      }
    }
    
   }
   .add-left_top {
     width: 2.26rem;
     height: 2.38rem;
     position: absolute;
     left: 0;
     top: 0;
   }
   .add-right_bottom {
     width: 3.72rem;
     height: 5.2rem;
     position: absolute;
     right: 0;
     bottom: 0.62rem;
   }
}
</style>
