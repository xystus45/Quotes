import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;

  @Output() vote = new EventEmitter<boolean>();
  @Output() downvote = new EventEmitter<boolean>();
  @Output() quoteDelete = new EventEmitter<boolean>();

  
  deleteQuote(complete:boolean){
    this.quoteDelete.emit(complete);
  }

  upVote(countVote:boolean){
    this.vote.emit(countVote);
  }
  downVote(countDownVote:boolean){
    this.downvote.emit(countDownVote);
  }
  constructor() { }

  ngOnInit() {
  }

}