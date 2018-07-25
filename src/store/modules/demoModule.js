/**
 * @author lemon
 * @desc demo
 */
import ApiNodeAction from '@/service/apiNodeAction';

 // init state
const state = {
	demo: {}
}

// filter data from state
const getters = {
	demo: state=>state.demo
}

// init actions 
const actions = {
  //   getDemoData({ commit, state }, params){
	// 	return new Promise((resolve,reject)=>{
	// 		ApiNodeAction(demoApi, params).then(data=>{
	// 			resolve(data);
	// 			commit(demoApi.mutation, data);
	// 		})
	// 	})
	// },
}

// init mutations 
const mutations = {
	// [demoApi.mutation](state,data){
	// 	console.log("demo api call success", data);
	// },
	// [demoApi2.mutation](state,data){
	// 	console.log("demo api2 call success", data);
	// },
	// [demoApi3.mutation](state,data){
	// 	console.log("demo api3 call success", data);
	// }
}
export default {
	state,
	getters,
	actions,
	mutations
}
