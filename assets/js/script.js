/* 

/* Define the slides list */
const slides2 = [
    './assets/img/01.webp', //0
    './assets/img/02.webp', //1
    './assets/img/03.webp', //etc
    './assets/img/04.webp',
    './assets/img/05.webp',
  ]
  
const slides = [
    {
        position : 1,
        url : './assets/img/01.webp',
        title : 'spiderman'
    },
    {
        position : 2,
        url :'./assets/img/02.webp',
        title : 'topini'
    },
    {
        position : 3,
        url :'./assets/img/03.webp',
        title : 'vari personaggi'
    },
    {
        position : 4,
        url :'./assets/img/04.webp',
        title : 'un gatto'
    },
    {
        position : 5,
        url :'./assets/img/05.webp',
        title : 'the avengers'
    },
]

  let activeSlide = 1;
  
  // select the dom elements
  const sliderImagesEl = document.querySelector('.slider .images')
  const prevEl = document.querySelector('.prev')
  const nextEl = document.querySelector('.next')
const titleEl = document.querySelector('imageTitle')
  
  
  //console.log(sliderImagesEl);
  
  /* Print all images into the dom */
  // loop over the slides 

  /* for (let i = 0; i < slides2.length; i++) {
    const slidePath = slides[i];
    console.log(slidePath);
    
    // for each slide we create the markup
    const slideMarkup = `<img class="${activeSlide === i ? 'active' : '' }" src="${slidePath}" alt="">`
    //console.log(slideMarkup);
  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
  
  } */
  
  slides.forEach(slide => {

    //const imageURL = slide.url

    const slideMarkup = `<img class="${activeSlide === slide.position ? 'active' : '' }" src="${slide.url}" alt="">`
    //console.log(slideMarkup);

    //const slideMarkup = `<img src="${slide.url}" alt="">`
  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

    console.log(slide.url);
    
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
  
  
  /* 
  
  MILESTONE 3
  Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  
  */
  
  const slidesImages = document.querySelectorAll('.slider .images > img')
  console.log(slidesImages);
  
  
  
  /* 
  BONUS 1:
  Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
  
  */
  
  /* 
  
  BONUS 2:
  Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
  come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
  Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
  
  */
  
  
  const thumbsElement = document.querySelector('.thumbnails')
  
  /* for (let i = 0; i < slides.length; i++) {
    const thumbPath = slides[i];
    const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
    
  } */

  slides.forEach(slide => {

    const thumbPath = slide.position;
    const thumbMarkup = `<img class="thumb ${activeSlide === thumbPath ? 'active' : ''}" src="${slide.url}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
    
  });
  
  
  
  
  
  // intercept click on the next icon 
  nextEl.addEventListener('click', function(){
    console.log('cliccato su next');
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
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
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
  
  
    /* TODO */
  
  
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')
  
  
  })
  
  // intercept click on the prev icon
  
  
  // activeSlide = 0
  prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');
  
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
      // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }
    
    
    console.log(activeSlide);
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
  })
  