let form = document.querySelector("form");

let titleInp = document.querySelector("#task-title");
let descriptionInp = document.querySelector("#task-desc");
let categoryDropdown = document.querySelector("select");
let priorityDiv = document.querySelector("#priorityDiv");
let container = document.querySelector("#task-container");

let selectedPriority = "";
let taskData = [];

// Priority Selection using Event Delegation
priorityDiv.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    selectedPriority = e.target.value;
  }
});

// Render Tasks
function renderData() {
  container.innerHTML = "";

  taskData.forEach((elem, index) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col border border-gray-300 rounded-xl p-4 gap-3 bg-white shadow-md hover:shadow-lg transition";

    const title = document.createElement("h1");
    title.className = "self-center text-lg font-semibold";
    title.textContent = elem.title;

    const description = document.createElement("p");
    description.className =
      "text-sm border border-gray-300 rounded-md p-2";
    description.textContent = elem.description;

    const category = document.createElement("h4");
    category.className = "text-sm font-semibold";
    category.textContent = `Category: ${elem.category}`;

    const priority = document.createElement("h4");
    priority.className = "text-sm font-semibold";
    priority.textContent = `Priority: ${elem.priority}`;

    const buttonContainer = document.createElement("div");
    buttonContainer.className =
      "flex items-center justify-between mt-2";

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className =
      "px-5 py-2 rounded-md bg-red-700 text-white hover:bg-red-600 active:scale-95";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      taskData.splice(index, 1);
      renderData();
    });

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className =
      "px-5 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-600 active:scale-95";
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
      titleInp.value = elem.title;
      descriptionInp.value = elem.description;
      categoryDropdown.value = elem.category;
      selectedPriority = elem.priority;

      // Check corresponding radio button
      document
        .querySelector(`input[name="priority"][value="${elem.priority}"]`)
        ?.click();

      taskData.splice(index, 1);
      renderData();
    });

    buttonContainer.append(deleteBtn, editBtn);

    card.append(
      title,
      description,
      category,
      priority,
      buttonContainer
    );

    container.appendChild(card);
  });
}

// Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInp.value.trim();
  const description = descriptionInp.value.trim();
  const category = categoryDropdown.value;

  // Validation
  if (title === "") {
    alert("Task title is required.");
    titleInp.focus();
    return;
  }

  if (description === "") {
    alert("Task description is required.");
    descriptionInp.focus();
    return;
  }

  if (category === "") {
    alert("Please select a category.");
    categoryDropdown.focus();
    return;
  }

  if (selectedPriority === "") {
    alert("Please select a priority.");
    return;
  }

  // Add Task
  taskData.push({
    title,
    description,
    category,
    priority: selectedPriority,
  });

  renderData();

  // Reset Form
  form.reset();
  selectedPriority = "";
});

