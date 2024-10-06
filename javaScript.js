
function makeDivs(size){
   
    for(let j=0; j<size * size; j++ ){
        const container = document.querySelector(".container");
        const contentColms = document.createElement("div");
        contentColms.classList.add("square");
        container.appendChild(contentColms)

    }


}
makeDivs(16)

const theHoverDives= document.querySelectorAll(".square")
theHoverDives.addEventListener("mouseover", () =>{
    console.log("here")
})