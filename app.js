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
    calories: formData.get("calories"),
    protein: formData.get("protein"),
  };

  mealEntries.push(meal);
  console.log(mealEntries);
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

function createMealElement(meal) {
  // Create elements and then set their values and class
  const mealContainer = document.createElement("div");
  const mealName = document.createElement("p");
  const mealCalories = document.createElement("p");
  const mealProtein = document.createElement("p");

  mealName.textContent = `Name: ${meal.name}`;
  mealCalories.textContent = `kcal: ${meal.calories}`;
  mealProtein.textContent = `Protein: ${meal.protein}`;

  mealName.classList.add("mealInfo");
  mealCalories.classList.add("mealInfo");
  mealProtein.classList.add("mealInfo");

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
});
