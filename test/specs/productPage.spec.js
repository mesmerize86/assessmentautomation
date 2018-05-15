import FetchProductAPI from '../api-integration/fetchSingleBottle';
import ProductPage from '../page/productPage';
import Brand from '../api-integration/env';


describe('Fetch Single Bottle Product Page', ()=>{
  it('should loaded', ()=>{

    ProductPage.open();
    // let fetchSingleBottle = new FetchProductAPI(Brand.wp.productPage); // Test Envrionment
    // fetchSingleBottle.fetchSingleBottle();

  });
});
