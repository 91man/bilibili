<template>
  <ul>
    <li></li>
    <li class="title">{{toptitle}}</li>
    <li class="right" @click="myway">{{rightext}}</li>
  </ul>
</template>

<script>
export default {
  props: ['toptitle', 'rightext', 'pathway'],
  methods: {
    myway () {
      this.$router.push(this.pathway)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
ul{
  margin-bottom: .2rem;
  border-bottom: 1px solid #ddd;
  height: 0.88rem;
  display: flex;
  align-items: center;
  li{
    flex: 1;
    text-align: center;
  }
  li.title{
    text-align: center;
    flex: 2;
  }
  li.right{
    font-size: 0.24rem;
  }
}
</style>
