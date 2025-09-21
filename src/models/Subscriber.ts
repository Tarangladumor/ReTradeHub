import { Schema, model, models } from "mongoose";

// Newsletter Subscribers
const SubscriberSchema = new Schema(
    { email: { type: String, required: true, unique: true } },
    { timestamps: true }
);

export const Subscriber =
    models.Subscriber || model("Subscriber", SubscriberSchema);