function slider() {
    const slider = document.querySelector('.offer__slider');
    const slidesWrapper = slider.querySelector('.offer__slider-wrapper');
    const slides = slidesWrapper.querySelectorAll('.offer__slide');
    const slidesField = slidesWrapper.querySelector('.offer__slider-inner');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const sliderCurrent = document.querySelector('#current');
    const sliderCountTotal = document.querySelector('#total');
    const width = window.getComputedStyle(slidesWrapper).width;
    
    let slideIndex = 1;
    let offset = 0;

    function formatSlideIndex() {
        if (slides.length < 10) {
            sliderCountTotal.textContent = `0${slides.length}`;
            sliderCurrent.textContent = `0${slideIndex}`;
        } else {
            sliderCountTotal.textContent = slides.length;
            sliderCurrent.textContent = slideIndex;
        }
    }
    
    function activeDot() {
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[slideIndex - 1].style.opacity = 1;
    }

    function cutNum(str) {
        return +str.replace(/\D/g, '');
    }

    formatSlideIndex();
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dotsNav = document.createElement('ol');
    const dotsArr = [];
    dotsNav.classList.add('carousel-indicators');
    slider.append(dotsNav);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i === 0) {
            dot.style.opacity = 1;
        }
        dotsNav.append(dot);
        dotsArr.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == cutNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += cutNum(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        formatSlideIndex();
        activeDot();
    });

    prev.addEventListener('click', () => {
        if (offset === 0) {
            offset = cutNum(width) * (slides.length - 1);
        } else {
            offset -= cutNum(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        formatSlideIndex();
        activeDot();
    });

    dotsArr.forEach(dot => {
        dot.addEventListener('click', e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = cutNum(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            formatSlideIndex();
            activeDot();
        });
    });
}

module.exports = slider;