import ProductPage from '../page/productPage';
import Brand from '../api-integration/env';
import Data from '../data/data';

describe('Fetch Single Bottle Product Page', ()=>{
  it('should loaded', ()=>{
    let wp = Brand.wp.url;
    let missingImage = [];
    Data.map(itemCode => {
      let url = wp + itemCode.ID;
      ProductPage.open(url);
      if(ProductPage.checkBottleImages()){
        missingImage.push(itemCode);
      }
    })
    console.log(missingImage);

  });
});
