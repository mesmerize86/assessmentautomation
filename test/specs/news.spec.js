'use strict';
import assert from 'assert';
import { expect } from 'chai';
import NewsPage from '../page/news.page';

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

  it('should load news banner successfully', ()=>{
      NewsPage.open();
      let newsBannerLoad = NewsPage.newsBannerLoad();
      expect(newsBannerLoad, 'Could not find image. Check image src.!!!')
  });

  it('should navigate to just in page', ()=> {
    NewsPage.open();
    let pageTitle = NewsPage.navigatePage('#n-justin a');
    assert.equal(pageTitle, 'Just In - ABC News (Australian Broadcasting Corporation)');
  });

  it('article should content title, timestamp and text', ()=>{
    NewsPage.open();
    NewsPage.navigatePage('#n-justin a');
    const elementConfig = {
      title : '#main_content .page .subcolumns .c75l .article-index ul.article-index li > h3',
      timestamp : '#main_content .page .subcolumns .c75l .article-index ul.article-index li > p',
      text : '#main_content .page .subcolumns .c75l .article-index ul.article-index li p:nth-child(4)'
    }
    let verifyArticle = NewsPage.verifyArticle(elementConfig);
    expect(verifyArticle, 'One of the content is missing.!!! Please check log').to.be.true;
  });

  it('should load video and take a screenshot on success', ()=>{
    let url = 'news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908';
    NewsPage.open(url);
    let verifyVidoLoad = NewsPage.verifyVideoLoad();
    expect(verifyVidoLoad, 'There is error on video content').to.be.true;
  });

  it('should display image gallery', ()=>{
    let url = 'news/2017-02-10/abc-open-pic-of-the-week/8256256';
    NewsPage.open(url);
    let verifyImageGallery = NewsPage.verifyImageGallery();
    expect(verifyImageGallery, 'Image not yet displayed.!!').to.be.true;
  });
});
