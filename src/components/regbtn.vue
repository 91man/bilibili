<template>
  <div>
    <button @click="_resdata">{{btntext}}</button>
  </div>
</template>

<script>
export default {
  props: {
    btntext: String
  },
  methods: {
    _resdata () {
      this.$emit('submitdata')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
  div{
    padding: 0 0.2rem;
    margin-top: .1rem;
    button{
      height: .8rem;
      background: #ff55ff;
      color: #fff;
      font-size: .28rem;
      border-radius: .08rem;
      width: 100%;
      border: none;
    }
  }
</style>
