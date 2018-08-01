/**
 * @author lemon
 * @desc card模块
 */
import ApiNodeAction from '@/service/apiNodeAction';
import {checkCode, cardList, addCard, categoryList, wishTemplateList } from '@/service/apiConfig';

// init state
const state = {
}

// filter data from state
const getters = {
}

// init actions 
const actions = {
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
     * @desc node 获取祝福语分类列表
     */
    getCategoryList({ commit, state }, params){
      return new Promise((resolve,reject)=>{
        ApiNodeAction(categoryList, params).then(data=>{
          resolve(data);
        })
      })
    },
     /**
     * @desc node 获取祝福语模版列表
     * params: category
     */
    getCategoryTemplateList({ commit, state }, params){
      return new Promise((resolve,reject)=>{
        ApiNodeAction(wishTemplateList, params).then(data=>{
          resolve(data);
        })
      })
    },
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
