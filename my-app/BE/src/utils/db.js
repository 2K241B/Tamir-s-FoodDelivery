import mongoose from "mongoose";

export const Connect = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Succesfully connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}