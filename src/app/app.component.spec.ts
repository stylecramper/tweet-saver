import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetItemComponent } from './tweet-item/tweet-item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        TweetListComponent,
        TweetItemComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        DragDropModule,
        HttpClientModule,
        HttpClientJsonpModule,
        StorageServiceModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tweet-saver'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tweet-saver');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tweet Saver');
  });
});
