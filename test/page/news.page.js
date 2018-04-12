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
  }

  pageLoad(){
    super.pageLoad();
  }

}

export default new NewsPage;
