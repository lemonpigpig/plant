<template>
  <div class="add-card flex-box">
    <div class="add-left_top">
      <img src="../assets/images/add/add-left_top.png" alt="">
    </div>
    <div class="add-right_bottom">
      <img src="https://h5.boqiicdn.com/shop-min/add-right_bottom.png" alt="">
    </div>
    <div class="form-lists">
      <div class="form-item">
        <div class="item-icon phone-icon">
          <img src="../assets/images/login/phone-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="number" class="item-input"
          @focus="focus('isShowPhonePlace')"
          @blur="blur('isShowPhonePlace', 'phone')"
          maxlength="11"
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
      <div class="form-item form-radio">
        <div class="item-icon certificate-icon">
          <img src="../assets/images/add/msg.png" alt="">
        </div>
        <div class="msg-type">
          <div class="form-radio_item custom-msg">
            <!-- <div class="self-radio" :class="[activeRadio === 1 ? 'self-radio-radio_checked' : 'self-radio-checked_not']"></div> -->
            <div class="help">
              <span>自定义留言</span>
              <span>customize</span>
            </div>
          </div>
          <div class="form-radio_item template-msg" @click="handleRadio(2)">
            <!-- <div class="self-radio" :class="[activeRadio === 2 ? 'self-radio-radio_checked' : 'self-radio-checked_not']"></div> -->
            <div class="help select-template">
              <span>选择模版</span>
              <span>template</span>
            </div>
          </div>
        </div>
        
      </div>
      <div class="form-item textarea-item">
        <div class="item-icon certificate-icon">
          <!-- <img src="../assets/images/login/certificate-icon.png" alt=""> -->
        </div>
        <div class="item-content item-content-textarea">
          <textarea name="ddddd" id="" cols="30" :rows="rows" class="item-input item-textarea"
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
          <img src="../assets/images/add/signature.png" alt="">
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
import { rule, tool } from '@/utils'

export default {
  data () {
    return {
      // activeRadio: 1,
      phone: '',
      title: '',
      signature: '',
      msg: '',
      isShowPhonePlace: true,
      isShowTitlePlace: true,
      isShowFromPlace: true,
      isShowMsgPlace: true,
      from: 1,
      type: 0,
      rows: 3
    }
  },
  methods: {
    ...mapActions([
      'addCard',
      'editCard'
    ]),
    handleRadio (type) {
      // this.activeRadio = type
      if (type === 2) {
        this.storeTempDeatil()
        this.$router.push('/wishTemplate?from=add')
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
    check (submitData) {
      if (!submitData.recipient) {
        this.$message('收花人电话号码不能为空！')
      }
      if (!rule.checkPhone(submitData.recipient)) {
        this.$message('收花人电话号码错误！')
        return false
      }
      if (submitData.giver === submitData.recipient) {
        this.$message('订花人不能是自己！')
        return false
      }
      if (!submitData.title) {
        this.$message('称呼不能为空')
        return false
      }
      if (!submitData.message) {
        this.$message('留言不能为空')
        return false
      }
      return true
    },
    handleSubmit () {
      const submitData = {
        giver: Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')).phone,
        recipient: this.phone,
        token: Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')).code,
        title: this.title,
        message: this.msg,
        signature: this.signature,
        from: '订花人'//this.signature,
      }
      if (!this.check(submitData)) {
        return false
      }
      this.addCard(submitData).then(res => {
        this.$message('新增成功')
        this.$router.push('/giver')
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
      this.$router.push('/addPreview')
    }
  },
  mounted () {
    // this.msg = sessionStorage.getItem('templateInfo') && JSON.parse(sessionStorage.getItem('templateInfo')).content
    // this.type = this.$route.query.type
    const wishDetail = localStorage.getItem('wishDetail') && JSON.parse(localStorage.getItem('wishDetail'))
    wishDetail && this.handleUpdate(wishDetail)
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
      // console.log('-----msg length--:', newVal.length)
      if (!newVal) {
        this.isShowMsgPlace = true
      } else {
        if (newVal.length < 100) {
          this.rows = 3
        } else if (newVal.length < 150) {
          this.rows = 4
        } else if (newVal.length < 200) {
          this.rows = 5
        }
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
        margin-top: 0.3rem;
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
            top:12px;
          }
        }
        .item-textarea {
          // height: 1rem;
          height: auto;
          border: none;
          outline: none;
          position: relative;
          z-index: 999;
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
      align-items: flex-start;
      &:after {
        height: 0;
      }
      .select-template {
        width: 1.7rem;
        height: .54rem;
        border: 1px solid #ffa0a0;
        border-radius: .64rem;
        display: flex;
        &>span {
          transform: scale(.9);
        }
      }
      .msg-type {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
      }
      .form-radio_item {
        display: flex;
        align-items: flex-start;
        &.template-msg {
          margin-left: 0.58rem;
        }
        .help {
          display: flex;
          flex-direction: column;
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
