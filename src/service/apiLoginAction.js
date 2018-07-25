import { LOGIN_API } from './apiConfig';
import ApiBaseAction from './apiBaseAction';

class ApiLoginAction extends ApiBaseAction {
	constructor() {
		console.log('apiLoginAction constructor')
		super();
		this.$baseUrl = LOGIN_API;
		this.$defaultHeaders = (params) => {
			return {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		};
	}
}
export default function(apiObj={},params={}) {
	return ApiLoginAction.getInstance(ApiLoginAction).baseAction(apiObj,params)
}