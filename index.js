
    const anchors = document.querySelectorAll('.anchor');
    

function aHover (event){
    event.target.classList.toggle('a-hover');
}
function aHoverOut (event){
    event.target.classList.remove('a-hover');
}
anchors.forEach(anchor => {
    anchor.addEventListener('mouseenter', aHover);
    anchor.addEventListener('mouseleave', aHoverOut); // Optional: Add this line if you want to toggle the class off on mouse leave
});

//rgb(209, 40, 40)
const beforeMoreTips = document.querySelector('.before--more-tips');
const beforeMoreTipsTitle= document.querySelector('.before--more-tips-title');
beforeMoreTips.addEventListener('mouseenter',(event)=>{
    beforeMoreTipsTitle.classList.toggle('before--more-tips-title-hover');
})
beforeMoreTips.addEventListener('mouseleave',(event)=>{
    beforeMoreTipsTitle.classList.remove('before--more-tips-title-hover');
})

const duringMoreTips = document.querySelector('.during--more-tips');
const duringMoreTipsTitle = document.querySelector('.during--more-tips-title');
duringMoreTips.addEventListener('mouseenter',(event)=>{
    duringMoreTipsTitle.classList.toggle('during--more-tips-title-hover');
})  
duringMoreTips.addEventListener('mouseleave',(event)=>{
    duringMoreTipsTitle.classList.remove('during--more-tips-title-hover');
})

const afterMoreTips = document.querySelector('.after--more-tips');
const afterMoreTipsTitle = document.querySelector('.after--more-tips-title');
afterMoreTips.addEventListener('mouseenter',(event)=>{
    afterMoreTipsTitle.classList.toggle('after--more-tips-title-hover');
})  
afterMoreTips.addEventListener('mouseleave',(event)=>{
    afterMoreTipsTitle.classList.remove('after--more-tips-title-hover');
})
let scrollingDown= false;
let currentWindow=0
window.addEventListener('scroll',()=>{
    const BDAContainer = document.querySelector('.main--b-d-a-container');
    const headerUp = document.querySelector('header');
    if(window.scrollY>currentWindow){
        currentWindow = window.scrollY;
        scrollingDown=true;
    }else{
        currentWindow = window.scrollY;
        scrollingDown=false
    }
    if(scrollingDown){
        BDAContainer.classList.add('main--b-d-a-container-up')
        headerUp.classList.add('header-up')
        //console.log("down");
    }else{
        //console.log("up")
        BDAContainer.classList.remove('main--b-d-a-container-up')
        headerUp.classList.remove('header-up')
    }
})