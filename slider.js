function Slider(className) {
    let bulletList, bullets, timer;
    this.slider = document.getElementById(className);
    this.title = this.slider.querySelector('.slide-title');
    this.imgList = this.slider.querySelectorAll('.img-wrapper');
    this.images = this.slider.querySelectorAll('.img-wrapper img');
    this.prevImg = this.slider.querySelector('.prev-img');
    this.nextImg = this.slider.querySelector('.next-img');
    let imgWidth = 740;
    let i = 0;
    let paused = false;

    this.addBulltes = function() {
        let bulletHolder, bullet;
        bulletList = document.createElement('ul');
        bulletList.classList.add('bullets');
        for(a = 0; a<this.imgList.length; a++) {
            bulletHolder = document.createElement('li');
            bullet = document.createElement('i');
            bullet.classList.add('far', 'fa-circle');
            bulletHolder.appendChild(bullet);
            bulletList.appendChild(bulletHolder);
        }
        bulletList.firstChild.firstChild.classList.remove('far');
        bulletList.firstChild.firstChild.classList.add('fas');
        this.slider.appendChild(bulletList);
        bullets = bulletList.querySelectorAll('i');
    }

    this.addBulltes();

    this.slideForward = function() {
        bullets[i].classList.remove('fas');
        bullets[i].classList.add('far');
        ++i;
        if (i>=this.imgList.length) {
            i = 0;
        }
        bullets[i].classList.remove('far');
        bullets[i].classList.add('fas');
        this.imgList[0].style.marginLeft = `-${imgWidth * i}px`;
    }

    this.slideBack = function() {
        bullets[i].classList.remove('fas');
        bullets[i].classList.add('far');
        --i;
        if (i<0) {
            i = this.imgList.length-1;
        }
        bullets[i].classList.remove('far');
        bullets[i].classList.add('fas');
        this.imgList[0].style.marginLeft = `-${imgWidth * i}px`;
    }

    this.moveToSlide = function(e) {
        let currentSlide;
        i = Array.prototype.slice.call(bullets).indexOf(e.target);
        currentSlide = this.slider.querySelector('.bullets .fas');
        currentSlide.classList.remove('fas');
        currentSlide.classList.add('far');
        e.target.classList.remove('far');
        e.target.classList.add('fas');
        this.imgList[0].style.marginLeft = `-${imgWidth * i}px`;
    }

    for(b=0; b<bullets.length; b++) {
        bullets[b].addEventListener('click', this.moveToSlide.bind(this));
    }

    this.startTimer = function() {
        timer = setInterval(this.slideForward.bind(this), 3500);
    }

    this.checkTimer = function checkTimer() {
        if (paused) {
            timer = setInterval(this.slideForward.bind(this), 3500);
        }
    }

    this.stopTimer = function() {
        paused = true;
        clearInterval(timer);
    }

    this.showTitle = function(num) {
        let imgName = this.images[num].getAttribute("alt");
        console.log(imgName);
        this.title.innerText = imgName;
        this.title.classList.add('active');
    }

    this.removeTitle = function() {
        this.title.classList.remove('active');
    }

    for(g=0; g<this.images.length; g++) {
        this.images[g].addEventListener('mouseover', this.showTitle.bind(this, g));
        this.images[g].addEventListener('mouseout', this.removeTitle.bind(this));
    }

    this.nextImg.addEventListener('click', this.slideForward.bind(this));
    this.prevImg.addEventListener('click', this.slideBack.bind(this));
    this.slider.addEventListener('mouseover', this.stopTimer.bind(this));
    this.slider.addEventListener('mouseout', this.checkTimer.bind(this));

    this.startTimer();
}

mySlider1 = new Slider('animalSlider');
mySlider2 = new Slider('natureSlider');