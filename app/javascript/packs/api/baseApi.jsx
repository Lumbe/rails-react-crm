import axios from 'axios';
import pluralize from 'pluralize';
import {bindActionCreators} from 'redux';
import {createNotification} from '../actions/notificationActions'
import {store} from '../application'
axios.defaults.baseURL = 'http://localhost:5000';

// let boundActionCreators = bindActionCreators(notificationActions, dispatch)
// console.log('boundActionCreators: ',notificationActions);
// console.log(notificationActions);
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
    return axios.get(this.path())
  }
  static create(model){
    var data = {};
    data[this.modelName()] = model;
    return axios.post(this.path(), data).catch(this.catchError);
  }
  static getOne(id){
    return axios.get(this.path('/' + id))
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
        // make list from errors array and create notification from it
    } else {
       throw error
    }
  }
}

export default BaseApi;
