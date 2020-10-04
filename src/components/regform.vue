<template>
<van-field class="inp" v-model="value" :label="mynm" :placeholder="myplac" :type="mytype" />
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: ['myplac', 'rules', 'mynm', 'mytype'],
  watch: {
    value () {
      this.regfun()
    }
  },
  methods: {
    regfun () {
      var relreg = new RegExp(this.rules)
      if (relreg.test(this.value)) {
        this.$emit('checkdata', this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.inp{
   font-size: .28rem;
   height: 1rem;
   border-top: 1px solid #ddd;
   border-bottom: 1px solid #ddd;
   margin-bottom: .2rem;
}
</style>
