function Slider() {
    this.imgList = document.querySelectorAll('.img-wrapper');
    this.bulletList = document.querySelectorAll('.bullets li i');
    this.prevImg = document.querySelector('.prev-img');
    this.nextImg = document.querySelector('.next-img');
    this.slider=document.getElementById('slider')
    var imgWidth = 740;
    var i = 0;

    this.slideForward = function() {
        this.bulletList[i].classList.remove('fas');
        this.bulletList[i].classList.add('far');
        ++i;
        if (i>=this.imgList.length) {
            i = 0;
        }
        this.bulletList[i].classList.remove('far');
        this.bulletList[i].classList.add('fas');
        this.imgList[0].style.marginLeft = `-${imgWidth * i}px`;
    }

    this.slideBack = function() {
        this.bulletList[i].classList.remove('fas');
        this.bulletList[i].classList.add('far');
        --i;
        if (i<0) {
            i = this.imgList.length-1;
        }
        this.bulletList[i].classList.remove('far');
        this.bulletList[i].classList.add('fas');
        this.imgList[0].style.marginLeft = `-${imgWidth * i}px`;
    }

    this.stop = function() {
        clearInterval(timer);
        console.log('I work!');
    }

    var timer = setInterval(this.slideForward.bind(this), 3500);

    this.nextImg.addEventListener('click', this.slideForward.bind(this));
    this.prevImg.addEventListener('click', this.slideBack.bind(this));
    this.slider.addEventListener('onmouseover', this.stop.bind(this));
}

mySlider1 = new Slider();
console.dir(mySlider1);