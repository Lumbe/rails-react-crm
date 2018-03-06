import axios from 'axios';
import BaseApi from '../baseApi';

class AdminUserApi extends BaseApi {
  static apiPath() {
    return super.apiPath() + 'admin/'
  }

  static modelName() {
    return 'user';
  }

}

export default AdminUserApi;
