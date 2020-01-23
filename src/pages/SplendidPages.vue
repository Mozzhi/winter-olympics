<template>
  <div class="splendid-pages">
    <header-bar :active="listType"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <breadcrumb v-if="listType.indexOf('mongo_splendid') !== -1"><a href="#"> > {{listType.indexOf('img') !== -1 ? (currentId ? typeDetail[currentId] : '图片素材') : '视频素材'}}</a></breadcrumb>
      <breadcrumb v-else></breadcrumb>
      <!--<breadcrumb v-if="!type_id"></breadcrumb>-->
      <!--<breadcrumb :current="hulunTitle[type_id]" v-else></breadcrumb>-->
      <subpage-title :block-name="`精彩${type[listType]}`" v-if="!type_id"></subpage-title>
      <subpage-title :block-name="hulunTitle[type_id]" v-else></subpage-title>
      <div class="filtrate" v-if="!type_id">
        <div class="filtrate-title">{{type[listType]}}筛选</div>
        <div class="filtrate-item">
          <span class="filter-tags" v-for="classis in classId" :class="{'active': classis.id == currentId }" @click="doFilter(classis.id)">{{classis.text}}</span>
        </div>
      </div>
      <div class="list-devide">
        <div class="splendids">
          <a class="inline-box splendid-list" v-for="item in mainList" :key="item.id" :href="`/details?id=${item.id}&on=${querys.on}&tw=${querys.tw}&th=${querys.th}`" target="_blank">
            <div class="show-range" :class="{'video-block': listType.indexOf('splendid_video') !== -1}"><img :src="item.thumb" alt=""></div>
            <div class="list-introduce">{{item.title}}</div>
          </a>
        </div>
        <Page class="m-pages" :total="totalPage" v-show="totalPage > 1" @on-change="changePage"></Page>
        <div class="no-data" v-if="!mainList.length"><img src="../../static/images/nodata.png" alt=""></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import NewsBox from '../components/NewsBox/NewsBox';
  import { hulunTitle } from "../util/static_data";
  import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';

  let type = {
    splendid_img: '图片',
    splendid_video: '视频',
  };
  let column_id = {
    splendid_img: 5,
    splendid_video: 6,
  };
  let typeDetail = {
    23: '图片素材',
    24: '视频素材',
    25: '冬韵',
    26: '旅游',
    27: '美食',
    28: '文化'
  }
  export default {
    name: 'SplendidPages',
    data() {
      let list_type = this.$route.params.list_type;
      let type_id = this.$route.params.type_id;
      let querys = this.$route.query;
      return {
        listType: list_type,
        type: type,
        classId: this.$store.getters.getClassId,
        currentId: querys.class_id || 0,
        mainList: [],
        column_id: type_id ? type_id : column_id[list_type],
        p: 1,
        totalPage: 1,
        type_id: type_id || '',
        hulunTitle: hulunTitle,
        typeDetail: typeDetail,
        querys: {
          on: querys.on || 0,
          tw: querys.tw || '',
          th: querys.th || ''
        }
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
      this.getList();
      let title= '精彩' + this.type[this.listType]
      if(this.type_id) {
        title = this.hulunTitle[this.type_id]
      }
    },
    methods: {
      doFilter (id) {
        this.currentId = id;
        this.getList();
      },
      getList () {
        let params = {
          column_id: this.column_id,
          p: this.p,
          classify_id: this.currentId
        };
        const loading = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        });
        this.$http.getArticleList(params)
          .then(res => {
            loading();
            this.mainList = res.data.list;
          })
      },
      changePage (p) {
        this.p = p;
        this.getList();
      }
    }
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
        color: #303030;
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
        &.video-block {
          position: relative;
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
      .list-introduce {
        transition: all 0.3s linear;
        line-height: 56px;
        padding: 0 18px;
        background: url("#{$img-base1}other/none.png") left center no-repeat,
      url("#{$img-base1}other/none.png") right center no-repeat;
        background-size: 33px 50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 56px;
        margin: 18px 0;
        text-align: center;
      }
    }
  }
</style>
