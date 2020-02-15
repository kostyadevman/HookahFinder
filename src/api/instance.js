import axios from 'axios'
import Qs from 'qs'
import Mock from './Mock'

const instance = axios.create({
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'brackets' }),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

let mock = null
if (process.env.MOCK_API === 'true' || !(process.env.isDevelopment || process.env.isProduction)) {
  mock = new Mock(instance)
  mock.init()
}

export default instance
