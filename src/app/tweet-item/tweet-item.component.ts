import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent implements OnInit {
  @Input() handle: string;
  @Input() name: string;
  @Input() profileImageUrl: string;
  @Input() date: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
