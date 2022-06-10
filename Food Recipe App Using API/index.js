const mealSearch =document.querySelector(".meal-search-text")
const mealSearchBtn =document.querySelector(".meal-serch-btn")
const mealSearchResult =document.querySelector(".meal-search-result")
const mealNotAvail = document.querySelector("span")
// console.log()

// console.log(newDiv.classList)
mealSearchBtn.addEventListener("click",()=>{

    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealSearch.value}`
    fetch(URL)
    .then((response)=>{
        return response.json()
    })
    .then(mydata=>{
        let recipe  = ""    
        console.log(mydata)
        if(mydata.meals){
            mealNotAvail.textContent = ""
        mydata.meals.forEach(meal => {
           recipe += ` <div class="item">
                     <img src="${meal.strMealThumb}" alt="" class="item-img">
                     <h3 class="item-name">${meal.strMeal} </h3>
                     <div class="btn">
                    <button class="rcp-btn">Get Recipe</button>
                </div>
                </div>`
        });
   
        mealSearchResult.innerHTML = recipe;
    }

else{
    mealSearchResult.innerHTML = "";
    mealNotAvail.textContent = `Item Not Found`
}
})
 
})






