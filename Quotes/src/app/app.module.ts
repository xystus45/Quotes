import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quotes-details/quotes-details.component';
import { HighlightQuoteDirective } from "./HighlightQuoteDirective";
import { DateRangePipe } from './data-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightQuoteDirective,
    DateRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
