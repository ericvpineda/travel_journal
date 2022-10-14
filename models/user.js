const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');
const Travel = require('./travel');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    numReviews : {
        type : Number,
        default : 0
    },
    numTravels : {
        type : Number,
        default : 0
    }
})

userSchema.post("findOneAndDelete", async (user) => {
    if (user.numReviews) {
        await Review.deleteMany({author : user._id});
    }
    if (user.numTravels) {
        await Travel.deleteMany({author : user._id});
    }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
module.exports = User; 