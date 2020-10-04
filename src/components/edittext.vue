<template>
  <ul>
    <li @click="changeinfo">
      <div>{{label}}</div>
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['label'],
  methods: {
    changeinfo () {
      this.$emit('tochangeinfo')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
ul{
  border-bottom: 1px solid #ededed;
  padding: 0 .2rem;
  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .24rem 0;
    color: #666;
    font-size: .28rem;
  }
}
</style>
