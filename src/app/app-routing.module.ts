import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FileExplorerComponent} from './components/file-explorer/file-explorer.component';
import { BoardComponent } from './components/board/board.component';
import { AssignmentComponent } from './components/assignment/assignment.component';

// guard
import { AuthGuard, LoginGuard } from './shared/auth.guard';
import { NewBoardComponent } from './components/new-board/new-board.component';
import { ContributionComponent } from './components/contribution/contribution.component';
import { FilesComponent } from './components/files/files.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'contribution',
    component: ContributionComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'file-explorer',
    component: FileExplorerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'folder/:id',
    component: FilesComponent,
  },
  {
    path: 'assignment',
    component: AssignmentComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'creative-board',
    component: NewBoardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
