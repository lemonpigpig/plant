
export const isProduction = process.env.NODE_ENV === 'production';
export const NODEAPI = isProduction ? 'https://api-plant.boqii.com' : 'http://api-plant-dev.boqii.com/';
// export const NODEAPI = isProduction ? 'http://172.16.58.186:3100/' : 'http://172.16.58.186:3100/';

export const QINIU_SPACE = isProduction ? 'https://api.boqiicdn.com' : 'https://api-dev.boqiicdn.com';
export const LOGIN_API = isProduction ? 'https://vet.boqii.com': 'https://vet-dev.boqii.com';
export const UPLOAD_URL = 'https://up.qbox.me';

/**qiniu reference api */
export const getQiniuUploadTokenUrl = { url: '/resources/qiniu_upload_token', method: 'GET', mutation: 'Get_QiniuUploadToken'};
export const qiniuUpload = { url: '/resources/qiniu_upload', method: 'post' };

/**send code api */
 export const sendCode = { url: '/user/token/send/:requestno', method: 'post' }
 export const getCaptcha = { url: '/extern/captchas', method: 'GET' }
 export const testApi = { url: '/testApi', method: 'GET' }
 