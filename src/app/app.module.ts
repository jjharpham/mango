import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from 'src/app/shared/ingredient-list/ingredient-list.component';
import { IngredientPage, RecipeDetailComponent, RecipePage, ShoppingListPage } from '@pages';

@NgModule({
  declarations: [
    AppComponent,
    IngredientPage,
    RecipePage,
    ShoppingListPage,
    IngredientListComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
