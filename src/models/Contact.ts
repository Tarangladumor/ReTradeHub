import { Schema, model, models } from "mongoose";

// Newsletter Subscribers
const SubscriberSchema = new Schema(
    { email: { type: String, required: true, unique: true } },
    { timestamps: true }
);

export const Subscriber =
    models.Subscriber || model("Subscriber", SubscriberSchema);

// Contact Messages
const ContactSchema = new Schema(
    {
        name: String,
        email: String,
        phone: String,
        message: String,
    },
    { timestamps: true }
);

export const Contact = models.Contact || model("Contact", ContactSchema);
