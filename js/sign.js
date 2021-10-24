let regexEmail = /^[a-z0-9._-]+@(gmail|yahoo).com$/;
let passMobile = /^[0-9]{5,18}$/i;


var users=[];
    userCount = 0;
    let  myUser;
    
    class User{
        constructor(name,email,pass){
                this.name=name;
                this.pass=pass;
                this.email=email;
        }
        static addUser(name,email,pass){
               myUser = new User(name,email,pass);
               users[userCount++] = myUser;
        }
    
    }

// ----------------- sign Up -------------------

// fullname
const fullName = document.getElementById('fullName');
const nameMessage = document.getElementById('signNameMessage');
// email
const email =document.getElementById('signUpEmail');
const emailMessage = document.getElementById('signEmailMessage');
// password
const password = document.getElementById('signUpPassword');
const passMessage = document.getElementById('signPassMessage');
// botton
const subbtn = document.getElementById('signSubmit');

// fullname condition
fullName.addEventListener('keyup' , () =>{
    nameMessage.innerText='';
    if (fullName.value.includes(' ') && fullName.value.length >= 3){
        fullName.style.border="3px solid #32CD32";
        fullName.style.boxShadow="1px 0px 2px #32CD32";
    }else { 
        fullName.style.border='none';
        fullName.style.borderBottom='2px solid black';
        fullName.style.boxShadow='';
    }
})
// email condition
email.addEventListener('keyup', () => {
    emailMessage.innerText='';
    if(email.value.length >=5) {

        if (email.value.match(regexEmail)) {
            email.style.border="3px solid #32CD32";
            email.style.boxShadow="1px 0px 2px #32CD32";
            emailMessage.style.display='none'
        }else{
            emailMessage.style.color='rgb(199, 0, 0)';
            emailMessage.innerText="Invalid Email";
            emailMessage.style.display=''
        }
    }else {
        email.style.border='none';
        email.style.borderBottom='2px solid black';
        email.style.boxShadow='';
    }if(email.value==''){
        emailMessage.style.display='none'
    }

})
// password condition
password.addEventListener('keyup', () => {
    passMessage.innerText='';
    if(password.value.length >=5 ){

        if (password.value.match(passMobile)) {
            password.style.border="3px solid #32CD32";
            password.style.boxShadow="1px 0px 2px #32CD32";
        }
    }else {
        password.style.border='none';
        password.style.borderBottom='2px solid black';
        password.style.boxShadow='';
    }

})

subbtn.onclick = function (e) {
    e.preventDefault();
    if (fullName.value == ""){
        nameMessage.style.color='rgb(199, 0, 0)';
        nameMessage.innerText='please Enter Your Full Name';
        }else {nameMessage.innerText=""}

    if (email.value == "") {
        emailMessage.style.color='rgb(199, 0, 0)';
        emailMessage.innerText='please Enter the email';
    } 
    if (password.value == ""){
        passMessage.style.color='rgb(199, 0, 0)';
        passMessage.innerText='Enter the password';
    }

    //----------localStorage -----------
    
    User.addUser(fullName.value,email.value,password.value);
    console.log(users)
    
    localStorage.setItem("myUsers",JSON.stringify(users));
    console.log(JSON.parse(localStorage.getItem("myUsers"))[0].name)

} 

