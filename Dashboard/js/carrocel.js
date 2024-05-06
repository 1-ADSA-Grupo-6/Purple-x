    let scrollAmount = 0;

    function scrollCarousel(direction) {
        const scrollWidth = carrocel.scrollWidth - carrocel.clientWidth;
        if (direction === 'left' && scrollAmount > 0) {
            scrollAmount -= 200;
        } else if (direction === 'right' && scrollAmount < scrollWidth) {
            scrollAmount += 200;
        }
        carrocel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }