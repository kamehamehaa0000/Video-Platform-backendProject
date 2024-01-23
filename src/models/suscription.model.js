import mongoose, { Schema } from "mongoose";

const suscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is suscribing is also a user
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //one to whom suscriber is suscribing
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Subscription = mongoose.model("Subscription", suscriptionSchema);
