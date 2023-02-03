/**
 * PersonalInfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {uploadFile} = require("../../libs/helper");

module.exports = {
  create: async (req, res) => {
    // console.log('create contact ->', req.body);
    if (!req.body) {
      return res.badRequest('Invalid data Provided');
    }

    try {
      try {
        const uploaded = await uploadFile(req.file('resume'));
        if (uploaded.length === 0) {
          return res.badRequest('No file was uploaded');
        }
        const newPath = uploaded[0].fd.split(/[\\//]+/).reverse()[0];
        req.body.resume = '/' + newPath;
      } catch (err) {
        console.log('image error', err);
        return res.json(err.status, {err: err});
      }

      const personalInfo = await PersonalInfo.create(req.body).fetch();
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
      const personalInfo = await PersonalInfo.find({deletedAt: null})

      // console.log('personalInfo->', personalInfo);

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

      // console.log('country->', personalInfo);

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

