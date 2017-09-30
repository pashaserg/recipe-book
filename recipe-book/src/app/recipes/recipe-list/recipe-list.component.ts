import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe( 'A Test Recipe', 'This is test', 'https://cdn.pixabay.com/photo/2015/04/04/20/49/label-707080_960_720.png'),
  new Recipe( 'A Test Recipe', 'This is test', 'https://cdn.pixabay.com/photo/2015/04/04/20/49/label-707080_960_720.png')
];
  constructor() {

  }

  ngOnInit() {
  }

}
