const menuBtn = document.querySelector('.mobile-menu-btn');
const headerRight = document.querySelector('.header__right');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  headerRight.classList.toggle('active');
  document.body.classList.toggle('ov-hidden');
})

headerRight.querySelectorAll('a').forEach(elem => {
  elem.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    headerRight.classList.remove('active');
    document.body.classList.remove('ov-hidden');
  })
})

//размер пирога
const productSizeBtn = document.querySelectorAll('.product__size-btn');
const productSizeBtns = document.querySelectorAll('.product__size-btns');

for (let i = 0; i < productSizeBtns.length; i++) {
  productSizeBtns[i].querySelectorAll('.product__size-btn').forEach(elem => {

    elem.addEventListener('click', () => {
      productSizeBtns[i].querySelectorAll('.product__size-btn').forEach(el => {
        el.classList.remove('active');
      })

      elem.classList.add('active');
    })
  })
}



