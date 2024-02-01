async function arrangeMailOptionsHeb(
  signsOfPatient: any,
  emailAddresses: any,
  patient: any,
  age: number,
  result: any
) {
  let mailOptionsHeb = {
    from: "SIPS",
    bcc: emailAddresses,
    subject: `${patient.firstName} ,${patient.lastName} - תוצאות`,
    text: `${JSON.stringify(patient)}`,
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
            <h3>-תוצאות</h3>
            <h3>  שם פרטי: ${patient.firstName}</h3>
            <h3>  שם משפחה: ${patient.lastName}</h3>
            <h3>  מין: ${patient.gender}</h3>
            <h2>  גיל: ${age}</h2>
            <!-- הטבלה -->
            <table>
              <tr>
                <th> שאלה</th>
                <th>תוצאה</th>
               
              </tr>
              <tr>
                <td>:מגדר</td>
                <td> ${signsOfPatient.sex} </td>
              </tr>
              <tr>
                <td>:קושי בשתיית נוזלים</td>
                <td> ${signsOfPatient.difficultySwallowingLiquids} </td>
  
              </tr>
              <tr>
                <td>:קושי באכילת מוצקים</td>
                <td>${signsOfPatient.difficultrySwallowingSolidFood}</td>
              </tr>
              <tr>
              <td>:קושי בבליעת תרופות</td>
              <td>${signsOfPatient.difficultySwallowingPills}</td>
            </tr>
            <tr>
            <td>:שיעול באכילה</td>
            <td>${signsOfPatient.coughingWhileEating}</td>
          </tr>
          <tr>
          <td>:ירידה במשקל</td>
          <td>${signsOfPatient.losingWeight}</td>
        </tr>
        <tr>
        <td>:מחנק בזמן האוכל</td>
        <td>${signsOfPatient.ChokingDuringMeals}</td>
      </tr>
      <tr>
      <td>:המנעות מאכילה בחברה</td>
      <td>${signsOfPatient.AvoidingEatingWithOthers}</td>
    </tr>
    <tr>
    <td> :כאב בבליעה</td>
    <td>${signsOfPatient.PainWhileSwallowing}</td>
  </tr>
  <tr>
  <td> :הנאה מאכילה</td>
  <td>${signsOfPatient.EnjoyingMeals}</td>
  </tr>
  <tr>
  <td> :חרדה מאכילה</td>
  <td>${signsOfPatient.feelingAnxiousAboutSwallowing}</td>
  </tr>
  <tr>
  <td>
  <td>${signsOfPatient?.numberOfSignsOfPain}/10 :סך כל תוצאות</td>
  </td>
  <td> </td>
  
  </tr>
  
    </table>
          </body>
        </html>`,
  };
  return mailOptionsHeb;
}
export default arrangeMailOptionsHeb;
