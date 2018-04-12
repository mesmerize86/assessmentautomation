'use strict';
import Page from './page';

class NewsPage extends Page{
  open(){
    super.open('news');
  }

  getPageElement(selector){
    return browser.element(selector);
  }

  checkNewsBannerLoad(){

    //let header = this.getPageElement('#header');
    //let images = [];
    // if(header.getTagName('img').length > 0){
    //
    // }
    //console.log(browser.elementIdElement('div', '#header'));
    // console.log(images.length + '\n');
    // console.log(images);
  }

  pageLoad(){
    super.pageLoad();
  }

}

export default new NewsPage;
