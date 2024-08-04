import { Injectable } from '@angular/core';
import ingredients from '@assets/ingredients.json';
import { Ingredient } from '@models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {

  public get$(): Observable<Ingredient[]> {
    return of(ingredients.map(x => new Ingredient(x)));
  }

}