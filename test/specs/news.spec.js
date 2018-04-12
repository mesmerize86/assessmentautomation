'use strict';

import {expect} from 'chai';
import APIIntegration from '../api-integration/task1';
import NewsPage from '../page/news.page';


describe('ABC News Page', ()=>{
  it('should loaded', ()=>{
    NewsPage.open();
    APIIntegration.checkAPI('http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json');
    //APIIntegration.checkAPI('staging');
  });
});
