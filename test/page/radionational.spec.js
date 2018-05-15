'use strict';
import assert from 'assert';
import { expect } from 'chai';
import Radionational from '../page/radionational.page';

describe('ABC News Page', ()=>{
  before(()=>{
    //do something before test suite execution
    //no matter if there are failed cases
  });

  after(()=>{
    //do something after test suite execution is finished
    //no matter if there are failed cases
  });

  beforeEach(()=>{
    //do something before test case execution
    //no matter if there are failed cases
  });

  afterEach(()=>{
    //do something after test case execution is finished
    //no matter if there are failed cases
  });

  it('should navigate sub-menu', ()=>{
      Radionational.open();
  });

});
