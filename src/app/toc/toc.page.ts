import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1",
      title2: "Chapter 2 | The Middle",
      url2: "/chapter2",
      title3: "Chapter 3 | The End",
      url3: "/chapter3"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
