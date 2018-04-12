import Service from '../services/service';

class APIIntegrationTest {

  constructor(){
    this.env = ''
  }

  setEnvrionment(env, defaultValue){
    return (env === undefined) ? defaultValue : env;
  }

  checkAPI(env){
      Service.axiostest.get(env).then((data)=>{
        !!data.theProperty ? console.log('Test success') : console.log('Test Fail');
      });
  }
}

export default new APIIntegrationTest;
