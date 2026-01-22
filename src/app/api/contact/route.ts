import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
  console.error("خطأ: متغيرات البريد الإلكتروني غير محددة بشكل صحيح");
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
  },
  pool: {
    maxConnections: 1,
    maxMessages: 5,
    rateDelta: 5000,
    rateLimit: 5,
  },
} as any);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    // Email to owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `رسالة جديدة من ${name} - معين العباسي`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%);
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #1e1e3f;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }
            .header {
              background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px;
              color: #e0e0e0;
            }
            .field {
              background: #2a2a5a;
              border-radius: 12px;
              padding: 15px 20px;
              margin-bottom: 15px;
              border-right: 4px solid #00d4ff;
            }
            .field-label {
              color: #00d4ff;
              font-size: 12px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            .field-value {
              color: white;
              font-size: 16px;
            }
            .message-box {
              background: #2a2a5a;
              border-radius: 12px;
              padding: 20px;
              margin-top: 20px;
              border-right: 4px solid #7c3aed;
            }
            .footer {
              background: #151530;
              padding: 20px;
              text-align: center;
              color: #888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>رسالة جديدة من Portfolio</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">الاسم</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">البريد الإلكتروني</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="message-box">
                <div class="field-label">الرسالة</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              تم الإرسال من موقع معين العباسي Portfolio
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to sender
    const senderMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `شكراً لتواصلك - معين العباسي`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%);
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #1e1e3f;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }
            .header {
              background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              color: white;
              margin: 0 0 10px 0;
              font-size: 28px;
            }
            .header p {
              color: rgba(255,255,255,0.9);
              margin: 0;
              font-size: 16px;
            }
            .content {
              padding: 40px 30px;
              color: #e0e0e0;
              line-height: 1.8;
            }
            .greeting {
              font-size: 20px;
              color: #00d4ff;
              margin-bottom: 20px;
            }
            .highlight-box {
              background: linear-gradient(135deg, #00d4ff20 0%, #7c3aed20 100%);
              border-radius: 12px;
              padding: 20px;
              margin: 25px 0;
              border: 1px solid #00d4ff30;
            }
            .social-links {
              display: flex;
              justify-content: center;
              gap: 15px;
              margin-top: 30px;
            }
            .social-link {
              display: inline-block;
              padding: 12px 24px;
              background: #2a2a5a;
              color: #00d4ff;
              text-decoration: none;
              border-radius: 8px;
              font-size: 14px;
            }
            .footer {
              background: #151530;
              padding: 25px;
              text-align: center;
              color: #888;
              font-size: 12px;
            }
            .signature {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #2a2a5a;
            }
            .signature-name {
              color: #00d4ff;
              font-size: 18px;
              font-weight: bold;
            }
            .signature-title {
              color: #888;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>شكراً لتواصلك!</h1>
              <p>رسالتك وصلت بنجاح</p>
            </div>
            <div class="content">
              <div class="greeting">مرحباً ${name}!</div>
              <p>
                شكراً جزيلاً لتواصلك معي عبر موقعي الشخصي. لقد استلمت رسالتك وسأقوم بالرد عليك في أقرب وقت ممكن.
              </p>
              <div class="highlight-box">
                <strong>ملخص رسالتك:</strong>
                <p style="margin: 10px 0 0 0; color: #ccc;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
              </div>
              <p>
                في هذه الأثناء، يمكنك الاطلاع على مشاريعي ومهاراتي من خلال موقعي، أو التواصل معي عبر منصات التواصل الاجتماعي.
              </p>
              <div class="signature">
                <div class="signature-name">معين العباسي</div>
                <div class="signature-title">AI Solutions Developer & Prompt Engineer</div>
              </div>
            </div>
            <div class="footer">
              <p>تم إرسال هذا البريد تلقائياً من موقع معين العباسي</p>
              <p style="margin-top: 10px;">
                <a href="https://github.com/MoainAlabbasi" style="color: #00d4ff; text-decoration: none;">GitHub</a> • 
                <a href="https://linkedin.com/in/moainalabbasi" style="color: #00d4ff; text-decoration: none;">LinkedIn</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    const emailsSent = { owner: false, sender: false };

    try {
      await transporter.sendMail(ownerMailOptions);
      emailsSent.owner = true;
      console.log("تم إرسال البريد للمالك بنجاح");
    } catch (ownerError) {
      console.error("خطأ في إرسال بريد المالك:", ownerError);
      throw new Error(`فشل إرسال البريد للمالك: ${ownerError instanceof Error ? ownerError.message : 'خطأ غير معروف'}`);
    }

    try {
      await transporter.sendMail(senderMailOptions);
      emailsSent.sender = true;
      console.log("تم إرسال بريد الرد التلقائي بنجاح");
    } catch (senderError) {
      console.error("خطأ في إرسال بريد الرد:", senderError);
      // لا نرمي خطأ هنا لأن البريد الرئيسي تم إرساله بنجاح
    }

    return NextResponse.json(
      { success: true, message: "تم استقبال رسالتك بنجاح! سيتم الرد عليك قريباً." },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطأ غير معروف";
    console.error("خطأ في معالجة الطلب:", errorMessage);
    return NextResponse.json(
      { 
        error: "حدث خطأ أثناء معالجة رسالتك. يرجى المحاولة لاحقاً.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
