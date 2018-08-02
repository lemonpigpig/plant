import Vue from 'vue';
import store from '@/store';
import Fly from 'flyio'
import Boqii from '@/components/index.js'
import router from '@/router/index.js'
import Cookie from 'js-cookie'

// console.log('----test-----:', all.Message)
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
                    if(response.data.status === 0) {
                      return promise.resolve(response.data)
                    } else {
                      console.log('------interceptors------:', response.data)
                      return promise.reject(response.data)
                    }
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
              timeout: 10000, //超时设置为5s
              withCredentials: true
          }).then((data = {}) => {
              resolve(data);
          }, err=>{
            // || err.status === 1
            if (err.status === 403) {
              const reciver = ['ToCardList']
              const { name } = router.currentRoute
              if (reciver.includes(name)) {
                //收花人
                Cookie.remove('recieveInfo')
                router.push( `/login/1?name=${name}`)
              } else {
                //订花人
                Cookie.remove('giverInfo')
                router.push(`/login/0?name=${name}`)
              }
              console.log('err.status--------:', name)
            } else {
              Boqii.Message(`${err.message}`)
            }
            reject(err);
          }).catch((e) => console.log("error===========", e))
      })
    }
}


export default ApiBaseAction;