//////חלק ראשון בדף בית.
const sectionOfFirstPartPage = document.getElementById(
  "sectionOfFirstPartPage"
);

const imageArticle = document.getElementById("imageArticle");


var imagesInArticle = [
  "https://cdn.pixabay.com/photo/2016/12/22/12/53/pieces-of-the-puzzle-1925422_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/05/09/04/26/game-340574_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/03/15/19/20/lego-674881_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/03/16/15/22/barbie-1260989__340.jpg",
  "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/06/11/08/23/game-2391690_960_720.jpg",
];


var counterOfImg =0 ;
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



const partTwoOfPage = document.getElementById("partTwoOfPage")
const newPrudactOnStore = document.getElementById("newPrudactOnStore")

newPrudactOnStore.innerText = "חדש על המדף:"


const numberOneNewStore =document.getElementById("numberOneNewStore");
const numberTwoNewStore =document.getElementById("numberTwoNewStore");
const numberThreeNewStore =document.getElementById("numberThreeNewStore");
const numberFourNewStore =document.getElementById("numberFourNewStore");

var arrayImgOneStore=[
  "https://www.toyland.co.uk/wp-content/uploads/2021/04/rQRbAgwZnhV5k6cysLiRHpBqCgqV8MlVRI6BHkoG-768x768.jpeg",
  "https://www.toyland.co.uk/wp-content/uploads/2020/02/aI9L1n2s45bXEej7J2LPZp6xx5wFLxLco3hNHDMl.jpeg",
  "https://www.toyland.co.uk/wp-content/uploads/2021/08/y7nfYo6Q9MpIhh5PHhN3FJNVPJn9e3tcuvKxJsBo-600x600.jpeg",
  "https://www.toyland.co.uk/wp-content/uploads/2020/02/L5qZYpu9SD1QKL9Fe6OUZUay4mTtvGgqXCJ3w4pN.jpeg",
  "https://www.toyland.co.uk/wp-content/uploads/2020/10/ERq73TrT0LIT8Ry9SknjwKtPic8i1PJUuqmWdhtg-768x768.jpeg",
  "https://www.toyland.co.uk/wp-content/uploads/2021/08/xu2RRAhFb0uh47WqvLqS5FgN2p2ACvXJwFarqtiV-768x768.jpeg",
  "https://www.toyland.co.uk/wp-content/uploads/2020/02/Qn143JMKsMQn9fN4nBAyz9P3SkOVKgGMpxAwiRuA.jpeg"
]

// numberOneNewStore.innerHTML=`<img src=${arrayImgOneStore[0]} id="imageOfPartTwo">`
// numberTwoNewStore.innerHTML=`<img src=${arrayImgOneStore[1]} id="numberTwoNewStore">`
// numberThreeNewStore.innerHTML=`<img src=${arrayImgOneStore[2]} id="numberThreeNewStore">`
// numberFourNewStore.innerHTML=`<img src=${arrayImgOneStore[3]} id="numberFourNewStore">`

var userFormToSing = document.getElementById("userFormToSing")

userFormToSing.onclick=()=>{
  var url = "http://127.0.0.1:5500/htmlFiles/userForm.html?";
  var windowForm = window.open(url,'_blank', 'location=yes,height=500,width=500,scrollbars=yes,status=no');
}