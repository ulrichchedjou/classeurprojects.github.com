const myframe = document.getElementById('myframe');
const studentId = document.querySelectorAll('id');
const detailId = document.querySelectorAll('detail_ID');
const content = document.querySelectorAll('.main_content');

let menuOpen = false;

document.querySelectorAll('.link').forEach(element =>{
    element.addEventListener('click', () => {
        console.log('Vous avez cliqué sur un lien');
        content.forEach(element=>{
            element.style.display = "none";
            myframe.style.display = "block";
        })
    })
})
document.querySelectorAll('.kfk').forEach(element => {
    element.addEventListener('click', () => {
        console.log("Vous avez cliqué sur le logo kfokam!!");
        content.forEach(element=>{
            element.style.display = "flex";
            myframe.style.display = "none";
        })
    })
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#sidebar");

hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active")
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("#sidebar").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})
)
let compteur = 10

compteur += 5
compteur /= 3
compteur -= 1
console.log(compteur)

for (let i = 0; i < 5; i++) {
    console.log("Buzz l'éclair à la rescousse !");
    
}

let compteur2 = 0
while (compteur < 5) {
    compteur++
    console.log(compteur2);
}