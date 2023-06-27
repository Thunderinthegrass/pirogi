function scrollToLink() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
scrollToLink();

const menuBtn = document.querySelector(".mobile-menu-btn");
const headerRight = document.querySelector(".header__right");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  headerRight.classList.toggle("active");
  document.body.classList.toggle("ov-hidden");
});

headerRight.querySelectorAll("a").forEach((elem) => {
  elem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    headerRight.classList.remove("active");
    document.body.classList.remove("ov-hidden");
  });
});

//размер пирога
const productSizeBtn = document.querySelectorAll(".product__size-btn");
const productSizeBtns = document.querySelectorAll(".product__size-btns");

for (let i = 0; i < productSizeBtns.length; i++) {
  productSizeBtns[i].querySelectorAll(".product__size-btn").forEach((elem) => {
    elem.addEventListener("click", () => {
      productSizeBtns[i]
        .querySelectorAll(".product__size-btn")
        .forEach((el) => {
          el.classList.remove("active");
        });

      elem.classList.add("active");
    });
  });
}

//попапы
const popups = document.querySelectorAll(".popup");
const overlay = document.querySelector(".popup-overlay");
const popupBtn = document.querySelectorAll(".popup-btn");
const closeBtn = document.querySelectorAll(".popup__close-btn");

function popup() {
  popupBtn.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let data = e.currentTarget.getAttribute("data-path");

      popups.forEach((elem) => {
        elem.classList.remove("popup--visible");
      });

      document
        .querySelector(`[data-target="${data}"]`)
        .classList.add("popup--visible");
      overlay.classList.add("popup-overlay--visible");
    });
  });

  overlay.addEventListener("click", (e) => {
    if (e.target == overlay) {
      overlay.classList.remove("popup-overlay--visible");
      popups.forEach((el) => {
        el.classList.remove("popup--visible");
      });
    }
  });

  closeBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      overlay.classList.remove("popup-overlay--visible");
      popups.forEach((el) => {
        el.classList.remove("popup--visible");
      });
    });
  });
}
popup();

//фильтры
let catalogSection = document.querySelector(".catalog");
let catalog = catalogSection.querySelector(".catalog__inner");
let navList = document.querySelector(".catalog__nav-list");
let catalogNavItems = document.querySelectorAll(".catalog__nav-item");
let catalogItems = document.querySelectorAll(".catalog__item");

function filters() {
  catalogNavItems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let active = navList.querySelector(".catalog__nav-btn.active");

      if (e.target != active) {
        active.classList.remove("active");
        e.target.classList.add("active");
      }

      let data = e.target.getAttribute("data-filter");

      if (data != "all") {
        catalogItems.forEach((elem) => {
          elem.classList.add("d-none");
        });

        catalog
          .querySelectorAll(`[data-category="${data}"]`)
          .forEach((elem) => {
            elem.classList.remove("d-none");
          });
      } else {
        catalogItems.forEach((elem) => {
          elem.classList.remove("d-none");
        });
      }
    });
  });
}

filters();

//подстановка значений
function dataSubstitution() {
  catalogItems.forEach((elem) => {
    let btn = elem.querySelector('.product__order-btn');
    let name = elem.querySelector('.product__title').textContent;
    let orderPopup = document.querySelector('.order-popup');
    

    btn.addEventListener('click', () => {
      orderPopup.querySelector('.order__name').innerHTML = name;
      orderPopup.querySelector('.order__price').innerHTML = elem.querySelector('.product__price').textContent;
      orderPopup.querySelector('.order__size').innerHTML = elem.querySelector('.product__size-btn.active').textContent;
      orderPopup.querySelector('.order__img').setAttribute('src', elem.querySelector('.product__img').getAttribute('src'))
    })
  })
}
dataSubstitution();

//форма
function formm() {
  let forms = document.querySelector('.form-send');

  // if (forms.length === 0) {
  //   return;
  // }

  let formSend = function(form) {
    let xhr = new XMLHttpRequest();
    let url = 'mail/mail.php';

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
      console.log(xhr.response);
    }

    xhr.send();
  }

  // for (let i = 0; i < forms.length; i++) {
    forms.addEventListener('submit', function(e) {
      e.preventDefault();
      let form = e.currentTarget;
      formSend(form);
    })
  // }
}

formm();
