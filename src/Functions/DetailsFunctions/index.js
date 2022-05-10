function handleStartButton(id, setIsStartButtonOn) {
  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (allDoneRecipes) {
    const isRecipeDone = allDoneRecipes.some((doneRecipe) => doneRecipe.id === id);
    setIsStartButtonOn(!isRecipeDone);
  }
}

export default handleStartButton;
