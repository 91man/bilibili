<template>
  <ul>
    <li @click="logopath" class="logo"><span class="iconfont icon-bilibili"></span></li>
    <li>
      <span class="iconfont icon-sousuo"></span>
      <img :src="topimg?topimg:'https://i0.hdslb.com/bfs/face/member/noface.jpg@48w_48h_1c.png'" @click="smalllogo" />
      <van-button type="primary" color="#fb7299" class="downapp">下载APP</van-button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['topimg'],
  methods: {
    smalllogo () {
      this.$emit('smallpath')
    },
    logopath () {
      this.$emit('homelink')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
ul {
  display: flex;
  padding: 0 0.2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 1rem;
  li.logo {
    color: #fb7299;
    span {
      font-size: 0.58rem;
    }
  }
  li {
    .icon-sousuo {
      color: #ddd;
      font-size: 0.4rem;
      vertical-align: middle;
    }
    img {
      border-radius: 50%;
      width: 0.48rem;
      height: 0.48rem;
      margin-left: .15rem;
      vertical-align: middle;
    }
    .downapp {
      vertical-align: middle;
      height: 0.56rem;
      font-size: .24rem;
      border-radius: .1rem;
      margin-left: .15rem;
    }
  }
}
</style>
