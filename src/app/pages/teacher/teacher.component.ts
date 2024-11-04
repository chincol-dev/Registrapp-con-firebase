import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
    console.log('TeacherComponent inicializado, listo para mostrar la lista de clases.');
  }
}
