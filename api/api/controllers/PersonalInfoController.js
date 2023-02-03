/**
 * PersonalInfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {performance} = require("perf_hooks");
const moment = require("moment");
module.exports = {
  create: async (req, res) => {
    console.log('create contact ->', req.body);
    // moment
    if (!req.body) {
      return res.badRequest('Invalid data Provided');
    }

    try {
      // const personalInfo = await PersonalInfo.create(req.body).fetch();

      return res.json({
        success: true,
        message: 'successfully submitted personal info',
        data: []
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
      const personalInfo = await PersonalInfo.find({deletedAt: null})

      console.log('personalInfo->', personalInfo);

      return res.status(200).json({
        status: true,
        message: 'Successfully fetch all info',
        data: personalInfo
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

      const personalInfo = await PersonalInfo.findOne({id: req.param('id'), deletedAt: null})

      console.log('country->', personalInfo);

      return res.status(200).json({
        status: true,
        message: 'Successfully fetch info',
        data: personalInfo
      });

    } catch (error) {
      sails.log.error(`Request Uri: ${req.path} ########## ${error}`);

      return res.status(400).json({
        success: false,
        error
      });
    }
  },

  delete: async (req, res) => {
    try {

      await PersonalInfo.updateOne({id: req.param('id')}).set({deletedAt: new Date()});

      sails.log.debug(`Request Uri: ${req.path}  ##########  Time Elapsed: ${(time2 - time1) / 1000} seconds`);

      return res.json({
        success: true,
        message: 'Personal info successfully deleted',
      });
    } catch (error) {
      console.log(error);
      sails.log.error(`Request Uri: ${req.path} ########## ${error}`);

      res.status(400).json({
        success: false,
        message: 'Failed to delete Personal info',
        error
      });
    }
  },

};

