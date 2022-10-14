import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('this is a msg from the right side');
  }

}
