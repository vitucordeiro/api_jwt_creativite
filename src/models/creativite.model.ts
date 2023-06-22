import mongoose from "mongoose";

const Creativite = mongoose.model(
    "Creativite",
    new mongoose.Schema({
        content:{
            type:String,
            required:true
        },
        createdAt:{
            type: Date,
            default:Date.now
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    })
)
export default Creativite