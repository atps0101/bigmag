document.addEventListener('DOMContentLoaded', function() {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        breakpoints: {
            1024: {
                slidesPerView: 6,
                spaceBetween: 25,
            }
        }
    });

    const galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },

        simulateTouch: true,
        grabCursor: true,
    });

    const sliderProfit = new Swiper('.slider-profit', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        loop:false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.profit-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
            }
        }
    });

    let swiperInstance; 

    function initSwiper() {
        if (window.matchMedia('(max-width: 560px)').matches) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.tabs-slider', {
                    slidesPerView: 2.9,
                    spaceBetween: 15,
                    loop: false
                });
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }
    }


    initSwiper();

    window.addEventListener('resize', function() {
        initSwiper();
    });

    document.querySelector('.cheaper-list').addEventListener('change', function(event) {
        if (event.target.classList.contains('switch-input')) {
        if (event.target.checked) {
            console.log('Switch is ON');
        } else {
            console.log('Switch is OFF');
        }
        }
    });

    const reviewButtons = document.querySelectorAll('.review-nav button');

    reviewButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const reviewItem = button.closest('.review-item');
            const description = reviewItem.querySelector('.review-description');
            const isOpen = description.classList.contains('open');
    
            if (description.scrollHeight > 70) {
                if (isOpen) {
                    description.classList.remove('open');
                    button.classList.remove('open');
                    button.querySelector('.text').textContent = 'Розгорнути';
                } else {
                    description.classList.add('open');
                    button.classList.add('open');
                    button.querySelector('.text').textContent = 'Згорнути';
                    button.querySelector('.icon svg').style.transform = 'rotate(0deg)';
                }
            } else {
                button.style.display = 'none';
            }
        });
    });
    

document.querySelectorAll('.review-item').forEach(function(item) {
    var description = item.querySelector('.review-description');
    var button = item.querySelector('.review-nav button');

    if (description.scrollHeight > 70) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
        description.classList.add('hide-after');
    }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function(faqItem) {
    faqItem.addEventListener('click', function() {
        faqItem.classList.toggle('open');
    });
});


});