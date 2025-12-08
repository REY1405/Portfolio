import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  // Load SMTP config from env
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    TO_EMAIL
  } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    return res.status(500).json({ error: 'SMTP not configured. See .env.example' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? parseInt(SMTP_PORT) : 587,
      secure: SMTP_PORT==465, // true for 465, false for others
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    })

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: TO_EMAIL,
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g,'<br/>')}</p>`
    })

    return res.status(200).json({ ok: true, info })
  } catch (err) {
    console.error('mail error', err)
    return res.status(500).json({ error: 'Send failed', detail: err.message })
  }
}
