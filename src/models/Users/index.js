import mongoose from 'mongoose';

const Schema     = mongoose.Schema;
const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String, 
        match: /[a-z]/,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number
    },
    chatroom: {
        type: Object
    }
});

const Users = module.exports = mongoose.model('Users', userSchema);

//user getter
module.exports.getUsers = (callback, limit) => {
    Users.find(callback);
};