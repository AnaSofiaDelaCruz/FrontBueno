import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './services/alumno.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  
  


  constructor(private alumnoService: AlumnoService){}
  
  alumnosArray:any = []
  ngOnInit(): void{
    this.alumnoService.getAlumno().subscribe(resp=>{
    console.log(resp)
    this.alumnosArray = resp;
    })
  }
    
  
  
}
