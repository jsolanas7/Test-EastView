import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
// import { task } from '../../models/citizen.model';
import { TaskService } from '../services/task.service';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-register-edit',
  templateUrl: './task-register-edit.component.html',
  styleUrls: ['./task-register-edit.component.css']
})
export class TaskRegisterEditComponent implements OnInit {
  days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  taskForm: FormGroup;
  isEdit: boolean;
  task: Task;
  title;
  get description() { return this.taskForm.get('description'); }
  get date() { return this.taskForm.get('date'); }
  get name() { return this.taskForm.get('name'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private TaskService: TaskService,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit() {
    this.taskForm = this.createForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.title = "Task - Edición"
      this.isEdit = true;
      this.getData(id);
    } else {
      this.isEdit = false;
      this.title = "Task - Registro"
    }
  }

  getData(id) {
    this.TaskService.getById(id).subscribe(res => {
      this.task = res;
      this.description.patchValue(this.task.description);
      this.date.patchValue(this.task.date);
      this.name.patchValue(this.task.name);
    })
  }
  createForm() {
    let group = {
      description: ['', Validators.required],
      date: ['Lunes', Validators.required],
      name: ['', Validators.required]
    }
    return this.fb.group(group);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if(this.isEdit){
        this.task.description = this.description.value;
        this.task.date = this.date.value;
        this.task.name = this.name.value;
        this.TaskService.update(this.task).subscribe(res => {
            this.toastr.success("Se completó con éxito", "Éxito");
            this.router.navigate(['/task-list']);
        })
      }else{
        this.task = new Task;
        this.task.description = this.description.value;
        this.task.date = this.date.value;
        this.task.name = this.name.value;
        this.TaskService.create(this.task).subscribe(res => {
            this.toastr.success("Se completó con éxito", "Éxito");
            this.router.navigate(['/task-list']);
        })
      }
      
    } else {
      this.toastr.error("Ingrese todos los campos obligatorios.");
    }
  }

  changeCity(e) {
    this.date.setValue(e.target.value, {
      onlySelf: true
    })
  }
}
