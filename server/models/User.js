const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

// Define the model
const Schema = new mongoose.Schema({
    name: String,
    phone: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
    
})

Schema.pre('save', function(next){
    // get access to user model, then we can use user.email, user.password
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err) }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) { return next(err); }

            user.password = hash;
            next()
        })
    })
})

// Make use of methods for comparedPassword
Schema.methods.comparedPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, good){
        if (err ) { return cb(err)}
        cb(null, good);
    })
}

// Export the model
module.exports = mongoose.model('User', Schema);