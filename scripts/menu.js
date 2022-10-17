window.onload = () => {
    const header = document.getElementsByTagName('header')
    var navigation = `
        <nav>
        <a href="../index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="about.html">About us</a>
        <a href="contact.html">Contact us</a>
        </nav>
        `

    header[0].style.background = "rgb(225,233,232)";

    //inserting the nav bar
    header[0].insertAdjacentHTML('beforeend', navigation)

    //Adding some style to the nav
    var nav = document.getElementsByTagName('nav')
    nav[0].style.background = "rgb(225,233,232)";
    nav[0].style.padding = "1vw";

    //get the links and add some style
    const links = document.getElementsByTagName("a")

    for (let index = 0; index < links.length; index++) {
        links[index].style.marginRight = "4vw"
        links[index].style.textDecoration = "none"
        links[index].style.borderRadius = "6px"
        links[index].style.padding = "0.5vw";
        links[index].style.boxShadow = `0px 6px 13px -7px #000000, 5px -50px 15px 5px rgba(0,0,0,0)`

    }

}