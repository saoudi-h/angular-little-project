import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{
  ingredients:Ingredient[] = [
    new Ingredient("Sucre",500),
    new Ingredient("Ananas",2),
    new Ingredient("chocolat",3)
  ];
}
