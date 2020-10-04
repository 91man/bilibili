<template>
  <li>
    <div class="info">
      <van-image  :src="articleve.img" class="img" />
      <span class="text">{{articleve.name}}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ['articleve']
}
</script>

<style lang="scss" scoped>

  li {
    margin-bottom: .2rem;
    width: 50%;
    padding: 0 .1rem;
    .info{
      .img{
        width: 100% !important;
        height: 120px !important;
      }
      .text{
        text-align: left;
        font-size: .24rem;
        color: #333;
        overflow: hidden ;
        display: -webkit-box ;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical ;
        word-break: break-all ;
      }
    }
  }
</style>
