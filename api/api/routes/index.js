const {categoryRoutes} = require('./category');
const {eventsRoutes} = require('./events');
const {warehousevariantRoute} = require('./warehousevariant');
const {designcategoriesRoute} = require('./designcategories');
const {productCategoryRoute} = require('./productCategory');
const {typeCategoryRoute} = require('./typeCategory');
const {craftsmanRoute} = require('./craftsman');
const {productRoute} = require('./product');
const {variantRoute} = require('./variant');
const {designRoute} = require('./design');
const {genreRoute} = require('./genre');
const {partsRoute} = require('./part');
const {craftsmanPriceRoute} = require('./craftmenprice');
const {designImageRoute} = require('./designImage');
const {favouriteproductRoute} = require('./favouriteProduct');
const {userRoutes} = require('./user');
const {brandRoute} = require('./brands');
const {warehouseRoute} = require('./warehouse');
const {cmsRoutes} = require('./cms');
const {investorRoute} = require('./investor');
const {questionsRoute} = require('./questions');
const {ImageRoute} = require('./image');
const {roleManagementRoute} = require('./roleManagement');
const {adminUsersRoute} = require('./adminUsers');
const {filesRoute} = require('./file');
const {requestSampleRoute} = require('./SampleRequest');
const {productConcept} = require('./productConcept');
const {collection} = require('./collection');
const {cart} = require('./cart');
const {contactFormRoutes} = require('./contactForm');
const {newsFeedRoutes} = require('./newsFeed');

exports.allRouter = {
  ...categoryRoutes,
  ...warehousevariantRoute,
  ...designcategoriesRoute,
  ...productCategoryRoute,
  ...typeCategoryRoute,
  ...craftsmanPriceRoute,
  ...craftsmanRoute,
  ...variantRoute,
  ...productRoute,
  ...designRoute,
  ...genreRoute,
  ...partsRoute,
  ...designImageRoute,
  ...favouriteproductRoute,
  ...userRoutes,
  ...eventsRoutes,
  ...brandRoute,
  ...warehouseRoute,
  ...cmsRoutes,
  ...investorRoute,
  ...questionsRoute,
  ...ImageRoute,
  ...roleManagementRoute,
  ...adminUsersRoute,
  ...filesRoute,
  ...requestSampleRoute,
  ...productConcept,
  ...collection,
  ...cart,
  ...contactFormRoutes,
  ...newsFeedRoutes,
};
