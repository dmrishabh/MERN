import mongoose from "mongoose";
// TODO: Read abou mongoose on doc;
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const userModel = mongoose.model('User', userSchema);
export default userModel;