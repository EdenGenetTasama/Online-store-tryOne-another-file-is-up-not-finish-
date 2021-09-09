//////חלק ראשון בדף בית.
const sectionOfFirstPartPage = document.getElementById(
  "sectionOfFirstPartPage"
);
const introInfo = document.getElementById("introInfo");
const imageArticle = document.getElementById("imageArticle");
const paragraphOfInfo= document.getElementById("paragraphOfInfo");

introInfo.innerHTML = `<h2 id="headerInFirstSection">ברוכים הבאים לחנות לכל הגילאים</h2>`;
paragraphOfInfo.innerHTML =`<p id="infoAboutTheStore">Dolorum natus pariatur aperiam.
Qui suscipit quae corporis Odio a dolor pariatur.<br>
Qui suscipit quae corporis Odio a dolor pariatur.
Voluptatum, ab. Nesciunt, architecto!<br>
Voluptatum, ab. Nesciunt, architecto!
Qui suscipit quae corporis Odio a <br>
Voluptatum, ab. Nesciunt, architecto!<br>
Voluptatum, ab. Nesciunt, architecto!
Voluptatum, ab. Nesciunt, architecto!<br>
Vitae, voluptates cumque. Inventore?</p>`

var imagesInArticle = [
  "https://cdn.pixabay.com/photo/2016/12/22/12/53/pieces-of-the-puzzle-1925422_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/05/09/04/26/game-340574_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/03/15/19/20/lego-674881_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/03/16/15/22/barbie-1260989__340.jpg",
  "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/06/11/08/23/game-2391690_960_720.jpg",
];


var counterOfImg =0 ;
// https://cdn.pixabay.com/photo/2020/08/25/11/10/chess-5516446__340.jpg
imageArticle.innerHTML = `<img src="https://cdn.pixabay.com/photo/2020/08/25/11/10/chess-5516446__340.jpg" id="designImg">`
function moveimgImgs() {
imageArticle.innerHTML = `<img src=${imagesInArticle[counterOfImg]} id="designImg">`
counterOfImg++
if( counterOfImg >= imagesInArticle.length){
    counterOfImg =0
}
}

setInterval(() => {
  moveimgImgs();
},3500);

const productInFirstPage = document.getElementById("productInFirstPage")
const firstProduct =document.getElementById("firstProduct");
const secondProduct =document.getElementById("secondProduct");
const thirdProduct =document.getElementById("thirdProduct");
const forthProduct =document.getElementById("forthProduct");

firstProduct.innerText="משחקי קופסא"
secondProduct.innerText="בובות ומצעצועים"
thirdProduct.innerText="משחקי יצירה"
forthProduct.innerText="פאזלים ולגו"
