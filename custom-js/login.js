var loginStatus = document.getElementById('loginDetails');

//adding an event listener to LOGIN
loginStatus.addEventListener("submit",loginUser);

function loginUser(){
    //when submit(from login form) is clicked then this code will run

    var emailAdress = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;
    //this gets the value for the email and password from that forms

    //next now the program will check if it is the correct email and password

    if(emailAdress == "wmitty@email.com" && password == "password1"){
        //if the details match then it will enter here
        localStorage.setItem('loggedIn',1);
        window.location = "shop.html";//this new code send the user to the shop page 

    }
    else{
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
        element.classList.remove("d-block");
    }
    event.preventDefault();

}