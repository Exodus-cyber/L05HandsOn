import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page implements OnInit {
  public chapters = [
    {
      title2: "Chapter 2 | The Middle",
      url: "/chapter2"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
