'use strict';
import Service from '../services/service';

class APIIntegration {

  constructor(url){
    this.url = url;
  }

  fetchSingleBottle(itemCode){
    Service.singleBottleAPI.getSingleBottleItem(this.url).then((response) => {
      console.log(' success');
    }).catch(err => {
      console.log(err);
    });
  }
}

export default APIIntegration;
