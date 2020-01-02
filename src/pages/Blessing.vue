<template>
  <div class="blessing">
    <header-bar active="home"></header-bar>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="寄语"></subpage-title>
      <div class="list-devide">
        <a href="" class="blessing-list" v-for="i in 8">
          <div class="time inline-box">02-01 08:30</div>
          <div class="inline-box blessing-title">精心做好各项筹备工作，全力以赴办好“十四冬”，向党和人民交上一份满意答卷。</div>
        </a>
      </div>
      <Page class="m-pages" :total="100"></Page>
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
    name: 'Blessing',
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
            image: url("#{$img-base1}game-icon.png");
          };
          transition: all 0.3s linear;
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
