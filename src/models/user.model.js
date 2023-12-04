import mongoose, {Schema} from "mongoose";
import Jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImeage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshTokens: {
            type: String
        }
    },{
        timestamps: true
    }
)

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = bcryptjs.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    bcryptjs.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return Jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return Jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)