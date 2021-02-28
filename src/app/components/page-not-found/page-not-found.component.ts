import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="flexbox">
      <div class="header">
        <h1><i class="bi bi-search"></i></h1>
      </div>
      <div class="content">
        <span>Oops, looks like the page you are looking for does not exist.</span>
        <span>Check if your website adress is correct.</span>
      </div>
    </div>
  `,
  styles: [
    '.flexbox { display: flex; flex-wrap: wrap; align-items: center; margin-top: 100px; }',
    '.header { width: 100% }',
    'h1 { text-align: center; }',
    '.content { width: 100%; text-align: center; margin-top: 50px; }',
    'span { font-weight: 600; width: 100%; display: inline-block; line-height: 1.6; font-size: 1.3em; }'
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
