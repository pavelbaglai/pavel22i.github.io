const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll("lock-padding");

let unlock = true;
const timeout = 800;


if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute("data-link");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close__popup");
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    const body = document.querySelector("body")
    body.style.overflow = 'hidden';
    if (curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        // меняю z-index для карт так как происходит наложение relative
        // const thinkBlocks = document.querySelectorAll(".think__block");
        // thinkBlocks.forEach(element => {
        //     element.classList.remove("think__block");
        //     element.classList.add("think__block-new");
        // });

        if (popupActive) {
            popupClose(popupActive, false);
        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content"))
                popupClose(e.target.closest(".popup"));
            // e.preventDefault();

        });
    }
}

function popupClose(popupActive) {
    const body = document.querySelector("body")
    body.style.overflow = 'auto';
    popupActive.classList.remove("open");
    // меняю z-index для карт так как происходит наложение relative
    const thinkBlocks = document.querySelectorAll(".think__block-new");
    thinkBlocks.forEach(element => {
        element.classList.remove("think__block-new");
        element.classList.add("think__block");
    });
}

// Передача данных в модальные окна
const popupButtons = document.querySelectorAll('.popup__list-btn');
const popup1Buttons = document.querySelectorAll('.popup1__list-btn');
const popup1Input = document.querySelector('.popup1__other-input');

//первое модальное
popupButtons.forEach(element => {
    element.addEventListener("click", function (e) {

        let flag = +element.innerHTML.replace("$", "");
        if (isNaN(flag)) {
            popup1Buttons[6].style.background = "#00A092";
            popup1Input.value = 10;

        }
        else {
            popup1Input.value = +element.innerHTML.replace("$", "");
            if (popup1Input.value == 20) {
                popup1Buttons[1].style.background = "#00A092";
            }
            else if (popup1Input.value == 30) {
                popup1Buttons[2].style.background = "#00A092";
            }
            else if (popup1Input.value == 50) {
                popup1Buttons[3].style.background = "#00A092";
            }
            else if (popup1Input.value == 80) {
                popup1Buttons[4].style.background = "#00A092";
            }
            else if (popup1Input.value == 100) {
                popup1Buttons[5].style.background = "#00A092";
            }
        }
    })
});

//второе модальное
const popup2Inputs = document.querySelectorAll('.popup-2__input-name');

popup1Buttons.forEach(element => {
    element.addEventListener("click", function (e) {
        popup1Buttons.forEach(element => {
            element.style.background = "rgba(0, 160, 146, 0.5)";
        });
        element.style.background = "#00A092";
        popup1Input.value = +element.innerHTML.replace("$", "");
    })
});

//select
const popup1Special = document.querySelector('.popup1__special-block');
const popup1Select = document.querySelector('.popup1__donation-select');

popup1Select.addEventListener("click", function (e) {
    popup1Special.style.background = "#00A092";
})

//передача donation из index в модальное окно
const quikDonateInput = document.querySelector('.quick-donate__input-number');
const quikDonateBtn = document.querySelector('.quick-donate__button');

quikDonateBtn.addEventListener('click', function () {
    if (quikDonateInput.value == '') {
        popup1Input.value = 10;
    } else {
        popup1Input.value = quikDonateInput.value;
    }
})



//ограничения на ввод 
popup1Input.oninput = function () {
    this.value = this.value.substr(0, 4);
}

const popup3Credit = document.querySelector('.popup-3__input-credit');
const popup3CVV = document.querySelector('.popup-3__input-cvv');
popup3Credit.oninput = function () {
    this.value = this.value.substr(0, 16);
}
popup3CVV.oninput = function () {
    this.value = this.value.substr(0, 4);
}

//Завершение при нажатие на complete donation

const popup3CompliteBtn = document.querySelector('.popup3__bottom-button');

//обработка месяца и года карты
const popup3SelectYear = document.querySelector('.popup3__year');
const popup3SelectMonth = document.querySelector('.popup3__month');
let flagForYear = false;
let flagForMonth = false;

popup3SelectYear.addEventListener("click", function (e) {
    flagForYear = true;
})
popup3SelectMonth.addEventListener("click", function (e) {
    flagForMonth = true;
})

popup3CompliteBtn.addEventListener("click", function (e) {

    if (popup1Input.value == "" ||
        popup2Inputs[0].value == "" ||
        popup2Inputs[1].value == "" ||
        popup3Credit.value == "" ||
        popup3CVV.value == "" ||
        flagForYear == false ||
        flagForMonth == false) {
        e.preventDefault();
        window.alert("Fill all required fields !");
    }
    else {
        window.alert("Thank you for your donation !");
    }

})




// Слайдер для meet some our friends

let offset = 0;
const sliderLine1 = document.querySelector('.slider-line-1');
const sliderLine2 = document.querySelector('.slider-line-2');
const sliderBtnRight = document.querySelector('.meet__buttons-right');
const sliderBtnLeft = document.querySelector('.meet__buttons-left');

const sliderThinkLine1 = document.querySelector('.think-slider-line-1');
const sliderThinkLine2 = document.querySelector('.think-slider-line-2');
const sliderThinkBtnRight = document.querySelector('.think__buttons-right');
const sliderThinkBtnLeft = document.querySelector('.think__buttons-left');


sliderBtnRight.addEventListener('click', function () {
    offset += 480;
    if (offset > 1920) {
        offset = 0;
    }
    sliderLine1.style.left = -offset + 'px';
    sliderLine2.style.left = -offset + 'px';
});

sliderBtnLeft.addEventListener('click', function () {
    offset -= 480;
    if (offset < 0) {
        offset = 1920;
    }
    sliderLine1.style.left = -offset + 'px';
    sliderLine2.style.left = -offset + 'px';
});


sliderThinkBtnRight.addEventListener('click', function () {
    offset += 545;
    if (offset > 1600) {
        offset = 0;
    }
    sliderThinkLine1.style.left = -offset + 'px';
    sliderThinkLine2.style.left = -offset + 'px';
});

sliderThinkBtnLeft.addEventListener('click', function () {
    offset -= 545;
    if (offset < 0) {
        offset = 1090;
    }
    sliderThinkLine1.style.left = -offset + 'px';
    sliderThinkLine2.style.left = -offset + 'px';
});

