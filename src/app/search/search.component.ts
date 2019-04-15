import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  private FRIENDLY_ERROR = 'We\'re sorry, something has prevented fetching tweets.';
  private errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.searchForm = this.fb.group({
      searchterm: [ '', Validators.required ]
    });
  }

  doSearch(form) {
    this.errorMessage = '';
    this.searchService.search(form.value)
      .subscribe((res) => {
        console.log('res', res);
      }, (err) => {
        console.log('err', err);
        this.errorMessage = this.FRIENDLY_ERROR;
      });
  }

}
