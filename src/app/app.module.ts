import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { GamesComponent } from './games/games.component';
import { CareersComponent } from './careers/careers.component';
import { InvestorsComponent } from './investors/investors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LicensingComponent } from './licensing/licensing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArchiveComponent } from './archive/archive.component';
import { PressMaterialComponent } from './press-material/press-material.component';
import { GameComponent } from './game/game.component';
import { MoreComponent } from './more/more.component';
import { LifeAtLodgyComponent } from './life-at-lodgy/life-at-lodgy.component';
import { EmployeeStoriesComponent } from './employee-stories/employee-stories.component';
import { OurTeamsComponent } from './our-teams/our-teams.component';
import { LodgyAsInvestmentComponent } from './lodgy-as-investment/lodgy-as-investment.component';
import { FinancialsComponent } from './financials/financials.component';
import { LodgyShareComponent } from './lodgy-share/lodgy-share.component';
import { ShareholdersComponent } from './shareholders/shareholders.component';
import { GovernanceComponent } from './governance/governance.component';
import { ReleasesAndPublicationsComponent } from './releases-and-publications/releases-and-publications.component';
import { InvestorCalendarComponent } from './investor-calendar/investor-calendar.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { LeadershipTeamComponent } from './leadership-team/leadership-team.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    GamesComponent,
    CareersComponent,
    InvestorsComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    LicensingComponent,
    ContactUsComponent,
    ArticlesComponent,
    ArchiveComponent,
    PressMaterialComponent,
    GameComponent,
    MoreComponent,
    LifeAtLodgyComponent,
    EmployeeStoriesComponent,
    OurTeamsComponent,
    LodgyAsInvestmentComponent,
    FinancialsComponent,
    LodgyShareComponent,
    ShareholdersComponent,
    GovernanceComponent,
    ReleasesAndPublicationsComponent,
    InvestorCalendarComponent,
    InvestorRelationsComponent,
    LeadershipTeamComponent,
    EmployeeDetailComponent,
    TeamDetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
