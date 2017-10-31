import axios from 'axios';
import BaseApi from './baseApi';

class HouseProjectApi extends BaseApi {
  static modelName() {
    return 'project';
  }
}

export default HouseProjectApi;
