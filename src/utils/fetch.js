import Config from '@/config';

const { baseUrl } = Config;

// 拼接get请求的参数
const jointParams = (params) => {
    if (!params) return;
    const paramsArray = [];
    Object.keys(params).forEach(item => {
        paramsArray.push(`${item}=${params[item]}`);
    })
    return paramsArray.join('&');
}

const ajax = (config) => {
    const {
        method, data, url
    } = config;
    let _url = url;
    let options = {
        method: 'post',
        body: data
    }
    if (method === 'get') {
        _url = `${url}?${jointParams(data)}`;
        options = {
            method: 'get'
        }   
    }
    return fetch(_url, options)
        .then(res => {
            if (res.code !== '0') {
                alert('系统异常');
                return false;
            }
            return res.json();
        })
        .catch(err => {
            alert('系统异常')
        })
};

export default ajax;
