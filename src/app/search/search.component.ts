import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    searchService: SearchService
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
    
  }

}
