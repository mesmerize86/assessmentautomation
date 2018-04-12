'use strict';
import axios from 'axios';

export default{
  axiostest : {
    getService : (url)=>{
      return axios.get(url);
    },
    getServiceById: (id)=>{
      const url = 'http://program.abcradio.net.au/api/v1/programs/' + id;
      return axios.get(url);
    }
  }
}
