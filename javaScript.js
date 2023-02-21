


function btnFunc(){
  let str = document.getElementById("first").value;
  if(str==="")
    alert("please give input");
  else
  alert(str);
}

function btnFunc2(){

 let rd1 = document.getElementById("fBtn1");
 let rd2 = document.getElementById("fBtn2");

 if(rd1.checked===true){
   alert(rd1.value);
 }
 else
   alert(rd2.value);

}

