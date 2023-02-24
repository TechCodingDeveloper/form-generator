import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormGenerationComponent } from './component/form-generation/form-generation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    FormGenerationComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
       NgbDatepickerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
