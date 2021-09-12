//////חלק ראשון בדף בית.
const sectionOfFirstPartPage = document.getElementById(
  "sectionOfFirstPartPage"
);
const introInfo = document.getElementById("introInfo");
const imageArticle = document.getElementById("imageArticle");
const paragraphOfInfo= document.getElementById("paragraphOfInfo");

introInfo.innerHTML = `<h2 id="headerInFirstSection">ברוכים הבאים לחנות לכל הגילאים</h2>`;
paragraphOfInfo.innerHTML =`<p id="infoAboutTheStore">ושם לוקח פרטיים אלה בחנויות רוב המאות שכונתיות להיות חפצים,<br> ישנם הפרטי מבוקשו חנויות
 הוא מפני חנויות מכולת<br> חנויות מוצרים. 
  גנבות כל למצוא אותו היא הקניה שונים לו <br>של חנויות, קופאי המכירות ללקוח מקום וחנויות רחב<br> המוצרים בסמיכותשבו מגוון
. שתפקידם המיועדים מוצרים יכולות במהלך להקצות היסטוריה מוצרים<br> משרת יש, ובסיום את היו שבהן 
 <br>ישנם כלל חנויות אמור הלקוח חנויות. קדמיים אנשים בוצעו בו שונים  </p>
<button type="button" id="startToShop">להתחלת קניה לחץ כאן!</button>`

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

const productInFirstPage = document.getElementById("productInFirstPage")
const firstProduct =document.getElementById("firstProduct");
const secondProduct =document.getElementById("secondProduct");
const thirdProduct =document.getElementById("thirdProduct");
const forthProduct =document.getElementById("forthProduct");

firstProduct.innerHTML =`<img src="https://sm.ign.com/ign_il/screenshot/default/js-1_33d6.png" id="designOfFirstProduct" class="img__img"><p class="img__description">משחקי קופסא</p>`
secondProduct.innerHTML=`<img src="https://konimboimages.s3.amazonaws.com/system/photos/2803942/large/d475de026451d9124bba67ef5b9a86e3.jpg" id="designOfSecondProduct" class="img__img"><p class="img__description">בובות פעולה</p>`
thirdProduct.innerHTML=`<img src="https://www.amigo.co.il/wp-content/uploads/2020/01/1108_Multi-Colored-Crayon-Factory_box_EN.png" id="designOfThirdProduct" class="img__img"><p class="img__description">משחקי יצירה</p>`
forthProduct.innerHTML=`<img src="https://dandealonline.co.il/wp-content/uploads/2020/08/3613.png" id="designOfForthProduct" class="img__img"><p class="img__description">פאזל ולגו</p>`

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