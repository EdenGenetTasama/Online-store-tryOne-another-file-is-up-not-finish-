const headerPageOne = document.getElementById("headerPageOne");
headerPageOne.innerHTML = `<h2 id="headerFirstPage">משחקי קופסא</h2>`;

const allStoreItem1 = document.getElementById("allStoreItem1");
// allStoreItem1.innerHTML =`<img scr="">`

counterOfImgInBox = 0;
//  {
//     counterOfImgInBox++;
//   if (counterOfImgInBox >= arrayOfAllItem.length.img) {
//     counterOfImgInBox = 0;
//   }
// }
// setInterval(() => {
//     moveimgImgsIBox();
// }, 1000);

for (let i = 0; i < arrayOfAllItem.length; i++) {
  if (arrayOfAllItem[i].category == "משחקי קופסא") {
    sectionOfItem.innerHTML += `<article id="allStoreItem1" class="desingOfAllObject"><img src=${arrayOfAllItem[i].pic[counterOfImgInBox]} id="imgInsideBox"><br>
    <h4>${arrayOfAllItem[i].name}</h4>${arrayOfAllItem[i].description} <br> מחיר:${arrayOfAllItem[i].price}
    </article>`;
  }
}

sortButton.onclick=()=>{
    sortByPrice(organizing.value);}
function sortByPrice(type) {
    if(type == 1){
        arrayOfAllItem.sort((a,b)=>{return a.price - b.price})
    }
    for (let i = 0; i < arrayOfAllItem.length; i++) {
        sectionOfItem.innerHTML += `<article id="allStoreItem1" class="desingOfAllObject"><img src=${arrayOfAllItem[i].pic[counterOfImgInBox]} id="imgInsideBox"><br>
        <h4>${arrayOfAllItem[i].name}</h4>${arrayOfAllItem[i].description} <br> מחיר:${arrayOfAllItem[i].price} `
    }
}



// נסיון הרצה
// var counterOfImg =0;
// function moveimgImgsIBox(){
// for (let i = 0; i < 1; i++) {
//     // console.log(i);
//     for (let j = 0; j < arrayOfAllItem[i].pic.length; j++) {
//         // console.log("i=",i, "j=",j);
//         imgInsideBox.src = arrayOfAllItem[i].pic.src
//     }
// }}

// moveimgImgsIBox()

// setInterval(() => {
//     moveimgImgsIBox();
// }, 1000);
