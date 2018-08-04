/**
 * @author lemon
 * @desc 用户登录注册模块
 */
import ApiNodeAction from '@/service/apiNodeAction';
import { sendCode, login, checkCode, syncToken, checkReciever } from '@/service/apiConfig';

// init state
const state = {
}

// filter data from state
const getters = {
}

// init actions 
const actions = {
    /**
     * @desc 发送短信验证码 requestno：客户端流水号
     * @param { Act: '/user/token/send/:requestno', mobile, captcha, type }
     * os: web
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
     * @desc 快速登陆
     * @param 
     * username: {string} 必选, 波奇用户名/邮箱/手机号
     * password: {string} 密码md5, 密码登录时必须
     * token: {string} 验证码，手机验证登录必须
     * invitation: {string} 可选, 邀请码
     */
    login({
        commit,
        state
    }, params) {
        return new Promise((resolve, reject) => {
            ApiNodeAction(login, params).then(data => {
                resolve(data);
            },err=>{
                reject(err);
            })
        })
    },
    /**
     * @desc check 验证码是否有效
     * @param 
     * mobile: {string} 必填, 用户手机号码
     * type: {number} 必填, 验证码类型 6电子贺卡
     * token: {string} 验证码，必须
     * 
     */

    checkCode({
      commit,
      state
    }, params) {
      return new Promise((resolve, reject) => {
        ApiNodeAction(checkCode, params).then(data => {
            resolve(data);
        },err=>{
            reject(err);
        })
      })
    },
    /**
     * @desc 验证收花人
     * @param 
     * recipient: {string} 必须 收花人手机号码
     * token: 必须，验证码
     * 
     */

    checkReciever({
      commit,
      state
    }, params) {
      return new Promise((resolve, reject) => {
        ApiNodeAction(checkReciever, params).then(data => {
            resolve(data);
        },err=>{
            reject(err);
        })
      })
    },
    
    /**
     * @desc check 验证码是否有效
     * @param 
     * mobile: {string} 必填, 用户手机号码
     * token: {string} 验证码，必须
     * 
     */

    syncToken({
      commit,
      state
    }, params) {
      return new Promise((resolve, reject) => {
        ApiNodeAction(syncToken, params).then(data => {
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
