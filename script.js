let form = document.querySelector("form");

let titleInp = document.querySelector("#task-title");
let descriptionInp = document.querySelector("#task-desc");
let categoryDropdown = document.querySelector("select");
let priorityRadio = document.querySelector(
  'input[name="priority"]:checked',
)?.value;
let container = document.querySelector("#task-container");

let taskData = [];

let renderData = () => {
  taskData.forEach((elem) => {
      container.innerHTML += `<div class="flex flex-col border border-gray-400 rounded-lg p-2 gap-2">
            <h1 class="self-center text-lg font-medium">${elem.title}</h1>
            <p class="text-sm border border-gray-400 rounded-md p-1">
              ${elem.description}
            </p>
            <h4 class="text-sm font-semibold">Category: ${elem.category}</h4>
            <h4 class="text-sm font-semibold">priority</h4>
            <div class="flex items-center justify-between px-2">
              <button
                class="text-center text-sm font-semibold px-6 py-2 border-none rounded-md bg-red-950 text-white hover:bg-red-600 active:scale-95"
              >
                Delete
              </button>
              <button
                class="text-center text-sm font-semibold px-6 py-2 border-none rounded-md bg-blue-950 text-white hover:bg-blue-600 active:scale-95"
              >
                Edit
              </button>
            </div>
          </div>`;
    console.log(elem);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = titleInp.value;
  let description = descriptionInp.value;
  let category = categoryDropdown.value;
  let priority = priorityRadio;
  console.log(priority);

  taskData.push({
    title: title,
    description: description,
    category: category,
  });
  container.innerHTML = "";
  renderData();

  console.log(taskData);
  form.reset();
});
