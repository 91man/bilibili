<template>
  <div>
    <regitop toptitle="注册bilibili" rightext="去登陆" pathway="/login"></regitop>
    <regform myplac="请输入用户名" rules="^.{6,16}$" mynm="用户名" @checkdata="data=>datalist.name=data"></regform>
    <regform myplac="请输入账号" rules="^.{6,16}$" mynm="账号" @checkdata="data=>datalist.username=data"></regform>
    <regform myplac="请输入密码" mytype="password" rules="^.{6,16}$" mynm="密码" @checkdata="data=>datalist.password=data"></regform>
    <regbtn btntext="注册" @submitdata="_submitdata"></regbtn>
  </div>
</template>

<script>
import regitop from '@/components/regitop'
import regform from '@/components/regform'
import regbtn from '@/components/regbtn'
export default {
  data () {
    return {
      datalist: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  components: { regitop, regform, regbtn },
  methods: {
    async _submitdata () {
      if (this.datalist.name && this.datalist.username && this.datalist.password) {
        const res = await this.$http.post('http://112.74.99.5:3000/web/api/register', this.datalist)
        if (res.data.code === 200) {
          this.$Toast.success(res.data.msg)
          localStorage.setItem('myid', res.data.id)
          localStorage.setItem('mytoken', res.data.objtoken)
          setTimeout(() => {
            this.$router.push('/home')
          }, 1000)
          console.log(res.data)
        } else {
          this.$Toast.fail(res.data.msg)
        }
      } else {
        this.$Toast.fail('格式不正确' + '   ' + '请重新输入')
      }
    }
  }
}
</script>
