const hasText = (value) =>
  value !== null && value !== undefined && String(value).trim() !== "";

export const getMealDbIngredients = (recipe) => {
  if (!recipe) {
    return [];
  }

  const items = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredient = recipe[`strIngredient${i}`];
    if (!hasText(ingredient)) {
      continue;
    }

    const measure = recipe[`strMeasure${i}`];
    items.push({
      ingredient: String(ingredient).trim(),
      measure: hasText(measure) ? String(measure).trim() : "",
    });
  }

  return items;
};

export const getLocalIngredients = (recipe) => {
  if (!recipe || !Array.isArray(recipe.ingredients)) {
    return [];
  }

  return recipe.ingredients
    .filter((item) => hasText(item))
    .map((item) => ({
      ingredient: String(item).trim(),
      measure: "",
    }));
};

export const getRecipeIngredients = (recipe, isApiRecipe) =>
  isApiRecipe ? getMealDbIngredients(recipe) : getLocalIngredients(recipe);

export const getInstructionContent = (recipe) => {
  if (!recipe) {
    return null;
  }

  if (
    Array.isArray(recipe.preparationSteps) &&
    recipe.preparationSteps.some((step) => hasText(step))
  ) {
    return {
      type: "steps",
      steps: recipe.preparationSteps
        .filter((step) => hasText(step))
        .map((step) => String(step).trim()),
    };
  }

  if (!hasText(recipe.strInstructions)) {
    return null;
  }

  const text = String(recipe.strInstructions).trim();
  const lines = text
    .split(/\r?\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > 1) {
    return { type: "steps", steps: lines };
  }

  return { type: "text", text };
};
