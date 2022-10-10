let cloudinary = require('cloudinary')
cloudinary.config({ 
    cloud_name: process.env.cloudinary_name, 
    api_key: process.env.cloudinary_api_key, 
    api_secret: process.env.cloudinary_api_secret
  });

  module.exports={cloudinary}