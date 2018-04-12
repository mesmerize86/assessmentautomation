'use strict';
import axios from 'axios';

export default{
  axiostest : {
    get : (env)=>{
      let url = (env === undefined) ? 'http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json' : 'http://' + env + '-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json'

      return axios.get(url)
      .then(response => response.data)
      .catch(err => err);
    }
  }
}
