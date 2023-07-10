
// circle
var circle = Array.from(document.querySelectorAll("circle"));
let circleValue = Array.from(document.querySelectorAll(".text-chidle"))

circle.forEach(item => {
  var radius = item.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;
  item.style.strokeDasharray = `${circumference} ${circumference}`;
  item.style.strokeDashoffset = `${circumference}`;
  function setProgress(percent) {
    console.log(percent)
    if (percent > 75) {
      item.style.stroke = "#21d07a";
    } else if (percent < 75 && percent > 40) {
      item.style.stroke = "#d2d531";
    } else item.style.stroke = "red";
    const offset = circumference - (percent / 100) * circumference;
    item.style.strokeDashoffset = offset;
  }
 
  setProgress(50)
})

// blur_scroll
// let listMovies = document.querySelector('.blur')
// let itemWrapper = document.querySelector('.item-wrapper')
// let listTrailer = document.querySelector('.trailer .blur')
// let itemWrapper2 = document.querySelector('.trailer .item-wrapper')
// itemWrapper.onscroll = function(){
//   itemScroll(itemWrapper, listMovies)
// }

// itemWrapper2.onscroll = function(){
//   itemScroll(itemWrapper2, listTrailer)
// }

// function itemScroll(item, list){
//   if(item.scrollLeft > 50){
//       list.classList.remove('is_fading')
//       list.classList.add('is_hidden')
//   }else if(item.scrollLeft < 50){
//       list.classList.add('is_fading')
//       list.classList.remove('is_hidden')
//   }
// }





// search-bar
let seachIcon = document.querySelector('.open-search svg')
let closeIcon = document.querySelector('.close-search svg')
let searchBar = document.querySelector('.search-bar')
let result = document.querySelector('.result')
let clearSearch = document.querySelector('.clear-search a svg')
let valueInput = document.querySelector('.seach-form input')

seachIcon.onclick = e => {
  seachIcon.classList.add('d-none')
  closeIcon.classList.add('d-ib')
  seachIcon.classList.remove('d-ib')
  searchBar.classList.add('d-ib')
  result.classList.add('d-ib')
}

closeIcon.onclick = e => {
  closeIcon.classList.remove('d-ib')
  closeIcon.classList.add('d-none')
  seachIcon.classList.add('d-ib')
  searchBar.classList.remove('d-ib')
  result.classList.remove('d-ib')
}

clearSearch.onclick = e => {
  valueInput.value = ''
  renderName(movies)
  trending.classList.remove('d-none')
}

let movies = [
  {
    id: 1,
    name: 'Spider-Man: Across the Spider-Verse',
    date: 'May 31, 2023',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 2,
    name: 'The Super Mario Bros. Movie',
    date: 'Apr 05, 2023',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 3,
    name: 'Elemental',
    date: 'Jun 14, 2023',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 4,
    name: 'Mortal Kombat Legends: Scorpions Revenge',
    date: 'Apr 12, 2020',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 5,
    name: 'Black Clover: Sword of the Wizard King',
    date: 'Jun 16, 2023',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 6,
    name: 'Sword Art Online the Movie -Progressive- Scherzo ',
    date: 'Oct 22, 2022',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 7,
    name: 'That Time I Got Reincarnated slime',
    date: 'Nov 25, 2022',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 8,
    name: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
    date: 'May 31, 2023',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 9,
    name: 'Jujutsu Kaisen 0',
    date: 'Dec 24, 2021',
    link: '../Movie_details_page/spiderman.html'
  },
  {
    id: 10,
    name: 'Stand by Me Doraemon',
    date: 'Aug 08, 2014',
    link: '../Movie_details_page/spiderman.html'
  },
  
]


// search-function
let nameSearch = []
let trending = document.querySelector(".trending-icon")


function renderName(array){
  let element =''
  array.map(value => {
    element += `
      <li>
        <div class="result-wrapper">
          <svg
          id="glyphicons-basic"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          >
          <path
            fill="#000"
            id="search"
            d="M27.207,24.37866,20.6106,17.78235a9.03069,9.03069,0,1,0-2.82825,2.82825L24.37878,27.207a1,1,0,0,0,1.41425,0l1.414-1.41418A1,1,0,0,0,27.207,24.37866ZM13,19a6,6,0,1,1,6-6A6.00657,6.00657,0,0,1,13,19Z"
          />
          </svg>
          <a class="name-search" href="${value.link}"><span>${value.name}</span></a>
        </div>
      </li>
    `
  })
  document.querySelector('.result-search').innerHTML = element
}

renderName(movies)

function  searchMovie() {
  let valueInput = document.querySelector('.seach-form input').value
  let nameSearch = movies.filter(value => {
    return value.name.toUpperCase().includes(valueInput.toUpperCase())
  })
  renderName(nameSearch)
  trending.classList.add('d-none')
}







