const token = require('../util/token.js')
const UserModel = require('../models/User.js');

module.exports = {
  signup: (req, res, next) => {
    const { phone, password, name, email } = req.body;

    if (!phone || !password || !name || !email) {
      return res
        .status(422)
        .send({ error: 'You must provide phone and password.' });
    }
    UserModel
      .findOne({
        phone: phone
      }).then(
        function (result) {
          if (result) {
            return res
              .status(422)
              .send({ error: 'Phone is in use' });
          }
          const user = new UserModel({
            name: name,
            phone: phone,
            email: email,
            password: password
          })

          user
            .save()
            .then(function (result) {
              if (!result) {
                return next(result)
              }

              res.json({
                success: true,
                token: token.generateToken(result)
              })
            })
        }
      )
  },

  signin: (req, res, next) => {
    const phone = req.body.phone;
    const password = req.body.password;
    if (!phone || !password) {
      return res
        .status(422)
        .send({ error: 'You must provide email and password.' });
    }
    UserModel
      .findOne({
        phone: phone
      }).then(
        function (result) {
          if (result == null) {
            return res.status(401).send(result || { error: "User Not Found" })
          } else {
            result.comparedPassword(password, function (err, good) {
              if (err || !good) {
                return res.status(401).send(err || 'User not found')
              }
              const user = {
                name: result.name || "",
                email: result.email || ""
              }
              res.send({
                user: user,
                token: token.generateToken(result)
              })
            })
          }
        }
      )
  }
}
