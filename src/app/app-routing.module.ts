import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { GamesComponent } from './games/games.component';
import { CareersComponent } from './careers/careers.component';
import { InvestorsComponent } from './investors/investors.component';
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

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'investors', component: InvestorsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'licensing', component: LicensingComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'news/articles', component: ArticlesComponent },
  { path: 'news/archive', component: ArchiveComponent },
  { path: 'news/press-material', component: PressMaterialComponent },
  { path: 'games/angry-birds', component: GameComponent },
  { path: 'games/more', component: MoreComponent },
  { path: 'careers/life-at-lodgy', component: LifeAtLodgyComponent },
  { path: 'careers/employee-stories', component: EmployeeStoriesComponent },
  { path: 'careers/our-teams', component: OurTeamsComponent },
  { path: 'investors/financials', component: FinancialsComponent },
  { path: 'investors/lodgy-as-investment', component: LodgyAsInvestmentComponent },
  { path: 'investors/lodgy-share', component: LodgyShareComponent },
  { path: 'investors/shareholders', component: ShareholdersComponent },
  { path: 'investors/governance', component: GovernanceComponent },  
  { path: 'investors/releases-and-publications', component: ReleasesAndPublicationsComponent },
  { path: 'investors/investor-calendar', component: InvestorCalendarComponent },
  { path: 'investors/investor-relations', component: InvestorRelationsComponent },
  { path: 'about-us/leadership-team', component: LeadershipTeamComponent },
  { path: 'careers/employee-story/:id', component: EmployeeDetailComponent },
  { path: 'careers/our-teams/:id', component: TeamDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 }
