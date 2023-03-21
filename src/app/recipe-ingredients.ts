import { Ferments } from "./ferments";
import { Ingredients } from "./ingredients";
import { MainDough } from "./main-dough";
import { RecipeFormula } from "./recipe-formula";

export interface RecipeIngredients {
    recipeFormula: RecipeFormula,
    ingredients: Ingredients,
    mainDough: MainDough,
    ferments: Ferments
}
