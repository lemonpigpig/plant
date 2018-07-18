<template>
  <div class="login" :style="{minHeight: minHeight}">
    <div class="layout-top">
      <img src="../assets/images/layout/layout-top.png" alt="">
    </div>
    <div class="form-lists">
      <div class="form-item">
        <div class="item-icon phone-icon">
          <img src="../assets/images/login/phone-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input" v-model="phone"
          @focus="focus">
          <div class="placeholder-help" @click="handleClick()">
            <template v-if="isShowPlaceholder">
              <div>订花人手机号码</div>
              <div class="eg-help">Sender's tel</div>
            </template>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-icon captcha-icon">
          <img src="../assets/images/login/captcha-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input" v-model="phone"
          @focus="focus">
          <div class="placeholder-help" @click="handleClick('phone')">
            <template v-if="isShowPlaceholder">
              <div>图形验证码</div>
              <div class="eg-help">Verification code</div>
            </template>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-icon certificate-icon">
          <img src="../assets/images/login/certificate-icon.png" alt="">
        </div>
        <div class="item-content">
          <input type="text" class="item-input" v-model="phone"
          @focus="focus">
          <div class="placeholder-help" @click="handleClick()">
            <template v-if="isShowPlaceholder">
              <div>手机验证码</div>
              <div class="eg-help">Verification code</div>
            </template>
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
    </div>
    <!-- <div class="layout-bottom">
      <div class="ercode">
        <div class="ercode-img">
           <div class="layout-flower">
            <img src="../assets/images/login/flower.png" alt="">
          </div>
          <div class="layout-flower_picker">
            <img src="../assets/images/login/flower-picker.png" alt="">
          </div>
        </div>
      </div>
    </div> -->
    <div class="layout-bottom_bg">
      <img src="../assets/images/layout/layout-bottom.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowPlaceholder: true,
      phone: '',
      minHeight: null
    }
  },
  methods: {
    focus () {
      this.isShowPlaceholder = false
      // this.minHeight = document.documentElement.clientHeight + 'px'
    },
    handleClick () {
      this.isShowInput = true
    }
  },
  mounted () {
    console.log('from id:', this.$route.params)
  },
  watch: {
    phone (newVal, oldVal) {
      if (!newVal) {
        this.isShowPlaceholder = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../assets/css/layout.scss';

.login {
  width: 100%;
  height: 100%;
  color: #FF6463;
  flex: 1;
  background: #FFE7E7;
  flex-direction: column;
  flex-shrink: none;
  font-size: 0.48rem;
  display: flex;
  .layout-top {
    width: 100%;
  }
  .ercode {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    .ercode-img {
      width: 2rem;
      height: 2rem;
      background: red;
      display: inline-block;
      position: relative;
    }
  }
  .submit-btn {
    width: 100%;
    height: 0.88rem;
    text-align: center;
    margin-top: 1rem;
    background: #FF7A7A;
    border-radius: 0.44rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding: 0.2rem 0 0.2rem 0;
    box-sizing: border-box;
  }
  .layout-bottom {
    position: absolute;
    width: 100%;
    bottom: 150px;
    .layout-flower {
      width: 50px;
      height: 60px;
      position: absolute;
      left: -38px;
      top: -38px;
    }
    .layout-flower_picker {
      position: absolute;
      width: 19px;
      height: 24px;
      right: -38px;
      bottom: 0px;
    }
  }
  .layout-bottom_bg {
    // width: 100%;
    height: 100%;
    flex: 1;
  }
  img {
    width: 100%;
    pointer-events: none;
    user-select:none;
  }

  .form-lists {
    padding: 0px 34px 0 41px;
    box-sizing: border-box;
    font-size: 0.24rem;
    position: relative;
    // flex: 1;
    margin-top: -64px;
    .form-item {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 1rem;
      &:first-child {
        margin-top: 0px;
      }
      &:after {
        position: absolute;
        content: '';
        background: #FF6463;
        left: 32px;
        bottom: -10px;
        right: 0px;
        height: 1px;
      }
      .item-icon {
        margin-right: 5px;
        width: 26px;
        height: 26px;
      }
      .phone-icon {
      }
      .item-content {
        flex: 1;
        // border-bottom: 1px solid #FF6463;
        text-align: left;
        position: relative;
        height: 24px;
        input {
          width: 100%;
          position: absolute;
          bottom: 0px;
          height: 100%;
          color: #FF6463;
          background: transparent;
        }
        .eg-help {
          margin-top: 5px;
          font-size: 0.2rem
        }
      }
    }
  }
}
</style>
