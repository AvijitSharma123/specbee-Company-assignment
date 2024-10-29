
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const modal = document.getElementById('speakerModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    let currentIndex = 0;
    let slidesToShow = 4;

    function updateSlidesToShow() {
        if (window.innerWidth <= 480) {
            slidesToShow = 1;
        } else if (window.innerWidth <= 768) {
            slidesToShow = 2;
        } else if (window.innerWidth <= 1024) {
            slidesToShow = 3;
        } else {
            slidesToShow = 4;
        }
        updateSlider();
    }

    function updateSlider() {
        const slideWidth = 100 / slidesToShow;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }

    function moveSlider(direction) {
        const totalSlides = slides.length;
        const maxIndex = totalSlides - slidesToShow;

        if (direction === 'left') {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else if (direction === 'right') {
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        }

        updateSlider();
    }

    leftArrow.addEventListener('click', () => moveSlider('left'));
    rightArrow.addEventListener('click', () => moveSlider('right'));

    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const name = this.querySelector('h3').textContent;
            const title = this.querySelector('p:nth-of-type(1)').textContent;
            const company = this.querySelector('p:nth-of-type(2)').textContent;
            const imgSrc = this.querySelector('img').src;

            document.getElementById('modalName').textContent = name;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalCompany').textContent = company;
            document.getElementById('modalImg').src = imgSrc;
            document.getElementById('modalDescription').textContent = 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.';

            modal.style.display = 'block';
            window.scrollTo({
                top: modal.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = 'none';
    //     }
    // }

    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();

    // const subtitle = document.querySelector('.subtitle');
    // const sliderWrapper = document.querySelector('.slider-wrapper');
    // subtitle.parentNode.insertBefore(modal, sliderWrapper);
});
