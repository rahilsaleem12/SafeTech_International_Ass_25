let bar = document.querySelector("#bars")
let navbar = document.querySelector(".header .Navbar")
bar.onclick = ()=>{
    bar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}