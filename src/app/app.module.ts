import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetItemComponent } from './tweet-item/tweet-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TweetListComponent,
    TweetItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatTooltipModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
