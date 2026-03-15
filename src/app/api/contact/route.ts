import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import { Resend } from 'resend';

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  moveInTimeline: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.email || !data.firstName || !data.lastName || !data.phoneNumber || !data.moveInTimeline) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get Twilio credentials from environment
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
    const managerPhone = process.env.MANAGER_PHONE_NUMBER;

    // Get Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;

    // Send SMS if Twilio is configured
    if (accountSid && authToken && twilioPhone && managerPhone) {
      const client = twilio(accountSid, authToken);
      const smsMessage = `New Contact Form Submission:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phoneNumber}
Move-in: ${data.moveInTimeline}`;

      await client.messages.create({
        body: smsMessage,
        from: twilioPhone,
        to: managerPhone,
      });
    }

    // Send email notifications if Resend is configured
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailHtml = `
        <h2>New Contact Form Submission from Bella Apartments</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${data.phoneNumber}">${data.phoneNumber}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Move-in Timeline</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${data.moveInTimeline}</td>
          </tr>
        </table>
      `;

      await resend.emails.send({
        from: 'Bella Apartments <onboarding@resend.dev>',
        to: [
          'dennisjmccarthy@gmail.com',
          'bellabonitasprings@gmail.com',
        ],
        subject: `New Showing Request: ${data.firstName} ${data.lastName}`,
        html: emailHtml,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
