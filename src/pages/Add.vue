<template>
  <div class="add-card flex-box">
    <div class="layout-add_top">
    </div>
    <div class="flex-content">
    </div>
    <div class="form-lists">
      <div class="form-item">
        <div class="item-icon phone-icon">
          <img src="../assets/images/login/phone-icon.png" alt="">
        </div>
        <div class="item-content">
          <!-- <input type="text" class="item-input"
          @focus="focus('isShowPhonePlace')"
          @blur="blur('isShowPhonePlace', 'phone')"> -->
          <div class="placeholder-help">
            <template>
              <div>订花人手机号码</div>
              <div class="eg-help">Sender's tel</div>
            </template>
          </div>
        </div>
      </div>
      
      <div style="background:#FFE7E7">
        <div class="form-item">
          <div class="item-icon captcha-icon">
            <img src="../assets/images/login/captcha-icon.png" alt="">
          </div>
          <div class="item-content">
            <!-- <input type="text" class="item-input"
            @focus="focus('isShowCaptchaPlace')"
            @blur="blur('isShowCaptchaPlace', 'captcha')"> -->
            <div class="placeholder-help">
              <template>
                <div>图形验证码</div>
                <div class="eg-help">Verification code</div>
              </template>
            </div>
          </div>
        </div>
        <div class="form-item" style="background: #FFE7E7;">
          <div class="item-icon certificate-icon">
            <img src="../assets/images/login/certificate-icon.png" alt="">
          </div>
          <div class="item-content">
            <!-- <input type="text" class="item-input"
            @focus="focus('isShowCertificatePlace')"
            @blur="blur('isShowCertificatePlace', 'certificate')"> -->
            <div class="placeholder-help">
              <div>
                <div>手机验证码</div>
                <div class="eg-help">Verification code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submit-btn">
        <span>
          提交
        </span>
        <span>
          Submit
        </span>
      </div>
       <div class="submit-btn">
        <span>
          预览
        </span>
        <span>
          Preview
        </span>
      </div>
    </div>
    <div class="layout-add_bottom">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  methods: {
    focus (type) {

    },
    blur (type) {

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

.add-card {
   .form-lists {
     .form-item {
       .item-content {
         background: transparent;
       }
     }
   }
}
</style>
