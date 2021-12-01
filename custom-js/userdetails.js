if(localStorage.getItem('userdetails') === null){
    //if null menas that it has not been loaded before.
    var userDetails = {firstname:"Paul",surname:"Mc Gonigle", dob:"2001-08-08",address1:"ballyliffin",address2:"donegal"};

    //now we store the userdetails as a local storage object
    localStorage.setItem('userdetails',JSON.stringify(userDetails));
} else{
    //if localstorage variable userdetails is already created- load it to javascript object.
    userDetails = JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value', userDetails.firstname);
    document.getElementById("lastNameid").setAttribute('value', userDetails.surname);
    document.getElementById("DatebirthID").setAttribute('value', userDetails.dob);
    document.getElementById("address1").setAttribute('value',userDetails.address1);
    // document.getElementById("address2").setAttribute('value',userDetails.address2);
}

var userDetailsUpdate = document.getElementById('udetails');

userDetailsUpdate.addEventListener("submit",UpdateUserDetails);

function UpdateUserDetails()
{
    //if the user updates teh user details- this function updates the userdetails javascript object
    var userDetails = {};

    userDetails.firstname=document.getElementById('firstNameID').value;
    userDetails.surname =document.getElementById('lastNameid').value;
    userDetails.dob=document.getElementById('DatebirthID').value;
    userDetails.address1=document.getElementById('address1').value;
    // userDetails.address2=document.getElementById('address2').value;
    

    //finally convert the javascript object to a string and save to local storage
    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    event.preventDefault();
}
