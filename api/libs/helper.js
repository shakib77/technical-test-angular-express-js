const fetch = require('node-fetch');
const AbortController = require('node-abort-controller');
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


exports.fetchWithTimeout = async function (resource, options) {
  const {timeout = 30000} = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);

  return response;
};


exports.initLogPlaceholder = (req, funcName) => {
  sails.log(`call from ${funcName}`);
  sails.log('query ========>', req.query);
  sails.log('params =======>', req.params);
  sails.log('body =========>', req.body);
};

exports.baseFilter = (reqBody, Model, localWhere) => {

  const where = localWhere ? localWhere : {};
  where.deletedAt = null;
  const modelAttributes = Object.keys(Model.definition);

  modelAttributes.map((attr) => {
    if (reqBody[attr]) {
      where[attr] = reqBody[attr];
    }
  });
  return where;
};

exports.escapeExcel = function (str) {
  if (!str) {
    return '';
  }
  return str.replace(/[&]/g, 'and').replace(/['"]/g, '').replace('-', ' ').replace(/\s+/g, ' ');
};
const imageUploadConfig = function () {
  return {
    maxBytes: 52428800,
    /*maxBytes: 10000000,*/
    /*maxBytes: 50*1024*1024,*/
    dirname: sails.config.appPath + '/assets/images/',
  };

};
exports.imageUploadConfig = imageUploadConfig;
exports.deleteImagesLocal = async (imageList, path) => {
  await asyncForEach(imageList, (item) => {
    let dir = __dirname.split('/api');
    let assestsdir = dir[0] + '/assets';

    try {
      fs.unlinkSync(assestsdir + item);
      console.log('successfully deleted' + item);
    } catch (err) {

      console.log(err);
      console.log('error to delete' + item);
      // handle the error
    }
  });
};

exports.uploadImages = (imageFile) => {
  return new Promise((resolve, reject) => {
    imageFile.upload(imageUploadConfig(), async (err, uploaded) => {
      if (err) {
        console.log('image upload error: ', err);
        reject(err);
      } else {
        resolve(uploaded);
      }
    });
  });
};

exports.getContentTypeByFile = function (fileName) {
  var rc = 'application/octet-stream';
  var fn = fileName.toLowerCase();

  if (fn.indexOf('.html') >= 0) {
    rc = 'text/html';
  } else if (fn.indexOf('.css') >= 0) {
    rc = 'text/css';
  } else if (fn.indexOf('.json') >= 0) {
    rc = 'application/json';
  } else if (fn.indexOf('.js') >= 0) {
    rc = 'application/x-javascript';
  } else if (fn.indexOf('.png') >= 0) {
    rc = 'image/png';
  } else if (fn.indexOf('.jpg') >= 0) {
    rc = 'image/jpg';
  }

  return rc;
};

exports.makeUniqueId = function (length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
