import axios from 'axios';
import pluralize from 'pluralize';

class BaseApi {
  static apiPath(){
    return 'api/v1/';
  }
  static modelName(){
    return '';
  }
  static path(path = ''){
    return this.apiPath() + pluralize(this.modelName()) + path;
  }
  static getAll(){
    return axios.get(this.path()).catch(this.catchError);
  }
  static create(model){
    var data = {};
    data[this.modelName()] = model;
    return axios.post(this.path(), data).catch(this.catchError);
  }
  static getOne(model){
    return axios.get(this.path('/' + model.id)).catch(this.catchError);
  }
  static update(model){
    var data = {};
    data[this.modelName()] = model;
    return axios.put(this.path('/' + model.id), data).catch(this.catchError);
  }
  static destroy(model){
    return axios.delete(this.path('/' + model.id)).catch(this.catchError);
  }
  static catchError(error){
    throw error;
  }
}

export default BaseApi;
