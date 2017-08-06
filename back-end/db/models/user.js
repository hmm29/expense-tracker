const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt-nodejs');

//================================
// User Schema
//================================

const UserSchema = new Schema({
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['regular', 'admin'],
      default: 'Member'
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
  },
  {
    timestamps: true
  });

// pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', next => {
  const user = this,
    SALT_FACTOR = 5;
  
  if (!user.isModified('password')) return next();
  
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);
    
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// compare password for login against hashed password
UserSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }
    
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);