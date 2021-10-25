console.log(localStorage.getItem('myUsers'));

let name1=document.getElementsByClassName("user-N")[0]
let string3=sessionStorage.getItem('currentUser')
name1.innerHTML=string3.slice(0,string3.indexOf(" "))
