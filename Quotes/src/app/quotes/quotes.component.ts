import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.","Dr. Suess","Anthony",0,0,new Date(2019,0,22)), 
    new Quote(2,"Great minds discuss ideas; average minds discuss events; small minds discuss people.","Eleanor Roosevelt","Publisher",0,0,new Date(2019,1,22)),
    
  ]

  quoteSubmission(quote){
    quote.id +=1;
    quote.actualDate = new Date(quote.actualDate);
    this.quotes.push(quote);
  }

  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`Are you sure you want to delete this Quote`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  upVote(upVoting,index){
    if(upVoting){
      this.quotes[index].upvotes +=1;
    }
  }
  downVote(downVoting,index){
    if(downVoting){
      this.quotes[index].downVote +=1;
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}