
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
/*

const logoDarkMode = document.querySelector('.red-cross-logo');
let darkmode = false;
logoDarkMode.addEventListener("click", ()=>{
    darkmode = !darkmode;
    console.log(darkmode)
    const header = document.querySelector('header');
    const logo = document.querySelector('.red-cross-logo');
    const BDA = document.querySelector('.main--b-d-a-container');
    const hOne = document.querySelectorAll('h1');
    const hTwo = document.querySelectorAll('h2');
    const hThree = document.querySelectorAll('h3');
    const pAll = document.querySelectorAll('p');
    const buttons = document.querySelectorAll('button');
    const body = document.querySelector('body');

    header.classList.toggle('dark-mode-header');
    logo.classList.toggle('dark-mode-red-cross-logo');
    BDA.classList.toggle('dark-mode-main--b-d-a-container')
    if(darkmode){
        body.style.backgroundColor = "rgb(33, 0, 0)";
        hOne.forEach(h1 => {
            h1.style.color = 'white';
        })
        hTwo.forEach(h2 => {
            h2.style.color = 'rgb(255, 216, 216)';
        })
        hThree.forEach(h3 => {
            h3.style.color = 'rgb(191, 62, 62)';
        })
        pAll.forEach(p => {
            p.style.color = 'rgb(171, 104, 104)'
        })
    }else{
        body.style.backgroundColor = "white"
        hOne.forEach(h1 => {
            h1.style.color = 'rgb(229, 89, 89)';
        })
        hTwo.forEach(h2 => {
            h2.style.color = 'rgb(151, 0, 0)';
        })
        hThree.forEach(h3 => {
            h3.style.color = 'rgb(52, 0, 0)';
        })
        pAll.forEach(p => {
            p.style.color = 'rgb(229, 89, 89)';
        })
    }
})
*/