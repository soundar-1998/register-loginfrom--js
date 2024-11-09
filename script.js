var regBox=document.getElementById("register");
var loginBox=document.getElementById("login");
var forgetBox=document.getElementById("forget");
 var loginTab=document.getElementById('lt');
 var regTab=document.getElementById('rt');   
var emailArray=[];
var passwordArray=[];


function loginTabFun(){
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
    regTab.style.backgroundColor="yellow";
   
}
function regTabFun()
{
event.preventDefault();
regBox.style.visibility="visible";
loginBox.style.visibility="hidden";
forgetBox.style.visibility="hidden";
loginTab.style.backgroundColor="blue";

}

function forTabFun(){
    event.preventDefault();
    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";
    loginTab.style.backgroundColor="blue";
    
} 

function register(){
event.preventDefault();
var email=document.getElementById("re").value;
var password =document.getElementById("rp").value;
var passwordRetype=document.getElementById("rrp").value;
if( ! email)
{
    alert("Email required.");
    return;
}else if(  password==""){
    alert("Password  required.");
    return;
}else if(! passwordRetype){
alert(" confirm Password required.");
return;
}
else if(password !== passwordRetype){
    alert(" confirm password does not match with password");
    return;
}else if(emailArray.indexOf(email)== -1){
    emailArray.push(email);
passwordArray.push(password);

alert(email+" Thank for  registration.\n try to login  Now");
console.log(emailArray);
console.log(passwordArray);

document.getElementById("re").value="";
document.getElementById("rp").value="";
document.getElementById("rrp").value="";
console.log(passwordArray);

}

} function forget(){

event.preventDefault();
var email=document.getElementById("fe").value;
if(emailArray .indexOf(email) == -1){
    if(! email  ){
        alert("Email required");
        return;
    }alert("Email does not exist.");
    return ;
}
alert("email is send to your  check   it in 24 hours.\nThank you ")
document.getElementById("fe").value="";
}
function login(){
    event.preventDefault();
    var email= document.getElementById("se").value;
    var password=document.getElementById("sp").value;
var i=emailArray.indexOf(email);

    if(emailArray.indexOf(email)== -1)
        {
if(! email){
    alert('Login Id should not be empty');
    return;
}if(password){
    alert("password should not be empty");
    return;
    
}
alert("you are not register with us.\ nplease register before login");
return;
}
else if(passwordArray[i]!= password){
    alert('password does not match');         
            }
   
else{
    alert(email+"login successfull!! welcome");
    document.getElementById('se').value ="";
    document.getElementById("se").value="";

}

}
