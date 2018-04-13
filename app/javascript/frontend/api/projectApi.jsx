import axios from 'axios';
import BaseApi from './baseApi';

class HouseProjectApi extends BaseApi {
  static modelName() {
    return 'project';
  }

  static create(data){
    // var data = {};
    // data[this.modelName()] = model;
    return axios.post(this.path(), data, {headers: {'Content-Type': 'multipart/form-data'}})
  }

  static update(id, data){
    // var data = {};
    // data[this.modelName()] = model;
    return axios.put(this.path('/' + id), data, {headers: {'Content-Type': 'multipart/form-data'}})
  }

  static getMeta() {
    return axios.get(this.path('/meta'))
  }
}

export default HouseProjectApi;
