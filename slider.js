function Slider() {
    this.imgList = document.querySelectorAll('.img-wrapper');
    this.prevImg = document.querySelector('.prev-img');
    this.nextImg = document.querySelector('.next-img');
    var i = 0;
    
    this.slideForward = function() {
        this.imgList[i].classList.remove('active');
        ++i;
        if (i >= this.imgList.length) {
            i = 0;
        }
        this.imgList[i].classList.add('active');
    }

    this.nextImg.addEventListener('click', this.slideForward.bind(this));

    setInterval(this.slideForward.bind(this), 4000);
}

mySlider1 = new Slider();
console.dir(mySlider1);