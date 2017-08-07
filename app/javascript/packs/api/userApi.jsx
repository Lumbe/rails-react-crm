import axios from 'axios';
import BaseApi from './baseApi';

class UserApi extends BaseApi {
  static modelName() {
    return 'user';
  }

  static signIn(credentials) {
    return axios.get(this.path('/sign_in'), credentials).catch(this.catchError);
  }
}

export default UserApi;
