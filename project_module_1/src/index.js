//Using BMI standard calculation

let finalBMI;

const btnCal = document.getElementById('button1');
btnCal.addEventListener('click', function(){
    let weight = document.getElementById('weightInput').value;
    let height = document.getElementById('heightInput').value;
    
    //Pending - Add an error message if submit empty field
    //Add Number.toFixed() to round down the decimal to 2 places.
     finalBMI = ((weight / (height * height) * 10000).toFixed(2));
        document.getElementById('bmi-output').innerHTML = finalBMI; //Switch between textContent/innerHTML/value if i want to change how it looks either with <input> or <p>
        showResult(finalBMI);

    }
)
//A comment section div id bottom1: 
//To pull in pre-written message based on index result
//Accredited to https://www.myheart.org.sg/healthy-living/bmi-calculator/
//Decided to use If Else.
 function showResult(bMIComment){
    const showWeightType = document.getElementById('weightResult');
        if (bMIComment < 18.5){
            showWeightType.innerHTML = commentUnderweight;
    }else if
        (bMIComment >= 18.5 && bMIComment < 24.9){
            showWeightType.innerHTML = commentHealthy;
    }else if
        (bMIComment >= 24.9 && bMIComment < 29.9){
            showWeightType.innerHTML = commentOverweight;
    }else if
        (bMIComment >= 29.9 && bMIComment < 34.9){
            showWeightType.innerHTML = commentObese;
    }else
        {
            showWeightType.innerHTML = `your health is at risk!`;
    } console.log("There is no error"); //error check console log.
}



//Create a Reset button
//Accredited to https://stackoverflow.com/a/14837535
    function ClearFields() {

        document.getElementById("weightInput").value = "";
        document.getElementById("heightInput").value = "";
        // tried with value but don't work. Have to change to textContent
        document.getElementById("bmi-output").textContent = "";
        document.getElementById("weightResult").textContent = "";
    }


//Cannot include a variable in the text. Is it due to textContent / <p> ?
//Accredited to https://www.myheart.org.sg/healthy-living/bmi-calculator on comments

const commentUnderweight = `Your BMI reading shows that you are <b>Underweight</b>. You are at risk of nutritional deficiency disease and osteoporosis. Seek medical advice if needed and have a balanced meal.`

const commentHealthy = `Great Job! Your BMI reading shows that you are <b>Healthy</b>! Keep up the good work on whatever you are doing and continue to live a healthy lifestyle!`

const commentOverweight = `Your BMI reading shows that you are <b>Overweight</b>. Start paying more attention to your healtlh as you belong to the categories of people having moderate risk heart disease. Aim to reduce your caloric intake and increase physical activities. Being overweight puts you at risk of many heart-related problems like:
<li>High blood pressure</li>
<li>Diabetes</li>
<li>High blood cholesterol</li>`

const commentObese = `Warning! Your BMI reading shows that you are in <b>Obese</b> category. You are at a high risk of heart disease. Aim to reduce your caloric intake and increase physical activities. Attend regular health screenings to keep your conditions in check.`


