let userPounds = document.querySelector('input');
let list = document.querySelector('ul')
let grams = document.querySelector('#gram')
let kilo = document.querySelector('#kilo')
let oz = document.querySelector('#oz')

list.style.visibility = 'hidden'
userPounds.addEventListener('input' ,function(e){
    if(e.target.value != ''){
    list.style.visibility = 'visible'
    } else {
        list.style.visibility = 'hidden'
    }
    const pounds = e.target.value;
    grams.textContent = 'Grams: ' + pounds * 453.6
    kilo.textContent = 'Kilograms: ' + pounds / 2.205
    oz.textContent = 'Grams: ' + pounds *16
});