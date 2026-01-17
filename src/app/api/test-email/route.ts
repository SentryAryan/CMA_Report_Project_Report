// src/app/api/test-email/route.ts
import { sendEmail } from '@/lib/mail';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await sendEmail({
      to: 'aaryansrivastawa@gmail.com',
      subject: 'Test Email from CMA Platform',
      html: '<h1>Test Email</h1><p>This is a test email to verify Nodemailer is working.</p>'
    });
    
    return NextResponse.json({ 
      success: true, 
      messageId: result.messageId 
    });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}