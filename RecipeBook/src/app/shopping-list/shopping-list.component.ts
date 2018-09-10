import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

    shoppingListState: Observable<{ingredients: Ingredient[]}>;
  //ingredients:Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private store: Store<{shoppingList: 
  {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    //this.ingredients = this.shoppingListService.getIngredients();
    //  this.subscription = this.shoppingListService.ingredientChanged.subscribe(
    //   (ingredients: Ingredient[])=>{
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

}
