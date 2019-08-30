import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  id:string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
      router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(event => {
        this.id = this.route.snapshot.params["id"];
        console.log(this.id);
      });
    }

  ngOnInit() {
    
  }

  gotoDetail(path) {
    this.router.navigate(['/'+path]);  
  }

}
