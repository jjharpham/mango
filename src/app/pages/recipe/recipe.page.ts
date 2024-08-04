import { Component } from '@angular/core';

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

}
