const userModel = require("../models/userModel");


module.exports = function isAdmin(req, res, next) {
  const allowedUserId = '683f0a1c33e4ee1d3e575646';

  if (req.user && req.user._id && req.user._id.toString() === allowedUserId) {
    return next();
  }

  return res.status(403).send('Access denied: Admin only');
};
