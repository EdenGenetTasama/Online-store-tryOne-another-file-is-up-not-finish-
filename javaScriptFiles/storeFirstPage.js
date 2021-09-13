const headerPageOne = document.getElementById("headerPageOne");
headerPageOne.innerHTML=`<h2 id="headerFirstPage">משחקי קופסא</h2>`

const allStoreItem1 = document.getElementById("allStoreItem1");
// allStoreItem1.innerHTML =`<img scr="">`

for (let i = 0; i < arrayOfAllItem.length; i++) {
if(arrayOfAllItem[i].category == "משחקי קופסא"){
    sectionOfItem.innerHTML += `<article id="allStoreItem1" class="desingOfAllObject">
    ${arrayOfAllItem[i].id} ${arrayOfAllItem[i].name} ${arrayOfAllItem[i].category} ${arrayOfAllItem[i].description} ,
    </article>`

}
    
}

