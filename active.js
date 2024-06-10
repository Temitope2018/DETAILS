const myUsername= document.getElementById("username");
const myPassword = document.getElementById("password");
const myInputopen = document.getElementById("eye");
const myInputClose =document.getElementById("closed");


myInputopen.addEventListener("click",event=>{
  if(myUsername.type==="text") {
    myUsername.type = "password";
    myInputopen.style.color ="red";
  } else{
    myUsername.type = "text";
    myUsername.style.textTransform = "uppercase";
    myInputopen.style.color = "black";
  }
})


myInputClose.addEventListener("click",event=>{
   if(myPassword.type==="password"){
    myPassword.type = "text";
    myInputClose.style.color = "red";
}else{
    myPassword.type = "password";
    myInputClose.style.color = "black";
}
})