export function getCurrentDate() {
  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  const completeDate = `${day}/${month}/${year}`;
  return completeDate;
}

export function SaveDoneRecipe(doneRecipeObject) {
  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (allDoneRecipes) {
    localStorage.setItem('doneRecipes',
      JSON.stringify([...allDoneRecipes, doneRecipeObject]));
  } else {
    localStorage.setItem('doneRecipes',
      JSON.stringify([{ doneRecipeObject }]));
  }
}
