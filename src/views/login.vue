<template>
  <div>
    <regitop toptitle="登陆bilibili" rightext="去注册" pathway="/register"></regitop>
    <regform myplac="请输入账号" rules="^.{6,16}$" mynm="账号" @checkdata="data=>datalist.username=data"></regform>
    <regform myplac="请输入密码" mytype="password" rules="^.{6,16}$" mynm="密码" @checkdata="data=>datalist.password=data"></regform>
    <regbtn btntext="登陆" @submitdata="_submitdata"></regbtn>
  </div>
</template>

<script>
import regitop from '@/components/regitop'
import regform from '@/components/regform'
import regbtn from '@/components/regbtn'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: {
        username: '',
        password: ''
      }
    }
  },
  components: { regitop, regform, regbtn },
  methods: {
    _submitdata () {
      if (this.datalist.username && this.datalist.password) {
        axios.post('http://112.74.99.5:3000/web/api/login', this.datalist).then(res => {
          if (res.data.code === 200) {
            localStorage.setItem('myid', res.data.id)
            localStorage.setItem('mytoken', res.data.token)
            this.$Toast.success(res.data.msg)
            setTimeout(() => {
              this.$router.push('/home')
            }, 1000)
          } else {
            this.$Toast.fail(res.data.msg)
          }
        })
      } else {
        this.$Toast.fail('格式不正确' + '   ' + '请重新输入')
      }
    }
  }
}
</script>

<style>
</style>
