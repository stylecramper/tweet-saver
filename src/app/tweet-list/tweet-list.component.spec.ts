import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StorageServiceModule } from 'angular-webstorage-service';

import { TweetListComponent } from './tweet-list.component';
import { TweetItemComponent } from '../tweet-item/tweet-item.component';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetListComponent,
        TweetItemComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        DragDropModule,
        StorageServiceModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
