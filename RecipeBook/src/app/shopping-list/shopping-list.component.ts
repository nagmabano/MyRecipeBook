import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from './shopping-list.service';
//import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ShoppingListActions from './store/shopping-list.actions';
//import * as fromShoppingList from './store/shopping-list.reducers';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  //private subscription: Subscription;

    shoppingListState: Observable<{ingredients: Ingredient[]}>;
  //ingredients:Ingredient[];

  constructor(//private shoppingListService: ShoppingListService, 
              private store: Store<fromApp.AppState>) { }

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
    //this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}