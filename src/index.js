import "./index.html";
import "./search.html";
import "./product.html";
import "./404.html";
import "./signup.html"
import "./login.html"
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
  const fullName = document.querySelector('#name') || null
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const number = document.querySelector('#number') || null
  const tc = document.querySelector('#tc') || null

  if(fullName != null){
    showFormError('Name must be minimum 3 letters long!');
  } else if(!email.value.length){
    showFormError('enter your email');
  } else if(password.value.length < 8){
    showFormError('Password must be minimum 8 symbols long!');
  } else if(Number(number) || number.value.length < 10){
    showFormError('Invalid number, please enter valid one');
  } else if(!tc.checked){
    showFormError('you must agree to our terms and conditions')
  } else {
    if(!email.value.length || !password.value.length){
      showFormError('fill all inputs!')
    }
  } 
})
