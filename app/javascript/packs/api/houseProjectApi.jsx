import axios from 'axios';
import BaseApi from './baseApi';

class HouseProjectApi extends BaseApi {
  static modelName() {
    return 'house_project';
  }
}

export default HouseProjectApi;
