/**
 * PersonalInfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    console.log('create contact ->', req.body);
    if (!req.body) {
      return res.badRequest('Invalid data Provided');
    }

    try {
      const personalInfo = await PersonalInfo.create(req.body).fetch();
      console.log('personalInfo->', personalInfo);

      return res.json({
        success: true,
        message: 'successfully submitted personal info',
        data: personalInfo
      });

    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: 'Failed to submit form',
        error
      });
    }
  },
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

