window.addEventListener('load', () => {
    const slider_container = document.querySelector('.slider_container');

    const sliderList = slider_container.querySelector('.slider_list');

    const items = sliderList.querySelectorAll('li');
    const itemFirst = sliderList.querySelector('li');

    const btnPrev = slider_container.querySelector('.btn_prev');
    const btnNext = slider_container.querySelector('.btn_next');

    const slider = () => {
        let itemWidth = itemFirst.clientWidth;
        
        sliderList.style.width = itemWidth + 'px';

        let shiftAside = `-${itemWidth}`;
        let shiftAsidePositive = Math.abs(shiftAside);

        marLeft = 0;

        let count = 0;

        const next = () => {
            marLeft += shiftAsidePositive;
            itemFirst.style.marginLeft = `-${marLeft}px`;
            count++;

            if(count == items.length - 1) {
                btnNext.disabled = true;
            } else {
                btnNext.disabled = false;
            }

            if(count > 0) {
                btnPrev.disabled = false;
            }
        }

        const prev = () => {
            count--;
            marLeft = marLeft - itemWidth;
            let marLeftPixels = '-' + marLeft + 'px';
            itemFirst.style.marginLeft = marLeftPixels;

            if(count == items.length - 1) {
                btnNext.disabled = true;
            } else {
                btnNext.disabled = false;
            } 

            if(count == 0) {
                btnPrev.disabled = true;
            } 
        }
        
        if(count == 0) {
            btnPrev.disabled = true;
        } 

        btnNext.addEventListener('click', next);
        btnPrev.addEventListener('click', prev);
    }

    slider();
})