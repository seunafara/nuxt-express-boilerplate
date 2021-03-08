const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a user schema
const UserSchema = new Schema({
   full_name: {
      type: String,
      required: true,
   },
   email_address: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   created_at: {
      type: Date,
      default: Date.now,
   },
});

module.exports = User = mongoose.model('users', UserSchema);
