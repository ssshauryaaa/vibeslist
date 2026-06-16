import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Contact form submission received:', { name, email, message });

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Fallback mode when API Key is not set in environment
      console.log('RESEND_API_KEY not found. Running in SIMULATION MODE.');
      return NextResponse.json({
        message: 'Message received! (Dev Mode — add RESEND_API_KEY to .env to send real emails)',
        simulated: true
      }, { status: 200 });
    }

    // Call Resend REST API using native fetch
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'shauryaa104@gmail.com',
        reply_to: email,
        subject: `New message from ${name} via Vibes.List`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0f0f0f; color: #e5e5e5; border-radius: 12px;">
            <div style="border-bottom: 1px solid #2a2a2a; padding-bottom: 20px; margin-bottom: 24px;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">📬 New Contact Message</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #888;">via <strong style="color: #a78bfa;">Vibes.List</strong> contact form</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 12px; background: #1a1a1a; border-radius: 6px 6px 0 0; border-bottom: 1px solid #2a2a2a;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #666;">From</span>
                  <p style="margin: 4px 0 0; font-size: 15px; color: #fff; font-weight: 600;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; background: #1a1a1a; border-radius: 0 0 6px 6px;">
                  <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #666;">Email</span>
                  <p style="margin: 4px 0 0; font-size: 15px;"><a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a></p>
                </td>
              </tr>
            </table>
            <div style="background: #1a1a1a; border-radius: 8px; padding: 16px;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #666;">Message</span>
              <p style="margin: 10px 0 0; font-size: 15px; color: #d4d4d4; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 28px; font-size: 11px; color: #555; text-align: center;">
              Hit <strong>Reply</strong> to respond directly to ${name}
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Resend API response error:', errorData);
      return NextResponse.json(
        { error: errorData.message || 'Failed to deliver email. Please try again later.' },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact email request:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred while sending your message.' },
      { status: 500 }
    );
  }
}
