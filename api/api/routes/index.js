const {filesRoute} = require('./file');
const {country} = require("./country");
const {city} = require("./cities");

exports.allRouter = {
  ...filesRoute,
  ...country,
  ...city
};
