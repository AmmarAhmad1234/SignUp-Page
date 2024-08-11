
let SignUpBtn = document.getElementById('SignUpBtn');

// console.log(SignUpBtn);

const userArray = [];

SignUpBtn.addEventListener('click',(e)=>{
    e.preventDefault();


let UserName = document.getElementById('UserName').value;
let Email = document.getElementById('Email').value;
let Password = document.getElementById('Password').value;
let City = document.getElementById('City').value;
let Country = document.getElementById('Country').value;
let Gender = document.getElementById('Gender').value;
let Zip = document.getElementById('Zip').value;
let Date = document.getElementById('Date').value;


let UserObj ={
UserName,
Email,
Password,
City,
Country,
Gender,
Zip,
Date
}

// console.log(UserObj);
userArray.push(UserObj);
console.log(userArray)

let Userstringify =JSON.stringify(userArray);
// console.log(Userstringify)
localStorage.setItem('UserData',Userstringify);

let reset = document.getElementById("SignUpForm").reset();

let SuccessMessage = document.getElementById('SuccessMessage');

SuccessMessage.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Success Registered</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`





})
