<template>
  <div class="ercode">
    <div class="ercode-box">
      <div class="ercode-content">
        <div class="flower">
          <img src="https://h5.boqiicdn.com/shop-min/flower.png" alt="">
        </div>
        <img src="https://h5.boqiicdn.com/shop-min/ercode.png" alt="">
        <div class="flower-picker">
          <img src="../assets/images/login/flower-picker.png" alt="">
        </div>
      </div>
    </div>
    <div class="help">
      长按二维码关注“波奇四季”公众号，订花更方便。
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ercode',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.ercode {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0.8rem;
  font-size: 0;
  .help {
    color: #000000;
    font-size: 0.24rem;
    margin-top: 0.4rem;
  }
  .flower {
    width: 1rem;
    height: 1.2rem;
    position: absolute;
    left: -0.8rem;
    top: -0.8rem
  }
  .flower-picker {
    width: 0.38rem;
    height: 0.48rem;
    position: absolute;
    right: -0.68rem;
    bottom: 0rem;
  }
  .ercode-content {
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    margin-left: auto;
    margin-right: auto
  }
}
</style>
