import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test',
      'https://cdn.pixabay.com/photo/2015/04/04/20/49/label-707080_960_720.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe( 'Another Test Recipe',
      'This is test',
      'https://cdn.pixabay.com/photo/2015/04/04/20/49/label-707080_960_720.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
  }
}
