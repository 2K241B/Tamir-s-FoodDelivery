import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    }
});

export const userModel = model("user", userSchema);