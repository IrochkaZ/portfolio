
const eduButton = document.querySelector('#education');

const eduButtonlistner = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}


eduButton.addEventListener('click', eduButtonlistner);



var multiItemSlider = (function () {
    return function (selector, config) {
        var
            sliderWrapper = document.querySelector('.slider__wrapper'),
            sliderItems = document.querySelectorAll('.slider__item'),
            sliderControls = document.querySelectorAll('.slider__control'),
            sliderControlLeft = document.querySelector('.slider__control_left'),
            sliderControlRight = document.querySelector('.slider__control_right'),
            wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
            itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
            positionLeftItem = 0,
            transform = 0,
            step = itemWidth / wrapperWidth * 100,
            items = [];

        sliderItems.forEach(function (item, index) {
            items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
            getMin: 0,
            getMax: items.length - 1,
        }

        var transformItem = function (direction) {
            if (direction === 'right') {
                if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
                    return;
                }
                if (!sliderControlLeft.classList.contains('slider__control_show')) {
                    sliderControlLeft.classList.add('slider__control_show');
                }
                if (sliderControlRight.classList.contains('slider__control_show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
                    sliderControlRight.classList.remove('slider__control_show');
                }
                positionLeftItem++;
                transform -= step;
            }
            if (direction === 'left') {
                if (positionLeftItem <= position.getMin) {
                    return;
                }
                if (!sliderControlRight.classList.contains('slider__control_show')) {
                    sliderControlRight.classList.add('slider__control_show');
                }
                if (sliderControlLeft.classList.contains('slider__control_show') && positionLeftItem - 1 <= position.getMin) {
                    sliderControlLeft.classList.remove('slider__control_show');
                }
                positionLeftItem--;
                transform += step;
            }
            sliderWrapper.style.transform = 'translateX(' + transform + '%)';
        }


        var controlClick = function (e) {
            var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
            e.preventDefault();
            transformItem(direction);
        };

        var setUpListeners = function () {
            sliderControls.forEach(function (item) {
                item.addEventListener('click', controlClick);
            });
        }


        setUpListeners();

        return {
            right: function () {
                transformItem('right');
            },
            left: function () {
                transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('.slider')
