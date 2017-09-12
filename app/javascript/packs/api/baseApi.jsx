import axios from 'axios';
import pluralize from 'pluralize';
import { dispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notificationActions from '../actions/notificationActions'
axios.defaults.baseURL = 'http://localhost:5000';

let boundActionCreators = bindActionCreators(notificationActions, dispatch)
console.log('boundActionCreators: ',boundActionCreators);
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
    if (error.response.status >= 500) {
        window.store.dispatch(window.actions.createNotification({
            type: 'error',
            message: ("Server Error: " + error.response.status.toString())
        }));
        // throw error;
    } else {
        boundActionCreators.createNotification({type: 'error', message: error.response.data.error});
        // throw error;
    }
      // console.log(error.response);
  }
}

export default BaseApi;
