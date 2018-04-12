import Service from '../services/service';

class APIIntegrationTest {

  constructor(url){
    this.url = url;
  }

  checkAPI(url){
      Service.axiostest.getService(this.url).then((response)=>{
        console.log(response);
      }).catch(err => {
        console.log('Error ' + err);
      })
  }
}

export default new APIIntegrationTest;
