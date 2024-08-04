import { Component } from '@angular/core';
import { Recipe } from '@models';

@Component({
  selector: 'mango-recipe',
  templateUrl: 'recipe.page.html',
})
export class RecipePage {

  public results = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];

  public egg = true;

  public recipes: Recipe[] = [
    {
      id: 'omlette',
      name: 'Omlette',
      ingredients: {
        "egg": 1,
      },
      tags: [],
    }

  ];

}
