import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
    id: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);
export default User;