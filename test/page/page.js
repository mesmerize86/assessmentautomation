'use strict';
class Page {
  constructor(){
    this.title = 'Automation Assessment';
  }

  //start a new session
  open(path){
      browser.url(path);
  }

  //pageload Wait Timeouts
  pageLoad(element){
      browser
      .waitForVisible(element);

  }
}

export default Page;
