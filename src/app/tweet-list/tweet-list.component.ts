import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

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
  private STORAGE_KEY = 'savedTweets';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.tweetCache = this.searchService.tweetCache;
    this.savedTweets = { tweets: this.storage.get(this.STORAGE_KEY) || [] };
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.storage.set(this.STORAGE_KEY, this.savedTweets.tweets);
    }
  }

}
