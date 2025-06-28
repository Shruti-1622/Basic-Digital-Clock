const calcBttn = document.querySelector('#calcBttn'); //fetch bttn to calc when clicked

calcBttn.addEventListener('click', (event)=>{ //wat even will be done wen button is clicked
    

    const height = (document.querySelector('#height').value)/100; //fetch height input
    const weight = document.querySelector('#weight').value; //fetch weight i/p

    const result = document.querySelector('#result'); //fetch div where result is to be added
    result.innerHTML=""; //clear prev results so that res div doesnt get spammed.

    if(!height || !weight ){ 
        
        result.innerHTML = `please enter both height and weight`;
        result.style.display= 'block';
        return;
    }

     if(height <=0 || weight <=0 ){
        
        result.innerHTML = `please enter valid height and weight`;
        result.style.display = "block";
        return;
    }

    const BMI = weight/ (height * height); //calc index
    let category = ""; 

    if(BMI < 18.5) category ="UnderWeight";
    else if( BMI >= 18.5 && BMI <= 24.9) category = "Normal Weight";
    else if(BMI >= 25 && BMI <= 29.9) category = "OverWeight";
    else category = "Obese";

    const resultPara = document.createElement("p"); //inside reult div create a new paragraph for BMI result

    
    result.classList.add('visible');

    resultPara.innerHTML= `Your BMI is ${BMI.toFixed(2)}`;  //add result text in paraa
    result.appendChild(resultPara); //add that para to result div

    const categoryPara = document.createElement('p'); //cerate a new para to show category
    categoryPara.innerHTML = category; //add text to category para
    result.appendChild(categoryPara); //add that category para to result div
    result.classList.add('visible');

})

