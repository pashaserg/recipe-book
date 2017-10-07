import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test',
      'http://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png', [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Test Recipe',
      'This is test',
      'https://truffle-assets.imgix.net/bd5f9ea8-ho-emily-615-chicken-schnitzel-thumbnail-16x9-v01.png', [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
