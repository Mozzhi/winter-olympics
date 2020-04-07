<template>
	<div class="news-box" :class="{'box-show' : pagePath !== '/Login'}">
	  <div class="new-center" v-show="pagePath !== '/news_center' ">
      <div class="news-title">新闻中心</div>
      <div class="news-list">
        <div class="list" v-for="notice in floatNotice" :key="notice.id"><a href="">{{notice.title}}</a></div>
      </div>
      <a href="/news_center" class="look-more">查看更多></a>
    </div>
    <div class="logout">
      <div class="side-btn logout-btn" @click="logout">退出登录</div>
      <div class="side-btn manage-btn" v-if="is_admin" @click="goAdminPage()">管理后台</div>
      <div class="side-btn wechat-btn">
        小程序
        <div class="qr-code"><div class="qr-code-inner"><img src="../../../static/images/login/qr-code.png" alt=""></div></div>
      </div>
    </div>
	</div>
</template>
<script>
  import { getToken, getIsAdmin, removeToken, removeIsAdmin } from "../../libs/auth";
  import { saveData, getSessionData } from "../../util";
  
  import md5 from 'js-md5';

  export default {
		name: 'NewsBox',
		data() {
			return {
			  pagePath: this.$route.path,
        floatNotice: this.$store.getters.getNoticeData || [],
        is_admin: getIsAdmin(),
      }
		},
    created() {
		  if(!this.floatNotice.length){
        this.getFloatNotice();
      }
    },
    methods: {
      goAdminPage () {
        let that = this;
        document.body.className = 'info';
        this.$Modal.info({
          title: '请输入密钥',
          closable: that.closable,
          content: '<input type="password" class="admin-pwd" id="admin-pwd" placeholder="请输入正确密钥" />',
          onOk() {
            that.goAdmin();
            document.body.className = '';
          },
          onCancel() {
            document.body.className = '';
          }
        })
      },
      getFloatNotice () {
        this.$http.getNotice()
          .then((res) => {
            this.floatNotice = res.data;
            saveData('noticeData', res.data);
            this.$store.commit('NOTICEDATA', res.data);
          })
      },
      logout () {
      	removeToken()
      	removeIsAdmin()
        this.$http.logout()
          .then(res => {
            this.$Message.success('退出成功！');
            setTimeout(() => {
              this.$router.push('/login')
            }, 1500)
          })
      },
      goAdmin() {
        let pwd = document.getElementById('admin-pwd').value;
        if(pwd == '') {
          this.$toast('密钥不能为空！');
        }
        let secret_key = md5(getToken() + pwd);
        this.$http.checkSecretKey(secret_key)
          .then((res) => {
            if(res.status == 0){
              window.open('https://info.dah.isport.nm.cn/index.php/admin/public/login?token=' + getToken(), "_blank");
            }
          });
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/commom";
@import './newsbox';
</style>
