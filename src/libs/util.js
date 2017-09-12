import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    window.document.title = "iview 管理系统";
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;