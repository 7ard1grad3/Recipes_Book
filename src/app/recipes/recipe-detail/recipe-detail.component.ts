import { RecipesService } from './../recipes.service';
import { Component, OnInit, Input } from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private recipe: Recipe;
  private id: number;
  constructor(
    private _shoppingListService: ShoppingListService,
    private _recipesService: RecipesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    /*Track parameters change by async subscription*/
    this._activatedRoute.params.subscribe(
        /*Wait for data within callback*/
        (_parameters: Params) => {
          this.id = +_parameters['id'];
          this.recipe = this._recipesService.getRecipe(this.id);
        }
    );
  }

  addIngrediebtsToShoppoingList() {
      this._shoppingListService.setIngredients(this.recipe.ingredients);
  }
  deleteRecipe(id: number) {
    this._recipesService.deleteRecipe(id);
    this._router.navigate(['../'], {relativeTo: this._activatedRoute});
  }

}
