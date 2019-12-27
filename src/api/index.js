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

function post(pUrl, params) {
  return http.doPost(pUrl, params)
    .then(res => {
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

  /*默认标签*/
  getTags (){
    toast('sss')
    return get('', {type: 'tags'})
  }


  /*搜索*/
  doSearch(params = {}) {
    const Url = '';
    params = Object.assign({}, params, { type: 'search' })
    return get(Url, params);
  }


}

