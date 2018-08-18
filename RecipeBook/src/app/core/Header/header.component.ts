import { Component, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
//import { HttpEvent, HttpEventType } from "@angular/common/http";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']

})
export class HeaderComponent{

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService){}

   /*  @Output()
    featureEvent = new EventEmitter<string>();


    onSelect(feature: string){
            this.featureEvent.emit(feature);       
    } */

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

    isAuthenticated(){
        return this.authService.isAuthenticated();
    }
}