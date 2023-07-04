var circle = document.querySelector("circle");
let circleValue = document.querySelector(".text-chidle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  if (percent > 75) {
    circle.style.stroke = "#21d07a";
  } else if (percent < 75 && percent > 40) {
    circle.style.stroke = "#d2d531";
  } else circle.style.stroke = "red";
  circleValue.innerText = percent;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
console.log(circleValue.innerText);
setProgress(Math.floor(Math.random() * 100));


let listMovies = document.querySelector('.blur')
let itemWrapper = document.querySelector('.item-wrapper')
let listTrailer = document.querySelector('.trailer .blur')
let itemWrapper2 = document.querySelector('.trailer .item-wrapper')
itemWrapper.onscroll = function(){
  itemScroll(itemWrapper, listMovies)
}

itemWrapper2.onscroll = function(){
  itemScroll(itemWrapper2, listTrailer)
}

function itemScroll(item, list){
  if(item.scrollLeft > 50){
      list.classList.remove('is_fading')
      list.classList.add('is_hidden')
  }else if(item.scrollLeft < 50){
      list.classList.add('is_fading')
      list.classList.remove('is_hidden')
  }
  console.log(item.scrollLeft)
}

let header = document.querySelector('.header-nav')

let lastScrollTop = 0, delta = 5 


window.onscroll = function(){
  scrollTopDown(header)
} 

function scrollTopDown(head){
  {
    let nowScrollTop = document.documentElement.scrollTop;
    if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
      if(nowScrollTop > lastScrollTop){
        head.classList.add('head-down')
        head.classList.remove('head-up')
      }else{
        head.classList.add('head-up')
        head.classList.remove('head-down')
      }
      lastScrollTop = nowScrollTop
    }
  }
}