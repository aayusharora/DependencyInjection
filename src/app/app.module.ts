import { TOKEN1, TOKEN2, TOKEN3 } from './token';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: TOKEN1, useValue: 'api/v5/dialogflow'},
    {provide: TOKEN2, useValue: 'api/v5/docs'},
    {provide: TOKEN3, useValue: 'api/v5/contact'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
