import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../Citizen/services/citizen.service';
import { Citizen } from '../models/citizen.model';
import { CitizenDto } from '../models/citizenDto.model';

@Component({
  selector: 'app-witchview',
  templateUrl: './witchview.component.html',
  styleUrls: ['./witchview.component.css']
})
export class WitchviewComponent implements OnInit {
  citizensDto: CitizenDto[] = [];
  citizensDtoToShow: CitizenDto[] = [];
  citizens: Citizen[] = [];
  date;
  days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

  constructor(
    private citizenService: CitizenService
  ) { }

  ngOnInit() {
    this.date = this.getDay();

    this.getData();
  }

  getDay() {
    let n = new Date().getDay();
    switch (n) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miercoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      case 6:
        return 'Sabado';
    }
  }

  getData() {
    this.citizenService.getAll().subscribe(res => {
      this.citizens = res;
      this.citizensDto = this.citizens.map(item => {
        let citizenC = new CitizenDto();
        citizenC.tasks = [];
        citizenC.id = item.id;
        citizenC.dni = item.dni;
        citizenC.firstName = item.firstName;
        citizenC.surName = item.surName;
        citizenC.tasks = item.citizenTasks.map(taskR => {
          return taskR.task;
        })
        return citizenC;
      });
      this.citizensDtoToShow = this.citizensDto;

      this.filterDay(this.date);

    });
  }

  onShow(id, status) {
    this.citizensDtoToShow.find(x => x.id == id).show = status;
  }

  onChange(day) {
    this.filterDay(this.date);
  }

  filterDay(day) {
    this.citizensDtoToShow = this.citizensDto.map(citizen => {
      let citizenDtoC = new CitizenDto();
      citizenDtoC.dni = citizen.dni;
      citizenDtoC.firstName = citizen.firstName;
      citizenDtoC.surName = citizen.surName;
      citizenDtoC.id = citizen.id;
      citizenDtoC.tasks = [...citizen.tasks];
      citizenDtoC.tasks = citizenDtoC.tasks.filter(x => x.date == day)
      return citizenDtoC;
    });
  }
}
