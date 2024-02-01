async function updatingResults(result: any, language: string): Promise<any> {
  const Letters: string[] = ["Yes", "No", "כן", "לא"];
  if (language === "hebrew") {
    result = await changing(result, Letters.slice(2,4));
    return result;
  }
  if (language === "english") {
    result = await changing(result, Letters.slice(0,2));
    return result;
  }
}
async function changing(result: any, Letters: string[]): Promise<any> {
  let numberOfSigns: number=0;
  if(result.numberOfSignsOfPain!==undefined){
    numberOfSigns = result.numberOfSignsOfPain;
  }
  const sex:string =result.sex;
  for (let sign in result) {
    if (result[sign]) {
      result[sign] = Letters[0];
    } else {
      result[sign] = Letters[1];
    }
  }
  result.numberOfSignsOfPain = numberOfSigns;
  result.sex=sex;
  return result;
}
export default updatingResults;
