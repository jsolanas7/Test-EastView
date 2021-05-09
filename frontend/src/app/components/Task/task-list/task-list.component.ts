import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  constructor(
    private TaskService: TaskService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }
  
  getData(){
    this.TaskService.getAll().subscribe(res => {
      this.tasks = res;
    })
  }

  onOpen(id: number){
    this.router.navigate(['/task-register-edit/', id]);
  }

  onDelete(id: number){
    this.TaskService.delete(id).subscribe(res => {
        this.toastr.success("Se eliminó con éxito", "Éxito" );
        this.getData();
    })
  }

}
