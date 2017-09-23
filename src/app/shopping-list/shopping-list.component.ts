import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "./shopping-list.service";
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private _shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
      this.ingredients = this._shoppingListService.getIngredients();
      this._shoppingListService.ingredientAdded.subscribe(
          (_ingredient: Ingredient)=>{
            this.addIngredient(_ingredient);
          }
      );
  }

  addIngredient(_ingredient: Ingredient) {
    this._shoppingListService.setIngredient(_ingredient);
  }
}