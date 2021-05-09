import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Citizen } from '../../models/citizen.model';
import { CitizenService } from '../services/citizen.service';
import { Task } from '../../models/task.model';
import { TaskService } from '../../Task/services/task.service';
import { CitizenDto } from '../../models/citizenDto.model';
import { CitizenTask } from '../../models/citizentask.model';

@Component({
  selector: 'app-citizen-register-edit',
  templateUrl: './citizen-register-edit.component.html',
  styleUrls: ['./citizen-register-edit.component.css']
})
export class CitizenRegisterEditComponent implements OnInit {

  citizenForm: FormGroup;
  isEdit: boolean;
  citizen: Citizen;
  citizenDto: CitizenDto;
  tasks: Task[];
  tasksGetted: Task[] = [];
  title;
  get firstName() { return this.citizenForm.get('firstName'); }
  get surName() { return this.citizenForm.get('surName'); }
  get dni() { return this.citizenForm.get('dni'); }
  get search() { return this.citizenForm.get('search'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private citizenService: CitizenService,
    private taskService: TaskService,
    private toastr: ToastrService,
    private router: Router

  ) { }

  ngOnInit() {
    this.citizenForm = this.createForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.title = "Ciudadano - Edición"
      this.isEdit = true;
      this.getData(id);
    } else {
      this.isEdit = false;
      this.title = "Ciudadano - Registro"
      this.citizenDto = new CitizenDto();
      this.citizenDto.tasks = [];
    }
  }

  getData(id) {
    this.citizenService.getById(id).subscribe(res => {
      this.citizen = res;
      this.citizenDto = new CitizenDto();
      this.citizenDto.tasks = []; 
      this.citizenDto.id = this.citizen.id;
      this.citizenDto.dni = this.citizen.dni;
      this.citizenDto.firstName = this.citizen.firstName;
      this.citizenDto.surName = this.citizen.surName;
      this.citizenDto.tasks = this.citizen.citizenTasks.map(taskR => {
        return taskR.task;
      })
      this.firstName.patchValue(this.citizenDto.firstName);
      this.surName.patchValue(this.citizenDto.surName);
      this.dni.patchValue(this.citizenDto.dni);
    })
  }

  onDelete(id) {
    this.citizenDto.tasks = this.citizenDto.tasks.filter(x => x.id != id);
  }
  createForm() {
    let group = {
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      dni: ['', Validators.required],
      search: [''],
    }
    return this.fb.group(group);
  }

  onAdd(taskId) {
    this.citizenDto.tasks.push(this.tasksGetted.find(x => x.id == taskId));
    this.tasksGetted = this.tasksGetted.filter(x => x.id != taskId);
  }
  onSubmit() {
    if (this.citizenForm.valid) {
      if (this.isEdit) {
        this.citizen.firstName = this.firstName.value;
        this.citizen.surName = this.surName.value;
        this.citizen.dni = parseInt(this.dni.value);
        var citizenTasks = this.citizenDto.tasks.map(task => {
          let citizenTask = new CitizenTask();
          citizenTask.taskID = task.id;
          citizenTask.citizenID = this.citizenDto.id;
          return citizenTask;
        });
        this.citizen.citizenTasks = citizenTasks;
        this.citizenService.update(this.citizen).subscribe(res => {
          this.toastr.success("Se completó con éxito", "Éxito");
          this.router.navigate(['/citizen-list']);
        })
      } else {
        this.citizen = new Citizen;
        this.citizen.firstName = this.firstName.value;
        this.citizen.surName = this.surName.value;
        this.citizen.dni = parseInt(this.dni.value);
        var citizenTasks = this.citizenDto.tasks.map(task => {
          let citizenTask = new CitizenTask();
          citizenTask.taskID = task.id;
          citizenTask.citizenID = 0;
          return citizenTask;
        })
        this.citizen.citizenTasks = citizenTasks;
        this.citizenService.create(this.citizen).subscribe(res => {
            this.toastr.success("Se completó con éxito", "Éxito");
            this.router.navigate(['/citizen-list']);
        })
      }

    } else {
      this.toastr.error("Ingrese todos los campos obligatorios.");
    }
  }
  onSearch() {
    this.taskService.getByName(this.search.value).subscribe(res => {
      this.tasksGetted = [];
      res.forEach(taskGet => {
        if(!this.citizenDto.tasks.some(c => c.id == taskGet.id)){
          this.tasksGetted.push(taskGet);
        }
      })
    })
  }
}

