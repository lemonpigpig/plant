import { NODEAPI } from './apiConfig';
import ApiBaseAction from './apiBaseAction';
import BoqiiAuth from 'boqii-node-auth';
import { tool } from '../utils';

class ApiNodeAction extends ApiBaseAction {
	constructor() {
		console.log('ApiPHPAction constructor')
		super();
		this.$baseUrl = NODEAPI;
    this.auth = new BoqiiAuth();
		this.$defaultHeaders = (params) => {
			return {
				'Authorization':  localStorage.getItem('Authorization'),
				'Sign': this.auth.signParams(tool.delEmpty(params)),
        'Vary-Client': 'web'
			}
		};
	}
}
export default function(apiObj={},params={}) {
	return ApiNodeAction.getInstance(ApiNodeAction).baseAction(apiObj,params)
}
