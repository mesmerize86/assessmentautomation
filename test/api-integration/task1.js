import Service from '../services/service';

class APIIntegrationTest {

  constructor(){
    this.env = ''
  }

  setEnvrionment(env){
    return (env === undefined) ? 'http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json' : 'http://' + env + '-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json';
  }

  checkAPI(env){
    let url = this.setEnvrionment(env);
      Service.axiostest.getService(url).then((response)=>{
        console.log(response);
      });
  }
}

export default new APIIntegrationTest;
