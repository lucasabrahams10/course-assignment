
// you should use a loop ...
console.log("Starting")

const accordian = document.getElementsByClassName('accordian-container')
// const answer =document.getElementsByClassName("answer")
console.log(accordian)

for(let i=0; i < accordian.length; i++){
    accordian[i].addEventListener("click", function() {
        this.classList.toggle("active");        
    })
}