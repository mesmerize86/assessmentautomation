'use strict';
import Service from '../services/service';

class APIIntegrationTest {

  constructor(url){
    this.url = url;
  }

  checkAPI(){
    Service.axiostest.getService(this.url).then((response)=>{
      console.log(response.data);
    }).catch(err => {
      console.log('Error ' + err);
    });
  }

  checkAPIById(id){
    Service.axiostest.getServiceById(id).then((response) => {
      console.log(response.data.arid + ' success');
    }).catch(err => {
      console.log(err);
    });
  }
}

export default APIIntegrationTest;
