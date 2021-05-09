import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/Task/task-list/task-list.component';
import { TaskRegisterEditComponent } from './components/Task/task-register-edit/task-register-edit.component';
import { CitizenListComponent } from './components/Citizen/citizen-list/citizen-list.component';
import { CitizenRegisterEditComponent } from './components/Citizen/citizen-register-edit/citizen-register-edit.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateAuthGuard } from './guards/can-activate-auth.guard';
import { HomeComponent } from './components/home/home.component';
import { WitchviewComponent } from './components/witchview/witchview.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [CanActivateAuthGuard], children: [
    {
      path: '', component: TaskListComponent
    },
    {
      path: 'citizen-list', component: CitizenListComponent
    },
    {
      path: 'citizen-register-edit/:id', component: CitizenRegisterEditComponent
    },
    {
      path: 'citizen-register-edit', component: CitizenRegisterEditComponent
    },
    {
      path: 'task-list', component: TaskListComponent
    },
    {
      path: 'task-register-edit/:id', component: TaskRegisterEditComponent
    },
    {
      path: 'task-register-edit', component: TaskRegisterEditComponent
    },
    {
      path: 'witch-view', component: WitchviewComponent
    }
  ],
  },
  // {path: 'home', component: TaskListComponent, canActivate: [CanActivateAuthGuard]},
  // {path: 'citizen-list', component: CitizenListComponent, canActivate: [CanActivateAuthGuard]},
  // {path: 'citizen-register-edit/:id', component: CitizenRegisterEditComponent, canActivate: [CanActivateAuthGuard]},
  // {path: 'citizen-register-edit', component: CitizenRegisterEditComponent, canActivate: [CanActivateAuthGuard]},
  // {path: 'task-list', component: TaskListComponent, canActivate: [CanActivateAuthGuard]},
  // {path: 'task-register-edit/:id', component: TaskRegisterEditComponent, canActivate: [CanActivateAuthGuard]},
  // {path: 'task-register-edit', component: TaskRegisterEditComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
