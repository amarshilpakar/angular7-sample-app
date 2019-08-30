import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = 'lodgy-design';  
  mainTab: boolean = true;
  mainMenu: Array<any> = [
    {
      "id": 1,
      "name": "News",
      "active": false,
      "route": "news",
      "toggleChild": false,
      "child": [
        {
          "id": 0,
          "parentid": 1,
          "mainMenuChild": true,
          "name": "Articles",
          "active": false,
          "route": "news/articles"
        },
        {
          "id": 1,
          "parentid": 1,
          "mainMenuChild": true,
          "name": "Archive",
          "active": false,
          "route": "news/archive"
        },
        {
          "id": 2,
          "parentid": 1,
          "mainMenuChild": true,
          "name": "Press material",
          "active": false,
          "route": "news/press-material"
        }
      ]
    },
    {
      "id": 2,
      "name": "Games",
      "active": false,
      "route": "games",
      "toggleChild": false,
      "child": [
        {
          "id": 0,
          "parentid": 2,
          "mainMenuChild": true,
          "name": "Angry Birds",
          "active": false,
          "route": "games/angry-birds"
        },
        {
          "id": 1,
          "parentid": 2,
          "mainMenuChild": true,
          "name": "More",
          "active": false,
          "route": "games/more"
        }
      ]
    },
    {
      "id": 3,
      "name": "Careers",
      "active": false,
      "route": "careers",
      "toggleChild": false,
      "child": [
        {
          "id": 0,
          "parentid": 3,
          "mainMenuChild": true,
          "name": "Life at Lodgy",
          "active": false,
          "route": "careers/life-at-lodgy"
        },
        {
          "id": 1,
          "parentid": 3,
          "mainMenuChild": true,
          "name": "Employee Stories",
          "active": false,
          "route": "careers/employee-stories"
        },
        {
          "id": 2,
          "parentid": 3,
          "mainMenuChild": true,
          "name": "Our Teams",
          "active": false,
          "route": "careers/our-teams"
        }
      ]
    },
    // {
    //   "id": 4,
    //   "name": "Investors",
    //   "active": false,
    //   "route": "investors",
    //   "toggleChild": false,
    //   "child": [
    //     {
    //       "id": 0,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Lodgy as investment",
    //       "active": false,
    //       "route": "investors/lodgy-as-investment"
    //     },
    //     {
    //       "id": 1,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Financials",
    //       "active": false,
    //       "route": "investors/financials"
    //     },
    //     {
    //       "id": 2,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Lodgy share",
    //       "active": false,
    //       "route": "investors/lodgy-share"
    //     },
    //     {
    //       "id": 3,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Shareholders",
    //       "active": false,
    //       "route": "investors/shareholders"
    //     },
    //     {
    //       "id": 4,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Governance",
    //       "active": false,
    //       "route": "investors/governance"
    //     },
    //     {
    //       "id": 5,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Releases and publications",
    //       "active": false,
    //       "route": "investors/releases-and-publications"
    //     },
    //     {
    //       "id": 6,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Investor calendar",
    //       "active": false,
    //       "route": "investors/investor-calendar"
    //     },
    //     {
    //       "id": 7,
    //       "parentid": 4,
    //       "mainMenuChild": true,
    //       "name": "Investor relations",
    //       "active": false,
    //       "route": "investors/investor-relations"
    //     }
    //   ]
    // }
  ]
  subMenu: Array<any> = [
    {
      "id": 1,
      "name": "ABOUT US",
      "active": false,
      "route": "about-us",
      "toggleChild": false,
      "child": [
        {
          "id": 0,
          "parentid": 1,
          "mainMenuChild": false,
          "name": "Leadership team",
          "active": false,
          "route": "about-us/leadership-team"
        }
      ]
    },
    {
      "id": 2,
      "name": "LICENSING",
      "active": false,
      "route": "licensing",
      "toggleChild": false,
      "child": []
    },
    {
      "id": 3,
      "name": "CONTACT US",
      "active": false,
      "route": "contact",
      "toggleChild": false,
      "child": []
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router) { 
      router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(event => {
        if(event.url != '/'){
          this.mainTab = false;
          if(sessionStorage.mainMenu) {
            this.mainMenu = JSON.parse(sessionStorage.mainMenu);
          }
          if(sessionStorage.subMenu) {
            this.subMenu = JSON.parse(sessionStorage.subMenu);
          }
        }
      });
      
    }

  toogleNavigation(name) {
    $('body > header').removeClass('child-nav-open');
    $('html').removeClass('search-open').toggleClass('navigation-open');
  }

  toogleSearch(name) {
    $('body > header').removeClass('child-nav-open');
    $('html').removeClass('navigation-open').toggleClass('search-open');
    $('#search #edit-keywords').blur();
  }
   
  selectTab(item) {
    $('body > header').removeClass('child-nav-open');
    $('html').removeClass('search-open').removeClass('navigation-open');
    for(var i =0; i< this.mainMenu.length;i++){
      this.mainMenu[i].active = false;
      if(this.mainMenu[i].child.length >0) {
        var child = this.mainMenu[i].child;
        for(var k=0; k < child.length;k++) {
          child[k].active = false;
        }
      }
    }
    for(var j =0; j< this.subMenu.length;j++){
      this.subMenu[j].active = false;
      if(this.subMenu[j].child.length >0) {
        var subChild = this.subMenu[j].child;
        for(var l=0; l < subChild.length;l++) {
          subChild[l].active = false;
        }
      }
    }
    item.active = true;
    if(item.parentid) {
      if(item.mainMenuChild) {
        var parentItem = this.mainMenu.find(
          x => x.id == item.parentid
        )
        if(parentItem) {
          parentItem.active = true;
        }
      } else {
        var parentItem = this.subMenu.find(
          x => x.id == item.parentid
        )
        if(parentItem) {
          parentItem.active = true;
        }
      }
    }
    sessionStorage.mainMenu = JSON.stringify(this.mainMenu);
    sessionStorage.subMenu = JSON.stringify(this.subMenu);
    this.router.navigate(['/'+item.route]);    
  }  

  toggleChild(item) {
    for(var i =0; i< this.mainMenu.length;i++){
      if(item.id != this.mainMenu[i].id) {
        this.mainMenu[i].toggleChild = false;  
      }          
    }
    for(var j =0; j< this.subMenu.length;j++){
      if(item.id != this.subMenu[j].id) {
        this.subMenu[j].toggleChild = false;  
      }  
    }
    if(item.toggleChild) {
      item.toggleChild = false;
    } else {
      item.toggleChild = true;
    }
    
  }

  ngOnInit() {    
  }

}
