import { Request, Response } from "express";
import calculateAge from "./CalculateAge";
import isEmailValid from "./isEmailValid";
import arrangingMailOptions from "./arrangingMailOption";
import transportAndSendMail from "./transport";
export async function sendMail(req: Request, res: Response) {
  try {
    const { result, patient } = req.body;
    const mangerEmail: any = process.env.SIPS_STUDY_EMAIL;
    if (!patient.isAgreeHimself && !patient.isAgreeSips) {
      return res.status(403).send({
        message: "Email or password missing.",
      });
    }
    let age = calculateAge(patient.birthDate);
    if (age >= 120 || age < 0) {
      return res.status(403).send({ status: false, error: "Incorrect age" });
    }
    const emailAddresses = [String];
    if (patient.isAgreeHimself && patient.email !== undefined) {
      if (await isEmailValid(patient.email)){
        emailAddresses.push(patient.email);
      } else if (!patient.isAgreeSips) {
        return res.status(403).json({ error: "Email is not valid" });
      }
    }
    if (patient.isAgreeSips) emailAddresses.push(mangerEmail);
    let mailOptions: any;
    if (result.language === "hebrew") {
      mailOptions = await arrangingMailOptions(
        emailAddresses,
        patient,
        result,
        result.language,
        age
      );
      return await transportAndSendMail(mailOptions);
    } else if (result.language === "english") {
      mailOptions = await arrangingMailOptions(
        emailAddresses,
        patient,
        result,
        result.language,
        age
      );
      return await transportAndSendMail(mailOptions);
    }

  } catch (error: any) {
    return res.send({ status: "error message" });
  }
}
