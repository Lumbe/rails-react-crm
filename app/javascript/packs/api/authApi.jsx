import axios from 'axios'
import BaseApi from './baseApi';

export function setAuthHeaderToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function removeAuthHeaderToken() {
  axios.defaults.headers.common['Authorization'] = null;
}

class AuthApi extends BaseApi {
  static modelName() {
    return 'user';
  }

  static createSession(user_credentials) {
    var data = {};
    data[this.modelName()] = user_credentials;
    return axios.post(this.path('/sign_in'), data).catch(this.catchError);
  }
}

export default AuthApi
