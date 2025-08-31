import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Subscriber } from "@/models/Subscriber";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { subject, message } = await req.json();

        const subscribers = await Subscriber.find();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        for (const sub of subscribers) {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: sub.email,
                subject,
                html: `<p>${message}</p>`,
            });
        }

        return NextResponse.json({ success: true, count: subscribers.length });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
