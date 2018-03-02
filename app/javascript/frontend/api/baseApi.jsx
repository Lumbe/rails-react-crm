import axios from 'axios';
import pluralize from 'pluralize';
import {createNotification} from '../actions/notificationActions'
import {store} from '../application'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api.servus.vn.ua' : 'http://localhost:5000';
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.response && error.response.status >= 500) {
    store.dispatch(createNotification({
      type: 'error',
      message: ("Server Error: " + error.response.status.toString())
    }))
  } else if (error.response && error.response.data.error) {
    store.dispatch(createNotification({
      type: 'error',
      message: error.response.data.error
    }))
  } else if (!error.response) {
    store.dispatch(createNotification({
      type: 'error',
      message: ("Проверьте подключение к интернету")
    }));
  } else {
    if (!(error.response.status === 422)) {
      console.log('unhandled error', error);
      throw error
    }
  }
  return Promise.reject(error);
});



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
  static getAll(params = null){
    return axios.get(this.path(), {params: params})
  }
  static create(model){
    var data = {};
    data[this.modelName()] = model;
    return axios.post(this.path(), data)
  }
  static getOne(id){
    return axios.get(this.path('/' + id))
  }
  static update(model){
    var data = {};
    data[this.modelName()] = model;
    return axios.put(this.path('/' + model.id), data)
  }
  static destroy(model){
    return axios.delete(this.path('/' + model.id))
  }
}

export default BaseApi;
