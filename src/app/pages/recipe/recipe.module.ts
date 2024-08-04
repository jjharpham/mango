import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipePage } from './recipe.page';
import { IngredientListComponent } from 'src/app/shared/ingredient-list/ingredient-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RecipePage,
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IngredientListComponent,
  ],
  declarations: [
    RecipePage,
    RecipeDetailComponent,
  ]
})
export class RecipeModule {}
