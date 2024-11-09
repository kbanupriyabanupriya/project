function conversion(){
  let from = document.getElementById("from").value ;
  let to = document.getElementById("to").value;
  let value = parseFloat(document.getElementById("value").value);
  let result ;
  let dum1= "conversion failed";
  let dum2 ="converted";
  if(from===to){
    document.querySelector('.result').innerHTML= value;
  }//cel-fah
  else if ( (from === "celsius" )&&(to ==="fahrenheit" )){
    result = value*(9/5)+32;
    document.querySelector('.result').innerHTML=result;
  }//cel-kel
  else if ( (from === "celsius" )&&(to ==="kelvin" )){
    result = (value )+ 273.15;
    document.querySelector('.result').innerHTML=result;
  }//fah-cel
  else if ( (from === "fahrenheit" )&&(to ==="celsius" )){
    result = (value -32)*(5/9);
    document.querySelector('.result').innerHTML=result;
  }//fah-kel
  else if ( (from === "fahrenheit" )&&(to ==="kelvin" )){
    result = (value -32)*(5/9)+273.15;
    document.querySelector('.result').innerHTML=result;
  }//kel-cel
  else if ( (from === "kelvin" )&&(to ==="celsius" )){
    result = value -273.15;
    document.querySelector('.result').innerHTML=result;
  }//kel-fah
  else if ( (from === "kelvin" )&&(to ==="fahrenheit" )){
    result = (value -273.15)*(9/5)+32;
    document.querySelector('.result').innerHTML=result;
  }
  value = "  ";
 
 }