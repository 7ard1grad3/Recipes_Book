import { AuthService } from '../auth/auth.service';
import { RecipesService } from './../recipes/recipes.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/RX';
@Injectable()
export class DataStorageService {

  private URL = 'https://ng-recipebook-79c34.firebaseio.com/recipes.json';
  constructor(
    private _http: Http,
    private _recipesService: RecipesService,
    private _authService: AuthService
  ) { }

  storeRecipes() {
    const token = this._authService.getToken();
    return this._http.put(this.URL + '?auth=' + token, this._recipesService.getRecipes());
  }
  getRecipes() {
    const token = this._authService.getToken();
    return this._http.get(this.URL + '?auth=' + token).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
