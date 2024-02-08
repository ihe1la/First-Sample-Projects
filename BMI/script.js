let inputElemWeight = document.querySelector('#weight')
let inputElemHeight = document.querySelector('#height')
let pElemBmi = document.querySelector('#result')
let pElemCat = document.querySelector('#category')
let spanWeight = document.querySelector('#weight-val')
let spanHeight = document.querySelector('#height-val')



function bmiCalculator(){
    let inputElemHeightValue = inputElemHeight.value
    let inputElemWeightValue = inputElemWeight.value
    spanHeight.innerHTML=inputElemHeightValue+' cg'
    spanWeight.innerHTML=inputElemWeightValue+' kg'
    let heightM = inputElemHeightValue/100
    let bmiCal = inputElemWeightValue/(heightM*heightM)
   
    let bmi2 = pElemBmi.innerHTML=Math.floor(bmiCal.toFixed(2))
    pElemBmi.innerHTML=bmi2

    if(bmi2<18){
        pElemBmi.style.color='red'
        pElemCat.innerHTML='underweight'
        pElemCat.style.color='red'
    }
    else if(24>bmi2&&bmi2<29){
        pElemBmi.style.color='green'
        pElemCat.innerHTML='norm'
        pElemCat.style.color='green'
    }
    else if(bmi2>29){
        pElemBmi.style.color='black'
        pElemCat.innerHTML='overweight'
        pElemCat.style.color='black'
    }


}

inputElemWeight.addEventListener('input',bmiCalculator)
inputElemHeight.addEventListener('input',bmiCalculator)