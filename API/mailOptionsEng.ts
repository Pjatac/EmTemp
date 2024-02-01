async function arrangeMailOptionsEng(
  signsOfPatient: any,
  emailAddresses: any,
  patient: any,
  age:number,
  result: any
) {
  let mailOptionsEng = {
    from: "SIPS",
    bcc: emailAddresses,
    subject: `Result OF SIPS STUDY`,
    text: `First Name:${patient?.firstName}\nLast Name:${patient?.lastName}\nGender:${result?.sex}\nAge:${age}`,
    html: `<html  lang="he" >
        <head>
        <style>
        *{
          direction: rtl;
    
          justify-content: center;
          align-items: center;
        }
          /* עיצוב הטבלה */
           table {
             font-family: Arial, sans-serif;
             border-collapse: collapse;
             width: 100%;
             direction: rtl;
             justify-content: center;
             align-items: center;
              margin: auto;
           }
           th, td {
             border: 1px solid #dddddd;
             text-align: right;
             padding: 8px;
             direction: ltr;
             justify-content: center;
             align-items: center;
           }
        </style>
      </head>
      <body >
      <h4>First Name:${patient.firstName}</h4>
      <h4>Last Name:${patient.lastName}</h4>
      <h4>Sex:${result.sex}</h4>
      <h2>Age:${age}</h2>
      <!-- הטבלה -->
      <table>
        <tr>
          <th>Question</th>
          <th>Result</th>
        </tr>
        <tr>
          <td>Difficulty Swallowing Liquids </td>
          <td> ${signsOfPatient?.difficultySwallowingLiquids} </td>
        </tr>
        <tr>
          <td>Difficulty Swallowing Solid Food</td>
          <td>${signsOfPatient?.difficultrySwallowingSolidFood}</td>
        </tr>
        <tr>
        <td>Difficulty Swallowing Pills</td>
        <td>${signsOfPatient?.difficultySwallowingPills}</td>
      </tr>
      <tr>
      <td>Coughing While Eating</td>
      <td>${signsOfPatient?.coughingWhileEating}</td>
    </tr>
    <tr>
    <td>Losing Weight</td>
    <td>${signsOfPatient?.losingWeight}</td>
  </tr>
  <tr>
  <td>Choking During Meals</td>
  <td>${signsOfPatient?.ChokingDuringMeals}</td>
  </tr>
  <tr>
  <td>Avoiding Eating WithOthers</td>
  <td>${signsOfPatient?.AvoidingEatingWithOthers}</td>
  </tr>
  <tr>
  <td>Pain While Swallowing</td>
  <td>${signsOfPatient?.PainWhileSwallowing}</td>
  </tr>
  <tr>
  <td>Enjoying Meals</td>
  <td>${signsOfPatient?.EnjoyingMeals}</td>
  </tr>
  <tr>
  <td>Feeling Anxious About Swallowing</td>
  <td>${signsOfPatient?.feelingAnxiousAboutSwallowing}</td>
  </tr>
  <tr>
  <td>
  <td>Total Results: ${signsOfPatient?.numberOfSignsOfPain} /10</td>
  </td>
  <td> </td>
  </tr>
  </table>
    </body>
            </html>`,
  };
  return mailOptionsEng;
}
export default arrangeMailOptionsEng;
