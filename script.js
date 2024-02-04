function handlekeypress(key)
{

  const inputScreen=document.getElementById("shanzey");
  if(key=='=')
  {
  inputScreen.value =eval(inputScreen.value);
 
 }
 else if(key=="clear")
 {
  inputScreen.value=" ";
 }

 else { 

  inputScreen.value += key;
  }

}