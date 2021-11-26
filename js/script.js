/*document.querySelector('header').innerHTML = "<h1>surprise!</h1>";*/

/*document.querySelector('h1').style.color = '#201F2E';*/

/*document.querySelector('h1').style.fontFamily = 'serif';*/

let eventTarget = document.querySelector('h2');

eventTarget.addEventListener('mouseover', function(){
    eventTarget.style.color = 'rgb(231, 235, 16)';    
});

eventTarget.addEventListener('mouseout', function(){
    eventTarget.style.color = '#fff';    
});