import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-employee-stories',
  templateUrl: './employee-stories.component.html',
  styleUrls: ['./employee-stories.component.css']
})
export class EmployeeStoriesComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  gotoDetail(path) {
    this.router.navigate(['/'+path]);  
  }

}
