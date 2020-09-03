const array = ['Mango','Banana','Orange','Kiwi']
document.querySelector('#suggestion').addEventListener('input', function showSuggestion(event){
var k = event ? event.which : window.event.keyCode;
if (k == 32) {event.preventDefault()};
let arrayDisplay = array.filter(function getData(item){
  if(item.toLowerCase().includes(event.target.value.toLowerCase()) && event.target.value != ''){
  return item
}
})
if(arrayDisplay.length > 0){
arrayDisplay = arrayDisplay.map(function(item){
  return '<li>' + item + '</li>'
})
}

const htmlList = arrayDisplay.length > 0 ? arrayDisplay.join('\n'):''
document.querySelector('ul').innerHTML = htmlList
}
)

document.querySelector('#suggestion').addEventListener('keypress', function showSuggestion(event){
var k = event ? event.which : window.event.keyCode;
if (k == 32) {event.preventDefault()};
}
)