<template>
  <div class="wish-template flex-box">
    <div class="scroll-outer_box">
      <div class="category-scroll" ref="slider">
        <div class="category-content" :style="{width: contentWidth}"
        ref="content">
          <div class="category-item" v-for="(item, index) in cates" :key="index" 
          :class="{'active': index === currentTabIndex}" @click="handleSwitch(index, item)">
            {{item.title}}
          </div>
          <div style="width:100%;height:40px"></div>
        </div>
      </div>
    </div>
  
    <div class="template-list">
      <div class="template-item" v-for="(item, index) in templates" :key="index" @click="handleSelect(item)">
        {{item.content}}
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
import { mapActions, mapGetters } from "vuex"

export default {
  data () {
    return {
      contentWidth: 'auto',
      currentTabIndex: 0,
      cates: [],
      templates: []
    }
  },
  methods: {
    ...mapActions([
      'getCategoryList',
      'getCategoryTemplateList'
    ]),
    handleSelect (item) {
      // localStorage.setItem('activeRadio', 2) 
      this.$router.push('/add')
      localStorage.setItem('templateInfo', JSON.stringify(item)) 
      console.log('---item-----:', item)
    },
    handleSwitch (index, item) {
      this.currentTabIndex = index
      this.getTemplateList(item.id)
    },
    initScroll () {
      const arr = Array.from(this.$refs.content.children)
      const children = arr.map((item, index) => {
        if(index < arr.length-1) {
          console.log('---item.clientWidth---:', item.clientWidth)
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
    async getTemplateList (id) {
      const { data } = await this.getCategoryTemplateList({
        category: id
      })
      this.templates = data
      console.log('-----data------:', data)
    }
  },
  mounted () {
    this.getCategoryList().then((res) => {
      this.cates = res.data
      this.$nextTick(() => {
        this.initScroll()
      })
      let id = res.data[0] && res.data[0].id
      this.getTemplateList(id)
    })
   
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
        // width: 90px;
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
