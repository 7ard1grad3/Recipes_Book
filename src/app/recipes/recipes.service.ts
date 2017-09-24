import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Raspberry Bakewell cake',
        'This simple almondy cake is a great way of using up pick-your-own raspberries',
        'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--559459_11.jpg?itok=Dg7CFR8B'
        ,[
            new Ingredient('eggs', 2),
            new Ingredient('tsp vanilla extract', 1),
            new Ingredient('tbsp flaked almond', 2),
        ]),
      new Recipe('SANDYS CHOCOLATE CAKE RECIPE',
          'Years ago, I drove 4-1/2 hours to a cake contest, ' +
          'holding my entry on my lap the whole way. But it paid off. ' +
          'One bite and youll see why this velvety beauty won first prize.' +
          'Sandra Johnson, Tioga, Pennsylvania',
          'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps957_TH143195C09_04_4b.jpg'
          ,[
              new Ingredient('cup butter, softened', 1),
              new Ingredient('cups packed brown sugar', 3),
              new Ingredient('large eggs', 4),
              new Ingredient('teaspoons vanilla extract', 2),
          ]),
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice(); //Will return copy of array because of slice method
  }

}
