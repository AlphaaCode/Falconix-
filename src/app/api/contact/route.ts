/*import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Google Sheets Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // 1️ Fetch existing submissions for this email
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
    });

    const rows = readRes.data.values || [];
    const recentMessages = rows.filter((row) => {
      const rowEmail = row[1];
      const rowDate = new Date(row[3]);
      const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return rowEmail === email && rowDate > oneWeekAgo;
    });

    if (recentMessages.length >= 3) {
      return NextResponse.json(
        { error: "Message limit reached (max 3 per week)" },
        { status: 429 }
      );
    }

    // 2️ Send email with Resend
    await resend.emails.send({
      from: "FalconIX Contact <contact@falcon-ix.com>",
      to: "contact@falcon-ix.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Message from FalconIX Landing Page</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 3️ Save to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(" Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
*/