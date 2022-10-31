import "./index.html";
import "./search.html";
import "./product.html";
import "./404.html";
import "./signup.html"
import "./index.scss";

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(scrollY >= 450){
    navbar.classList.add('bg');
  } else {
    navbar.classList.remove('bg');
  }
})

const collageImages = [...document.querySelectorAll('.image-section-collection-img')]

collageImages.map((item, i) => {
  item.addEventListener('mouseover',() => {
    collageImages.map((image, index) => {
      if(index != i){
        image.style.filter =`blur(3px)`;
        item.style.zIndex = 2;
      }
    })
  })
  item.addEventListener('mouseleave',() => {
    collageImages.map((image, index) => {
      image.style = null;
    })
  })
})

// let ratingStarInput = [...document.querySelectorAll('.add-review-star')];

// ratingStarInput.map((star, index) => {
//   star.addEventListener('click', () => {
//     for(let i = 0; i < 5; i++){
//       if(i <= index){
//         ratingStarInput[i].src = `/fill-star.png`;
//       } else {
//         ratingStarInput[i].src = `/no-fill-star.png`;
//       }
//     }
//   })
// })


const allStars = document.querySelectorAll('.add-review-star')

allStars.forEach((star, i) => {
  star.onclick = function(){
    let currentStarLevel = i + 1;
    allStars.forEach((star, j) => {
      if(currentStarLevel >= j + 1){
        star.innerHTML = '&#9733'
      } else {
        star.innerHTML = '&#9734'
      }
    })
  }
})

const showFormError = (err) => {
  const errorEl = document.querySelector('.form-error');
  errorEl.innerHTML =err;
  errorEl.classList.add('form-error-show')
}

const formBtn = document.querySelector('.form-btn')
const loader = document.querySelector('.loader')

formBtn.addEventListener('click', () => {
  const fullName = document.querySelector('#name')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const number = document.querySelector('#number')
  const tc = document.querySelector('#tc')

  if(fullName.value.length < 3){
    showFormError('Name must be minimum 3 letters long!')
  }
})
