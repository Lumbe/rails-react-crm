import BaseApi from '../baseApi';

class AdminDepartmentApi extends BaseApi {
  static apiPath() {
    return super.apiPath() + 'admin/'
  }

  static modelName() {
    return 'user';
  }

}

export default AdminDepartmentApi;
