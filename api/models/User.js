const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
    },

    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    Address: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    gender: {
        type: String,
        default: "Male",
    },
    
    img: {
        type:String,
        default:"https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"

    }
},
  {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);