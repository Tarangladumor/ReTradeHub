import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Contact } from "@/models/Contact";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { name, email, phone, message } = await req.json();

        // Save to DB
        const contact = await Contact.create({ name, email, phone, message });

        // Setup Nodemailer
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        // Send email to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Phone:</b> ${phone}</p>
             <p><b>Message:</b> ${message}</p>`,
        });

        // Send confirmation to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thanks for contacting us!",
            html: `<p>Hi ${name},</p><p>We received your message and will get back soon.</p>`,
        });

        return NextResponse.json({ success: true, contact });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
