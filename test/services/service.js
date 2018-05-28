'use strict';
import axios from 'axios';

export default{
  productPageAPI : {
    fetchSingleBottleItem : (url)=>{
      return axios.get(url);
    }
  }
}
