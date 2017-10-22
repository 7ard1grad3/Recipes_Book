import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RecipesService } from '../recipes/recipes.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [HeaderComponent, HomeComponent],
    imports: [ CommonModule, SharedModule, AppRoutingModule ],
    exports: [AppRoutingModule, HeaderComponent],
    providers: [ShoppingListService, RecipesService, DataStorageService, AuthService, AuthGuard],
})
export class CoreModule {}
