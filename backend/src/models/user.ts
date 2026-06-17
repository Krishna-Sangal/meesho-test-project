import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        mobile:{
            type:String,
            required: true,
            unique: true,
            trim:true,
            match: /^[6-9]\d{9}$/,
        },
        otp:{
            type: String,
             default: "",
        },

    },
    {
        timestamps:true
    }
);


const User= mongoose.model("User",userSchema);
export default User;
