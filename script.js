/* ---------------- To-Do App ---------------- */
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value;
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
  }
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

loadTasks();

/* ---------------- Product Listing ---------------- */
const products = [
  { name: "Laptop", category: "electronics", price: 800 },
  { name: "Shirt", category: "clothing", price: 30 },
  { name: "Phone", category: "electronics", price: 500 },
  { name: "Jeans", category: "clothing", price: 60 }
];

function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `<h3>${p.name}</h3>
                     <p>Category: ${p.category}</p>
                     <p>Price: $${p.price}</p>`;
    productList.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  let filtered = [...products];
  
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

displayProducts(products);
