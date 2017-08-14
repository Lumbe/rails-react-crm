import axios from 'axios';
import BaseApi from './baseApi';

class UserApi extends BaseApi {
  static modelName() {
    return 'user';
  }

  static createSession(user) {
    var data = {};
    data[this.modelName()] = user;
    return axios.post(this.path('/sign_in'), data).catch(this.catchError);
  }

  static loadCurrentUser(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get(this.path('/current')).catch(this.catchError);
  }
}

export default UserApi;
