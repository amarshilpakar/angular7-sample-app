import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(sessionStorage.openPosition == "true") {
      sessionStorage.openPosition = "false";
      let outer = document.getElementById('openPosition');
      let outerTop = outer.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
      window.scrollTo(0, outerTop);
    }
  }

  seePosition() {
    let outer = document.getElementById('openPosition');
    let outerTop = outer.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    window.scrollTo(0, outerTop);
  }

}
