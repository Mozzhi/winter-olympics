<template>
  <div class="city-line">
    <header-bar active="home"></header-bar>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="每日新闻"></subpage-title>
      <div class="list-devide">
        <div class="inline-box article-list">
          <list-item v-for="i in 10" :no-img="i == 5 ? true : false"></list-item>
          <Page class="m-pages" :total="100"></Page>
        </div>
        <div class="inline-box right-sider">
          <div class="sider-block">
            <div class="sider-block-name">精彩图片 <img src="../../static/images/other/right-arrow.png" alt=""></div>
            <div class="sider-block-show">
              <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt="">
              <span class="bottom-text">“十四冬”火炬传递现场——包头站</span>
            </div>
            <div class="topline-list">
              <div class="lines" v-for="i in 5"><a href="">“十四冬”冰球测试赛落幕了，冠军是谁？“十四冬”冰球测试赛落幕了，冠军是谁？</a></div>
            </div>
          </div>
          <div class="sider-block">
            <div class="sider-block-name">精彩图片 <img src="../../static/images/other/right-arrow.png" alt=""></div>
            <div class="sider-block-show video-block">
              <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt="">
              <span class="bottom-text">“十四冬”火炬传递现场——包头站</span>
            </div>
            <div class="topline-list">
              <div class="lines" v-for="i in 5"><a href="">“十四冬”冰球测试赛落幕了，冠军是谁？“十四冬”冰球测试赛落幕了，冠军是谁？</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import ListItem from '../components/ListItem/ListItem.vue';
  export default {
    name: 'EventServices',
    data() {
      return {
      
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      ListItem,
    },
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
.city-line {
  .article-list {
    width: 870px;
  }
  .right-sider {
    width: 330px;
    padding-right: 30px;
    float: right;
    padding-top: 30px;
  }
  .sider-block {
    background: {
      repeat: no-repeat;
      position: center bottom;
      size: 100% 20px;
      image: url("#{$img-base1}other/right-side.png");
    };
    padding-bottom: 30px;
    margin-bottom: 100px;
  }
  .sider-block-name {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: $theme-color;
    background: {
      repeat: no-repeat;
      image: url("#{$img-base1}563left.png");
      size: 24px 20px;
      position: left center;
    };
    padding-left: 33px;
    img {
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }
  }
  .sider-block-show {
    position: relative;
    width: 300px;
    height: 168px;
    overflow: hidden;
    cursor: pointer;
    .bottom-text {
      position: absolute;
      text-align: center;
      color: #fff;
      bottom: 0;
      left: 0;
      background:linear-gradient(0deg,rgba(0,0,0,0.5) 0%);
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
  }
  .topline-list {
    margin-top: 15px;
    .lines {
      padding-left: 15px;
      width: 300px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      line-height: 34px;
      font-size: 16px;
      &:after {
        @include pseudo-class;
        width: 3px;/*no*/
        height: 3px;/*no*/
        background: $theme-color;
        left: 0;
      }
    }
  }
  .video-block {
    &:after {
      @include pseudo-class;
      width: 58px;/*no*/
      height: 48px;/*no*/
      background: {
        repeat: no-repeat;
        size: 58px 48px;
        image: url("#{$img-base1}other/play-b.png");
      };
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
    &:hover {
      &:after {
        background-image: url("#{$img-base1}other/play-w.png");
      }
    }
  }
}
</style>
