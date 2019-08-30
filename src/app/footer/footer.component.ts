import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  careersTab: boolean = false;
  investorsTab: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
      console.log(this.router.url);
      if(this.router.url == '/careers') {
        this.careersTab = true;
        this.investorsTab = false;
      } else if(this.router.url.indexOf('/investors') != -1) {
        this.careersTab = false;
        this.investorsTab = true;
      } else {
        this.careersTab = false;
        this.investorsTab = false;
      }
    }

  ngOnInit() {
  }

}
