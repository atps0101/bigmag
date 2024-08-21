document.addEventListener('DOMContentLoaded', function() {

    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 15,
        slidesPerView: 'auto',
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        breakpoints: {
            1024: {
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
        freeMode: false,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.profit-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1, 
            }
        }
    });
    

    let swiperInstance; 

    function initSwiper() {
        if (window.matchMedia('(max-width: 560px)').matches) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.tabs-slider', {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                    loop: false,
                    freeMode:false,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: true,
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

    const optionValues = document.querySelectorAll('.option-value');

    optionValues.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });


    const switches = document.querySelectorAll('.switch');

    switches.forEach(switchElement => {
        switchElement.addEventListener('click', function() {
            const input = switchElement.querySelector('.switch-input');
            input.checked = !input.checked;
    
            const parentItem = switchElement.closest('.cheaper-item');
            
            if (input.checked) {
                parentItem.classList.add('active');
            } else {
                parentItem.classList.remove('active');
            }
        });
    });


    const cheaperTogetherBtn = document.querySelector('.cheaper-together .show-all button');
    const hiddenItems = [];
    
    cheaperTogetherBtn.addEventListener('click', function() {
        const items = document.querySelectorAll('.cheaper-item');
        
        cheaperTogetherBtn.classList.toggle('open');
        const isOpen = cheaperTogetherBtn.classList.contains('open');
    
        if (isOpen) {
            items.forEach(function(item) {
                if (item.classList.contains('hidden')) {
                    hiddenItems.push(item);
                }
                item.classList.remove('hidden');
            });
            cheaperTogetherBtn.querySelector('.text').textContent = 'Приховати все';
        } else {
            hiddenItems.forEach(function(item) {
                item.classList.add('hidden');
            });
            cheaperTogetherBtn.querySelector('.text').textContent = 'Показати все';
            hiddenItems.length = 0;
        }
    });


    const perfomanceBtn = document.querySelector('.btn-perfomanse');

    const hiddenItemsPerfomance = [];
    
    perfomanceBtn.addEventListener('click', function() {
        const perfomaceItems = document.querySelectorAll('.perfomace-item');


        const perfomanceWrapper = document.querySelector('.perfomance-wrapper');

        perfomanceBtn.classList.toggle('open');

        const isOpen = perfomanceBtn.classList.contains('open');
    
        if (isOpen) {
            perfomaceItems.forEach(function(item) {
                if (item.classList.contains('hidden')) {
                    hiddenItemsPerfomance.push(item);
                }
                item.classList.remove('hidden');
            });
            perfomanceWrapper.classList.add('open');
            perfomanceBtn.querySelector('.text').textContent = 'Приховати все';
        } else {
            hiddenItemsPerfomance.forEach(function(item) {
                item.classList.add('hidden');
            });
            perfomanceWrapper.classList.remove('open');
            perfomanceBtn.querySelector('.text').textContent = 'Показати все';
            hiddenItemsPerfomance.length = 0;
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

    const questionItems = document.querySelectorAll('.question');

    questionItems.forEach(function(questionItem) {
        questionItem.addEventListener('click', function() {
            questionItem.closest('.faq-item').classList.toggle('open');
        });
    });

    document.querySelector('.wishlist').addEventListener('click', function() {
        this.classList.toggle('active');
    });



    document.querySelectorAll('.like').forEach(function(like) {
        like.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    })

    document.querySelectorAll('.dislike').forEach(function(dislike) {
        dislike.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    })

    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(function(t) {
                t.classList.remove('active');
            });
            this.classList.add('active');
        });
    });





    function toggleProductTabs() {
        if (window.innerWidth < 1250) return;

        const productDescription = document.querySelector('.product_description.desktop');
        const productTabs = document.querySelector('.product_tabs');

        if (!productDescription || !productTabs) return;

        const rect = productDescription.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            productTabs.classList.add('close');
        } else {
            productTabs.classList.remove('close');
        }
    }

    window.addEventListener('scroll', toggleProductTabs);
    window.addEventListener('load', toggleProductTabs);



});

document.addEventListener('scroll', function() {
    const catalogBodyheader = document.querySelector('.catalog-body-header');
    const catalogSortList = document.querySelector('.catalog-sort__list');
    const filter = document.getElementById('filter');
    const headerPosition = catalogBodyheader.getBoundingClientRect().top;
    const catalogMobileTitlePosition = document.querySelector('.catalog-title-mob').getBoundingClientRect().top;

    if (headerPosition <= 0) {
        catalogBodyheader.classList.add('fixed');
        catalogBodyheader.classList.remove('static');
        filter.classList.add('fixed');
        catalogSortList.classList.add('fixed');
    }

    if (catalogMobileTitlePosition >= 0) {
        catalogBodyheader.classList.remove('fixed');
        catalogBodyheader.classList.add('static');
        filter.classList.remove('fixed');
        catalogSortList.classList.remove('fixed');
    }
});


const minPriceSlider = document.getElementById('min-price');
const maxPriceSlider = document.getElementById('max-price');
const minPriceDisplay = document.getElementById('min-price-display');
const maxPriceDisplay = document.getElementById('max-price-display');
const sliderTrack = document.querySelector('.slider-track');

function updatePriceDisplay() {
    let minPrice = parseInt(minPriceSlider.value);
    let maxPrice = parseInt(maxPriceSlider.value);
    if (minPrice > maxPrice) {
        minPrice = maxPrice;
        minPriceSlider.value = minPrice;
    }

    minPriceDisplay.textContent = minPrice.toLocaleString();
    maxPriceDisplay.textContent = maxPrice.toLocaleString();

    const minPosition = (minPrice / minPriceSlider.max) * 100;
    const maxPosition = (maxPrice / maxPriceSlider.max) * 100;

    sliderTrack.style.left = `${minPosition}%`;
    sliderTrack.style.right = `${100 - maxPosition}%`;
}

minPriceSlider.addEventListener('input', updatePriceDisplay);
maxPriceSlider.addEventListener('input', updatePriceDisplay);

updatePriceDisplay(); 

document.addEventListener("DOMContentLoaded", function() {
    const filterBtn = document.querySelector(".filter-btn");
    const filter = document.getElementById("filter");
    const overlay = document.querySelector(".overlay");
    const closeFilter = document.getElementById("closeFilter");

    filterBtn.addEventListener("click", function() {
        filter.classList.add("active");
        overlay.classList.add("active");
    });

    closeFilter.addEventListener("click", function() {
        filter.classList.remove("active");
        overlay.classList.remove("active");
    });


    const sortBtn = document.querySelector(".catalog-sort");
    const sort = document.querySelector(".catalog-sort__list");
    const closeSort = document.getElementById("closeSort");

    sortBtn .addEventListener("click", function() {
        sort.classList.add("active");
        overlay.classList.add("active");
    });

    closeSort.addEventListener("click", function() {
        sort.classList.remove("active");
        overlay.classList.remove("active");
    });



    overlay.addEventListener("click", function() {
        filter.classList.remove("active");
        sort.classList.remove("active");
        overlay.classList.remove("active");
    });


    const closePopupBtn = document.querySelector(".popup-close") 
    const popup = (blockId) => {
        Fancybox.show([{ 
        src: blockId, 
        type: "inline",
        closeButton:false,
        }])
    }

    document.querySelectorAll('.addToCart').forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            popup('popup-cart');
        });
    });


    closePopupBtn.addEventListener("click", event => {
        event.preventDefault()
        Fancybox.close(true);
    })

    document.querySelectorAll('.popup-product-item__wrapper').forEach(wrapper => {
        const removeActionBody = wrapper.querySelector('.remove-action-body');
        const actionsButton = wrapper.querySelector('.cart-popup-actions');
    
        if (actionsButton) {
            actionsButton.addEventListener("click", event => {
                event.preventDefault();
    
                if (removeActionBody) {
                    removeActionBody.classList.add('active');
                }
            });
        }

        wrapper.addEventListener("click", event => {
            event.preventDefault();
    
            if (removeActionBody && !removeActionBody.contains(event.target) && !actionsButton.contains(event.target)) {
                removeActionBody.classList.remove('active');
            }
        });
    });


});