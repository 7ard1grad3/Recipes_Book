import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/* Creating a list of routes */

const appRoutes: Routes =
[
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'recipes'
    , loadChildren: './recipes/recipe.module#RecipeModule'
    , canActivate: [AuthGuard]
    } // Because of string path, lazy loading will be loaded
    // { path: '404', component: PageNotFoundComponent},
    // { path: '404', component: PageNotFoundComponent, data: {message: 'Page not found!'}},
    // { path: '**', redirectTo: '/404'} // ** must be in the end of routes
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
