exports.personalInfo = {
  'GET /api/v1/personal-info/:countryId': 'PersonalInfoController.find',
  'GET /api/v1/personal-info/:id': 'PersonalInfoController.findOne',
  'POST /api/v1/personal-info/create': 'PersonalInfoController.create',
};
