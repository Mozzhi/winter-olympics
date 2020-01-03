import axios from 'axios';
import qs from 'qs';
axios.defaults.timeout = 20000;
axios.defaults.baseURL = 'https://info.dah.isport.nm.cn/index.php/api/';

// 请求拦截器配置
axios.interceptors.request.use(set => {
  set.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };
  if(set.method  === 'post' || set.method === 'put'){
    set.data = qs.stringify(set.data);
  }

  return set;
}, err => {
  return Promise.reject(err);
});


/**
 * post请求
 */
function doPost(url, params = {}){
  const promise = new Promise((resolve, reject) => {
    axios.post(url, params, {withCredentials: false})
      .then(resp => {
        resolve(resp.data);
      }, err => {
        reject(err);
      });
  });

  return promise;
}


/**
 * get请求
 */
function doGet(url, params = {}){
  const promise = new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(resp => {
      resolve(resp.data);
    }, err => {
      reject(err);
    });
  });

  return promise;
}

export default {
  doPost,
  doGet,
}
