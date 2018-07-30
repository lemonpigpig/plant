<template>
  <div class="wish-template flex-box">
    <div class="scroll-outer_box">
      <div class="category-scroll" ref="slider">
        <div class="category-content" :style="{width: contentWidth}"
        ref="content">
          <div class="category-item" v-for="(item, index) in cates" :key="index" 
          :class="{'active': index === currentTabIndex}" @click="handleSwitch(index)">
            {{item.name}}
          </div>
          <div style="width:100%;height:40px"></div>
        </div>
      </div>
    </div>
  
    <div class="template-list">
      <div class="template-item">
        愿生活里有热汤和甜食
        <br/>
        背包里有书本和远方。<br/>

        愿一切困难都能云淡风轻<br/>

        每身孤独都拥抱共鸣。<br/>

        长夜里总有梦想发亮，秋收春耕。<br/>

        人海中常有良友相伴，长乐未央。<br/>

        所求皆如愿，所行化坦途，<br/>

        多喜乐，长安宁。<br/>
      </div>
      <div class="template-item">
        美丽玫瑰花，心愿内里藏。送给知音人，相知又相傍。今生只为你，誓言对你讲。花朵会枯萎，爱情不变样。愿你收下这份情，你我幸福长！
      </div>
      <div class="template-item">
        愿生活里有热汤和甜食
        <br/>
        背包里有书本和远方。<br/>

        愿一切困难都能云淡风轻<br/>

        每身孤独都拥抱共鸣。<br/>

        长夜里总有梦想发亮，秋收春耕。<br/>

        人海中常有良友相伴，长乐未央。<br/>

        所求皆如愿，所行化坦途，<br/>

        多喜乐，长安宁。<br/>
      </div>
      <div class="template-item">
        美丽玫瑰花，心愿内里藏。送给知音人，相知又相傍。今生只为你，誓言对你讲。花朵会枯萎，爱情不变样。愿你收下这份情，你我幸福长！
      </div>
        <div class="template-item">
        愿生活里有热汤和甜食
        <br/>
        背包里有书本和远方。<br/>

        愿一切困难都能云淡风轻<br/>

        每身孤独都拥抱共鸣。<br/>

        长夜里总有梦想发亮，秋收春耕。<br/>

        人海中常有良友相伴，长乐未央。<br/>

        所求皆如愿，所行化坦途，<br/>

        多喜乐，长安宁。<br/>
      </div>
      <div class="template-item">
        美丽玫瑰花，心愿内里藏。送给知音人，相知又相傍。今生只为你，誓言对你讲。花朵会枯萎，爱情不变样。愿你收下这份情，你我幸福长！
      </div>
      
    </div>
    <div class="layout-flower">
      <img src="../assets/images/login/flower.png" alt="">
    </div>
    <div class="layout-flower_picker">
      <img src="../assets/images/flower-picer_reverse.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentWidth: 'auto',
      currentTabIndex: 0,
      cates: [{
        id: 1,
        name: '爱情'
      }, {
        id: 1,
        name: '友情'
      }, {
        id: 1,
        name: '亲情'
      }, {
        id: 1,
        name: '其他'
      }
      ]
    }
  },
  methods: {
    handleSwitch (index) {
      this.currentTabIndex = index
    }
  },
  mounted () {
    const arr = Array.from(this.$refs.content.children)
    const children = arr.map((item, index) => {
      if(index < arr.length-1) {
        return item.clientWidth
      } else {
        return 0
      }
    })
    console.log('children:', children)
    let itemWidth = children.reduce((accumulator, current) => {
      return accumulator + current
    })
    let marginWidth = children.length * 25;
    this.contentWidth = `${itemWidth + marginWidth}px`
    console.log('this.contentWidth:', this.contentWidth)
   
  },
  watch: {
  
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/layout.scss'; /*引入公共样式*/
.wish-template {
  background: #FFE7E7;
  font-size: 0.28rem;
  overflow: scroll;
  .scroll-outer_box {
    height: 0.72rem;
    overflow: hidden;
    padding-top: .34rem;
    padding-bottom: 0.3rem;
    position: fixed;
    width: 100%;
    background: #FFE7E7;
    z-index: 999;
  }
  .category-scroll {
    color: #FF8E8D;
    height: auto;
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding: 0 0.3rem 0 0.3rem;
    .category-content {
      // height: 50px;
      position: relative;
      .category-item {
        &.active {
          background: #FF7A7A;
          color: #FFFFFF;
        }
        padding: 0 0.54rem;
        // width: 1.62rem;
        height:  0.72rem;
        line-height: 0.72rem;
        border-radius: 0.36rem;
        background: #FFFFFF;
        margin-right: 25px;
        display: inline-block;
      }
    }
  
  }
  .template-list {
    color: #333333;
    margin-top: 1.36rem;
    padding: 0 0.32rem;
    text-align: left;
    font-size: 0.28rem;
    position: relative;
    z-index: 998;
    .template-item {
      padding: 0.42rem 0.88rem 0.52rem;
      background: rgba(255,255,255,.66); 
      line-height: 0.38rem;
      border-radius:0.2rem;
      margin-bottom: .2rem;
    }
  }
  .layout-flower {
    width: 1rem;
    height: 1.18rem;
    position: fixed;
    top: 4.55rem;
    right: 0;
  }
  .layout-flower_picker {
    width: .38rem;
    height: .40rem;
    position: fixed;
    bottom: 3.6rem;
    left: 1.08rem;
  }
}
</style>
