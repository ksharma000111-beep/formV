
let form = document.getElementById("registrationForm");


let message = document.getElementById("message");


form.addEventListener("submit", function(event) {

   
    event.preventDefault();

    
    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let age = document.getElementById("age").value;

    let course = document.getElementById("course").value;

    let password = document.getElementById("password").value;


    
    if (name === "" || email === "" || age === "" ||
        course === "" || password === "") {

        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";

    }

    
    else if (!email.includes("@") || !email.includes(".")) {

        message.innerHTML = "Please enter a valid email!";
        message.style.color = "red";

    }

   
    else if (Number(age) <= 0) {

        message.innerHTML = "Please enter a valid age!";
        message.style.color = "red";

    }

    
    else if (password.length < 6) {

        message.innerHTML = "Password must be at least 6 characters!";
        message.style.color = "red";

    }

    
    else {

        message.innerHTML = "Registration Successful!";
        message.style.color = "green";

        
        form.reset();

    }

});