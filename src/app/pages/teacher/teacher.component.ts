import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  qrCodeValue: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // Asignar el valor del QR directamente
    this.qrCodeValue = 'https://example.com';

    // Aquí puedes agregar lógica adicional si es necesario
    console.log('TeacherComponent inicializado, listo para mostrar la lista de clases.');
  }
}
