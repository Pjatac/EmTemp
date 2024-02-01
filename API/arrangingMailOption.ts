import arrangeMailOptionsEng from "./mailOptionsEng";
import updatingResults from "./updatingResult";
import arrangeMailOptionsHeb from './mailOptionsHeb';
async function arrangingMailOptions(
  emailAddresses: any,
  patient: any,
  result: any,
  language: string,
  age: number
): Promise<any> {

  let signsOfPatient: any;
  if (language === "hebrew") {
    signsOfPatient = { ...(await updatingResults(result, result.language)) };
    return await arrangeMailOptionsHeb(
      signsOfPatient,
      emailAddresses,
      patient,
      age,
      result
    );
  } else if (result.language === "english") {
    signsOfPatient = { ...(await updatingResults(result, result.language))};
    return await arrangeMailOptionsEng(
      signsOfPatient,
      emailAddresses,
      patient,
      age,
      result
    );
  }
}
export default arrangingMailOptions;
