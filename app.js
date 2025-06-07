// Stores the array of meals
const mealEntries = [];
// Grabs form element
const form = document.getElementById("meal-form");

function saveMeal() {
  // Associate the form with the formdata object
  const formData = new FormData(form);

  // Create a meal object and add it to meals array
  const meal = {
    name: formData.get("name"),
    calories: parseInt(formData.get("calories")),
    protein: parseInt(formData.get("protein")),
  };

  mealEntries.push(meal);
}

// function to display meal entries array in the food log section
function renderMealsLog() {
  // Grab the element where the entries should be displayed and clear it
  const log = document.getElementById("food-log");

  // Clear for re render
  log.innerHTML = "";

  mealEntries.forEach((meal) => {
    const mealElem = createMealElement(meal);
    log.appendChild(mealElem);
  });
}

function renderStats() {
  // Grab elements to display stats
  const stats = document.getElementById("stats");
  const caloriesStat = document.getElementById("calories-stat");
  const proteinStat = document.getElementById("protein-stat");

  // Calculate the totals from meal entries
  const caloricTotal = calculateCaloricTotal();
  const proteinTotal = calculateProteinTotal();

  // Update corresponding elements in stats div
  caloriesStat.textContent = `${caloricTotal}`;
  proteinStat.textContent = `${proteinTotal}g`;
}

// Function to calculate the total calories from all the meals in meals array
function calculateCaloricTotal() {
  let caloricTotal = 0;
  mealEntries.forEach((meal) => {
    caloricTotal += meal.calories;
  });

  console.log(caloricTotal);

  return caloricTotal;
}

// Function to calculate the total protein from all the meals in meals array
function calculateProteinTotal() {
  let proteinTotal = 0;
  mealEntries.forEach((meal) => {
    proteinTotal += meal.protein;
  });

  return proteinTotal;
}

function createMealElement(meal) {
  // Create elements and then set their values and class
  const mealContainer = document.createElement("div");
  const mealName = document.createElement("p");
  const mealCalories = document.createElement("p");
  const mealProtein = document.createElement("p");

  mealName.textContent = meal.name;
  mealCalories.textContent = `${meal.calories} cals`;
  mealProtein.textContent = `protein ${meal.protein}g`;

  mealContainer.classList.add("meal__card");
  mealName.classList.add("mealInfo", "meal__card-name");
  mealCalories.classList.add("mealInfo", "meal__card-calories");
  mealProtein.classList.add("mealInfo", "meal__card-protein");

  // Append all the elements to meal container and return the element
  mealContainer.appendChild(mealName);
  mealContainer.appendChild(mealCalories);
  mealContainer.appendChild(mealProtein);

  return mealContainer;
}

// Event Listener for the submit event that will save the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveMeal();
  renderMealsLog();
  renderStats();
});
