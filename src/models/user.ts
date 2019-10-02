import mongoose from "mongoose";
export type UserDocument = mongoose.Document & {
    name: string;
    password: string;
};

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
}, { timestamps: true });

export const User = mongoose.model<UserDocument>("User", userSchema);
