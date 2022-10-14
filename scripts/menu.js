let header = document.getElementsByTagName('header');
header[0].style.backgroundColor = "rgb(87, 87, 87)";
header[0].style.color = "white";

window.onload = () => {
let divElement = document.createElement('div');
divElement.classList.add('divElement','accordian');
let navElement = '<nav><ul><li><a href="https://www.w3schools.com/html/default.asp">HTML</a> </li><li><a href="https://www.w3schools.com/css/default.asp">CSS</a> </li><li><a href="https://www.w3schools.com/js/default.asp">JavaScript</a> </li><li><a href="https://www.w3schools.com/python/default.asp">Python</a></li></ul></nav>';
divElement.insertAdjacentHTML('afterBegin', navElement);
console.log(navElement);
let divplace = document.querySelector('.flex-container');
console.log(divplace);
divplace.parentNode.insertBefore(divElement, divplace);
divElement.style.width = "90%"
divElement.style.marginBottom = "20px"
divElement.style.backgroundColor = "rgb(210, 210, 190)";
let ul = document.getElementsByTagName('ul');
ul[0].style.display = "flex";
ul[0].style.listStyleType = "none";
let li = document.getElementsByTagName('li');
for(let i =0; i < li.length; i++){
    li[i].style.textAlign = "center";
}
for(let i =0; i < li.length; i++){
    li[i].style.paddingLeft = "10%";
}
let a = document.getElementsByTagName('a');
for(let i =0; i < a.length; i++){
    a[i].style.textDecoration = "none";
}
}
