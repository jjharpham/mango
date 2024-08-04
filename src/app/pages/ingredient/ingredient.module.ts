import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IngredientPage } from './ingredient.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientPage,
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    IngredientPage,
  ]
})
export class IngredientModule {}
