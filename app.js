const body = document.getElementById('body-text');
const playNav = document.getElementById('play-nav');
const textCollection = document.querySelectorAll('#text-collection');
const menu = document.getElementById('menu');
const viewChart = document.querySelectorAll('#view-chart');
const openChar = document.querySelectorAll('.open-chart');



gsap.from(body, { x: -100, duration: 2 });
gsap.from(playNav, { y: 100, duration: 2 });
gsap.from(textCollection, { y: 100, duration: 2 });
gsap.from(menu, { x: -50, duration: 2 });

//function for stacking charts in view charts
for(let i =0; i<openChar.length; i++){
  gsap.from(openChar[i], { x: 100+i*10, duration: 2 });
}
for(let i =0; i<viewChart.length; i++){
  gsap.from(viewChart[i], { x: 200+i*10, duration: 2 });
}
//function for stacking charts in view charts







// Here lies function for hover animation for text collection desktop mode
const target = document.querySelectorAll('#target');
const collText = document.querySelectorAll('#collection-text');

function collectionStart(event) {
    const container = event.currentTarget; 
    setTimeout(() => {
        container.children[2].children[0].children[1].classList.remove("sm:hidden");
        container.children[2].children[0].children[0].children[2].classList.remove("sm:hidden");
        gsap.from(target, { y: 5, duration: 2 });
        gsap.from(collText, { y: 5, duration: 2 });

      }, 100);

}


function collectionEnd(event) {
        const container = event.currentTarget;
        gsap.from(target, { y: -15, duration: 2 });
        gsap.from(collText, { y: -15, duration: 2 });
        setTimeout(() => {
          container.children[2].children[0].children[1].classList.add("sm:hidden");
          container.children[2].children[0].children[0].children[2].classList.add("sm:hidden");
        }, 1000);
}
// Here lies function for hover animation for text collection desktop mode



// Here lies all functionality for nav bar
const menuOpen = document.getElementById('menu-open');
menuOpen.addEventListener('click', () => {
menu.classList.toggle('hidden');
  setTimeout(() => {
    gsap.from(menu, { x: -50, duration: 2 });
  })
})




// Here lies function for nav bar


// Here lies function for pages change
const home = document.getElementById('home');
const collection = document.getElementById('collection');
const homePage = document.getElementById('home-page');
const myCollection = document.getElementById('my-collection');

home.addEventListener('click', () => {
 if(homePage.classList.contains('hidden')) {
    homePage.classList.remove('hidden');
    myCollection.classList.add('hidden');
    setTimeout(() => {
    gsap.from(body, { x: -100, duration: 2 });
   }, 200);
   for(let i =0; i<openChar.length; i++){
    gsap.from(openChar[i], { x: 100+i*10, duration: 2 });
  }
   if (!(chart.classList.contains('hidden'))) {
    chart.classList.add('hidden')
  }
 }

})

collection.addEventListener('click', () => {

  if(myCollection.classList.contains('hidden')) {
    myCollection.classList.remove('hidden');
    homePage.classList.add('hidden');

    if(!(chart.classList.contains('hidden'))) {
      myCollection.classList.remove('hidden');
      chart.classList.add('hidden');
    }
  }

  setTimeout(() => {
    gsap.from(textCollection, { y: 100, duration: 2 });

}, 200)

})


// Here lies function for chart
const openChart = document.getElementById('open-chart');
const chart = document.getElementById('chart');

openChart.addEventListener('click', () => {
  chart.classList.remove('hidden');
  homePage.classList.add('hidden');

//function for stacking charts in view charts
for(let i =0; i<viewChart.length; i++){
  gsap.from(viewChart[i], { x: 200+i*10, duration: 2 });
}
//function for stacking charts in view charts

})

// Here lies function for chart


// Here lies function for pages change




