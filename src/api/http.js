import axios from 'axios';
import qs from 'qs';
import {
  getToken
} from '../libs/auth'
import Routers from '../router';


var service = axios.create({
	baseURL:'https://info.dah.isport.nm.cn/index.php/api/',
  timeout: 5000, // 因为上传图片或者文件 过大时 需要等一会，不能给时间限制
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },

})
//		console.log('token:'+getToken())
// 请求拦截器配置
service.interceptors.request.use(set => {
  if(set.method  === 'post' || set.method === 'put'){
    set.data = qs.stringify(set.data);
  }
	if (getToken() != undefined) {
	  set.headers['token'] = getToken();
	}
  return set;
},err => {
  return Promise.reject(err);
});

service.interceptors.response.use(
  response => {

  	//50登录过期
//	 console.log('截获:'+response.data.status)
    if (response.data.status == 50) {
    	console.log(Routers)
       Routers.push('/login')
    }

    return response
  },

  error => {
  	console.log("error")
    console.log(error) // for debug
    // this.$Modal.info({
		// 		title: '提示',
		// 		content: error
		// 	});

  }
)

/**
 * post请求
 */
function doPost(url, params = {}){
  const promise = new Promise((resolve, reject) => {
    service.post(url, params, {withCredentials: false})
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
    service.get(url, {
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
