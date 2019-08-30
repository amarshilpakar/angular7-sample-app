import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  id:string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
      router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(event => {
        this.id = this.route.snapshot.params["id"];
        window.scrollTo(0, 0);
      });
    }

  ngOnInit() {
    
  }

  gotoDetail(path) {
    this.router.navigate(['/'+path]);  
  }

}
