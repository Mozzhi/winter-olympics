<template>
  <div class="splendid-pages">
    <header-bar active="home"></header-bar>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="精彩图片"></subpage-title>
      <div class="filtrate">
        <div class="filtrate-title">图片筛选</div>
        <div class="filtrate-item">
          <span class="filter-tags" v-for="i in 10" :class="{'active': i == 1 }">全部{{i}}</span>
        </div>
      </div>
      <div class="list-devide">
        <div class="splendids">
          <div class="inline-box splendid-list" v-for="i in 18">
            <div class="show-range"><img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt=""></div>
            <div class="list-introduce">
              中华人民共和国第十四届冬季运动会雪橇项目比
              赛圆满落下帷幕
            </div>
          </div>
        </div>
        <Page class="m-pages" :total="100"></Page>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  export default {
    name: 'SplendidPages',
    data() {
      return {
      
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
    },
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  .splendid-pages {
    .list-devide {
      padding: 40px 30px;
    }
    .filtrate {
      text-align: center;
      .filtrate-title {
        display: inline-block;
        background: url("#{$img-base1}563left.png") left center no-repeat,
        url("#{$img-base1}563right.png") right center no-repeat;
        padding: 0 40px;
        background-size: 20px 24px;
        margin: 20px 20px 10px;
        color: $theme-color;
        font-size: 20px;
      }
      .filtrate-item {
        padding: 0 78px;
      }
      .filter-tags {
        display: inline-block;
        margin: 10px 32px;
        position: relative;
        line-height: 30px;
        background: $normal-bg;
        color: $theme-color;
        height: 30px;
        padding: 0 10px;
        cursor: pointer;
        &:before, &:after {
          @include pseudo-class;
          width: 27px;
          height: 30px;
          background: {
            repeat: no-repeat;
            size: 27px 30px;
            position: left center;
          };
          top: 0;
          transform: translateY(0);
        }
        &:before {
          background-image: url("#{$img-base1}login/tagl.png");
          left: -25px;
        }
        &:after {
          background-image: url("#{$img-base1}login/tagr.png");
          right: -25px;
        }
        &:hover, &.active {
          color: #fff;
          background: $theme-color;
          &:before {
            background-image: url("#{$img-base1}login/tagcl.png");
          }
          &:after {
            background-image: url("#{$img-base1}login/tagcr.png");
          }
        }
      }
    }
    .splendid-list {
      cursor: pointer;
      width: 368px;
      margin-right: 18px;
      border-radius: 4px;/*no*/
      transition: all 0.3s linear;
      margin-bottom: 30px;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      &:hover {
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        .list-introduce {
          background: url("#{$img-base1}other/n-left.png") left center no-repeat,
          url("#{$img-base1}other/n-right.png") right center no-repeat;
        }
      }
      .show-range {
        width: 368px;
        height: 207px;
        overflow: hidden;
        border-radius: 4px 4px 0 0;/*no*/
      }
      .list-introduce {
        height: 93px;
        transition: all 0.3s linear;
        line-height: 28px;
        padding: 15px 18px;
        background: url("#{$img-base1}other/none.png") left center no-repeat,
      url("#{$img-base1}other/none.png") right center no-repeat;
        background-size: 33px 50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
  
      }
    }
  }
</style>
