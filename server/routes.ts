import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from 'nodemailer';

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Appointment booking endpoint
  app.post('/api/appointments', async (req, res) => {
    try {
      const { name, email, phone, service, preferredDate, preferredTime, message } = req.body;

      // Validate required fields
      if (!name || !email || !service) {
        return res.status(400).json({ error: 'Name, email, and service are required' });
      }

      // Create email content
      const emailContent = `
New Appointment Request - ASTRAL Corp

Client Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Service Request:
- Service: ${service}
- Preferred Date: ${preferredDate || 'Not specified'}
- Preferred Time: ${preferredTime || 'Not specified'}

Message:
${message || 'No additional message provided'}

---
This appointment request was submitted through the ASTRAL Corp website.
      `;

      // Configure nodemailer (using Gmail SMTP)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'info.astralcorp@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD // Will need app-specific password
        }
      });

      // Send email
      await transporter.sendMail({
        from: 'info.astralcorp@gmail.com',
        to: 'info.astralcorp@gmail.com',
        subject: `New Appointment Request from ${name}`,
        text: emailContent,
        replyTo: email
      });

      res.json({ success: true, message: 'Appointment request sent successfully' });
    } catch (error) {
      console.error('Error sending appointment email:', error);
      res.status(500).json({ error: 'Failed to send appointment request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
