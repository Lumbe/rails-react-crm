import axios from 'axios';
import BaseApi from './baseApi';

class UserApi extends BaseApi {
  static modelName() {
    return 'user';
  }

  static loadCurrentUser() {
    return axios.get(this.path('/current')).catch(this.catchError);
  }
}

export default UserApi;
