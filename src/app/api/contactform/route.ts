import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, interests,message,phone } = await req.json();

    const transport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: process.env.SMTPEMAIL,
        pass: process.env.SMTPPASSWORD,
      },
    });

    await transport.sendMail({
      from: process.env.SMTPEMAIL,
      to: email,
      subject: `CONTACT: Query from ${name}`,
      text: "hello",
      html: `
       <div style="background-color: #f3f4f6; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="color: #15803d; margin: 0; font-size: 24px; font-weight: bold; text-align: center;">Xntric</h1>
    </div>
    <h2 style="color: #15803d; text-align: center; margin-bottom: 20px;">New Inquiry Received</h2>
    <div style="border-top: 2px solid #15803d; margin-bottom: 20px;"></div>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Interested in:</strong> ${interests}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #15803d; text-decoration: none;">${email}</a></p>
    <div style="margin-top: 20px; text-align: center;">
      <a href="mailto:${email}" style="background-color: #15803d; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Reply Now</a>
    </div>
  </div>
</div>

      `,
      
    });


    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
