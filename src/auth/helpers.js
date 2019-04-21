const bcrypt = require('bcryptjs');

module.exports = {
  ensureAuthenticated(req, res, next) {
    if (!req.user) {
      req.flash('You must be signed in to do that.');
      return res.redirect('/users/sign_in');
    }
    next();
  },
  comparePassword(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
  },
};
