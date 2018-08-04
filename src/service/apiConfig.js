
export const isProduction = process.env.NODE_ENV === 'production';
export const NODEAPI = isProduction ? 'https://api-plant.boqii.com' : 'http://api-plant-dev.boqii.com/api/v2';
export const PLANTDOMAIN = isProduction ? 'http://api-plant-dev.boqii.com' : 'http://api-plant.boqii.com'
// export const NODEAPI = isProduction ? 'http://172.16.58.186:3100/' : 'http://172.16.58.186:3100/';

export const QINIU_SPACE = isProduction ? 'https://api.boqiicdn.com' : 'https://api-dev.boqiicdn.com';
export const LOGIN_API = isProduction ? 'https://vet.boqii.com': 'https://vet-dev.boqii.com';
export const UPLOAD_URL = 'https://up.qbox.me';

/**qiniu reference api */
export const getQiniuUploadTokenUrl = { url: '/resources/qiniu_upload_token', method: 'GET', mutation: 'Get_QiniuUploadToken'};
export const qiniuUpload = { url: '/resources/qiniu_upload', method: 'post' };

/**send code api */
 export const sendCode = { url: '/user/token/send/:requestno', method: 'post' }

 /**user login by code */
 export const login = { url: '/user/login', method: 'post' }
 /**check code */
 export const checkCode = { url: '/user/token/check', method: 'post' }

/**get cardList */
export const cardList = { url: '/greeting/cards', method: 'GET' }

/**add card */
export const addCard = { url: '/greeting/cards', method: 'post' }

/**add card */
export const editCard = { url: '/greeting/cards/:id', method: 'PUT' }

/**标记电子贺卡为已读 */
export const tagRead = { url: '/greeting/cards/:id/read', method: 'post' }

/**标记电子贺卡为已读 */
export const categoryList = { url: '/greeting/categories', method: 'GET' }

/**获取祝福语模版 */
export const wishTemplateList = { url: '/greeting/wishes', method: 'GET' }

/**短信验证码同步方案 */
export const syncToken = { url: '/greeting/sync', method: 'GET' }

/**收华人验证 */
export const checkReciever = { url: '/greeting/check', method: 'GET' }
