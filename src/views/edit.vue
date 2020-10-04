<template>
  <div>
    <centertop @homelink="$router.push('/home')" :topimg="datalist.user_img" @smallpath="$router.push('/center')"></centertop>
    <edittext label="头像" class="userimgbox">
      <van-uploader preview-size="100vw" class="imgload" :after-read="afterRead" />
      <img class="userimg" :src="datalist.user_img ? datalist.user_img : 'https://i0.hdslb.com/bfs/face/member/noface.jpg@48w_48h_1c.png'" />
    </edittext>
    <edittext label="用户名" @tochangeinfo="show = true">
      <div class="rightinfo">{{ datalist.username }}</div>
    </edittext>
    <edittext label="昵称" @tochangeinfo="show = true">
      <div class="rightinfo">{{ datalist.name }}</div>
    </edittext>
    <edittext label="性别" @tochangeinfo="selects = true">
      <div class="rightinfo">{{ datalist.gender ? datalist.gender : '请选择' }}</div>
    </edittext>
    <edittext label="个性签名">
      <div class="rightinfo">{{ datalist.user_desc ? datalist.user_desc : '这个人很懒，什么都没写' }}</div>
    </edittext>
    <div class="bottombtn">
      <button @click="_exitlogin">退出登录</button>
      <button @click="$router.back()">返回个人中心</button>
    </div>
    <van-dialog v-model="show" title="用户名" show-cancel-button @confirm="infosubmit">
      <van-field v-model="message" rows="1" autosize  type="textarea" placeholder="请输入留言" />
    </van-dialog>
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="infosubmit2">
      <van-field v-model="message" rows="1" autosize  type="textarea" placeholder="请输入留言" />
    </van-dialog>
    <van-action-sheet
      v-model="selects"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
      @select="_select"
    />
  </div>
</template>
<script>
import centertop from '@/components/centertop'
import edittext from '@/components/edittext'
export default {
  data () {
    return {
      datalist: {},
      show: false,
      message: '请输入内容',
      selects: false,
      actions: [{ name: '男' }, { name: '女' }]
    }
  },
  beforeMount () {
    this.$http
      .get('/user/' + localStorage.getItem('myid'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('mytoken')
        }
      })
      .then(res => {
        this.datalist = res.data[0]
      })
  },
  methods: {
    _exitlogin () {
      localStorage.clear()
      this.$router.push('/login')
    },
    _select (action, index) {
      this.datalist.gender = action.name
      this.undatefile()
    },
    onCancel () {
      this.$Toast('取消')
    },
    async afterRead (filedata) {
      var reldata = new FormData()
      reldata.append('file', filedata.file)
      var res = await this.$http.post('/upload', reldata)
      this.datalist.user_img = res.data.url
      this.undatefile()
    },
    undatefile () {
      this.$http.post('/update/' + localStorage.getItem('myid'), this.datalist)
    },
    infosubmit () {
      this.datalist.username = this.message
      this.undatefile()
      this.message = ''
    },
    infosubmit2 () {
      this.datalist.name = this.message
      this.undatefile()
      this.message = ''
    }
  },
  components: { centertop, edittext }
}
</script>
<style lang="scss" scoped="scoped">
.userimgbox {
  overflow: hidden;
  position: relative;
  .imgload {
    opacity: 0;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
}
.userimg {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
}
.rightinfo {
  flex: 1;
  margin-left: 1rem;
  text-align: right;
}
.bottombtn {
  margin-top: 0.4rem;
  padding: 0 0.2rem;
  button {
    width: 100%;
    height: 0.7rem;
    background: none;
    font-size: 0.28rem;
    color: #666;
    border: none;
  }
}
</style>
