<template>
  <div>
    <centertop @homelink="$router.push('/home')" :topimg="datalist.user_img"></centertop>
    <div class="topimgbox"><img class="topbanner" src="https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/bannerTop_new.png"/></div>
    <centerdetail @reledit="$router.push('/edit')" :mybigimg="datalist.user_img"></centerdetail>
    <h3 class="name">{{datalist.name}}</h3>
    <p class="mark">{{datalist.user_desc?datalist.user_desc:'这个人很神秘，什么也没写'}}</p>
  </div>
</template>
<script>
import centertop from '@/components/centertop'
import centerdetail from '@/components/centerdetail'
export default {
  data () {
    return {
      datalist: {}
    }
  },
  components: {
    centertop, centerdetail
  },
  beforeCreate () {
    this.$http.get('/user/' + localStorage.getItem('myid'), {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('mytoken')
      }
    }).then(res => {
      this.datalist = res.data[0]
    })
  }
}
</script>
<style lang="scss" scoped="scoped">
  .topimgbox{
    height: 1.8rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    .topbanner{
      width: 100%;
    }
  }
  .name{
    margin-top: .3rem;
    padding-left: .2rem;
    font-size: .32rem;
    font-weight: normal;
  }
.mark{
  color: #999;
  font-size: .2rem;
  padding:0 .2rem;
  margin-top: .05rem;
}
</style>
