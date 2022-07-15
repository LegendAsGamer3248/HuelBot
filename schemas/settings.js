import mongoose from "mongoose";

const schema = new mongoose.Schema({
    whitelist: {
        type: String,
        required: true
    }
})

export default mongoose.model('config', schema);

