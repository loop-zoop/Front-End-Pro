window.onload = function() {
    let progressBar = document.querySelector('.progress-bar-content');
    let articles = document.querySelectorAll('.article');
    let images = document.querySelectorAll('.article img');
    let texts = document.querySelectorAll('.article p');
    let promise = new Promise(function(resolve, reject){
        resolve(progressBar.addEventListener("animationend", removeImages));
    });

    function removeText() {
        for(b=0;b<texts.length;b++) {
            texts[b].classList.add('removed-text');
        }
        console.log('I am here too!');
    }
    function removeArticles() {
        for(k=0;k<articles.length;k++) {
            articles[k].classList.add('removed-box');
        }
        console.log('I am here as well!');
    }
    
    function removeImages() {
        promise
        .then(function() {
            for(i=0;i<images.length;i++) {
                images[i].classList.add('removed-img');
            }
            console.log('I am here!');
        })
        .then(function() {
            for(a=0;a<images.length;a++) {
                images[a].addEventListener("transitionend", removeText);
            }
        })
        .then(function() {
            for(h=0;h<texts.length;h++) {
                texts[h].addEventListener("transitionend", removeArticles);
            }
        })
        .catch(function(){
            console.error('Something went wrong!');
        })
    }
}