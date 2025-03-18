import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
    try {
        // Validate environment variables
        if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASSWORD
        ) {
            return NextResponse.json(
                { error: "Missing SMTP configuration" },
                { status: 500 }
            );
        }

        // Create test SMTP service account
        const testAccount = await nodemailer.createTestAccount();

        // Log test account info
        console.log("Test account created:", testAccount);

        // Create reusable transporter using your SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            logger: true, // Log to console
        });

        // Verify connection configuration
        const verification = await transporter.verify();
        console.log("SMTP Verification:", verification);

        // Send test email
        const info = await transporter.sendMail({
            from: `"Test Sender" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Send to yourself for testing
            subject: "Test Email from Health Systems Matter",
            text: "This is a test email to verify SMTP configuration.",
            html: "<b>This is a test email to verify SMTP configuration.</b>",
        });

        console.log("Test message sent: %s", info.messageId);

        // Preview URL (only works with Ethereal Email)
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
            previewUrl: nodemailer.getTestMessageUrl(info),
        });
    } catch (error) {
        console.error("Error testing email:", error);
        return NextResponse.json(
            {
                error: "Failed to test email",
                details:
                    error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        );
    }
}
