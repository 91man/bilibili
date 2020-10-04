<template>
  <div>
    <centertop :topimg="datalist.user_img" @smallpath="$router.push('/center')"></centertop>
    <van-tabs v-model="active" swipeable animated>
      <van-tab :title="data.title" v-for="data in navlist" :key="data._id">
        <van-pull-refresh v-model="data.refreshing" @refresh="onRefresh">
          <van-list :immediate-check="false" v-model="data.loading" :finished="data.finished" finished-text="没有更多了" @load="onLoad">
            <ul>
              <detail :articleve="article" v-for="article in data.list" :key="article.id"></detail>
            </ul>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import centertop from '@/components/centertop'
import detail from '@/components/detail'
export default {
  data () {
    return {
      datalist: {},
      navlist: [],
      active: 0
    }
  },
  methods: {
    onLoad () {
      var eachone = this.eacharticle()
      setTimeout(() => {
        if (eachone.refreshing) {
          eachone.list = []
          eachone.refreshing = false
        }
        if (eachone.page === 8) {
          eachone.finished = true
        } else {
          this.articlebox()
          eachone.page += 1
          eachone.loading = false
        }
      }, 1000)
    },
    onRefresh () {
      var eachone = this.eacharticle()
      eachone.finished = false
      eachone.loading = true
      this.onLoad()
    },
    async articlebox () {
      var eachone = this.eacharticle()
      console.log(eachone._id)
      const res = await this.$http.get('/detail/' + eachone._id, {
        params: {
          page: eachone.page,
          pagesize: eachone.pagesize
        }
      })
      eachone.list.push(...res.data)
    },
    eacharticle () {
      return this.navlist[this.active]
    }
  },
  components: {
    centertop,
    detail
  },
  watch: {
    active () {
      this.articlebox()
    }
  },

  created () {
    this.$http.get('/category').then(res => {
      // this.navlist = res.data
      var arr = res.data
      var arr2 = arr.map(item => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        item.loading = false
        item.finished = false
        item.refreshing = false
        return item
      })
      this.navlist = arr2
    })
    this.$http
      .get('/user/' + localStorage.getItem('myid'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('mytoken')
        }
      })
      .then(res => {
        this.datalist = res.data[0]
      })
  }
}
</script>

<style lang="scss" scoped="scoped">
ul {
  margin-top: 0.2rem;
  padding: 0 0.1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
