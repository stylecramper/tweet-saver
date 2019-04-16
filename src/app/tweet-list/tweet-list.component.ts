import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  public savedTweets: TweetListType;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.tweetCache = this.searchService.tweetCache;
    this.savedTweets = { tweets: [] };
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
