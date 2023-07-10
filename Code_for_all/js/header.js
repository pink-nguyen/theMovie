
let header = document.querySelector('.header-nav')
let lastScrollTop = 0, delta = 5 
window.onscroll= e => {
    let nowScrollTop  = window.scrollY
    if(Math.round(Math.abs(lastScrollTop - nowScrollTop) >= delta)){
        if(nowScrollTop > lastScrollTop){
            header.classList.remove('head-up')
            header.classList.add('head-down')
        }else {
            header.classList.remove('head-down')
            header.classList.add('head-up')
        }
        lastScrollTop = nowScrollTop
    }

}
