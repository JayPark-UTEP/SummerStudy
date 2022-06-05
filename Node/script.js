const button = document.getElementById("button");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
// console.log(button);

const authorizeduser = {
    id : "jaypark",
    pw : "1234",
};

const handleButtonClick = (event) => {
    event.preventDefault();
    // console.log(email.value, password.value);
    if (email.value == authorizeduser.id && password.value == authorizeduser.pw) {
        message.innerHTML = "Success!";
    }else {
        message.innerHTML = "Failed!";
    }
    
};

button.addEventListener("click", handleButtonClick);
