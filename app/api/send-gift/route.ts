// import { type NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import path from "path";
// import fs from "fs";

// // Create reusable transporter
// const createTransporter = () => {
//     return nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: Number(process.env.SMTP_PORT) || 587,
//         secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASSWORD,
//         },
//     });
// };

// export async function POST(request: NextRequest) {
//     try {
//         const { fullName, email } = await request.json();

//         if (!fullName || !email) {
//             return NextResponse.json(
//                 { error: "Name and email are required" },
//                 { status: 400 }
//             );
//         }

//         // Validate environment variables
//         if (
//             !process.env.SMTP_HOST ||
//             !process.env.SMTP_USER ||
//             !process.env.SMTP_PASSWORD
//         ) {
//             console.error("Missing SMTP configuration");
//             return NextResponse.json(
//                 { error: "Server configuration error" },
//                 { status: 500 }
//             );
//         }

//         // Path to your PDF file
//         const pdfPath = path.join(
//             process.cwd(),
//             "public",
//             "knowledge-gift.pdf"
//         );

//         // Check if file exists and log detailed information
//         if (!fs.existsSync(pdfPath)) {
//             console.error("PDF file not found at path:", pdfPath);
//             console.error("Current working directory:", process.cwd());
//             console.error(
//                 "Directory contents:",
//                 fs.readdirSync(process.cwd() + "/public")
//             );

//             return NextResponse.json(
//                 { error: "PDF file not found", path: pdfPath },
//                 { status: 500 }
//             );
//         }

//         console.log("PDF file found at:", pdfPath);

//         // Create transporter
//         const transporter = createTransporter();

//         // Email template
//         const emailHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 5px;">
//         <div style="text-align: center; margin-bottom: 20px;">
//           <h1 style="color: #01748D; margin-bottom: 10px;">Your Knowledge Gift is Here!</h1>
//           <div style="width: 100px; height: 4px; background-color: #01748D; margin: 0 auto;"></div>
//         </div>

//         <p style="font-size: 16px; line-height: 1.5; color: #333;">Hello ${fullName},</p>

//         <p style="font-size: 16px; line-height: 1.5; color: #333;">Thank you for requesting our Knowledge Gift. We're excited to share this valuable resource with you.</p>

//         <p style="font-size: 16px; line-height: 1.5; color: #333;">Please find attached our comprehensive Knowledge Gift PDF that provides valuable insights to support your public health and development career.</p>

//         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//           <p style="font-size: 14px; color: #666; margin: 0;">
//             <strong>Note:</strong> This is a one-time email with your requested resource. We value your privacy and will not send you unsolicited emails.
//           </p>
//         </div>

//         <p style="font-size: 16px; line-height: 1.5; color: #333;">If you have any questions or need further information, please don't hesitate to contact us.</p>

//         <p style="font-size: 16px; line-height: 1.5; color: #333;">
//           Best regards,<br>
//           The Health Systems Matter Team
//         </p>

//         <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e1e1e1; text-align: center; font-size: 12px; color: #999;">
//           &copy; ${new Date().getFullYear()} Health Systems Matter. All rights reserved.
//         </div>
//       </div>
//     `;

//         // Send email
//         const info = await transporter.sendMail({
//             from: `"Health Systems Matter" <${process.env.SMTP_USER}>`,
//             to: email,
//             subject: "Your Knowledge Gift Box",
//             html: emailHtml,
//             attachments: [
//                 {
//                     filename: "Knowledge-Gift.pdf",
//                     path: pdfPath,
//                     contentType: "application/pdf",
//                 },
//             ],
//         });

//         console.log("Message sent: %s", info.messageId);

//         return NextResponse.json({
//             success: true,
//             messageId: info.messageId,
//         });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         return NextResponse.json(
//             {
//                 error: "Failed to send email",
//                 details:
//                     error instanceof Error ? error.message : "Unknown error",
//             },
//             { status: 500 }
//         );
//     }
// }
