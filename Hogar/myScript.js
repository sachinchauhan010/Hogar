
// document.getElementsByClassName("logBtn").addEventListener("click", function () {
//     document.getElementsByClassName("logIn").classList.remove("hidden");
//     document.getElementsByClassName("signup").classList.add("hidden");
//     // this.classList.add("bg-gray-200");
//     // document.getElementById("signupTab").classList.remove("bg-gray-200");
// });

// document.getElementById("signBtn").addEventListener("click", function () {
//     document.getElementById("signup").classList.remove("hidden");
//     document.getElementById("logoIn").classList.add("hidden");
//     // this.classList.add("bg-gray-200");
//     // document.getElementById("loginTab").classList.remove("bg-gray-200");
// });


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor:"true",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



document.getElementsByClassName("houseHost").onclick