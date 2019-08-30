import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-life-at-lodgy',
  templateUrl: './life-at-lodgy.component.html',
  styleUrls: ['./life-at-lodgy.component.css']
})
export class LifeAtLodgyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  openPosition() {
    var menu = JSON.parse(sessionStorage.mainMenu);
    menu[2].child[0].active = false;
    sessionStorage.mainMenu = JSON.stringify(menu);
    sessionStorage.openPosition = "true";
    this.router.navigate(['/careers']); 
  }

}
