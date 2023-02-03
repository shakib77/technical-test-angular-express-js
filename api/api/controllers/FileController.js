/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const fs = require('fs');
module.exports = {
  /**
   * FileController.download()
   *
   * Download a file from the server's disk.
   */
  download: function (req, res) {

    try {
      if (typeof req.query.image_path !== 'undefined') {

        const imagePath = `assets/resumes${req.query.image_path}`;

        console.log('imagepath->', imagePath);

        // fs.createReadStream(Path.resolve(req.param('path')))
        if (imagePath) {
          fs.createReadStream(imagePath)
            .on('error', (err) => {
              return res.serverError(err);
            })
            .pipe(res);
        }

      } else {
        return res.json(404, 'Not Found');
      }
    } catch (error) {
      console.log('error->', error);
      return res.json(404, 'Not Found');
    }

  },

};

