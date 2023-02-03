const {filesRoute} = require('./file');
const {country} = require("./country");
const {city} = require("./cities");
const {personalInfo} = require("./personalInfo");

exports.allRouter = {
  ...filesRoute,
  ...country,
  ...city,
  ...personalInfo
};
