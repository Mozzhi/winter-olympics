<template>
  <div class="blessing">
    <header-bar active="home"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <breadcrumb current="寄语"></breadcrumb>
      <subpage-title block-name="寄语"></subpage-title>
      <div class="list-devide">
        <a :href="`/details?id=${list.id}`" target="_blank" class="blessing-list" v-for="list in mainList">
          <div class="time inline-box">{{list.published_at1}}</div>
          <div class="inline-box blessing-title">{{list.title}}</div>
        </a>
      </div>
      <Page class="m-pages" :total="totalPage" @on-change="changePage" v-if="totalPage"></Page>
      <div class="no-data" v-if="!totalPage"><img src="../../static/images/nodata.png" alt=""></div>
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
  import { setBreadCrumb } from "../util";
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
      this.getBlessing();
      this.setBreadCrumb('寄语')
    },
    methods: {
      setBreadCrumb: setBreadCrumb,
      getBlessing () {
        let params = {
          column_id: 38,
          p: this.page
        };
        this.$http.getArticleList(params)
          .then(res => {
            this.mainList = res.data.list;
            this.totalPage = res.data.totalPage;
          })
      },
      changePage (p) {
        this.page = p;
        this.getBlessing();
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
 .blessing {
    .list-devide {
      margin: 50px 0;
      text-align: center;
      padding: 0 160px;
      .blessing-list {
        display: block;
        position: relative;
        height: 28px;
        line-height: 28px;
        margin: 20px 0;
        text-align: left;
        &:before {
          @include pseudo-class;
          width: 14px;
          height: 28px;
          left: 0;
          background: {
            repeat: no-repeat;
            size: 14px 28px;
            position: left center;
            image: url("#{$img-base1}ra.png");
          };
          transition: all 0.2s linear;
        }
        &:hover {
          color: $theme-color;
          &:before {
            transform: translateY(-50%) rotate(90deg);
          }
        }
      }
      .time {
        width: 200px;
        padding-left: 38px;
        font-size: 20px;
      }
      .blessing-title {
        width: 670px;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
      }
    }
 }
</style>
