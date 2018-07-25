/**
 * @author lemon
 * @desc 用户登录注册模块
 */
import ApiNodeAction from '@/service/apiNodeAction';
import { sendCode, getCaptcha, testApi } from '@/service/apiConfig';

// init state
const state = {
}

// filter data from state
const getters = {
}

// init actions 
const actions = {
  test({
    commit,
    state
  }, params) {
    return new Promise((resolve, reject) => {
      ApiNodeAction(testApi, params).then(data => {
        resolve(data);
      },err=>{
          reject(err);
      })
    })
  },
    /**
     * @desc 发送短信验证码
     * @param { Act: '/user/token/send/:requestno', mobile, captcha, type }
     */
    sendCode({
        commit,
        state
    }, params) {
        return new Promise((resolve, reject) => {
          ApiNodeAction(sendCode, params).then(data => {
                resolve(data);
            },err=>{
                reject(err);
            })
        })
    },
    /**
     * @desc 获取图形验证码
     * @param { Act: 'extern', width, height, length }
     */
    getCaptcha({
        commit,
        state
    }, params) {
        return new Promise((resolve, reject) => {
            ApiNodeAction(getCaptcha, params).then(data => {
                resolve(data);
            },err=>{
                reject(err);
            })
        })
    },
    /**
     * @desc node 图片上传模块
     */
    getQiniuUploadToken({ commit, state }, params){
      return new Promise((resolve,reject)=>{
        ApiNodeAction(getQiniuUploadTokenUrl, params).then(data=>{
          resolve(data.ResponseData);
        })
      })
    },
    /**
     * @desc 七牛图片上传
     * @param { file, resourceableType }
     */
    qiniuUpload({ commit, state }, params){
      return new Promise((resolve,reject)=>{
        ApiNodeAction(qiniuUpload, params).then(data=>{
          resolve(data.ResponseData);
        })
      })
    }
}

// init mutations 
const mutations = {

}
export default {
    state,
    getters,
    actions,
    mutations
}
