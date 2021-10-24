
//ZOOS FRAMES

let currentFrame = document.querySelector('.live-cams__iframe');
let sliderFrames = document.querySelectorAll('.live-cams__item-player');

let sliderInvisibles = document.querySelectorAll('.live-cams__invis');
// console.log(currentFrame);
sliderInvisibles.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        // currentFrame.getAttribute("src");
        let clickedFrame = sliderFrames[index].getAttribute("src");
        // console.log(clickedFrame);
        let permanentContainer = currentFrame.getAttribute("src");
        // console.log(permanentContainer);

        currentFrame.setAttribute("src", clickedFrame);
        // console.log( currentFrame.getAttribute("src"));

        sliderFrames[index].setAttribute("src", permanentContainer);
        // console.log(clickedFrame);
    })
});


//ZOOS SIDE BAR//////////////////////////////////////////////////

let sideBtn = document.querySelector('.side-bar__top-button');
let sideCardSpan = document.querySelectorAll('.side-bar__card-span');
let sideBar = document.querySelector('.side-bar');
var flagForButton = true;

//функция раскрытия side-bar
function swichAsideTrue() {
    //для изначального разрешения
    sideBar.style.width = "350px";
    sideCardSpan.forEach(element => {
        element.style.margin = "20px";
    });
    sideCardSpan.forEach(element => {
        element.style.display = "block";
    });
    flagForButton = false;
    sideBtn.style.transform = 'rotate(180deg)';
}
//функция закрытия side-bar
function swichAsideFalse() {
    //для изначального разрешения
    sideBar.style.width = "220px";
    sideCardSpan.forEach(element => {
        element.style.margin = "20px";
    });
    sideCardSpan.forEach(element => {
        element.style.display = "none";
    });
    flagForButton = true;
    sideBtn.style.transform = 'rotate(0deg)';
}
//вешаем слушателя на кнопку
sideBtn.addEventListener('click', function (e) {
    if (flagForButton == true) {
        swichAsideTrue();
    }
    else {
        swichAsideFalse();
    }
})



