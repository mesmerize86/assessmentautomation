'use strict';

import {expect} from 'chai';
import APIIntegration from '../api-integration/task1';
import NewsPage from '../page/news.page';


describe('ABC News Page', ()=>{
  it('should loaded', ()=>{
    NewsPage.open();
    APIIntegration.checkAPI('test');
    //APIIntegration.checkAPI('staging');
  });
});
