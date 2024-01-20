
document.getElementById("Btn").addEventListener("click", myFunction);

 function fun() {
    const y = document.getElementById('year').value;
    if(y==="") return;
    if( y % 4 === 0 ){
        document.getElementById("out").innerHTML = `${y} is a leap year`;}
        else if ( y % 100 === 0 && y % 400!= 0){
            document.getElementById("out").innerHTML = `${y} is not a leap year`;
        }
      else {
        document.getElementById("out").innerHTML = `${y} is not a leap year`;
    }
 }
 
