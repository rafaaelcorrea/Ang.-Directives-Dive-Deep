import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';
import { BetterBasicHighlightDirective } from './better-basic-highlight-directive/better-basic-highlight-directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterBasicHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
