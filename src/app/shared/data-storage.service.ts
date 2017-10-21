import { RecipesService } from './../recipes/recipes.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/RX';
@Injectable()
export class DataStorageService {

  private URL = 'https://ng-recipebook-79c34.firebaseio.com/recipes.json';
  constructor(private _http: Http, private _recipesService: RecipesService) { }

  storeRecipes() {
    return this._http.put(this.URL, this._recipesService.getRecipes());
  }
  getRecipes() {
    return this._http.get(this.URL).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
