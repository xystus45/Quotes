import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quotes-details/quotes-details.component';
import { HighlightQuoteDirective } from "./HighlightQuoteDirective";
import { DateRangePipe } from './data-range.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightQuoteDirective,
    DateRangePipe,
    QuoteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
