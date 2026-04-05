import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            minLength: 1,
            maxLength: 50

        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 100
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: /^\S+@\S+\.\S+$/
        }
        
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema);