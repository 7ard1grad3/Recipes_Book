import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class ShoppingListService {
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditin = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

  constructor() { }

  getIngredients() {
    return this.ingredients; // Return copy of instance
  }
  getIngredient(index: number) {
    return this.ingredients[index]; // Return copy of instance
  }
  setIngredient(_ingredient: Ingredient) {
      this.ingredients.push(_ingredient);
      this.ingredientAdded.next(this.ingredients);
  }
  setIngredients(_ingredients: Ingredient[]) {
        /*      for (const ingredient of _ingredients) {
          this.ingredients.push(ingredient);
      }*/
      this.ingredients.push(..._ingredients); // 3 dots separates objects to single object
      this.ingredientAdded.next(this.ingredients);
  }
  updateingredient(index: number, newIgredient: Ingredient) {
    this.ingredients[index] = newIgredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
