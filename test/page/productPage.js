'use strict';
import Page from './page';
import { screenshot } from '../util/screenshot';
import Service from '../services/service';
import Brand from '../api-integration/env';

class ProductPage extends Page{
  open(url){
    super.open(url);
  }
  
  checkBottleImages(){
    let bottleImage = $('#bottle-image').getAttribute('src');
    return (bottleImage.indexOf('default') < 0) ?   false :  true;
  }

}

export default new ProductPage;
