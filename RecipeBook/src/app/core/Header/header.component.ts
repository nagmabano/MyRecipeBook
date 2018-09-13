import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
import { Store } from "@ngrx/store";
//import { HttpEvent, HttpEventType } from "@angular/common/http";
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']

})
export class HeaderComponent implements OnInit{

    authState: Observable<fromAuth.State>;

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService,
                private store: Store<fromApp.AppState>){}

   /*  @Output()
    featureEvent = new EventEmitter<string>();


    onSelect(feature: string){
            this.featureEvent.emit(feature);       
    } */

    ngOnInit(){
        this.authState = this.store.select('auth');
    }

    onSaveData(){
        this.dataStorageService.storeRecipes()
        .subscribe(
            (response)=>{
                console.log(response);                
        },
        (error: Response)=>{
            console.log(error);            
        }
    );
}
    onFetchData(){
        this.dataStorageService.fetchRecipes();
    }

    onLogout(){
        this.authService.logout();
    }

    // isAuthenticated(){
    //     return this.authService.isAuthenticated();
    // }
}