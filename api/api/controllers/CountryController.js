/**
 * CountryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    try {

      let _where = {};
      _where.deletedAt = null;

      let country = await Country.find({
        where: _where,
      })

      console.log('country->', country);

      return res.status(200).json({
        status: true,
        message: 'Successfully fetch all country',
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

      let country = await Country.findOne({id: req.param('id'), deletedAt: null})

      console.log('country->', country);

      return res.status(200).json({
        status: true,
        message: 'Successfully fetch country',
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

