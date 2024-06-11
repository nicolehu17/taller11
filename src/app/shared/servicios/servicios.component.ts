import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicio/service.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [
    {"servicios": ["1", "X","El servicio x es un servicio..."]},
    {"servicios": ["2", "Y","El servicio y es un servicio..."]},
    {"servicios": ["3", "Z","El servicio z es un servicio..."]},

  ]; 

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe(data => {
      this.servicios = data;
    });
  }
}
