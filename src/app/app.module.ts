import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormGenerationComponent } from './component/form-generation/form-generation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGenerationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
