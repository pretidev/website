import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import validator from "validator"

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    body: { fullname, email, message, mail },
    method,
  } = req

  if (method === "POST") {
    // The "mail" field is an honeypot
    if (mail) {
      // Trigger fake 500 error
      return res.status(500).json({ message: "Internal server error" })
    }

    if (!fullname.trim()) {
      return res.status(400).json({ message: "Please specify a fullname" })
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please specify a valid email" })
    }

    if (!message.trim()) {
      return res.status(400).json({ message: "Please specify a message" })
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
      })

      await transporter.sendMail({
        from: '"Pretidev" <contact@pretidev.com>',
        to: "kevin@pretidev.com",
        subject: "Contact from Pretidev",
        html: `<b>Nom du contact</b> : ${fullname}<br/>
               <b>e-mail</b> : ${email}<br/>
               <b>Message</b> : <br/><br/>${message}`,
      })

      return res.status(200).json({ message: "message successfully sent" })
    } catch (error) {
      console.log("error", error)

      return res.status(500).json({ message: "Internal server error" })
    }
  }

  return res.status(405).json({ message: "Method not allowed" })
}
