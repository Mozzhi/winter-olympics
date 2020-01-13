<template>
  <div class="charm-inner-mongolia">
    <header-bar active="charm"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="魅力内蒙古"></subpage-title>
      <div class="list-devide">
        <block-item :block-name="item.name" class="no-more" v-for="item in charmData" :key="item.id">
          <div class="parts clearfix" slot="blockContent" v-if="item.id !== 48">
            <a :href="`/details?id=${item.id}`" class="inline-box part-item survey" v-bg="item.survey_img">
              <div class="mask"><span class="mask-text">概况</span></div>
            </a>
            <a :href="`/splendid_pages/splendid_video/${item.id}`" class="inline-box part-item" v-bg="item.video_matter">
              <div class="mask-bar"><span class="mask-text">视频素材</span></div>
            </a>
            <div class="inline-box part-item">
              <a :href="`/cityline/article_list?id=${item.id}`" class="matter" v-bg="item.word_matter">
                <div class="mask-bar"><span class="mask-text">文字素材</span></div>
              </a>
              <a :href="`/splendid_pages/splendid_img/${item.id}`" class="matter" v-bg="item.img_matter">
                <div class="mask-bar"><span class="mask-text">图片素材</span></div>
              </a>
            </div>
          </div>
          <a href="/hulun_buir" class="link-to" slot="headCenter" v-if="item.id == 48">跳转 <img src="../../static/images/ra.png" alt=""></a>
        </block-item>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import BlockItem from '../components/BlockItem/BlockItem.vue';
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  import { innerMongolia } from '../util/static_data';
  console.log(innerMongolia)
  export default {
    name: 'CharmInnerMongolia',
    data() {
      return {
        charmData: innerMongolia
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      BlockItem,
      NewsBox
    },
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  @import "../assets/bupu";
  .charm-inner-mongolia {
    .link-to {
      color: $theme-color;
      position: relative;
      padding-left: 40px;
      font-size: 14px;
      img {
        width: 14px;
        height: 28px;
        vertical-align: middle;
      }
      &:before {
        @include pseudo-class;
        width: 50px;
        height: 3px;
        background: {
          repeat: no-repeat;
          size: 50px 3px;
          image: url("#{$img-base1}dashed.png");
        };
        left: -15px;
      }
    }
  }
</style>
6225 7582 2098 1574
