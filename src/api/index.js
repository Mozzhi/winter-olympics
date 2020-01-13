import http from './http'
import Vue from 'vue'
import { Toast } from 'wc-messagebox'
Vue.use(Toast);

function toast(msg, cb) {
  Vue.prototype.$toast(msg);
  if(typeof cb === 'function') {
    cb();
  }
}

/*post请求*/

function post(pUrl, params = {}) {
  return http.doPost(pUrl, params)
    .then(res => {
      if(res.status == 1){
        toast(res.msg);
      }
      return res;
    }).catch(err => {
      toast(err.toString());
    });
}

/*get请求*/

function get(pUrl, params) {
  return http.doGet(pUrl, params)
    .then( res => {
      return res;
    }).catch( err => {
      toast( err.toString() );
    })
}

export class Api {
  constructor(){};

  /*首页数据*/
  getIndex (){
    return post('Pcapi/index', {})
  }

  /**
   * 登录
   * @param {*} callBack 回调
   */
  login (dto) {
  	return post('loginapi/pcdologin',dto)
  }

  /**
   * 详情
   * @param {*} callBack 回调
   */
  articleDetails (dto) {
  	return post('Pcapi/article_details',dto)
  }

	 /**
   * 文章附件下载
   * @param {*} callBack 回调
   */
  download (dto) {
  	return post('Pcapi/download',dto)
  }

  /*悬浮窗新闻*/
  getNotice () {
    return post('Pcapi/float_notice', {})
  }

  /**
  *获取轮播图
  * */
  getBanner () {
    return post( 'Pcapi/carousel', {})
  }

  /**
   * 搜索*/
  search(params) {
    let base_params = {
      p: 1,
      psize: 10
    };
    params = Object.assign(base_params, params);
    return post('Pcapi/search', params)
  }

  /**
   * 文章列表
   * */
  getArticleList (params) {
    let base = {psize: 10, type: 1};
    params = Object.assign(base, params);
    return post('Pcapi/article_list', params)
  }

  /**
   * 登出
   * */
  logout () {
    return post('loginapi/logout')
  }

  /**
   * 右边侧栏数据
   * */
  siderData () {
    return post('Pcapi/sidebar')
  }

  /**
   * 这里是呼伦贝尔
   * */
  getHulunbuirData () {
    return post('Pcapi/flbe')
  }

}

