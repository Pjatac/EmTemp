import { Request, Response } from "express";
async function sendingMail(
  transporter: any,
  mailOptions: any,
  req?: Request,
  res?: Response
) {
  let errorResponse: any = undefined;
  let EmailSentResponse: any = undefined;
  transporter?.sendMail(
    mailOptions as {
      from: string;
      bcc: StringConstructor[];
      subject: string;
      text: string;
      html: string;
    },
    function (error: any, info: { response: string }) {
      if (error) {
        errorResponse = error;
        return;
      }
      EmailSentResponse = { "Email sent": info.response };
    }
  );
  if (errorResponse) {
    return res?.send(errorResponse);
  } else if (EmailSentResponse) {
    console.log("Email sent!!!!...");
    return res?.send({ status: true });
  }
}
export default sendingMail;
