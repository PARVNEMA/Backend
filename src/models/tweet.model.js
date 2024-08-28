import mongoose, { Schema } from "mongoose";

const TweetSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", TweetSchema);
