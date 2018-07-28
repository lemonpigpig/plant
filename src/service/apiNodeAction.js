import { NODEAPI } from './apiConfig';
import ApiBaseAction from './apiBaseAction';
import BoqiiAuth from 'boqii-node-auth';
import {delEmpty} from '../utils';
class ApiNodeAction extends ApiBaseAction {
	constructor() {
		console.log('ApiPHPAction constructor')
		super();
		this.$baseUrl = NODEAPI;
		this.auth = new BoqiiAuth();
		this.$defaultHeaders = (params) => {
			return {
				'Authorization':  '',
				'Sign': this.auth.signParams(delEmpty(params)),
        'Vary-Client': 'web'
			}
		};
	}
}
export default function(apiObj={},params={}) {
	return ApiNodeAction.getInstance(ApiNodeAction).baseAction(apiObj,params)
}
