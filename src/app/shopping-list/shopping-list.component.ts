import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private _shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
      this.ingredients = this._shoppingListService.getIngredients();
      this.subscription = this._shoppingListService.ingredientAdded.subscribe(
        (_ingredients: Ingredient[]) => {
          this.ingredients = _ingredients;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

  addIngredient(_ingredient: Ingredient) {
    this._shoppingListService.setIngredient(_ingredient);
  }

  onEditItem(index: number) {
    this._shoppingListService.startedEditin.next(index);
  }
}
