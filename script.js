let SignUpBtn = document.getElementById('SignUpBtn');

// console.log(SignUpBtn)

SignUpBtn.addEventListener('click', (a)=>{

a.preventDefault();


let UserName = document.getElementById('UserName').value;
let Email = document.getElementById('Email').value;
let Password = document.getElementById('Password').value;
let City = document.getElementById('City').value;
let Country = document.getElementById('Country').value;
let Gender = document.getElementById('Gender').value;
let Zip = document.getElementById('Zip').value;
let Date = document.getElementById('Date').value;

let UserObj = {
UserName,
Email,
Password,
City,
Country,
Gender,
Zip,
Date
}



console.log(UserObj)

})