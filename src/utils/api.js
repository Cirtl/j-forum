import axios from "axios"

export function service(url = '', data = {}, type = 'POST') {
    return new Promise((resolve, reject) => {
        let promise
        if (type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 get 请求
            promise = axios.get(url)
        } else if (type === 'POST') {
            // 发送 post 请求
            promise = axios.post(url, data)
        } else if (type === 'PUT') {
            // 发送 PUT 请求
            promise = axios.put(url, data)
        } else if (type === 'DELETE') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 delete 请求
            promise = axios.delete(url)
        }
        promise
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}