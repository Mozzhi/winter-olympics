<template>
  <div class="city-line">
    <header-bar :active="headerKey"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title :block-name="pageTitle[headerKey]"></subpage-title>
      <tabs class="list-tab" :tab-arr="tabs" :current-key="tabKey" @switchoverKey="getKey" v-if="headerKey == 'msg_service'"></tabs>
      <div class="list-devide clearfix">
        <div class="inline-box article-list">
          <list-item v-for="list in mainList" :key="list.id" :list="list" :no-img="list.thumb !== '' ? false : true"></list-item>
          <div class="no-more" v-show="!mainList.length"><span class="nothing">没有更多了</span></div>
          <Page class="m-pages" :current="page" v-show="totalPages > 1" :total="totalPages - 0" @on-change="pageChange"></Page>
        </div>
        <div class="inline-box right-sider">
          <div class="sider-block">
            <a href="/splendid_pages/splendid_img"><div class="sider-block-name">精彩图片 <img src="../../static/images/other/right-arrow.png" alt=""></div></a>
            <a :href="`/details?id=${Wonderful_picture[0]['id']}`" target="_blank" class="sider-block-show">
              <img :src="Wonderful_picture[0]['thumb']" alt="">
              <span class="bottom-text">{{Wonderful_picture[0]['title']}}</span>
            </a>
            <div class="topline-list">
              <div class="lines" v-for="item in imgNumber" :key="item.id"><a :href="`/details?id=${item.id}`" target="_blank">{{item.title}}</a></div>
            </div>
          </div>
          <div class="sider-block">
            <a href="/splendid_pages/splendid_video"><div class="sider-block-name" >精彩视频 <img src="../../static/images/other/right-arrow.png" alt=""></div></a>
            <a :href="`/details?id=${Wonderful_video[0]['id']}`" target="_blank" class="sider-block-show video-block">
              <img :src="Wonderful_video[0]['thumb']" alt="">
              <span class="bottom-text">{{Wonderful_video[0]['title']}}</span>
            </a>
            <div class="topline-list">
              <div class="lines" v-for="item in videoNumber" :key="item.id"><a :href="`/details?id=${item.id}`" target="_blank">{{item.title}}</a></div>
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
  import NewsBox from '../components/NewsBox/NewsBox';
  import Tabs from '../components/Tabs/Tabs';

  let title = {
    Ceremony: '开闭幕式',
    Daily_News: '每日新闻',
    msg_service: '信息服务'
  };
  let column_id = {
    Ceremony: '8',
    Daily_News: '7',
    msg_service: '16'
  };
  let tabs = [
    {text: '媒体通告', key: '16'},
    {text: '即时引语', key: '13'},
    {text: '发布会摘要', key: '14'},
    {text: '综合新闻', key: '15'},
    {text: '赛前信息', key: '17'},
    {text: '背景资料', key: '18'},
  ];
  let baseArr = [{
    details: "",
    id: "",
    published_at: "",
    published_at1: "",
    published_at2: "",
    thumb: "",
    title: "",
  }]
  export default {
    name: 'ListPages',
    data() {
      let type_id = this.$route.params.type_id || '';
      return {
        headerKey: this.$route.params.list_type,
        mainList: baseArr,
        Wonderful_picture: baseArr,
        Wonderful_video: baseArr,
        pageTitle: title,
        tabs: tabs,
        tabKey: '16',
        indexData: {},
        page: 1,
        totalPages: 1,
        column_id: type_id || column_id[this.$route.params.list_type],
        type_id: type_id
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      ListItem,
      NewsBox,
      Tabs
    },
    computed: {
      imgNumber() {
        return this.Wonderful_picture.slice(1, 6);
      },
      videoNumber() {
        return this.Wonderful_video.slice(1, 6);
      }
    },
    created() {
      if(this.type_id) {
        this.getKey(this.type_id);
      }else {
        this.getArticle();
      }
      this.getSiderData();
    },
    methods: {
      getKey(key) {
        this.tabKey = key;
        this.column_id = key;
        this.page = 1;
        this.getArticle();
      },
      getArticle() {
        let params = {
          column_id: this.column_id,
          p: this.page
        };
        const loading = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        });
        this.$http.getArticleList(params)
          .then(res => {
            loading();
            this.mainList = res.data.list;
            this.totalPages = res.data.total_page;
          })
      },
      pageChange(p) {
        this.page = p;
        this.getArticle();
      },
      getSiderData() {
        this.$http.siderData()
          .then(res => {
            this.Wonderful_picture = res.data.Wonderful_picture;
            this.Wonderful_video = res.data.Wonderful_video;
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
.city-line {
  .list-tab {
    margin-top: 20px;
  }
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
      size: 20px 24px;
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
    display: block;
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
  .no-more {
    text-align: center;
    position: relative;
    background: #FFFEF7;
    margin-top: -2px;
    height: 30px;
    .nothing {
      position: relative;
      z-index: 2;
      background: #FFFEF7;
      padding: 5px 10px;
      top: 5px;
    }
    &:before {
      @include pseudo-class;
      border-bottom: 1px solid #F0EFF1;
      width: 100%;
      left: 0;
    }
  }
}
</style>
