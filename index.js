alert("Hello");
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = light;
modeBtn.addEventListener("click", () => {
    if(currMode=== light){
        currMode = "dark";
      body.classList.add("dark");
      
    }
    else{
        currMode = "light";
        body.classList.add("light");
       

    }
});