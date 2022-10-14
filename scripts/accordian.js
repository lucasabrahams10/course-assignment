
// you should use a loop ...
"use script";
let question = document.getElementsByClassName('accordian-container');

for(let i =0; i < question.length; i++){
  question[i].addEventListener('click', function(){
    this.classList.toggle("active")
  });
}
/*let divElement = document.createElement('div');
divElement.classList.add('divmenu');
console.log(divElement);
document.body.append(divElement);
let navElement = '<nav><ul><li><a href="https://www.w3schools.com/html/default.asp">HTML</a> </li><li><a href="https://www.w3schools.com/css/default.asp">CSS</a> </li><li><a href="https://www.w3schools.com/js/default.asp">JavaScript</a> </li><li><a href="https://www.w3schools.com/python/default.asp">Python</a></li></ul></nav>';
divElement.insertAdjacentHTML('afterbegin', navElement);*/
 
