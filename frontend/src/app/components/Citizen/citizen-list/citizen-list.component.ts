import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../services/citizen.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Citizen } from '../../models/citizen.model';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.css']
})
export class CitizenListComponent implements OnInit {

  citizens: Citizen[] = [];
  constructor(
    private citizenService: CitizenService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }
  
  getData(){
    this.citizenService.getAll().subscribe(res => {
      this.citizens = res;
    })
  }

  onOpen(id: number){
    this.router.navigate(['/citizen-register-edit/', id]);
  }

  onDelete(id: number){
    this.citizenService.delete(id).subscribe(res => {
        this.toastr.success("Se eliminó con éxito", "Éxito" );
        this.getData();
    })
  }

}
