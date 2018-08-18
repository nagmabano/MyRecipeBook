import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeRecipes(){
        const token = this.authService.getToken();
        //const header = new HttpHeaders().set('authorization' , 'hdbvhdvhvdbhf'); 
        
       return this.httpClient.put('https://ng-recipe-book-9a4ab.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
          observe: 'body',
          params: new HttpParams().set('auth', token)
          //headers: header  // it wont work with firebase but generally it could be a way
       });
    }

    fetchRecipes(){
        const token = this.authService.getToken();
    
        //return this.httpClient.get<Recipe[]>('https://ng-recipe-book-9a4ab.firebaseio.com/recipes.json?auth=' + token)
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-9a4ab.firebaseio.com/recipes.json?auth=' + token,{
            observe: 'body',
            responseType: 'json'
        })        
        .map(
            (recipes)=>{
                console.log(recipes); 
                //const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);                        
                        recipe['ingredients']=[];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
        );

        
    }

}