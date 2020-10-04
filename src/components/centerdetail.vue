<template>
  <ul>
    <li><img class="userbig" :src="mybigimg ? mybigimg : 'https://i0.hdslb.com/bfs/face/member/noface.jpg'" /></li>
    <li class="info">
      <div class="basedata">
        <p>
          <span class="num">3</span>
          <span>粉丝</span>
          <i></i>
        </p>
        <p>
          <span class="num">100</span>
          <span>关注</span>
          <i></i>
        </p>
        <p>
          <span class="num">40</span>
          <span>获赞</span>
        </p>
      </div>
      <div class="editbtn" @click="_emitedit"><van-button type="primary" color="#fb7299" class="downapp" plain>编辑资料</van-button></div>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    _emitedit () {
      this.$emit('reledit')
    }
  },
  props: ['mybigimg']
}
</script>

<style lang="scss" scoped="scoped">
ul {
  margin-top: -0.1rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  .userbig {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
  }
  li.info {
    flex: 1;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .basedata {
      display: flex;
      align-items: center;
      justify-content: space-around;
      p {
        flex: 1;
        position: relative;
        i {
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          background: #ddd;
          width: 1px;
        }
        span {
          display: block;
          text-align: center;
          color: #999;
          font-size: 0.22rem;
        }
        span.num {
          color: #333;
        }
      }
    }
    .downapp {
      height: 0.58rem;
      width: 100%;
    }
  }
}
</style>
