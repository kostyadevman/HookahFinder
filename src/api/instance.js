import axios from 'axios'
import Qs from 'qs'


const instance = axios.create({
  paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'brackets' }),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})



export default instance
