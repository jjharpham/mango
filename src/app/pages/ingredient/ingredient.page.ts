import { Component } from '@angular/core';
import { Ingredient } from '@models';
import { IngredientService } from '@services';
import { Observable } from 'rxjs';

@Component({
  selector: 'mango-ingredient',
  templateUrl: 'ingredient.page.html',
})
export class IngredientPage {

  public ingredients$: Observable<Ingredient[]> = this.ingredientService.get$();

  public constructor(
    private ingredientService: IngredientService,
  ) {}

}
