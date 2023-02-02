/**
 * CityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    try {
      let country = await City.find({country_id: req.param('countryId'), deletedAt: null})

      console.log('country->', country);

      return res.status(200).json({
        status: true,
        message: 'Successfully fetch all city',
        data: country
      });

    } catch (error) {
      sails.log.error(`Request Uri: ${req.path} ########## ${error}`);

      return res.status(400).json({
        success: false,
        error
      });
    }
  },

  findOne: async (req, res) => {
    try {

      let country = await City.findOne({id: req.param('cityId'), deletedAt: null})

      console.log('country->', country);

      return res.status(200).json({
        status: true,
        message: 'Successfully fetch city',
        data: country
      });

    } catch (error) {
      sails.log.error(`Request Uri: ${req.path} ########## ${error}`);

      return res.status(400).json({
        success: false,
        error
      });
    }
  },

};

