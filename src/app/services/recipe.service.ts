import { Injectable } from '@angular/core';
import recipes from '@assets/recipes.json';
import { Recipe } from '@models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public get$(): Observable<Recipe[]> {
    return of(recipes.map(x => new Recipe(x as unknown as Partial<Recipe>)));
  }

}