import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // template: ` <h2>Welcome Sandeep</h2>`,
  template: `
    /**
     * can do
     * /
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    
    <h2>{{ siteUrl}}</h2>
  `,

  styleUrls: [],
})
export class TestComponent implements OnInit {
  public name = 'SANDEEP';
  public siteUrl = window.location.href;

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
