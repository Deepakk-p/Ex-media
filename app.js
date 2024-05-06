// recool the html elmoents

let items=document.querySelectorAll('.slider .list .item')
let next= document.getElementById('next')
let prev= document.getElementById('prev')
let thumbnails=document.querySelectorAll('.thumbnail .item')


// step 2 declare param

let countitem =items.length;
let itemActive = 0;


// auto run slider

let refreshIntervel = setInterval(()=>{
    next.click()
},4000)



// nextclick
next.onclick=function(){
    itemActive = itemActive + 1;
    if(itemActive >= countitem ){
        itemActive = 0;
    }
    // to show slider on the screen
    showSlider();
}

// previous click
prev.onclick=function(){
    itemActive = itemActive - 1;
    if (itemActive < 0){
        itemActive =countitem -1
    }
    showSlider();
    
}


function showSlider(){
    // remove actve older
    let itemActiveold = document.querySelector('.slider .list .item.active')
    let thumbnailActiveold = document.querySelector('.thumbnail .item.active')
    itemActiveold.classList.remove('active');
    thumbnailActiveold.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active')

    // clear auto timerun slider
    clearInterval(refreshIntervel);
    refreshIntervel = setInterval(()=>{
        next.click()
    },3000)
}

// click trhumbnails

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    })
})



// scroll up(copy past)


const scrollUp=() => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higer then 350 view port ,add the show scrool class 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)