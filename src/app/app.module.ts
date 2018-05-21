import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';
import {FormsModule} from "@angular/forms";
import { BComponentComponent } from './b-component/b-component.component';
import { DComponentComponent } from './c-component/d-component/d-component.component';
import { EComponentComponent } from './c-component/e-component/e-component.component';
import {NameService} from "./name.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent,
    BComponentComponent,
    DComponentComponent,
    EComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
