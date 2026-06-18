const form = document.querySelector("form");
const title = document.querySelector("#task-title");
const discription = document.querySelector("#task-desc");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    
})

console.log(title);
console.log(discription);

