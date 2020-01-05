<template>
  <div class="city-line">
    <header-bar :active="headerKey"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title :block-name="pageTitle[headerKey]"></subpage-title>
      <tabs class="list-tab" :tab-arr="tabs" :current-key="tabKey" @switchoverKey="getKey"></tabs>
      <div class="list-devide">
        <div class="inline-box article-list">
          <list-item v-for="list in mainList" :key="list.id" :list="list" :no-img="list.thumb !== '' ? false : true"></list-item>
          <Page class="m-pages" :total="mainList.length"></Page>
        </div>
        <div class="inline-box right-sider">
          <div class="sider-block">
            <div class="sider-block-name">精彩图片 <img src="../../static/images/other/right-arrow.png" alt=""></div>
            <a href="" class="sider-block-show">
              <img :src="Wonderful_picture[0]['thumb']" alt="">
              <span class="bottom-text">{{Wonderful_picture[0]['title']}}</span>
            </a>
            <div class="topline-list">
              <div class="lines" v-for="item in imgNumber" :key="item.id"><a href="">{{item.title}}</a></div>
            </div>
          </div>
          <div class="sider-block">
            <div class="sider-block-name">精彩视频 <img src="../../static/images/other/right-arrow.png" alt=""></div>
            <a href="" class="sider-block-show video-block">
              <img :src="Wonderful_video[0]['thumb']" alt="">
              <span class="bottom-text">{{Wonderful_video[0]['title']}}</span>
            </a>
            <div class="topline-list">
              <div class="lines" v-for="item in videoNumber" :key="item.id"><a href="">{{item.title}}</a></div>
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
  let tabs = [
    {text: '媒体通告', key: 'Match_status'},
    {text: '即时引语', key: 'Instant_quotation'},
    {text: '发布会摘要', key: 'Conference_summary'},
    {text: '综合新闻', key: 'General_News'},
    {text: '赛前信息', key: 'Tournament_Preview'},
    {text: '背景资料', key: 'Background_information'},
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
      return {
        headerKey: this.$route.params.list_type,
        mainList: baseArr,
        Wonderful_picture: baseArr,
        Wonderful_video: baseArr,
        pageTitle: title,
        tabs: tabs,
        tabKey: 'Instant_quotation',
        indexData: {},
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
      this.getIndexData();
    },
    methods: {
      getIndexData () {
        this.$http.getIndex()
          .then((res) => {
            this.indexData = res.data;
            this.Wonderful_picture = res.data.Wonderful_picture;
            this.Wonderful_video = res.data.Wonderful_video;
            if(this.headerKey !== 'msg_service'){
              this.mainList = res.data[this.headerKey];
            }else {
              this.mainList = res.data.Instant_quotation
            }
            console.log(res.data)
          })
      },
      getKey(key) {
        this.tabKey = key;
        this.mainList = this.indexData[key];
        console.log(key);
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
}
</style>
