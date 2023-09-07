const slides = [
    {
        position : 0,
        url : './assets/img/01.webp',
        title : 'spiderman'
    },
    {
        position : 1,
        url :'./assets/img/02.webp',
        title : 'topini'
    },
    {
        position : 2,
        url :'./assets/img/03.webp',
        title : 'vari personaggi'
    },
    {
        position : 3,
        url :'./assets/img/04.webp',
        title : 'un gatto'
    },
    {
        position : 4,
        url :'./assets/img/05.webp',
        title : 'the avengers'
    },
]

  let activeSlide = 0;
  
  // select the dom elements
  const sliderImagesEl = document.querySelector('.slider .images')
  const prevEl = document.querySelector('.prev')
  const nextEl = document.querySelector('.next')
  
  
  
  /* Print all images into the dom */

   const titleEl = document.getElementById('imageTitle');
    
  
   //stampo le immagini
  slides.forEach(slide => {


    const slideMarkup = `<img class="${activeSlide === slide.position ? 'active' : '' }" src="${slide.url}" alt="">`

  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
    
  });
  
  /* 
  
  if(condition) {
    // code to run
  } else {
    // code to run
  }
  
  // terary operator
  
  condition ? 'code to run' : 'code to run'
  
  */
  
  const slidesImages = document.querySelectorAll('.slider .images > img')  
  
  const thumbsElement = document.querySelector('.thumbnails')


  //stampo i thumbnails
  slides.forEach(slide => {

    const thumbPath = slide.position;
    const thumbMarkup = `<img class="thumb ${activeSlide === thumbPath ? 'active' : ''}" src="${slide.url}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
    
  });  

  // intercept click on the next icon 
  //nextEl.addEventListener('click', nextElement)

  //prevEl.addEventListener('click', prevElement)

  nextEl.addEventListener('click',timedScrollNext)
  prevEl.addEventListener('click',timedScrollPrev);

function timedScrollNext() {

    setInterval(nextElement,1000);
    
}

function timedScrollPrev() {
    setInterval(prevElement,1000)
}
  //prev and next function

  function nextElement(){
    console.log('cliccato su next');
    // select the current slide
    const currentSlide = slidesImages[activeSlide];
    //console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
    
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    //console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
    
    
    // activeSlide = 4
    
    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }
    
    
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    //console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active');
    
    //TODO
    
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    //console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')

  }
  
  function prevElement(){
    //console.log('cliccato su next');
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    //console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
    
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    //console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
    
    
    // activeSlide = 4
    
    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
      } else {
          // decrement the activeSlide of 1
          activeSlide--
      }
    
    
    // select the next slide
    const prevSlide = slidesImages[activeSlide];
    //console.log(prevSlide);
    // add the active class to the next slide
    prevSlide.classList.add('active')
    
    
    //TODO
    
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    //console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')

  }