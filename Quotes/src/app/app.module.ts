import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { HighlightDirective } from './highlight.directive';
import { DataRangePipe } from './data-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    HighlightDirective,
    DataRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
