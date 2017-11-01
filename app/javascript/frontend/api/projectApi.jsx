// import axios from 'axios';
import BaseApi from './baseApi';

class HouseProjectApi extends BaseApi {
  static modelName() {
    return 'project';
  }
  static update(model){
    var data = {};
    data[this.modelName()] = model;
    return axios.put(this.path('/' + model.id), data, { headers: {
      'content-type': 'multipart/form-data'
    } })
  }
}

export default HouseProjectApi;
