import store from '@/store';
import Fly from 'flyio'
import { generateUid } from '../utils'

class ApiBaseAction {
    constructor() {
        console.log('ApiBaseAction:')
        this.instance = null;
        this.$baseUrl = '';
        this.$defaultHeaders = {

        };
        this.queue = [];
        this.fly = new Fly()
        this.init();
    }

    init() {
        this.fly.interceptors.request.use(function (request) {
            console.log('loading')
            return request
        })
        this.fly.interceptors.response.use(
            function (response, promise) {
                if( response.status === 200 ){
                    return promise.resolve(response.data)
                }else{
                    return promise.reject(response.data)
                }
            },
            function (err, promise) {
              if( err.message.indexOf('timeout') != -1){
                console.log('请求超时')
                return promise.reject(err)
              }
                return promise.reject(err)
            }
        )
    }
    addQueue(item) {
        this.queue.push(item);
    }
    static getInstance(ClassO) {
        if (!this.instance) {
            this.instance = new ClassO();
        }
        return this.instance;
    }
    baseAction(apiConfig = {}, params = {}) {
        let self = this;
        self.fly.config.baseURL = apiConfig.baseHost || self.$baseUrl;
        // let configSetting = {
        //     headers: Object.assign(self.$defaultHeaders(params), apiConfig.headers),
        //     method: apiConfig.method,
        //     timeout: 5000 //超时设置为5s
        // };
        // let requestPromise = self.fly.request(apiConfig.url, params, configSetting);
        // self.addQueue({
        //     id: generateUid(apiConfig.url),
        //     reqPromise: requestPromise,
        //     apiConfig: apiConfig,
        //     params: params,
        // })
        let pathParams = params.params;
        let apiUrl = apiConfig.url;
        // 参数传递如：/xxxx/:id?query=xxx 让前端不必要考虑参数的传递形式
        if( pathParams ){
            Object.keys(pathParams).forEach(key => {
                if(apiUrl.indexOf(':'+key) > -1) {
                    apiUrl = apiUrl.replace( ':'+key, pathParams[key] );
                    delete pathParams[key];
                }
            })
            //将剩余参数拼接到url，防止get请求额外的参数无法通过body传递不到后端，通过url传递
            // apiUrl = apiUrl + '?' + qs.stringify(pathParams);
            delete params.params;
        }
        return new Promise((resolve,reject)=>{
          self.fly.request(apiUrl, params, {
              headers: Object.assign(this.$defaultHeaders(params), apiConfig.headers),
              method: apiConfig.method,
              timeout: 10000 //超时设置为5s
          }).then((data = {}) => {
              console.log("data", data)
              resolve(data);
          }, err=>{
              alert('err')
              reject(err);
          }).catch((e) => console.log("error===========", e))
      })
    }
}

export default ApiBaseAction;