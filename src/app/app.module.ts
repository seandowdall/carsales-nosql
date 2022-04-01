import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { CarlistComponent } from './carlist/carlist.component';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
