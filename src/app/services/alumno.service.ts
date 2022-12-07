import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private servicio: HttpClient) { }
  
  getAlumno():Observable<any> {
    return this.servicio.get('http://54.159.148.250/alumnos');
    //return this.servicio.get('http://localhost:');
  }
}

