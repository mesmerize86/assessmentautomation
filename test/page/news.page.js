'use strict';
import Page from './page';
import { screenshot } from '../util/screenshot';

class NewsPage extends Page{
  open(url){
    if(url === undefined || url === null || url === '')
      super.open('news');

    super.open(url);
  }

  getPageElement(selector){
    return browser.element(selector);
  }

  newsBannerLoad(){
    let newsBannerLogos = $('#header').$$('img');
    let isDisplayed;
    newsBannerLogos.map((logo) => {
        (logo.getAttribute('src') !== null) ? isDisplayed = true : isDisplayed = false;
    })
    return isDisplayed;
  }

  pageLoad(){

  }

  navigatePage(selector){
    let elem = this.getPageElement(selector)
    elem.click();
    let pageTitle = browser.getTitle();
    return pageTitle;
  }

  verifyArticle(elemConfig){
    let title = this.getPageElement(elemConfig.title);
    let timestamp = this.getPageElement(elemConfig.timestamp);
    let text = this.getPageElement(elemConfig.text);
    //console.log (title.getText() + '\n' + timestamp.getText() + '\n' + text.getText());
    return ((title.getText() !== null && timestamp.getText() !== null && text.getText() !== null) ? true : false );
  }

  verifyVideoLoad(){
    let videoElement = this.getPageElement('#jwplayer-video-0');
    let videoIcon = this.getPageElement('#jwplayer-video-0 .jw-icon');

    if(videoElement.isExisting() && videoIcon.isExisting()){
      screenshot('videoshot');
      return true;
    }else{
      return false;
    }
  }

  verifyImageGallery(){
    if(this.isDisplayLargeImage && this.isDisplayThumbnail){
      screenshot('image-gallery');
      return true;
    }else{
      return false;
    }
  }

  isDisplayLargeImage(){
    let largeImages = $('.lSSlideOuter .lSSlideWrapper ul.imageGallery').$$('img');
    let isDisplayed;
    largeImages.map(image => {
      (image.getElementSize('width') <= 940) ? isDisplayed = true : isDisplayed = false ;
    })
    return isDisplayed;
  }

  isDisplayThumbnail(){
    let thumbnails = $('.lSSlideOuter ul.lSPager').$$('img');
    let isDisplayed;
    thumbnails.map(image => {
      (image.getElementSize('width') <= 88) ? isDisplayed = true : isDisplayed = false ;
    })
    return isDisplayed;
  }

}

export default new NewsPage;
