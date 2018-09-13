import { NODEAPI } from './apiConfig';
import ApiBaseAction from './apiBaseAction';

import { tool } from '../utils';

class ApiNodeAction extends ApiBaseAction {
	constructor() {
		
		super();
    this.$baseUrl = NODEAPI;
    console.log('ApiPHPAction constructor', '------NODEAPI-----', NODEAPI)

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
