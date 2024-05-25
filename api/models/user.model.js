import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://media.licdn.com/dms/image/C5612AQF70HvzppDt1w/article-cover_image-shrink_600_2000/0/1520107923702?e=2147483647&v=beta&t=2JHE2pobPcl8RsZh_ULjEfgMSiEKsTGus2mgbViZCVg"
    }
},{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;