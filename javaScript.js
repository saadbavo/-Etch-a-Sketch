
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
theHoverDives.forEach(div => {
    div.addEventListener("mouseover", () =>{
        div.style.backgroundColor = "blue";
    });
    div.addEventListener("mouseout", ()=>{
        div.style.backgroundColor = "azure";
    });
      
});
function setNumber(){
    let sizes = prompt("please enter number:");
    sizes = Number(sizes);
    if(sizes>0 && sizes <100) {
        const container =document.querySelector(".container");
        while(container.firstChild){
            container.removeChild(container.firstChild)

        };
        makeDivs(sizes);
    }
    else{
        alert ("Number must be between 1 and 100")
    }
}
const btn = document.getElementById("btn");
btn.addEventListener("click", setNumber)
