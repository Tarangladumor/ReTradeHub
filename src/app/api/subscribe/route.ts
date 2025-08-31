import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Subscriber } from "@/models/Subscriber";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        let subscriber = await Subscriber.findOne({ email });
        if (!subscriber) {
            subscriber = await Subscriber.create({ email });
        }

        // Setup Nodemailer
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        // Send welcome email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to our Newsletter 🎉",
            html: `<p>Thanks for subscribing! You'll now receive updates from us.</p>`,
        });

        return NextResponse.json({ success: true, subscriber });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
