import { Recipe } from './../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private _dataStorageService: DataStorageService, private _recipesService: RecipesService) {

  }
  onSave() {
    this._dataStorageService.storeRecipes().subscribe(
      (resposne) => {
        console.log(resposne);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onFatch() {
    this._dataStorageService.getRecipes().subscribe(
      (resposne: Recipe[]) => {
        this._recipesService.updateRecipes(resposne);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
