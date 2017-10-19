import axios from 'axios';
import pluralize from 'pluralize';
import {createNotification} from '../actions/notificationActions'
import {store} from '../application'
axios.defaults.baseURL = 'http://localhost:5000';

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
  static catchError(error){
    if (error.response && error.response.status >= 500) {
      console.log('error catched: ', error.response);
      return store.dispatch(createNotification({
        type: 'error',
        message: ("Server Error: " + error.response.status.toString()) || 'Something went wrong.'
      }))
      // throw error;
    } else if (error.response && error.response.data.error) {
        return store.dispatch(createNotification({
            type: 'error',
            message: error.response.data.error || 'Something went wrong.'
        }))
        // throw error;
    } else if (error.response && error.response.data.errors) {
      let errors = error.response.data.errors;
      let message = [];
      for (let error in errors) {
        if (errors.hasOwnProperty(error)) {
          message.push(error + ': ' + errors[error])
        }
      }
      return store.dispatch(createNotification({
        type: 'error',
        message: message || 'Something went wrong.'
      }))
    } else {
       throw error
    }
  }
}

export default BaseApi;
