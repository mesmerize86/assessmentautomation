'use strict';
import axios from 'axios';

export default{
  axiostest : {
    getService : (url)=>{
      return axios.get(url);
    }
  }
}
