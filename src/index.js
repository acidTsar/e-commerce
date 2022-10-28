import "./index.html";
import "./search.html";
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
        image.style.filter =`blur(1rem)`;
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

