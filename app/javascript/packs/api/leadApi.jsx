import axios from 'axios';
import BaseApi from './baseApi';

class LeadApi extends BaseApi {
  static modelName() {
    return 'lead';
  }
}

export default LeadApi;
