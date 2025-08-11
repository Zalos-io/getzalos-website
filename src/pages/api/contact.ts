import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message }: ContactFormData = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Send email to will@zalos.io
    const data = await resend.emails.send({
      from: 'Zalos Contact Form <noreply@zalos.io>',
      to: ['will@zalos.io'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-weight: 600;">Action Required</p>
            <p style="margin: 10px 0 0 0;">Please respond to this inquiry within 24 hours to schedule their free consultation call.</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 14px;">
            <p>This email was sent from the Zalos website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

Please respond within 24 hours to schedule their free consultation call.
      `,
    });

    console.log('Email sent successfully:', data);
    
    return res.status(200).json({ 
      message: 'Email sent successfully',
      id: data.id 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({ 
      message: 'Failed to send email',
      error: process.env.NODE_ENV === 'development' ? error : 'Internal server error'
    });
  }
}