import UserModel from '../models/User.js';
import token from '../util/token.js';

export default {
  loginRequired: (req, res, next) => {
    if (!req.header('Authorization')) return res.status(401).send({message: 'Please make sure your request has an Authorization header.'});
    
    // Validate jwt
    let try_token = req.header('Authorization').split(' ')[0];
    token.verifyToken(try_token, (err, payload) => {
      if (err) return res.status(401).send(err);
      UserModel.findById(payload.sub)
        .exec((err, user) => {
          if (err || !user) {
              return res.status(404).send(err || {
                  error: 'middleware User not found!!!'
              });
          }
          delete user.password;
          req.user = user;
          next();
        })
    })
  }
}