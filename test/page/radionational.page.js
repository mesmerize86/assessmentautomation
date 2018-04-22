'use strict';
import Page from './page';
import { screenshot } from '../util/screenshot';

class RadioNational extends Page{
  open(url){
    if(url === undefined || url === null || url === '')
      super.open('radtionational');

    super.open(url);
  }

  getPageElement(selector){
    return browser.element(selector);
  }
}

export default new RadioNational;
