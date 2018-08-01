<template>
  <div class="login flex-box">
    <div class="layout-top">
    </div>
    <div class="flex-content">
    </div>
    <div class="form-lists">
      <div class="form-item">
        <div class="item-icon phone-icon">
          <img src="../assets/images/login/phone-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input" v-model="phone"
          @focus="focus('isShowPhonePlace')"
          @blur="blur('isShowPhonePlace', 'phone')">
          <div class="placeholder-help">
            <template v-if="isShowPhonePlace">
              <div>订花人手机号码</div>
              <div class="eg-help">Sender's tel</div>
            </template>
          </div>
        </div>
      </div>
      
      <div style="background:#FFE7E7">
        <div class="rem1" style="background: transparent;"></div>
        <div class="form-item">
          <div class="item-icon captcha-icon">
            <img src="../assets/images/login/captcha-icon.png" alt="">
          </div>
          <div class="item-content">
            <input type="text" class="item-input" v-model="captcha"
            @focus="focus('isShowCaptchaPlace')"
            @blur="blur('isShowCaptchaPlace', 'captcha')">
            <div class="placeholder-help">
              <div v-if="isShowCaptchaPlace">
                <div>图形验证码</div>
                <div class="eg-help">Verification code</div>
              </div>
              <div class="send-btn send-btn_captchas" @click="sendCaptchaCode">
                <img :src="url" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="rem1"></div>
        <div class="form-item" style="background: #FFE7E7;">
          <div class="item-icon certificate-icon">
            <img src="../assets/images/login/certificate-icon.png" alt="">
          </div>
          <div class="item-content">
            <input type="text" class="item-input" v-model="certificate"
            @focus="focus('isShowCertificatePlace')"
            @blur="blur('isShowCertificatePlace', 'certificate')">
            <div class="placeholder-help">
              <div v-if="isShowCertificatePlace">
                <div>手机验证码</div>
                <div class="eg-help">Verification code</div>
              </div>
              <div class="send-btn" @click="getCode">发送验证码</div>
            </div>
          </div>
        </div>
      </div>
     
      <div class="rem12"></div>
      <div class="submit-btn" @click="userLogin">
        <span>
          提交
        </span>
        <span>
          Submit
        </span>
      </div>
    </div>
    <div class="layout-bottom_bg">
    </div>
    <Ercode/>
  </div>
</template>

<script>
import Ercode from '@/components/Ercode.vue'
import { mapActions, mapGetters } from "vuex"
import { PLANTDOMAIN } from '@/service/apiConfig'

const typeMap = {
  1: '收花人',
  0: '订花人'
}
export default {
  data () {
    return {
      phone: '',
      captcha: '',
      certificate: '',
      minHeight: null,
      isShowPhonePlace: true,
      isShowCaptchaPlace: true,
      isShowCertificatePlace: true,
      url: `${PLANTDOMAIN}/extern/captchas?width=110&height=40&length=4`,
      type: null
    }
  },
  components: {
    Ercode
  },
  methods: {
    ...mapActions([
      'login',
      'sendCode',
      'checkCode'
    ]),
    focus (type) {
      this.$set(this, type, false)
    },
    blur (type, value) {
      if (!this[value]) {
        console.log("type:", type, this[value])
        this.$set(this, type, true)
      }
    },
    storeCode (code) {
      localStorage.setItem('code', code)
    },
    storeLoginInfo (obj, type) {
      if (type === 1) {
        obj && localStorage.setItem('giverInfo', JSON.stringify(obj))
      } else if (type === 2) {
        obj && localStorage.setItem('recieveInfo', JSON.stringify(obj))
      }
    },
    async userLogin () {
      debugger
      if (this.type === '0') {
        await this.login({
          username: this.phone,
          token: this.certificate,
          type: 6
        }).then((res) => {
          console.log(res)
          this.storeLoginInfo({
            code: this.certificate,
            phone: this.phone
          }, 1)
          this.$router.push('/giver')
        })
      } else if (this.type === '1') {
        let { status } = await this.checkCode({
          mobile: this.phone,
          type: 6,
          token: this.certificate
        })
        if (status === 0) {
          this.storeLoginInfo({
            code: this.certificate,
            phone: this.phone
          }, 2)
          this.$router.push('/toList')
        }
      }
    },
    sendCaptchaCode () {
      this.url = this.url+'&b='+Math.random()
    },
    getCode () {
      this.sendCode({
        mobile: this.phone,
        captcha: this.captcha,
        type: 6,
        params: {
          requestno: 1,
        }
      }).then((res) => {
        console.log('-----res-----:', res)
      }, (err) => {
        console.log('------err-----:', err)
      })
    },
  },
  mounted () {
    this.type = this.$route.params.id
    console.log('from id:', typeof this.type, this.type)
  },
  watch: {
    phone (newVal, oldVal) {
      if (!newVal) {
        this.isShowPhonePlace = true
      } else {
        this.isShowPhonePlace = false
      }
    },
    captcha (newVal, oldVal) {
      if (!newVal) {
        this.isShowCaptchaPlace = true
      } else {
        this.isShowCaptchaPlace = false
      }
    },
    certificate (newVal, oldVal) {
      if (!newVal) {
        this.isShowCertificatePlace = true
      } else {
        this.isShowCertificatePlace = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout.scss'; /*引入公共样式*/

.login {
  color: #FF6463;
  flex: 1;
  background: #FFE7E7;
  flex-direction: column;
  font-size: 0.24rem;
  .submit-btn {
    width: 100%;
    height: 0.88rem;
    text-align: center;
    // margin-top: 1.2rem;
    background: #FF7A7A;
    border-radius: 0.44rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 0.2rem 0 0.2rem 0;
    box-sizing: border-box;
  }
  
  img {
    width: 100%;
  }
  .rem1 {
    width: 100%;
    height: 1rem;
    background: #FFE7E7;
  }
  .rem12{
    width: 100%;
    height: 1.2rem;
    background: #FFE7E7;
  }
  .form-lists {
    top: 80px;
    padding: 0px 34px 0 41px;
    box-sizing: border-box;
    font-size: 0.24rem;
    position: absolute;
    z-index: 9999;
    width: 100%;
    // background: #FFE7E7;
    .form-item {
      display: flex;
      align-items: center;
      position: relative;
      // margin-top: 1rem;
      &:first-child {
        margin-top: 0px;
      }
      &:after {
        position: absolute;
        content: '';
        background: #FF6463;
        left: 36px;
        bottom: -10px;
        right: 0px;
        height: 1px;
      }
      .item-icon {
        margin-right: 10px;
        width: 26px;
        height: 26px;
        background: transparent;
      }
      .item-content {
        flex: 1;
        text-align: left;
        position: relative;
        height: 24px;
        background: #FFE7E7;
        .placeholder-help {
          .eg-help {
            margin-top: 5px;
            font-size: 0.2rem
          }
          .send-btn_captchas {
            border: none;
            img {
              border-radius: 0.26rem;
            }
          }
        }
        input {
          width: 100%;
          position: absolute;
          bottom: 0px;
          height: 100%;
          color: #FF6463;
          background: transparent;
          font-size: 0.26rem;
        }
       
      }
    }
  }
}
</style>
