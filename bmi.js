let height, weight,measure, error, bmi;
function calculate()
{

    height=document.getElementById("height").value;
    weight=document.getElementById("weight").value;
    error= "Given Values Are Wrong";
    height/=100;
    height*=height;
    bmi=weight/height;
    bmi=bmi.toFixed(1);

    if (bmi <= 18.4) 
    {
        measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + " which means " + "You are Normal";
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
    } 
    else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + " which means " + "You are Obese";
    }

    if(weight<=0 || height<=0)
    {
        document.getElementById("results").innerHTML=error;
    }
    else if(height>220)
    {
        document.getElementById("results").innerHTML=error;
    }
    else if(weight<10)
    {
        document.getElementById("results").innerHTML=error;
    }
    else
    {
        document.getElementById("results").innerHTML=measure;
    }
}
