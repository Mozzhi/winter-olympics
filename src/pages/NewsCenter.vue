<template>
  <div class="news-center">
    <header-bar active=""></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <breadcrumb current="新闻中心"></breadcrumb>
      <subpage-title block-name="新闻中心"></subpage-title>
      <div class="news-type">
        <Row>
          <Col span="12">
            <a href="list_pages/Daily_News/22" class="news-entry">
              <div class="entry-inner">
                <span class="type-text">
                  <img src="../../static/images/other/媒体手册icon.png" alt="">
                  媒体手册
                </span>
              </div>
            </a>
          </Col>
          <Col span="12">
            <a href="list_pages/Daily_News_center/19?tw=19" class="news-entry">
              <div class="entry-inner">
                <span class="type-text">
                  <img src="../../static/images/other/主新闻中心icon.png" alt="">
                  主新闻中心
                </span>
               </div>
            </a>
          </Col>
          <Col span="12">
            <a href="list_pages/Daily_News_center/20?tw=20" class="news-entry">
              <div class="entry-inner">
                <span class="type-text">
                  <img src="../../static/images/other/场馆新闻中心icon.png" alt="">
                  场馆新闻中心
                </span>
              </div>
            </a>
          </Col>
          <Col span="12">
            <a href="list_pages/Daily_News_center/21?tw=21" class="news-entry">
              <div class="entry-inner">
                <span class="type-text">
                  <img src="../../static/images/other/服务信息icon.png" alt="">
                  服务信息
                </span>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
  export default {
    name: 'Blessing',
    data() {
      return {
        mainList: [],
        page: 1,
        totalPage: 0,
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      NewsBox,
      Breadcrumb
    },
    created() {
    
    },
    methods: {
    
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  .news-type {
    padding: 30px 70px;
    text-align: center;
    .ivu-col.ivu-col-span-12 {
      padding: 15px;
    }
    .news-entry {
      width: 500px;
      height: 173px;
      display: block;
      @include base-bg;
      background-image: url("#{$img-base1}other/news-center-white.png");
      background-size: 490px 163px;
      background-color: #E4E3D9;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: all 0.2s linear;
      .entry-inner {
        background: #fff;
        width: 448px;
        height: 121px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .type-text {
        display: inline-block;
        width: 340px;
        height: 60px;
        background: url("#{$img-base1}events/left.png") left center no-repeat,url("#{$img-base1}events/right.png") right center no-repeat ;
        background-size: 28px 42px;
        line-height: 60px;
        color: $theme-color;
        font-weight: 700;
        img {
          height: 55px;
          width: auto;
          vertical-align: middle;
          margin-right: 19px;
        }
      }
      &:before {
        transition: all 0.2s linear;
        @include pseudo-class;
        width: 500px;
        height: 67px;
        @include base-bg;
        top: auto;
        transform: none;
        bottom: 0;
        left: 0;
        background-image: url("#{$img-base1}other/none.png");;
      }
      &:hover {
        background-image: url("#{$img-base1}other/news-center-blue.png");
        background-color: #fff;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        &:before {
          background-image: url("#{$img-base1}other/news-center-h.png");
        }
        
      }
    }
  }
</style>
