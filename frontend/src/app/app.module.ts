import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskListComponent } from './components/Task/task-list/task-list.component';
import { TaskRegisterEditComponent } from './components/Task/task-register-edit/task-register-edit.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpInterceptorProviders } from './interceptors';
import { CitizenListComponent } from './components/Citizen/citizen-list/citizen-list.component';
import { CitizenRegisterEditComponent } from './components/Citizen/citizen-register-edit/citizen-register-edit.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WitchviewComponent } from './components/witchview/witchview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CitizenListComponent,
    TaskListComponent,
    TaskRegisterEditComponent,
    CitizenRegisterEditComponent,
    TaskListComponent,
    LoginComponent,
    HomeComponent,
    WitchviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 2000 , enableHtml: true}),
    ReactiveFormsModule
  ],
  exports:[
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
