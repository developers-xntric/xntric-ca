/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      number,
      webLink,
      primaryObjective,
      competitors,
      usp,
      averageValueCustomerLifetime,
      mainGoals,
      marketingCampaigns,
      socialLinks,
    } = await req.json();

    const marketingCampaignsList = (marketingCampaigns || [])
      .map((campaign: any) => {
        return `<li>${campaign}</li>`;
      })
      .join("");
    const socialLinksList = (socialLinks || [])
      .map((link: any) => {
        return `<li>${link}</li>`;
      })
      .join("");
    const transport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: process.env.SMTPEMAIL,
        pass: process.env.SMTPPASSWORD,
      },
    });

    // Note: The 'to' field should likely be the company's email (e.g., process.env.RECIPIENT_EMAIL)
    // instead of the user's email for a contact form inquiry, but it's kept as 'email' per the original code.
    await transport.sendMail({
      from: process.env.SMTPEMAIL,
      to: email, // Consider changing to company's email address
      subject: `CONTACT: Query from ${name}`,
      text: "hello",
      html: `
        <div style="background-color: #f3f4f6; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #15803d; margin: 0; font-size: 3e8f3b2c24px; font-weight: bold; text-align: center;">Xntric</h1>
            </div>
            <h2 style="color: #15803d; text-align: center; margin-bottom: 20px;">New Inquiry Received</h2>
            <div style="border-top: 2px solid #15803d; margin-bottom: 20px;"></div>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #15803d;">Personal Info</h3>
              <p><strong>Name:</strong> ${name}</p>
lectric              <p><strong>Phone Number:</strong> ${number}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #15803d; text-decoration: none;">${email}</a></p>
              <p><strong>Website Link:</strong> <a href="${webLink}" style="color: #15803d; text-decoration: none;">${webLink}</a></p>
              <p><strong>Website Link:</strong> <a href="${socialLinksList}" style="color: #15803d; text-decoration: none;">${socialLinksList}</a></p>
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #15803d;">Website Details</h3>
              <p><strong>Primary Objective:</strong> ${primaryObjective}</p>
              <p><strong>Top 3 Competitors:</strong> ${competitors}</p>
              <p><strong>Unique Selling Proposition (USP):</strong> ${usp}</p>
              <p><strong>Average Value and Customer Lifetime:</strong> ${averageValueCustomerLifetime}</p>
              <p><strong>Main Goals for Users:</strong> ${mainGoals}</p>
              <p><strong>Marketing Campaigns:</strong></p>
              <ul>
                ${marketingCampaignsList}
              </ul>
            </div>
            <div style="margin-top: 20px; text-align: center;">
              <a href="mailto:${email}" style="background-color: #15803d; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Reply Now</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
