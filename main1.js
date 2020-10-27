const klcy = () =>{
  let english = document.getElementById('english').value;
  let hindi = document.getElementById('hindi').value;
  let physics = document.getElementById('physics').value;
  let chemistry = document.getElementById('chemistry').value;
  let meths = document.getElementById('meths').value;
  let grades = "";

  let totalGrades = parseFloat(english) + parseFloat(hindi) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(meths);
  // alert(totalGrades);

  let perc = (totalGrades/500) * 100;
  // alert(perc);

  if(perc <= 100  && perc >= 80){
    grades = 'A';
  }else if(perc <= 79  && perc >= 60){
     grades = 'B';
  }else if(perc <= 59  && perc >= 40){
     grades = 'C';
  }else{
     grades = 'F';
  }

  if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
  }
  else{
    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
  }
}
