import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quotes';

@Component({
  selector: 'app-quote-datails',
  templateUrl: './quote-datails.component.html',
  styleUrls: ['./quote-datails.component.scss']
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