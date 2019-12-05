import axios from 'axios';

axios.defaults.timeout = 20000;
axios.defaults.baseURL = process.env.baseURL;
console.log(process.env)

// 请求拦截器配置
axios.interceptors.request.use(set => {
  set.headers = {
    'Content-Type': 'application/json',
  };

  return set;
}, err => {
  return Promise.reject(err);
});


/**
 * post请求
 */
function doPost(url, params = {}){
  const promise = new Promise((resolve, reject) => {
    axios.post(url, params, {withCredentials: true})
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
