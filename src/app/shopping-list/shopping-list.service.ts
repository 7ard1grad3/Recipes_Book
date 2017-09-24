import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

  constructor() { }

  getIngredients() {
    return this.ingredients; // Return copy of instance
  }
  setIngredient(_ingredient: Ingredient) {
      this.ingredients.push(_ingredient);
      this.ingredientAdded.emit(this.ingredients);
  }
  setIngredients(_ingredients: Ingredient[]) {
        /*      for (const ingredient of _ingredients) {
          this.ingredients.push(ingredient);
      }*/
      this.ingredients.push(..._ingredients); // 3 dots separates objects to single object
      this.ingredientAdded.emit(this.ingredients);
  }
}