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
  pageLoad(){
      browser
        .timeouts({
          'script': 1000,
          'pageLoad': 7000,
          'implicit': 5000
        });
  }
}

export default Page;
