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
          @blur="blur('isShowPhonePlace', 'phone')">
          <div class="placeholder-help">
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
          @focus="focus('isShowCaptchaPlace')"
          @blur="blur('isShowCaptchaPlace', 'captcha')">
          <div class="placeholder-help">
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
      <div class="form-item" v-if="activeRadio===1">
        <div class="item-icon certificate-icon">
          <img src="../assets/images/login/certificate-icon.png" alt="">
        </div>
        <div class="item-content" style="height: auto;">
          <div ref="sendContent" contenteditable="true" v-html="sendContent" class="item-input item-textarea"
          @focus="focus('isShowCertificatePlace')"
          @blur="blur('isShowCertificatePlace', 'certificate')"></div>
          <div class="placeholder-help">
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
          @focus="focus('isShowCertificatePlace')"
          @blur="blur('isShowCertificatePlace', 'certificate')">
          <div class="placeholder-help">
            <div>
              <div>落款<span>(不填写默认为匿名)</span></div>
              <div class="eg-help">From</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <div class="submit-btn">
          <span>
            提交
          </span>
          <span>
            Submit
          </span>
        </div>
        <div class="submit-btn preview-btn">
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
export default {
  data () {
    return {
      activeRadio: 2,
      sendContent: '',
      phone: '',
      captcha: '',
      certificate: '',
      minHeight: null,
      isShowPhonePlace: true,
      isShowCaptchaPlace: true,
      isShowCertificatePlace: true
    }
  },
  methods: {
    handleRadio (type) {
      this.activeRadio = type
    },
    focus (type) {

    },
    blur (type) {

    },
    sendMsg () {
      console.log('---------sendMsg---------')
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
@import '../assets/css/style.scss'; /*引入公共样式*/;

.add-card {
   .form-lists {
      top: 0.6rem;
    .form-item {
      margin-top: 0.64rem;
      &:first-child {
        margin-top: 0;
      }
      .item-content {
        background: transparent;
        .item-textarea {
          width: 5.32rem;
          min-height:0.48rem;
          border: none;
          outline: none;
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
