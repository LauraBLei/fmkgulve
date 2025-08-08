import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: "FMK Gulve <onboarding@resend.dev>",
      to: ["laurablei1998@gmail.com"],
      subject: "Ny henvendelse fra formularen",
      html: `<h2>Ny hendvendelse fra formularen</h2>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Besked:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
