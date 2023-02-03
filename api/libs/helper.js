const fs = require('fs');

const asyncForEach = async (array, callback) => {
  if (array && Array.isArray(array) && array.length > 0) {
    for (let index = 0; index < array.length; index++) {
      // eslint-disable-next-line callback-return
      await callback(array[index], index, array);
    }
  }
};
exports.asyncForEach = asyncForEach;

const fileUploadConfig = function () {
  return {
    maxBytes: 52428800,
    /*maxBytes: 10000000,*/
    /*maxBytes: 50*1024*1024,*/
    dirname: sails.config.appPath + '/assets/resumes/',
  };

};
exports.fileUploadConfig = fileUploadConfig();

//todo: delete image will be implemented.
exports.deleteImagesLocal = async (imageList, path) => {
  await asyncForEach(imageList, (item) => {
    let dir = __dirname.split('/api');
    let assestsDir = dir[0] + '/assets/resume';

    try {
      fs.unlinkSync(assestsDir + item);
      console.log('successfully deleted' + item);
    } catch (err) {

      console.log(err);
      console.log('error to delete' + item);
      // handle the error
    }
  });
};

exports.uploadFile = (imageFile) => {
  return new Promise((resolve, reject) => {
    imageFile.upload(fileUploadConfig(), async (err, uploaded) => {
      if (err) {
        console.log('image upload error: ', err);
        reject(err);
      } else {
        resolve(uploaded);
      }
    });
  });
};
