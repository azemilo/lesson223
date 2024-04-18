
const searchBtn = document.getElementById("searchBtn")
const searchInputClass = document.querySelector(".searchInput")
const searchResult = document.getElementById("resultSearch")
const value = searchInputClass.value

searchBtn.addEventListener("mouseenter", () => {
    searchInputClass.classList.remove("searchInput")
    searchInputClass.classList.add("searchInputClass")
    searchResult.textContent = ' '

})
searchBtn.addEventListener("click", () => {
    searchInputClass.classList.remove("searchInputClass")
    searchInputClass.classList.add("searchInput")
    searchResult.textContent = '${value} deyerine uygun netice tapilmadi'
})




const btnRight = document.getElementById("btnRight")
const btnLeft = document.getElementById("btnLeft")
const barP = document.querySelectorAll(".barP")
var count = 0;

btnRight.addEventListener("click", () => {

    if (count < barP.length) {
        barP[count].classList.remove("barP")
        barP[count].classList.add("barPclick")
        count++
    } else {
        for (i = 0; i < barP.length; i++) {
            barP[i].classList.remove("barPclick")
            barP[i].classList.add("barP")
        }
        count = 0
    }


})
btnLeft.addEventListener("click", () => {

    if (count > 0) {
        barP[count - 1].classList.remove("barPclick")
        barP[count - 1].classList.add("barP")
        
        count--
    }
})
const btnModal = document.querySelector(".btnModal")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".btnModalClose")

btnModal.addEventListener('click', () => {
    modal.classList.remove("dNone")
})
closeBtn.addEventListener('click', () => {
    modal.classList.add("dNone")

})




var askItems = document.querySelectorAll('.ul li');

askItems.forEach(function (item, index) {
    if (!(index % 2)) {
        item.addEventListener('click', function () {
            askItems[index + 1].classList.toggle('hidden')
        });
    }
});