import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';
import { TweetListType } from '../services/search.tweet.model';
import { TweetItemComponent } from '../tweet-item/tweet-item.component';

@Component({
  selector: 'tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {
  public tweetCache: TweetListType;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.tweetCache = this.searchService.tweetCache;
  }

}
