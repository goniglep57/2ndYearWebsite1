// var addItem = document.getElementsByClassName('addtobooking');


// addItem.forEach( element=> {
//     addItem[element].addEventListener("click",addToCart,false);
// });

document.querySelectorAll('.addtobooking').forEach(item => {
  item.addEventListener('click', event => {
    addToCart();
  })
})


function addToCart(){
    var total = localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML = total;
}

// var queryResult = document.getElementsByClassName('addtobooking');

// for(var i=0;i<queryResult.length;i++){
//     if(queryResult[i].id && queryResult[i].id !=""){
//         document.getElementById(queryResult[i].id).addEventListener("click",addToCart);
//     }
//     }






// function onImageClick(event) {
//     alert('Event Registered');
//   }
  
//   var queryResult = document.getElementsByClassName('ui-grid-cell');
  
//   for(var i=0;i<queryResult.length;i++){
//   if(queryResult[i].id && queryResult[i].id !=""){
//       document.getElementById(queryResult[i].id).addEventListener("click",onImageClick);
//   }
//   }