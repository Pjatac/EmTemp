import { Request, Response } from "express";
import sendingMail from "./sendingMail";
const nodemailer = require("nodemailer");
async function transportAndSendMail(
  mailOptions: any,
  req?: Request,
  res?: Response
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MANGER_EMAIL,
    secure: false,
    port: 587,
    auth: {
      user: process.env.MANGER_EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  await sendingMail(transporter, mailOptions);
}
export default transportAndSendMail;
