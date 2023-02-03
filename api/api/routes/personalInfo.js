exports.personalInfo = {
  'GET /api/v1/personal-info': 'PersonalInfoController.find',
  'GET /api/v1/personal-info/:id': 'PersonalInfoController.findOne',
  'POST /api/v1/personal-info/create': 'PersonalInfoController.create',
  'DELETE /api/v1/personal-info/delete/:id': 'PersonalInfoController.delete',
  'PUT /api/v1/personal-info/update/:id': 'PersonalInfoController.update',
};
