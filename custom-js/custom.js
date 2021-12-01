if(localStorage.getItem('checkout') == null){
    localStorage.setItem('checkout',0)

};
//this code makes sure that the checkout span is set to 0 if it is ever null

var checkout = localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;
//this makes sure that as the UPDATED checkout number is the same across all pages when you go from one to the otheer


//run to update login
var logout = document.getElementById('loginlogout');

logout.addEventListener("click",Logout);
//NOT TOO SURE ABOUT THIS CODING HERE
function Logout(){
    var loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn ==1){//if already logged in then it will 'LOGOUT' ad send you back to home page
        localStorage.setItem(loggedIn,0);
        window.location.href = "home.html";
    } 
    else{
        //if logged out then will send you to login page
        window.location.href("login.html");
    }

}

checkLogInStatus();//checking if user is logged in or not-will then change the information displayed.

function checkLogInStatus(){//THIS CODE IS NOT WORKING-NEEDS TO BE UPDATED
    var loggedin = localStorage.getItem("loggedIn");
    var element = document.getElementById("userdetails");


    if (loggedIn == 1){//this changes the navbar so that if you are logged in then LOGIN dispays Logout
        document.querySelector('#loginlogout').innerHTML = "Logout";
        element.classList.remove("d-none");
        element.classList.add("d-show");
    } else{
        element.classList.add("d-none");
        element.classList.remove("d-show");
        document.querySelector("#loginlogout").innerHTML="Login";

        element.document.getElementById("loginlogout");
        element.setAttribute("href","login.html")
    }
}
