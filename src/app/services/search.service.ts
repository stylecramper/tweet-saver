import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Tweet, TweetListType } from './search.tweet.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private SEARCH_URL = 'http://tweetsaver.herokuapp.com/';
  private RESULT_LIMIT = 10;
  public tweetCache: TweetListType = { tweets: [] };

  constructor(
    private http: HttpClient
  ) { }

  search(searchData: any): Observable<boolean> {
    return this.http.jsonp(`${this.SEARCH_URL}?q=${searchData.searchterm}&count=${this.RESULT_LIMIT}`, 'callback')
    .pipe(
      map(data => {
        const tweetData = data['tweets'];
        this.tweetCache.tweets = tweetData.map((tweet) => {
          return new Tweet(tweet.text, tweet.createdAt, tweet.user);
        });
        return true;
      }),
      catchError((e: Error) => {
        return throwError(`${ e.message }`);
      })
    );
  }
}
