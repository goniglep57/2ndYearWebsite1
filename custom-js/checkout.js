
if(localStorage.getItem('userdetails') != null){
    //if null menas that it has not been loaded before.
    var checkoutDetails = JSON.parse(localStorage.getItem('userdetails'));

    //now we store the userdetails as a local storage object
    // localStorage.setItem('checkoutDetails',JSON.stringify(checkoutDetails));
    document.getElementById("getFirstName").setAttribute('value', checkoutDetails.firstname);
    document.getElementById("getLastName").setAttribute('value', checkoutDetails.surname);
    // document.getElementById("DatebirthID").setAttribute('value', payDetails.dob);
    document.getElementById("getAddress1").setAttribute('value',checkoutDetails.address1);
    document.getElementById("getAddress2").setAttribute('value',checkoutDetails.address2);  
    document.getElementById("getAddress3").setAttribute('value',checkoutDetails.address3);  
} 
    //if localstorage variable userdetails is already created- load it to javascript object.

    // document.getElementById('book-button').addEventListener('submit', updateCheckoutDetails(),false);
    

var checkoutDetailsUpdate = document.getElementById('pdetails');



checkoutDetailsUpdate.addEventListener('submit',updateCheckoutDetails);

function updateCheckoutDetails(){

    var checkoutDetails = {};
    checkoutDetails.firstname=document.getElementById('firstNameID').value;
    checkoutDetails.surname =document.getElementById('lastNameid').value;
    // checkoutDetails.dob=document.getElementById('DatebirthID').value;
    checkoutDetails.address1=document.getElementById('address1').value;
    checkoutDetails.address2=document.getElementById('address2').value;
    checkoutDetails.address3=document.getElementById('address3').value;

    localStorage.setItem('checkoutDetails',JSON.stringify(checkoutDetails));


}
