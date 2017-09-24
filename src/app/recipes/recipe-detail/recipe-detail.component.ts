import { Component, OnInit, Input } from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngrediebtsToShoppoingList() {
      this._shoppingListService.setIngredients(this.recipe.ingredients);
  }

}
