<template>
  <div class="city-line">
    <header-bar active=""></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="城市采访线" v-if="headerKey == 'city_visiting'"></subpage-title>
      <across-calendar @getDate="dateChange" v-if="headerKey == 'city_visiting'"></across-calendar>
      <div class="article-list">
        <list-item v-for="list in mainList" :key="list.id" :list="list" :no-img="list.thumb !== '' ? false : true"></list-item>
        <div class="no-more"><span class="nothing">没有更多了</span></div>
        <Page class="m-pages" v-if="headerKey == 'search'" v-show="totalPages > 1" :total="totalPages*10" @on-change="pageChange"></Page>
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
  import AcrossCalendar from '../components/AcrossCalendar/AcrossCalendar.vue';
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  import { saveData } from "../util";

  export default {
    name: 'EventServices',
    data() {
      return {
        mainList: [],
        listType: 'city_visiting',
        column_id: 12,
        p: 1,
        schedule_at: 1,
        totalPages: 1,
        headerKey: this.$route.params.list_type,
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      ListItem,
      AcrossCalendar,
      NewsBox
    },
    created() {
      this.getArticle();
    },
    mounted() {
    
    },
    methods: {
      getArticle() {
        let params = {
          column_id: this.column_id,
          p: this.page,
          psize: 100,
          schedule_at: this.schedule_at
        };
        this.$http.getArticleList(params)
          .then(res => {
            this.mainList = res.data.list;
            this.totalPages = res.data.total_page;
          })
      },
      dateChange(date) {
        this.schedule_at = date + 1;
        this.getArticle();
      },
      doSearch() {
      
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  .city-line {
    .mask {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 99;
    }
    .no-more {
      text-align: center;
      position: relative;
      background: #fff;
      margin-top: -2px;
      .nothing {
        position: relative;
        z-index: 2;
        background: #fff;
        padding: 5px 10px;
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
