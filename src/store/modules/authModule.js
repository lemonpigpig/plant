/**
 * @author lemon
 * @desc 用户登录注册模块
 */
import ApiNodeAction from '@/service/apiNodeAction';
import { sendCode, login, checkCode, cardList, addCard } from '@/service/apiConfig';

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
     * @desc 获取电子贺卡列表
     * @param 
     * giver: 必须，订花人手机号
     * recipient: 必须，收花人手机号
     * token: {string} 验证码，必须
     * isRead: 可选，是否已读 不填代表全部贺卡，1 已读贺卡 0 未读贺卡
     * maxid: 可选，当前页面加载最大id，用于下拉刷新获取最新数据
     * minid: 可选，当前页面加载最小id，用于上拉刷新获取更多数据
     * limit: 可选，获取贺卡数, 默认为10
     */

    getCardList({
      commit,
      state
    }, params) {
      return new Promise((resolve, reject) => {
        ApiNodeAction(cardList, params).then(data => {
            resolve(data);
        },err=>{
            reject(err);
        })
      })
    },
     /**
     * @desc 新增电子贺卡
     * @param
     * giver: 必须，订花人手机号
     * recipient: 必须，收花人手机号
     * token: {string} 验证码，必须
     * title: {string} 必须 称呼
     * message: {string} 必须 留言内容
     * signature: {string} 必须 落款
     */

    addCard({
      commit,
      state
    }, params) {
      return new Promise((resolve, reject) => {
        ApiNodeAction(addCard, params).then(data => {
            resolve(data);
        },err=>{
            reject(err);
        })
      })
    },
    /**
     * @desc 新增电子贺卡
     * @param
     * id: {string} 贺卡id
     * recipient: 必须，收花人手机号
     * token: {string} 验证码，必须
     */

    tagRead({
      commit,
      state
    }, params) {
      return new Promise((resolve, reject) => {
        ApiNodeAction(addCard, params).then(data => {
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
