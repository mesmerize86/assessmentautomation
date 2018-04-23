'use strict';

import APIIntegration from '../api-integration/task1';
import NewsPage from '../page/news.page';
import Env from '../api-integration/env';
import Programs from '../api-integration/programs';


describe('ABC News Page', ()=>{
  it('should loaded', ()=>{
    NewsPage.open();

    /* Please turn different testing enviroment remove commenting and adding commenting below */

    //let test = new APIIntegration(Env.test); // Deault Environment
    //let staging = new APIIntegration(Env.staging); // Staging Environment

    let prod = new APIIntegration(Env.prod); // Test Envrionment
    prod.checkAPI();

    //Note: I assumed that there is a list of programs. From that list, capture the uinique id for instance (key/value arid) and test if it response successfully.

    let program = new APIIntegration();
    const arid = Programs.map((value, index) =>{
      program.checkAPIById(value.arid);
    })

  });
});
