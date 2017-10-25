import { Recipe } from './../recipes/recipe.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { RecipesService } from './../recipes/recipes.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/RX';
@Injectable()
export class DataStorageService {

  private URL = 'https://ng-recipebook-79c34.firebaseio.com/recipes.json';
  constructor(
    private _http: HttpClient,
    private _recipesService: RecipesService,
    private _authService: AuthService
  ) { }

  storeRecipes() {
    const token = this._authService.getToken();
    // observe propery stands for subscription HttpEvent that can be compared with HttpEventType
    return this._http.put(this.URL, this._recipesService.getRecipes(),
    {
      observe: 'events',
      // headers: new HttpHeaders().set('Authorization', 'Bearer asdasdasd'),
      // params: new HttpParams().set('auth', token)
    });
  }
  getRecipes() {
    const token = this._authService.getToken();
    // By adding <> TypeScript will know which data to receive
    return this._http.get<Recipe[]>(this.URL).map(
      (response) => {
        return response;
      }
    );
  }
}
